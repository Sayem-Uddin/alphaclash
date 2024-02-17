function hideElementById (elemenId){
    const element = document.getElementById(elemenId)
    element.classList.add('hidden')
}
function setElementbyId (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}
function removeBackgroundById (elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-500')
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

function getTheNumber(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNumber = parseInt(elementText);

    return elementNumber


}
function setElementValueById (elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getTextOfElementBYId (elementId){
    const element = document.getElementById(elementId)
    const elementText = element.innerText;
    return elementText

}

