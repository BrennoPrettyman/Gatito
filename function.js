function mudarPosicao() {
    var btn = document.getElementById("btn");
    var novaPosicaoX = Math.floor(Math.random() * window.innerWidth);
    var novaPosicaoY = Math.floor(Math.random() * window.innerHeight);
    btn.style.left = novaPosicaoX + "px";
    btn.style.top = novaPosicaoY + "px";
}

function redirecionar() {
    window.location.href = "https://www.youtube.com/watch?v=e-fA-gBCkj0";
};