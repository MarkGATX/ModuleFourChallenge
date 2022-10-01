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
    question1: {
        question: "What is the opening tag on every HTML page?",
        choices: ["<!DOCTYPE html>", "<head>", "<html>", "<body>"],
        answer: "<!DOCTYPE html>"
    },
    question2: {
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
    // for (let i = 0; i < questions.length; i++) {

    // }
    console.log(questions);
    console.log(questions.question1["question"]);
    console.log(questions.question1.choices[0]);
    mainText.innerHTML = questions.question1["question"];
    //populate choices
    questList.setAttribute("class","choices")
    inputSection.appendChild(questList);
    questChoice0.textContent = questions.question1.choices[0];
    questList.appendChild(questChoice0);
    questChoice1.textContent = questions.question1.choices[1];
    questList.appendChild(questChoice1);
    questChoice2.textContent = questions.question1.choices[2];
    questList.appendChild(questChoice2);
    questChoice3.textContent = questions.question1.choices[3];
    questList.appendChild(questChoice3);
    guessListener = document.querySelector(".choices");
    // guessListener.addEventListener("click", checkGuess);
}

//Check to see if guess is correct
function checkGuess() {

}




































//Durstenfeld shuffle - found https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array from user https://stackoverflow.com/users/310500/laurens-holst and edited by https://stackoverflow.com/users/8112776/ashleedawg

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         // console.log(i);
//         const j = Math.floor(Math.random() * (i + 1));
//         // console.log(j);
//         // console.log(array);
//         // console.log([array[i], array[j]]);
//         // console.log([array[j], array[i]]);
//         [array[i], array[j]] = [array[j], array[i]];
//         // console.log([array[i], array[j]]);
//         // console.log([array[j], array[i]]);
//     }
//     console.log(array)
// }
// shuffleArray([1,2,3,4]);
