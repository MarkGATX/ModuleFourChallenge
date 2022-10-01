// define global variable to keep track of current question
questionNumber = 0;

// Define variables for DOM manipulation
let highScores = document.querySelector("#highScores");
let mainText = document.querySelector(".main");
let inputSection = document.querySelector(".choices");
let feedbackSection = document.querySelector(".answers");
let start = document.querySelector(".start");
let seeHighScores = document.querySelector("#highScores");
//variables for creating answer lists
let questList = document.createElement("ul");
let questChoice0 = document.createElement("li");
let questChoice1 = document.createElement("li");
let questChoice2 = document.createElement("li");
let questChoice3 = document.createElement("li");
// Define questions for quiz
let questions = {
    question0: {
        question: "What is the opening tag on every HTML page?",
        choices: ["<!DOCTYPE html>", "<head>", "<html>", "<body>"],
        answer: "<!DOCTYPE html>"
    },
    question1: {
        question: "What is the opening tag on every HTML page?",
        choices: ["<!DOCTYPE html>", "<head>", "<html>", "<body>"],
        answer: "<!DOCTYPE html>"
    }
};
//convert questions from object to array
currentQuestion = Object.values(questions);


// Set event listener to High Scores button -- need to make function
// seeHighScores.addEventListener("click", showHighScores);

// Set the start button
start.addEventListener("click", startQuiz);

// The quiz function itself
function startQuiz() {
    
    mainText.innerHTML = currentQuestion[questionNumber]["question"];
    // populate choices
    questList.setAttribute("class", "choices")
    inputSection.appendChild(questList);
    questChoice0.textContent = currentQuestion[questionNumber].choices[0];;
    questList.appendChild(questChoice0);
    questChoice1.textContent = currentQuestion[questionNumber].choices[1];;
    questList.appendChild(questChoice1);
    questChoice2.textContent = currentQuestion[questionNumber].choices[2];;
    questList.appendChild(questChoice2);
    questChoice3.textContent = currentQuestion[questionNumber].choices[3];;
    questList.appendChild(questChoice3);
    // guessListener = document.querySelector(".choices");
    // guessListener.addEventListener("click", checkGuess);
}

