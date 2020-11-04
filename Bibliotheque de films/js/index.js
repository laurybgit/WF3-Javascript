// créer un tableau qui va contenir tous les films
let tabFilms=[];
// par exemple tabFilms=[{leTitre:"Inception", chemAffiche: "./media/inception./jpg", etc...}]
/* tabFilms=[{leTitre:"Inception", chemAffiche: "./media/inception./jpg", etc...},
             {leTitre:"", chemAffiche: "./media/", etc...},
            ]
*/

// créer une fonction qui ajoute les films à la page
function ajouterFilm (titre, pathAffiche, pathBandeAnnonce, genre, decennie){
    // on crée une variable idTitre qui récupère le nom du film, à partir du chemin de l'affiche
    // (auquel on a retiré "./media/" et ".ext")
    let idTitre=pathAffiche.slice(8, pathAffiche.length-4); 

    // on crée un objet basé sur les paramètres de la fonction auquel on ajoute idTitre
    tabFilms.push({
        leTitre: titre,
        chemAffiche: pathAffiche,
        chemBandeAnnonce: pathBandeAnnonce,
        genreFilm: genre,
        decennieFilm: decennie,
        idTitre: idTitre, 
    });

    // affichage sur le site :
    let maDiv=document.getElementById("listeFilms");
    // backtick = accent grave
    /* avant ES6 (EcmasScript):
    maDiv.innerHTML+="<article><a onclick='afficherDetailsFilm("+(tabFilms.length-1)+")'><img src='"+pathAffiche+"' alt='"+titre+"' ></a></article>";
    */ 
    // depuis ES6 backtik (accent grave permet de sauter des lignes)
    maDiv.innerHTML+=`<article id="film_${idTitre}">
                        <a onclick='afficherDetailsFilm(${tabFilms.length-1})'>
                            <img src='${pathAffiche}' alt='${titre}' >
                        </a>
                       </article>`; 
}

// ajouter plusieurs films
ajouterFilm("Inception", "./media/inception.jpg", "./media/BA_inception.mp4","sci-fi" ,2010);
ajouterFilm("Les Dents de la mer", "./media/dentsDeLaMer.jpg", "./media/BA_Dents.mp4", "horreur", 1970);
ajouterFilm("Bienvenue à Gattaca", "./media/gattaca.jpg", "./media/Bienvenue-a-Gattaca.mp4", "sci-fi", 1990);
ajouterFilm("Stalingrad", "./media/stalingrad.jpg", "./media/BA_Stalingrad.mp4", "guerre", 2000);
ajouterFilm("12 Hommes en colère", "./media/12HommesEnColere.jpg", "./media/BA_12_Hommes_En_colere.webm", "drame", 1950);
ajouterFilm("La Cité de la Peur", "./media/laCiteDeLaPeur.jpg", "./media/BA_La_cite_de_la_peur.webm", "comedie",1990);
ajouterFilm("La Parrain", "./media/leParrain.jpg", "./media/BA_Le_Parrain.mp4", "thriller", 1970);
ajouterFilm("Les Evadés", "./media/lesEvades.jpg", "./media/BA_Les_Evades.mp4","drame",1990);
ajouterFilm("Joker", "./media/joker.jpeg", "./media/BA_Joker.mp4", "drame",2010);
ajouterFilm("Le Pianiste", "./media/lePianiste.jpg", "./media/BA_Le_pianiste.mp4","guerre", 2000);
// console.log(tabFilms);
// console.log(tabFilms[9]);

// créer une fonction dont le rôle est d'afficher les details :
function afficherDetailsFilm (filmIndex) {
    // on récupère le numéro du film cliqué
    let filmDemande=tabFilms[filmIndex]; // filmDemande est un objet du film cliqué

    // on cache la section qui contient tous les films : 
    document.getElementById("content").style.display="none";

    // on montre le lien retour :
    document.getElementById("lienRetour").style.display="block";

    // on remontre la div contentdetails :
    document.getElementById("contentDetails").style.display="block";

    // on remplit la 2e section avec le détail : vidéo et affiche
    document.getElementById("contentDetails").innerHTML=`
        <h3>${filmDemande.leTitre}</h3>
        <section class="detailsFilms">
            <div class="affiche">
                <figure>
                    <img src="${filmDemande.chemAffiche}">
                </figure>
            </div>

            <div class="ba">
                <video controls autoplay loop width="640" height="480" muted>
                    <source src="${filmDemande.chemBandeAnnonce}" type="video/webm" />
                    <source src="${filmDemande.chemBandeAnnonce}" type="video/mp4" />
                    ça ne marche pas :/
                </video>
            </div>
        </section>
    `;

}

//filtrerParGenreEtDecennie() et retourListe()
function retourListe(){
    // on montre à nouveau la section qui contient tous les films : 
    document.getElementById("content").style.display="block";

    // on cache à nouveau les détails du film (sélectionné)
    document.getElementById("contentDetails").style.display="none";
    
    // on cache aussi et à nouveau le lien retour liste
    document.getElementById("lienRetour").style.display="none";
}

// création de la fonction filtrerParGenreEtDecennie()
function filtrerParGenreEtDecennie(){
    let genreSelectionne= document.getElementById("selectGenre").value;
    let decennieSelectionne= document.getElementById("selectDecennie").value;
    // on va créer une boucle qui va passer en revue tous les films et regarder le genre /decennie
    for(let i=0; i<tabFilms.length; i++ ){
        // on crée une variable pour "identifier le film"
        let baliseArticle= document.getElementById(`film_${tabFilms[i].idTitre}`);
        
        if((tabFilms[i].genreFilm == genreSelectionne || genreSelectionne=="tous") 
        && (tabFilms[i].decennieFilm == decennieSelectionne || decennieSelectionne=="toutes")){
           // afficher le film
           baliseArticle.style.display="block";
        }else{
           // ne pas afficher le film
           baliseArticle.style.display="none";
        }
    }
}

