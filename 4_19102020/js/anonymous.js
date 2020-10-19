/* =======================================================================
===                         fonctions anonymes                         ===
==========================================================================
*/

// Une fonction anonyme est une fonction  qui ne possède pas de nom, mais son 
// "fonctionnement" reste identique à une fonction classique.
/* 
function () {
    alert('soucis');
}
*/
// on peut se servir d'une variable pour ecxecuter ce type de fonctions -peu utilisé-
let johnny = function (){ 
    alert("Que je t'aimeuuu...");
};
//  si je veux appeler la fonction, je me sers de la variable (qui fait référence à la fonction et on ajoute les arguments s'il y en a) :
johnny();

// Dans la plupart des cas on crée une fonction anonyme lorsqu'on a besoin de l'éxécuter immédiatement
// ce sont les parenthèses autour de la définition de la fonction qui se chargent de l'exécuter...
(function () {
    alert('anonymous !');
}) ();
// (la fonction s'est lancée)

//----------------------------------------------------------
//--- rien à voir avec les fonctions anonymes : juste de la pratique

/* 1. Créez un petit script qui demande 2 nombres à l'utilisateur, et qui va indiquer le plus grand des deux.

2. Créez une fonction qui demande un nombre. C'est tout.
(Si l'utilisateur donne autre chose qu'un nombre, on lui repose la question)
Lorsqu'on obtient bien un nombre, la fonction renvoie un return. */

//1 .
function lePlusGrand(){
    let a=parseInt(prompt("Donnez un nombre"));
    let b=parseInt(prompt("Donnez un second nombre"));
    if(a<b){
        alert(a+"<"+b);
    }else if (a>b) {
        alert(a+">"+b);
    }else{
        alert(a+"="+b);
    }
}

lePlusGrand();

// ------------------------------
// NaN = Not a Number
// la fonction isNaN() vient tester si le paramètre à l'intérieur des parenthèses
// n'est PAS un Nombre !
console.log(isNaN("string")); // true
console.log(isNaN(1285.58)); // false

function numberOnly () {
    while (true){
        let nbUser=parseInt(prompt("Donnez un nombre"));
        if(!isNaN(nbUser)){
            // si c'est un nombre
            return nbUser; // fait aussi de "break"
        }
    }
}
numberOnly ();

function numberOnly2 () {
    do {
        var nbUser=prompt("Donnez un nombre, svp");
    }while(isNaN(nbUser));
    // tant que l'utilisateur choisit autre chose qu'un nombre
    return nbUser;
}
numberOnly2 ();

alert("function isMajor() : ");
function isMajor() {
    let ageUser=numberOnlyUltimate("Quel est votre âge ?");
    if(ageUser>=18){
        alert("vous êtes majeur !");
    }else{
        alert("vous êtes mineur, vous ne pouvez pas entrer !");
    }
}
isMajor();

//-------------------------------
// fonction utime pour demander à la personne son age, ou autre nombre 
function numberOnlyUltimate (question) {
    do {
        var nbUser=prompt(question);
    }while(isNaN(nbUser));
    // tant que l'utilisateur choisit autre chose qu'un nombre
    return nbUser;
}
numberOnlyUltimate("Quel est votre âge ?");
numberOnlyUltimate("Quel est votre poids ?");
numberOnlyUltimate("Quel est votre taille ?");