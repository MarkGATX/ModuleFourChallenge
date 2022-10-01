// define global variable to keep track of current question
questionNumber = 0;

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
    // guessListener = document.getElementsByClassName("guess");
    // console.log(guessListener);
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
}