function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var numeroPensado = Math.floor(Math.random() * 11);
var chute = parseInt(prompt("Digite o chute!"));

if(chute  == numeroPensado) {
    mostra("Voce acertou!");

} else{
    mostra("Voce errou, o numero pensado foi " + numeroPensado);
}