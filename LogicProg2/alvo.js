var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');



pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;
var xAleatorio;
var yAleatorio;

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}

function desenhaAlvo(x, y){

desenhaCirculo(x, y, raio+20, 'red');
desenhaCirculo(x, y, raio+10, 'white');
desenhaCirculo(x, y, raio, 'red');
}
function sorteiaPosicao(maximo){
         return Math.floor(Math.random()* maximo);
}

function atulizaTela(){
    limpaTela()
var xAleatorio = sorteiaPosicao(600);
var yAleatorio = sorteiaPosicao(400);
desenhaAlvo(xAleatorio, yAleatorio);
}

setInterval(atulizaTela,1000);

function dispara (evento){

    var x = evento.pagex - tela.offsetLeft;
    var y = evento.pagey - tela.offsetTop;
   

    if((x > xAleatorio - raio) && (x < xAleatorio + raio)
    && (y > yAleatorio - raio) && (y < yAleatorio + raio)) {

        alert('Acertou!');

    }
}
   tela.onclick = dispara;