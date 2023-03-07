//declare all global variables here
let startButton = document.getElementById("startButton");
let timeEl = document.getElementById("timer");
let questionEl = document.getElementById("questionEl");
let choiceEl = document.getElementById("choiceEl");
let quizContainer = document.getElementById("quiz-container");
let answerEl = document.getElementById("answerEl");

//Create variables for timer, timeLeft, and currentQuestionIndex, and set them to initial values.
let timer = 60;
let score = 0;
let timeLeft = 60;
let currentQuestionIndex = 0;

//initial page rendering
questionEl.textContent = "Coding Quiz Challenge";
choiceEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startButton.textContent = "START QUIZ";

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
            question: "JavaScript is the same as Java",
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
        choiceEl.innerHTML = "";
        currentQuestion.choices.forEach(function(choice) {
            let button = document.createElement("button");
            button.textContent = choice;
            choiceEl.appendChild(button);
            button.addEventListener("click", function() {
                checkAnswer(choice);
            });
        });
    };
        // Attach an event listener to each answer choice button so that when the user clicks a button, it calls the checkAnswer function.
    
    //Create a function called checkAnswer that takes the user's answer as an argument.
    let checkAnswer = function(userAnswer) {
        // Use the currentQuestionIndex to retrieve the question object from the quizQuestions array.
        let currentQuestion = quizQuestions[currentQuestionIndex];
      
        // Compare the user's answer to the correct answer for the current question.
        if (userAnswer === currentQuestion.answer) {
          // If the user's answer is correct, increment the score variable and display a message indicating the answer is correct.
          score++;
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
        }
      };
    
// Create a function to start the game when the user clicks the start button. This function should initialize the global variables, start the timer, and display the first question.
    //    Create a function called startGame.
    let startQuiz = function() {

        //remove introduction content
        questionEl.textContent = "";
        choiceEl.textContent = "";
        startButton.style.display = "none";
    
        // Set the initial values for the global variables.
        
    
        // Start the timer using setInterval, which will decrement the timeLeft variable by 1 every second and update the timer display on the screen.
        let countdown = function() {
    
                setInterval(function() {
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

        // Stop the timer using clearInterval.
        clearInterval(timer);
        
        // Display the final score on the screen.
        questionEl.textContent = 
        
        // Provide a form for the user to enter their initials and save their score.
    }


// Attach an event listener to the start button to call the start game function when the button is clicked.
    //Use document.getElementById to select the start button element.


    //Attach an event listener to the start button element that calls the startGame function when the button is clicked.
startButton.addEventListener("click", function() {
    startQuiz();
});
