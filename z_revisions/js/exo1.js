// Révisions Javascript : reprise de tous les exos 

// EXERCICE 1 // 

/* Créez un petit script qui demande un mot de passe à l'utilisateur,
puis qui le compare avec "le vrai mot de passe", 
et enfin indique à l'utilisateur si c'est correct (true /false) */

// 1. créer la variable avec le vrai mot de passe
// 2. poser la question au User, et stocker sa réponse dans une variable
// 3. on compare les 2 variables et on retourne le résultat

let mdp = "joligentil"; 

let userMdp = prompt("quel est le mot de passe please?"); 

  if (userMdp==mdp){
    alert("ok, vous pouvez entrer"); 
  } else{
    alert("heu non recommencez please"); 
  }

// pour afficher true or false, la réponse était 
let siteMDP="kaput";
let userMDP= prompt("Quel est le mot de passe");
alert("le mot de passe est : "+(siteMDP==userMDP)); 