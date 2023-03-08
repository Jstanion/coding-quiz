//declare all global variables here
let headerEl = document.querySelector("header");
let startButton = document.getElementById("startButton");
let timeEl = document.getElementById("timer");
let questionEl = document.getElementById("questionEl");
let choiceEl = document.getElementById("choiceEl");
let quizContainer = document.getElementById("quiz-container");
let answerEl = document.getElementById("answerEl");
let formEl = document.createElement("form");
let highScore = document.getElementById("highscore");
let intervalId;

//Create variables for timer, timeLeft, and currentQuestionIndex, and set them to initial values.
let timeLeft = 60;
let currentQuestionIndex = 0;

//initial page rendering
questionEl.textContent = "Coding Quiz Challenge";
choiceEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startButton.textContent = "START QUIZ";

// Styling attributes
headerEl.setAttribute("style", "font-family: Arial, sans-serif; display: flex; flex-direction: row; justify-content: space-between; color: green;");
quizContainer.setAttribute("style", "font-family: Arial, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center;");
choiceEl.setAttribute("style", "width: 40rem; text-align: center");
startButton.setAttribute("style", "background-color: green; color: white; border-radius: 25px;")

//Create an array of objects called quizQuestions, where each object has a question property, a choices property which is an array of answer choices, and an answer property that stores the correct answer.
let quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<scripting>", "<script>", "<js>"],
        answer: "<script>"
    },
    {
        question: "Which section(s) is the correct place to insert a JavaScript link?",
        choices: ["<body>", "<head>", "Either One", "Neither One"],
        answer: "Either One"
    },
    {
        question: "JavaScript is the same as Java.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onChange", "onMouseOver", "onMouseClick", "onClick"],
        answer: "onClick"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["x", "-", "*", "="],
        answer: "="
    }
];

//Create a function called displayQuestion.
let displayQuestion = function() {

    // Use the currentQuestionIndex to retrieve the question object from the quizQuestions array.
    let currentQuestion = quizQuestions[currentQuestionIndex];

    // Display the question on the screen.
    questionEl.textContent = currentQuestion.question;
        
    // Display the answer choices on the screen.
    choiceEl.textContent = "";
    currentQuestion.choices.forEach(function(choice) {
        let button = document.createElement("button");
        button.textContent = choice;
        choiceEl.appendChild(button);
        
        // Styling attributes
        choiceEl.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;");
        button.setAttribute("style", "background-color: green; color: white; border-radius: 25px; margin: 10px;");

        // Attach an event listener to each answer choice button so that when the user clicks a button, it calls the checkAnswer function.
        button.addEventListener("click", function() {
            checkAnswer(choice);
        });
    });
};
    
//Create a function called checkAnswer that takes the user's answer as an argument.
let checkAnswer = function(userAnswer) {
    // Use the currentQuestionIndex to retrieve the question object from the quizQuestions array.
    let currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Compare the user's answer to the correct answer for the current question.
    console.log(userAnswer, currentQuestion.answer);
    if (userAnswer === currentQuestion.answer) {
        
        // If the user's answer is correct, increment the score variable and display a message indicating the answer is correct.
        answerEl.textContent = "Correct!";
    } else {
        // If the user's answer is incorrect, decrement the timeLeft variable by 10 seconds and display a message indicating the answer is incorrect.
        timeLeft -= 10;
        answerEl.textContent = "Incorrect!";
    };
    
    // Increment the currentQuestionIndex to move to the next question.
    currentQuestionIndex++;
    
    // If there are no more questions left, call the endGame function. Otherwise, call the displayQuestion function to display the next question.
    if (currentQuestionIndex >= quizQuestions.length) {
        endGame();
    } else {
        displayQuestion();
    };
};
    
// Create a function called startGame.
let startQuiz = function() {

    //remove introduction content
    questionEl.textContent = "";
    choiceEl.textContent = "";
    startButton.style.display = "none";

    // Start the timer using setInterval, which will decrement the timeLeft variable by 1 every second and update the timer display on the screen.
    let countdown = function() {
        intervalId = setInterval(function() {
            timeLeft--;
            timeEl.textContent = "Time: " + timeLeft + " seconds left";
            
            if(timeLeft <= 0) {
                timeEl.textContent = "Out of time!";
                endGame();
            };
        }, 1000);
    };
    countdown();

    // Call the displayQuestion function to display the first question.
    displayQuestion();
};
    
//Create a function called endGame.
function endGame() {
    let button = document.createElement("button");
    clearInterval(intervalId);
    // Display the final score on the screen.
    if(timeLeft >= 1) {
        timeEl.textContent = "Time: " + timeLeft + " seconds left";
        questionEl.textContent = "Conratulations! You finished the quiz.";
        choiceEl.textContent = "Your final score is: " + timeLeft + " point(s)";
    } else {
        questionEl.textContent = "Sorry! You did not finish the quiz in time.";
        choiceEl.textContent = "Your final score is: " + timeLeft + " point(s)";
    };
    
    // Create a form element for the user to enter their initials.
    formEl.innerHTML = `
        <label for="initials">Enter your initials:</label>
        <input type="text" id="initials" name="initials">
        <button type="submit">Save Score</button>
    `;
    quizContainer.appendChild(formEl);
};

//Attach an event listener to the start button element that calls the startGame function when the button is clicked.
startButton.addEventListener("click", function() {
    startQuiz();
});

let renderHighScores = function() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Redirect to high scores page or display high scores on current page
    let HighScoresList = document.getElementById("highscores-list");
   
    highScores.forEach(function(highScore) {

            let highScoreItem = document.createElement("li");
            highScoreItem.textContent = "Initials: " + highScore.initials + " Score: " + highScore.score;
            HighScoresList.appendChild(highScoreItem);
            
            console.log(highScore)
    });
};

//Add event listener for highscore link
highScore.addEventListener("click", function() {
    renderHighScores();
});

// Add an event listener to the form that saves the score to local storage.
formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    let initialsInput = document.getElementById("initials");
    let initials = initialsInput.value.trim();
    if (initials === "") {
      alert("Please enter your initials.");
      return;
    };

    renderHighScores();
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials, score: timeLeft });
    localStorage.setItem("highScores", JSON.stringify(highScores));
});





