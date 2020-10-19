/* Exercice 1 */ 

let a=parseInt(prompt("Donnez-moi un premier nombre"));
let b=parseInt(prompt ("Donnez-moi un second nombre")); 

function superieurOuEgal (a,b){
    if (a>b){
      alert(a+" est plus grand que"+b); 
    } else if (b>a){
      alert(b+" est plus grand que"+a); 
    }
}; 

superieurOuEgal(a,b); 

/* Exercice 2 */ 

function nombre(){
  let nombreUser=parseInt(prompt("Donnez-moi un nombre")); 
  if (nombreUser!=parseInt){
    alert("ce n'est pas un nombre !"); 
  }
} 

nombre(); 