function displayResults() {
    // this will build and insert HTML showing the final score and a Restart
    // button
    // stretch goal: also show different message/picture depending on
    // score range
}

function displayQuestion() {
    // this function will build an HTML form, using the STORE object, showing
    // the curent question, the four multiple choice answers, and a Submit
    // button and then insert that form into the DOM
    const question = STORE.questions[STORE.currentQuestion];
    const questionHTML = `
        <form action="#">
            <fieldset>
                <legend>Fill in the missing part of this movie quote:</legend>
                <p>${question.question}</p>
                <img class="movieImg" src="images/sw_ep4_0380.jpg" alt="Scene from Star Wars">`

}

function handleRestartQuiz() {
    // on 'click' of Restart button, reset the score and current question
    // counters and call displayQuestion()
    $('body').on('click','#resartQuiz', e => {
        e.preventDefault();
        console.log("Restart button clicked.");
    })
}

function handleNextQuestion() {
    // on 'click' of Next Question button, this will check if we've 
    // reached the end. if no more questions, call displayResults()
    // if not the end, call displayQuestion()
    // sidenote: maybe make a function endOfQuiz() that returns true/false?
    // sidenote: how do I make the non-Submit buttons (Next Question, Start,
    //  Restart) 'clickable' by hitting Enter?
    $('body').on('click','#nextQuestion', e => {
        e.preventDefault();
        console.log("Next Question button clicked");
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
        console.log("Submit button clicked.");
    })
}

function handleStartQuiz() {
    // on 'click' of Start button, this will call
    // displayQuestion()
    $('body').on('click','#startQuiz', e => {
        e.preventDefault();
        console.log("Start button clicked");
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