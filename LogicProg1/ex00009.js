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

mostra(nome + " O seu IMC calculado é : " + imc);

if(imc < 18.5){
    mostra("Voce esta abaixo do recomendado!");
}

if (imc > 35){
    mostra("Voce esta acima do recomendado!");
}

if(imc >= 18.5 && imc <= 35){
   // if(imc <= 35){}
    mostra("Seu IMC esta excelente!!!");
   
}