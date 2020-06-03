const STORE = {
    questions: [
        {//1
            question: "<q>May the _____ be with you.</q> - <cite>Star Wars</cite>, 1977",
            imgSrc: "images/sw_ep4_0380.jpg",
            imgAlt: "Scene from Star Wars",
            answers: [
                "Force",
                "Focus",
                "Horse",
                "Schwartz",
            ],
            correct: 0
        },
        {//2
            question: "<q>Toto, I've got a feeling we're not in ______ anymore</q> - <cite>The Wizard of Oz</cite>, 1939",
            imgSrc: "images/wizard_oz_1939_8.jpg",
            imgAlt: "Scene from The Wizard of Oz",
            answers: [
                "Kansas",
                "Kabul",
                "Kuala Lumpur",
                "Kyoto"
            ],
            correct: 0
        },
        {//3
            question: "<q>You're gonna need a bigger ____.</q> - <cite>Jaws</cite>, 1975",
            imgSrc: "images/jaws_scheider_still.jpg",
            imgAlt: "Scene from Jaws",
            answers: [
                "boat",
                "fishing pole",
                "net",
                "shark"
            ],
            correct: 0
        },
        {//4
            question: "<q>Frankly, my dear, I don't give ______.</q> - <cite>Gone With the Wind</cite>, 1939",
            imgSrc: "images/gone_with_wind_1939_55.jpg",
            imgAlt: "Scene from Gone With the Wind",
            answers: [
                "a damn",
                "a ham",
                "parking validation",
                "up so easily"
            ],
            correct: 0
        },
        {//5
            question: "<q>The first rule of Fight Club is: _________________________________</q> - <cite>Fight Club</cite>, 1999",
            imgSrc: "images/fight_club_1999_6.jpg",
            imgAlt: "Scene from Fight Club",
            answers: [
                "You do not talk about Fight Club.",
                "If it’s your first time, you have to bring chips.",
                "No biting, no eye gouging, no fish hooking.",
                "Try your best.",
                "No running by the pool."
            ],
            correct: 0
        },
        {//6
            question: "<q>You can't handle _________.</q> - <cite>A Few Good Men</cite>, 1992",
            imgSrc: "images/fgm_nicholson_yell.jpg",
            imgAlt: "Scene from A Few Good Men",
            answers: [
                "the truth",
                "my scented candles",
                "me",
                "my swag"
            ],
            correct: 0
        },
        {//7
            question: "<q>Houston, we have _________.</q> - <cite>Apollo 13</cite>, 1995",
            imgSrc: "images/ap_hanks_bacon_paxton_4.jpg",
            imgAlt: "Scene from Apollo 13",
            answers: [
                "a problem",
                "a Martian",
                "a party going on up here",
                "an issue"
            ],
            correct: 0
        },
        {//8
            question: "<q>Leave the gun. Take the _______.</q> - <cite>The Godfather</cite>, 1972",
            imgSrc: "images/55-17250-0castellano-1402504012.png",
            imgAlt: "Scene from The Godfather",
            answers: [
                "cannoli",
                "bullets",
                "body",
                "knife"
            ],
            correct: 0
        },
        {//9
            question: "<q>Every time a bell rings, _______________________.</q> - <cite>It's a Wonderful Life</cite>, 1946",
            imgSrc: "images/its_wonderful_life_1946_0.jpg",
            imgAlt: "Scene from It's a Wonderful Life",
            answers: [
                "an angel gets his wings",
                "I untie my shoestrings",
                "my heart sings",
                "I remember I hate those darn things"
            ],
            correct: 0
        },
        {//10
            question: "<q>My name is Inigo Montoya. You killed my father. _______________</q> - <cite>The Princess Bride</cite>, 1987",
            imgSrc: "images/maxresdefault_4.jpg",
            imgAlt: "Scene from The Princess Bride",
            answers: [
                "Prepare to die.",
                "That was super not cool.",
                "I'm a little miffed, to be honest.",
                "Were you expecting someone else?"
            ],
            correct: 0
        }
    ],
    currentQuestion: 0,
    score: 0,
}