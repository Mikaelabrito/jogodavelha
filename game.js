const jogador = "X";
const computador = "O";
let gameOver = false;
let playTime = "";

function vezdojogador(){
    playTime = document.getElementsByTagName("jogador");
    playTime = document.querySelectorAll("div#header img")[0];
    playTime.setAttribute("src", "circle.jpg");
}
function vezdoCPU(){
    playTime = document.getElementsByTagName("computador");
    playTime = document.querySelectorAll("div#header img")[0];
    playTime.setAttribute("src", "x.jpg");
}

function quemJoga(){
    let player = document.getElementById("select").value;
    if(player == "jogador"){
        vezdojogador();
    }else{
        vezdoCPU();
    }
}

function inicializarEspacos(){
    let espacos = document.getElementsByClassName("campo");
    for(let i = 0; i < espacos.length; i++){
        espacos[i].addEventListener("click", function(){

            if (gameOver) { return;}
            if (this.getElementsByTagName("img").length == 0){
                if (playTime == jogador){
                    this.innerHTML = "<img src= 'x.jpg' width= 50px;>";
                    this.setAttribute("jogada", jogador);
                    playTime = computador;
                }else{
                    this.innerHTML = "<img src= 'circle.jpg' width= 50px;>";
                    this.setAttribute("jogada", jogador2);
                    playTime = jogador1;
                }
                atualizaView();
                verificarGanhador();
            }
        });
    }
}