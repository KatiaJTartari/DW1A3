/* Fatorial com For */

function fatorial(){
  var num = parseInt(document.getElementById('num').value);
  var result = document.getElementById('result');
  var fat=1;

  for(var cont=1 ; cont<=num ; cont++)
    fat *= cont;

  result.innerHTML = fat;
} 

/* OU  Fatorial com While */
/*
function fatorial(){
  var num = parseInt(document.getElementById('num').value);
  var result = document.getElementById('result');
  var fat=1;
  var cont=1;

  while(cont<=num){
   fat *= cont;
   cont++;
  }

  result.innerHTML = fat;
}
*/