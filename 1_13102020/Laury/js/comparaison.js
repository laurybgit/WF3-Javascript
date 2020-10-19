// comparaisons 

// le but est de tester des affirmations : inférieur ou supérieur 
console.log("100>1 est :"); 
console.log(100>1); 

console.log("100<1 est :"); 
console.log(100<1); 

//Inégalités larges 
console.log(100>=100); 

// ATTENTION SYNTAXE
console.log("100=100 est : ")
console.log(100==100); //double égal pour ne pas être confondu avec l'affectation 

let password="692504";
console.log("107985==password ?");  
console.log(107985==password); 
console.log(692504==password); 

let monMDP="351807"; 
console.log(monMDP==password); 

console.log("ascete < ascenseur ?"); 
console.log("ascete"<"ascenceur"); //il va regarder l'ordre alphabétique 

let anneeEnCours=2020; 
let anneeNaissance=1999; 
console.log(anneeEnCours-anneeNaissance>=18); 

/* les fonctions 

- alert () = mettre un message dans une boîte de dialogue 
- */ 
let majeur= confirm ("Êtes-vous majeur ?"); 
console.log ("la personne est majeure: " +majeur); 

let prenomUser= prompt("Quel est votre prénom ?"); 
console.log("le pelo s'appelle : " + prenomUser); 
alert("Enchanté, bien le bonjour"+" "+prenomUser+" !"); 

let siteMDP="2504"; 
let userMDP= prompt("Entrez le mot de passe");
alert(siteMDP==userMDP); 

console.log ("J'ai eu 10 ans il y a 22 ans. J'ai donc "+10+22+" ans."); // JS va faire de la concaténation et pas du calcul. 
console.log ("J'ai eu 10 ans il y a 22 ans. J'ai donc "+(10+22)+" ans.");
