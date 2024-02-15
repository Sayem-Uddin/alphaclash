function hideElementById (elemenId){
    const element = document.getElementById(elemenId)
    element.classList.add('hidden')
}
function setElementbyId (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}
function showElementById (elemenId){
    const element = document.getElementById(elemenId)
    element.classList.remove('hidden')
}
function getRandomAlphabet(){
    const alphabetString ="abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet
}