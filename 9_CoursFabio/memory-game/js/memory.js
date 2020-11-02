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


