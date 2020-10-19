/* Les conditions : des tests plus élaborés 

Si (faire votre test), selon le résultat du test --> conséquences 

Par exemple : si vous êtes majeur, vous pouvez entrer. 

if (condition){
  - instruction; 
  - insctruction
}

autreInstruction 

Je veux savoir si mon utilisateur est majeur : 

1. demander l'âge et le stocker dans une variable ; 
2. faire une condition qui vient tester si l'âge est > 17; 
3. Si oui, lui souhaiter la bienvenue / formule de politesse quelconque. 
*/ 

// let ageUser=prompt ("Quel est votre âge ?"); 

// // majeur 
// if (ageUser>17){
//   alert("Ok, vous êtes majeur, bienvenue !"); 
// }

// //pas majeur 
// if(ageUser<17){
//   alert("Vous n'êtes pas majeur !"); 
// }

// // On peut gérer les plusieurs cas ! 
// if(ageUser>17){
//   // majeur 
// }else{
//   // mineur 
// }

// alert("Et sinon, quoi de neuf ?"); 

// Demander l'année de naissance et le mois si 2002 

let anneeNaissance=prompt ("Précisez votre année de naissance"); 

if(anneeNaissance<2002){
  alert("ok entrez");
}
  else{
    if(anneeNaissance>2002){
    alert("you're not welcome");
    } 
  else{
    let moisNaissance=prompt ("Quel est votre mois de naissance alors ?"); 
    if(moisNaissance>=10){
    alert("ok, you're welcome"); 
  }
    else{
      alert("you're not welcome"); 
    }
  }
}