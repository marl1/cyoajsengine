creerEpisode({
    clef: "intro",
    titre : `Un village simple`,
    texte :
    `Vous êtes dans ***un tout petit village***.`
            ,
    liens: [
            {libelle: `Aller dans la ferme.`,
            chemin: "allerFerme"},
            {libelle: `Aller dans le magasin.`,
            chemin: "allerMagasin"},
            {libelle: `Aller à l'église.`,
            chemin: "allerEglise"}
        ]
});

/* Exemple de "revisite". */
creerEpisode({
    clef: "allerFerme",
    titre : `Dans la ferme.`,
    texte :
    `Vous frappez à la porte de la ferme. Celle-ci s'ouvre doucement d'elle-même. L'intérieur est rustique et dépouillé.
    
    Il y a un papier à l'intérieur :
    "Je reviens plus tard. -Mimi"`
            ,
    liens: [
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
    ,revisite:"deuxiemeVisiteFerme"
});

creerEpisode({
    clef: "deuxiemeVisiteFerme",
    titre : `Retour dans la ferme.`,
    texte :
    `Cette fois-ci, à l'intérieur, vous voyez Mimi, ***une femme entre deux âge*** en train de ranger des bacs de légumes.
    
    "Bonjour !, dit-elle, ***repassez plus tard***, je suis un peu occupée."`
            ,
    liens: [
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
    ,revisite:"troisiemeVisiteFerme"
});

creerEpisode({
    clef: "troisiemeVisiteFerme",
    titre : `Nouveau retour dans la ferme.`,
    texte :
    `Mimi vous accueille chaleuresement. Elle vous offre à manger et vous parlez de choses et d'autres. Vous passez un ***très agréable moment***.`
            ,
    liens: [
            {libelle: `Sortir.`,
            chemin: "intro"},
        ]
    ,revisite:"allerFerme"
});