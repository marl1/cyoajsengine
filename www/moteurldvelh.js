//V0.1.4
"use strict";

/* Utilisé globalement dans l'appli pour savoir 
quel épisode est actuellement affiché. */
var clefEpisodeEnCours;

/* Clefs d'épisodes qui ont été visités par l'utilisateur.
 Utilisé notamment pour savoir si on est en train de revister un épisode ou 
 pour faire les retours arrière. */
let historique=[];

/* Indique quelles modifications d'inventaire ont été faites à quel épisode.
Chaque élément du tableau contient un objet {clefEpisode, objets rajouté}.
Il est parcouru à l'envers lors des retours arrières.
*/
let historiqueInventaire=[];

/* Inventaire. Est affiché. */
let inventaire=new Map();

/* Tableau contenant les objets ajoutés durant l'épisode en cours,
sera traité et vidé lors de l'affichage de l'inventaire.*/
let inventaireAjout=[];

/* Pour détecter les redirections en boucle */
let historiqueRedirection=[];

/* Indique quelles modifications de variables ont été faites à quel épisode.
Chaque élément du tableau contient un objet 
{clefEpisode: clef de l'épisode, variables:[{nomVar:nom de la variable, valeur:valeur}]}.
Il est parcouru à l'envers lors des retours arrières.
*/
let historiqueVariables=[];

/* Map avec pour clef le nom et valeur la valeur de la variable.*/
let variables=new Map();


/* Titre du jeu, pour séparer le local storage entre les jeux sur la même adresse (localhost typiquement).*/
var titreJeu="";

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
    clefEpisodeEnCours = clefEpisode;
    animerTransition();


    const episodeOriginal = clonerEpisode(episode);

    if (episode.commandes) {
        episode.commandes();
        episodeOriginal.commandes = episode.commandes;
    }
    historique.push(clefEpisode);
    historiqueRedirection = [];
    if (episode.titre instanceof Function) {
        document.getElementById("titre").innerHTML=episode.titre();
    } else {
        document.getElementById("titre").innerHTML=episode.titre;
    }
    if (episode.texte instanceof Function) {
        document.getElementById("texte").innerHTML=formatterTexte(episode.texte());
    } else {
        document.getElementById("texte").innerHTML=formatterTexte(episode.texte);
    }
    if(episode.image) {
         remplacerImage(episode.image);
    }

    genererLiens(episode.liens);
    afficherInventaire();

    // L'épisode a pu être modifié par des callbacks donc on réinjecte l'original.
    // Sinon les modifs de texte par exemple s'additionneront à l'infini.
    episodes.set(clefEpisodeEnCours, episodeOriginal);
}

function clonerEpisode(episode) {
    let episodeClone = JSON.parse(JSON.stringify(episode));
    // en parsant on a perdu les fonctions titre, texte, libelle des liens donc il faut les réinjecter
    episodeClone.titre = episode.titre;
    episodeClone.texte = episode.texte;
    if (episode.liens) {
        let tabLiensOriginaux=[];
        for (const lien of episode.liens) {
            let lienOriginal = lien;
            lienOriginal.libelle = lien.libelle;
            tabLiensOriginaux.push(lienOriginal);
        }
        episodeClone.liens = tabLiensOriginaux;
    }

    return episodeClone;
}

/* Génère le texte des liens.
Quitte à boucler dessus, on sauvegarde les textes originaux qui ne peuvent pas être
stringifiés car ce sont des fonctions. On les réinjectera en sortie de fonction. */
function genererLiens(liens) {
    let htmlLiens = "";
    if (liens) {
        for (const lien of liens) {
            if (lien.libelle instanceof Function) {
                htmlLiens = htmlLiens + `<a href="#" onClick="afficherEpisode('${lien.chemin}')">${lien.libelle()}</a><br>`;
            } else {
                htmlLiens = htmlLiens + `<a href="#" onClick="afficherEpisode('${lien.chemin}')">${lien.libelle}</a><br>`;
            }
        }
    }
    document.getElementById("liens").innerHTML=htmlLiens;
}

function sauvegarder() {
    if (window.localStorage){
        window.localStorage.setItem("clefEpisodeEnCours"+titreJeu, clefEpisodeEnCours);
        window.localStorage.setItem("historique"+titreJeu, JSON.stringify(historique));
        window.localStorage.setItem("inventaire"+titreJeu, JSON.stringify(Array.from(inventaire.entries())));
        window.localStorage.setItem("historiqueInventaire"+titreJeu, JSON.stringify(historiqueInventaire));
        window.localStorage.setItem("variables"+titreJeu, JSON.stringify(Array.from(variables.entries())));
        window.localStorage.setItem("historiqueVariables"+titreJeu, JSON.stringify(historiqueVariables));
        document.getElementById("iconeSauver").classList.remove('doitAnimerTransition');
        window.setTimeout(function() {
           document.getElementById("iconeSauver").classList.add('doitAnimerTransition');
        }, 1);
    
    
    }else{
            alert("Impossible de sauvegarder.");
		}
}

function effacerSauvegarde() {
    if (window.confirm("Effacer la sauvegarde ?")) {
        if (window.localStorage){
            window.localStorage.removeItem("clefEpisodeEnCours"+titreJeu);
            window.localStorage.removeItem("historique"+titreJeu);
            window.localStorage.removeItem("inventaire"+titreJeu);
            window.localStorage.removeItem("historiqueInventaire"+titreJeu);
            window.localStorage.removeItem("variables"+titreJeu);
            window.localStorage.removeItem("historiqueVariables"+titreJeu);
        }
    }
}

function animerTransition() {
    document.getElementById("texte").classList.remove('doitAnimerTransition');
    document.getElementById("liens").classList.remove('doitAnimerTransition');
    void document.getElementById("texte").offsetWidth; //https://stackoverflow.com/questions/4847996/
    document.getElementById("texte").classList.add('doitAnimerTransition');
    document.getElementById("liens").classList.add('doitAnimerTransition');
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

function nombreVisites() {
    let compteur=0;
    for (const clefEpisode of historique) {
        if (clefEpisode === clefEpisodeEnCours) {
            compteur++;
        }
    }
    return compteur;
}

function remplacerImage(img) {
    document.body.style.backgroundImage = "url('data/img/" + img +"')"; 
}

function titrerJeu(titre) {
    titreJeu = titre;
    document.title = titreJeu;
}

function ajouterLien(nouveauLien) {
    if (!episodes.get(clefEpisodeEnCours).liens) {
        episodes.get(clefEpisodeEnCours).liens = [];
    }
        episodes.get(clefEpisodeEnCours).liens.push(nouveauLien);
}

function remplacerLien(nouveauLien) {
    episodes.get(clefEpisodeEnCours).liens = [];
    episodes.get(clefEpisodeEnCours).liens.push(nouveauLien);
}

function ajouterTexte(nouveauTexte) {
    if (!episodes.get(clefEpisodeEnCours).texte) {
        episodes.get(clefEpisodeEnCours).texte = "";
    }
    if (episodes.get(clefEpisodeEnCours).texte instanceof Function) {
        episodes.get(clefEpisodeEnCours).texte = episodes.get(clefEpisodeEnCours).texte() + nouveauTexte;
    } else {
        episodes.get(clefEpisodeEnCours).texte += nouveauTexte;
    }
}

function remplacerTexte(nouveauTexte) {
    episodes.get(clefEpisodeEnCours).texte = nouveauTexte;
}

function variable(nomVar, valeur) {
    if(!valeur) {
        return valeurVariable(nomVar);
    } else {
        modifierVariable(nomVar, valeur);
    }
}

function valeurVariable(nomVar) {
    return variables.get(nomVar);
}

function modifierVariable(nomVar, valeur) {
    console.log("ajout en histo");
    let precedenteValeur=undefined;
    if(historiqueVariables.length>0) {
    console.log("on teste si " +  historiqueVariables[historiqueVariables.length-1].clefEpisode + " vaut " + historique[historique.length-1])
    }
    if (historiqueVariables.length>0 && historiqueVariables[historiqueVariables.length-1].clefEpisode === historique[historique.length-1]) {
        console.log("on a deja cet épisode en mémoire, ça doit être un retour arrière.");
        for (let vieilleVar of historiqueVariables[historiqueVariables.length-1].variables){
            if(vieilleVar.nomVar === nomVar){
                console.log("on a trouvé l'ancienne valeur : " + vieilleVar.valeur);
                precedenteValeur = vieilleVar.valeur;
            }
        }
    } else {
        precedenteValeur = variables.get(nomVar);
        console.log(nomVar + " valait " + precedenteValeur + ", on met ça en historique");
        if(variables.get(nomVar)) {
            //on garde l'ancienne var en mémoire
            historiqueVariables.push({clefEpisode:historique[historique.length-1], variables:[{nomVar: nomVar, valeur: valeur}]});
        } else {
            //on mémorise qu'elle n'existait pas
            historiqueVariables.push({clefEpisode:historique[historique.length-1], variables:[{nomVar: nomVar, valeur: undefined}]});
        }
    }
    console.log("on set " + nomVar + " avec " + valeur);
    variables.set(nomVar, valeur);
    console.log("historiqueVariables", historiqueVariables);
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
        if (value.nombre>0) {
            mapHtmlInventaire.set(key, "-" + value.nom + " (x" + value.nombre + ")");
        } else {
            inventaire.delete(key);
        }
    }

    //Ensuite, on parcourt les ajouts
    let tabObjetspourHistorique=[];
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
        tabObjetspourHistorique.push({clef:nouvelObjet.clef, nom:nouvelObjet.nom, description:nouvelObjet.description, nombre:nouvelObjet.nombre});
    }
    historiqueInventaire.push({clefEpisode:clefEpisodeEnCours, modifObjets:{tabObjetspourHistorique}});

    // on peut vider les trucs à ajouter vu qu'on les as traité
    inventaireAjout = [];

    // affichage du HTML    
    for (let [key, value] of mapHtmlInventaire) {
        htmlInventaireFinal+=value+"<br>";
    }
    document.getElementById("contenuInventaire").innerHTML=htmlInventaireFinal;
}

function episodePrecedent() {
    if(historique.length>1) {
        enleverDerniersObjetsAcquis();
        remplacerParVariablesPrecedentes(historique[historique.length-2]);
        historique.pop(); // supprime l'épisode en cours de l'historique
        enleverDerniersObjetsAcquis();
        afficherEpisode(historique.pop()); //on repart sur la clef précédente+la supprime
    }
}

//Pour éviter que la fonction "retour" ne permette d'avoir une infinité d'objets
function enleverDerniersObjetsAcquis() {
    if (historiqueInventaire.length > 0) {
        const tabObjetsARetirer = historiqueInventaire.pop().modifObjets.tabObjetspourHistorique;
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
        }
    }
}

//Pour éviter que la fonction "retour" ne permette d'avoir une infinité d'objets
function remplacerParVariablesPrecedentes(clefEpisodeVerifVarASupprimer) {
    console.log("remplacerParVariablesPrecedentes");
    if (historiqueVariables.length > 0) {
        const variablesARemplacer = historiqueVariables[historiqueVariables.length-1];
        console.log("de l'épisode " + clefEpisodeVerifVarASupprimer + " faut remplacer ", variablesARemplacer);
        if (variablesARemplacer && variablesARemplacer.clefEpisode === clefEpisodeVerifVarASupprimer) {
            for (const variable of variablesARemplacer.variables) {
                console.log("on remplace " + variable.nomVar + "avec ", variablesARemplacer);
                //on remplace avec l'ancienne
                variables.set(variable.nomVar, variable.valeur);
            }
            historiqueVariables.pop();
        }
    }
}

function demarrerJeu() {
    if (window.localStorage && window.localStorage.getItem("clefEpisodeEnCours"+titreJeu)){
        //Il y a une sauvegarde, on la restore...
        clefEpisodeEnCours = window.localStorage.getItem("clefEpisodeEnCours"+titreJeu);
        historique = JSON.parse(window.localStorage.getItem("historique"+titreJeu));
        inventaire = new Map(JSON.parse(window.localStorage.getItem("inventaire"+titreJeu)));
        historiqueInventaire = JSON.parse(window.localStorage.getItem("historiqueInventaire"+titreJeu));
        variables = new Map(JSON.parse(window.localStorage.getItem("variables"+titreJeu)));
        historiqueVariables = JSON.parse(window.localStorage.getItem("historiqueVariables"+titreJeu));
        enleverDerniersObjetsAcquis(); // Evite bug "sauver sur episode qui donne un truc" + F5 = objet infini.
        remplacerParVariablesPrecedentes(historique[historique.length-2]);
        afficherEpisode(historique.pop());
    } else {
        afficherEpisode("intro");
    }
}

