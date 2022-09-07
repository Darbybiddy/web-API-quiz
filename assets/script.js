var listItemsEl = document.querySelectorAll("li");
console.log(listItemsEl);
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

var startButton = document.querySelector("#start");
startButton.addEventListener("click", function () {
  var quizContainer = document.querySelector(".quiz-body");
  quizContainer.classList.remove("hide");

  var questionData = document.querySelector(".quiz-questions");
  questionData.innerHTML = questions[number].question;

  for (var j = 0; j < 4; j++) {
    listItemsEl[j].textContent = questions[number].choices[j];
  }
  number++;

  var nextButton = document.querySelector("#next");

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

