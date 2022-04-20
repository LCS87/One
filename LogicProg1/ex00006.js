function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {

   return peso / (altura * altura);

}

var nome = prompt("Informe o seu Nome : ");
var alturaInformada = prompt(nome + ", informe sua altura");
var pesoInformado = prompt(nome + ", informa seu peso");

var imc = calculaImc(pesoInformado, alturaInformada);

document.write(nome + " O seu IMC calculado é : " + imc);