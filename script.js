
// var gameOver = $("gameOver");
var finalScore = $("finalScore");
var quizBox = $("#quizBox");
var question = $("#question");
var ans1 = $("#ans1");
var ans2 = $('#ans2');
var ans3 = $('#ans3');
var ans4 = $('#ans4');
var startGame = $("#startGame");
var buttons = $("#buttons")
var timerText = $("#timerText");
var timerLine = $("#timerLine");
var scoresList = $("#scoresList")
var finalScore = $("#finalScore");

// var currentScore = [];




// the array of questions 
var questionIndex= 0;

quizBox.css('display', 'none');
var quizScore = 0 
var quizList = [


    { quest: 'what doesnt have bubbles?', 
    answer1: 'Cranberry Juice',
    answer2: 'La Croix',
    answer3: 'Coca Cola',
    answer4: 'Club Soda',
    correctanswer: 'Cranberry Juice',
    },

    { quest: 'What do you call a drink that is made up of Orange juice and vodka?', 
    answer1: 'Long Island Iced Tea',
    answer2: 'Grayhound',
    answer3: 'Screwdriver',
    answer4: 'White Russian',
    correctanswer: 'Screwdriver',
    },

    { quest: 'What is the main ingredient in Tequila?',
    answer1: 'Honey',
    answer2: 'Agave',
    answer3: 'Orange',
    answer4: 'Lime',
    correctanswer: 'Agave',
    },
    
    { quest: 'Where is champagne from?', 
    answer1: 'USA',
    answer2: 'Italy',
    answer3: 'Mexico',
    answer4: 'France',
    correctanswer: 'Italy',
    },

    { 
    quest: 'What is the main ingredient in wine?', 
    answer1: 'Grapes',
    answer2: 'Apples',
    answer3: 'Cherries',
    answer4: 'Pears',
    correctanswer: 'Grapes',
    },

    { quest: 'What spirit is mixed with ginger beer to make a Moscow Mule?', 
    answer1: 'Gin',
    answer2: 'Vodka',
    answer3: 'Rum',
    answer4: 'Whiskey',
    correctanswer: 'Vodka',
    },

]


finalScore.css('display', 'none');
timerLine.css('display', 'none');
question.text(quizList[questionIndex].quest);
ans1.text(quizList[questionIndex].answer1);
ans2.text(quizList[questionIndex].answer2);
ans3.text(quizList[questionIndex].answer3);
ans4.text(quizList[questionIndex].answer4);
console.log(ans1)
ans1.attr("value", quizList[questionIndex].answer1 ) 
    // console.log(ans1)
ans2.attr("value", quizList[questionIndex].answer2) 
    // console.log(ans2)
ans3.attr("value", quizList[questionIndex].answer3) 
    
    // console.log(ans3)
ans4.attr("value", quizList[questionIndex].answer4) 

var timer = 50;
startGame.on("click", function(){
    
    quizScore = 0;
    startGame.css('display', 'none')
    timerLine.css('display', 'block');
    quizBox.css('display', 'inline');
    

    timerText.text(timer)
   var gameTimer = setInterval(() => {
        timer--;

        timerText.text(timer)

        if(timer === 0){
            clearInterval(gameTimer);
            timerLine.css('display', 'none')

            startGame.css('display', 'inline');
            endGame();
            
            
        } 

    }, 1000);

    

    

})

function buttonclick (e){
    console.log(ans1)
    if (e.target.value === quizList[questionIndex].correctanswer) {
        quizScore += 20;
        console.log(quizScore)
    } else { timer -= 10;
        
    } 
    questionIndex++;
    console.log(e.target.value, quizList[questionIndex].correctanswer)
   


    question.text(quizList[questionIndex].quest)
    ans1.text(quizList[questionIndex].answer1)
    ans2.text(quizList[questionIndex].answer2)
    ans3.text(quizList[questionIndex].answer3)
    ans4.text(quizList[questionIndex].answer4);

    ans1.attr("value", quizList[questionIndex].answer1 ) 
    // console.log(ans1)
    ans2.attr("value", quizList[questionIndex].answer2) 
    // console.log(ans2)
    ans3.attr("value", quizList[questionIndex].answer3) 
    
    // console.log(ans3)
    ans4.attr("value", quizList[questionIndex].answer4) 
    // console.log(ans4)

console.log(e)
finalScore.css('display', 'inline');

}




  