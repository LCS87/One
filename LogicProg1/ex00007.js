function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
//prompt nao convert texto em numero//
var vitorias = Number(window.prompt("Digite o numero de Vitorias."));

var empates = parseInt(prompt("Digite o numero de Empates."));

var pontos = (vitorias * 3 + empates);

mostra("O Numero de pontos do seu time é: " + pontos);