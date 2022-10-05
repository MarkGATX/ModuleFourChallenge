// define global variable to keep track of current question
let questionNumber = 0;
// set global variable of score
let score = 0
// set up highscore array for local storage
scoresArray = [[0, 0]];
// Define variables for DOM manipulation

let mainText = document.querySelector(".mainTextBox");
let inputSection = document.querySelector(".choices");
let feedbackSection = document.querySelector(".results");
let start = document.querySelector(".start");
let seeHighScores = document.querySelector("#highScores");
//variables for creating answer lists
let questList = document.createElement("ul");
let timeLeft = document.querySelector(".timeLeft");
var timerInterval;

// Define questions for quiz
let questionArray = [
    {
        question: "What is the opening tag on every HTML page?",
        choices: ["<!DOCTYPE html>", "<head>", "<html>", "<body>"],
        answer: "<!DOCTYPE html>"
    },
    {
        question: "What is the CSS attribute that changes text color?",
        choices: ["color", "font", "background", "border"],
        answer: "color"
    },
    {
        question: "What command can you use to cause a funtion to fire after waiting a set amount of time?",
        choices: ["setInterval();", "addEventListener();", "createElement();", "setAttribute();"],
        answer: "setInterval();"
    },
    {
        question: "What CSS attribute changes the space between an element's content and its border?",
        choices: ["padding", "margin", "width", "display"],
        answer: "padding"
    },
    {
        question: "Where can you store local data from your page to use between user sessions?",
        choices: ["local storage", "console", "ILE", "Google"],
        answer: "local storage"
    },
    {
        question: "What are the 6-character codes used to describe colors called?",
        choices: ["HEX codes", "RGB", "HSL", "RGBa"],
        answer: "HEX codes"
    },
    {
        question: "How many numbers make up an RGB color code?",
        choices: ["three", "six", "four", "one"],
        answer: "three"
    },
    {
        question: "What is it called with a javascript event causes events in its parent element to fire?",
        choices: ["bubbling", "trickling", "problems", "inheritance"],
        answer: "bubbling"
    },
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hostile Texting Makes Lunch", "Holistic Tech Machine Language", "Harry Took Many Lemons"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What event does the browser register when typing on your keyboard?",
        choices: ["keypress", "hover", "click", "onMouseOver"],
        answer: "keypress"
    }
];


//convert questions from object to array
// questionArray = Object.values(questionsObject);
//shuffle questions array
for (let i = questionArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionArray[i], questionArray[j]] = [questionArray[j], questionArray[i]];

};


//shuffle answers to questions
for (let q = 0; q < questionArray.length; q++) {
    for (let i = questionArray[q].choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionArray[q].choices[i], questionArray[q].choices[j]] = [questionArray[q].choices[j], questionArray[q].choices[i]];
    };
}


//varies the time for the test based on the number of questions: 15 seconds per question
var secondsLeft = questionArray.length * 15;
var secondsScore = 0;


//Set event listener to High Scores button 
seeHighScores.addEventListener("click", showHighScores);


// Set the start button
start.addEventListener("click", startTimer);


//The test timer function --- variable declared without var, let, or const is automatically global?!?!?
function startTimer() {
    timerInterval = setInterval(function () {
        if (secondsLeft <= 0) {
            timeLeft.innerText = 0;
        } else {
            timeLeft.innerText = secondsLeft;
        };
        if (secondsLeft < 25) {
            timeLeft.classList.add("red");
        };
        secondsLeft--;
        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            finalScore();
        }
    }, 1000);
    startQuiz();
}

// The quiz function itself
function startQuiz() {
    //Replace main text with question
    mainText.innerHTML = '<h2>' + questionArray[questionNumber]["question"] + '<h2>';
    //clear choices and response text
    feedbackSection.innerHTML = "";
    inputSection.innerHTML = " ";
    //Refactor to use for loop
    let questListLoop = document.createElement("ul");
    questListLoop.setAttribute("class", "possAnswers");
    inputSection.appendChild(questListLoop);
    for (let i = 0; i < questionArray[questionNumber].choices.length; i++) {
        let questChoiceLoop = document.createElement("li");
        questChoiceLoop.setAttribute("class", "guess" + i + " guessRow");
        questChoiceLoop.textContent = questionArray[questionNumber].choices[i];
        questListLoop.appendChild(questChoiceLoop);
        document.querySelector(".guess" + i).addEventListener("click", checkGuess);
    };
    return;
}

function checkGuess(event) {
    // Refactor to use for loop
    for (let i = 0; i < questionArray[questionNumber].choices.length; i++) {
        document.querySelector(".guess" + i).removeEventListener("click", checkGuess);
    };
    //returns text value of click event
    if (event.target.textContent === questionArray[questionNumber]["answer"]) {
        questionNumber++;
        event.target.classList.add("correct");
        feedbackSection.textContent = "Correct!";
        score += 5;
    } else {
        questionNumber++;
        feedbackSection.textContent = "Wrong!";
        event.target.classList.add("incorrect");
        secondsLeft = secondsLeft - 15;
    }
    if (questionNumber === questionArray.length) {
        //need to stop overall timer and get seconds left
        secondsScore = secondsLeft;
        clearInterval(timerInterval);
        timeLeft.innerText = secondsLeft;
        // pauseTimer();
        setTimeout(finalScore, 1500);
    } else {
        // pauseQuiz();
        if (secondsLeft <= 0) {
            return;
        } else {
            setTimeout(startQuiz, 1500);
        }
    };
}

function finalScore() {
    seeHighScores.addEventListener("click", showHighScores);
    seeHighScores.innerHTML = "<h2>Click Here to see the High Scores</h2>"
    feedbackSection.innerHTML = "";
    //show end of game
    mainText.textContent = "Finished!";
    score = score + secondsScore;
    inputSection.textContent = "Your final score is: " + score;
    // check for high scores
    var latestScores = JSON.parse(localStorage.getItem("highScores"));
    //initialize scores variable if doesn't already exist in local storage
    if (latestScores === null) {
        latestScores = scoresArray;
        localStorage.setItem("highScores", JSON.stringify(latestScores));
        //print results to screen
        inputSection.innerHTML = '<p>Your final score is: ' + score + '.</p> <h2>New High Score!</h2><label for="initials">Enter your initials:</label> <input type="text" name="initials" class="initials" maxlength="15"></input><button class="initialSubmit">Submit</button>';
        //add event listener for button
        var hsSubmitButton = document.querySelector(".initialSubmit");
        hsSubmitButton.addEventListener("click", logHighScores);
    } else {
        //check to see if top ten scores
        var latestScores = JSON.parse(localStorage.getItem("highScores"));
        highScoresLength = latestScores.length;
        for (i = 0; i < highScoresLength; i++) {
            if (score >= latestScores[i][1]) {
                inputSection.innerHTML = '<p>Your final score is: ' + score + '.</p> <h2>New High Score!</h2><label for="initials">Enter your initials:</label> <input type="text" name="initials" class="initials" maxlength="15"></input><button class="initialSubmit">Submit</button>';
                //add event listener for button
                var hsSubmitButton = document.querySelector(".initialSubmit");
                hsSubmitButton.addEventListener("click", logHighScores);
            } else {
                inputSection.innerHTML = '<p>Your final score is: ' + score + '.</p>';
                feedbackSection.innerHTML = '<button class="playAgain">play Again?</button><button class="seeHS">See High Scores</button>';
                let startAgain = document.querySelector(".playAgain");
                startAgain.addEventListener("click", startOver);
                let seeHS = document.querySelector(".seeHS");
                seeHS.addEventListener("click", showHighScores);
            }
        }
    }
}

function logHighScores() {
    hsInitials = document.querySelector(".initials").value;
    var latestScores = JSON.parse(localStorage.getItem("highScores"));
    //Make sure no more than 10 entries in latest scores
    if (latestScores > 10) {
        latestScores.pop();
    }
    highScoresLength = latestScores.length;
    //find location in high scores array for latest high score
    for (i = 0; i < highScoresLength; i++) {
        if (score >= latestScores[i][1]) {
            if (i === 0) {
                //add new score to beginning, then add to i to stop loop
                latestScores.unshift([hsInitials, score]);
                i = i + highScoresLength;
                //double check if latest score only has 10 items
                if (latestScores.length > 10) {
                    latestScores.pop();

                }
            } else if (i === 10) {
                // if at the end of the array, remove the last item and add the new data
                latestScores.pop();
                latestScores.push([hsInitials, score]);
            } else {
                // add new data in the current index
                latestScores.splice(i, 0, [hsInitials, score]);
                //force for loop to close4
                i = i + 10;
                //if latestscore is now > 10, remove the last element
                if (latestScores.length > 10) {
                    latestScores.pop();
                }
            }
        }
    }
    //save new high scores
    localStorage.setItem("highScores", JSON.stringify(latestScores));
    showHighScores();
}

function showHighScores() {
    if (secondsLeft < questionArray.length * 15) {
        clearInterval(timerInterval);
        timeLeft.textContent = "";
    }
    mainText.innerHTML = "<h2 class='highScoreHeader'>High Scores</h2>";
    //get high scores from local storage
    var latestScores = JSON.parse(localStorage.getItem("highScores"));
    inputSection.textContent = "";
    // To get for loop to work with multiple children, must define create element in each loop
    for (let i = 0; i < latestScores.length; i++) {
        var hsPara = document.createElement("p");
        hsPara.setAttribute("class", "highScoreRows")
        hsPara.innerText = latestScores[i][0] + ' - ' + latestScores[i][1];
        inputSection.appendChild(hsPara);
    };
    feedbackSection.innerHTML = '<button class="playAgain">play Again?</button><button class="clearHS">Clear High Scores?</button>';
    let playAgain = document.querySelector(".playAgain");
    playAgain.addEventListener("click", startOver);
    let clearHS = document.querySelector(".clearHS");
    clearHS.addEventListener("click", clearHighScores);
}

function clearHighScores() {
    latestScores = scoresArray;
    localStorage.setItem("highScores", JSON.stringify(latestScores));
    showHighScores();
}

function startOver() {
    location.reload();
}
