const allBtns = document.querySelectorAll('.btn');
const playerChoice = document.getElementById('player-choice');
const comupterChoice = document.getElementById('computer-choice');
const winnerWinner = document.getElementById('winner-winner');
const imgContainer = document.getElementById('img-container');
const rockBtn = document.getElementById('btn-rock');
// let that allows us to use our globals without lexical scope
let compsChoiceFinal;
let playersChoiceFinal;
//the game trigger function "click event without propagation!"
allBtns.forEach((allBtn) => {
    allBtn.addEventListener('click', (e) => {   
       playersChoiceFinal = e.target.id;
      
       console.log(compsChoiceFinal,playersChoiceFinal)

        //functions go here
        computerRanChoice();
        playerChoiceFunc();

        if(playersChoiceFinal === "btn-rock" && compsChoiceFinal === 'rock'){ winnerWinner.innerText = 'Draw'};

    },{ capture: true})
})
const playerChoiceFunc = () => {
    if(playersChoiceFinal === 'btn-rock'){
        
        playerChoice.innerHTML = 'Rock';
    }
    if(playersChoiceFinal === 'btn-paper'){
        
        playerChoice.innerHTML = 'Paper';
    }
    if(playersChoiceFinal === 'btn-scissors'){
        
        playerChoice.innerHTML = 'Scissors';
    }
}
// computer players random Gen Number function
const computerRanChoice = () => {
    const randomNum = Math.floor(Math.random() * allBtns.length);
    // compsChoiceFinal = randomNum;
    if(randomNum === 0){
        comupterChoice.innerText = 'Rock'
    }
    if(randomNum === 1){
        comupterChoice.innerText = 'Paper'
    }
    if(randomNum === 2){
        comupterChoice.innerText = 'Scissors'
    }
   compsChoiceFinal = comupterChoice;
}
// assignign the rules and winners

