let nbCoups=0; 
let nbMystere=(Math.round (1+49*Math.random())); // Math.round arrondit (car Math.random fait des nombres entre 0 et 1). 1+49* math random permet de faire 49*math random (donc 49* entre 0 et 1) et on rajoute 1 pour ne pas commencer à 0. 
console.log(nbMystere); 
let nbUser=0; 

if(nbUser>=1 && nbUser<=50){ //&& == ET absolu. Il y a aussi OU, DIFFERENT (en bas). 
  while(nbUser!=nbMystere){ //! = donne != avec fira code. Ca veut dire différent. 
  nbUser=parseInt(prompt("Donnez un nombre entre 1 et 50")); 
    nbCoups++; // ça veut dire +1 à chaque fois. Pareil avec -- qui veut dire moins 1 à chaque fois. C'est la variable que l'on va pouvoir compter pour faire la boucle en gros. 
    if(nbUser>nbMystere){
      alert("le nombre cherché est plus petit"); 
    }
    else if (nbUser<nbMystere){
      alert("Le nombre cherché est plus grand"); 
    }
    else{
      alert("Bravo, bien joué ! Vous avez trouvé en : "+nbCoups+ " tentatives"); 
      }
  }
}
  else{
    alert("ce n'est pas ok"); 
  }





