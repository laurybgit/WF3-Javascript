function carre(a){
    let resultat=a*a; 
    console.log ("le nombre carré de "+a+" est :"+resultat); 
}

carre(9); 
carre (8); 

// repertoire CSV 

let tabCSV=[]; 

function repertoire (nom, prenom, age){

tabCSV.push({
    monNom : nom, 
    monPrenom: prenom, 
    monAge: age, 
})
}

repertoire("Gaillot", "Simon", "55"); 
repertoire ("Gaillot", "Laury", "45"); 

console.table (tabCSV[1]); 