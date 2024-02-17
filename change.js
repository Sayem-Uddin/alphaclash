// function play(){
//     const startGame = document.getElementById('start-game')
//      startGame.classList.add('hidden')
//      const gameSection = document.getElementById('game-section')
//      gameSection.classList.remove('hidden')
// } 

function play(){
    hideElementById('start-game')
    hideElementById('score')
    showElementById('game-section')
    setElementValueById('current-score',0)
    setElementValueById('current-life',10)
    continueGame ()
    
}
function handleKeyboardButtonListener (event){
   const playerPressed = event.key 
   const currentAlphabetElement = document.getElementById('current-alphabet')
   const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase();
   
   if(playerPressed === 'Escape'){
    gameOver()
   }
   if( playerPressed === expectedAlphabet){
    console.log('you got a point')
    
    const currentScore = getTheNumber('current-score');
    const newScore = currentScore+1;
    setElementValueById('current-score',newScore)
    removeBackgroundById(expectedAlphabet)
    continueGame ()
   }
   else{
    console.log('you lost a life');
    const currentLife = getTheNumber('current-life');
    const newLife = currentLife-1;
    setElementValueById('current-life',newLife)
    if(newLife === 0){
      gameOver()
      
    }

    // const currentLifeElement = document.getElementById('current-life')
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife -1;
    // currentLifeElement.innerText  = newLife;
   }
}

document.addEventListener('keyup',handleKeyboardButtonListener )


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

function gameOver(){
  hideElementById('game-section');
      showElementById('score')
      const lastScore = getTheNumber('current-score');
      const alpha = getTextOfElementBYId('current-alphabet')
      removeBackgroundById(alpha)
      setElementValueById('final-score',lastScore)
}
