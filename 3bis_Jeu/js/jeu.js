const buttons = document.querySelectorAll("button");
console.log("ça marche"); 

for (let i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    const joueur = buttons[i].innerHTML; 
    const robot = buttons[Math.floor(Math.random()*buttons.length)].innerHTML; 
    console.log(`Joueur : ${joueur} VS Robot ${robot}`); 
  })
}