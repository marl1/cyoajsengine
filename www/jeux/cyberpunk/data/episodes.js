titrerJeu("cyberpunk");

creerEpisode({
    clef: "intro",
    titre : `Introduction`,
    texte :
    `<h2>2087.</h2>
    <img src="data/img/perso.png" style="float:right; padding:0.5em;">
    VOUS êtes ***Aiden Shaw***, 34 ans.

    Ce fut à 19 ans, après des années de déscolarisation, que vous avez rejoint l'armée par dépit. Votre parcours y fut (à votre grande surprise) brillant. Mais, dégouté de l'institution militaire, vous la quittez 6 ans plus tard, non sans avoir reçu vos premiers implants.

    A 30 ans, vous êtes recruté par la branche "sécurité privée" de la société de biotechnologie Premanod. La dernière mission chez eux vous a laissé un goût particulièrement amer au point d'abandonner votre poste.

    Depuis quelques mois, vous errez, sans but, votre corps charcuté pour faire la guerre hurlant douloureusement son besoin de maintenance.

    Vos besoins croissants en drogues pour lutter contre les tremblement liées aux désynchronisations vous ont mené ***dans cette boite de nuit***...
            `,
    liens: [
            {libelle: `Commencez votre aventure.`,
            chemin: "intro2"}
        ]
});

creerEpisode({
    clef: "intro2",
    titre : `Transaction dans le club`,
    texte :
    `La piste de danse d'une boîte de nuit. Meilleur endroit pour faire une transaction discrète : là où on n'arrive même pas à entendre quelqu'un nous criant dans l'oreille.

    "COMBIEN ???, hurlez-vous encore une fois.
    -NEUF CENTS !"

    Merde. Vous aviez bien compris, malgré la musique assourdissante.  C'est cher mais vous avez absolument besoin de ces médicaments. Vous sortez trois billets que votre contact (au sexe indéterminé) s'empresse d'empocher avec un grand sourire.

    "TU LE REGRETTERAS PAS !" vous hurle-t-il à l'oreille en vous donnant ***trois gélules*** avant de disparaitre dans la foule.

    Il va falloir que vous disparaissiez vous aussi. Un ***signal de notification*** s'affiche soudain dans vos lunettes, émit par l'application CopCast.`
            ,
    liens: [
            {libelle: `Consulter la notification.`,
            chemin: "consulterNotifClub"},
            {libelle: `Ignorer la notification.`,
            chemin: "ignorerNotifClub"}
        ],
    commandes: () => {
		ajouterInventaireDiscretement({clef:"credits", nom:"Crédits", description:"De l'argent.", nombre:2000});
		ajouterInventaire({clef:"credits", nom:"Crédits", description:"De l'argent.", nombre:-900});
        ajouterInventaire({clef:"SMX", nom:"Gélules de SMX", description:"Relaxant utilisé de façon festive ou par les implantés pour limiter les tremblements.", nombre:3});
    }
});

creerEpisode({
    clef: "consulterNotifClub",
    titre : `Consulter la notif CopCast`,
    texte :
    `L'user Hyubriss a signalé ***trois flics*** du côté de la porte d'entrée. Son info a été confirmée par deux autres personnes.
    C'est toujours bon à savoir. Même s'il y a pas de raison particulière que ça tombe sur vous, il vaut mieux peut être ***ne pas donner*** aux poulets ***l'occasion de trouver les gélules*** dans votre manteau.`
            ,
    liens: [
            {libelle: `Aller vers les loges pour trouver la porte de derrière.`,
            chemin: "4"},
            {libelle: `Aller se planquer aux toilettes.`,
            chemin: "5"},
            {libelle: `Rester au milieu de la foule de clubbers et attendre que la police parte.`,
            chemin: "6"},
            {libelle: `Au culot, sortir par l'entrée principale.`,
            chemin: "7"}
        ]
});

creerEpisode({
    clef: "5",
    titre : `Les toilettes du club`,
    texte :
    `Vous coupez immédiatement vos récepteurs olfactifs en entrant. L'endroit est dégueulasse, en proie à une guerre de territoire farouche entre les flaques de vomi et celles de pisse.

Vous remarquez une ***trappe d'aération au dessus d'une cabine***, fermée.`
            ,
    liens: [
            {libelle: `Emprunter le conduit d'aération de la cabine fermée.`,
            chemin: "12"},
            {libelle: `Sortir, aller vers les loges pour trouver la porte de derrière.`,
            chemin: "4"},
            {libelle: `Rester au milieu de la foule de clubbers et attendre que la police parte.`,
            chemin: "6"},
            {libelle: `Au culot, sortir par l'entrée principale.`,
            chemin: "7"}
        ]
});

creerEpisode({
    clef: "6",
    titre : `♪♩♫♬♬♫♬♪`,
    texte :
    `Vous patientez quelques instants au milieu des clubbers, des spots multicolores et de la musique abrutissante.

Vous finissez par remarquer deux personnes, habillées normalement, avancer dans la salle. C'est précisément être "habillé normalement" qui les trahit. Pas de cuir, pas de mini shorts, les cheveux coupées courts sans pointes de gel dans tous les sens. C'est bien ***des flics***, pas de doute. ***S'ils vous choppent avec ces gélules***, c'est fini pour vous.
`
            ,
    liens: [
            {libelle: `Aller vers les loges pour trouver la porte de derrière.`,
            chemin: "4"},
            {libelle: `Aller se planquer aux toilettes.`,
            chemin: "5"},
            {libelle: `Contourner les flics, et sortir par l'entrée principale.`,
            chemin: "7"},
            {libelle: `Je crois à mon plan. Je continue d'attendre ici.`,
            chemin: "continuerDAttendreClub"}
        ]
});

creerEpisode({
    clef: "continuerDAttendreClub",
    titre : `Continuer d'attendre`,
    texte :
    `Vous vous faites tout petit dans la foule, observant les flics au loin.
Soudain, ils se dirigent droit sur vous. ***Vous êtes repéré***, ça ne fait aucun doute.`
            ,
    liens: [
            {libelle: `Aller vers les loges pour trouver la porte de derrière.`,
            chemin: "4"},
            {libelle: `Aller se planquer aux toilettes.`,
            chemin: "planquerApresAttente"},
            {libelle: `Contourner les flics, et sortir par l'entrée principale.`,
            chemin: "7"},
            {libelle: `Je continue d'attendre, j'ai dit !`,
            chemin: "continuerDAttendreEncoreClub"}
        ]
});

creerEpisode({
    clef: "planquerApresAttente",
    titre : `Se planquer aux toilettes`,
    texte :
    `Vous vous réfugiez dans les toilettes du club. Vous voyez un ***conduit d'aération*** qui vous permettrait de fuir, mais pas le temps : ***3 policiers sont rentrés*** juste derrière vous.
    
    "Restez calme, fait l'un d'eux, on veut juste vous parler."`
            ,
            liens: [
            {libelle: `Vous rendre.`,
            chemin: "seRendreFlicsToilettes"},
            {libelle: `Les neutraliser.`,
            chemin: "attaquerFlicsToilettes"},
            {libelle: `Prendre un otage.`,
            chemin: "prendreOtageFlicToilettes"},
            {libelle: `Fuir.`,
            chemin: "FuirFlicsToilettes"}
        ]
});

creerEpisode({
    clef: "FuirFlicsToilettes",
    titre : `Fuir les 3 policiers`,
    texte :
    `Soudainement, vous vous élancez vers...
Nulle part. Deux balles viennent se loger dans vos genoux.

Dommage. Dans ces toilettes vides, le policier n'a pas hésité à utiliser son arme. Il s'approche de vous, s'agenouille et...
`            ,
    liens: [
            {libelle: `Noir.`,
            chemin: "96"}
        ]
});

creerEpisode({
    clef: "seRendreFlicsToilettes",
    titre : `Se rendre aux policiers dans les toilettes`,
    texte :
    `Vous levez les mains et dites : "Mais bien sûr, pas de problème."
    
    Un policier vient se placer derrière vous, et commence à dire quelque chose mais vous ne...`
            ,
            liens: [
            {libelle: `Noir.`,
            chemin: "96"}
        ]
});

creerEpisode({
    clef: "attaquerFlicsToilettes",
    titre : `Combattre les policiers dans les toilettes`,
    texte :
    `Trois contre un. Mais vous êtes augmenté, et en plus l'espace est exigu. C'est jouable.
    
    Vous ***écrasez la tête*** du premier contre le mur de la main droite, tandis que ***vous mettez KO le deuxième*** de votre coude gauche. Le troisième vous vise mais vous ne ne lui laissez pas le temps de tirer.
    
    ***Les trois sont à terre, inconscients.*** Bon travail, mais les renforts risque d'arriver vite.`
            ,
            liens: [
            {libelle: `Sortir des toilettes.`,
            chemin: "sortirFlicsToilettes"},
            {libelle: `Fuir dans le conduit d'aération.`,
            chemin: "FuirFlicsToilettesConduit"}
        ]
});

creerEpisode({
    clef: "FuirFlicsToilettesConduit",
    titre : `Fuir dans le conduit`,
    texte :
    `Vous fuyez dans le conduit. Juste à temps, car une fois à l'intérieur vous entendez ***la porte s'ouvrir*** et des bruits d'articulation mécanique. ***Un augmenté, certainement, ***qui vient ***d'arriver en renfort***.
    Le conduit est très étroit, mais vous avez vu pire. Il fait un angle et monte au plafond. Vous vous tortillez dans le boyau métallique pour monter, en espérant ne pas tout casser et arrivez enfin en haut. ***Le chemin se divise*** en trois.`

            ,
            liens: [
            {libelle: `Tout droit, vous sentez un flux d'air. Ca doit certainement mener à l'extérieur.`,
            chemin: "exterieurApresFuitePoliciersToilettes"},
            {libelle: `Il continue également à votre gauche.`,
            chemin: "interceptionParAugmente"},
            {libelle: `A droite, le conduit semble redescendre.`,
            chemin: "interceptionParAugmente"}
        ]
});

creerEpisode({
    clef: "exterieurApresFuitePoliciersToilettes",
    titre : `Fuir dans le conduit`,
    texte :
    `Effectivement, le conduit mène à l'extérieur, mais un climatiseur vous barre la route. Vous l'arrachez en quelques coups de pied et aterrissez lourdement dans la rue derrière le club.
    
    Vous vous enfuyez en courant, sans demander votre reste, et retournez à votre planque.

    Bravo, vous évitez ainsi de travailler de nouveau pour Premanod. Vous réussissez à quitter le pays et trouvez un poste de mercenaire. Mais ceci est une autre histoire...

    ***FIN***
    `
});

creerEpisode({
    clef: "interceptionParAugmente",
    titre : `Fuir par les conduits`,
    texte :
    `Vous rampez sans trop savoir où aller.
Soudain, le conduit s'effondre et vous chutez lourdement sur le dos.

Juste au dessus de vous se tient ***un augmenté***, comme vous, mais ***à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente. Il vient de défoncer le plafond.

Vous n'avez même pas le temps de le voir attaquer. Vous le voyez juste... Disparaitre. Et...`
            ,
            liens: [
                {libelle: `Noir`,
                chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "sortirFlicsToilettes",
    titre : `Sortir des toilettes après avoir neutralisé les policiers`,
    texte :
    `Vous ouvrez la porte et tombez nez à nez avec un ***grand type en imperméable*** qui semble augmenté, comme vous, portant lui aussi des lunettes noires sans branches, directement fusionnées avec ses tempes. Sa peau blanche semble presque fluorescente.

    Les renforts, cest LUI.

    Vous n'avez rien le temps de voir, si ce n'est un flash, un mouvement flou, et...
    `
    ,
            liens: [
                {libelle: `Noir`,
                chemin: "96"}
        ]
});

creerEpisode({
    clef: "prendreOtageFlicToilettes",
    titre : `Prendre un policier en otage`,
    texte :
    `D'un geste rapide, vous faites une clef de bras et saisissez un policier par le cou.
    "Laissez-moi partir sinon je le tue.", dites-vous.

    "On veut juste parler ! Déconne pas !", répond l'un d'eux.

    Sans cesser de les fixer, vous reculez vers la sortie avec votre otage, lorsque vous sentez un mouvement dans votre dos et...
    `
    ,
            liens: [
                {libelle: `Noir`,
                chemin: "96"}
        ]
});

creerEpisode({
    clef: "continuerDAttendreEncoreClub",
    titre : `Continuer d'attendre encore`,
    texte :
    `Vous êtes maintenant encerclé par quatre policiers. "HEP !", crie l'un deux.`
            ,
            liens: [
            {libelle: `Vous rendre.`,
            chemin: "112"},
            {libelle: `Fuir coûte que coûte.`,
            chemin: "113"},
            {libelle: `Prendre un otage.`,
            chemin: "114"}
        ]
});

creerEpisode({
    clef: "7",
    titre : `Sortir par l'entrée principale du club`,
    texte :
    `Vous décidez de sortir le plus vite et le plus simplement possible, d'autant que la musique et les spots multicolores commencent à vous donner mal à la tête.
Vous vous faufilez entre les danseurs vers la sortie. Un ***flic en civil***, trahi par sa nervosité, ***y est posté***. Bon.

`
            ,
    liens: [
            {libelle: `Sortir quand même par là.`,
            chemin: "104"},
            {libelle: `Aller vers les loges pour trouver la porte de derrière.`,
            chemin: "4"},
            {libelle: `Aller se planquer aux toilettes.`,
            chemin: "5"},
            {libelle: `Rester au milieu de la foule.`,
            chemin: "6"}
        ]
});

creerEpisode({
    clef: "104",
    titre : `Sortir par l'entrée principale du club malgré le policier`,
    texte :
    `Après tout, pourquoi ça tomberait sur vous ?, pensez-vous, en vous dirigeant vers la sortie le plus naturellement possible.

...Et la main du policier vient s'abattre sur votre épaule.
"Je le tiens.", fait-il.`
            ,
    liens: [
            {libelle: `Lui péter le bras.`,
            chemin: "105"},
            {libelle: `Lui demander ce qu'il veut.`,
            chemin: "106"},
            {libelle: `Fuir vers la sortie.`,
            chemin: "107"},
            {libelle: `Fuir vers l'intérieur du club.`,
            chemin: "108"}
        ]
});

creerEpisode({
    clef: "105",
    titre : `Péter le bras du policier gardant la sortie du club`,
    texte :
    `D'un mouvement parfait, vous lui cassez le bras au niveau du coude, puis lui donnez un coup sur la nuque.
Il s'effondre sans avoir eu le temps de se plaindre.

A votre droite, deux policiers accourent depuis l'intérieur du club. Trois autres viennent de l'extérieur. Vous êtes coincé, et désarmé. Même un augmenté comme vous n'aurait aucune chance.
`            ,
    liens: [
            {libelle: `Se défendre.`,
            chemin: "109"},
            {libelle: `Se rendre.`,
            chemin: "110"},
            {libelle: `Fuir.`,
            chemin: "111"}
        ]
});

creerEpisode({
    clef: "106",
    titre : `Demander au policier gardant la sortie du club ce qu'il veut`,
    texte :
    `"Pas de panique monsieur, on veut juste discuter un peu, fait-il. On doit prendre quelque précautions car vous êtes un augmenté, mais on veut juste que vous veniez avec nous, sans problème, ok ?" Vous vous rendez compte qu'il a une main près de votre nuque.
    Et soudain...
`            ,
    liens: [
            {libelle: `Noir.`,
            chemin: "96"}
        ]
});

creerEpisode({
    clef: "107",
    titre : `Fuir le policier vers la sortie du club`,
    texte :
    `Vous vous dégagez d'une torsion et fuyez vers...
Nulle part. Deux balles viennent se loger dans vos genoux.

Dommage. Vous n'étiez qu'à quelques mètres de la sortie, mais une fois que vous vous êtes un peu éloigné de la foule, le policier n'a pas hésité à utiliser son arme. Il s'approche de vous, s'agenouille et...
`            ,
    liens: [
            {libelle: `Noir.`,
            chemin: "96"}
        ]
});

creerEpisode({
    clef: "108",
    titre : `Fuir vers l'intérieur du club`,
    texte :
    `Vous vous dégagez d'une torsion et fuyez vers l'intérieur. Le policier a sorti son arme, mais ***n'ose pas tirer*** au milieu de la foule. Vous voyez ***trois de ses collègues*** qui essaient de vous ***encercler***. Avec votre force, vous pouvez certainement les repousser, mais pas sans faire quelques blessés.

Bon. Pas de panique. Vous n'avez rien fait de mal, juste acheté quelques gélules. Au pire, ça sera une amende, vous le savez très bien.
`            ,
    liens: [
            {libelle: `Vous rendre.`,
            chemin: "112"},
            {libelle: `Fuir coûte que coûte.`,
            chemin: "113"},
            {libelle: `Prendre un otage.`,
            chemin: "114"}
        ]
});

creerEpisode({
    clef: "109",
    titre : `Se défendre à main nue contre cinq policiers armés`,
    texte :
    `Deux tirs dans vos genous, et vous voilà à terre. La scène est surréaliste. Vous êtes sur le sol, blessé par balle, tandis que les gens autour continuent de danser, qu'un policier, que la musique, que la lumière...
`            ,
    liens: [
            {libelle: `Noir.`,
            chemin: "96"}
        ]
});


creerEpisode({
    clef: "110",
    titre : `Vous rendre aux collègues de l'homme que vous avez mis KO`,
    texte :
    `Vous mettez vos mains derrière la tête puis vous mettez à genoux.
Ca n'empèche pas les policiers de vous plaquer brutalement sur le sol en vous insultant, d'approcher quelque chose de votre nuque et...
`            ,
    liens: [
            {libelle: `Noir.`,
            chemin: "96"}
        ]
});

creerEpisode({
    clef: "111",
    titre : `Fuir les cinq policiers armés qui vous encerclent`,
    texte :
    `Deux balles viennent se loger dans vos genoux.

La scène est surréaliste. Vous êtes sur le sol, blessé par balle, tandis que les gens autour continuent de danser, qu'un policier, que la musique, que la lumière...
`            ,
    liens: [
            {libelle: `Noir.`,
            chemin: "96"}
        ]
});

creerEpisode({
    clef: "112",
    titre : `Vous rendre aux policiers vous encerclant dans le club`,
    texte :
    `Vous mettez vos mains sur votre tête et vos genoux au sol.
Un policier vient se placer derrière vous, et commence à dire quelque chose mais vous ne...
`            ,
    liens: [
            {libelle: `Noir.`,
            chemin: "96"}
        ]
});

creerEpisode({
    clef: "113",
    titre : `Fuir le club à tout prix`,
    texte :
    `Les quatre policiers sont sur vous. Vous vous dégagez, brisant quelques os, et courrez vers la sortie en reversant les gens comme une sorte de rhinocéros robot.

Et vous êtes stoppé net.

Dans l'encadrement des portes se tient ***un augmenté***, comme vous, mais ***à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...
`            ,
    liens: [
            {libelle: `Noir.`,
            chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "114",
    titre : `Prendre un otage dans le club`,
    texte :
    `Pas le choix, c'est sans doute la seule solution.
Vous prenez la première personne qui vous tombe sous la main, une jeune fille...ou un jeune homme, plutôt... Enfin, quoi que... Bref ! ///La première personne qui vous tombe sous la main///.

"Ne faites pas de conneries, hurle un flic, on veut juste vous emmener avec nous pour parler !"
C'est ça, pensez-vous. Vous reculez lentement vers la porte en surveillant de tous les côtés...
Vous voilà presque arrivé à la sortie et...

Un coup de poing vous envoie voler contre un mur.

Juste à côté de vous se tient un ***augmenté***, comme vous, mais ***à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...
`            ,
    liens: [
            {libelle: `Noir.`,
            chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "12",
    titre : `Monter dans le conduit d'aération`,
    texte :
    `Vous défoncez la porte de la cabine à coup de talon et coupez l'activité d'un couple à moitié nu. Le type vous lance un regard noir de ses yeux globuleux entourés de mascara :
"C'est la sécu !? J'ai rien fait, on fait rien, tu fais quoi là ?
-Dehors."

Vous les foutez tous les deux dehors sans ménagement, montez sur la cuvette, scannez rapidement la grille d'aération. Il y avait bien des lasers de sécurité, mais ils sont hors service, rien d'étonnant quand on voit l'état des chiottes.

Le conduit est très étroit, mais vous avez vu pire. Il fait un angle et monte au plafond. Vous vous tortillez dans le boyau métallique pour monter, en espérant ne pas tout casser et arrivez enfin en haut. ***Le chemin se divise*** en trois.`
            ,
    liens: [
            {libelle: `Tout droit, vous sentez un flux d'air. Ca doit certainement mener à l'extérieur.`,
            chemin: "51"},
            {libelle: `Il continue également à votre gauche.`,
            chemin: "52"},
            {libelle: `A droite, le conduit semble redescendre.`,
            chemin: "53"}
        ]
});

creerEpisode({
    clef: "53",
    titre : `Descente brutale`,
    texte :
    `Vous prenez le conduit de gauche et vous positionnez pour descendre dans celui de droite les pieds en avant. Et il descend plutôt vite. Vous tombez au fond dans un épouvantable fracas, couvert, espérez-vous, par la musique.
Vous êtes plus ou moins coincé à la verticale. Vous pouvez...`
            ,
    liens: [
            {libelle: `Remonter.`,
            chemin: "54"},
            {libelle: `Continuer de progresser les pieds en avant, sans savoir où vous allez.`,
            chemin: "55"}
        ]
});

creerEpisode({
    clef: "54",
    titre : `Remontée...`,
    texte :
    `C'est sans doute plus prudent que d'avancer à l'aveugle.
Vous revoilà à ***l'intersection***.`
            ,
    liens: [
            {libelle: `A votre droite, vous sentez un flux d'air, ce doit être la sortie.`,
            chemin: "51"},
            {libelle: `A votre gauche, le conduit descend.`,
            chemin: "63"},
            {libelle: `Vous pouvez également continuer tout droit.`,
            chemin: "52"}
        ]
});

creerEpisode({
    clef: "55",
    titre : `Avançons...`,
    texte :
    `C'est plutôt risqué d'avancer comme ça à l'aveugle, mais vous n'avez pas le choix.

En l'occurence, vous n'allez pas bien loin. Vous repoussez une plaque avec vos pieds et vous laissez glisser hors du conduit. Vous revoilà à l'extérieur, dans une cabine d'autres toilettes, propres cette fois.

La porte s'ouvre doucement, pour laisser apparaître un type à la coiffure ridicule qui vous regarde les yeux écarquillés.

"Vous... vous allez bien ?!", vous demande-t-il stupidement.`
            ,
    liens: [
            {libelle: `L'assommer.`,
            chemin: "46"},
            {libelle: `Lui répondre que tout va bien.`,
            chemin: "57"},
            {libelle: `Ne pas perdre de temps, sortir des toilettes.`,
            chemin: "48"},
            {libelle: `Remonter dans le conduit.`,
            chemin: "59"}
        ]
});

creerEpisode({
    clef: "59",
    titre : `Avant de remonter...`,
    texte :
    `Vous devriez vous débarrasser du type d'abord : il risque de trouver louche que vous montiez dans un conduit.`
            ,
    liens: [
            {libelle: `L'assommer.`,
            chemin: "46"},
            {libelle: `Vous lui dites que ça va, vous vous enfermez dans les toilettes et attendez son départ.`,
            chemin: "47"}
        ]
});

creerEpisode({
    clef: "46",
    titre : `Bim`,
    texte :
    `Un simple coup de poing suffit. Vous le trainez dans une cabine adjacente, montez sur la cuvette et entreprenez l'ascension de l'étroit conduit.

Il finit par se ***diviser en trois***.`
            ,
    liens: [
            {libelle: `A votre droite, vous sentez un flux d'air, ce doit être la sortie.`,
            chemin: "51"},
            {libelle: `A votre gauche, le conduit descend.`,
            chemin: "63"},
            {libelle: `Vous pouvez également continuer tout droit.`,
            chemin: "52"}
        ]
});

creerEpisode({
    clef: "47",
    titre : `Lui laisser le temps de partir`,
    texte :
    `Inutile de se créer des ennuis faute de patience.

Le type finit par sortir. Vous vous empressez de rejoindre le conduit qui s'élève perpendiculairement, et réussissez, après moultes contorsions, à atteindre le haut.

Il se divise en trois.`
            ,
    liens: [
            {libelle: `A votre droite, vous sentez un flux d'air, ce doit être la sortie.`,
            chemin: "51"},
            {libelle: `A votre gauche, le conduit descend.`,
            chemin: "63"},
            {libelle: `Vous pouvez également continuer tout droit.`,
            chemin: "52"}
        ]
});

creerEpisode({
    clef: "48",
    titre : `Sortir des toilettes des loges`,
    texte :
    `Vous sortez des toilettes et vous retrouvez dans les loges. La ***porte de sortie*** est au fond du couloir, à côté d'un escalier menant au premier étage. Un technicien passe devant vous, en vous ignorant. Vous savez cependant que vous ne devriez pas moisir ici.`
            ,
    liens: [
            {libelle: `Traverser le couloir et sortir.`,
            chemin: "20"},
            {libelle: `Aller au premier étage.`,
            chemin: "21"}
        ]
});

creerEpisode({
    clef: "57",
    titre : `Lui répondre que tout va bien`,
    texte :
    `"Ca va, merci.", dites-vous.

Il n'a pas l'air très convaincu. Il vous fait une petite moue et part essayer de coiffer sa crête de coq devant la glace des toilettes.`
            ,
    liens: [
             {libelle: `Ne pas perdre de temps, sortir des toilettes.`,
            chemin: "48"},
            {libelle: `Remonter dans le conduit.`,
            chemin: "59"}
        ]
});

creerEpisode({
    clef: "63",
    titre : `Perdu ?`,
    texte :
    `Vous freinez tant bien que mal la descente brutale et arrivez face à une grille. Le conduit est un peu plus large ici : un système de sécurité y avait été installé, heureusement inactif.

Le conduit débouche juste au dessus des ***toilettes du club***.

Vous reprenez votre ascension et essayez de vous concentrer :
A droite, vous en venez, ce sont les toilettes des loges.

Tout droit, d'après la fraicheur que vous sentez, ce doit être la sortie.
Et à gauche...?`
            ,
    liens: [
            {libelle: `Tout droit, vers la sortie du conduit.`,
            chemin: "51"},
            {libelle: `Aller à gauche.`,
            chemin: "52"},
            {libelle: `Vous pouvez également rebrousser chemin et retourner dans les toilettes du club.`,
            chemin: "7"}
        ]
});

creerEpisode({
    clef: "ignorerNotifClub",
    titre : `Ignorer la notif CopCast`,
    texte :
    `Les données copcasts sont rarement pertinentes de toute façon. Vous prenez mentalement note de vous débarrasser de cette application plus tard.

Bon, il n'empêche qu'il faut quand même sortir d'ici.`
            ,
    liens: [
            {libelle: `Aller vers les loges pour trouver la porte de derrière.`,
            chemin: "4"},
            {libelle: `Aller se planquer aux toilettes.`,
            chemin: "5"},
            {libelle: `Rester au milieu de la foule de clubbers et attendre que la police parte.`,
            chemin: "6"},
            {libelle: `Sortir par l'entrée principale.`,
            chemin: "7"}
        ]
});

creerEpisode({
    clef: "4",
    titre : `Devant la porte des loges`,
    texte :
    `Vous vous frayez un chemin vers le fond de la salle à travers la masse mouvante des danseurs. La porte est évidemment ***gardée par un agent*** de sécurité du club, un large noir d'une tête de plus que vous (ce qui doit l'amener dans les 2m05).
Vous remarquez qu'il porte des ***lunettes noires de réalité augmentée*** Ectron bas de gamme. Erreur de base.`
            ,
    liens: [
            {libelle: `Essayer de pirater ses lunettes.`,
            chemin: "piraterLunettesCLub"},
            {libelle: `Essayer de le convaincre de vous laisser passer.`,
            chemin: "convaincreLogesCLub"},
            {libelle: `Passer en force.`,
            chemin: "passerEnForceLogesClub"},
            {libelle: `Chercher une autre sortie.`,
            chemin: "19"}
        ]
});

creerEpisode({
    clef: "piraterLunettesCLub",
    titre : `Piratage devant la porte des loges`,
    texte :
    `Vous faites une demande de communication et profitez d'une vulnérabilité connue sur cette marque pour faire ***planter ses lunettes***. Le garde met quelques secondes avant de comprendre que les écrans de ses verres se sont figées et de les rebooter.
Largement assez de temps pour vous permettre de vous ***glisser derrière***.

Espérons que ça lui apprenne à utiliser des lunettes mono-écran à l'avenir.

Vous voilà dans les loges : des petites pièces, certaines avec portes et d'autres avec un simple rideau, disposées sur les côtés d'un long couloir qui ***mène directement à la sortie***.`
            ,
    liens: [
            {libelle: `Traverser le couloir et sortir.`,
            chemin: "20"},
            {libelle: `Aller au premier étage.`,
            chemin: "21"},
            {libelle: `Visiter les pièces.`,
            chemin: "22"}
        ]
});

creerEpisode({
    clef: "convaincreLogesCLub",
    titre : `Convaincre le garde devant la porte des loges`,
    texte :
    `Le garde vous regarde avec curiosité. Nul doute qu'il est en train d'analyser votre visage en utilisant ses lunettes.

Quelle approche allez-vous tenter ?`
            ,
    liens: [
            {libelle: `Lui graisser la patte.`,
            chemin: "graisserPatteGarde"},
            {libelle: `Lui dire que vous êtes du staff.`,
            chemin: "28"},
            {libelle: `Lui dire que vous êtes un fan de l'artiste qui est dans la loge.`,
            chemin: "29"},
            {libelle: `Non, il n'a pas l'air d'être quelqu'un qui se laisse convaincre facilement. Rebrousser chemin pour trouver une autre sortie.`,
            chemin: "19"}
        ]
});

creerEpisode({
    clef: "28",
    titre : `Vous faire passer pour un technicien auprès du garde devant la porte des loges`,
    texte :
    `"PARDON, JE SUIS LE TECHNICIEN !, faites-vous en essayant de passer.
-C'est ça." Il vous repousse fermement.
`
            ,
    liens: [
                {libelle: `Passer en force.`,
                chemin: "passerEnForceLogesClub"},
                {libelle: `Essayer de pirater ses lunettes bas de gamme.`,
                chemin: "piraterLunettesCLub"},
                {libelle: `Chercher une autre sortie.`,
                chemin: "19"}
        ]
});

creerEpisode({
    clef: "29",
    titre : `Vous faire passer pour un fan auprès du garde devant la porte des loges`,
    texte :
    `Il vous repousse fermement:
"PAS DE FAN DANS LES LOGES, ATTENDS-LE A LA SORTIE DU CLUB."
`
            ,
    liens: [
                {libelle: `Passer en force.`,
                chemin: "passerEnForceLogesClub"},
                {libelle: `Essayer de pirater ses lunettes bas de gamme.`,
                chemin: "piraterLunettesCLub"},
                {libelle: `Chercher une autre sortie.`,
                chemin: "19"}
        ]
});

creerEpisode({
    clef: "passerEnForceLogesClub",
    titre : `Passer en force le garde devant la porte des loges.`,
    texte :
    `Vous lui donnez un rapide coup de coude juste sous le crane puis lui écrasez la tête contre la porte. Il s'effondre dans vos bras, KO. Personne ne semble vous avoir vu. Vous le posez plus ou moins assis sur le sol et entrez dans les loges.

Des petites pièces, certaines avec portes et d'autres avec un simple rideau, disposées sur les côtés d'un long couloir qui mène directement à la sortie.`
            ,
            liens: [
                {libelle: `Traverser le couloir et sortir.`,
                chemin: "20"},
                {libelle: `Aller au premier étage.`,
                chemin: "21"},
                {libelle: `Visiter les pièces.`,
                chemin: "22"}
        ]
});

creerEpisode({
    clef: "19",
    titre : `Dans le club`,
    texte :
    `Par où voulez-vous sortir du club ?`
            ,
    liens: [
            {libelle: `Par les loges pour trouver la porte de derrière, c'est très bien.`,
            chemin: "4"},
            {libelle: `Par les toilettes.`,
            chemin: "5"},
            {libelle: `Par l'entrée principale.`,
            chemin: "7"},
            {libelle: `Je préfère rester au milieu de la foule.`,
            chemin: "6"},
        ]
});

creerEpisode({
    clef: "graisserPatteGarde",
    titre : `Tentative de corruption`,
    texte :
    `Ca tombe bien, vous avez du liquide sur vous. Vous lui mettez en main et tentez de passer. L'agent vous repousse fermement et vous rend votre argent en agitant son index. "Non".`
            ,
            liens: [
                {libelle: `Passer en force.`,
                chemin: "passerEnForceLogesClub"},
                {libelle: `Essayer de pirater ses lunettes bas de gamme.`,
                chemin: "piraterLunettesCLub"},
                {libelle: `Chercher une autre sortie.`,
                chemin: "19"}
        ]
});

creerEpisode({
    clef: "20",
    titre : `Sortir par la porte des loges`,
    texte :
    `Vous ouvrez la porte et sortez d'un air décidé.

Vous voilà dans la rue de derrière, glauque, faiblement éclairée par les raies des lampadaires jaune pisse dans lesquels viennent danser les volutes de cigarettes de quelques fumeurs en petits groupes. Ils vous ignorent complètement.

Il y a aussi un grand type en imperméable qui semble augmenté, comme vous, portant lui aussi des lunettes noires sans branches, directement fusionnées avec ses tempes. Sa peau blanche semble presque fluorescente.

"Merci de me suivre.", dit-il en posant sa main sur votre épaule.`
            ,
            liens: [
                {libelle: `Lui demander ce qui se passe.`,
                chemin: "123"},
                {libelle: `Lui briser le bras.`,
                chemin: "124"},
                {libelle: `Fuir.`,
                chemin: "125"}
        ]
});

creerEpisode({
    clef: "123",
    titre : `Demander à l'augmenté de la sortie derrière ce qu'il veut`,
    texte :
    `"On veut juste discuter un peu. Il n'y a pas de soucis." Sa voix est calme et posée, avec une sonorité métallique caractéristique.

Vous avez à peine le temps de vous rendre compte de sa main qui vient toucher doucement votre nuque et...`
            ,
            liens: [
                {libelle: `Noir`,
                chemin: "96"}
        ]
});

creerEpisode({
    clef: "126",
    titre : `Essayer de convaincre de vous laisser passer à l'étage`,
    texte :
    `"Bonjour, je...
-Vous n'avez rien à faire ici monsieur, veuillez redescendre.
-Je suis...
-Non monsieur, merci de redescendre."

*Rien à faire*, c'est comme parler à un mur.
`
            ,
            liens: [
                {libelle: `Redescendre.`,
                chemin: "22"},
                {libelle: `Passer en force.`,
                chemin: "128"}
        ]
});

creerEpisode({
    clef: "128",
    titre : `Passer en force au premier étage`,
    texte :
    `Trop vite pour qu'un oeil humain puisse vous suivre, vous vous accroupissez devant un garde, puis l'assommez d'un uppercut, avant de vous retourner et de frapper le deuxième à la tempe tout en donnant un coup de tête à la dernière personne.

Les ***trois corps s'effondrent*** presque en même temps sur le sol. Du travail de pro.

La première porte est ouverte, c'est un bureau qui sert aussi de salle de pause, à priori. Son mobilier est spartiate, rien d'intéressant. ***L'autre porte est protégée*** par un scanneur digital. Vous pouvez aussi ***continuer dans le couloir***.

Quoi que vous faites, vous feriez mieux de vous dépêcher.
`            ,
            liens: [
                {libelle: `Prendre le couloir.`,
                chemin: "129"},
                {libelle: `Pirater la porte fermée.`,
                chemin: "130"},
                {libelle: `Défoncer la porte fermée.`,
                chemin: "131"},
                {libelle: `Quitter le club.`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "129",
    titre : `Le couloir du premier étage`,
    texte :
    `Le couloir mène à une porte, qui mène elle même aux passerelles au dessus de la salle principale. C'est ici que les techniciens se rendent pour mettre les lumières en place. Rien d'intéressant pour vous.
Vous avez une vue imprenable de la mer humaine en dessous, mais vous ne voyez rien d'anormal.`
            ,
            liens: [
                {libelle: `Pirater la porte fermée.`,
                chemin: "130"},
                {libelle: `Défoncer la porte fermée.`,
                chemin: "131"},
                {libelle: `Quitter le club.`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "130",
    titre : `Pirater la porte fermée`,
    texte :
    `Ca sera facile, le scanneur d'empreinte est de bas de gamme. Vous l'ouvrez légèrement et tirez un fil de vos lunettes que vous branchez à l'intérieur du boitier.

*Clinch* ***La porte est ouverte***.

Vous en profitez aussi pour copier l'empreinte autorisée, ça pourra toujours être utile pour plus tard.

Vous entrez dans le bureau et fermez la porte derrière vous. Il est plutôt minimaliste, mais coquet : une table en bois massif avec ***un ordinateur*** posé dessus, un minibar, quelques tableaux sur les murs...`
            ,
            liens: [
                {libelle: `Fouiller le bureau.`,
                chemin: "134"},
                {libelle: `Fouiller la pièce.`,
                chemin: "135"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "136"}
        ]
});

creerEpisode({
    clef: "131",
    titre : `Défoncer la porte fermée du premier étage`,
    texte :
    `Pas assez de temps pour pirater, vous défoncez la porte d'un coup d'épaule. Vous n'entendez aucune alarme, mais nulle doute qu'elle s'est déjà déclenchée et que le reste de la sécu, peut être même la police, converge déjà vers vous.

Près du bureau se trouve ***une trappe d'aération***, dont vous arrachez rapidement la grille afin de vous aménager une ***sortie de secours***.

Bon. Vous avez le temps pour une action. UNE SEULE action.`
            ,
            liens: [
                {libelle: `Fouiller le bureau.`,
                chemin: "76"},
                {libelle: `Fouiller la pièce.`,
                chemin: "77"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "78"},
                {libelle: `Aller dans le conduit d'aération.`,
                chemin: "73"},
                {libelle: `Quitter la pièce par la porte`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "133",
    titre : `Partir`,
    texte :
    `Pas le temps de jouer. Vous descendez du premier étage et vous ruez vers la sortie.

Vous voilà dans la rue de derrière, glauque, faiblement éclairée par les raies des lampadaires jaune pisse dans lesquels viennent danser les volutes de cigarettes de quelques fumeurs en petits groupes. Ils vous ignorent complètement.

Il y a aussi ***un gros type en imperméable qui semble augmenté***, comme vous, portant lui aussi des lunettes noires sans branches, directement fusionnées avec ses tempes. Sa peau blanche semble presque fluorescente.

"Merci de me suivre.", dit-il en posant sa main sur votre épaule.`
            ,
            liens: [
                {libelle: `Lui demander ce qui se passe.`,
                chemin: "123"},
                {libelle: `Lui briser le bras.`,
                chemin: "124"},
                {libelle: `Fuir.`,
                chemin: "125"}
        ]
});

creerEpisode({
    clef: "134",
    titre : `Fouiller le bureau en bois`,
    texte :
    `Rien de bien intéressant dans les tiroirs : des papiers, des dossiers, du matériel de bureau.

Par contre, sous le plateau se trouve une sorte de renfoncement, avec un joli petit cadeau : un bon vieux ***pistolet*** automatique, en l'occurence un BK13 de Croon, facilement reconnaissable avec sa bande rouge sur le long. C'est pas tout récent, moyennement précis, mais très fiable, avec une excellente cadence de tir et surtout, étant très courant, on trouve ses munitions (0.45 ACP) un peu partout.

Il est chargé à bloc, soit 40 balles. ***Vous l'empochez***, en espérant ne pas avoir à vous en servir, et décidez de...`
            ,
    liens: [
        {libelle: `Fouiller la pièce.`,
        chemin: "135"},
        {libelle: `Consulter l'ordinateur.`,
        chemin: "136"},
        {libelle: `Partir.`,
        chemin: "133"}
    ],
    commandes: () => {
        ajouterInventaire({clef:"pistoletBK13", nom:"Pistolet BK13", description:"", nombre:1 });
        ajouterInventaire({clef:"ballePistolet", nom:"Balle de pistolet", description:"", nombre:40 });
    },
    revisite:"134Revisite"
});

creerEpisode({
    clef: "134Revisite",
    titre : `Fouiller le bureau en bois`,
    texte :
    `Rien de plus dans le bureau. Vous avez déjà bien fouillé.`
            ,
    liens: [
        {libelle: `Fouiller la pièce.`,
        chemin: "135"},
        {libelle: `Consulter l'ordinateur.`,
        chemin: "136"},
        {libelle: `Partir.`,
        chemin: "133"}
    ]
});


creerEpisode({
    clef: "135",
    titre : `Fouiller la pièce.`,
    texte :
    `Il n'y a pas grand chose à fouiller. Vous retournez les meubles, les plantes, les tableaux... Et tombez sur un coffre fort. Il s'ouvre avec une empreinte digitale.

Ca tombe bien, vous venez juste de la copier dans le scanneur de la porte d'entrée.

Il y a environ ***5.000 crédits*** dans le coffre. Pas mal. Vous empochez le tout, refermez le coffre et...`
            ,
            liens: [
                {libelle: `Fouiller le bureau en bois.`,
                chemin: "134"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "136"},
                {libelle: `Partir.`,
                chemin: "133"}
        ],
    commandes: () => {
        ajouterInventaire({clef:"credits", nom:"Crédits", description:"De l'argent.", nombre:5000 });
    },
    revisite:"135Revisite"
});


creerEpisode({
    clef: "135Revisite", //TODO on ne peux ouvrir le coffre qu'une fois
    titre : `Vous retournez la pièce, sans rien trouver de spécial.`,
    texte :
    `Rien de plus dans la pièce. Vous avez déjà bien fouillé.`
            ,
            liens: [
                {libelle: `Fouiller le bureau en bois.`,
                chemin: "134"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "136"},
                {libelle: `Partir.`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "73",
    titre : `Sortir vite du bureau par le conduit`,
    texte :
    `Vous vous engouffrez dans le conduit, et vous faites bien : au même instant des gardes déboulent dans le bureau.

"STOP !", hurlent-ils.

Vous rampez à toute vitesse vers le conduit menant, vous l'espérez, à la sortie.

Et en effet, vous voilà derrière le gros bloc climatiseur accroché à un côté du batiment. A travers les interstices, vous pouvez voir la rue, faiblement éclairée par les lampadaires jaune pisse.

Vous êtes juste au dessus de l'entrée des artistes. Quelques-un sont d'ailleurs en train de griller une cigarette en discutant. Il y a aussi un ***grand type en imperméable qui semble augmenté***, comme vous, portant lui aussi des lunettes noires sans branches, directement fusionnées avec ses tempes. Sa peau blanche semble presque fluorescente.

Pas le temps de gamberger, de toute façon. Vous entendez des bruits derrière vous : on a commencé ***à vous suivre*** dans le conduit.`
            ,
            liens: [
                {libelle: `Défoncer le climatiseur et sortir du club !`,
                chemin: "80"},
                {libelle: `Vous rendre.`,
                chemin: "86"},
                {libelle: `Affronter le personnel de sécurité dans le conduit.`,
                chemin: "87"}
        ]
});

creerEpisode({
    clef: "95",
    titre : `Sortir vite du bureau par le conduit`,
    texte :
    `Vous sautez derrière le bureau, puis bondissez dans le conduit d'aération et rampez à toute vitesse vers le conduit menant, vous l'espérez, à la sortie.

Et en effet, vous voilà derrière le gros bloc climatiseur accroché à un côté du batiment. A travers les interstices, vous pouvez voir la rue, faiblement éclairée par les lampadaires jaune pisse.

Vous êtes juste au dessus de l'entrée des artistes. Quelques-un sont d'ailleurs en train de griller une cigarette en discutant. Il y a aussi un ***grand type en imperméable qui semble augmenté***, comme vous, portant lui aussi des lunettes noires sans branches, directement fusionnées avec ses tempes. Sa peau blanche semble presque fluorescente.

Pas le temps de gamberger, de toute façon. Vous entendez des bruits derrière vous : on a commencé ***à vous suivre*** dans le conduit.`
            ,
            liens: [
                {libelle: `Défoncer le climatiseur et sortir du club !`,
                chemin: "80"},
                {libelle: `Vous rendre.`,
                chemin: "86"},
                {libelle: `Affronter le personnel de sécurité dans le conduit.`,
                chemin: "87"}
        ]
});

creerEpisode({
    clef: "136",
    titre : `Consulter l'ordinateur`,
    texte :
    `L'accès au système d'exploitation (un OS récent... à priori c'est une très bonne machine) est protégée par mot de passe, mais peut être que les données ne sont pas chiffrées. Vous tirez un fin cable du côté gauche de vos lunettes et le branchez. L'ordinateur boote "dans" le système live de vos lunettes et vous pouvez désormais vous promener à loisir sur le disque.`
            ,
            liens: [
                {libelle: `Lire les mails.`,
                chemin: "137"},
                {libelle: `Chercher des codes secrets (ou autre données sensibles).`,
                chemin: "138"},
                {libelle: `Télécharger tout le disque.`,
                chemin: "139"},
                {libelle: `Fouiller la pièce.`,
                chemin: "135"},
                {libelle: `Fouiller le bureau.`,
                chemin: "134"},
                {libelle: `Sortir tant qu'il en est encore temps.`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "137",
    titre : `Lire les mails`,
    texte :
    `Une liste de mails s'offre à vous :

--POURQUOI PAS UN IMPLANT PENIEN BIO MECANIQUE ?--
From:Khonsu@Omikron.org
to:k.bennet@club80sny.com
Un seul endroit où aller ! Les cliniques Khonsu ! Les prix les moins chers, les meilleurs services et, en cas de problème, la piece défectueuse est remplacé en moins de 48 heures ! OFFRE SPECIALE : Pour tout achat d'un bras cybernétique, un doigt est offert ! Pourquoi attendre ? Venez chez Khonsu, les implants dont vous ne pourrez plus vous passer !

--RE:RE:Merci--
From:abricot.toudou@mymail.com
to:k.bennet@club80sny.com
dsl, pas ce soir boulot je t'embrasse mon coeur

--CROON NEWSLETTER--
From:nepasrepondre@Crooninc.org
to:k.bennet@club80sny.com
Cher client,
Croon est heureux de vous présenter son dernier bijou : le HS 010.
Vous voulez en savoir plus ?
Direction http://tinyurl.com/CROONHS010 !

--RE:Présentation--
From:m.harris@club80sny.com
to:k.bennet@club80sny.com
Ca va prendre une heure, une heure et demi grand max. J'ai tout le matos, tu as juste à te pointer et signer (bon, contrôle quand même hein on est d'accord).
Yaura aucun problème on a déjà traité trois fois avec eux :-)

--SARIF INDUSTRIE : NOUVEAU SITE--
From:nepasrepondre@sarifindustries.com
to:k.bennet@club80sny.com
Nouveau site web : http://www.sarifindustries.com
Sarif Industries est une société spécialisée dans la conception et la fabrication d'augmentations mécaniques avancées destinées à l'implantation humaine. La société emploie plus de 1500 personnes à ce jour.
Dernier coup d'éclat:
"DETROIT (30 novembre) - Sarif Industries réalise un progrès scientifique décisif en créant la nouvelle prothèse rétinienne Eye-Know [...] capable de faire recouvrer la vue à ceux dont le nerf optique a subi des dégats jusqu'à présent irréversibles ou qui souffrent de tout autre type de déficiences visuelles."
"Dans un environnement compétitif, seuls ceux dotés d'une véritable vision et faisant preuve d'habilité, peuvent espérer survivre et prospérer" - David Sarif.

--RE:RE:RE:RE:RE:RE:connard--
From:luigibennoli@simplemail.bi
to:k.bennet@club80sny.com
Bon beh tant pis j'espère que tout va bien ^^

--Récapitulatif prestation secupro--
From:pat.harding@secupro.ftr
to:managers@club80sny.com
Bonjour,
Ci-joint le récapitulatif de nos prestations. On est évidemment ouvert aux discussions.

--RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:RE:chatons--
From:mint485@mymail.com
to:silvnor@waprise.org, k.bennet@club80sny.com, coco.liisaa@mymail.com, maxlutinchieur33@mymail.com, pat.ensebel@fenrelcorp.org, ludiv33@clementine.fr, ben.pimouss@shlutts.com
>>>>>>>Un sort horrible attends les
>>>>>>>chatons en
>>>>>>>nouvelle zélande les enfermer >>>>>> dans un parc puis les
>>>>>>>manger cruellement envoie ce mail ou>>>>>> rapidement
>>>>>>à au moins 5 personnes car les chatons horribles >>>>>merci vite vite




Rien d'intéressant, en somme.`
            ,
            liens: [
                {libelle: `Chercher des codes secrets (ou autre données sensibles).`,
                chemin: "138"},
                {libelle: `Télécharger tout le disque.`,
                chemin: "139"},
                {libelle: `Fouiller la pièce.`,
                chemin: "135"},
                {libelle: `Fouiller le bureau.`,
                chemin: "134"},
                {libelle: `Sortir tant qu'il en est encore temps.`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "138",
    titre : `Chercher des codes secrets`,
    texte :
    `Vous trouvez une liste de mots de passe utilisé par le gérant du club que vous stockez dans un coin, sans trop savoir à quoi ça va vous servir.`
            ,
            liens: [
                {libelle: `Lire les mails.`,
                chemin: "137"},
                {libelle: `Télécharger tout le disque.`,
                chemin: "139"},
                {libelle: `Fouiller la pièce.`,
                chemin: "135"},
                {libelle: `Fouiller le bureau.`,
                chemin: "134"},
                {libelle: `Sortir tant qu'il en est encore temps.`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "139",
    titre : `Chercher des codes secrets`,
    texte :
    `C'est sans doute ce qu'il y a de mieux à faire, vous pourrez ainsi étudiez tout ça au calme.
Après quelques minutes, le transfert est terminé. Vous décidez donc de...
Vous trouvez une liste de mots de passe utilisé par le gérant du club que vous stockez dans un coin, sans trop savoir à quoi ça va vous servir.`
            ,
            liens: [
                {libelle: `Fouiller la pièce.`,
                chemin: "135"},
                {libelle: `Fouiller le bureau.`,
                chemin: "134"},
                {libelle: `Sortir tant qu'il en est encore temps.`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "86",
    titre : `Se rendre aux gardes dans le conduit`,
    texte :
    `"Du calme, faites-vous, je me rends".

L'un d'eux vous tire comme il peut à l'extérieur et vous agenouille dans le bureau. Et soudain, c'est le...`
            ,
            liens: [
                {libelle: `Noir.`,
                chemin: "96"}
        ]
});

creerEpisode({
    clef: "45",
    titre : `Les toilettes des artistes`,
    texte :
    `Vous tombez nez à nez avec un type en train de se recoiffer devant la glace. Il vous salue vaguement de la tête avant de vous ignorer.

Les toilettes sont propres. Trois cabines et des pissotières. Vous remarquez ***un conduit d'aération*** au dessus de l'une des cabines. Impossible d'y accéder tant que l'autre type est là.
`
            ,
            liens: [
                {libelle: `Assommer la personne.`,
                chemin: "46"},
                {libelle: `S'enfermer dans la cabine en question et attendre que la personne parte.`,
                chemin: "47"},
                {libelle: `Sortir des toilettes, après tout, votre objectif actuel est de quitter le club.`,
                chemin: "48"},
        ]
});


creerEpisode({
    clef: "75",
    titre : `Trouver une autre entrée`,
    texte :
    `Après tout, il suffit de passer par la porte.

Vous retournez dans les conduits et prenez celui qui semble mener vers les loges.
Il débouche dans les toilettes des artistes, vides, heureusement.

Vous sortez des WC et vous retrouvez dans les loges. La porte de sortie est au fond du couloir, à côté d'un escalier menant au premier étage. C'est sans aucun doute là bas que se trouve le bureau.

Un technicien passe devant vous, en vous ignorant. Vous savez cependant que vous ne devriez pas moisir ici.

`
            ,
            liens: [
                {libelle: `Traverser le couloir et sortir.`,
                chemin: "20"},
                {libelle: `Aller au premier étage.`,
                chemin: "21"}
        ]
});

creerEpisode({
    clef: "84",
    titre : `Fouiller la pièce`,
    texte :
    `Trop lent. Les agents de sécurité débarquent alors que vous êtes en train de retourner les meubles.

"Stop !", fait l'un d'eux.`
            ,
            liens: [
                {libelle: `Se rendre.`,
                chemin: "93"},
                {libelle: `Se défendre.`,
                chemin: "97"},
                {libelle: `Fuir.`,
                chemin: "95"}
        ]
});

creerEpisode({
    clef: "93",
    titre : `Se rendre`,
    texte :
    `"On se calme", dites-vous en croisant vos mains derrière votre nuque et vous agenouillant sur la moquette.

L'un d'entre eux passe derrière vous et...
`
            ,
            liens: [
                {libelle: `Noir.`,
                chemin: "96"}
        ]
});

creerEpisode({
    clef: "87",
    titre : `Affronter le personnel de sécurité dans le conduit`,
    texte :
    `"Malgré l'espace minuscule, vous arrivez assommer un poursuivant mais c'est inutile, ils vous bloquent complêtement l'arrière de toute manières, il va falloir sortir...

Soudain, le conduit s'effondre et vous chutez lourdement sur le dos.

Juste au dessus de vous se tient l'homme que vous avez aperçu dans la rue tout à l'heure. Il vient de défoncer le plafond.

Il est en effet ***augmenté, comme vous, mais à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            liens: [
                {libelle: `Noir.`,
                chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({ //TODO: si arme alors utiliser arme, sinon non
    clef: "97",
    titre : `Combattre les agents de sécurité dans le bureau`,
    texte :
    `Vous vous abritez derrière le bureau et faites cracher votre BK13 tout neuf.

L'affrontement est bref, mais intense. Trois coups, trois hommes à terre. Vous n'avez pas perdu la main.`
            ,
            liens: [
                {libelle: `Fouiller les hommes à terre.`,
                chemin: "98"},
                {libelle: `Fouiller la pièce.`,
                chemin: "99"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "100"},
                {libelle: `Partir.`,
                chemin: "101"},
        ]
});

creerEpisode({
    clef: "98",
    titre : `Fouiller les corps`,
    texte :
    `Aucun des trois n'est mort, mais sans soins rapides, ils n'en ont plus pour très longtemps.

Vous vous penchez sur le premier et... un coup de pied magistral en plein visage vous fait traverser la pièce. Mais qui...?

Devant la porte se tient un augmenté, comme vous, mais à une toute autre échelle. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            liens: [
                {libelle: `Noir.`,
                chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "99",
    titre : `Fouillez la pièce`,
    texte :
    `Vous pouvez désormais fouiller tranquille. Vous finissez par trouver, derrière un tableau, un coffre. Et soudain, vous voilà projeté à travers la pièce.

Vous n'avez rien vu venir. Un camouflage ? Non, juste à côté de vous se tient un augmenté, comme vous, mais à une toute autre échelle. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            liens: [
                {libelle: `Noir.`,
                chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "85",
    titre : `Consulter l'ordinateur`,
    texte :
    `Vous avez a peine eu le temps d'allumer la machine que trois agents de sécu arrivent dans la pièce.

"Rendez-vous !", Fait l'un deux.`
            ,
            liens: [
                {libelle: `Se rendre.`,
                chemin: "93"},
                {libelle: `Se défendre.`,
                chemin: "97"},
                {libelle: `Fuir.`,
                chemin: "95"}
        ]
});

creerEpisode({ //TODO: si on a un flingue...
    clef: "94",
    titre : `Se défendre`,
    texte :
    `A main nue contre trois gardes armés, vous n'avez aucune chance. Alors que vous vous jetiez sur eux, deux balles viennent se loger dans vos genoux.

Vous êtes rapidement maitrisé, plaqué contre la moquette et...`
            ,
            liens: [
                {libelle: `Noir.`,
                chemin: "95"}
        ]
});

creerEpisode({
    clef: "90",
    titre : `Lire les mails`,
    texte :
    `Pas le temps...
Vous aviez à peine reperé l'endroit où étaient rapatriés les mails que trois agents de sécu arrivent dans la pièce.

"Rendez-vous !", fait l'un deux.`
            ,
            liens: [
                {libelle: `Se rendre.`,
                chemin: "93"},
                {libelle: `Se défendre.`,
                chemin: "97"},
                {libelle: `Fuir.`,
                chemin: "95"}
        ]
});

creerEpisode({
    clef: "91",
    titre : `Chercher des données sensibles`,
    texte :
    `Ca demande beaucoup trop de temps...

La porte s'ouvre soudainement et trois agents de sécu débarquent en vous demandant de vous rendre.`
            ,
            liens: [
                {libelle: `Se rendre.`,
                chemin: "93"},
                {libelle: `Se défendre.`,
                chemin: "97"},
                {libelle: `Fuir.`,
                chemin: "95"}
        ]
});

creerEpisode({
    clef: "92",
    titre : `Copiez le contenu de l'ordinateur du club`,
    texte :
    `Si le transfert est assez rapide, c'est sans doute le meilleur moyen d'exploiter les informations par la suite, au calme.

Malheureusement, le disque est énorme et le transfert s'éternise.

Trois agents de sécurité finissent par arriver dans le bureau.

"Rendez-vous", fait l'un deux.`
            ,
            liens: [
                {libelle: `Se rendre.`,
                chemin: "93"},
                {libelle: `Se défendre.`,
                chemin: "94"},
                {libelle: `Fuir.`,
                chemin: "95"}
        ]
});

creerEpisode({
    clef: "100",
    titre : `Consulter l'ordinateur`,
    texte :
    `Vous vous apprétez à brancher le cable de vos lunettes lorsque vous voilà soudain projeté à travers la pièce.

Vous n'avez rien vu venir. Un camouflage ? Non, juste à côté de vous se tient un augmenté, comme vous, mais à une toute autre échelle. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            liens: [
                {libelle: `Noir.`,
                chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "101",
    titre : `Consulter l'ordinateur`,
    texte :
    `Vous ne voulez pas pousser votre chance trop loin. Vous sautez dans le conduit et...

Êtes soudain tiré en arrière et projeté contre le mur.


Vous n'avez rien vu venir. Un camouflage ? Non, juste à côté de l'aération se tient un augmenté, comme vous, mais à une toute autre échelle. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            liens: [
                {libelle: `Noir.`,
                chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "21",
    titre : `Monter l'escalier des loges`,
    texte :
    `L'escalier fait un coude pour déboucher sur des pièces au dessus de la salle principale. Vous passez rapidement la tête dans l'angle : trois personnes (dont deux agents de sécurité) sont en train de discuter. Vous avez eu le temps de voir deux portes et un couloir.
Pas moyen de passer sans vous faire voir.
`
            ,
            liens: [
                {libelle: `Redescendre et chercher un autre passage.`,
                chemin: "redescendreLoges"},
                {libelle: `Essayer de les convaincre de vous laisser passer.`,
                chemin: "126"},
                {libelle: `Passer en force.`,
                chemin: "128"}
        ]
});

creerEpisode({
    clef: "redescendreLoges",
    titre : `Redescendre dans les loges`,
    texte :
    `Vous voilà redescendu dans les loges.`
            ,
    liens: [
            {libelle: `Traverser le couloir et sortir.`,
            chemin: "20"},
            {libelle: `Aller au premier étage.`,
            chemin: "21"},
            {libelle: `Visiter les pièces.`,
            chemin: "22"}
        ]
});

creerEpisode({
    clef: "22",
    titre : `Visiter les pièces`,
    texte :
    `Vous jetez un rapide coup d'oeil derrière les rideaux, rien d'intéressant si ce n'est du matériel son et lumière. Les pièces avec portes sont toutes fermées, excepté les toilettes.`
            ,
            liens: [
                {libelle: `Traverser le couloir et sortir.`,
                chemin: "20"},
                {libelle: `Aller au premier étage.`,
                chemin: "21"},
                {libelle: `Aller aux toilettes.`,
                chemin: "45"}
        ]
});

creerEpisode({
    clef: "51",
    titre : `Vers l'extérieur`,
    texte :
    `Vous rampez vers ce que vous croyez être la sortie.
Et en effet, vous voilà derrière le gros bloc climatiseur accroché à un côté du batiment. A travers les interstices, vous pouvez voir la rue, faiblement éclairée par les lampadaires jaune pisse.

Vous êtes juste au dessus de l'entrée des artistes. Quelques-un sont d'ailleurs en train de griller une cigarette en discutant. Il y a aussi un grand ***type en imperméable qui semble augmenté***, comme vous, portant lui aussi des lunettes noires sans branches, directement fusionnées avec ses tempes. Sa peau blanche semble presque fluorescente.

Peut être n'est-ce qu'une concidence. Peut être n'est-il pas là pour vous. Peut être pas. Et peut être que oui.

Bon. Si vous voulez sortir par là, ***il faudra défoncer le climatiseur***, de toute façon. Ca ne sera pas très discret.`
            ,
            liens: [
                {libelle: `Sortir par là et vous barrer en courant.`,
                chemin: "80"},
                {libelle: `Défoncer le climatiseur mais ne pas sortir.`,
                chemin: "81"},
                {libelle: `Sortir par l'entrée des artistes.`,
                chemin: "82"},
                {libelle: `Faire demi tour complètement et sortir par l'entrée principale.`,
                chemin: "83"}
        ]
});

creerEpisode({
    clef: "65",
    titre : `Sortir d'ici`,
    texte :
    `Vous décidez de ne pas prendre de risques inutiles en visitant le bureau et préférez ramper vers ce que vous croyez être la sortie.
Et en effet, vous voilà derrière le gros bloc climatiseur accroché à un côté du batiment. A travers les interstices, vous pouvez voir la rue, faiblement éclairée par les lampadaires jaune pisse.

Vous êtes juste au dessus de l'entrée des artistes. Quelques-un sont d'ailleurs en train de griller une cigarette en discutant. Il y a aussi un grand ***type en imperméable qui semble augmenté***, comme vous, portant lui aussi des lunettes noires sans branches, directement fusionnées avec ses tempes. Sa peau blanche semble presque fluorescente.

Peut être n'est-ce qu'une concidence. Peut être n'est-il pas là pour vous. Peut être pas. Et peut être que oui.

Bon. Si vous voulez sortir par là, il faudra ***défoncer le climatiseur***, de toute façon. Ca ne sera pas très discret.`
            ,
            liens: [
                {libelle: `Sortir par là et vous barrer en courant.`,
                chemin: "80"},
                {libelle: `Défoncer le climatiseur mais ne pas sortir.`,
                chemin: "81"},
                {libelle: `Sortir par l'entrée des artistes.`,
                chemin: "82"},
                {libelle: `Faire demi tour complètement et sortir par l'entrée principale.`,
                chemin: "83"}
        ]
});

creerEpisode({
    clef: "52",
    titre : `La pièce du premier étage`,
    texte :
    `A travers la grille, vous voyez que conduit débouche dans bureau chic aux tons verts, avec sofa et mini bar. Certainement celui du patron de la boite. Plusieurs tableaux abstraits sont accrochées aux murs.`
            ,
            liens: [
                {libelle: `Vous n'avez rien à faire ici. Vous essayez de quitter le club par le conduit.`,
                chemin: "65"},
                {libelle: `Visitez l'endroit après avoir analysé d'éventuelles défenses.`,
                chemin: "66"}
        ]
});

creerEpisode({
    clef: "66",
    titre : `La pièce du premier étage`,
    texte :
    `Oui, il y a certainement des choses intéressantes ici.

Vous lancez machinalement un scan de la grille : elle est ***protégée par des lasers***, évidemment. Par contre, à première vue, ils semblent être reliés au circuit principal. Il suffirait de ***couper l'électricité*** de la boite ***pour pouvoir passer***.`
            ,
            liens: [
                {libelle: `Aller couper le courant de la boite de nuit.`,
                chemin: "couperCourantNouveau"},
                {libelle: `Passer malgré les lasers, et fouiller la pièce à toute vitesse.`,
                chemin: "68"},
                {libelle: `Trouver une autre entrée.`,
                chemin: "75"},
                {libelle: `Assez perdu de temps, quitter carrément le club.`,
                chemin: "65"},
        ]
});

creerEpisode({
    clef: "couperCourantNouveau",
    titre : `Trouver un moyen de couper le courant`,
    texte :
    `Très bien, mais où se trouve le ***disjoncteur***...? Certainement dans les coulisses. Vous faites demi-tour et arrivez à une intersection.
    
Un conduit mène vers la sortie, vu l'air frais. L'autre retourne vers les toilettes du club. Vous prenez le 3e chemin.
    
Vous débouchez dans les toilettes des artistes. Personne en vue.

Vous sortez dans les loges, à la recherche d'un dijoncteur, que vous finissez par trouver sous l'escalier du fond. Vous ***l'arrachez sans ménagement du mur***.
Noir. Bruits de panique.

Aidé par la vision infrarouge de vos lunettes, vous ***retournez dans les conduits*** aussi vite que possible, remontez, éclatez la grille et vous ***voilà enfin dans le bureau du directeur***.`
            ,
            liens: [
                {libelle: `Fouiller le bureau.`,
                chemin: "fouillerBureauBoisClubCoupureCourant"},
                {libelle: `Fouiller la pièce.`,
                chemin: "fouillerPieceClubCoupureCourant"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "consulterOrdiClubCoupureCourant"},
                {libelle: `Partir.`,
                chemin: "73"},
        ]
});

creerEpisode({
    clef: "fouillerBureauBoisClubCoupureCourant",
    titre : `Fouiller le bureau`,
    texte :
    `Des papiers, des dossiers, du matériel de bureau. Rien d'intéressant.

Soudain, vous remarquez sous le plateau une sorte de renfoncement, avec un joli petit cadeau : un bon vieux ***pistolet*** automatique, en l'occurence un BK13 de Croon, facilement reconnaissable avec sa bande rouge sur le long. C'est pas tout récent, moyennement précis, mais très fiable, avec une excellente cadence de tir et surtout, étant très courant, on trouve ses munitions (0.45 ACP) un peu partout.

Il est chargé à bloc, soit 40 balles. ***Vous l'empochez***, en espérant ne pas avoir à vous en servir, et décidez de...`
            ,
            liens: [
                {libelle: `Fouiller la pièce.`,
                chemin: "fouillerPieceClubCoupureCourant"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "consulterOrdiClubCoupureCourant"},
                {libelle: `Partir.`,
                chemin: "73"},
        ]
        ,commandes: () => {
        ajouterInventaire({clef:"pistoletBK13", nom:"Pistolet BK13", description:"", nombre:1 });
        ajouterInventaire({clef:"ballePistolet", nom:"Balle de pistolet", description:"", nombre:40 });
    }
    ,revisite:"fouillerBureauBoisClubCoupureCourantRevisite"
});

creerEpisode({
    clef: "fouillerBureauBoisClubCoupureCourantRevisite",
    titre : `Fouiller le bureau`,
    texte :
    `Vous avez déjà tout fouillé.`
    ,
            liens: [
                {libelle: `Fouiller la pièce.`,
                chemin: "fouillerPieceClubCoupureCourant"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "consulterOrdiClubCoupureCourant"},
                {libelle: `Partir.`,
                chemin: "73"},
        ]
});

creerEpisode({
    clef: "fouillerPieceClubCoupureCourant",
    titre : `Fouiller la pièce.`,
    texte :
    `Il n'y a pas grand chose à fouiller. Vous retournez les meubles, les plantes, les tableaux... Et tombez sur un coffre fort. Il s'ouvre avec une empreinte digitale... mais l'alimentation est coupée.
`
            ,
            liens: [
                {libelle: `Fouiller le bureau en bois.`,
                chemin: "fouillerBureauBoisClubCoupureCourant"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "consulterOrdiClubCoupureCourant"},
                {libelle: `Essayer de défoncer le coffre.`,
                chemin: "defoncerCoffreCLub"},
                {libelle: `Partir.`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "defoncerCoffreCLub",
    titre : `Tenter de défoncer le coffre`,
    texte :
    `Malgré vos augmentations qui vous donnent une super force, ***vous n'arrivez à rien***.
`
            ,
            liens: [
                {libelle: `Fouiller le bureau en bois.`,
                chemin: "fouillerBureauBoisClubCoupureCourant"},
                {libelle: `Fouiller la pièce.`,
                chemin: "fouillerPieceClubCoupureCourant"},
                {libelle: `Partir.`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "consulterOrdiClubCoupureCourant",
    titre : `Consulter l'ordinateur éteint`,
    texte :
    `Oui, l'ordinateur doit avoir quelques infos intéressantes.

Ca serait une bonne idée de le consulter ***s'il y avait du courant***. Malheureusement, vous venez de le couper.`
            ,
            liens: [
                {libelle: `Fouiller le bureau en bois.`,
                chemin: "fouillerBureauBoisClubCoupureCourant"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "consulterOrdiClubCoupureCourant"},
                {libelle: `Partir.`,
                chemin: "133"}
        ]
});

creerEpisode({
    clef: "68",
    titre : `Passer malgré les lasers`,
    texte :
    `Vous faites sauter la grille d'un coup de talon et entrez. Vous n'entendez aucune alarme, mais nulle doute qu'elle s'est déjà déclenchée et que la sécu converge déjà vers le bureau.

Vous avez le temps pour une action. UNE SEULE action.`
            ,
            liens: [
                {libelle: `Fouiller le bureau.`,
                chemin: "76"},
                {libelle: `Fouiller la pièce.`,
                chemin: "77"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "78"},
                {libelle: `Retourner dans le conduit.`,
                chemin: "73"},
        ]
});

creerEpisode({
    clef: "76",
    titre : `Fouiller le bureau`,
    texte :
    `Vous fouillez à toute vitesse dans les tiroirs : des papiers, des dossiers, du matériel de bureau. Rien d'intéressant. Merde !

Soudain, vous remarquez sous le plateau une sorte de renfoncement, avec un joli petit cadeau : un bon vieux ***pistolet*** automatique, en l'occurence un BK13 de Croon, facilement reconnaissable avec sa bande rouge sur le long. C'est pas tout récent, moyennement précis, mais très fiable, avec une excellente cadence de tir et surtout, étant très courant, on trouve ses munitions (0.45 ACP) un peu partout.

Il est chargé à bloc, soit 40 balles. ***Vous l'empochez***, en espérant ne pas avoir à vous en servir, et décidez de...`
            ,
            liens: [
                {libelle: `Fouiller la pièce.`,
                chemin: "84"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "85"},
                {libelle: `Retourner dans le conduit.`,
                chemin: "73"},
        ],
    commandes: () => {
        ajouterInventaire({clef:"pistoletBK13", nom:"Pistolet BK13", description:"", nombre:1 });
        ajouterInventaire({clef:"ballePistolet", nom:"Balle de pistolet", description:"", nombre:40 });
    },
    revisite:"76Revisite"
});

creerEpisode({
    clef: "76Revisite",
    titre : `Fouiller le bureau`,
    texte :
    `Vous avez déjà tout fouillé.`
            ,
            liens: [
                {libelle: `Fouiller la pièce.`,
                chemin: "84"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "85"},
                {libelle: `Retourner dans le conduit.`,
                chemin: "73"},
        ]
});

creerEpisode({
    clef: "77",
    titre : `Fouiller la pièce`,
    texte :
    `Vous retournez toute la pièce à toute vitesse et finissez par tomber sur un coffre fort caché derrière un tableau.
Vous savez très bien que vous n'aurez le temps de rien faire. Dommage.`
            ,
            liens: [
                {libelle: `Essayer d'ouvrir le coffre.`,
                chemin: "88"},
                {libelle: `Fouiller le bureau.`,
                chemin: "76"},
                {libelle: `Consulter l'ordinateur.`,
                chemin: "85"},
                {libelle: `Retourner dans le conduit.`,
                chemin: "73"},
        ]
});

creerEpisode({
    clef: "88",
    titre : `Essayer d'ouvrir le coffre`,
    texte :
    `Voyons, c'est une serrure à empreinte digitale, vous pouvez essayer de le pirater ou de le forcer ou...
Pas le temps.

Trois agents de sécurité débarquent, armes au poing.

"On ne bouge plus !"
`
            ,
            liens: [
                {libelle: `Se rendre.`,
                chemin: "93"},
                {libelle: `Se defendre.`,
                chemin: "94"},
                {libelle: `Fuir.`,
                chemin: "95"}
        ]
});

creerEpisode({
    clef: "78",
    titre : `Consulter l'ordinateur`,
    texte :
    `Conscient que vous n'avez pas beaucoup de temps devant vous, vous vous attaquez à ce qui vous semble le plus intéressant : l'ordinateur.

L'accès au système d'exploitation (un OS récent... à priori c'est une très bonne machine) est protégée par mot de passe, mais peut être que les données ne sont pas chiffrées. Vous tirez un fin cable du côté gauche de vos lunettes et le branchez. L'ordinateur boote "dans" le système live de vos lunettes et vous pouvez désormais vous promener à loisir sur le disque.
C'est très bien mais vous n'avez certainement ***pas le temps*** de faire grand chose...`
            ,
            liens: [
                {libelle: `Lire les mails.`,
                chemin: "90"},
                {libelle: `Chercher des codes secrets (ou autre données sensibles).`,
                chemin: "91"},
                {libelle: `Télécharger tout le disque.`,
                chemin: "92"},
                {libelle: `Retourner dans le conduit.`,
                chemin: "73"},
        ]
});

creerEpisode({
    clef: "80",
    titre : `Vers l'extérieur`,
    texte :
    `Il vous faut taper quelques secondes, mais vous réussissez finalement à arracher le climatiseur. Vous atterrissez lourdement dans la rue et...
Un coup de pied magistral vous envoie voler contre le mur du club.

C'est le grand albinos en imperméable.
*Il est en effet augmenté*, comme vous, mais ***à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez ***même pas le temps*** de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            liens: [
                {libelle: `Noir`,
                chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "81",
    titre : `Vers l'extérieur`,
    texte :
    `Après quelques secondes, vous parvenez à arracher le climatiseur qui se fracasse dans la rue.

Vous voyez les gens se regrouper autour et regarder dans votre direction. Ils ne peuvent heureusement pas vous voir, car vous êtes dans le noir, mais le type augmenté semble vous avoir vu.

Il se rue dans le club, sans doute va-t-il se mettre à votre poursuite dans les conduits.`
            ,
            liens: [
                {libelle: `Fuir par les conduits.`,
                chemin: "102"},
                {libelle: `Fuir par la rue.`,
                chemin: "103"}
            ]
});

creerEpisode({
    clef: "82",
    titre : `Sortir par la porte de derrière`,
    texte :
    `Vous retournez dans les conduits et prenez celui qui semble descendre vers les loges. Vous voilà dans les toilettes des artistes, plutôt propres et heureusement vides.

Vous sortez et vous retrouvez dans les loges. La porte de sortie est au fond du couloir, à côté d'un escalier menant au premier étage. Un technicien passe devant vous, en vous ignorant. Vous savez cependant que vous ne devriez pas moisir ici.
`
            ,
            liens: [
                {libelle: `Traverser le couloir et sortir.`,
                chemin: "20"},
                {libelle: `Aller au premier étage.`,
                chemin: "21"}
            ]
});

creerEpisode({
    clef: "83",
    titre : `Rebrousser chemin pour sortir par l'entrée principale`,
    texte :
    `Vous reprenez les conduit en sens inverse, débouchez dans des toilettes et vous rendez vers la sortie principale en enlevant la poussière de vos vêtements.

Pas de flic en vue. Et même s'il y en avait en civil, après tout, pourquoi ça tomberait sur vous ?, pensez-vous, en vous dirigeant vers la sortie le plus naturellement possible.

Et la main d'un policier en civil vient s'abattre sur votre épaule.
"Je le tiens.", fait-il.`
            ,
    liens: [
            {libelle: `Lui péter le bras.`,
            chemin: "105"},
            {libelle: `Lui demander ce qu'il veut.`,
            chemin: "106"},
            {libelle: `Fuir vers la sortie.`,
            chemin: "107"},
            {libelle: `Fuir vers l'intérieur du club.`,
            chemin: "108"}
        ]
});

creerEpisode({
    clef: "124",
    titre : `Briser le bras de l'augmenté à la sortie du club`,
    texte :
    `Vous saisissez son bras d'une main et frappez son coude de l'extérieur :
Crack.

Rien de cassé chez lui, mais chez vous non plus, d'après ce qu'il vous semble.
En tout cas, il est aussi costaud que vous, sinon plus.

Vous libérez rapidement votre main pour tenter une autre attaque mais, un flash, un mouvement flou, et...`
            ,
            liens: [
                {libelle: `Noir`,
                chemin: "96"}
        ]
});

creerEpisode({
    clef: "102",
    titre : `Fuir par les conduits`,
    texte :
    `Pensant à juste titre qu'il lui faudra un peu de temps avant de grimper vous rejoindre, vous rampez à toute vitesse vers là où vous êtes entré.
Soudain, le conduit s'effondre et vous chutez lourdement sur le dos.

Juste au dessus de vous se tient l'homme que vous avez aperçu dans la rue tout à l'heure. Il vient de défoncer le plafond.

Il est en effet augmenté, comme vous, mais à une toute autre échelle. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir attaquer. Vous le voyez juste... Disparaitre. Et...`
            ,
            liens: [
                {libelle: `Noir`,
                chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "103",
    titre : `Fuir dans la rue`,
    texte :
    `C'est l'occasion.
Vous atterrissez lourdement dans la rue et courez de toute votre énergie. Vos augmentations font de vous l'un des coureurs les plus rapide du globe. C'est gagné.

Mais... Vous entendez alors des pas à côté. C'est le type.
Il est en effet ***augmenté, comme vous, mais à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même ***pas le temps de le voir*** se déplacer. Vous n'avez aucune chance. Vous le voyez juste... Disparaitre. Et...`
            ,
            liens: [
                {libelle: `Noir`,
                chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "125",
    titre : `Fuir l'augmenté gardant la sortie du club`,
    texte :
    `Vous vous dégagez d'une torsion, lui abandonnant votre manteau , et partez en courant.
Vos augmentations font de vous l'un des coureurs les plus rapide du globe. C'est gagné.

Mais... Vous entendez alors des pas à côté, un bruit de vent. C'est le type.
Vous pouvez distinguez son corps un court instant : il est en effet ***augmenté, comme vous, mais à une toute autre échelle***. Son corps noueux est d'un noir d'ébène, il n'a quasiment plus rien d'humain, on croirait voir une sorte d'insecte.

Vous n'avez ***même pas le temps de le voir*** se déplacer. Vous n'avez aucune chance. Vous le voyez juste... Disparaitre. Et...`
            ,
            liens: [
                {libelle: `Noir`,
                chemin: "96"}
        ]
        ,commandes: () => {
            modifierVariable("augmenteClubVu", true);
        }
});

creerEpisode({
    clef: "96",
    titre : `Lumière`,
    texte :
    `
Un type avec un masque de chirugien se penche sur vous. Vous êtes allongé dans une salle d'opération.

"Bon retour à la maison. J'ai l'honneur de vous annoncer que vous êtes ***de nouveau actif***.
-J'ai démissionné, parvenez-vous à gromeler.
-Si vous aviez vraiment démissionné, ça serait difficile d'avoir cette conversation, car vous ne seriez plus qu'un cerveau dans un bocal."
Très juste. On ne laissait pas les gens ***partir*** comme ça avec des implants qui ***coutent aussi cher qu'un avion de combat***. Mais au bout de quelques mois, vous aviez presque fini par y croire.

"J'ai démissionné, répétez-vous.
-C'est pas à moi qu'il faut dire ça de toute façon, fait-il en détachant divers cables le long de vos bras, Alice vous attend. Vous pouvez vous lever."

Vous vous asseyez sur le lit. Vous êtes dans une salle d'opération ou, pour être plus précis, d'implantation. Pareille mais bourrée d'électronique. Deux infirmiers s'occupent de ranger le matériel qu'ils ont utilisé pour faire dieu seul sait quoi sur vous. Le médecin enlève son masque et dévoile un visage fatigué qui contraste bizarrement avec sa voix gaie.

"Il y a eu du changement ici. Alice a son bureau au troisième étage. Vous y arriverez tout seul ?"
Vous lui assurez que oui, et que non, vous n'allez pas faire de bêtises.

Vous sortez de la salle et débouchez au milieu d'un court couloir plutôt chic, rappellant d'avantage un hôtel qu'un hôpital. Vers la gauche se trouve l'ascenseur. Une affichette vous indique que vous êtes au deuxième étage.
`
,liens: [
    {libelle: `Aller vers l'ascenseur.`,
    chemin: "115"},
    {libelle: `Visiter les autres pièces du couloir.`,
    chemin: "116"},
    {libelle: `Retourner dans la salle d'implantation.`,
    chemin: "117"},
    {libelle: `Essayer de vous enfuir.`,
    chemin: "118"}
]
});

creerEpisode({ //TODO conditionné la vue de l'augmenté au club ou non
    clef: "115",
    titre : `Prendre l'ascenseur`,
    texte : () =>
    `
    Vous appelez l'ascenseur et appuyez sur le chiffre 3.

    La cabine est plutôt clean elle aussi. De la musique, des fausses plantes vertes. Rien à voir avec les préfabriqués et les entrepots reconvertis où vous aviez l'habitude de travailler.
    
    Vous voilà au troisième étage. Le bureau d'Alice est juste en face, sa porte vitrée ouverte vous invite à rentrer. ***Le gros Alice*** est derrière son bureau en train de lire un dossier. Il n'a pas changé. Son visage poupin chauve et imberbe restera certainement le même jusqu'à sa mort. A côté de lui se tient ***un énorme augmenté*** en train de vous regarder.${variable("insertion")} Il vous fait un signe de sa tête blanche presque aveuglante. Alice se réveille.
    
    "Ah ! Te voilà ! Entre, entre." Il est tellement content de vous voir qu'il en manque de tomber de son fauteil à force de gesticulations.
    
    "J'ai démissionné, faites-vous, en détachant bien chaque syllabe.
    -Haha, oui ! Et ça t'a pas réussi. Tu es obligé de te camer pour supprimer les erreurs de calibrations. Tu pirates des portes monnaies électroniques pour survivre. Tu as besoin de nous et ça tombe bien parce qu'on a encore besoin de toi.
    -Je suis trop vieux. Vous avez besoin de quoi, d'un cobaye ?
    -Oh non, t'es pas trop vieux, au contraire t'es par-fait. Des comme toi yen a plus beaucoup tu sais, donc c'est dommage que tu gâches ton talent. Si tu reviens, non seulement on te fera la maintenance régulière dont je suis sûr que tu rêves toutes les nuits, mais en plus, on pourra te donner quelques bonus. Tu as vu Max, là ?" Il désigne l'augmenté au visage cadavérique. Il porte un long manteau donc c'est un peu difficile à affirmer, mais son corps semble entièrement mécanique jusqu'en dessous du menton. Son crane blanc ressemble à une ampoule qu'on aurait vissé à la va vite sur son corps.
    
    "Il me fait peur, dites-vous.
    -Désolé.", répond-il d'une petite voix en baissant les yeux.
    
    Alice reprend sans vous prêter attention.
    "On travaille surtout avec la police ou l'armée, comme avant. Alors, qu'est ce que tu en dis ?"
    
    Vous hésitez. C'est vrai que ces derniers mois n'ont pas été particulièrement brillants et Alice est loin de se douter à quel point. Si vous continuez seul, vous savez très bien que vous finirez dans une poubelle ou alors dispersé entre les marchés noirs de Chine et des USA.
    
    C'est peut être l'heure de sonner la fin de la petite pause et de se remettre dans le circuit.
`
,liens: [
    {libelle: `Accepter.`,
    chemin: "119"},
    {libelle: `Demander des détails.`,
    chemin: "120"},
    {libelle: `Retourner dans la salle d'implantation.`,
    chemin: "117"},
    {libelle: `Demander du temps pour réfléchir.`,
    chemin: "121"}
]
,commandes: () => {
    if (variable("augmenteClubVu")) {
        variable("insertion", ` Vous vous souvenez l'avoir vu au club.`);
    }
}
});

creerEpisode({
    clef: "116",
    titre : `Visiter les autres pièces du deuxième étage`,
    texte :
    `A côté de la salle d'implantation se trouve une pièce fermée à clef : vous pouvez voir à travers l'étroite vitre que du matériel médical y est stocké. La dernière porte le long de ce mur mène aux toilettes.

    Sur le mur en face, deux autres portes : l'une, vitrée, est celle d'un bureau. Sur l'autre est indiqué "escaliers".
    <img src="data/img/planEtageSalleImplantation.png">
`
,liens: [
    {libelle: `Aller vers l'ascenseur.`,
    chemin: "115"},
    {libelle: `Retourner dans la salle d'implantation.`,
    chemin: "117"},
    {libelle: `Essayer de vous enfuir.`,
    chemin: "118"},
    {libelle: `Entrer dans le bureau.`,
    chemin: "140"},
    {libelle: `Aller aux toilettes.`,
    chemin: "141"},
    {libelle: `Jeter un oeil au matériel médical.`,
    chemin: "163"},
    {libelle: `Prendre la porte menant aux escaliers.`,
    chemin: "142"}

]
});

creerEpisode({
    clef: "117",
    titre : `Lumière`,
    texte :
    `Ils sont en train de ranger leur matériel. Le médecin lève les sourcils en vous voyant.

    "Oui ? Un problème ?"
    `
,liens: [
    {libelle: `"Qu'est-ce que vous m'avez fait, au juste ?"`,
    chemin: "143"},
    {libelle: `"Pouvez-vous m'améliorer ?"`,
    chemin: "144"},
    {libelle: `"Non, rien."`,
    chemin: "145"}
]
});

creerEpisode({
    clef: "118",
    titre : `Essayer de vous enfuir ?`,
    texte :
    `C'est ridicule. Vous n'avez rien à fuir, Alice est une vieille connaissance.
    Mieux vaut discuter pour savoir ce qu'il veut avant de prendre de telles décisions.
    
    Et puis, ça fait longtemps que vous n'avez pas vu son visage bouffi.`
,liens: [
    {libelle: `Aller vers l'ascenseur.`,
    chemin: "115"},
    {libelle: `Visiter les autres pièces du couloir.`,
    chemin: "116"},
    {libelle: `Retourner dans la salle d'implantation.`,
    chemin: "117"}
]
});

creerEpisode({
    clef: "119",
    titre : `Lumière`,
    texte :
    `"C'est d'accord."

C'est pas comme si vous avez le choix, de toute façon. La dernière mission que vous aviez effectué pour Premanod vous a laissé un goût amer dans la bouche, mais après tout, ils n'y étaient pour rien. Peut être que vous pourrez gérer les choses différemment cette fois.

"Super ! Content que tu sois de retour parmi nous. Par contre il va me falloir un peu de temps pour les conneries administratives. Je te recontacte dans quelques jours pour signer le contrat, d'accord ?"

Sur la demande d'Alice, vous ré-autorisez son accès à votre module de communication. L'augmenté vous raccompagne vers l'ascenseur.

`
,liens: [
    {libelle: `Vous arrivez au rez de chaussé..`,
    chemin: "152"}
]
});

creerEpisode({
    clef: "120",
    titre : `Demander des détails sur l'offre d'Alice`,
    texte :
    `Les conditions n'ont pas beaucoup changées depuis que vous êtes parti.
    Premanod vous fournit un appartement coquet à deux pas d'ici, un entretien et des upgrades du corps ainsi qu'un salaire dans la moyenne.
    Obligation d'être d'astreinte en permanence : vous devez toujours être près à partir en mission. Vous êtes néanmoins libre de les exécuter selon vos termes ou même carrément de les refuser. Un comité décidera alors si votre attitude mérite des sanctions ou non.
    
    Quand aux missions elles mêmes, pas de changement non plus. Premanod propose aux états des groupes tactiques d'interventions lors de situation de siège, de prise d'otage et de missions à hauts risques.
    
    "Tu ne retrouveras pas tout de suite ta place dans la hierachie, évidemment, mais ça te reviendra rapidement. Ton talent nous manque. Tu nous manques."`
,liens: [
    {libelle: `Accepter.`,
    chemin: "119"},
    {libelle: `Demander du temps pour réfléchir.`,
    chemin: "121"}
]
});

creerEpisode({
    clef: "121",
    titre : `Demander à réfléchir sur la proposition`,
    texte :
    `"J'ai besoin de temps.
    -Pas de souci. Tu sais quoi, je dois préparer toute la merde administrative de toute façon. On se revoit dans quelques jours, et là je te demanderais ta décision. Ok ?"
    
    Vous acceptez. Vous n'avez rien à perdre.
    
    La dernière mission que vous aviez effectué pour Premanod vous a laissé un goût amer dans la bouche, mais après tout, ils n'y étaient pour rien. Peut être que vous pourrez gérer les choses différemment cette fois.
    
    Sur la demande d'Alice, vous rétablissez son accès à votre module de communication. L'augmenté vous raccompagne vers l'ascenseur.`
,liens: [
    {libelle: `Vous arrivez au rez de chaussé.`,
    chemin: "152"}
]
});

creerEpisode({
    clef: "140",
    titre : `Aller dans le bureau en face de la salle d'implantation`,
    texte :
    `C'est une petite pièce, avec une table au centre entourée de petites armoires métalliques à tiroir. Les meubles sont recouverts de tas de dossiers bourrés à craquer, organisés sans logique apparente. Un ordinateur attend patiemment que quelqu'un vienne le réveiller.

    Quoi que vous fassiez, faites-le vite : les médecins et les infirmiers vont bien finir par sortir de la salle d'implantation un jour et ils risquent de moyennement apprécier qu'on fouille leur bureau.`
,liens: [
    {libelle: `Fouiller la pièce.`,
    chemin: "146"},
    {libelle: `Fouiller l'ordinateur.`,
    chemin: "147"},
    {libelle: `Sortir du bureau.`,
    chemin: "148"}
]
});

creerEpisode({
    clef: "146",
    titre : `Fouiller le bureau`,
    texte :
    `Vous parcourez rapidement la pièce à la recherche de quelque chose d'intéressant. Rien de particulier. Des bons de livraisons, des rapports, des vieilles factures, des contrats, des décharges...`
,liens: [
    {libelle: `Consulter l'ordinateur.`,
    chemin: "147"},
    {libelle: `Sortir du bureau.`,
    chemin: "148"}
]
});

creerEpisode({
    clef: "147",
    titre : `Consulter l'ordinateur`,
    texte :
    `L'ordinateur était en veille. Il vous demande un mot de passe.
    Vous tapez celui qui est inscrit sur le post-it collé sur l'écran et accédez au système.
    
    Le disque est quasi-vide, on pourrait penser que l'OS vient tout juste d'être installé. Seule une icône DOSSIERS MED sur le bureau indique le contraire.
    `
,liens: [
    {libelle: `Consulter les dossiers médicaux.`,
    chemin: "149"},
    {libelle: `Lire les mails.`,
    chemin: "150"},
    {libelle: `Fouiller la pièce.`,
    chemin: "146"},
    {libelle: `Sortir du bureau.`,
    chemin: "148"}
]
});

creerEpisode({
    clef: "149",
    titre : `Ouvrir DOSSIER MED`,
    texte :
    `L'icône lance une application qui se connecte à priori à une base de donnée distante. Elle vous demande un mot de passe.

    Le mot de passe du post-it n'est pas le bon. Impossible d'accéder à la base de donnée.
    
    Après quelques manipulations infructueuses, vous arrivez néanmoins à retrouver la trace résiduelle des derniers dossiers consultés sur le disque. Il y en a quatre de lisibles.
    
    ========================
    B. Rimmi A.K.A. "Ditto"
    
    214 SCCP DONT RESUME :
    -SQLTTE RENF CARBO. ALLG
    -16 ENDO-ASSIST (VTS LIN FACTEUR 3.8, VTS CRS FACTEUR 2.7) BAS DU CORPS + COLONNE ET NUQUE
    -6 LAMES RETRACT. BRAS
    -OCULAIRE MAXI NORME 12b
    
    Stress test à mettre à jour après avoir vu les nouvelles vitesses.
    
    ========================
    G. Schesno A.K.A. "REX"
    112 SCCP DONT RESUME :
    -SQLTTE RENF CARBO. LRD A TR LRD (SUR CRANE)
    -4 CROCS MAINS AURICULAIRE+ANNULAIRE (sacrifiés)
    -BASSIN CMPLT TYPE WOLF
    -OCULAIRE MAXI NORME 12b
    -AUDITIF NORME 17 BASSE
    
    Psychopatho totémique ? A faire suivre par personnel approprié.
    
    ========================
    J. LIBRE A.K.A. "TSUKI"
    182 SCCP DONT RESUME :
    -SQLTTE RENF CARBO. LRD A TR LRD (SUR CRANE)
    -12 PORTS HAUTE VITESSE NORME 812b SUR COLONNE+ESPACE FIXATION
    -OCULAIRE MAXI NORME 12b
    -2 CONTROLEURS HARDWARE AUTO (à noter !!!)
    
    Semble passer une majeure partie de son temps déconnectée de son corps ?
    
    ========================
    
    Votre nom est inscrit à la dernière ligne. Vous êtes sans doute le dernier fichier à avoir été consulté.
    70 SCCP DONT RESUME :
    -SQLTTE RENF CARBO BASE
    -OCULAIRE GREFFE (MODULE DVR CONNECTIQUE 72)
    -12 ENDO-ASSIST (BASE ARTI)
    
    Signes de vitro + erreurs de calibrations critiques. Maintenance & rapatriment à faire en urgence.
    ========================
    
    Rien de plus.`
,liens: [
    {libelle: `Lire les mails.`,
    chemin: "150"},
    {libelle: `Fouiller la pièce.`,
    chemin: "146"},
    {libelle: `Sortir du bureau.`,
    chemin: "148"}
]
});

creerEpisode({
    clef: "150",
    titre : `Lire les mails de l'ordinateur du bureau en face de la salle d'implantation`,
    texte :
    `Le logiciel de messagerie fonctionne avec deux adresses. Vous arrivez à cracker l'une d'elle, qui semble être une adresse personnelle, mais pas la seconde, la professionelle.
    Vous vous résignez et consultez donc les mails personnels.
    
    --Info Victis Le Cube : Votre Compte--
    From:infocompte@victis.com
    to:g.patou134@Econtel.com
    Victis Le Cube vous informe. Votre forfait arrivera à expiration le 12.06 et sera automatiquement renouvelé sauf refus de votre part (voir ci-dessous).
    (Vous pouvez refuser simplement en cliquant ici, puis vous rendant dans la rubrique "mon compte", sous rubrique "gérer mon abonnement", en choisissant votre abonnement, en cliquant sur "gérer", puis "actions client", puis sélectionnant "renouvellement automatique" dans le menu déroulant, puis "prochain", et enfin, en cliquant sur "ne pas renouveler".
    Pensez à autoriser les pop up pour voir le message de confirmation, saisissez alors vos infos clients (n° client, montant et code ICT présent sur les trois dernières factures). Lorsque le message "non renouvellement automatique" s'affiche à la place de "renouvellement automatique", vous avez correctement configuré le panneau d'administration client. Vous devez maintenant sauvegarder les modifications. Rendez-vous dans l'onglet "quitter", puis cochez "enregistrer les modifications effectuées" et sur le bouton "quitter". La liste des modifications apportées à l'espace client s'affiche alors pour vous permettre de donner votre accord. Vous pouvez "quitter" ou "fermer" pour perdre les modifications effectuées.)
    Merci de votre confiance.
    Victis. Le Cube.
    
    --RE:RE:RE:RE:RE:RE:RE:RE:RE:Pieces pour le dossier maison ! URGENT--
    From:leati.patou134@Econtel.com
    to:g.patou134@Econtel.com
    et celui-là ? il joue avec une pelote, trop mignon lol
    http://www.youlube.com/v/?2048CUYT24C
    
    --BALAD.COM : MP d'un(e) BALADEUR/EUSE--
    From:mp@BALAD.com
    to:g.patou134@Econtel.com
    Vous avez reçu un message privé sur BALAD.COM !
    Connectez vous pour le lire !
    Ce mail est envoyé automatiquement !
    Inutile de répondre !
    A bientôt sur BALAD.COM !
    
    --je fais la 1ere partie à l'anguille frite--
    From:thibault.patou@mymail.com
    to:g.patou134@Econtel.com
    Yo ya un concert gratos a l'anguille frite vendredi prochain et c nous qui jouon en premiere partie bon te sens pas obligé de venir mais maman vient et elle m'a dit de te rapeler car tu voulais voir l'autre jour
    voir le site : anguillefrite.com/progra
    ya marqué ke c a 21h ke sa commence mais bon ca va etre genre 22h en fait voir + donc si t'es coince un peu au boulot pas de bile lol
    je te force pas mais c'est cool si tu viens quand meme :)`
,liens: [
    {libelle: `Consulter les dossiers médicaux.`,
    chemin: "149"},
    {libelle: `Lire les mails.`,
    chemin: "150"},
    {libelle: `Fouiller la pièce.`,
    chemin: "146"},
    {libelle: `Sortir du bureau.`,
    chemin: "148"}
]
});

creerEpisode({
    clef: "143",
    titre : `Demander au médecin ce qu'il vous a fait`,
    texte :
    `"Eh bien, juste une petite maintenance. Vous savez, vous devriez la faire une fois par semaine au moins. Ca faisait longtemps, n'est-ce pas ?
    -Presque deux mois, avouez-vous.
    -Oh ? A ce point ?"
    Il prend quelques instants pour réfléchir.
    
    "Ca n'a pas dû être facile. Pas trop de tremblements ?
    -Avec les drogues, ça allait.
    -Hmm hmm. Vous devriez faire un peu plus attention. Vous avez eu de la chance que la compagnie s'intéresse de nouveau à vous.
    -Si vous le dites..."`
,liens: [
    {libelle: `"Pouvez-vous m'améliorer ?"`,
    chemin: "144"},
    {libelle: `"Je vais y aller..."`,
    chemin: "145"}
]
});

creerEpisode({
    clef: "144",
    titre : `Demander au médecin s'il peut vous améliorer.`,
    texte :
    `Il secoue la tête.
    "Pas pour le moment. Revenez après avoir vu Alice et on en reparle, c'est d'accord ?"`
,liens: [
    {libelle: `"D'accord. J'y vais."`,
    chemin: "145"},
    {libelle: `"Que m'avez-vous fait, au fait ?"`,
    chemin: "143"}
]
});

creerEpisode({
    clef: "145",
    titre : `Dans le couloir du deuxième étage`,
    texte :
    `Vous voilà dans le couloir du deuxième étage.
    En face, l'ascenseur menant à Alice, qui vous attend.`
,liens: [
    {libelle: `Prendre l'ascenseur.`,
    chemin: "115"},
    {libelle: `Visiter les autres pièces du couloir.`,
    chemin: "116"},
    {libelle: `Essayer de vous enfuir.`,
    chemin: "118"}
]
});

creerEpisode({
    clef: "148",
    titre : `Retourner dans le couloir du deuxième étage`,
    texte :
    `Vous revoilà dans le couloir chic aux tons bleus.`
,liens: [
    {libelle: `
    Aller vers l'ascenseur où Alice vous attend.`,
    chemin: "115"},
    {libelle: `Visiter les autres pièces du couloir.`,
    chemin: "116"},
    {libelle: `Retourner dans la salle d'implantation.`,
    chemin: "117"},
    {libelle: `Essayer de vous enfuir.`,
    chemin: "118"}
]
});

creerEpisode({
    clef: "141",
    titre : `Dans les toilettes du deuxième étage`,
    texte :
    `Deux lavabos et autant de cabines. Pas de bouche d'aération.

    Vous en profitez pour vous passer le visage sous l'eau. Quelle sale tête vous avez. Certainement en état de manque. La peau synthétique commence à se craqueler par endroit, aux tempes autour des implantations des connectiques des lunettes noires.
    Vous éteignez le robinet. L'eau sur vos mains était-elle chaude, ou froide ? Vos capteurs n'ont même pas pu vous le dire. Vos doigts sont un petit miracle d'ingénérie robotique, répondant parfaitement à chacune de vos solicitation, aussi bien pour donner un coup qu'une caresse. Mais vous sentez les articulations frotter. La peau s'écaille sur le dessous des pouces. La couleur de la chair n'est plus aussi uniforme qu'autrefois.
    
    Finalement, c'est une forme de vieillesse, pensez-vous, en retournant dans le couloir.
    
    `
,liens: [
    {libelle: `
    Aller vers l'ascenseur où Alice vous attend.`,
    chemin: "115"},
    {libelle: `Visiter les autres pièces du couloir.`,
    chemin: "116"},
    {libelle: `Retourner dans la salle d'implantation.`,
    chemin: "117"},
    {libelle: `Essayer de vous enfuir.`,
    chemin: "118"}
]
});

creerEpisode({
    clef: "163",
    titre : `Dans les toilettes du deuxième étage`,
    texte :
    `Le stock est fermé par une solide porte de métal. Un étroit panneau de verre blindé vous permet de voir le matériel médical stocké dans la pièce.

    Vous savez déjà que vous n'arriverez à rien sans matériel. Impossible de briser cette porte, même avec vos augmentations.
    
    `
,liens: [
    {libelle: `Visiter les autres pièces du couloir.`,
    chemin: "116"}
]
});