setGameTitle("Sample game");

/* Exemple d'affichage de variables */
episode({
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
episode({
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
episode({
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
episode({
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
        if (showVariable("astuceFantomeDite") !== true) {
		    setVariable("astuceFantomeDite", true);
            remplaceAllText(`Mimi welcomes your warmly.  She talks about the ghost in the mine and ***gives you the trick*** to make him disappear : scream "***it's the tax collector***" !`);
        }
    }
});

/* Exemple d'ajout d'un objet + détection du nombre de visite. */
episode({
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
		giveToPlayer({clef:"euros", nom:"Euros", description:"Des euros.", nombre:50});
        if (getNumberOfVisitss() === 0) {
            addText(` Since it's your first time here they give you ***security shoes***.`);
            giveToPlayer({clef:"chaussuresSecu", nom:"Pair of security shoes", description:"Pair of security shoes.", nombre:1});
        }
    }
});

/* Exemple d'affichage de variables.Penser à utiliser "() =>" ! */
episode({
    clef: "allerMagasin",
    titre : () => `Go to the store (with ${getNumberOf("euros")} euros).`,
    texte: () =>
        `The store is selling a beautiful ***pickaxe***. You have ${getNumberOf("euros")} euros on you.
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
episode({
    clef: "acheterPioche",
    titre : () => `Buy the pickaxe.`,
    texte: () =>``
    ,liens: [
            {libelle: () => `Get out.`,
            chemin: "intro"},
        ]
    ,commandes: () => {
        if (getNumberOf("euros") < 200) {
            remplaceAllText(`You don't have enough money.`);
        }
        if (getNumberOf("euros") >= 200) {
            remplaceAllText(`You buy ***a beautiful pickaxe***.`);
            giveToPlayer({clef:"pickaxe", nom:"Pickaxe", description:"A beautiful pickaxe.", nombre:1});
            giveToPlayer({clef:"euros", nom:"Euros", description:"Money.", nombre:-200});
        }
    }
});

/* Exemple d'ajout d'un lien. */
episode({
    clef: "allerMines",
    titre : () => `Go into the mines.`,
    texte: () => `You are in the mines.`
    ,liens: [
            {libelle: () => `Get out.`,
            chemin: "intro"},
        ]
    ,image: "mine.png"
    ,commandes: () => {
        if (getNumberOf("pickaxe") < 1) {
            addText(` You have nothing to do here. You would need a ***pickaxe*** to find gold.`);
        } else {
            addLink({libelle: () => `Dig with the pickaxe.`, chemin: "piocherDansLesMines"});
        }
    }
});

/* Exemple de remplacement d'un lien. */
episode({
    clef: "piocherDansLesMines",
    titre : () => `Dig with the pickaxe.`,
    texte: () => `Tac tac tac, you found a ***golden nugget***!`
    ,liens: [
            {libelle: () => `Stop digging.`,
            chemin: "allerMines"},
        ]
    ,image: "mine.png"
    ,commandes: () => {
        giveToPlayer({clef:"goldenNugget", nom:"Golder nugget d'or", description:"A golden nugget.", nombre:1});
        if (getNumberOfVisitss() > 2) {
            addText(
                ` The entrance of the cave ***collapses!*** You hear a ***laughter***.
                "You dug ${getNumberOfVisitss()} times! Hahaha! You are cupid!"
            `);
            replaceAllLinks({libelle: () => `Go to the back of the mine with your ${getNumberOf("goldenNugget")} nuggets.`, chemin: "avancerFondMine"});
        }
    }
});

/* Exemple d'ajout d'un lien. */
episode({
    clef: "avancerFondMine",
    titre : () => `Go to the back of the mine.`,
    texte: () =>`Oh no, it's the ***ghost*** of the mine!`
    ,image: "mine.png"
    ,commandes: () => {
        if (showVariable("astuceFantomeDite") !== true) {
            addText(` He jumps on you and kills you.
                ***FIN***`);
        }else {
            addLink({libelle: () => `Scream "It's the tax collector"! like Mimi taught you.`, chemin: "crierImpots"});
        }
    }
});

/* Exemple d'ajout d'un lien. */
episode({
    clef: "crierImpots",
    titre : () => `Scream the magical words.`,
    texte: () =>`You scream "it's the tax collector!!!" and the ghost dissipate with a panicky scream.
    
    You carve a way out, finding ***lot of golden nuggets***.
    
    You are now rich!
    
    ***Congratulations, you won!***`
    ,image: "victoire.png"
    ,commandes: () => {
        giveToPlayer({clef:"goldenNugget", nom:"Golder nugget d'or", description:"A golden nugget.", nombre:1});
    }
});