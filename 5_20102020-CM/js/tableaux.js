/* =======================================================================
===                            Les tableaux                            ===
==========================================================================
*/

// ------------------Introduction : les propriétés et les méthodes ----------
// Propriété : une variable au sein de l'objet
// Quelque chose qui va le qualifier (l'objet), ou qui va nous renseigner

// Méthode : une fonction au sein de l'objet
// Quelque chose qui permet de modifier l'objet

let maString ="Bonjour je m'appelle Christian";
// on peut appliquer une propriété, comme length qui permet de connaitre le nombre de caractères
console.log("la longueur de la chaîne de caractère maString est : "+maString.length);

//on peut appliquer la methode toUpperCase():
console.log(maString.toUpperCase());
console.log(maString); // elle n'a pas été modifiée
// pour passer en minuscule, vous pouvez utiliser toLowerCase();
console.log("------------ tableaux ----------");

let unTableau=[]; // ici déclaration d'une variable tableau, vide
let unAutreTableau=[100, 5, 100.568, 85]; // tableau de nombres
let encoreTablo = ["Loïc", 25, 69005, true]; // tableau  mixte

// J'interroge pour récupérer une valeur de mon tableau : le code postal du tableau encoreTablo 
// correspond à la 2e entrée, 2e indice
console.log(encoreTablo[2]); // correspond à 69005 
console.log("encoreTablo[1]="+encoreTablo[1]); // correspond à 25 
console.log("encoreTablo[0]="+encoreTablo[0]); // correspond à "Loïc"

console.log(encoreTablo); //  ["Loïc", 25, 69005, true]

// pour changer une valeur du tableau, par exemple, je veux mettre Chloé à la place de Loïc
encoreTablo[0]="Chloé";
console.log(encoreTablo); //  ["Chloé", 25, 69005, true]

// une méthode pour les tableaux : push() ajoute un élément à la fin du tableau
encoreTablo.push("0600112233");
console.log(encoreTablo); //  ["Chloé", 25, 69005, true, "0600112233"]

encoreTablo.push(5, 169, "12 rue du chemin neuf");
console.log(encoreTablo); //  ["Chloé", 25, 69005, true, "0600112233",5, 169, "12 rue du chemin neuf"]
console.table(encoreTablo); // plus joli, plus élégant (mais plus gros) ;)

// pop(), retire le dernier élément du tableau
encoreTablo.pop(); //  ["Chloé", 25, 69005, true, "0600112233",5, 169]

// et pour le début du tableau alors ? Ben on a shift() enlève au début du tableau
// unshift() qui ajoute au début du tableau.

// petite précision : on peut au moment de la suppression, récupérer la valeur supprimée : 
console.log(encoreTablo.shift()); // permet de connaitre le premier élément à supprimer, lors de la suppression
let eltSupprime=encoreTablo.shift(); // 25

encoreTablo.shift(); // [true, "0600112233",5, 169]
console.log(encoreTablo);

encoreTablo.unshift("Kévin"); // ["Kévin", true, "0600112233",5, 169]
console.log(encoreTablo);

let mesChersEtudiants="Théo Loïc Amine Laury Harold Otho Vahé";
// la méthode split permet de convertir une chaîne de caractère en tableau en se basant sur le parametre
// demandé 
let mceArray=mesChersEtudiants.split(" "); // ici le caractère est l'espace : on sépare au niveau des espaces
console.log(mceArray); // ["Théo", "Loïc", "Amine", "Laury", "Harold,"Otho", "Vahé"]

// on a une méthode qui fait l'inverse : join() 
// dans le paramètre de join(), le caractère indiqué deviendra le séparateur :
let myString=mceArray.join(", ");
console.log(myString); // Théo, Loïc, Amine, Laury, Harold, Otho, Vahé (string à nouveau)

// typeof permet de savoir de quel type est l'objet :
console.log(typeof myString); // String
console.log(typeof mceArray); // object
console.log(typeof eltSupprime); // Number


// rappel, ce qu'on récupère d'un prompt est toujours un String ! :
let essai=prompt("ecrivez un truc :"); 
alert(typeof essai); // string, même si on tape un nombre comme 125

// pour connaître la longueur d'un tableau; aka le nombre d'éléments on peut réutiliser length
console.log(mceArray.length); // 7

let untruc =2562+"Amine"; //  "2562Amine" typeof : String


// comment faire pour parcourir un tableau ?
for (let i=0; i<mceArray.length; i++){
    console.log("mceArray["+i+"]="+mceArray[i]);
}

// tableau à une dimension [x,x,x]. on peut créer des tableaux à plusieurs dimensions
// Un tableau qui répertorierait des infos sur mes étudiants :
// ["nom", "prenom", age, "adressemail"]
// tableau "DevWeb2020" qui contient tous mes étudiants :

let devWeb2020=[
    ["Stival", "Théo", 26, "theo@stival.com"],
    ["Gueret", "Loïc", 24, "loic@gmail.com"],
    ["Faure","Kévin", 29, "kfaure1992@yahoo.fr"]
];
// pour récupérer l'age de Loïc
console.log(devWeb2020[1][2]);//  24 

// comment faire pour parcourir un tableau à 2 dimensions ??
// avec une double boucle for : un for dans un for :
//
devWeb2020.length ;// 3 equivaut au nombre de lignes
devWeb2020[0].length; // 4 equivaut au nombre de colonnes

let nbCasesDuTableau= devWeb2020.length * devWeb2020[0].length; //  nombre de cases total

for (let i=0; i<devWeb2020.length; i++){
    for (let j=0; j<devWeb2020[0].length; j++){
        console.log("devWeb2020["+i+"]["+j+"]="+devWeb2020[i][j]);
    }
}
/*
i=0 0<3 
    j=0 j<4
        devWeb2020[0][0];
        j++
    j=1 j<4
        devWeb2020[0][1];
        j++
    j=2 j<4
        devWeb2020[0][2];
        j++
    j=3 j<4
        devWeb2020[0][3];
        j++
    j=4 j<4 Faux fin de la boucle
i=1 i<3
    j=0 j<4
        devWeb2020[1][0];
        j++
    j=1 j<4
        devWeb2020[1][1];
        j++
    j=2 j<4
        devWeb2020[1][2];
        j++
    j=3 j<4
        devWeb2020[1][3];
        j++
    j=4 j<4 Faux fin de la boucle
*/
// 1. exercice : Demandez à l'utilisateur sa date de naissance sous forme jj/mm/aaaa.
// Répondez-lui son mois de naissance (en toutes lettres)
// 1.2 Donnez lui son signe zodiacal :)

