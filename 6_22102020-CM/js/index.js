// créer un tableau qui va contenir tous les films
let tabFilms=[];

// créer une fonction qui ajoute les films à la page
function ajouterFilm (titre, pathAffiche, pathBandeAnnonce){
    tabFilms.push({
        leTitre: titre,
        chemAffiche: pathAffiche,
        chemBandeAnnonce: pathBandeAnnonce
    });
    // affichage sur le site :
    let maDiv=document.getElementById("listeFilms");
    maDiv.innerHTML+=`
        <article>
            <a onclick="afficherDetailsFilm(${tabFilms.length-1})" >
                <img src="${pathAffiche}" alt="${titre}" >
            </a>
        </article>
    `;
}


// ajouter plusieurs films
ajouterFilm ("Inception", "media/inception.jpg", "media/BA_inception.mp4");
ajouterFilm ("Les Dents de la mer", "media/dentsDeLaMer.jpg", "media/BA_Dents_De_La_Mer.mkv");
ajouterFilm ("Le Pianiste", "media/lePianiste.jpg", "media/BA_Le_pianiste.mkv");
ajouterFilm ("Bienvenue à Gattaca", "./media/gattaca.jpg", "./media/BA_Bienvenue_a_Gattaca.mkv");
ajouterFilm ("Stalingrad", "./media/stalingrad.jpg", "./media/BA_Stalingrad.mp4");
// console.log(tabFilms);

// créer une fonction dont le rôle est d'afficher les details :
function afficherDetailsFilm (filmIndex) {
    // on récupère le numéro du film cliqué
    let filmDemande=tabFilms[filmIndex]; // filmDemandé est un objet

    // on cache la section qui contient tous les films : 
    document.getElementById("content").style.display="none";

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