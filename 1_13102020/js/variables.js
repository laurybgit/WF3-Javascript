// Les variables 

/* Nommer une variable : 
- pas de caractères spéciaux 
- pas d'espaces 
- pas de nombres au début 
- pas de tiret - (considéré comme moins)
- sensible à la casse (camelCase)
- donner un nom parlant 
*/ 

let monSlip; // j'ai créé mon "tiroir" (=variable) qui s'appelle monSlip qui ne contient rien. Création de variable. 

// ranger un truc dans monSlip : faire une affectation de variable. Le "=" est le caractère d'affectation. 
monSlip="CK"; 

//création et affectation de variable dans le même temps 
let monAge=44; 

//on n'oublie pas de créer les let que l'on va utiliser, et bien évidemment de les créer avant de les appeler

console.log(monSlip); //pas de guillemets : va aller chercher le contenu de la variable. 
console.log(monAge); 
console.log("monSlip"); // la présence de guillemets indique une chaîne de caractères, va afficher à l'identique dans la console.  

//plusieurs types de variables. Attention JS est fortement typé ! Il regarde le type de variables et la syntaxe. 

/* Les types de variables 
  - des chaînes de caractères : string 
  - des nombres Number, int (integer = entier), uint (unsigned integer)... / en fonction du type, JS va s'attendre à un certain type de nombres. 
  - booléens (boolean) : true, false / résultat binaire : vrai, ou faux. On le verra au moment des conditions. */ 

let toto="voiture"
let monPrenom="Christian"; 
let maTaille= 178; 
let uneVariable=toto; // test sans guillemets. Ici on indique que uneVariable=toto donc uneVariable contiendra "voiture" aussi 

// on peut changer une variable à volonté ! 
maTaille=180; 
maTaille=190; 

maTaille=190; 
console.log("maTaille"+maTaille); 
// peut être écrit aussi pour créer l'espace : 
console.log("maTaille :"+maTaille); 

// j'essaie d'afficher bonjour Laury comment-vas tu ?

monPrenom="Laury"

console.log("Bonjour",monPrenom+", comment vas tu ?"); 

// on peut aussi déclarer des constantes : ce sont des variables qui ne sont pas amenées à changer 
const GRAVITE=9.81; 
// norme: on a tendance à écrire les noms de constantes en CAPITALES

let rayon= 10; 
let circonference=2*GRAVITE*rayon; 

console.log (circonference); 

// On peut faire des calculs sur les variables 

maTaille=100+78; 
console.log("maTaille = "+maTaille); 

maTaille=200-22; 
maTaille= 58+10*30/(2-5); 

maTaille=maTaille+10; 
maTaille+=10; //ces deux lignes sont équivalentes ! Dans les deux cas on récupère la valeur de maTaille et on lui réaffecte 10. 
console.log("maTaille =" +maTaille); 

// La concaténation 
let prenom="Christian"; 
let nom="Migliore"; 
let identite= nom+" "+prenom; 
console.log (identite); 

let phraseAccueil, debut="Il m'a dit", fin="bonjour"; 
phraseAccueil=debut+" "+fin; 
phraseAccueil+=" l'ami :)"; 
console.log (phraseAccueil); 

let autreVariable; 
console.log ("autreVariable="+autreVariable); //undefined mais pas d'erreur 

let chaineVide=""; 
console.log ("chaineVide="+chaineVide);

autreVariable+=5; //On ajoute 5 à la variable vide
console.log ("autreVariable="+autreVariable);

autreVariable+="coucou"; 
console.log("autreVariable="+autreVariable); 

let test=null //"ouverte sur son typage"
test+="coucou";  
console.log(test); 

// Quelles seront les valeurs de A,B,C,D à la fin du script 

let A=0, B=0, C=0, D=0; 
A=3,5; 
B=1,5; 
C=A+B; //3.5+1.5 = 5 
B=A+C; // 3.5 + 5 =8.5 
A=B; // 3.5= 8.5 donc A devient 8.5

A=B=C=D=0; 
A=0.1; 
B=1.1; 
C=B; // C=1.1 
D=A+1; // D= 0.1+ 1 = 1.1 
A=D+C; // A =2.2

// échanger des variables 
let monsieur="ErvitmonSlip"; 
let madame="Manfroa"; 

let temp=""; 
temp=monsieur; 
monsieur=madame; // Monsieur Manfroa
madame=temp; // ErvitmonSlip
