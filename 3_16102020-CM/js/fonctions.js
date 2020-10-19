/* ================================================
===                 LES FONCTIONS               ===
===================================================
*/
// imaginons que je veuille faire des conditions successives :
// on demande l'âge d'un "enfant" entre 1 et 18ans, et en fonction, on annonce dans
// quel type d'école il est sensé se trouver

// let ageUser=parseInt(prompt("Donnez votre âge (entre 1 et 18 ans)"));
// if (ageUser<3){
//     alert("vous êtes chez la nounou");
// }else if (ageUser>=3 && ageUser<6){
//     alert("vous êtes en maternelle");
// }else if (ageUser>=6 && ageUser<11) {
//     alert("vous êtes en primaire");
// }else if (ageUser>=11 && ageUser<15) {
//     alert("vous êtes au collège");
// }else {
//     alert("vous êtes au lycée");
// }
// Pour remplacer une grosse succession de if ...else if ...else on a "switch"
/*
0>0  : faux
0>=0 : vrai
*/
/* 
if  (ageUser<110 && ageUser>=0){
    switch (ageUser){
        case 0:
        case 1:
        case 2:
            alert("vous êtes chez la nounou");
        break;
        case 3:
        case 4:
        case 5:
            alert("vous êtes en maternelle");
        break;
        case 6:
            alert("vous êtes en CP");
        break;
        case 7:
        case 8:
        case 9:
        case 10:
            alert("vous êtes en primaire");
        break;
        case 11:
        case 12:
        case 13:
        case 14:
            alert("vous êtes au collège");
        break;
        case 15:
        case 16:
        case 17:
        case 18:
            alert("vous êtes au lycée");
        break;
        default: 
            alert("vous êtes un adulte...");
        break;
    }
}else{
    alert("vous avez tapé n\'importe quoi...");
}

// --------------------------------------------------------- 
let compteur=0;
while(true){ // à éviter quand même :)
    compteur++; //4
    alert('booo');
    if(compteur>3){
        break; // break permet d'arrêter une boucle...
    }
} */

/* while(true){ 
    alert('booo');
    while(true) {
        compteur++; 
        alert('bwaaaah');
        if(compteur>2){
            break; // break permet d'arrêter LA boucle...
        }
    } 
} */

//---------------------------------------------------
// Une fonction c'est un ensemble d'instructions que l'on peut utiliser à volonté...

/*
 function nomFonction () {
    -instruction;
    -instruction;
    -instruction;
    ...
}
*/
/* Vous avez un robot chez vous, qui vous aide à cuisiner.
Vous voulez lui apprendre à cuisiner :

function faireBouillir( temp ) {
    -prendre une casserole;
    -remplir la casserole d'eau;
    -poser la casserole sur la plaque;
    -allumer la plaque;
    -attendre que la temperature de l'eau atteigne temp °C;
}

faireBouillir(80);  // eau à 80°C
faireBouillir(100); // eau à 100°C
faireBouillir(90);  // eau à 90°C
*/
// fonction avec 0 argument : 
function politesse( ) {
    alert("bonjour toi");
}

politesse();
politesse();
politesse();

// fonction avec 1 argument : 
function politesse2( nomUser ) {
    alert("bonjour "+nomUser);
}
politesse2("christian");
politesse2("amine");
politesse2("otho");

// fonction avec 2 arguments
function addition(nb1, nb2) {
    alert(nb1+"+"+nb2+"="+(nb1+nb2));
}

addition(125, 39);
addition(58.89, 24.12);

Math.random();  // 0 et 1 (exclu)

// "définition de la fonction"
function randomMinMaxAlert(min, max){
    let nbHasard=Math.round((max-min)*Math.random()+min);
    alert("nombre pris entre "+min+" et "+max+" : "+nbHasard);
}

// "appel de la fonction"
randomMinMaxAlert(200,250);

// portée d'une variable ("scope")
// "le Let a une portée de bloc"
// "var une portée plus grande que let"
// "var a une portée (limitée à) la fonction"

/* if(5>2){
    var monLet=5;
    console.log("monLet= "+monLet);
}
console.log("monLet= "+monLet);
 */
let nbHazar=0; // cette variable a une portée "globale"... :)

function randomMinMaxAlert2(min, max){
    nbHazar=Math.round((max-min)*Math.random()+min);
    alert("nombre pris entre "+min+" et "+max+" : "+nbHazar);
}
randomMinMaxAlert2(300, 400);
console.log("nbHazar= "+nbHazar);


// "définition de la fonction"
function randomMinMax(min, max){
    let nbHasard=Math.round((max-min)*Math.random()+min);
    // alert("nbHasard="+nbHasard);
    return nbHasard;
}

let unNombreAuHasard=randomMinMax(1, 50);
console.log("unNombreAuHasard="+unNombreAuHasard);

// 1.0 créer la fonction carre ?
// carre(5) doit vous retourner 25
// carre(9) doit vous retourner 81

// 1.1 demandez à l'utilisateur un nombre, et donnez lui son carré.
function carre (nb) {
    return nb*nb;
}
/*
ou bien (plus détaillé)
function carre (nb) {
    let resultat = nb*nb;
    return resultat;
}
*/
alert( carre(5) );
alert( carre(8) );

let nbUser= parseInt(prompt("Donnez un nombre, je calcule son carré"));
alert("le carré de "+nbUser+" est : "+carre(nbUser));

// frottons nous à la fonction puissance (Math.pow(a,b) = a^b)
function puissance(a, b) {
    if (b==0){
        return 1;
    }else{
        let resultat=1;
        for (let i=1; i<=b; i++){
            resultat=resultat*a;
        }
        return resultat;
    }
}
alert("puissance(2,4)= "+puissance(2,4));
let nombre= parseInt(prompt("Donnez un nombre"));
let puiss= parseInt(prompt("Donnez sa puissance, je calcule."));

alert("puissance("+nombre+","+puiss+")= "+puissance(nombre,puiss));
// une autre version de la même fonction, plus "subtile";
function puissance2(a, b) {
    let resultat=1;
    for (let i=0; i<b; i++){
        resultat=resultat*a; 
    }
    return resultat;
}
alert("puissance2("+nombre+","+puiss+")= "+puissance2(nombre,puiss));
