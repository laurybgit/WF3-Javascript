
// ---------------------------------------------- 
// on a un "choix" de récupérer une alert, ou un return
// Et si on avait ce choix au moment d'appeler la fonction ?

function coucou (prenom, nb){
    if(nb==undefined || nb==0){
        if(prenom==undefined){
            alert('coucou');    
        }else{
            alert('coucou '+prenom);
        }
    }else{
        for(let i=0; i<nb; i++){
            alert('coucou '+prenom);
        }
    }
}

/* coucou("Gwen");
coucou("toto",1);
coucou("titi",5); */

/*
for ( initialisation; condition; incrémentation ){

}
*/
for (let i=5; i<15; i*=5) {// 1 passages dans la boucle

}
i+=5 // "on incrémente d'un pas de 5"
i++  // "on incrémente" (le pas de 1 est sous entendu)

// dans le cas suivant, on se sert d'une variable nb qui aurait déjà été créée auparavant
// (attention : de façon globale)
let nb=8;
for (nb ; nb<5; nb++){
    // ça n'a pas beaucoup de sens ici... :/
}