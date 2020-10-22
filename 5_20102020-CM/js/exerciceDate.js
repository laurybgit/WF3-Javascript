// 1. exercice : Demandez à l'utilisateur sa date de naissance sous forme jj/mm/aaaa.
// Répondez-lui son mois de naissance (en toutes lettres)
// 1.2 Donnez lui son signe zodiacal :)

/* let dateNaiss=prompt('Donnez votre naissance sous forme jj/mm/aaaa'); // "10/07/2000"
let result=dateNaiss.split("/"); // ["10","07","2000"]
console.log(typeof result); // objet
let month=parseInt(result[1]); // 7
console.log(typeof month); // number
/* Expressions régulieres si on veut tester ce qu'un utilisateur a saisi... à suivre */

// le switch fait une comparaison stricte ===  ("1"==1 true  //versus// "1"===1 false)
/* switch (month){  
    case 1:
        alert("vous êtes né en janvier");
    break;
    case 2:
        alert("vous êtes né en février");
    break;
    case 3:
        alert("vous êtes né en mars");
    break;
    case 4:
        alert("vous êtes né en avril");
    break;
    case 5:
        alert("vous êtes né en mai");
    break;
    case 6:
        alert("vous êtes né en juin");
    break;
    case 7:
        alert("vous êtes né en juillet");
    break;
    case 8:
        alert("vous êtes né en août");
    break;
    case 9:
        alert("vous êtes né en septembre");
    break;
    case 10:
        alert("vous êtes né en octobre");
    break;
    case 11:
        alert("vous êtes né en novembre");
    break;
    case 12:
        alert("vous êtes né en décembre");
    break;

}  */

let dateNaiss=prompt('Donnez votre naissance sous forme jj/mm/aaaa'); // "10/07/2000"
let result=dateNaiss.split("/"); // ["10","07","2000"]
let month=parseInt(result[1]); // 7
let day=parseInt(result[0]); // 10

let monthArray=["janvier", "février", "mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
let zodiac=["capricorne", "verseau", "poisson","bélier","taureau","gémeaux","cancer","lion","vierge","balance","scorpion","sagittaire", "capricorne"];
let birthMonth=monthArray[month-1];
let zodiacUser;
switch (month){
    case 1:
    case 3:
    case 4:
        if(day<=20){
            zodiacUser=zodiac[month-1];
        }else{
            zodiacUser=zodiac[month];
        }
    break;
    case 2:
        if(day<=19){
            zodiacUser=zodiac[month-1];
        }else{
            zodiacUser=zodiac[month];
        }
    break;
    case 5:
    case 6:
    case 12:
        if(day<=21){
            zodiacUser=zodiac[month-1];
        }else{
            zodiacUser=zodiac[month];
        }
    break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        if(day<=22){
            zodiacUser=zodiac[month-1];
        }else{
            zodiacUser=zodiac[month];
        }
    break;
}

alert("vous êtes né en "+birthMonth+" et vous êtes "+zodiacUser+".");
