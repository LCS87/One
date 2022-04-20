function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {

   var imc = peso / (altura * altura);
   return imc;

}

var imcFlavio = calculaImc(73, 1.73);
var imcAmigo = calculaImc(84, 1.78);


mostra(imcFlavio);
mostra(imcAmigo);