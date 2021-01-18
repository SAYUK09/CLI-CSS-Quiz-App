var readline = require('readline-sync')
const chalk = require('chalk');


var username=readline.question('name ')
console.log("Lets Test Your Knowledge" , chalk.red.bold(username))

var score=0;

var questions =[
  {
    que : " Is HTML a Programmimg language ? ",
    ans:false,
  },
  {
    que : "Is CSS a Programmimg language ",
    ans:false,
  },
 {
    que : "Is HTML case Sensitive ?",
    ans:false,
  },
  {
    que : "CSS is a Presentation layer",
    ans:true,
  },
  {
    que : "There are 3 types of CSS",
    ans:true,
  },
  {
    que : "Inline CSS is the best Practice",
    ans:false,
  },
  {
    que : "External CSS overides all the others",
    ans:false,
  },
  {
    que : "There are only 3 types of CSS Selectors",
    ans:false,
  },
  {
    que : "The '#' is used to select a class",
    ans:false,
  },
  {
    que : "The ':before' is pseodu Selector",
    ans:true,
  },
  {
    que : "HTML & CSS are a Styling language",
    ans:false,
  },
]

function playGame(que, ans){
  var userans = readline.keyInYN(que)

  if (userans===ans){
    score ++
      console.log (chalk.greenBright("Right!") ,"The score is:" , score)
      console.log("")
  }else {
    score--
       console.log (chalk.redBright("Nah!") ,"The score is:" , score)
      console.log("")
  }

}

for (i=0; i<questions.length; i++){
  currentOue = questions[i].que
  currentAns = questions[i].ans

  playGame(currentOue, currentAns)

}

console.log(chalk.keyword('orange').bold("--------------------------------"))
console.log("Your Final score is ", score)
console.log("")
console.log("Top Player :", chalk.black.bgGreen.bold("Tanay Pratap"), "--> 10/10")
console.log("Send me Screenshot if you've crossed the high score") 