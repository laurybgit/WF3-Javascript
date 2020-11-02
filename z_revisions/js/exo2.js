// Les boucles 

let monAge=29; 
let finDeVie= 99; 

for (let i=0; i<71; i++){
monAge++; 
  if (monAge<=99){
console.log ("vous êtes en vie et vous avez"+" "+monAge+" ans"); 
  }else{
    console.log ("vous êtes morte déso");  
    monAge-=1; 
    alert ("vous avez vécu une belle vie et vous êtes morte à"+" "+monAge+" ans"); 
  }
} 

// faire une prédiction de mort 

let deathAge= Math.round(115*Math.random()+1); 
let ageUser=0; 
let devinette=true; // variable booleenne 
console.log("l'âge prédit par l'ordinateur est"+" "+deathAge); 

while (devinette==true){
ageUser=parseInt(prompt("À quel âge vas-tu mourir ?"));

  if (ageUser>=1 && ageUser<=115) { 
    if (ageUser<deathAge){
        alert("Enfin, vous n'allez pas mourir à"+" "+ageUser+", mais plus tard. Essayez encore !");
    }else if(ageUser>deathAge){
        alert("Heu, déso mais vous allez mourir plus tôt que"+" "+ageUser+". Recommencez.");
    }else{
        alert("Et oui, vous allez mourir à "+ageUser+" . Alors, déçu(e) ou pas ?");
        devinette=false;
    }
  } 
  
  else{
      alert("Impossible que vous mourriez aussi tard... recommencez !");
  }
}