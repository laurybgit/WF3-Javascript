/* Les boucles ! 

C'est une instruction qui permet de répéter un certain nombre de commandes. Il y a plusieurs façons de faire des boucles. 

while (conditionVraie){
  -instruction; 
  -instruction 
} */ 

// 1. While 
let varNum=3; // s'assurer évidemment que la condition de départ est bonne pour la boucle (si varNum était >5 ça ne marcherait jamais)
while(varNum<5){
  varNum++; // var num va successivement prendre les valeurs allant de 0 à 4. Equivalent à varNum+=1; 
  console.log("coucou n°"+varNum+"!"); 
}
console.log("fin de la boucle"); 

/* 2. dowhile : fais tant que 
On s'assure ici qu'il y aura au moins un passage dans la boucle */  
console.log("début de la boucle tant que..."); 
do{
  console.log("coucou n°"+varNum); 
  varNum--; 
}
  while(varNum>5); 
  console.log("fin de la boucle")

  // 3. Boucle "for". Différente en syntaxe et utilisation 
  /* Définir le nb de passages à l'avance. 

    for (phase d'initialisation; condition; incrementation){
      instruction; 
    } 
  */ 

  console.log ("----------- boucle for ---------------")
  for (let i=0; i<8; i++){
    console.log("boucle for : i="+i); 
  }

  // Intérêt for : quand on sait quand ça va se finir. Intérêt while : l'inverse, quand on ne sait pas. 

  /* Exo :  
  
  - faire une boucle while, qui affichera 15 fois le message "je suis un boss n°" suivi du numéro de passage. 

  - faire une boucle qui affichera "je suis le petit dinosaure" + numéro de passage allant de 8 à 16 

  - une boucle qui demande 5 fois à l'utilisateur de saisir un nombre (peu importe lequel). A la fin des 5 questions, une alerte donne la somme des nombres. */ 

let varNum2=1; 
while(varNum2<16){
  console.log("je suis un boss n° "+varNum2);
  varNum2++; 
}

for (let varNum3=8; varNum3<16; varNum3++){
  console.log("je suis le petit dinosaure n°"+varNum2)
}

let somme=0; 
for (let k=0;k<5;k++){
  let choix=parseInt(prompt("Choisissez un nombre")); 
  somme+=choix; //somme=somme+choix 
}
alert ("somme=" +somme); 

/* Exercice : faire choisir un nombre entre 1 et 50 au navigateur 
Demander à l'utilisateur de proposer un nombre, et informer si le nombre cherché est plus grand ou plus petit. 
Le "jeu" ne s'arrête qu'une fois le nombre trouvé 
Vous ajouterez un message de félicitations à l'utilisateur. */ 

//math : pioche dans la bibliothèque de fonctions mathématiques. random : pour le pseudo aléatoire. JS donnera un nombre entre 0 et 1. 

let a=(Math.round (1+49*Math.random()));
let b=parseInt (prompt("Choix d'un nombre")); 
  if (a=b) {
  alert("bravo, c'est le bon nombre !"); 
  }
    else{
      if (b<a) {
        alert("ce n'est pas le bon nombre !"); 
      }
      if(b>a){
      alert("ce n'est pas le bon nombre !"); 
    } 
  }
