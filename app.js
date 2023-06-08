var questions = [
  {
   quiz_question  : "Q1. What does HTML stands for?",
    option1:"Hypertext Machine language",
    option2:"Hypertext and links markup language",
    option3:"Hypertext Markup Language",
    option4:"Hightext machine language",
    correctAnswer: "Hypertext Markup Language"
  },
  {
   quiz_question  : "Q2.How is document type initialized in HTML5?",
    option1:"</DOCTYPE HTML>",
    option2:"</DOCTYPE>",
    option3:"<!DOCTYPE HTML>",
    option4:"</DOCTYPE html>",
    correctAnswer:"<!DOCTYPE HTML>",
  },

  {
   quiz_question  : "Q3.What is the font-size of the h1 heading tag?",
    option1:"3.5 em",
    option2:"2.17 em",
    option3:"2 em",
    option4:"1.5 em",
    correctAnswer: "2 em"
  },
  {
   quiz_question  : "Q4.Which of the following HTML element is used for creating an unordered list?",
    option1:"<ui>",
    option2:"<i>",
    option3:"<em>",
    option4:"<ul>",
    correctAnswer: "<ul>"
  },
  {
   quiz_question  : "Q5.Which of the following characters indicate closing of a tag? ",
    option1:".",
    option2:"/",
    option3:"//",
    option4:"!",
    correctAnswer: "/"
  },
  {
   quiz_question  : "Q6.How many heading tags are there in HTML5?",
    option1:"2",
    option2:"3",
    option3:"5",
    option4:"6",
    correctAnswer: "6"
  },
  {
   quiz_question  : "Q7.How many attributes are there in HTML5?",
    option1:"2",
    option2:"4",
    option3:"1",
    option4:"None of the Above",
    correctAnswer: "None of the Above"
  },
  {
   quiz_question  : "Q8.Which of the following attributes is used to add link to any element?",
    option1:"link",
    option2:"ref",
    option3:"href",
    option4:"newref",
    correctAnswer: "href"
  },
  {
    quiz_question  : "Q9.Which of the following HTML Elements is used for making any text bold ?",
     option1:"<p>",
     option2:"<i>",
     option3:"<li>",
     option4:"<b>",
     correctAnswer: "<b>"
   },
  // {
  //  quiz_question  : "<a>www.geeksforgeeks.org <Geeksforgeeks </a>",
  //   option1:"<a href=“www.geeksforgeeks.org” Geeksforgeeks /a>",
  //   option2:"Hypertext and links markup language",
  //   option3:"<a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>",
  //   option4:"<a link=“www.geeksforgeeks.org” Geeksforgeeks> </a>",
  //   correctAnswer: "<a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>"
  // },
]
var nxtBtn = document.getElementById("nxtbtn");
var ques = document.getElementById("quizQuestion")
var opt1 = document.getElementById("option1")
var opt2 = document.getElementById("option2")
var opt3 = document.getElementById("option3")
var opt4 = document.getElementById("option4")
var index = 0 ;
var score = 1

function btn() {
  var quizOptions = document.getElementsByName("valueIs-radio");
  for (let i = 0; i < quizOptions.length; i++) {

    if (quizOptions[i].checked) {
      var selectvalue  =  quizOptions[i].value
     var userAns = questions[index - 1][`option${selectvalue}`]
     var correctAns = questions[index - 1].correctAnswer;
     if(userAns === correctAns){
     score++
     }
    }
      quizOptions[i].checked = false
nxtBtn.disabled = true;
  }
  if(index > questions.length - 1){ 

 
   var abc = Math.round(((score - 1) / questions.length) * 100);
   swal({
  
    title: "Your Percentage " + abc + "%",

   });
    var timer = document.getElementById("timer");
    timer.style.display= "none"

  }else{
ques.innerHTML= questions[index].quiz_question;
opt1.innerText = questions[index].option1;
opt2.innerText = questions[index].option2;
opt3.innerText = questions[index].option3;
opt4.innerText = questions[index].option4;
index++
}
}
btn()

function enablebutton(){
nxtBtn.disabled = false;
}



var min = 1
var sec= 59

var timer = document.getElementById("timer");
var interval = setInterval(() => {
  timer.innerHTML =   `${min}:${sec}`

  sec--
  if(sec < 0){
 
    if(min < 1){
      btn()
      min = 1
      sec= 59
    }
else{
  min-- 
  sec= 59
}
  }
}, 1000); 
if(index > questions.length - 1){ 
  min = 0
  sec= 0
}
function htmlquiz() {
  location.assign("quiz.html");

}

localStorage.setItem("email", "faizan@gmail.com");
localStorage.setItem("password", "faizan123");

function login(event) {
    event.preventDefault();
    var savedEmail = localStorage.getItem("email");
    var savedPassword = localStorage.getItem("password");
  
    var enteredEmail = document.getElementById("email-input").value;
    var enteredPassword = document.getElementById("pass-input").value;

    if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
        Swal.fire({
            icon: 'success',
            title: 'Logged in!',
            text: 'Wellcome to Quiz',
            showConfirmButton: false,
          });

          setTimeout(() => {
        location.assign("dashboard.html");
    }, 1000);
      
    } else {
        Swal.fire({
            icon: 'error',
            text: 'Your email or password are incorrect ',
          });        }

      
  }

