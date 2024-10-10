/*Ajoute un event listener pour chaque img avec la classe all choice qui
ajoute un border quand tu hover par dessus et enleve le border quand tu 
n'est plus dessus*/
let aiScore = 0;
let playerScore = 0;

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

/*creation de la div pour le counter*/
let AiScoreSelector = document.querySelector(".AiScore")
let playerScoreSelector = document.querySelector(".playerScore")
let bodySelector = document.querySelector("body")






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
    let winner;
    let AiPick = getAiInput()
    console.log(userPick, AiPick)
    if(userPick === "ROCK")
        {
            if(AiPick === "PAPER")
            {
                aiScore++
                AiScoreSelector.innerHTML = aiScore
                console.log(`${userPick} loses to ${AiPick}`)
                return
            }
            else if(userPick === AiPick)
            {
                console.log(`Its a tie!`)
                return
            }
            console.log(`${userPick} wins to ${AiPick}`)
            playerScore++
            playerScoreSelector.innerHTML = playerScore
        }
        if(userPick === "PAPER")
        {
            if(AiPick === "SCISSORS")
                {
                    aiScore++
                    AiScoreSelector.innerHTML = aiScore
                    console.log(`${userPick} loses to ${AiPick}`)
                    return
                }
            else if(userPick === AiPick)
                {
                    console.log(`Its a tie!`)
                    return
                }
                console.log(`${userPick} wins to ${AiPick}`)
                playerScore++
                playerScoreSelector.innerHTML = playerScore
        }
        if(userPick === "SCISSORS")
        {
            if(AiPick === "ROCK")
                {
                    aiScore++
                    AiScoreSelector.innerHTML = aiScore
                    console.log(`${userPick} loses to ${AiPick}`)
                    return
                }
            else if(userPick === AiPick)
                {
                    console.log(`Its a tie!`)
                    return
                }
                playerScore++
                playerScoreSelector.innerHTML = playerScore
                console.log(`${userPick} wins to ${AiPick}`)
        }
}

function reset()
{
    if(aiScore === 5)
    {
        alert("The enemy won!")
    }
    if(playerScore === 5)
    {
        alert("You won!")
    }
}

function winnerMessage(winner)
{
    let winnerMessageDiv = document.createElement("div")
    winnerMessageDiv.textContent = winner
    bodySelector.append(winnerMessageDiv)
}