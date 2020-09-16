var submitButton = $("submitButton"); 
var Score = $("Score");
var time = $("time");
var timerText = $("timerText");
var questions = $("questions");
var answers = $("answers");
var gameOver = $("gameOver");
var finalScore = $("finalScore");
var ans1 = $('ans1');
var ans2 = $('ans2');
var ans3 = $('ans3');
var ans4 = $('ans4');


var questionCounter = 0;
var quizIndex = 0

// where my questions and answer arrays go

var quizList = [


    { question: 'what doesnt have bubbles?', 
    answer1: 'Cranberry Juice',
    answer2: 'La Croix',
    answer3: 'Coca Cola',
    answer4: 'Club Soda',
    correctanswer: 'answer1',
    },

    { question: 'What do you call a drink that is made up of Orange juice and vodka?', 
    answer1: 'Long Island Iced Tea',
    answer2: 'Grayhound',
    answer3: 'Screwdriver',
    answer4: 'White Russian',
    correctanswer: 'answer2',
    },

    { question: 'What is the main ingredient in Tequila?',
    answer1: 'Honey',
    answer2: 'Agave',
    answer3: 'Orange',
    answer4: 'Lime',
    correctanswer: 'answer2',
    },
    
    { question: 'Where is champagne from?', 
    answer1: 'USA',
    answer2: 'Italy',
    answer3: 'Mexico',
    answer4: 'France',
    correctanswer: 'answer4',
    },

    { question: 'What is the main ingredient in wine?', 
    answer1: 'Grapes',
    answer2: 'Apples',
    answer3: 'Cherries',
    answer4: 'Pears',
    correctanswer: 'answer1',
    },

    { question: 'What spirit is mixed with ginger beer to make a Moscow Mule?', 
    answer1: 'Gin',
    answer2: 'Vodka',
    answer3: 'Rum',
    answer4: 'Whiskey',
    correctanswer: 'answer2',
    },


]


questions.text(quizList[quizIndex].question);
ans1.attr(quizList[quizIndex].answer1);
ans2.attr(quizList[quizIndex].answer2);
ans3.attr(quizList[quizIndex].answer3);
ans4.attr(quizList[quizIndex].answer4);





