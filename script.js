let userInput = getInput()

let AiInput = getAiInput()


if(userWin(userInput,AiInput))
{
    console.log("User Won")
}



function getInput()/*function that checks the users input*/
{
    let input;
    let answersArray = ["ROCK","PAPER", "SCISSORS"] 
    do
    {
        
    }
    while(!answersArray.includes(input))/*Check if input is either rock,paper and scissors */
    return input
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