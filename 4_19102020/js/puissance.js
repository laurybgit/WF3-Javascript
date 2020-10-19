console.log(Math.pow(5,2));
console.log(Math.pow(5,0));
console.log(Math.pow(10,2));
console.log(Math.pow(2,8));

// faisons la fonction maPuissance, avec un paramètre optionnel 
// cet argument (ou paramètre) optionnel, sera un booleen : true ou false
// si l'argument est true -> la fonction produit une "alert" (sinon return)

function maPuissance(a, b, opt) {
    let resultat=1;
    for (let i=0; i<b; i++) {
        resultat*=a;    // resultat=resultat*a;
    }
    if(opt==false || opt==undefined){
        return resultat;
    }else{
        alert(a+"^"+b+"="+resultat);
    }
}
// en passant le 3e argument à false (ou en n'en mettant pas), on obtient un return
// si on veut afficher le résultat de cette fonction, il faut passer par un console.log (par exemple) : 

console.log(maPuissance(6,4));

// au contraire, si on met le 3e paramettre à true, on obtient bien une alert :
maPuissance(6,4, true); 
// pas besoin de console.log ou de alert pour afficher, c'est inclus dans la fonction..
