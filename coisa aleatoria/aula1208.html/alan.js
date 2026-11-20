function listarNumeros() {
let i = Number(document.getElementById("i").value);
let a = Number(document.getElementById("a").value);
let b = Number(document.getElementById("b").value);
let c = Number(document.getElementById("c").value);

if(i == 1){

if(a>b && b>c){
  alert(a +"," + b + "," +  c  )
}

else if (a>c && c>b){
  alert( a +"," + c + "," +  b )
 }


else if (b>a && a>c){
  alert( b +"," + a + "," +  c )
}


else if (b>c && c>a){
  alert( b +"," + c + "," +  a )
}


  else if (c>a && a>b){
  alert( c +"," + a + "," +  b  )
}

else if (c>b && b>a){
  alert( c +"," + b + "," +  a  )
}

}


//menor
else if (i == 2){

if(a<b && b<c){
  alert(a +"," + b + "," +  c  )
}

else if (a<c && c<b){
  alert( a +"," + c + "," +  b )
 }

else if (b<a && a<c){
  alert( b +"," + a + "," +  c )
}

else if (b<c && c<a){
  alert( b +"," + c + "," +  a )
}

  else if (c<a && a<b){
  alert( c +"," + a + "," +  b  )
}

else if (c<b && b<a){
  alert( c +"," + b + "," +  a  )
}

}

else if(i == 3){
  if(a<b && b>c){
  alert(a +"," + b + "," +  c  )
}

else if (a<c && c>b){
  alert( a +"," + c + "," +  b )
 }

else if (b<a && a>c){
  alert( b +"," + a + "," +  c )
}

else if (b<c && c>a){
  alert( b +"," + c + "," +  a )
}

  else if (c<a && a>b){
  alert( c +"," + a + "," +  b  )
}

else if (c<b && b>a){
  alert( c +"," + b + "," +  a  )
}


}

else{
  alert('numero invalido :)')
}

}