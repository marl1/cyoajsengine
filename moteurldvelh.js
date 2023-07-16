"use strict";
var clefEpisodeEnCours;

/* Clefs d'épisodes qui ont été visités par l'utilisateur.
 Utilisé notamment pour savoir si on est en train de revister un épisode ou 
 pour faire les retours arrière. */
let historique=[];

/* Indique quelles modifications d'inventaire ont été faites à quel épisode.
En clef : le numéro d'épisode. En valeur : l'objet rajouté.
*/
let historiqueInventaire=new Map();
let inventaire=new Map();

/* Tableau contenant les objets ajoutés durant un épisode.*/
let inventaireAjout=[];

/* Pour détecter les redirections en boucle */
let historiqueRedirection=[];

// Map contenant tous les épisodes, avec en clef la clef de l'épisode et en valeur l'intégralité de l'épisode
var episodes = new Map();

function creerEpisode(nouvelEpisode) {
    if(episodes.get(nouvelEpisode.clef)) {
        alert(`L'épisode `+ nouvelEpisode.clef + ` existe déjà !`)
    } else {
        episodes.set(nouvelEpisode.clef, nouvelEpisode);
    }
}

// Affiche l'épisode à l'écran et le positionne comme celui en cours.
function afficherEpisode(clefEpisode) {
    let episode = episodes.get(clefEpisode);
    if (!episode) {alert("Episode " + clefEpisode + " introuvable."); return;}

    if(episode.revisite && historique.includes(episode.clef)) { // gestion des redirections
        //cet épisode redirige vers un autre
        if (historiqueRedirection.filter((clefEp) => clefEp == episode.clef).length > 1) {
            // boucle infinie (ep1 qui redirige vers ep2 qui redrigige vers ep1)
            let posPlusVieilleClefAffichee=historique.length;
            // on repasse sur chaque épisode qui ont redirigé
            for (const clefEpisodeQuiARedirige of historiqueRedirection) {
                if (historique.lastIndexOf(clefEpisodeQuiARedirige)<posPlusVieilleClefAffichee) {
                    posPlusVieilleClefAffichee = historique.lastIndexOf(clefEpisodeQuiARedirige);
                }
            }
            clefEpisode = historique[posPlusVieilleClefAffichee];
            episode = episodes.get(clefEpisode);
            historiqueRedirection = []; // vide l'historique de redirection qui vient de servir

        } else { // pas une boucle infinie
            historiqueRedirection.push(episode.revisite);
            afficherEpisode(episode.revisite);
            return;
        }
    }

    // affichage de l'épisode
    if (episode.callback) {
        episode.callback();
    }
    historique.push(clefEpisode);
    historiqueRedirection = [];
	clefEpisodeEnCours = clefEpisode;
    document.getElementById("titre").innerHTML=episode.titre;
    document.getElementById("texte").innerHTML=formatterTexte(episode.texte);
    genererLiens(episode.liens);
    animerTransition();
    afficherInventaire();
}

function sauvegarder() {
    if (window.localStorage){
        window.localStorage.setItem("clefEpisodeEnCours", clefEpisodeEnCours);
        window.localStorage.setItem("historique", JSON.stringify(historique));
        window.localStorage.setItem("inventaire", JSON.stringify(Array.from(inventaire.entries())));
        window.localStorage.setItem("historiqueInventaire", JSON.stringify(Array.from(historiqueInventaire.entries())));
        document.getElementById("disquette").classList.remove('glitch');
        window.setTimeout(function() {
           document.getElementById("disquette").classList.add('glitch');
        }, 1);
    
    
    }else{
            alert("Impossible de sauvegarder.");
		}
}

function effacerSauvegarde() {
    if (window.confirm("Effacer la sauvegarde ?")) {
        if (window.localStorage){
            window.localStorage.removeItem("clefEpisodeEnCours");
            window.localStorage.removeItem("historique");   
            window.localStorage.removeItem("inventaire");
            window.localStorage.removeItem("historiqueInventaire");
        }
    }
}

function animerTransition() {
    document.getElementById("texte").classList.remove('glitch');
    document.getElementById("liens").classList.remove('glitch');
    window.setTimeout(function() {
        document.getElementById("texte").classList.add('glitch');
        document.getElementById("liens").classList.add('glitch');
    }, 1);
}

// Transforme le texte en HTML (saut de ligne, emphase, etc).
function formatterTexte(texte) {
    texte = texte.replace(/(?:\r\n|\r|\n)/g, '<br>');
    
    //Emphase
    let tabTexte = texte.split("***");
    let textReconstitue = "";
    for (let i = 0; i < tabTexte.length; i++) { 
        if(tabTexte[i+1]) {
            textReconstitue = textReconstitue + tabTexte[i] + '<span class="emphase">' + tabTexte[i+1] + "</span>";
        }else {
            textReconstitue = textReconstitue + tabTexte[i];
        }
        i++;
    }
    texte = textReconstitue;
    
    //Italique
    tabTexte = texte.split('///');
    textReconstitue = "";
    for (let i = 0; i < tabTexte.length; i++) { 
        if(tabTexte[i+1]) {
            textReconstitue = textReconstitue + tabTexte[i] + '<i>' + tabTexte[i+1] + "</i>";
        }else {
            textReconstitue = textReconstitue + tabTexte[i];
        }
        i++;
    }
    texte = textReconstitue;


    return texte;
}

function genererLiens(liens) {
    let htmlLiens = "";
    for (const lien in liens) {
        htmlLiens = htmlLiens + `<a href="#" onClick="afficherEpisode('${liens[lien].chemin}')">${liens[lien].libelle}</a><br>`;
    }
    document.getElementById("liens").innerHTML=htmlLiens;
}

// Vérifie que les chemins mènent bien tous quelque part, qu'il n'y a pas eu d'erreur lors de l'écriture.
function analyserLiens() {
    //on met toutes les clefs dans un tableau
    let tabClefsEpisodes=[];
    for (const clef of episodes.keys()) {
        tabClefsEpisodes.push(clef);
    }
    
    //on met tous les chemins dans un autre tableau
    let tabLiens=[];
    let tabChemins=[];
    for (const episode of episodes.values()) {
        if (episode.liens) {
            tabLiens.push(episode.liens);
            for (const lien of tabLiens.flat()) {
                tabChemins.push(lien.chemin);
            }
            //et les revisites aussi
            if(episode.revisite) { tabChemins.push(episode.revisite); }
        }
    }

    //on vérifie que tous les chemins mènent vers un épisode
    for (const chemin of [...new Set(tabChemins)]) {
        if(!tabClefsEpisodes.includes(chemin)) {
            console.log("L'épisode " + chemin + " est à créer.");
        }
    }
}

function modifierTexte(clefEpisode, nouveauTexte) {
    return episodes.get(clefEpisode).texte = nouveauTexte;
}

function nombrePossedeDe(objet) {
    return inventaire.get(objet)?inventaire.get(objet).nombre:0;
}

function ajouterInventaireDiscretement(objet) {
    inventaireAjout.push({clef:objet.clef, nom:objet.nom, description:objet.description, nombre:objet.nombre, discret: true });
}

function ajouterInventaire(objet) {
    inventaireAjout.push({clef:objet.clef, nom:objet.nom, description:objet.description, nombre:objet.nombre });
}

function afficherInventaire() {
    let htmlInventaireFinal = "";
    let mapHtmlInventaire=new Map();
    // Déjà, on parcourt l'inventaire et on prépare le html pour chaque objet existant
    for (const [key, value] of inventaire) {
        mapHtmlInventaire.set(key, "-" + value.nom + " (x" + value.nombre + ")");
    }

    //Ensuite, on parcourt les ajouts
    for (const nouvelObjet of inventaireAjout) {
        if (mapHtmlInventaire.get(nouvelObjet.clef)) { //l'objet n'est pas vraiment nouveau, c'est juste une modif de nombre
            // maj de sa quantite dans le vrai inventaire
            inventaire.get(nouvelObjet.clef).nombre = nouvelObjet.nombre + inventaire.get(nouvelObjet.clef).nombre;
            if (!nouvelObjet.discret) {
                if(nouvelObjet.nombre > 0) {
                    mapHtmlInventaire.set(nouvelObjet.clef, mapHtmlInventaire.get(nouvelObjet.clef) + '<span class="ajoutInventaire"> +' + nouvelObjet.nombre + '</span>');
                } else {
                    mapHtmlInventaire.set(nouvelObjet.clef, mapHtmlInventaire.get(nouvelObjet.clef) + '<span class="supprInventaire"> ' + nouvelObjet.nombre + '</span>');
                }
            } else { // ajout en toute discrétion
                mapHtmlInventaire.set(nouvelObjet.clef, "-" + inventaire.get(nouvelObjet.clef).nom + " (x" + inventaire.get(nouvelObjet.clef).nombre + ")");
            }
        } else { // l'objet est totalement nouveau
            // ajout dans le vrai inventaire
            inventaire.set(nouvelObjet.clef, {nom:nouvelObjet.nom, description:nouvelObjet.description, nombre:nouvelObjet.nombre});
            if (!nouvelObjet.discret) {
                mapHtmlInventaire.set(nouvelObjet.clef, '<span class="ajoutInventaire">-' + nouvelObjet.nom + " (x" + nouvelObjet.nombre + ")</span>");
            } else {
                mapHtmlInventaire.set(nouvelObjet.clef, '-' + nouvelObjet.nom + " (x" + nouvelObjet.nombre + ")");
            }
        }

        if (!historiqueInventaire.get(clefEpisodeEnCours)) { historiqueInventaire.set(clefEpisodeEnCours, []); }
        historiqueInventaire.get(clefEpisodeEnCours).push({clef:nouvelObjet.clef, nom:nouvelObjet.nom, description:nouvelObjet.description, nombre:nouvelObjet.nombre});
    }

    // on peut vider les trucs à ajouter vu qu'on les as traité
    inventaireAjout = [];

    // affichage du HTML    
    for (let [key, value] of mapHtmlInventaire) {
        htmlInventaireFinal+=value+"<br>";
    }
    document.getElementById("inventaire").innerHTML=htmlInventaireFinal;
}

function episodePrecedent() {
    if(historique.length>0) {
        enleverObjetsAcquis(historique[historique.length - 1]);
        historique.pop(); // supprime l'épisode en cours
        enleverObjetsAcquis(historique[historique.length - 1]);
        afficherEpisode(historique.pop()); //on repart sur la clef précédente+la supprime
    }
}

//Pour éviter que la fonction "retour" ne permette d'avoir une infinité d'objets
function enleverObjetsAcquis(clefEpisode) {
    const tabObjetsARetirer = historiqueInventaire.get(clefEpisode);
    if (tabObjetsARetirer) {
        for (const objetARetirer of tabObjetsARetirer) {
            if (inventaire.get(objetARetirer.clef)) {
                if((inventaire.get(objetARetirer.clef).nombre - objetARetirer.nombre) === 0) {
                    inventaire.delete(objetARetirer.clef);
                } else {
                   inventaire.get(objetARetirer.clef).nombre -= objetARetirer.nombre;
                }
            }
        }
        historiqueInventaire.delete(clefEpisode);
    }
}

function demarrerJeu() {
    if (window.localStorage && window.localStorage.getItem("clefEpisodeEnCours")){
        //Il y a une sauvegarde, on la restore...
        clefEpisodeEnCours = window.localStorage.getItem("clefEpisodeEnCours");
        historique = JSON.parse(window.localStorage.getItem("historique"));
        inventaire = new Map(JSON.parse(window.localStorage.getItem("inventaire")));
        historiqueInventaire = new Map(JSON.parse(window.localStorage.getItem("historiqueInventaire")));
        afficherEpisode(historique.pop());
    } else {
        afficherEpisode("intro");
    }
}

