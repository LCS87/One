var segredo = [5, 7, 10, 2, 3];

var input = document.querySelector("input");
input.focus();

function verifica() {
 var achou = false;
  for (var posicao = 0; posicao < segredo.length; posicao++) {

    if (input.value == segredo[posicao]) {

      alert("Voce Acertou!");
      achou = true;
      break;
    }
  }
  if (achou == false){
  alert("Voce Errou!!!!!!!!!!");
}


input.value = "";
input.focus();
}
var button = document.querySelector("button");
button.onclick = verifica;