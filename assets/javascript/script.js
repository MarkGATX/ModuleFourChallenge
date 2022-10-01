// define global variable to keep track of current question
let questionNumber = 0;
// set global variable of score
let score = 0
// set up highscore array for local storage
scoresArray = [[0,0]];
// Define variables for DOM manipulation
let highScores = document.querySelector("#highScores");
let mainText = document.querySelector(".main");
let inputSection = document.querySelector(".choices");
let feedbackSection = document.querySelector(".results");
let start = document.querySelector(".start");
let seeHighScores = document.querySelector("#highScores");
//variables for creating answer lists
let questList = document.createElement("ul");
let questChoice0 = document.createElement("li");
let questChoice1 = document.createElement("li");
let questChoice2 = document.createElement("li");
let questChoice3 = document.createElement("li");
// Define questions for quiz
let questionsObject = {
    question0: {
        question: "What is the opening tag on every HTML page?",
        choices: ["<!DOCTYPE html>", "<head>", "<html>", "<body>"],
        answer: "<!DOCTYPE html>"
    },
    question1: {
        question: "What is the CSS attribute that changes text color?",
        choices: ["color", "font", "background", "border"],
        answer: "color"
    }
};
//convert questions from object to array
questionArray = Object.values(questionsObject);


// Set event listener to High Scores button -- need to make function
// seeHighScores.addEventListener("click", showHighScores);

// Set the start button
start.addEventListener("click", startQuiz);

// The quiz function itself
function startQuiz() {
    console.log(questionNumber);
    console.log(questionArray);
    console.log(questionArray[questionNumber]["question"])
    //Replace main text with question
    mainText.textContent = questionArray[questionNumber]["question"];

    // populate choices as li 
    questList.setAttribute("class", "possAnswers");
    questChoice0.setAttribute("class", "guess0");
    questChoice1.setAttribute("class", "guess1");
    questChoice2.setAttribute("class", "guess2");
    questChoice3.setAttribute("class", "guess3");
    inputSection.appendChild(questList);
    questChoice0.textContent = questionArray[questionNumber].choices[0];;
    questList.appendChild(questChoice0);
    questChoice1.textContent = questionArray[questionNumber].choices[1];;
    questList.appendChild(questChoice1);
    questChoice2.textContent = questionArray[questionNumber].choices[2];;
    questList.appendChild(questChoice2);
    questChoice3.textContent = questionArray[questionNumber].choices[3];;
    questList.appendChild(questChoice3);
    //Add event listener for clicks on li choices
    // Do I need to do this on every run of startQuiz
    document.querySelector(".guess0").addEventListener("click", checkGuess);
    document.querySelector(".guess1").addEventListener("click", checkGuess);
    document.querySelector(".guess2").addEventListener("click", checkGuess);
    document.querySelector(".guess3").addEventListener("click", checkGuess);
    return;
}

function checkGuess(event) {
    //returns text value of click event
    console.log(event.path[0].textContent);
    console.log(questionArray[questionNumber]["answer"]);
    if (event.path[0].textContent === questionArray[questionNumber]["answer"]) {
        questionNumber++;
        console.log(questionNumber);
        feedbackSection.textContent = "Correct!";
        score += 5;
    } else {
        questionNumber++;
        feedbackSection.textContent = "Wrong!";
    }
    if (questionNumber === questionArray.length) {
        finalScore();
    } else {
        startQuiz();
    }
}

function finalScore() {
    console.log("end of question array");
    //show end of game
    mainText.textContent = "Finished!";
    inputSection.textContent = "Your final score is: " + score;
    // check for high scores
    var latestScores = JSON.parse(localStorage.getItem("highScores"));
    console.log(latestScores)
    //initialize scores variable if doesn't already exist in local storage
    if (latestScores === null) {
        latestScores = scoresArray;
        localStorage.setItem("highScores", JSON.stringify(latestScores))
        console.log(latestScores);
        //print results to screen
        inputSection.innerHTML = '<p>Your final score is: ' + score + '.</p> <h2>New High Score!</h2><label for="initials">Enter your initials:</label> <input type="text" name="initials" class="initials"></input><button class="initialSubmit">Submit</button>';
        //add event listener for button
        var hsSubmitButton = document.querySelector(".initialSubmit");
        hsSubmitButton.addEventListener("click", logHighScores);
        console.log(hsSubmitButton);
    } else {
        //check to see if top ten scores
        highScoresLength = latestScores.length;
        for (i = 0; i < highScoresLength; i++) {
            if (score < latestScores[i][1]) {
                if (highScoresLength === 10) {
                    inputSection.innerHTML = '<p>Your final score is: ' + score + '.</p>  <button class="playAgain">playAgain?</button>';
                    let startAgain = document.querySelector(".playAgain");
                    startAgain.addEventListener("click", startQuiz);
                    return;
                } else {
                    inputSection.innerHTML = '<p>Your final score is: ' + score + '.</p> <h2>New High Score!</h2><label for="initials">Enter your initials:</label> <input type="text" name="initials" class="initials"></input><button class="initialSubmit">Submit</button>';
                    //add event listener for button
                    var hsSubmitButton = document.querySelector(".initialSubmit");
                    hsSubmitButton.addEventListener("click", logHighScores);
                }
            }
        }

    }
}

function logHighScores() {
    console.log(score);
    hsInitials = document.querySelector(".initials").value;
    console.log(hsInitials);
    var latestScores = JSON.parse(localStorage.getItem("highScores"));
    console.log(latestScores.length);
    highScoresLength = latestScores.length;
    //find location in high scores array for latest high score
    for (i = 0; i < highScoresLength; i++) {
        console.log(latestScores[i][1]);
        if (score >= latestScores[i][1]) {
            if (i === 0) {
                latestScores.unshift([hsInitials, score]);
                if (latestScores > 10) {
                    latestScores.pop();
                }
            } else if (i === 10) {
                latestScores.pop();
                latestScores.push([hsInitials, score]);
            } else {

                latestScores.splice(i, 0, [hsInitials, score]);
                if (latestScores.length > 10) {
                    latestScores.pop();
                }
            }
            
        }
    }
    //save new high scores
    console.log(latestScores);
    localStorage.setItem("highScores", JSON.stringify(latestScores));
}