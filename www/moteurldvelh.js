//V0.1.7-DEV
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


/* Titre du jeu, pour séparer le local storage entre les games sur la même adresse (localhost typiquement).*/
var titreJeu="";

// Map contenant tous les épisodes, avec en clef la clef de l'épisode et en valeur l'intégralité de l'épisode
var episodes = new Map();

function episode(nouvelEpisode) {
    if(episodes.get(nouvelEpisode.key)) {
        alert(`The episode `+ nouvelEpisode.key + ` already exist!`)
    } else {
        episodes.set(nouvelEpisode.key, nouvelEpisode);
    }
}

// Affiche l'épisode à l'écran et le positionne comme celui en cours.
function playEpisode(clefEpisode) {
    let episode = episodes.get(clefEpisode);
    if (!episode) {alert("Episode " + clefEpisode + " not found."); return;}

    if(episode.revisit && historique.includes(episode.key)) { // gestion des redirections
        //cet épisode redirige vers un autre
        if (historiqueRedirection.filter((clefEp) => clefEp == episode.key).length > 1) {
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
            historiqueRedirection.push(episode.revisit);
            playEpisode(episode.revisit);
            return;
        }
    }

    // affichage de l'épisode
    clefEpisodeEnCours = clefEpisode;
    animerTransition();


    const episodeOriginal = clonerEpisode(episode);

    if (episode.commands) {
        episode.commands();
        episodeOriginal.commands = episode.commands;
    }
    historique.push(clefEpisode);
    historiqueRedirection = [];
    if (episode.title instanceof Function) {
        document.getElementById("titre").innerHTML=episode.title();
    } else {
        document.getElementById("titre").innerHTML=episode.title;
    }
    if (episode.text instanceof Function) {
        document.getElementById("texte").innerHTML=formatterTexte(episode.text());
    } else {
        document.getElementById("texte").innerHTML=formatterTexte(episode.text);
    }
    if(episode.image) {
         remplacerImage(episode.image);
    } else {
        remplacerImage("");
    }

    genererLiens(episode.links);
    afficherInventaire();

    // L'épisode a pu être modifié par des callbacks donc on réinjecte l'original.
    // Sinon les modifs de texte par exemple s'additionneront à l'infini.
    episodes.set(clefEpisodeEnCours, episodeOriginal);
}

function clonerEpisode(episode) {
    let episodeClone = JSON.parse(JSON.stringify(episode));
    // en parsant on a perdu les fonctions titre, texte, libelle des liens donc il faut les réinjecter
    episodeClone.title = episode.title;
    episodeClone.text = episode.text;
    if (episode.links) {
        let tabLiensOriginaux=[];
        for (const lien of episode.links) {
            let lienOriginal = lien;
            lienOriginal.label = lien.label;
            tabLiensOriginaux.push(lienOriginal);
        }
        episodeClone.links = tabLiensOriginaux;
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
            if (lien.label instanceof Function) {
                htmlLiens = htmlLiens + `<a href="#" onClick="playEpisode('${lien.path}')">${lien.label()}</a><br>`;
            } else {
                htmlLiens = htmlLiens + `<a href="#" onClick="playEpisode('${lien.path}')">${lien.label}</a><br>`;
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
        if (episode.links) {
            tabLiens.push(episode.links);
            for (const lien of tabLiens.flat()) {
                tabChemins.push(lien.path);
            }
            //et les revisits aussi
            if(episode.revisit) { tabChemins.push(episode.revisit); }
        }
    }

    //on vérifie que tous les chemins mènent vers un épisode
    for (const chemin of [...new Set(tabChemins)]) {
        if(!tabClefsEpisodes.includes(chemin)) {
            console.log("L'épisode " + chemin + " est à créer.");
        }
    }
}

function getNumberOfVisitss() {
    let compteur=0;
    for (const clefEpisode of historique) {
        if (clefEpisode === clefEpisodeEnCours) {
            compteur++;
        }
    }
    return compteur;
}

function remplacerImage(img) {
    document.getElementById("fond").style.backgroundImage="url('data/img/" + img +"')";
}

function setGameTitle(titre) {
    titreJeu = titre;
    document.title = titreJeu;
}

function addLink(nouveauLien) {
    if (!episodes.get(clefEpisodeEnCours).links) {
        episodes.get(clefEpisodeEnCours).links = [];
    }
        episodes.get(clefEpisodeEnCours).links.push(nouveauLien);
}

function replaceAllLinks(nouveauLien) {
    episodes.get(clefEpisodeEnCours).links = [];
    episodes.get(clefEpisodeEnCours).links.push(nouveauLien);
}

function addText(nouveauTexte) {
    if (!episodes.get(clefEpisodeEnCours).text) {
        episodes.get(clefEpisodeEnCours).text = "";
    }
    if (episodes.get(clefEpisodeEnCours).text instanceof Function) {
        episodes.get(clefEpisodeEnCours).text = episodes.get(clefEpisodeEnCours).text() + nouveauTexte;
    } else {
        episodes.get(clefEpisodeEnCours).text += nouveauTexte;
    }
}

function remplaceAllText(nouveauTexte) {
    episodes.get(clefEpisodeEnCours).text = nouveauTexte;
}

function variable(nomVar, valeur) {
    if(!valeur) {
        return showVariable(nomVar);
    } else {
        setVariable(nomVar, valeur);
    }
}

function showVariable(nomVar) {
    return variables.get(nomVar);
}

function setVariable(nomVar, valeur) {
    console.log("ajout en histo");
    let precedenteValeur=undefined;
    if(historiqueVariables.length>0) {
    console.log("on teste si " +  historiqueVariables[historiqueVariables.length-1].keyEpisode + " vaut " + historique[historique.length-1])
    }
    if (historiqueVariables.length>0 && historiqueVariables[historiqueVariables.length-1].keyEpisode === historique[historique.length-1]) {
        console.log("on a deja cet épisode en mémoire, ça doit être un retour arrière.");
        for (let vieilleVar of historiqueVariables[historiqueVariables.length-1].variables){
            if(vieilleVar.nameVar === nomVar){
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

function getNumberOf(objet) {
    return inventaire.get(objet)?inventaire.get(objet).amount:0;
}

function giveSilentlyToPlayer(objet) {
    inventaireAjout.push({key:objet.key, name:objet.name, description:objet.description, amount:objet.amount, silent: true });
}

function giveToPlayer(objet) {
    inventaireAjout.push({key:objet.key, name:objet.name, description:objet.description, amount:objet.amount });
}

function afficherInventaire() {
    let htmlInventaireFinal = "";
    let mapHtmlInventaire=new Map();
    // Déjà, on parcourt l'inventaire et on prépare le html pour chaque objet existant
    for (const [key, value] of inventaire) {
        if (value.amount>0) {
            mapHtmlInventaire.set(key, "-" + value.name + " (x" + value.amount + ")");
        } else {
            inventaire.delete(key);
        }
    }

    //Ensuite, on parcourt les ajouts
    let tabObjetspourHistorique=[];
    for (const nouvelObjet of inventaireAjout) {
        if (mapHtmlInventaire.get(nouvelObjet.key)) { //l'objet n'est pas vraiment nouveau, c'est juste une modif de nombre
            // maj de sa quantite dans le vrai inventaire
            inventaire.get(nouvelObjet.key).amount = nouvelObjet.amount + inventaire.get(nouvelObjet.key).amount;
            if (!nouvelObjet.silent) {
                if(nouvelObjet.amount > 0) {
                    mapHtmlInventaire.set(nouvelObjet.key, mapHtmlInventaire.get(nouvelObjet.key) + '<span class="ajoutInventaire"> +' + nouvelObjet.amount + '</span>');
                } else {
                    mapHtmlInventaire.set(nouvelObjet.key, mapHtmlInventaire.get(nouvelObjet.key) + '<span class="supprInventaire"> ' + nouvelObjet.amount + '</span>');
                }
            } else { // ajout en toute discrétion
                mapHtmlInventaire.set(nouvelObjet.key, "-" + inventaire.get(nouvelObjet.key).name + " (x" + inventaire.get(nouvelObjet.key).amount + ")");
            }
        } else { // l'objet est totalement nouveau
            // ajout dans le vrai inventaire
            inventaire.set(nouvelObjet.key, {name:nouvelObjet.name, description:nouvelObjet.description, amount:nouvelObjet.amount});
            if (!nouvelObjet.silent) {
                mapHtmlInventaire.set(nouvelObjet.key, '<span class="ajoutInventaire">-' + nouvelObjet.name + " (x" + nouvelObjet.amount + ")</span>");
            } else {
                mapHtmlInventaire.set(nouvelObjet.key, '-' + nouvelObjet.name + " (x" + nouvelObjet.amount + ")");
            }
        }
        tabObjetspourHistorique.push({key:nouvelObjet.key, name:nouvelObjet.name, description:nouvelObjet.description, amount:nouvelObjet.amount});
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
        playEpisode(historique.pop()); //on repart sur la clef précédente+la supprime
    }
}

//Pour éviter que la fonction "retour" ne permette d'avoir une infinité d'objets
function enleverDerniersObjetsAcquis() {
    if (historiqueInventaire.length > 0) {
        const tabObjetsARetirer = historiqueInventaire.pop().modifObjets.tabObjetspourHistorique;
        if (tabObjetsARetirer) {
            for (const objetARetirer of tabObjetsARetirer) {
                if (inventaire.get(objetARetirer.key)) {
                    if((inventaire.get(objetARetirer.key).amount - objetARetirer.amount) === 0) {
                        inventaire.delete(objetARetirer.key);
                    } else {
                    inventaire.get(objetARetirer.key).amount -= objetARetirer.amount;
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
        if (variablesARemplacer && variablesARemplacer.keyEpisode === clefEpisodeVerifVarASupprimer) {
            for (const variable of variablesARemplacer.variables) {
                console.log("on remplace " + variable.nameVar + "avec ", variablesARemplacer);
                //on remplace avec l'ancienne
                variables.set(variable.nameVar, variable.valeur);
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
        playEpisode(historique.pop());
    } else {
        playEpisode("intro");
    }
}

