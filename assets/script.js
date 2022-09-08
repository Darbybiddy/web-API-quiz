var listItemsEl = document.querySelectorAll("li");
var timerEl = document.getElementById("seconds");
var startButton = document.querySelector("#start");
var quizContainer = document.querySelector(".quiz-body");
var questionData = document.querySelector(".quiz-questions");
var nextButton = document.querySelector("#next");
var timeLeft = 15;


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

var number = 0;

// function gradeUserChoice(index, correctChoice) {
//     // do something now that the the click is heard
//     var liText = listItemsEl[index].textContent;
//     if (liText == correctChoice) {
//         console.log('You selected the correct answer!');
//     }
// }

function showQuestions() {
  quizContainer.classList.remove("hide");
  questionData.innerHTML = questions[number].question;
  var correctChoice = questions[number].correctAnswers;
  console.log(correctChoice);
  for (var i = 0; i < 4; i++) {
    var choiceText = questions[number].choices[i];
    console.log(choiceText);
    listItemsEl[i].textContent = choiceText;
    listItemsEl[i].addEventListener("click", function () {
        console.log('click heard');
      if (choiceText == questions[number].correctAnswers) {
        console.log("You selected the correct answer!");

      } else {
        console.log('Didnt work');
      }
    });
  }
  number++;
}

function countdown() {
    timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + ' seconds remaining';
        if (timeLeft <= 0) {
            timerEl.textContent = 'Times up!';
            clearInterval(timeInterval);
            promptUserInitials();
        }
        timeLeft--;
    }, 1000);
}

function promptUserInitials(){
    console.log('initials here');
    quizContainer.replaceChildren();
    var inputField = document.createElement('input');
    // set its styling
    inputField.setAttribute('class', 'input-style')
    // then append inputField to quizContainer
    var submitButton = document.createElement('button');
    submitButton.textContent = 'CLick here to submit your name';
    quizContainer.append(inputField);
    quizContainer.append(submitButton);
}

startButton.addEventListener("click", function () {
  showQuestions();

  //ToDo: need to make a function to start the timer when the start button is clicked to begin the quiz.
  //add a event listener to the timer when the button is clicked.



  nextButton.addEventListener("click", function () {
    var quizContainer = document.querySelector(".quiz-body");

    var questionData = document.querySelector(".quiz-questions");
    questionData.innerHTML = questions[number].question;

    number = number + 1;

    for (var i = 0; i < listItemsEl.length; i++) {
      listItemsEl[i].textContent = questions[number].choices[i];
    }
  });
});

//need to call a event listener to the list answers.
// need to add a form to enter initials when the game is over.

startButton.addEventListener('click', countdown);