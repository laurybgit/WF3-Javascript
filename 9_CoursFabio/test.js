/* On peut utiliser emmet dans JS */ 

function addition(a,b) {
  let resultat=a+b; 
  return resultat; 
}

console.log (addition (1,2)); 

const additionArrow = (a,b) => {
  let resultat=a+b; 
  return resultat; 
}

/* Fonction température de l'eau */ 

function h20 (temp=1){
  let etat=null; 

  if (temp<=0){
    etat="glace"; 
  } else if (temp<100){
    etat="liquide"; 
  } else if (temp>100) {
    etat="vapeur"; 
  }
  /* on retourne un objet donc pour rappel : 
  objet { clé : valeur,
          clé : valeur, 
          clé : valeur, } */ 

  return {
    etat: etat, 
  }
} 