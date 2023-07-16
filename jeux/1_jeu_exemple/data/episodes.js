creerEpisode({
    clef: "intro",
    titre : `Un village simple`,
    texte :
    `Vous êtes dans ***un tout petit village***.`
    ,liens: [
            {libelle: `Aller dans la ferme.`,
            chemin: "allerFerme"},
            {libelle: `Aller à l'agence d'interim.`,
            chemin: "allerInterim"},
            {libelle: `Aller dans le magasin.`,
            chemin: "allerMagasin"},
            {libelle: `Aller dans les mines d'or.`,
            chemin: "allerMines"}
        ]
});

/* Exemple redirection en cas de nouvelle visite ("revisite") de l'épisode. */
creerEpisode({
    clef: "allerFerme",
    titre : `Dans la ferme.`,
    texte :
    `Vous frappez à la porte de la ferme. Celle-ci s'ouvre doucement d'elle-même. L'intérieur est rustique et dépouillé.
    
    Il y a un papier à l'intérieur :
    "Je reviens plus tard. -Mimi"`
    ,liens: [
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
    ,revisite:"deuxiemeVisiteFerme"
});

/* Exemple de chainage de redirection.*/
creerEpisode({
    clef: "deuxiemeVisiteFerme",
    titre : `Retour dans la ferme.`,
    texte :
    `Cette fois-ci, à l'intérieur, vous voyez Mimi, ***une femme entre deux âge*** en train de ranger des bacs de légumes.
    
    "Bonjour !, dit-elle, ***repassez plus tard***, je suis un peu occupée."`
    ,liens: [
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
    ,revisite:"troisiemeVisiteFerme"
});

/* Exemple de redirection en boucle.*/
creerEpisode({
    clef: "troisiemeVisiteFerme",
    titre : `Nouveau retour dans la ferme.`,
    texte :
    `Mimi vous accueille chaleuresement. Elle vous offre à manger et vous parlez de choses et d'autres. Vous passez un ***très agréable moment***.`
    ,liens: [
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
    ,revisite:"allerFerme"
});

/* Exemple d'ajout d'un objet. */
creerEpisode({
    clef: "allerInterim",
    titre : `Aller à l'agence d'interim.`,
    texte :
    `Vous travaillez avec l'agence et gagnez ***50 euros***.`
    ,liens: [
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
    ,callback: function() {
		ajouterInventaire({clef:"euros", nom:"Euros", description:"Des euros.", nombre:50});
    }
});

/* Exemple d'ajout d'un objet. */
creerEpisode({
    clef: "allerMagasin",
    titre : `Aller au magasin.`,
    texte :
    `Le magasin vend une belle ***pioche***.`
    ,liens: [
            {libelle: `Acheter pioche (200 euros).`,
            chemin: "acheterPioche"},
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
});

/* Exemple d'ajout d'un objet. */
creerEpisode({
    clef: "acheterPioche",
    titre : `Aller au magasin.`,
    texte :``
    ,liens: [
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
    ,callback: function() {
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
    titre : `Aller dans les mines.`,
    texte :`Vous voilà dans les mines.`
    ,liens: [
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
    ,callback: function() {
        if (nombrePossedeDe("pioche") < 1) {
            ajouterTexte(`Vous n'avez rien à faire ici. Il vous faudrait ***une pioche*** pour trouver de l'or.`);
        } else {
            ajouterLien({libelle: `Piocher.`, chemin: "piocherDansLesMines"});
        }
    }
});

/* Exemple d'ajout d'un lien. */
creerEpisode({
    clef: "piocherDansLesMines",
    titre : `Piocher dans les mines.`,
    texte :`Tac tac tac, vous trouvez une ***pépite d'or*** !`
    ,liens: [
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
    ,callback: function() {
        if (nombrePossedeDe("pepiteOr") < 3) {
            ajouterInventaire({clef:"pepiteOr", nom:"Pépite d'or", description:"Une pépite d'or.", nombre:1});
        } else {
            ajouterTexte(`L'entrée de la mine ***s'écroule !***`);
            remplacerLien({libelle: `Avancer vers le fond de la mine.`, chemin: "avancerFondMine"});
        }
    }
});