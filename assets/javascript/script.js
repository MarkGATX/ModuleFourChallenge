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


// Set event listener to High Scores button -- need to make function
// seeHighScores.addEventListener("click", showHighScores);

// Set the start button
start.addEventListener("click", startQuiz);

// The quiz function itself
function startQuiz() {
    //convert questions from object to array
     for (let i = 0; i < Object.keys(questions).length; i++) {
        console.log(Object.values(questions));
    questionNumber = Object.values(questions);
    console.log(questionNumber[i].choices[0]);
    
    // currentQuestion = "question" + i;
    // console.log(currentQuestion);
    // console.log(Object.values(questions));
    // // console.log(Object.keys(questions).currentQuestion);
    // console.log(Object.entries(questions));

    // console.log(questions.currentQuestion.choices[0]);
    mainText.innerHTML = questionNumber[i]["question"];
    // populate choices
    questList.setAttribute("class", "choices")
    inputSection.appendChild(questList);
    questChoice0.textContent = questionNumber[i].choices[0];;
    questList.appendChild(questChoice0);
    questChoice1.textContent = questionNumber[i].choices[1];;
    questList.appendChild(questChoice1);
    questChoice2.textContent = questionNumber[i].choices[2];;
    questList.appendChild(questChoice2);
    questChoice3.textContent = questionNumber[i].choices[3];;
    questList.appendChild(questChoice3);
    // guessListener = document.querySelector(".choices");
    // guessListener.addEventListener("click", checkGuess);
}
}
