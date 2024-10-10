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

let resultCounterDiv = document.createElement("div")



function getUserInput(choice)
{
    let userPick;
    if(choice.target.classList.contains("theRock"))
    {
        console.log("You select rock")
        let userPick = "ROCK"
        checkWinner(userPick)
    }
    else if(choice.target.classList.contains("paper"))
    {
        console.log("You select paper")
        let userPick = "PAPER"
        checkWinner(userPick)
    }
    else if(choice.target.classList.contains("scissor"))
    {
        console.log("You select scissor")
        let userPick = "SCISSOR"
        checkWinner(userPick)
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

function checkWinner(userPick)
{
    let AiPick = getAiInput()
    console.log(userPick, AiPick)
    if(userPick === "ROCK")
        {
            if(AiPick === "PAPER")
            {
                console.log(`${userPick} loses to ${AiPick}`)
                return
            }
            else if(userPick === AiPick)
            {
                console.log(`Its a tie!`)
                return
            }
            console.log(`${userPick} wins to ${AiPick}`)
        }
        if(userPick === "PAPER")
        {
            if(AiPick === "SCISSORS")
                {
                    console.log(`${userPick} loses to ${AiPick}`)
                    return
                }
            else if(userPick === AiPick)
                {
                    console.log(`Its a tie!`)
                    return
                }
                console.log(`${userPick} wins to ${AiPick}`)
        }
        if(userPick === "SCISSORS")
        {
            if(AiPick === "ROCK")
                {
                    console.log(`${userPick} loses to ${AiPick}`)
                    return
                }
            else if(userPick === AiPick)
                {
                    console.log(`Its a tie!`)
                    return
                }
                console.log(`${userPick} wins to ${AiPick}`)
        }
}