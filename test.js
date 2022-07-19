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
    playerSelection = this.id
    console.log(playerSelection)
    playRound(playerSelection,computerPlay())
    e.stopPropagation()

})

const papers = document.querySelector('#paper')
papers.addEventListener('click',function() {
    playerSelection = this.id
    console.log(playerSelection)
    playRound(playerSelection,computerPlay())
})

const scissor = document.querySelector('#scissors')
scissor.addEventListener('click',function() {
    playerSelection = this.id
    console.log(playerSelection)
    playRound(playerSelection,computerPlay())
})

const btn = document.querySelectorAll('button')

function disableButtons() {
    btn.forEach(elem => {
        elem.disabled = true
    })
}

const container = document.querySelector('#container')

const div =document.createElement('div')
div.classList.add('result')

const player = document.createElement('div')
player.classList.add("pscore")

const comp = document.createElement('div')
comp.classList.add("cscore")




// player choose rock and computer choose paper OR player choose paper and computer choose scissors OR player choose scissors and computer choose rock ==> computer WIN

// player choose rock and computer choose scissors OR player choose paper and computer choose rock OR player choose scissors and computer choose paper ==> player WIN

// player choose rock and computer choose rock OR player choose paper and computer choose rock OR player choose scissors and computer choose scissors ==> TIE

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    if (playerSelection == "rock" && computerSelection =="scissors" || playerSelection == "paper" && computerSelection =="rock"||playerSelection == "scissors" && computerSelection =="paper") { // player wins
        div.textContent = `${playerSelection} beats ${computerSelection}` 
        container.appendChild(div);
        playerScore++
        player.textContent = `player score is ${playerScore}`
        comp.textContent = `computer score is ${computerScore}`
        container.appendChild(player)
        container.appendChild(comp)
       }

    else if ( playerSelection == "rock" && computerSelection == "paper" || playerSelection =="paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection =="rock") { // computer wins
        div.textContent = `${computerSelection} beats ${playerSelection}`
        container.appendChild(div);
        computerScore++
        player.textContent = `player score is ${playerScore}`
        comp.textContent = `computer score is ${computerScore}`
        container.appendChild(player)
        container.appendChild(comp)
    }

    else if ( playerSelection == "rock" && computerSelection == "rock" || playerSelection =="paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection =="scissors") { // tie
        div.textContent = "tie"
        container.appendChild(div);
        player.textContent = `player score is ${playerScore}`
        comp.textContent = `computer score is ${computerScore}`
        container.appendChild(player)
        container.appendChild(comp)
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