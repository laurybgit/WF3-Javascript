// Pour faire référence à l'id, j'utilise "#"
// Pour faire référence à la classe, j'utilise "."

// Traitement pour que, lors du click, le texte du bouton change:
/* document
	.querySelector("#play")
	.addEventListener("click", function() {
		console.log(this)
		this.innerHTML = "Recommencer";
	}) */

// Solution avec jquery
$("#play").on("click", function (e) {
	// Ici, this fait référence à son antécédant, ce dernier étant le bouton avec l'id "play"
	$(this).text("Recommencer");
});

// Fonction générant une liste de langues
const generateLanguages = () => {
	// Pour chaque langue présente dans le tableau "langues", l'afficher dans une liste non ordonnée
	// 1. Itérer/parcourir dans le tableau
	// 2. Pour chaque élément de mon tableau, je créer un li avec la langue donnée
	const langues = ["Français", "Espagnol", "Allemand"];

	// Je séléctionne ma balise "ul"
	const ul = document.createElement("li");

	// Génération de notre liste de langue
	for (let i = 0; i < langues.length; i++) {
		// Je séléctionne la langue à la position i
		const langue = langues[i];

		// Je créer un nouvel "li"
		const liItem = document.createElement("li");

		// J'affecte la valeur du texte à la langue courante
		liItem.innerHTML = langue;

		// J'ajoute mon "li" à ma balise "ul"
		// Lien de la documentation sur la méthode append: https://developer.mozilla.org/fr/docs/Web/API/ParentNode/append
		ul.append(liItem);
	}

	// Ajout de la liste au body
	document.querySelector("body").append(ul);
};

// Notre objectif est maintenant de parcourir un tableau de nombres.
// Le premier sera 1 et le dernier sera 492

// Pour créer un nouveau tableu, on peut utiliser Array(taille) où taille est la taille désiré du tableau final.
// Documentation Array.from(): https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/from
// Cette méthode permet de parcourir un tableau, et de retourner un nouveau tableau modifié
let j = 0;
const arrayOfIds = Array.from(Array(20), function () {
	j = j + 1;
	return j;
});

// Si on souhaite afficher un tableau ou en objet dans la console, on peut utiliser console.table au lieu de console.log:
console.table(arrayOfIds);

// Création d'une fonction qui va me permettre de créer une nouvelle image (balise html avec attributs)
const createImg = id => {
	// Création de la balise img
	const img = document.createElement("img");

	// J'attribue à cette image une source
	img.setAttribute("src", `assets/images/${id}.png`);
	img.setAttribute("alt", `pokemon numero ${id}`);

	// Je retourne l'image nouvellement créée
	return img;
};

$("#play").on("click", function () {
	for (let index = 0; index < arrayOfIds.length; index++) {
		const element = arrayOfIds[index];
		const newImg = createImg(element);
		$(".game").append(newImg);
	}
});

// Challenge: Au lieu d'afficher les 20 premiers pokemons, afficher aléatoirement 10 pokemons différents

const langues = ["Français", "Espagnol", "Allemand", "Anglais", "Chinois"];

// Méthode permettant de mélanger un tableau de manière équiprobable (tout les évènements on la même probabilité d'arriver)
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}