function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
var numeroPensado = Math.floor(Math.random() * 10);
var tentativas = 1;

while (tentativas <= 5) {


    var chute = parseInt(prompt("Digite o chute!"));

    if (chute == numeroPensado) {
        mostra("Voce acertou!");
        break;

    } else {
        mostra("Voce errou!!!");
        }

        tentativas++;

    }

    mostra("FIM");