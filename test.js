function computerPlay() {
    var values = ["rock","paper","scissors"]
    let result =  values[Math.floor(Math.random()*values.length)]

    // console.log(result)
    return result
}
let playerSelection = 0
let playerScore = 0
let computerScore = 0

const rocks = document.querySelector('#rock')
rocks.addEventListener('click',function(e) {
    playerSelection = "rock";
    console.log(playerSelection)
    playRound(playerSelection,computerPlay())
    e.stopPropagation();

})

const papers = document.querySelector('#paper')
papers.addEventListener('click',function() {
    playerSelection = "paper";
    console.log(playerSelection)
    playRound(playerSelection,computerPlay())
})

const scissor = document.querySelector('#scissors')
scissor.addEventListener('click',function() {
    playerSelection = "scissors";
    console.log(playerSelection)
    playRound(playerSelection,computerPlay())
})

const btn = document.querySelectorAll('button')

function disableButtons() {
    btn.forEach(elem => {
        elem.disabled = true
    })
}

const container = document.querySelector('#container');

const div =document.createElement('div');
div.classList.add('result');

const player = document.createElement('div')
player.classList.add("pscore")


const comp = document.createElement('div')
comp.classList.add("cscore")

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    if (playerSelection == "rock") {
        if (computerSelection =="rock") {
            console.log( "tie" )
            div.textContent = "tie"
            container.appendChild(div);
            player.textContent = `${playerScore}`
            comp.textContent = `${computerScore}`
            container.appendChild(player)
            container.appendChild(comp)

        }
        else if (computerSelection == "scissors") {
            console.log ( `${playerSelection} beats ${computerSelection}` )
            div.textContent = `${playerSelection} beats ${computerSelection}` 
            container.appendChild(div);
            playerScore++
            player.textContent = `${playerScore}`
            comp.textContent = `${computerScore}`
            container.appendChild(player)
            container.appendChild(comp)
        }
        else if ((computerSelection == "paper")) {
            console.log( `${computerSelection} beats ${playerSelection}` )
            div.textContent = `${computerSelection} beats ${playerSelection}`
            container.appendChild(div);
            computerScore++
            player.textContent = `${playerScore}`
            comp.textContent = `${computerScore}`
            container.appendChild(player)
            container.appendChild(comp)
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection =="paper") {
            div.textContent = "tie"
            container.appendChild(div);
            player.textContent = `${playerScore}`
            comp.textContent = `${computerScore}`
            container.appendChild(player)
            container.appendChild(comp)
        }
        else if (computerSelection == "rock") {
            console.log( `${playerSelection} beats ${computerSelection}` )
            div.textContent = `${playerSelection} beats ${computerSelection}` 
            container.appendChild(div);
            playerScore++
            player.textContent = `${playerScore}`
            comp.textContent = `${computerScore}`
            container.appendChild(player)
            container.appendChild(comp)
        }
        else if ((computerSelection == "scissors")) {
            console.log( `${computerSelection} beats ${playerSelection}` )
            div.textContent = `${computerSelection} beats ${playerSelection}`
            container.appendChild(div);
            computerScore++
            player.textContent = `${playerScore}`
            comp.textContent = `${computerScore}`
            container.appendChild(player)
            container.appendChild(comp)
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection =="scissors") {
            div.textContent = "tie"
            container.appendChild(div);
            player.textContent = `${playerScore}`
            comp.textContent = `${computerScore}`
            container.appendChild(player)
            container.appendChild(comp)
        }
        else if (computerSelection == "paper") {
            console.log( `${playerSelection} beats ${computerSelection}` )
            div.textContent = `${playerSelection} beats ${computerSelection}` 
            container.appendChild(div);
            playerScore++
            player.textContent = `${playerScore}`
            comp.textContent = `${computerScore}`
            container.appendChild(player)
            container.appendChild(comp)        }
        else if ((computerSelection == "rock")) {
            console.log( `${computerSelection} beats ${playerSelection}` )
            div.textContent = `${computerSelection} beats ${playerSelection}`
            container.appendChild(div);
            computerScore++
            player.textContent = `${playerScore}`
            comp.textContent = `${computerScore}`
            container.appendChild(player)
            container.appendChild(comp)
        }
    }
    
        if (playerScore === 5 ) {
            alert(`${playerSelection} (You) won!`)
            disableButtons()
            return
        }
        if (computerScore === 5 ) {
            alert(`${computerSelection} (the computer) won!`)
            disableButtons()
            return
        }
}

// function game() {
//     for (let i = 0 ;i < Infinity; i ++ ) {
//         computerSelection = computerPlay()
//         playRound(playerSelection, computerSelection)

//         if (playerScore == 5 ) {
//             console.log(`${playerSelection} (You) won!`)
//             break
//         }
//         if (computerScore == 5 ) {
//             console.log(`${computerSelection} (the computer) won!`)
//             break
//         }
// }
// }