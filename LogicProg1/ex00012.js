function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var contador = 30;

while(contador <= 40) {

    if( contador == 33 ) {
    contador = contador + 1;
    }
    else if(contador == 37) {    
        contador = contador + 1;
    }
    else {
    mostra(contador);
    contador = contador + 1; 
    }
  }

mostra("FIM");