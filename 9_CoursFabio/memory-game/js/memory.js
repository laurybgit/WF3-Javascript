const langues=["français", "espagnol", "anglais"]; 

let bouton=document.querySelector("#play"); 

bouton.addEventListener("click", function(){
  console.log (bouton); 
  bouton.innerHTML="Recommencer"; 
  for (let i=0; i<langues.length; i++){
    const element=langues[i];  
    console.log (element); 
  
  document.querySelector("#liste").innerHTML+=`
    <ul>
      <li>${element}</li>
    </ul>` 
  } 
}) 

/* si on veut utiliser JQuery 

$("#play").on("click", function(){
  $(this).text("Recommencer"); 
}) */ 

// Notre objectif est maintenant de parcourir un tableau de nombres.
// Le premier sera 1 et le dernier sera 492

// Pour créer un nouveau tableu, on peut utiliser Array(taille) où taille est la taille désiré du tableau final.
// Documentation Array.from(): https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/from
// Cette méthode permet de parcourir un tableau, et de retourner un nouveau tableau modifié
let j = 0;
const arrayOfIds = Array.from(Array(20), function() {
	j = j + 1;
	return j;
})
console.table(arrayOfIds);

// Création d'une fonction qui va permettre de créer une nouvelle image 
const createImg=(id) => {
  // création de la balise img 
  const img=document.createElement("img");

  // J'attribue à cette image une source 
  img.setAtrribute ("src", `z_assets/images/${id}.png`); 
  img.setAttribute ("alt", `pokemon numero ${id}`); 

  return img; 
}

$ ("#play").on("click", function() {
  for (let i=0;i<arrayOfIds.length; i++){
    const element=arrayOfIds[i]; 
    const newImg=createImg(element);
    $("game").append(newImg);  
  }
}) 


