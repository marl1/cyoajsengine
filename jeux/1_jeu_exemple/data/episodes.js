titrerJeu("Jeu exemple");

/* Exemple d'affichage de variables */
creerEpisode({
    clef: "intro",
    titre : () => `Un village simple`,
    texte: () =>
        `Vous êtes dans ***un tout petit village***.`
    ,liens: [
            {libelle: () => `Aller dans la ferme.`,
            chemin: "allerFerme"},
            {libelle: () => `Aller à l'agence d'interim.`,
            chemin: "allerInterim"},
            {libelle: () => `Aller dans le magasin.`,
            chemin: "allerMagasin"},
            {libelle: () => `Aller dans les mines d'or.`,
            chemin: "allerMines"}
        ]
    ,image: "exterieur.png"
});

/* Exemple redirection en cas de nouvelle visite ("revisite") de l'épisode. */
creerEpisode({
    clef: "allerFerme",
    titre : () => `Dans la ferme.`,
    texte: () =>
    `Vous frappez à la porte de la ferme. Celle-ci s'ouvre doucement d'elle-même. L'intérieur est rustique et dépouillé.
    
    Il y a un papier à l'intérieur :
    "Je reviens plus tard. -Mimi"`
    ,liens: [
            {libelle: () => `Sortir.`,
            chemin: "intro"},
        ]
    ,image: "ferme.png"
    ,revisite:"deuxiemeVisiteFerme"
});

/* Exemple de chainage de redirection.*/
creerEpisode({
    clef: "deuxiemeVisiteFerme",
    titre : () => `Retour dans la ferme.`,
    texte: () =>
    `Cette fois-ci, à l'intérieur, vous voyez Mimi, ***une femme entre deux âge*** en train de ranger des bacs de légumes.
    
    "Bonjour !, dit-elle, ***repassez plus tard***, je suis un peu occupée."`
    ,liens: [
            {libelle: () => `Sortir.`,
            chemin: "intro"},
        ]
    ,image: "ferme.png"
    ,revisite:"troisiemeVisiteFerme"
});

/* Exemple de redirection en boucle.*/
creerEpisode({
    clef: "troisiemeVisiteFerme",
    titre : () => `Nouveau retour dans la ferme.`,
    texte: () =>
    `Mimi vous accueille chaleureusement. Elle vous offre à manger et vous parlez de choses et d'autres. Vous passez un ***très agréable moment***.`
    ,liens: [
            {libelle: () => `Sortir.`,
            chemin: "intro"},
        ]
    ,image: "ferme.png"
    ,revisite:"allerFerme"
    ,commandes: () => {
        if (valeurVariable("astuceFantomeDite") !== true) {
		    modifierVariable("astuceFantomeDite", true);
            remplacerTexte(`Mimi vous accueille chaleureusement.  Elle vous parle du fantôme de la mine et du secret pour le faire disparaitre : Crier "***c'est l'inspecteur des impôts***" !`);
        }
    }
});

/* Exemple d'ajout d'un objet + détection du nombre de visite. */
creerEpisode({
    clef: "allerInterim",
    titre : () => `Aller à l'agence d'interim.`,
    texte: () =>
    `Vous travaillez avec l'agence et gagnez ***50 euros***.`
    ,liens: [
            {libelle: () => `Sortir.`,
            chemin: "intro"},
        ]
    ,image: "interim.png"
    ,commandes: () => {
		ajouterInventaire({clef:"euros", nom:"Euros", description:"Des euros.", nombre:50});
        if (nombreVisites() === 0) {
            ajouterTexte(` Comme c'est la première fois que vous venez, on vous donne des ***chaussures de sécurité***.`);
            ajouterInventaire({clef:"chaussuresSecu", nom:"Paire de chaussures de sécurité", description:"Chaussures de sécurité.", nombre:1});
        }
    }
});

/* Exemple d'affichage de variables.Penser à utiliser "() =>" ! */
creerEpisode({
    clef: "allerMagasin",
    titre : () => `Aller au magasin (avec ${nombrePossedeDe("euros")} euros).`,
    texte: () =>
        `Le magasin vend une belle ***pioche***. Vous avez ${nombrePossedeDe("euros")} euros en poche.
        Une horloge au mur indique qu'il est ${new Date().getHours()} heures, ${new Date().getMinutes()}min et ${new Date().getSeconds()}s.`
    ,image: "magasin.png"
    ,liens: [
            {libelle: () => `Acheter pioche (200 euros).`,
            chemin: "acheterPioche"},
            {libelle: () => `Sortir.`,
            chemin: "intro"},
        ]
});

/* Exemple d'ajout d'un objet. */
creerEpisode({
    clef: "acheterPioche",
    titre : () => `Acheter pioche.`,
    texte: () =>``
    ,liens: [
            {libelle: () => `Sortir.`,
            chemin: "intro"},
        ]
    ,commandes: () => {
        if (nombrePossedeDe("euros") < 200) {
            remplacerTexte(`Vous n'avez pas assez d'argent.`);
        }
        if (nombrePossedeDe("euros") >= 200) {
            remplacerTexte(`Vous achetez ***une belle pioche***.`);
            ajouterInventaire({clef:"pioche", nom:"Pioche", description:"Une pioche.", nombre:1});
            ajouterInventaire({clef:"euros", nom:"Euros", description:"De l'argent.", nombre:-200});
        }
    }
});

/* Exemple d'ajout d'un lien. */
creerEpisode({
    clef: "allerMines",
    titre : () => `Aller dans les mines.`,
    texte: () => `Vous voilà dans les mines.`
    ,liens: [
            {libelle: () => `Sortir.`,
            chemin: "intro"},
        ]
    ,image: "mine.png"
    ,commandes: () => {
        if (nombrePossedeDe("pioche") < 1) {
            ajouterTexte(` Vous n'avez rien à faire ici. Il vous faudrait ***une pioche*** pour trouver de l'or.`);
        } else {
            ajouterLien({libelle: () => `Piocher.`, chemin: "piocherDansLesMines"});
        }
    }
});

/* Exemple de remplacement d'un lien. */
creerEpisode({
    clef: "piocherDansLesMines",
    titre : () => `Piocher dans les mines.`,
    texte: () => `Tac tac tac, vous trouvez une ***pépite d'or*** !`
    ,liens: [
            {libelle: () => `Arrêter de piocher.`,
            chemin: "allerMines"},
        ]
    ,image: "mine.png"
    ,commandes: () => {
        ajouterInventaire({clef:"pepiteOr", nom:"Pépite d'or", description:"Une pépite d'or.", nombre:1});
        if (nombreVisites() > 2) {
            ajouterTexte(
                ` L'entrée de la mine ***s'écroule !*** Vous entendez un ***rire***.
                "Tu es venu ${nombreVisites()} fois ! Hahaha ! Tu es cupide !!"
            `);
            remplacerLien({libelle: () => `Avancer vers le fond de la mine avec vos ${nombrePossedeDe("pepiteOr")} pépites.`, chemin: "avancerFondMine"});
        }
    }
});

/* Exemple d'ajout d'un lien. */
creerEpisode({
    clef: "avancerFondMine",
    titre : () => `Avancer vers le fond de la mine.`,
    texte: () =>`Oh non, c'est le fantôme de la mine !`
    ,image: "mine.png"
    ,commandes: () => {
        if (valeurVariable("astuceFantomeDite") !== true) {
            ajouterTexte(` Il vous saute dessus et vous tue.
                ***FIN***`);
        }else {
            ajouterLien({libelle: () => `Crier "C'est l'inspecteur des impôts !" comme Mimi vous a appris.`, chemin: "crierImpots"});
        }
    }
});

/* Exemple d'ajout d'un lien. */
creerEpisode({
    clef: "crierImpots",
    titre : () => `Crier la phrase magique.`,
    texte: () =>`Vous criez "C'est l'inspecteur des impôts !" et le fantôme disparait aussitôt avec un cri de panique.
    
    Vous creusez un chemin vers la sortie et trouvez ***beaucoup de pépites d'or***.
    
    En sortant de la mine, vous êtes désormais riche !
    
    ***Bravo, vous avez gagné !***`
    ,image: "victoire.png"
    ,commandes: () => {
        ajouterInventaire({clef:"pepiteOr", nom:"Pépite d'or", description:"Une pépite d'or.", nombre:20});
    }
});