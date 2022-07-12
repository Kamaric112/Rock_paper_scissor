function computerPlay() {
    var values = ["rock","paper","scissors"]
    let result =  values[Math.floor(Math.random()*values.length)]

    // console.log(result)
    return result
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection =="rock") {
            console.log( "tie" )
        }
        else if (computerSelection == "scissors") {
            console.log ( `${playerSelection} beats ${computerSelection}` )
            playerScore++
        }
        else if ((computerSelection == "paper")) {
            console.log( `${computerSelection} beats ${playerSelection}` )
            computerScore++
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection =="paper") {
            console.log("tie")
        }
        else if (computerSelection == "rock") {
            console.log( `${playerSelection} beats ${computerSelection}` )
            playerScore++
        }
        else if ((computerSelection == "scissors")) {
            console.log( `${computerSelection} beats ${playerSelection}` )
            computerScore++
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection =="scissors") {
            console.log( "tie" )
        }
        else if (computerSelection == "paper") {
            console.log( `${playerSelection} beats ${computerSelection}` )
            playerScore++
        }
        else if ((computerSelection == "rock")) {
            console.log( `${computerSelection} beats ${playerSelection}` )
            computerScore++
        }
    }
    // console.log(a)
    // console.log(b)
}

function userinput() {
     return prompt("Please enter rock paper or scissors","rock paper scissors").toLowerCase()
}

// let playerSelection = userinput()
// computerSelection = computerPlay()

// console.log(playRound(playerSelection,computerSelection))

function game() {
    for (let i = 0 ;i < Infinity; i ++ ) {
        let playerSelection = userinput()
        computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
        console.log(playerScore )
        console.log(computerScore)

        if (playerScore == 5 ) {
            console.log(`${playerSelection} (You) won!`)
            break
        }
        if (computerScore == 5 ) {
            console.log(`${computerSelection} (the computer) won!`)
            break
        }
}
}
game()