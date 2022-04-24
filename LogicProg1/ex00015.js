function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var totalFamiliares = parseInt(prompt("Quantidade de Familieares?"));

var numero = 1;

var totalIdades = 0;

while (numero  <= totalFamiliares) {
    
    var idade = parseInt(prompt("Informe idade do familiar"))
    totalIdades = totalIdades + idade;
    numero++;
}

var mediaDasIdades = totalIdades/totalFamiliares;
mostra("A medida das idades dos Fami9liares é :" + mediaDasIdades);
mostra("FIM");