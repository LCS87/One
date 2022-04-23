function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
/*
var mult = 1;

while(mult <= 10) {
   mostra(7 * mult);
    mult = mult + 1;
} */

for (var mult = 1; mult <= 10; mult = mult + 1){

    mostra (7 * mult);
}
mostra("FIM");
