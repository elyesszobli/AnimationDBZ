import "./style.css";

const img = document.querySelector('img');
const button = document.querySelector('button');

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');

    // Ajouter un écouteur d'événement pour détecter un clic sur la page
    document.body.addEventListener('click', () => {
        audio.play();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeImageButton');

    button.addEventListener('click', changeImage);
    
});

function changeImage() {
    var image = document.querySelector('img');
    const audio = document.getElementById('transforme-sound');
    image.src = './assets/images/pos2.png';
    audio.play();
    setTimeout(function(){
        image.src="./assets/images/pos3.png";
        audio.src="./assets/sounds/Anime Powerup with Aura Burst (Dragonball Super Saiyan 2) - Sound Effect for editing.mp3";
    },8000);
    
}
