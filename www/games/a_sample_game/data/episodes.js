setGameTitle("Sample game");

/* Exemple d'affichage de variables */
episode({
    key: "intro",
    title: () => `A simple village`,
    text: () =>
        `You are in a ***very small village***.`
    ,links: [
            {label: () => `Visit the farm.`,
            path: "allerFerme"},
            {label: () => `Go to the temp agency.`,
            path: "allerInterim"},
            {label: () => `Enter the shop.`,
            path: "allerMagasin"},
            {label: () => `Explore the gold mine.`,
            path: "allerMines"}
        ]
    ,image: "exterieur.png"
});

/* Exemple redirection en cas de nouvelle visite ("revisit") de l'épisode. */
episode({
    key: "allerFerme",
    title: () => `In the farm.`,
    text: () =>
    `You knock at the farm's door. It opens slowly by itself. The interior is old and bare.
    
    You see a note there:
    "Coming back later. -Mimi"`
    ,links: [
            {label: () => `Get out.`,
            path: "intro"},
        ]
    ,image: "ferme.png"
    ,revisit:"deuxiemeVisiteFerme"
});

/* Exemple de chainage de redirection.*/
episode({
    key: "deuxiemeVisiteFerme",
    title: () => `Back in the farm.`,
    text: () =>
    `This time, inside, you see Mimi, ***a middle age lady*** stacking up vegetable crates.
    "Hello!, she says, please ***come back later***, I'm a bit busy."`
    ,links: [
            {label: () => `Get out.`,
            path: "intro"},
        ]
    ,image: "ferme.png"
    ,revisit:"troisiemeVisiteFerme"
});

/* Exemple de redirection en boucle.*/
episode({
    key: "troisiemeVisiteFerme",
    title: () => `Back again in the farm.`,
    text: () =>
    `Mimi welcomes you warmly. She offers you food and you speak about various things. You have a ***wonderful time***.`
    ,links: [
            {label: () => `Get out.`,
            path: "intro"},
        ]
    ,image: "ferme.png"
    ,revisit:"allerFerme"
    ,commands: () => {
        if (showVariable("astuceFantomeDite") !== true) {
		    setVariable("astuceFantomeDite", true);
            remplaceAllText(`Mimi welcomes your warmly.  She talks about the ghost in the mine and ***gives you the trick*** to make him disappear : scream "***it's the tax collector***" !`);
        }
    }
});

/* Exemple d'ajout d'un objet + détection du nombre de visite. */
episode({
    key: "allerInterim",
    title: () => `Go in the temp agency.`,
    text: () =>
    `You work with the temp agency and earn ***50 euros***.`
    ,links: [
            {label: () => `Get out.`,
            path: "intro"},
        ]
    ,image: "interim.png"
    ,commands: () => {
		giveToPlayer({key:"euros", name:"Euros", description:"Des euros.", amount:50});
        if (getNumberOfVisitss() === 0) {
            addText(` Since it's your first time here they give you ***security shoes***.`);
            giveToPlayer({key:"chaussuresSecu", name:"Pair of security shoes", description:"Pair of security shoes.", amount:1});
        }
    }
});

/* Exemple d'affichage de variables.Penser à utiliser "() =>" ! */
episode({
    key: "allerMagasin",
    title: () => `Go to the store (with ${getNumberOf("euros")} euros).`,
    text: () =>
        `The store is selling a beautiful ***pickaxe***. You have ${getNumberOf("euros")} euros on you.
        A clock on the wall gives the time: ${new Date().getHours()} hours, ${new Date().getMinutes()}min and ${new Date().getSeconds()}s.`
    ,image: "magasin.png"
    ,links: [
            {label: () => `Buy the pickaxe (200 euros).`,
            path: "acheterPioche"},
            {label: () => `Get out.`,
            path: "intro"},
        ]
});

/* Exemple d'ajout d'un objet. */
episode({
    key: "acheterPioche",
    title: () => `Buy the pickaxe.`,
    text: () =>``
    ,links: [
            {label: () => `Get out.`,
            path: "intro"},
        ]
    ,commands: () => {
        if (getNumberOf("euros") < 200) {
            remplaceAllText(`You don't have enough money.`);
        }
        if (getNumberOf("euros") >= 200) {
            remplaceAllText(`You buy ***a beautiful pickaxe***.`);
            giveToPlayer({key:"pickaxe", name:"Pickaxe", description:"A beautiful pickaxe.", amount:1});
            giveToPlayer({key:"euros", name:"Euros", description:"Money.", amount:-200});
        }
    }
});

/* Exemple d'ajout d'un lien. */
episode({
    key: "allerMines",
    title: () => `Go into the mines.`,
    text: () => `You are in the mines.`
    ,links: [
            {label: () => `Get out.`,
            path: "intro"},
        ]
    ,image: "mine.png"
    ,commands: () => {
        if (getNumberOf("pickaxe") < 1) {
            addText(` You have nothing to do here. You would need a ***pickaxe*** to find gold.`);
        } else {
            addLink({label: () => `Dig with the pickaxe.`, path: "piocherDansLesMines"});
        }
    }
});

/* Exemple de remplacement d'un lien. */
episode({
    key: "piocherDansLesMines",
    title: () => `Dig with the pickaxe.`,
    text: () => `Tac tac tac, you found a ***golden nugget***!`
    ,links: [
            {label: () => `Stop digging.`,
            path: "allerMines"},
        ]
    ,image: "mine.png"
    ,commands: () => {
        giveToPlayer({key:"goldenNugget", name:"Golder nugget d'or", description:"A golden nugget.", amount:1});
        if (getNumberOfVisitss() > 2) {
            addText(
                ` The entrance of the cave ***collapses!*** You hear a ***laughter***.
                "You dug ${getNumberOfVisitss()} times! Hahaha! You are cupid!"
            `);
            replaceAllLinks({label: () => `Go to the back of the mine with your ${getNumberOf("goldenNugget")} nuggets.`, path: "avancerFondMine"});
        }
    }
});

/* Exemple d'ajout d'un lien. */
episode({
    key: "avancerFondMine",
    title: () => `Go to the back of the mine.`,
    text: () =>`Oh no, it's the ***ghost*** of the mine!`
    ,image: "mine.png"
    ,commands: () => {
        if (showVariable("astuceFantomeDite") !== true) {
            addText(` He jumps on you and kills you.
                ***FIN***`);
        }else {
            addLink({label: () => `Scream "It's the tax collector"! like Mimi taught you.`, path: "crierImpots"});
        }
    }
});

/* Exemple d'ajout d'un lien. */
episode({
    key: "crierImpots",
    title: () => `Scream the magical words.`,
    text: () =>`You scream "it's the tax collector!!!" and the ghost dissipate with a panicky scream.
    
    You carve a way out, finding ***lot of golden nuggets***.
    
    You are now rich!
    
    ***Congratulations, you won!***`
    ,image: "victoire.png"
    ,commands: () => {
        giveToPlayer({key:"goldenNugget", name:"Golder nugget d'or", description:"A golden nugget.", amount:1});
    }
});