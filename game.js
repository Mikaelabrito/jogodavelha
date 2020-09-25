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
                if (playTime == document.getElementById("jogador")){
                    this.innerHTML = "<img src= 'x.jpg' width= 50px;>";
                    this.setAttribute("jogada", jogador);
                    playTime = computador;
                }else{
                    this.innerHTML = "<img src= 'circle.jpg' width= 50px;>";
                    this.setAttribute("jogada", computador);
                    playTime = jogador;
                }
                quemJoga();
            }
        });
    }
}

async function verificarGanhador(){
    let a1 = document.getElementById("0").getAttribute("jogada");
    let a2 = document.getElementById("1").getAttribute("jogada");
    let a3 = document.getElementById("2").getAttribute("jogada");

    let b1 = document.getElementById("3").getAttribute("jogada");
    let b2 = document.getElementById("4").getAttribute("jogada");
    let b3 = document.getElementById("5").getAttribute("jogada");

    let c1 = document.getElementById("6").getAttribute("jogada");
    let c2 = document.getElementById("7").getAttribute("jogada");
    let c3 = document.getElementById("8").getAttribute("jogada");

    let ganhador = "";
    if(((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3)) && a1 != ""){
       ganhador = a1;
    }else if (((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1)) && b2 != ""){
        ganhador = b2;
    }else if (((c3 == c2 && c3 == c1) || (c3 == b3 && c3 == a3) && c3 != "")){
      ganhador = c3;
    }if(ganhador != a1 && ganhador != c2 && ganhador != b3){
        alert('Deu velha!');
    }else if (ganhador != ""){
       gameOver = true;
        await sleep(50);
        alert(`O jogador ${ganhador} venceu o jogo!`);
    }
}

function mostrar(id) {
	if (document.getElementById(id).style.display == 'none') {
		document.getElementById(id).style.display = 'block';
	} else {
		document.getElementById(id).style.display = 'none';
	}
}