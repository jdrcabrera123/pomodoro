let startButton = document.querySelector('#startButton');
let pauseButton = document.querySelector('#pauseButton');
let staticImage = document.querySelector('.image-container');
let gifImage = document.querySelector('.image-container-gif');
let isShow = true;

function showHide() {

    staticImage.classList.toggle('hide');
    gifImage.classList.toggle('hide');
    startButton.classList.toggle('hide');
    pauseButton.classList.toggle('hide');
    
    startButton.innerHTML = 'CONTINUE';


}