titrerJeu("Sample game");

/* Exemple d'affichage de variables */
creerEpisode({
    clef: "intro",
    titre : () => `A simple village`,
    texte: () =>
        `You are in a ***very small village***.`
    ,liens: [
            {libelle: () => `Visit the farm.`,
            chemin: "allerFerme"},
            {libelle: () => `Go to the temp agency.`,
            chemin: "allerInterim"},
            {libelle: () => `Enter the shop.`,
            chemin: "allerMagasin"},
            {libelle: () => `Explore the gold mine.`,
            chemin: "allerMines"}
        ]
    ,image: "exterieur.png"
});

/* Exemple redirection en cas de nouvelle visite ("revisite") de l'épisode. */
creerEpisode({
    clef: "allerFerme",
    titre : () => `In the farm.`,
    texte: () =>
    `You knock at the farm's door. It opens slowly by itself. The interior is old and bare.
    
    You see a note there:
    "Coming back later. -Mimi"`
    ,liens: [
            {libelle: () => `Get out.`,
            chemin: "intro"},
        ]
    ,image: "ferme.png"
    ,revisite:"deuxiemeVisiteFerme"
});

/* Exemple de chainage de redirection.*/
creerEpisode({
    clef: "deuxiemeVisiteFerme",
    titre : () => `Back in the farm.`,
    texte: () =>
    `This time, inside, you see Mimi, ***a middle age lady*** stacking up vegetable crates.
    "Hello!, she says, please ***come back later***, I'm a bit busy."`
    ,liens: [
            {libelle: () => `Get out.`,
            chemin: "intro"},
        ]
    ,image: "ferme.png"
    ,revisite:"troisiemeVisiteFerme"
});

/* Exemple de redirection en boucle.*/
creerEpisode({
    clef: "troisiemeVisiteFerme",
    titre : () => `Back again in the farm.`,
    texte: () =>
    `Mimi welcomes you warmly. She offers you food and you speak about various things. You have a ***wonderful time***.`
    ,liens: [
            {libelle: () => `Get out.`,
            chemin: "intro"},
        ]
    ,image: "ferme.png"
    ,revisite:"allerFerme"
    ,commandes: () => {
        if (valeurVariable("astuceFantomeDite") !== true) {
		    modifierVariable("astuceFantomeDite", true);
            remplacerTexte(`Mimi welcomes your warmly.  She talks about the ghost in the mine and the trick to make him disappear : scream "***it's the tax collector***" !`);
        }
    }
});

/* Exemple d'ajout d'un objet + détection du nombre de visite. */
creerEpisode({
    clef: "allerInterim",
    titre : () => `Go in the temp agency.`,
    texte: () =>
    `You work with the temp agency and earn ***50 euros***.`
    ,liens: [
            {libelle: () => `Get out.`,
            chemin: "intro"},
        ]
    ,image: "interim.png"
    ,commandes: () => {
		ajouterInventaire({clef:"euros", nom:"Euros", description:"Des euros.", nombre:50});
        if (nombreVisites() === 0) {
            ajouterTexte(` Since it's your first time here they give you ***security shoes***.`);
            ajouterInventaire({clef:"chaussuresSecu", nom:"Pair of security shoes", description:"Pair of security shoes.", nombre:1});
        }
    }
});

/* Exemple d'affichage de variables.Penser à utiliser "() =>" ! */
creerEpisode({
    clef: "allerMagasin",
    titre : () => `Go to the store (with ${nombrePossedeDe("euros")} euros).`,
    texte: () =>
        `The store is selling a beautiful ***pickaxe***. You have ${nombrePossedeDe("euros")} euros on you.
        A clock on the wall gives the time: ${new Date().getHours()} hours, ${new Date().getMinutes()}min and ${new Date().getSeconds()}s.`
    ,image: "magasin.png"
    ,liens: [
            {libelle: () => `Buy the pickaxe (200 euros).`,
            chemin: "acheterPioche"},
            {libelle: () => `Get out.`,
            chemin: "intro"},
        ]
});

/* Exemple d'ajout d'un objet. */
creerEpisode({
    clef: "acheterPioche",
    titre : () => `Buy the pickaxe.`,
    texte: () =>``
    ,liens: [
            {libelle: () => `Get out.`,
            chemin: "intro"},
        ]
    ,commandes: () => {
        if (nombrePossedeDe("euros") < 200) {
            remplacerTexte(`You don't have enough money.`);
        }
        if (nombrePossedeDe("euros") >= 200) {
            remplacerTexte(`You buy ***a beautiful pickaxe***.`);
            ajouterInventaire({clef:"pickaxe", nom:"Pickaxe", description:"A beautiful pickaxe.", nombre:1});
            ajouterInventaire({clef:"euros", nom:"Euros", description:"Money.", nombre:-200});
        }
    }
});

/* Exemple d'ajout d'un lien. */
creerEpisode({
    clef: "allerMines",
    titre : () => `Go into the mines.`,
    texte: () => `You are in the mines.`
    ,liens: [
            {libelle: () => `Get out.`,
            chemin: "intro"},
        ]
    ,image: "mine.png"
    ,commandes: () => {
        if (nombrePossedeDe("pickaxe") < 1) {
            ajouterTexte(` You have nothing to do here. You would need a ***pickaxe*** to find gold.`);
        } else {
            ajouterLien({libelle: () => `Dig with the pickaxe.`, chemin: "piocherDansLesMines"});
        }
    }
});

/* Exemple de remplacement d'un lien. */
creerEpisode({
    clef: "piocherDansLesMines",
    titre : () => `Dig with the pickaxe.`,
    texte: () => `Tac tac tac, you found a ***golden nugget***!`
    ,liens: [
            {libelle: () => `Stop digging.`,
            chemin: "allerMines"},
        ]
    ,image: "mine.png"
    ,commandes: () => {
        ajouterInventaire({clef:"goldenNugget", nom:"Golder nugget d'or", description:"A golden nugget.", nombre:1});
        if (nombreVisites() > 2) {
            ajouterTexte(
                ` The entrance of the cave ***collapses!*** You hear a ***laughter***.
                "You came ${nombreVisites()} times! Hahaha! You are cupid!"
            `);
            remplacerLien({libelle: () => `Go to the back of the mine with your ${nombrePossedeDe("goldenNugget")} nuggets.`, chemin: "avancerFondMine"});
        }
    }
});

/* Exemple d'ajout d'un lien. */
creerEpisode({
    clef: "avancerFondMine",
    titre : () => `Go to the back of the mine.`,
    texte: () =>`Oh no, it's the ***ghost*** of the mine!`
    ,image: "mine.png"
    ,commandes: () => {
        if (valeurVariable("astuceFantomeDite") !== true) {
            ajouterTexte(` He jumps on you and kills you.
                ***FIN***`);
        }else {
            ajouterLien({libelle: () => `Scream "It's the tax collector"! like Mimi taught you.`, chemin: "crierImpots"});
        }
    }
});

/* Exemple d'ajout d'un lien. */
creerEpisode({
    clef: "crierImpots",
    titre : () => `Scream the magical words.`,
    texte: () =>`You scream "it's the tax collector!!!" and the ghost dissipate with a panicky scream.
    
    You carve a way out, finding ***lot of golden nuggets***.
    
    You are now rich!
    
    ***Congratulations, you won!***`
    ,image: "victoire.png"
    ,commandes: () => {
        ajouterInventaire({clef:"goldenNugget", nom:"Golder nugget d'or", description:"A golden nugget.", nombre:1});
    }
});