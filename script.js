const audio = document.getElementById("audio");
const playPause = document.getElementById("play-pause");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const volume = document.getElementById("volume");
const time = document.getElementById("time");

// PLAY E PAUSE
playPause.addEventListener("click", () => {
    if(audio.paused){
        audio.play();
        playPause.textContent = "⏸️";
    }else{
        audio.pause();
        playPause.textContent = "▶️";
    }
});

// BARRA DE PROGRESSO
audio.addEventListener("timeupdate", () => {

    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";

    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);

    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);

    time.textContent =
    `${currentMinutes}:${currentSeconds.toString().padStart(2,'0')} / ${durationMinutes}:${durationSeconds.toString().padStart(2,'0')}`;

});

// CLICAR NA BARRA
progressContainer.addEventListener("click", (e) => {

    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;

});

// VOLUME
volume.addEventListener("input", () => {

    audio.volume = volume.value;

});
const container = document.getElementById("corações-container");

function criarCoracao(){

    const coracao = document.createElement("div");

    coracao.classList.add("coração");

    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random() * 100 + "vw";

    coracao.style.animationDuration = (Math.random()*3 + 2) + "s";

    container.appendChild(coracao);

    setTimeout(()=>{
        coracao.remove();
    },5000);

}

setInterval(criarCoracao,300);
window.onload = function(){

const audio = document.querySelector("audio");

audio.currentTime = 29;
}
audio.addEventListener("timeupdate", () => {
    if (audio.currentTime >= 60) {
        audio.pause();
    }
});