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
    mostra("O imc Calculado é" + imc);
}


calculaImc(73, 1.73);
calculaImc(68, 1.72);