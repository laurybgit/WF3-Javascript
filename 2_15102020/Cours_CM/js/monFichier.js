alert('Hello again ! :)');

function carre(n) {
  let nbCarre= n*n; 
  alert("Le nombre carré est "+nbCarre); 
}

// on peut simplifier : 

function carre (n){
  return n*n;  
} 

alert(carre(n)); 

carre(9); 
carre(18); 

function carreNbUser() {
  let nbUser=parseInt(prompt("Donnez un nombre"));
  let nbCarre=nbUser*nbUser; 
  alert("Votre nombre au carré est "+ nbCarre); 
}

carreNbUser (nbUser); 

// OU : 

let nbUser=parseInt(prompt("Donnez un nombre"));
function carre(n) {
  let nbCarre= n*n; 
  alert("Le carré de"+nbUser+"est" +nbCarre); 
}

carre(nbUser); 
