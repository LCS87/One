function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var vitorias = Number(window.prompt("Digite o numero de Vitorias."));

var empates = parseInt(prompt("Digite o numero de Empates."));

var pontos = (vitorias * 3 + empates);

mostra("O Numero de pontos do seu time é: " + pontos);

if (pontos > 28) {
    mostra("Seu time esta melhor do que o ano passado");
}
if (pontos < 28) {
    mostra("Seu time esta pior que ano passado");
}
if (pontos == 28) {
    mostra("Seu time esta igual ao ano passado");
}
mostra("FIM")