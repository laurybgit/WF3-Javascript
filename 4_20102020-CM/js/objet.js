/* ==========================================================
===                     objets et autres                  ===
=============================================================

*/
// créons un objet litteral :
let eleve1={ prenom:"Othman", 
             age:28, 
             adresse:"12 rue de la paix",
             codepostal: 69004,
             ville: "Lyon",
             1:"toto" };

console.log(typeof eleve1); // objet

console.log(eleve1.prenom); // Othman
console.log(eleve1['age']); // 28
// console.log(eleve1[1]); // toto  on évite quand même d'avoir des clés "numériques" (peu d'intérêt)
// (mais ça fonctionne)
console.log(eleve1);

// 2 notations pour ajouter une paire clé:valeur dans l'objet :
eleve1.mail="ottoBiker@gmail.com";
eleve1["nom"]="Rogler";

console.log(eleve1);
console.log("-------------------------");
// parcourir un objet ? avec une boucle "for ... in" bien sûr !
for (let id in eleve1){
    console.log(eleve1[id]);
}

//---- exemple "simple" d'utilisation d'un objet ?
function coordonnees() {
    // code fictif
    return { x:25, y:12.5 };
}
console.log("------------"); 
console.log(coordonnees().x); // 25
console.log(coordonnees().y); // 12.5
// la fonction, grâce au return, devient un objet, contenant 2 clés/valeurs...

console.log("----------------------------------"); 
// dans ce cas, pour récupérer toutes les valeurs d'un "objet-fonction", on utilise toujours la boucle for...in
// en passant par une variable. Celle-ci permet la notation variable[cle].
let monObjet=coordonnees();
for(let id in monObjet){
    console.log(monObjet[id]);
}

// ======================== Manipulons la page html : =====================
// Pour sélectionner un élément on dispose de quelques méthodes :
// getElementById("nomIdentifiant");

document.getElementById("titre1");

// Une méthode permettant de modifier ou d'ajouter un attribut :
// Le 1er argument est le nom de l'attribut, le 2e est sa valeur
// setAttribute("nomattribut","valeurAttribut");

let titre = document.getElementById("titre1"); // la variable "titre" fait référence à la balise <h1 id="titre1">
titre.setAttribute("style","color:red;");      // <h1 id="titre1" style="color:red;">
titre.setAttribute("title","ceci est le titre"); // <h1 id="titre1" style="color:red;" title="ceci est le titre">

// autre méthode de sélection : getElementsByTagName("img");
// cette méthode  va produire un tableau qui contiendra tous les éléments recherchés
let mesPhotos= document.getElementsByTagName("img"); // mesPhotos est un tableau
console.log(mesPhotos);mesPhotos[0].setAttribute("style","border: 2px solid blue;");
mesPhotos[0].setAttribute("src","http://placeimg.com/200/200/arch");
mesPhotos[0].setAttribute("alt","image d'architecture - placeholder");

let monParagraphe = document.querySelector("body p");
// avec ce sélecteur, seulement le premier élément trouvé sera sélectionné
monParagraphe.setAttribute("style", "color:pink; text-transform:uppercase; text-align:center");

// sélecteur querySelectorAll() ----> c'est un tableau
let mesLiens= document.querySelectorAll("body p a");

// LA propriété innerHTML permet d'afficher le contenu de la balise.
console.log(mesLiens[0].innerHTML); // adipisicing elit
console.log(mesLiens[1].innerHTML); // Praesentium
mesLiens[0].innerHTML="Coucou les amis"; // modifie le contenu du 1er lien

let premierLien= document.querySelector("a"); // query selector peut aussi sélectionner #, . 
// si vous voulez changer la valeur qui existe déjà, on a pas besoin de sortir setAttribute("","")
premierLien.href="https://www.google.com";
premierLien.target="_blank"; // l'attribut target a été ajouté "à la volée", avec la valeur "_blank"

// il existe la propriété "className" qui permet de donner un nom de classse à un élément :
let dernierP=document.getElementById("lastp");
dernierP.className="booo";
dernierP.className="arg"; // "arg" va remplacer "booo"
dernierP.className+=" booo"; // class="arg booo" (soit 2 classes sur la balise)

// parentNode 
let citation=dernierP.parentNode; //sélectionne le parent de dernierP, ici blockquote
citation.style="border:1px solid crimson; padding:20px;";

/* LES EVENEMENTS : Click, dblClick, mouseover, mouseout, mousedown, mouseup, mousemove
                    keydown, keyup, keypress
                    focus, blur, change, input, select, submit, reset...
*/
// Document Object Model = modelisation 

// En DOM-1 ancienne façon d'associer des événements :
let monImage2=mesPhotos[1];
monImage2.onclick= function () {
    alert('Meaoooow');
}

// en DOM-2 
let monImage1=mesPhotos[0];

/* monImage1.addEventListener("click", laFonction);

function laFonction () {
    alert("Que c'est beau");
} 
*/
// ici fonction anonyme car j'en ai besoin tt de suite et est unique
monImage1.addEventListener("click", function () {
    alert("Que c'est beau");
});

// si maintenant j'ai besoin d'un même comportement appliqué à des objets différents
// il vaudra mieux avoir une seule fonction (pas anonyme)
function reaction() {
    alert('glouppps');
}

monImage1.addEventListener("mouseover", reaction);
titre.addEventListener("mouseout", reaction);

let stopTout=document.getElementById("stop");

stopTout.addEventListener("click", function(e){
    e.preventDefault(); // cette méthode empêche de suivre le lien
    monImage1.removeEventListener("mouseover", reaction);
    titre.removeEventListener("mouseout", reaction);
});
// la méthode removeEventListener permet d'enlever l'écouteur d'évènement.
// pour cela, indiquez bien le bon évènement -à supprimer- ainsi que sa fonction associée.