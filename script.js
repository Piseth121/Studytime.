//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 45;
let countdown;

//Questions and Options array

const quizArray = [
 {
        id: "container",
        question: "7x + 9 = 23       Calculate        X=?",
        options: ["x=2", "x=3", "x=4", "x=5"],
        correct: "x=2",
    },
	{
        id: "container",
        question: "9x + 5 = 41	Calculate	x=?",
        options: ["x = 2", "x = 3", "x = 4", "x = 5"],
        correct: "x = 4",
    },
	{
        id: "container",
        question: "5x + 7 = 42 	Calculate	x=?",
        options: ["x = 4", "x = 5", "x = 6", "x = 7"],
        correct: "x = 7",
    },
	{
        id: "container",
        question: "10x + 2 = 72	Calculate	x=?",
        options: ["x = 4", "x = 5", "x = 6", "x = 7"],
        correct: "x = 7",
    },
	{
        id: "container",
        question: "7x + 3 = 52	Calculate	x=?",
        options: ["x = 4", "x = 5", "x = 6", "x = 7"],
        correct: "x = 7",
    },
	{
        id: "container",
        question: "11x + 3 = 36 Calculate	x=?",
        options: ["x = 2", "x = 3", "x = 4", "x = 5"],
        correct: "x = 3",
    },
	{
        id: "container",
        question: "4x + 2 = 34 	Calculate	x=?",
        options: ["x = 5", "x = 6", "x = 7", "x = 8"],
        correct: "x = 8",
    },        
    {
        id: "container",
        question: "56+8(47-17)​+5-13=",
        options: ["288", "2889", "388", "298"],
        correct: "288",
    },
    {
        id: "container",
        question: "[4+15+72-8-(47-23)+6]-2=",
        options: ["67", "46", "36", "63"],
        correct: "63",
    },
	{
        id: "container",
        question: "(57+43-7+5)-20+4-90=",
        options: ["5", "-8", "9", "-7"],
        correct: "-8",
    },
	{
        id: "container",
        question: "75-38+2+75-5+7-81+3-9+7-15+6-7",
        options: ["13", "19", "20", "18"],
        correct: "20",
    },
	{
        id: "container",
        question: "-13-5=",
        options: ["-18", "19", "20", "-17"],
        correct: "-18",
    },
	{
        id: "container",
        question: "23-(-3)=",
        options: ["28", "27", "26", "21"],
        correct: "26",
    },
	{
        id: "container",
        question: "-22+10-(-7)=",
        options: ["8", "-7", "6", "-5"],
        correct: "-5",
    },
	{
        id: "container",
        question: "4-12+(-6)=",
        options: ["-13", "17", "-14", "15"],
        correct: "-14",
    },
	{
        id: "container",
        question: "7-(-6)+4=",
        options: ["16", "17", "13", "15"],
        correct: "17",
    },
	{
        id: "container",
        question: "-8-(-2)+1=",
        options: ["-5", "4", "-1", "-3"],
        correct: "-5",
    },
	{
        id: "container",
        question: "-4-6+(-5)=",
        options: ["13", "-14", "-15", "12"],
        correct: "-15",
    },
	{
        id: "container",
        question: "5-11-(-8)=",
        options: ["4", "3", "1", "2"],
        correct: "2",
    },
	{
        id: "container",
        question: "16-9-5=",
        options: ["1", "4", "2", "3"],
        correct: "2",
    },
	{
        id: "container",
        question: "3x12x4=",
        options: ["264", "342", "263", "256"],
        correct: "264",
    },
	{
        id: "container",
        question: "7x(-5)x2=",
        options: ["56", "69", "-60", "-70"],
        correct: "-70",
    },
	{
        id: "container",
        question: "18+3x2=",
        options: ["23", "25", "24", "27"],
        correct: "24",
    },
	{
        id: "container",
        question: "11x[5x(-2)]=",
        options: ["109", "120", "110", "-110"],
        correct: "-110",
    },
	{
        id: "container",
        question: "50+[5x(-2)]=",
        options: ["40", "-40", "60", "30"],
        correct: "40",
    },
	{
        id: "container",
        question: "(280-20)=7=",
        options: ["235", "267", "276", "126"],
        correct: "267",
    },
	{
        id: "container",
        question: "28+[7x(-3+5)]=",
        options: ["42", "32", "43", "45"],
        correct: "42",
    },
	{
        id: "container",
        question: "[40+3(1-2)]x6=",
        options: ["122", "322", "232", "222"],
        correct: "222",
    },
	{
        id: "container",
        question: "[5700-43(88+12)]+2+(8-2)=",
        options: ["1 408", "1 308", "1 304", "1 403"],
        correct: "1 408",
    },
	{
        id: "container",
        question: "300+{[150+(40-8)]x[-7-(9)]}=",
        options: ["-1 563", "-2 563", "-2 612", "-2 513"],
        correct: "-2 612",
    },
	{
        id: "container",
        question: "35X=?					X=10",
        options: ["350", "4500", "360", "355"],
        correct: "350",
    },
	{
        id: "container",
        question: "99X			Calculate		X=75",
        options: ["5 8247", "4 527", "2 457", "7 425"],
        correct: "7 425",
    },
	{
        id: "container",
        question: "8X + 11 =? 		Calculate	  X=2",
        options: ["26", "27", "28", "29"],
        correct: "27",
    },
	{
        id: "container",
        question: "9X + 33 =?  		Calculate	 X=5",
        options: ["75", "76", "77", "78"],
        correct: "78",
    },
	{
        id: "container",
        question: "XX + XX =?		Calculate	X=6",
        options: ["71", "72", "73", "74"],
        correct: "72",
    },
	{
        id: "container",
        question: "226 + A =578		Calculate	A=?",
        options: ["A = 256", "A = 255", "A = 352", "A = 345"],
        correct: "A = 352",
    },
	{
        id: "container",
        question: "YA + YA =?		Calculate	Y=98,A=54",
        options: ["10 584", "11 987", "1289", "14 298"],
        correct: "10 584",
    },
	{
        id: "container",
        question: "Y + 689 = 892	Calculate	Y=?",
        options: ["202", "203", "204", "205"],
        correct: "42",
    },
	{
        id: "container",
        question: "3X-1=?		Calculate		x=5",
        options: ["14", "13", "18", "12"],
        correct: "14",
    },
	{
        id: "container",
        question: "X-4=?		Calculate		x=6",
        options: ["2", "-3", "4", "-1"],
        correct: "2",
    },
	{
        id: "container",
        question: "3+2x=?		Calculate		x=7",
        options: ["13", "16", "17", "15"],
        correct: "17",
    },
	{
        id: "container",
        question: "7X-6=?		Calculate		x=8",
        options: ["50", "49", "51", "59"],
        correct: "50",
    },
	{
        id: "container",
        question: "50-X=?		Calculate		x=44",
        options: ["8", "7", "6", "5"],
        correct: "6",
    },
	{
        id: "container",
        question: "8+5X=?		Calculate		x=11",
        options: ["63", "62", "65", "66"],
        correct: "63",
    },
	{
        id: "container",
        question: "2X-15=?		Calculate		x=69",
        options: ["28", "27", "67", "420"],
        correct: "72",
    },{
        id: "container",
        question: "6+11X=",
        options: ["4", "-5", "-6", "3"],
        correct: "-5",
    },
	{
        id: "container",
        question: "X-29=		Calculate		x=300",
        options: ["271", "272", "273", "274"],
        correct: "271",
    },
	{
        id: "container",
        question: "80-2X=		Calculate		x=33",
        options: ["12", "13", "14", "15"],
        correct: "14",
    },
	{
        id: "container",
        question: "8X+42=		Calculate		x=12",
        options: ["-55", "53", "54", "45"],
        correct: "54",
    },
	{
        id: "container",
        question: "6X-16=70 	Calculate		x=",
        options: ["x=9", "x=8", "x=7", "x=1"],
        correct: "x=9",
    },
	{
        id: "container",
        question: "9-4X=53 		Calculate		X=",
        options: ["x=11", "x=12", "x=13", "x=15"],
        correct: "x=11",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 45;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 45;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
// 1. create a new XMLHttpRequest object -- an object like any other!
var myRequest = new XMLHttpRequest();
// 2. open the request and pass the HTTP method name and the resource as parameters
myRequest.open('GET', 'https://codepen.io/eclairereese/pen/BzQBzR.html');
// 3. write a function that runs anytime the state of the AJAX request changes
myRequest.onreadystatechange = function () { 
    // 4. check if the request has a readyState of 4, which indicates the server has responded (complete)
    if (myRequest.readyState === 4) {
        // 5. insert the text sent by the server into the HTML of the 'ajax-content'
        document.getElementById('ajax-content').innerHTML = myRequest.responseText;
    }
};

function sendTheAJAX() {
    myRequest.send();
    document.getElementById('reveal').style.display = 'none';
}