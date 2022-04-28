var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect( 0, 0, 600, 400 );

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = ('red');
pincel.fillRect(400, 0, 200,400);

pincel.fillStyle = 'yellow';
pincel.beginPath(); /* beginPath cria um novo caminho*/
pincel.moveTo(300,200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill();

pincel.fillStyle = 'blue';
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill();