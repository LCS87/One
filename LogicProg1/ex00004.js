function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(peso1, altura1, peso2, altura2) {

    var imc1 = peso1 / (altura1 * altura1);
    var imc2 = peso2 / (altura2 * altura2);
    var imcTotal = imc1 + imc2;
    mostra("A soma dos imc's é : " + (imc1 + imc2));
}


calculaImc(73, 1.73, 84, 1.78);


