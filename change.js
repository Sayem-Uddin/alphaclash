// function play(){
//     const startGame = document.getElementById('start-game')
//      startGame.classList.add('hidden')
//      const gameSection = document.getElementById('game-section')
//      gameSection.classList.remove('hidden')
// } 

function play(){
    hideElementById('start-game')
    showElementById('game-section')
    continueGame ()
}

function continueGame (){
  const alphabet =  getRandomAlphabet()
  const currentAlphabet = document.getElementById("current-alphabet")
  currentAlphabet.innerText =alphabet;
  setElementbyId(alphabet)
//    console.log(alphabet)
   
}

function getRandomAlphabet(){
    const alphabetString ="abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet
}