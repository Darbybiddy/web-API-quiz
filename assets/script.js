var listItemsEl = document.querySelectorAll("li");
var timerEl = document.getElementById("seconds");
var startButton = document.querySelector("#start");
var quizContainer = document.querySelector(".quiz-body");
var questionData = document.querySelector(".quiz-questions");
var nextButton = document.querySelector("#next");
var timeLeft = 30;
var number = 0;

var questions = [
  {
    question: "what does HTML stand for?",
    choices: [
      "A. Hypertext",
      "B: Hypertext Markup Language",
      "C: Something ",
      "D: None of the above",
    ],
    correctAnswers: "B: Hypertext Markup Language",
  },

  {
    question: "what does CSS stand for?",
    choices: [
      "A. Cascading Style Sheet",
      "B: Complex Scripts Sequence",
      "C: Cluster Support Services",
      "D: Customer Service Support",
    ],
    correctAnswers: "A. Cascading Style Sheet",
  },

  {
    question: "what is JavaScript?",
    choices: [
      "A. Builds increased interaction and complexity for applications.",
      "B: scripting language that runs in the browser",
      "C: Its behind every action/interaction you perform on the browser",
      "D: All the above",
    ],
    correctAnswers: "D: All the above",
  },

  {
    question: "what is the symbol for a class in CSS?",
    choices: [
      "A. Period (.)",
      "B: Exclamation Point (!)",
      "C: Pound (#)",
      "D: Asterick (*)",
    ],
    correctAnswers: "A. Period (.)",
  },

  {
    question: "what is the symbol for a ID in CSS?",
    choices: [
      "A. Period (.)",
      "B: Exclamation Point (!)",
      "C: Pound (#)",
      "D: Asterick (*)",
    ],
    correctAnswers: "C: Pound (#)",
  },
];

function countdown() {
  timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft + " seconds remaining";
    if (timeLeft <= 0) {
      timerEl.textContent = "Times up!";
      clearInterval(timeInterval);
      promptUserInitials();
    }
    timeLeft--;
  }, 1000);
}

function showQuestions() {
  quizContainer.classList.remove("hide");
  questionData.innerHTML = questions[number].question;
  var correctChoice = questions[number].correctAnswers;
  console.log(correctChoice);
  for (var i = 0; i < 4; i++) {
    listItemsEl[i].textContent = questions[number].choices[i];
    listItemsEl[i].addEventListener("click", function (event) {
      console.log("click heard");
      console.log(number);
      console.log(event.target.textContent, questions[number].correctAnswers);
      if (event.target.textContent == questions[number].correctAnswers) {
        number++;
        console.log("You selected the correct answer!");
      } else {
        number++;
        timeLeft = timeLeft - 5
        console.log("Didnt work");
      
      }
    }); 
  }
}

function promptUserInitials() {
  console.log("initials here");
  quizContainer.replaceChildren();
  var inputField = document.createElement("input");
  // set its styling
  inputField.setAttribute("class", "input-style");
  // then append inputField to quizContainer
  var submitButton = document.createElement("button");
  submitButton.textContent = "CLick here to submit your name";
  quizContainer.append(inputField);
  quizContainer.append(submitButton);
  submitButton.addEventListener("click", function(){
    console.log("Initals Submitted")
  })
}

startButton.addEventListener("click", function () {
  showQuestions();

  nextButton.addEventListener("click", function () {
    var quizContainer = document.querySelector(".quiz-body");

      number = number + 1;

    var questionData = document.querySelector(".quiz-questions");
    questionData.innerHTML = questions[number].question;

    

    for (var i = 0; i < listItemsEl.length; i++) {
      listItemsEl[i].textContent = questions[number].choices[i];
    }
   
  });
});

//need to call a event listener to the list answers.
// need to add a form to enter initials when the game is over.

startButton.addEventListener("click", countdown);
