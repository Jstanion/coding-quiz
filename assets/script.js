//Create variables for timer, timeLeft, score, and currentQuestionIndex, and set them to initial values.
let buttonEl = document.getElementById("buttonEl");
let timer = document.getElementById("timer");
let questionEl = document.getElementById("questionEl");
let choiceEl = document.getElementById("choiceEl")

//timer starting time
let timeLeft = 60;

//initial page rendering
questionEl.textContent = "Coding Quiz Challenge";
choiceEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
buttonEl.textContent = "START QUIZ";

// Define an array of objects to store the quiz questions, where each object contains the question text, an array of answer choices, and the correct answer.
    //Create an array of objects called quizQuestions, where each object has a question property, a choices property which is an array of answer choices, and an answer property that stores the correct answer.


// Create a function to start the game when the user clicks the start button. This function should initialize the global variables, start the timer, and display the first question.
    //    Create a function called startGame.
let startQuiz = function() {

    
    // Set the initial values for the global variables.
    
    // Start the timer using setInterval, which will decrement the timeLeft variable by 1 every second and update the timer display on the screen.
    let countdown = function() {

        let timerInterval = setInterval(function() {
            timeLeft--;
            timer.textContent = "Time: " + timeLeft + " seconds left";
            
            if(timeLeft <= 0) {
                timer.textContent = "Out of time!";
                endGame();
            };
        }, 1000);
    };
    countdown();

    // Call the displayQuestion function to display the first question.
    
    
}
// Create a function to display a question on the screen. This function should use the current question index to retrieve the question object from the array, and then display the question text and answer choices on the screen.
    //Create a function called displayQuestion.


    // Use the currentQuestionIndex to retrieve the question object from the quizQuestions array.


    // Display the question text and answer choices on the screen.


    // Attach an event listener to each answer choice button so that when the user clicks a button, it calls the checkAnswer function.


// Create a function to check the user's answer to a question. This function should compare the user's answer to the correct answer for the current question, and update the score and timer accordingly. It should then move on to the next question by incrementing the current question index and calling the display question function again, or end the game if all questions have been answered or the timer has reached 0.
    //Create a function called checkAnswer that takes the user's answer as an argument.


    // Use the currentQuestionIndex to retrieve the question object from the quizQuestions array.


    // Compare the user's answer to the correct answer for the current question.


    // If the user's answer is correct, increment the score variable and display a message indicating the answer is correct.


    // If the user's answer is incorrect, decrement the timeLeft variable by 10 seconds and display a message indicating the answer is incorrect.


    // Increment the currentQuestionIndex to move to the next question.


    // If there are no more questions left, call the endGame function. Otherwise, call the displayQuestion function to display the next question.


// Create a function to end the game when all questions have been answered or the timer has reached 0. This function should stop the timer, display the final score on the screen, and provide a way for the user to enter their initials and save their score.
    //Create a function called endGame.
    function endGame() {

        // Stop the timer using clearInterval.
        clearInterval(timer);
        
        // Display the final score on the screen.
        
        
        // Provide a form for the user to enter their initials and save their score.
    }


// Attach an event listener to the start button to call the start game function when the button is clicked.
    //Use document.getElementById to select the start button element.


    //Attach an event listener to the start button element that calls the startGame function when the button is clicked.
buttonEl.addEventListener("click", function() {
    startQuiz();
});
