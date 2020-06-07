function updateQuestionAndScore() {
    // version 1
    // const currentQuestionHTML = `Question: ${STORE.currentQuestion+1}/${STORE.questions.length}`;
    // $('.js-currentQuestion').html(currentQuestionHTML);
    // const currentScoreHTML = `Score: ${STORE.score}`;
    // $('.js-currentScore').html(currentScoreHTML);

    // alternate version
    // this, to me, looks cleaner, but I'm not sure if there is a 
    // performance difference either way
    $('.js-currentQuestion').html(`Question: ${STORE.currentQuestion+1}/${STORE.questions.length}`);
    $('.js-currentScore').html(`Score: ${STORE.score}`);
}
    
function shuffleArray(array) {
    const shuffledArray = [...array];
    let unshuffledLength = shuffledArray.length, randomPosition;
    while (unshuffledLength) {
        randomPosition = Math.floor(Math.random() * unshuffledLength--);
        temp = shuffledArray[randomPosition];
        shuffledArray[randomPosition] = shuffledArray[unshuffledLength];
        shuffledArray[unshuffledLength] = temp;
    }
    return shuffledArray;
}
    
function makeResultsHTML () {
    let resultsHTML = `
    <p>You scored ${STORE.score} out of ${STORE.questions.length}!</p>`
    const scorePercentage = STORE.score / STORE.questions.length;
    if (scorePercentage >= 0.75) {
        resultsHTML += `<p>You did great!</p>
        <img class="movieImg" src="images/rocky.gif" alt="Rocky Balboa with arms raised in victory">`;
    } else if (scorePercentage >= 0.4) {
        resultsHTML += `<p>You did pretty good!</p>
        <p>Keep training!</p>
        <img class="movieImg" src="images/R3u2.gif" alt="Luke Skywalker training with a lightsaber">`;
    } else {
        resultsHTML += `<p>I'm sure you gave it your best, but it just wasn't your day!</p>
        <img class="movieImg" src="images/potatohead.gif" alt="Mr. Potato Head pulling his own arms off">`;
    };
    resultsHTML += `<button id="restartQuiz" class="button" type="submit">Restart Quiz</button>`;
    return resultsHTML;
}

function makeAnswerHTML() {
    // check to see the state of currentQuestionCorrect, and either
    // return the correct answer HTML or the incorrect answer HTML
    let answerHTML = '';
    if (STORE.currentQuestionCorrect) {
        answerHTML += `
        <p>Great job! You got it right!</p>
        <img class="movieImg" src="images/l9Tllo1thElT5gvVOU.gif" alt="a crowd applauding">
        <button id="nextQuestion" class="button" type="submit">${STORE.currentQuestion+1 === STORE.questions.length ? "Show Results" : "Next Question"}</button>`;
    } else {
        answerHTML += `
        <p>Oh no! You didn't get it right.</p>
        <p>The correct quote is:</p>`;
        // use replace() with a regular expression to insert the missing word(s)
        // into the quote
        let question = STORE.questions[STORE.currentQuestion].question;
        let answer = STORE.questions[STORE.currentQuestion].answers[STORE.questions[STORE.currentQuestion].correct];
        answerHTML += `${question.replace(/_+/m, answer)}`;
        answerHTML += `
            <img class="movieImg" src="images/thumbsdown.gif" alt="Joaquin Phoenix giving a thumbs down">
            <button id="nextQuestion" class="button" type="submit">${STORE.currentQuestion+1 === STORE.questions.length ? "Show Results" : "Next Question"}</button>`;
    }
    return answerHTML;
}

function makeQuestionHTML () {
    // this function will build an HTML form, using the STORE object, showing
    // the curent question, the multiple choice answers, and a Submit
    // button and return that HTML
    const question = STORE.questions[STORE.currentQuestion];
    let questionHTML = `
        <form action="#">
        <fieldset>
                <legend>Fill in the missing part of this movie quote:</legend>
                <p>${question.question}</p>
                <img class="movieImg" src="${question.imgSrc}" alt="${question.imgAlt}">`;
                const shuffledAnswers = shuffleArray(question.answers);
    for (let i = 0; i <shuffledAnswers.length; i++) {
        questionHTML += `<label for=${i}><input type="radio" name="answer" id=${i} value="${shuffledAnswers[i]}"> ${shuffledAnswers[i]}</label><br>`
    }
    questionHTML += `
    <button id="submitAnswer" class="button" type="submit">Submit</button>
    <p id="noneSelected" hidden>Please select an answer.</p>
    </fieldset>
    </form>`;
    return questionHTML;
}

function displayResults() {
    // calls makeResultsHTML to get HTML for the final results
    // and pushes that to the DOM
    let resultsHTML = makeResultsHTML();
    $('.js-questionBox').html(resultsHTML);
}

function displayAnswer () {
    // calls makeAnswerHTML to get a HTML string to display whether
    // the previous answer was right or wrong
    let answerHTML = makeAnswerHTML();
    $(".js-questionBox").html(answerHTML);
}

function displayQuestion() {
    // this calls updateQuestionAndScore to update the question and score
    // in the DOM, then calls makeQuestionHTML to get a string of HTML
    // for the question form
    updateQuestionAndScore();
    let questionHTML = makeQuestionHTML();
    $(".js-questionBox").html(questionHTML);
}

function handleRestartQuiz() {
    // on 'click' of Restart button, reset the score and current question
    // counters and call displayQuestion()
    $('body').on('click','#restartQuiz', e => {
        e.preventDefault();
        STORE.currentQuestion = 0;
        STORE.currentQuestionCorrect = null
        STORE.score = 0;
        displayQuestion();
    })
}

function handleNextQuestion() {
    // on 'click' of Next Question button, this will check if we've 
    // reached the end. if no more questions, call displayResults()
    // if not the end, call displayQuestion()
    // sidenote: maybe make a function endOfQuiz() that returns true/false?
    $('body').on('click','#nextQuestion', e => {
        e.preventDefault();
        // reset currentQuestionCorrect to null
        // this may not be strictly necessary for the display, but it keeps the state 
        // logical, because if the question hasn't been answered, it can not be either
        // true (correct) or false (incorrect)
        STORE.currentQuestionCorrect = null;
        STORE.currentQuestion === STORE.questions.length ? displayResults() : displayQuestion();
    })
}


function handleSubmitAnswer() {
    // on 'click' of Submit button on a question, this will compare
    // the selected answer to the stored correct answer.
    // I'm undecided if showing the building of HTML for right answer
    // and wrong answer should be in this function or if I should
    // make rightAnswer() and wrongAnswer() functions.
    // first increment the current question counter, then
    // a right answer will increment the score counter,
    // and display a congratulatory remark and the Next Question button.
    // a wrong answer will display a consoling remark, the correct answer,
    // and the Next Question button.
    $('body').on('click','#submitAnswer', e => {
        e.preventDefault();
        // first we see if a radio button is checked, if nothing is
        // checked $("input[name=answer]:checked").val() will evaluate as undefined
        if ($("input[name=answer]:checked").val()) {
            // then we compare the selected radio button to our correct answer
            // (using the index of the correct answer in our answers array)
            // and show rightAnswer() or wrongAnswer() 
            if ($("input[name=answer]:checked").val() === STORE.questions[STORE.currentQuestion].answers[STORE.questions[STORE.currentQuestion].correct]) {
                // if the question was answered correctly,
                // mark the question as correct and display the answer screen
                STORE.currentQuestionCorrect = true;
                displayAnswer();
                // update the score in STORE and display in the DOM
                STORE.score++;
                updateQuestionAndScore()
                // increment to the next question
                STORE.currentQuestion++;
            } else {
                // if the question was answered incorrectly,
                // mark the question as incorrect and display the answer screen
                STORE.currentQuestionCorrect = false;
                displayAnswer()
                // increment to the next question
                STORE.currentQuestion++;
            }
        } else {
            // if an answer isn't selected, show the hidden
            // <p>Please select an answer.</p>
            $("#noneSelected").removeAttr("hidden");
        }
    })
}

function handleStartQuiz() {
    // on 'click' of Start button, this will call
    // displayQuestion()
    $('body').on('click','#startQuiz', e => {
        e.preventDefault();
        displayQuestion();
    });
}

function handleQuizApp() {
    // here I'm going to call event handler functions for
    // the Start button, Submit answer button, Next Question button,
    // and Restart Quiz button
    handleStartQuiz();
    handleSubmitAnswer();
    handleNextQuestion();
    handleRestartQuiz();
}

$(handleQuizApp);