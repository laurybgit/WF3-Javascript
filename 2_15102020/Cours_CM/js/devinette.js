// version simplifiée de l'exercice 

let nbMystere= Math.round(49*Math.random()+1); 
let nbUser=0; 
let nbCoups=0; 
let limiteNbCoups=4; 
let jeuEnCours=true; // tant que le jeu est en cours ça continue. A la fin de la boucle on devra donc dire : false pour fermer. 

let nbMystere= Math.round(49*Math.random()+1); 
let nbUser=0;
let nbCoups=0;
let limiteNbCoups=4;
let jeuEnCours=true; // variable booleenneconsole.log('cheat : le nombre cherché est '+nbMystere); // triche ^^while (jeuEnCours==true) {
    if(nbCoups<limiteNbCoups){
        nbUser=parseInt(prompt("Donnez un nombre entre 1 et 50 : "));
        if (nbUser>=1 && nbUser<=50) { 
            nbCoups++;
            // je lance mes tests :
            if (nbUser>nbMystere){
                // le nombre cherché est plus petit
                alert('le nombre cherché est plus petit');
            }else if(nbUser<nbMystere){
                // le nombre cherché est plus grand
                alert('le nombre cherché est plus grand');
            }else{
                // ça veut forcément dire que nbUser == nbMystere 
                alert('Bravo, bien ouéj ! Vous avez trouvé en : '+nbCoups+" tentatives.");
                jeuEnCours=false; // fin de jeu, on passe la variable à "faux".
            }
        }else{
            // le nombre donné n'est pas entre 1 et 50 !
            alert('Valeur non conforme, recommencez !');
        }
    }else{
        alert('Désolé, vous n\'avez plus de tentatives... le nombre était : '+nbMystere);
        jeuEnCours=false; // pour arrêter la boucle
    } 
