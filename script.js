

let AiInput = getAiInput()

/*Ajoute un event listener pour chaque img avec la classe all choice qui
ajoute un border quand tu hover par dessus et enleve le border quand tu 
n'est plus dessus*/
let allChoice = document.querySelectorAll(".choiceImg")
allChoice.forEach(function(e)
{
    e.addEventListener("mouseover", function(e)
    {
        e.target.style.border = "4px solid black"
    })
    e.addEventListener("mouseout", function(e)
    {
        e.target.style.border = ""

    })
    e.addEventListener("click", getUserInput)
})
let rockChoice = document.querySelector(".theRock")
/*rockChoice.addEventListener("click", getUserInput)*/



/*function getInput()/*function that checks the users input
{
    let input;
    let answersArray = ["ROCK","PAPER", "SCISSORS"] 
    do
    {
        input = prompt("Rock, Paper or Scissors?").toUpperCase()
    }
    while(!answersArray.includes(input))/*Check if input is either rock,paper and scissors 
    return input
}*/

function getUserInput(choice)
{
    if(choice.target.classList.contains("theRock"))
    {
        console.log("You select rock")
    }
    else if(choice.target.classList.contains("paper"))
    {
        console.log("You select paper")
    }
    else if(choice.target.classList.contains("scissor"))
    {
        console.log("You select scissor")
    }
}
function getAiInput()
{
    let AiChoice;
    let odds = Math.floor(Math.random()*10)
    if(odds<=3)
    {
        AiChoice= "ROCK"
    }
    else if(odds >3 && odds <= 6)
    {
        AiChoice= "PAPER"
    }
    else
    {
        AiChoice= "SCISSORS"
    }
    return AiChoice
}

function userWin(user, ai)
{
    if(user === "ROCK")
    {
        if(ai === "PAPER")
        {
            console.log(`${user} loses to ${ai}`)
            return
        }
        else if(user === ai)
        {
            console.log(`Its a tie!`)
            return
        }
        console.log(`${user} wins to ${ai}`)
    }
    if(user === "PAPER")
    {
        if(ai === "SCISSORS")
            {
                console.log(`${user} loses to ${ai}`)
                return
            }
        else if(user === ai)
            {
                console.log(`Its a tie!`)
                return
            }
            console.log(`${user} wins to ${ai}`)
    }
    if(user === "SCISSORS")
    {
        if(ai === "ROCK")
            {
                console.log(`${user} loses to ${ai}`)
                return
            }
        else if(user === ai)
            {
                console.log(`Its a tie!`)
                return
            }
            console.log(`${user} wins to ${ai}`)
    }
}