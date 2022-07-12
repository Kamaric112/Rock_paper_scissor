function computerPlay() {
    var values = ["rock","paper","scissors"]
    let result =  values[Math.floor(Math.random()*values.length)]

    // console.log(result)
    return result
}

let a = 0
let b = 0

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection =="rock") {
            console.log( "tie" )
        }
        else if (computerSelection == "scissors") {
            console.log ( `${playerSelection} beats ${computerSelection}` )
            a++
        }
        else if ((computerSelection == "paper")) {
            console.log( `${computerSelection} beats ${playerSelection}` )
            b++
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection =="paper") {
            console.log("tie")
        }
        else if (computerSelection == "rock") {
            console.log( `${playerSelection} beats ${computerSelection}` )
            a++
        }
        else if ((computerSelection == "scissors")) {
            console.log( `${computerSelection} beats ${playerSelection}` )
            b++
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection =="scissors") {
            console.log( "tie" )
        }
        else if (computerSelection == "paper") {
            console.log( `${playerSelection} beats ${computerSelection}` )
            a++
        }
        else if ((computerSelection == "rock")) {
            console.log( `${computerSelection} beats ${playerSelection}` )
            b++
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
        console.log(a)
        console.log(b)

        if (a == 5 ) {
            console.log(`${playerSelection} (You) won!`)
            break
        }
        if (b == 5 ) {
            console.log(`${computerSelection} (the computer) won!`)
            break
        }

    //     console.log(playerSelection)
    //     console.log(computerSelection)
    // }
}
}
game()