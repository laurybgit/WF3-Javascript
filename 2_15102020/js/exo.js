let nbCoups=0; 
let nbMystere=(Math.round (1+49*Math.random()));
console.log(nbMystere); 
let nbUser=0; 

if(nbUser>=1 && nbUser<=50){
  while(nbUser!=nbMystere){ //! = donne != avec fira code. Ca veut dire différent. 
  nbUser=parseInt(prompt("Donnez un nombre entre 1 et 50")); 
    nbCoups++; 
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





