setGameTitle("cyberpunk");

episode({
    key: "intro",
    title: `Introduction`,
    text:
    `<h2>2087.</h2>
    <img src="data/img/perso.png" class="imgDansTexte">
    VOUS êtes ***Aiden Shaw***, 34 ans.

    Ce fut à 19 ans, après des années de déscolarisation, que vous avez rejoint l'armée par dépit. Votre parcours y fut (à votre grande surprise) brillant. Mais, dégouté de l'institution militaire, vous la quittez 6 ans plus tard, non sans avoir reçu vos premiers implants.

    A 30 ans, vous êtes recruté par la branche "sécurité privée" de la société de biotechnologie Premanod. La dernière mission chez eux vous a laissé un goût particulièrement amer au point d'abandonner votre poste.

    Depuis quelques mois, vous errez, sans but, votre corps charcuté pour faire la guerre hurlant douloureusement son besoin de maintenance.

    Vos besoins croissants en drogues pour lutter contre les tremblement liées aux désynchronisations vous ont mené ***dans cette boite de nuit***...
            `,
    links: [
            {label: `Commencez votre aventure.`,
            path: "intro2"}
        ]
});

episode({
    key: "intro2",
    title: `Transaction dans le club`,
    text:
    `La piste de danse d'une boîte de nuit. Meilleur endroit pour faire une transaction discrète : là où on n'arrive même pas à entendre quelqu'un nous criant dans l'oreille.

    "COMBIEN ???, hurlez-vous encore une fois.
    -NEUF CENTS !"

    Merde. Vous aviez bien compris, malgré la musique assourdissante.  C'est cher mais vous avez absolument besoin de ces médicaments. Vous sortez trois billets que votre contact (au sexe indéterminé) s'empresse d'empocher avec un grand sourire.

    "TU LE REGRETTERAS PAS !" vous hurle-t-il à l'oreille en vous donnant ***trois gélules*** avant de disparaitre dans la foule.

    Il va falloir que vous disparaissiez vous aussi. Un ***signal de notification*** s'affiche soudain dans vos lunettes, émit par l'application CopCast.`
            ,
    links: [
            {label: `Consulter la notification.`,
            path: "consulterNotifClub"},
            {label: `Ignorer la notification.`,
            path: "ignorerNotifClub"}
        ],
    image:"dancefloor1.gif",
    commands: () => {
		giveSilentlyToPlayer({key:"credits", name:"Crédits", description:"De l'argent.", amount:2000});
		giveToPlayer({key:"credits", name:"Crédits", description:"De l'argent.", amount:-900});
        giveToPlayer({key:"SMX", name:"Gélules de SMX", description:"Relaxant utilisé de façon festive ou par les implantés pour limiter les tremblements.", amount:3});
    }
});

episode({
    key: "consulterNotifClub",
    title: `Consulter la notif CopCast`,
    text:
    `L'user Hyubriss a signalé ***trois flics*** du côté de la porte d'entrée. Son info a été confirmée par deux autres personnes.
    C'est toujours bon à savoir. Même s'il y a pas de raison particulière que ça tombe sur vous, il vaut mieux peut être ***ne pas donner*** aux poulets ***l'occasion de trouver les gélules*** dans votre manteau.`
            ,
    links: [
            {label: `Aller vers les loges pour trouver la porte de derrière.`,
            path: "4"},
            {label: `Aller se planquer aux toilettes.`,
            path: "5"},
            {label: `Rester au milieu de la foule de clubbers et attendre que la police parte.`,
            path: "6"},
            {label: `Au culot, sortir par l'entrée principale.`,
            path: "7"}
        ]
    ,image:"dancefloor1.gif",
});

episode({
    key: "5",
    title: `Les toilettes du club`,
    text:
    `
    <img src="data/img/toilettesPubliquesClub.jpg" class="imgDansTexte">
    Vous coupez immédiatement vos récepteurs olfactifs en entrant. L'endroit est dégueulasse, en proie à une guerre de territoire farouche entre les flaques de vomi et celles de pisse.

Vous remarquez une ***trappe d'aération au dessus d'une cabine***, fermée.`
            ,
    links: [
            {label: `Emprunter le conduit d'aération de la cabine fermée.`,
            path: "12"},
            {label: `Sortir, aller vers les loges pour trouver la porte de derrière.`,
            path: "4"},
            {label: `Rester au milieu de la foule de clubbers et attendre que la police parte.`,
            path: "6"},
            {label: `Au culot, sortir par l'entrée principale.`,
            path: "7"}
        ]
    ,image:"toilettesPubliquesClub.jpg"
});

episode({
    key: "6",
    title: `♪♩♫♬♬♫♬♪`,
    text:
    `Vous patientez quelques instants au milieu des clubbers, des spots multicolores et de la musique abrutissante.

Vous finissez par remarquer deux personnes, habillées normalement, avancer dans la salle. C'est précisément être "habillé normalement" qui les trahit. Pas de cuir, pas de mini shorts, les cheveux coupées courts sans pointes de gel dans tous les sens. C'est bien ***des flics***, pas de doute. ***S'ils vous choppent avec ces gélules***, c'est fini pour vous.
`
            ,
    links: [
            {label: `Aller vers les loges pour trouver la porte de derrière.`,
            path: "4"},
            {label: `Aller se planquer aux toilettes.`,
            path: "5"},
            {label: `Contourner les flics, et sortir par l'entrée principale.`,
            path: "7"},
            {label: `Je crois à mon plan. Je continue d'attendre ici.`,
            path: "continuerDAttendreClub"}
        ]
    ,image:"dancefloor1.gif",
});

episode({
    key: "continuerDAttendreClub",
    title: `Continuer d'attendre`,
    text:
    `Vous vous faites tout petit dans la foule, observant les flics au loin.
Soudain, ils se dirigent droit sur vous. ***Vous êtes repéré***, ça ne fait aucun doute.`
            ,
    links: [
            {label: `Aller vers les loges pour trouver la porte de derrière.`,
            path: "4"},
            {label: `Aller se planquer aux toilettes.`,
            path: "planquerApresAttente"},
            {label: `Contourner les flics, et sortir par l'entrée principale.`,
            path: "7"},
            {label: `Je continue d'attendre, j'ai dit !`,
            path: "continuerDAttendreEncoreClub"}
        ]
    ,image:"dancefloor1.gif",
});

episode({
    key: "planquerApresAttente",
    title: `Se planquer aux toilettes`,
    text:
    `Vous vous réfugiez dans les toilettes du club. Vous voyez un ***conduit d'aération*** qui vous permettrait de fuir, mais pas le temps : ***3 policiers sont rentrés*** juste derrière vous.
    
    "Restez calme, fait l'un d'eux, on veut juste vous parler."`
            ,
            links: [
            {label: `Vous rendre.`,
            path: "seRendreFlicsToilettes"},
            {label: `Les neutraliser.`,
            path: "attaquerFlicsToilettes"},
            {label: `Prendre un otage.`,
            path: "prendreOtageFlicToilettes"},
            {label: `Fuir.`,
            path: "FuirFlicsToilettes"}
        ]
        ,image:"toilettesPubliquesClub.jpg"
});

episode({
    key: "FuirFlicsToilettes",
    title: `Fuir les 3 policiers`,
    text:
    `Soudainement, vous vous élancez vers...
Nulle part. Deux balles viennent se loger dans vos genoux.

Dommage. Dans ces toilettes vides, le policier n'a pas hésité à utiliser son arme. Il s'approche de vous, s'agenouille et...
`            ,
    links: [
            {label: `Noir.`,
            path: "96"}
        ]
    ,image:"toilettesPubliquesClub.jpg"
});

episode({
    key: "seRendreFlicsToilettes",
    title: `Se rendre aux policiers dans les toilettes`,
    text:
    `Vous levez les mains et dites : "Mais bien sûr, pas de problème."
    
    Un policier vient se placer derrière vous, et commence à dire quelque chose mais vous ne...`
            ,
            links: [
            {label: `Noir.`,
            path: "96"}
        ]
    ,image:"toilettesPubliquesClub.jpg"
});

episode({
    key: "attaquerFlicsToilettes",
    title: `Combattre les policiers dans les toilettes`,
    text:
    `Trois contre un. Mais vous êtes augmenté, et en plus l'espace est exigu. C'est jouable.
    
    Vous ***écrasez la tête*** du premier contre le mur de la main droite, tandis que ***vous mettez KO le deuxième*** de votre coude gauche. Le troisième vous vise mais vous ne ne lui laissez pas le temps de tirer.
    
    ***Les trois sont à terre, inconscients.*** Bon travail, mais les renforts risque d'arriver vite.`
            ,
            links: [
            {label: `Sortir des toilettes.`,
            path: "sortirFlicsToilettes"},
            {label: `Fuir dans le conduit d'aération.`,
            path: "FuirFlicsToilettesConduit"}
        ]
    ,image:"toilettesPubliquesClub.jpg"
});

episode({
    key: "FuirFlicsToilettesConduit",
    title: `Fuir dans le conduit`,
    text:
    `Vous fuyez dans le conduit. Juste à temps, car une fois à l'intérieur vous entendez ***la porte s'ouvrir*** et des bruits d'articulation mécanique. ***Un augmenté, certainement, ***qui vient ***d'arriver en renfort***.
    Le conduit est très étroit, mais vous avez vu pire. Il fait un angle et monte au plafond. Vous vous tortillez dans le boyau métallique pour monter, en espérant ne pas tout casser et arrivez enfin en haut. ***Le chemin se divise*** en trois.`

            ,
            links: [
            {label: `Tout droit, vous sentez un flux d'air. Ca doit certainement mener à l'extérieur.`,
            path: "exterieurApresFuitePoliciersToilettes"},
            {label: `Il continue également à votre gauche.`,
            path: "interceptionParAugmente"},
            {label: `A droite, le conduit semble redescendre.`,
            path: "interceptionParAugmente"}
        ]
    ,image:"toilettesPubliquesClub.jpg"
});

episode({
    key: "exterieurApresFuitePoliciersToilettes",
    title: `Fuir dans le conduit`,
    text:
    `Effectivement, le conduit mène à l'extérieur, mais un climatiseur vous barre la route. Vous l'arrachez en quelques coups de pied et aterrissez lourdement dans la rue derrière le club.
    
    Vous vous enfuyez en courant, sans demander votre reste, et retournez à votre planque.

    Bravo, vous évitez ainsi de travailler de nouveau pour Premanod. Vous réussissez à quitter le pays et trouvez un poste de mercenaire. Mais ceci est une autre histoire...

    ***FIN***
    `
    ,image:""
});

episode({
    key: "interceptionParAugmente",
    title: `Fuir par les conduits`,
    text:
    `Vous rampez sans trop savoir où aller.
Soudain, le conduit s'effondre et vous chutez lourdement sur le dos.

Juste au dessus de vous se tient ***un augmenté***, comme vous, mais ***à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente. Il vient de défoncer le plafond.

Vous n'avez même pas le temps de le voir attaquer. Vous le voyez juste... Disparaitre. Et...`
            ,
            links: [
                {label: `Noir`,
                path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
        ,image:"aerationclub.gif"
});

episode({
    key: "sortirFlicsToilettes",
    title: `Sortir des toilettes après avoir neutralisé les policiers`,
    text:
    `Vous ouvrez la porte et tombez nez à nez avec un ***grand type en imperméable*** qui semble augmenté, comme vous, portant lui aussi des lunettes noires. Sa peau blanche semble presque fluorescente.

    Les renforts, cest LUI.

    Vous n'avez rien le temps de voir, si ce n'est un flash, un mouvement flou, et...
    `
    ,
            links: [
                {label: `Noir`,
                path: "96"}
        ]
    ,image:"dancefloor1.gif",
});

episode({
    key: "prendreOtageFlicToilettes",
    title: `Prendre un policier en otage`,
    text:
    `D'un geste rapide, vous faites une clef de bras et saisissez un policier par le cou.
    "Laissez-moi partir sinon je le tue.", dites-vous.

    "On veut juste parler ! Déconne pas !", répond l'un d'eux.

    Sans cesser de les fixer, vous reculez vers la sortie avec votre otage, lorsque vous sentez un mouvement dans votre dos et...
    `
    ,
    links: [
                {label: `Noir`,
                path: "96"}
        ]
        ,image:"toilettesPubliquesClub.jpg"
});

episode({
    key: "continuerDAttendreEncoreClub",
    title: `Continuer d'attendre encore`,
    text:
    `Vous êtes maintenant encerclé par quatre policiers. "HEP !", crie l'un deux.`
            ,
            links: [
            {label: `Vous rendre.`,
            path: "112"},
            {label: `Fuir coûte que coûte.`,
            path: "113"},
            {label: `Prendre un otage.`,
            path: "114"}
        ]
    ,image:"dancefloor1.gif"
});

episode({
    key: "7",
    title: `Sortir par l'entrée principale du club`,
    text:
    `Vous décidez de sortir le plus vite et le plus simplement possible, d'autant que la musique et les spots multicolores commencent à vous donner mal à la tête.
Vous vous faufilez entre les danseurs vers la sortie. Un ***flic en civil***, trahi par sa nervosité, ***y est posté***. Bon.

`
            ,
    links: [
            {label: `Sortir quand même par là.`,
            path: "104"},
            {label: `Aller vers les loges pour trouver la porte de derrière.`,
            path: "4"},
            {label: `Aller se planquer aux toilettes.`,
            path: "5"},
            {label: `Rester au milieu de la foule.`,
            path: "6"}
        ]
    ,image:"dancefloor1.gif"
});

episode({
    key: "104",
    title: `Sortir par l'entrée principale du club malgré le policier`,
    text:
    `Après tout, pourquoi ça tomberait sur vous ?, pensez-vous, en vous dirigeant vers la sortie le plus naturellement possible.

...Et la main du policier vient s'abattre sur votre épaule.
"Je le tiens.", fait-il.`
            ,
    links: [
            {label: `Lui péter le bras.`,
            path: "105"},
            {label: `Lui demander ce qu'il veut.`,
            path: "106"},
            {label: `Fuir vers la sortie.`,
            path: "107"},
            {label: `Fuir vers l'intérieur du club.`,
            path: "108"}
        ]
    ,image:"dancefloor1.gif"
});

episode({
    key: "105",
    title: `Péter le bras du policier gardant la sortie du club`,
    text:
    `D'un mouvement parfait, vous lui cassez le bras au niveau du coude, puis lui donnez un coup sur la nuque.
Il s'effondre sans avoir eu le temps de se plaindre.

A votre droite, deux policiers accourent depuis l'intérieur du club. Trois autres viennent de l'extérieur. Vous êtes coincé, et désarmé. Même un augmenté comme vous n'aurait aucune chance.
`            ,
    links: [
            {label: `Se défendre.`,
            path: "109"},
            {label: `Se rendre.`,
            path: "110"},
            {label: `Fuir.`,
            path: "111"}
        ]
    ,image:"dancefloor1.gif"
});

episode({
    key: "106",
    title: `Demander au policier gardant la sortie du club ce qu'il veut`,
    text:
    `"Pas de panique monsieur, on veut juste discuter un peu, fait-il. On doit prendre quelque précautions car vous êtes un augmenté, mais on veut juste que vous veniez avec nous, sans problème, ok ?" Vous vous rendez compte qu'il a une main près de votre nuque.
    Et soudain...
`            ,
    links: [
            {label: `Noir.`,
            path: "96"}
        ]
    ,image:"dancefloor1.gif"
});

episode({
    key: "107",
    title: `Fuir le policier vers la sortie du club`,
    text:
    `Vous vous dégagez d'une torsion et fuyez vers...
Nulle part. Deux balles viennent se loger dans vos genoux.

Dommage. Vous n'étiez qu'à quelques mètres de la sortie, mais une fois que vous vous êtes un peu éloigné de la foule, le policier n'a pas hésité à utiliser son arme. Il s'approche de vous, s'agenouille et...
`            ,
    links: [
            {label: `Noir.`,
            path: "96"}
        ]
    ,image:"dancefloor1.gif"
});

episode({
    key: "108",
    title: `Fuir vers l'intérieur du club`,
    text:
    `Vous vous dégagez d'une torsion et fuyez vers l'intérieur. Le policier a sorti son arme, mais ***n'ose pas tirer*** au milieu de la foule. Vous voyez ***trois de ses collègues*** qui essaient de vous ***encercler***. Avec votre force, vous pouvez certainement les repousser, mais pas sans faire quelques blessés.

Bon. Pas de panique. Vous n'avez rien fait de mal, juste acheté quelques gélules. Au pire, ça sera une amende, vous le savez très bien.
`            ,
    links: [
            {label: `Vous rendre.`,
            path: "112"},
            {label: `Fuir coûte que coûte.`,
            path: "113"},
            {label: `Prendre un otage.`,
            path: "114"}
        ]
    ,image:"dancefloor1.gif"
});

episode({
    key: "109",
    title: `Se défendre à main nue contre cinq policiers armés`,
    text:
    `Deux tirs dans vos genous, et vous voilà à terre. La scène est surréaliste. Vous êtes sur le sol, blessé par balle, tandis que les gens autour continuent de danser, qu'un policier, que la musique, que la lumière...
`            ,
    links: [
            {label: `Noir.`,
            path: "96"}
        ]
    ,image:"dancefloor1.gif"
});


episode({
    key: "110",
    title: `Vous rendre aux collègues de l'homme que vous avez mis KO`,
    text:
    `Vous mettez vos mains derrière la tête puis vous mettez à genoux.
Ca n'empèche pas les policiers de vous plaquer brutalement sur le sol en vous insultant, d'approcher quelque chose de votre nuque et...
`            ,
    links: [
            {label: `Noir.`,
            path: "96"}
        ]
    ,image:"dancefloor1.gif"
});

episode({
    key: "111",
    title: `Fuir les cinq policiers armés qui vous encerclent`,
    text:
    `Deux balles viennent se loger dans vos genoux.

La scène est surréaliste. Vous êtes sur le sol, blessé par balle, tandis que les gens autour continuent de danser, qu'un policier, que la musique, que la lumière...
`            ,
    links: [
            {label: `Noir.`,
            path: "96"}
        ]
    ,image:"dancefloor1.gif"
});

episode({
    key: "112",
    title: `Vous rendre aux policiers vous encerclant dans le club`,
    text:
    `Vous mettez vos mains sur votre tête et vos genoux au sol.
Un policier vient se placer derrière vous, et commence à dire quelque chose mais vous ne...
`            ,
    links: [
            {label: `Noir.`,
            path: "96"}
        ]
    ,image:"dancefloor1.gif"
});

episode({
    key: "113",
    title: `Fuir le club à tout prix`,
    text:
    `Les quatre policiers sont sur vous. Vous vous dégagez, brisant quelques os, et courrez vers la sortie en reversant les gens comme une sorte de rhinocéros robot.

Et vous êtes stoppé net.

Dans l'encadrement des portes se tient ***un augmenté***, comme vous, mais ***à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...
`            ,
    links: [
            {label: `Noir.`,
            path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
    ,image:"dancefloor1.gif"
});

episode({
    key: "114",
    title: `Prendre un otage dans le club`,
    text:
    `Pas le choix, c'est sans doute la seule solution.
Vous prenez la première personne qui vous tombe sous la main, une jeune fille...ou un jeune homme, plutôt... Enfin, quoi que... Bref ! ///La première personne qui vous tombe sous la main///.

"Ne faites pas de conneries, hurle un flic, on veut juste vous emmener avec nous pour parler !"
C'est ça, pensez-vous. Vous reculez lentement vers la porte en surveillant de tous les côtés...
Vous voilà presque arrivé à la sortie et...

Un coup de poing vous envoie voler contre un mur.

Juste à côté de vous se tient un ***augmenté***, comme vous, mais ***à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...
`            ,
    links: [
            {label: `Noir.`,
            path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
    ,image:"dancefloor1.gif"
});

episode({
    key: "12",
    title: `Monter dans le conduit d'aération`,
    text:
    `Vous défoncez la porte de la cabine à coup de talon et coupez l'activité d'un couple à moitié nu. Le type vous lance un regard noir de ses yeux globuleux entourés de mascara :
"C'est la sécu !? J'ai rien fait, on fait rien, tu fais quoi là ?
-Dehors."

Vous les foutez tous les deux dehors sans ménagement, montez sur la cuvette, scannez rapidement la grille d'aération. Il y avait bien des lasers de sécurité, mais ils sont hors service, rien d'étonnant quand on voit l'état des chiottes.

Le conduit est très étroit, mais vous avez vu pire. Il fait un angle et monte au plafond. Vous vous tortillez dans le boyau métallique pour monter, en espérant ne pas tout casser et arrivez enfin en haut. ***Le chemin se divise*** en trois.`
            ,
    links: [
            {label: `Tout droit, vous sentez un flux d'air. Ca doit certainement mener à l'extérieur.`,
            path: "51"},
            {label: `Il continue également à votre gauche.`,
            path: "52"},
            {label: `A droite, le conduit semble redescendre.`,
            path: "53"}
        ]
    ,image:"aerationclub.gif"
});

episode({
    key: "53",
    title: `Descente brutale`,
    text:
    `Vous prenez le conduit de gauche et vous positionnez pour descendre dans celui de droite les pieds en avant. Et il descend plutôt vite. Vous tombez au fond dans un épouvantable fracas, couvert, espérez-vous, par la musique.
Vous êtes plus ou moins coincé à la verticale. Vous pouvez...`
            ,
    links: [
            {label: `Remonter.`,
            path: "54"},
            {label: `Continuer de progresser les pieds en avant, sans savoir où vous allez.`,
            path: "55"}
        ]
    ,image:"aerationclub.gif"
});

episode({
    key: "54",
    title: `Remontée...`,
    text:
    `C'est sans doute plus prudent que d'avancer à l'aveugle.
Vous revoilà à ***l'intersection***.`
            ,
    links: [
            {label: `A votre droite, vous sentez un flux d'air, ce doit être la sortie.`,
            path: "51"},
            {label: `A votre gauche, le conduit descend.`,
            path: "63"},
            {label: `Vous pouvez également continuer tout droit.`,
            path: "52"}
        ]
    ,image:"aerationclub.gif"
});

episode({
    key: "55",
    title: `Avançons...`,
    text:
    `C'est plutôt risqué d'avancer comme ça à l'aveugle, mais vous n'avez pas le choix.

    En l'occurence, vous n'allez pas bien loin. Vous repoussez une plaque avec vos pieds et vous laissez glisser hors du conduit. Vous revoilà à l'extérieur, dans une cabine d'autres toilettes, propres cette fois.
    
    La porte s'ouvre doucement, pour laisser apparaître un type à la coiffure ridicule qui vous regarde les yeux écarquillés.
    
    "Vous... vous allez bien ?!", vous demande-t-il stupidement.`
    ,
    links: [
        {label: `L'assommer.`,
        path: "46"},
        {label: `Lui répondre que tout va bien.`,
        path: "57"},
        {label: `Ne pas perdre de temps, sortir des toilettes.`,
        path: "48"},
        {label: `Remonter dans le conduit.`,
        path: "59"}
    ]
    ,image:"toilettesClub2.jpg"
});

episode({
    key: "59",
    title: `Avant de remonter...`,
    text:
    `Vous devriez vous débarrasser du type d'abord : il risque de trouver louche que vous montiez dans un conduit.`
            ,
    links: [
            {label: `L'assommer.`,
            path: "46"},
            {label: `Vous lui dites que ça va, vous vous enfermez dans les toilettes et attendez son départ.`,
            path: "47"}
        ]
    ,image:"toilettesClub2.jpg"
});

episode({
    key: "46",
    title: `Bim`,
    text:
    `Un simple coup de poing suffit. Vous le trainez dans une cabine adjacente, montez sur la cuvette et entreprenez l'ascension de l'étroit conduit.

Il finit par se ***diviser en trois***.`
            ,
    links: [
            {label: `A votre droite, vous sentez un flux d'air, ce doit être la sortie.`,
            path: "51"},
            {label: `A votre gauche, le conduit descend.`,
            path: "63"},
            {label: `Vous pouvez également continuer tout droit.`,
            path: "52"}
        ]
    ,image:"aerationclub.gif"
});

episode({
    key: "47",
    title: `Lui laisser le temps de partir`,
    text:
    `Inutile de se créer des ennuis faute de patience.

Le type finit par sortir. Vous vous empressez de rejoindre le conduit qui s'élève perpendiculairement, et réussissez, après moultes contorsions, à atteindre le haut.

Il se divise en trois.`
            ,
    links: [
            {label: `A votre droite, vous sentez un flux d'air, ce doit être la sortie.`,
            path: "51"},
            {label: `A votre gauche, le conduit descend.`,
            path: "63"},
            {label: `Vous pouvez également continuer tout droit.`,
            path: "52"}
        ]
    ,image:"toilettesClub2.jpg"
});

episode({
    key: "48",
    title: `Sortir des toilettes des loges`,
    text:
    `Vous sortez des toilettes et vous retrouvez dans les loges. La ***porte de sortie*** est au fond du couloir, à côté d'un escalier menant au premier étage. Un technicien passe devant vous, en vous ignorant. Vous savez cependant que vous ne devriez pas moisir ici.`
            ,
    links: [
            {label: `Traverser le couloir et sortir.`,
            path: "20"},
            {label: `Aller au premier étage.`,
            path: "21"}
        ]
    ,image:"arriereClub.jpg"
});

episode({
    key: "57",
    title: `Lui répondre que tout va bien`,
    text:
    `"Ca va, merci.", dites-vous.

Il n'a pas l'air très convaincu. Il vous fait une petite moue et part essayer de coiffer sa crête de coq devant la glace des toilettes.`
            ,
    links: [
             {label: `Ne pas perdre de temps, sortir des toilettes.`,
            path: "48"},
            {label: `Remonter dans le conduit.`,
            path: "59"}
        ]
        ,image:"toilettesClub2.jpg"
});

episode({
    key: "63",
    title: `Perdu ?`,
    text:
    `Vous freinez tant bien que mal la descente brutale et arrivez face à une grille. Le conduit est un peu plus large ici : un système de sécurité y avait été installé, heureusement inactif.

Le conduit débouche juste au dessus des ***toilettes du club***.

Vous reprenez votre ascension et essayez de vous concentrer :
A droite, vous en venez, ce sont les toilettes des loges.

Tout droit, d'après la fraicheur que vous sentez, ce doit être la sortie.
Et à gauche...?`
            ,
    links: [
            {label: `Tout droit, vers la sortie du conduit.`,
            path: "51"},
            {label: `Aller à gauche.`,
            path: "52"},
            {label: `Vous pouvez également rebrousser chemin et retourner dans les toilettes du club.`,
            path: "7"}
        ]
        ,image:"aerationclub.gif"
});

episode({
    key: "ignorerNotifClub",
    title: `Ignorer la notif CopCast`,
    text:
    `Les données copcasts sont rarement pertinentes de toute façon. Vous prenez mentalement note de vous débarrasser de cette application plus tard.

Bon, il n'empêche qu'il faut quand même sortir d'ici.`
            ,
    links: [
            {label: `Aller vers les loges pour trouver la porte de derrière.`,
            path: "4"},
            {label: `Aller se planquer aux toilettes.`,
            path: "5"},
            {label: `Rester au milieu de la foule de clubbers et attendre que la police parte.`,
            path: "6"},
            {label: `Sortir par l'entrée principale.`,
            path: "7"}
        ]
        ,image:"dancefloor1.gif"
});

episode({
    key: "4",
    title: `Devant la porte des loges`,
    text:
    `Vous vous frayez un chemin vers le fond de la salle à travers la masse mouvante des danseurs. La porte est évidemment ***gardée par un agent*** de sécurité du club, un large noir d'une tête de plus que vous (ce qui doit l'amener dans les 2m05).
Vous remarquez qu'il porte des ***lunettes noires de réalité augmentée*** Ectron bas de gamme. Erreur de base.`
            ,
    links: [
            {label: `Essayer de pirater ses lunettes.`,
            path: "piraterLunettesCLub"},
            {label: `Essayer de le convaincre de vous laisser passer.`,
            path: "convaincreLogesCLub"},
            {label: `Passer en force.`,
            path: "passerEnForceLogesClub"},
            {label: `Chercher une autre sortie.`,
            path: "19"}
        ]
        ,image:"dancefloor1.gif"
});

episode({
    key: "piraterLunettesCLub",
    title: `Piratage devant la porte des loges`,
    text:
    `Vous faites une demande de communication et profitez d'une vulnérabilité connue sur cette marque pour faire ***planter ses lunettes***. Le garde met quelques secondes avant de comprendre que les écrans de ses verres se sont figées et de les rebooter.
Largement assez de temps pour vous permettre de vous ***glisser derrière***.

Espérons que ça lui apprenne à utiliser des lunettes mono-écran à l'avenir.

<img src="data/img/arriereClub.jpg" class="imgDansTexte">
Vous voilà dans les loges : des petites pièces, certaines avec portes et d'autres avec un simple rideau, disposées sur les côtés d'un long couloir qui ***mène directement à la sortie***.
`
            ,
    links: [
            {label: `Traverser le couloir et sortir.`,
            path: "20"},
            {label: `Aller au premier étage.`,
            path: "21"},
            {label: `Visiter les pièces.`,
            path: "22"}
        ]
        ,image:"arriereClub.jpg"
});

episode({
    key: "convaincreLogesCLub",
    title: `Convaincre le garde devant la porte des loges`,
    text:
    `Le garde vous regarde avec curiosité. Nul doute qu'il est en train d'analyser votre visage en utilisant ses lunettes.

Quelle approche allez-vous tenter ?`
            ,
    links: [
            {label: `Lui graisser la patte.`,
            path: "graisserPatteGarde"},
            {label: `Lui dire que vous êtes du staff.`,
            path: "28"},
            {label: `Lui dire que vous êtes un fan de l'artiste qui est dans la loge.`,
            path: "29"},
            {label: `Non, il n'a pas l'air d'être quelqu'un qui se laisse convaincre facilement. Rebrousser chemin pour trouver une autre sortie.`,
            path: "19"}
        ]
        ,image:"dancefloor1.gif"
});

episode({
    key: "28",
    title: `Vous faire passer pour un technicien auprès du garde devant la porte des loges`,
    text:
    `"PARDON, JE SUIS LE TECHNICIEN !, faites-vous en essayant de passer.
-C'est ça." Il vous repousse fermement.
`
            ,
    links: [
                {label: `Passer en force.`,
                path: "passerEnForceLogesClub"},
                {label: `Essayer de pirater ses lunettes bas de gamme.`,
                path: "piraterLunettesCLub"},
                {label: `Chercher une autre sortie.`,
                path: "19"}
        ]
        ,image:"dancefloor1.gif"
});

episode({
    key: "29",
    title: `Vous faire passer pour un fan auprès du garde devant la porte des loges`,
    text:
    `Il vous repousse fermement:
"PAS DE FAN DANS LES LOGES, ATTENDS-LE A LA SORTIE DU CLUB."
`
            ,
    links: [
                {label: `Passer en force.`,
                path: "passerEnForceLogesClub"},
                {label: `Essayer de pirater ses lunettes bas de gamme.`,
                path: "piraterLunettesCLub"},
                {label: `Chercher une autre sortie.`,
                path: "19"}
        ]
        ,image:"dancefloor1.gif",
});

episode({
    key: "passerEnForceLogesClub",
    title: `Passer en force le garde devant la porte des loges.`,
    text:
    `Vous lui donnez un rapide coup de coude juste sous le crane puis lui écrasez la tête contre la porte. Il s'effondre dans vos bras, ***KO***. Personne ne semble vous avoir vu. Vous le posez plus ou moins assis sur le sol et ***entrez dans les loges***.

Des petites pièces, certaines avec portes et d'autres avec un simple rideau, disposées sur les côtés d'un long couloir qui mène directement à la ***sortie***.`
            ,
            links: [
                {label: `Traverser le couloir et sortir.`,
                path: "20"},
                {label: `Aller au premier étage.`,
                path: "21"},
                {label: `Visiter les pièces.`,
                path: "22"}
        ]
        ,image:"arriereClub.jpg"
});

episode({
    key: "19",
    title: `Dans le club`,
    text:
    `Par où voulez-vous sortir du club ?`
            ,
    links: [
            {label: `Par les loges pour trouver la porte de derrière, c'est très bien.`,
            path: "4"},
            {label: `Par les toilettes.`,
            path: "5"},
            {label: `Par l'entrée principale.`,
            path: "7"},
            {label: `Je préfère rester au milieu de la foule.`,
            path: "6"},
        ]
        ,image:"dancefloor1.gif"
});

episode({
    key: "graisserPatteGarde",
    title: `Tentative de corruption`,
    text:
    `Ca tombe bien, vous avez du liquide sur vous. Vous lui mettez en main et tentez de passer. L'agent vous repousse fermement et vous rend votre argent en agitant son index. "Non".`
            ,
            links: [
                {label: `Passer en force.`,
                path: "passerEnForceLogesClub"},
                {label: `Essayer de pirater ses lunettes bas de gamme.`,
                path: "piraterLunettesCLub"},
                {label: `Chercher une autre sortie.`,
                path: "19"}
        ]
        ,image:"dancefloor1.gif"
});

episode({
    key: "20",
    title: `Sortir par la porte des loges`,
    text:
    `Vous ouvrez la porte et sortez d'un air décidé.

Vous voilà dans la rue de derrière, glauque, faiblement éclairée par les raies des lampadaires jaune pisse dans lesquels viennent danser les volutes de cigarettes de quelques fumeurs en petits groupes. Ils vous ignorent complètement.

Il y a aussi un grand type en imperméable qui semble augmenté, comme vous, portant lui aussi des lunettes noires. Sa peau blanche semble presque fluorescente.

"Merci de me suivre.", dit-il en posant sa main sur votre épaule.`
            ,
            links: [
                {label: `Lui demander ce qui se passe.`,
                path: "123"},
                {label: `Lui briser le bras.`,
                path: "124"},
                {label: `Fuir.`,
                path: "125"}
        ]
        ,image:"sortieArriereClub.jpg"
});

episode({
    key: "123",
    title: `Demander à l'augmenté de la sortie derrière ce qu'il veut`,
    text:
    `"On veut juste discuter un peu. Il n'y a pas de soucis." Sa voix est calme et posée, avec une sonorité métallique caractéristique.

Vous avez à peine le temps de vous rendre compte de sa main qui vient toucher doucement votre nuque et...`
            ,
            links: [
                {label: `Noir`,
                path: "96"}
        ]
});

episode({
    key: "126",
    title: `Essayer de convaincre de vous laisser passer à l'étage`,
    text:
    `"Bonjour, je...
-Vous n'avez rien à faire ici monsieur, veuillez redescendre.
-Je suis...
-Non monsieur, merci de redescendre."

*Rien à faire*, c'est comme parler à un mur.
`
            ,
            links: [
                {label: `Redescendre.`,
                path: "redescendreLoges"},
                {label: `Passer en force.`,
                path: "128"}
        ]
});

episode({
    key: "128",
    title: `Passer en force au premier étage`,
    text:
    `Trop vite pour qu'un oeil humain puisse vous suivre, vous vous accroupissez devant un garde, puis l'assommez d'un uppercut, avant de vous retourner et de frapper le deuxième à la tempe tout en donnant un coup de tête à la dernière personne.

Les ***trois corps s'effondrent*** presque en même temps sur le sol. Du travail de pro.

La première porte est ouverte, c'est un bureau qui sert aussi de salle de pause, à priori. Son mobilier est spartiate, rien d'intéressant. ***L'autre porte est protégée*** par un scanneur digital. Vous pouvez aussi ***continuer dans le couloir***.

Quoi que vous faites, vous feriez mieux de vous dépêcher.
`            ,
            links: [
                {label: `Prendre le couloir.`,
                path: "129"},
                {label: `Pirater la porte fermée.`,
                path: "130"},
                {label: `Défoncer la porte fermée.`,
                path: "131"},
                {label: `Quitter le club.`,
                path: "133"}
        ]
});

episode({
    key: "129",
    title: `Le couloir du premier étage`,
    text:
    `Le couloir mène à une porte, qui mène elle même aux passerelles au dessus de la salle principale. C'est ici que les techniciens se rendent pour mettre les lumières en place. Rien d'intéressant pour vous.
Vous avez une vue imprenable de la mer humaine en dessous, mais vous ne voyez rien d'anormal.`
            ,
            links: [
                {label: `Pirater la porte fermée.`,
                path: "130"},
                {label: `Défoncer la porte fermée.`,
                path: "131"},
                {label: `Quitter le club.`,
                path: "133"}
        ]
});

episode({
    key: "130",
    title: `Pirater la porte fermée`,
    text:
    `Ca sera facile, le scanneur d'empreinte est de bas de gamme. Vous l'ouvrez légèrement et tirez un fil de vos lunettes que vous branchez à l'intérieur du boitier.

*Clinch* ***La porte est ouverte***.

Vous en profitez aussi pour copier l'empreinte autorisée, ça pourra toujours être utile pour plus tard.

Vous entrez dans le bureau et fermez la porte derrière vous. Il est plutôt minimaliste, mais coquet : une table en bois massif avec ***un ordinateur*** posé dessus, un minibar, quelques tableaux sur les murs...`
            ,
            links: [
                {label: `Fouiller le bureau.`,
                path: "134"},
                {label: `Fouiller la pièce.`,
                path: "135"},
                {label: `Consulter l'ordinateur.`,
                path: "136"}
        ]
});

episode({
    key: "131",
    title: `Défoncer la porte fermée du premier étage`,
    text:
    `Pas assez de temps pour pirater, vous défoncez la porte d'un coup d'épaule. Vous n'entendez aucune alarme, mais nulle doute qu'elle s'est déjà déclenchée et que le reste de la sécu, peut être même la police, converge déjà vers vous.

Près du bureau se trouve ***une trappe d'aération***, dont vous arrachez rapidement la grille afin de vous aménager une ***sortie de secours***.

Bon. Vous avez le temps pour une action. UNE SEULE action.`
            ,
            links: [
                {label: `Fouiller le bureau.`,
                path: "76"},
                {label: `Fouiller la pièce.`,
                path: "77"},
                {label: `Consulter l'ordinateur.`,
                path: "78"},
                {label: `Aller dans le conduit d'aération.`,
                path: "73"},
                {label: `Quitter la pièce par la porte`,
                path: "133"}
        ]
});

episode({
    key: "133",
    title: `Partir`,
    text:
    `Pas le temps de jouer. Vous descendez du premier étage et vous ruez vers la sortie.

Vous voilà dans la rue de derrière, glauque, faiblement éclairée par les raies des lampadaires jaune pisse dans lesquels viennent danser les volutes de cigarettes de quelques fumeurs en petits groupes. Ils vous ignorent complètement.

Il y a aussi ***un gros type en imperméable qui semble augmenté***, comme vous, portant lui aussi des lunettes noires. Sa peau blanche semble presque fluorescente.

"Merci de me suivre.", dit-il en posant sa main sur votre épaule.`
            ,
            links: [
                {label: `Lui demander ce qui se passe.`,
                path: "123"},
                {label: `Lui briser le bras.`,
                path: "124"},
                {label: `Fuir.`,
                path: "125"}
        ]
        ,image:"sortieArriereClub.jpg"
});

episode({
    key: "134",
    title: `Fouiller le bureau en bois`,
    text:
    `Rien de bien intéressant dans les tiroirs : des papiers, des dossiers, du matériel de bureau.

Par contre, sous le plateau se trouve une sorte de renfoncement, avec un joli petit cadeau : un bon vieux ***pistolet*** automatique, en l'occurence un BK13 de Croon, facilement reconnaissable avec sa bande rouge sur le long. C'est pas tout récent, moyennement précis, mais très fiable, avec une excellente cadence de tir et surtout, étant très courant, on trouve ses munitions (0.45 ACP) un peu partout.

Il est chargé à bloc, soit 40 balles. ***Vous l'empochez***, en espérant ne pas avoir à vous en servir, et décidez de...`
            ,
    links: [
        {label: `Fouiller la pièce.`,
        path: "135"},
        {label: `Consulter l'ordinateur.`,
        path: "136"},
        {label: `Partir.`,
        path: "133"}
    ],
    commands: () => {
        giveToPlayer({key:"pistoletBK13", name:"Pistolet BK13", description:"", amount:1 });
        giveToPlayer({key:"ballePistolet", name:"Balle de pistolet (0.45 ACP)", description:"", amount:40 });
    },
    revisit:"134revisit"
});

episode({
    key: "134revisit",
    title: `Fouiller le bureau en bois`,
    text:
    `Rien de plus dans le bureau. Vous avez déjà bien fouillé.`
            ,
    links: [
        {label: `Fouiller la pièce.`,
        path: "135"},
        {label: `Consulter l'ordinateur.`,
        path: "136"},
        {label: `Partir.`,
        path: "133"}
    ]
});


episode({
    key: "135",
    title: `Fouiller la pièce.`,
    text:
    `Il n'y a pas grand chose à fouiller. Vous retournez les meubles, les plantes, les tableaux... Et tombez sur un coffre fort. Il s'ouvre avec une empreinte digitale.

Ca tombe bien, vous venez juste de la copier dans le scanneur de la porte d'entrée.

Il y a environ ***5.000 crédits*** dans le coffre. Pas mal. Vous empochez le tout, refermez le coffre et...`
            ,
            links: [
                {label: `Fouiller le bureau en bois.`,
                path: "134"},
                {label: `Consulter l'ordinateur.`,
                path: "136"},
                {label: `Partir.`,
                path: "133"}
        ],
    commands: () => {
        giveToPlayer({key:"credits", name:"Crédits", description:"De l'argent.", amount:5000 });
    },
    revisit:"135revisit"
});


episode({
    key: "135revisit", //TODO on ne peux ouvrir le coffre qu'une fois
    title: `Vous retournez la pièce, sans rien trouver de spécial.`,
    text:
    `Rien de plus dans la pièce. Vous avez déjà bien fouillé.`
            ,
            links: [
                {label: `Fouiller le bureau en bois.`,
                path: "134"},
                {label: `Consulter l'ordinateur.`,
                path: "136"},
                {label: `Partir.`,
                path: "133"}
        ]
});

episode({
    key: "73",
    title: `Sortir vite du bureau par le conduit`,
    text:
    `Vous vous engouffrez dans le conduit, et vous faites bien : au même instant des gardes déboulent dans le bureau.

"STOP !", hurlent-ils.

Vous rampez à toute vitesse vers le conduit menant, vous l'espérez, à la sortie.

Et en effet, vous voilà derrière le gros bloc climatiseur accroché à un côté du batiment. A travers les interstices, vous pouvez voir la rue, faiblement éclairée par les lampadaires jaune pisse.

Vous êtes juste au dessus de l'entrée des artistes. Quelques-un sont d'ailleurs en train de griller une cigarette en discutant. Il y a aussi un ***grand type en imperméable qui semble augmenté***, comme vous, portant lui aussi des lunettes noires. Sa peau blanche semble presque fluorescente.

Pas le temps de gamberger, de toute façon. Vous entendez des bruits derrière vous : on a commencé ***à vous suivre*** dans le conduit.`
            ,
            links: [
                {label: `Défoncer le climatiseur et sortir du club !`,
                path: "80"},
                {label: `Vous rendre.`,
                path: "86"},
                {label: `Affronter le personnel de sécurité dans le conduit.`,
                path: "87"}
        ]
});

episode({
    key: "95",
    title: `Sortir vite du bureau par le conduit`,
    text:
    `Vous sautez derrière le bureau, puis bondissez dans le conduit d'aération et rampez à toute vitesse vers le conduit menant, vous l'espérez, à la sortie.

Et en effet, vous voilà derrière le gros bloc climatiseur accroché à un côté du batiment. A travers les interstices, vous pouvez voir la rue, faiblement éclairée par les lampadaires jaune pisse.

Vous êtes juste au dessus de l'entrée des artistes. Quelques-un sont d'ailleurs en train de griller une cigarette en discutant. Il y a aussi un ***grand type en imperméable qui semble augmenté***, comme vous, portant lui aussi des lunettes noires. Sa peau blanche semble presque fluorescente.

Pas le temps de gamberger, de toute façon. Vous entendez des bruits derrière vous : on a commencé ***à vous suivre*** dans le conduit.`
            ,
            links: [
                {label: `Défoncer le climatiseur et sortir du club !`,
                path: "80"},
                {label: `Vous rendre.`,
                path: "86"},
                {label: `Affronter le personnel de sécurité dans le conduit.`,
                path: "87"}
        ]
});

episode({
    key: "136",
    title: `Consulter l'ordinateur`,
    text:
    `L'accès au système d'exploitation (un OS récent... à priori c'est une très bonne machine) est protégée par mot de passe, mais peut être que les données ne sont pas chiffrées. Vous tirez un fin cable du côté gauche de vos lunettes et le branchez. L'ordinateur boote "dans" le système live de vos lunettes et vous pouvez désormais vous promener à loisir sur le disque.`
            ,
            links: [
                {label: `Lire les mails.`,
                path: "137"},
                {label: `Chercher des codes secrets (ou autre données sensibles).`,
                path: "138"},
                {label: `Télécharger tout le disque.`,
                path: "139"},
                {label: `Fouiller la pièce.`,
                path: "135"},
                {label: `Fouiller le bureau.`,
                path: "134"},
                {label: `Sortir tant qu'il en est encore temps.`,
                path: "133"}
        ]
});

episode({
    key: "137",
    title: `Lire les mails`,
    text:
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
            links: [
                {label: `Chercher des codes secrets (ou autre données sensibles).`,
                path: "138"},
                {label: `Télécharger tout le disque.`,
                path: "139"},
                {label: `Fouiller la pièce.`,
                path: "135"},
                {label: `Fouiller le bureau.`,
                path: "134"},
                {label: `Sortir tant qu'il en est encore temps.`,
                path: "133"}
        ]
});

episode({
    key: "138",
    title: `Chercher des codes secrets`,
    text:
    `Vous trouvez une liste de mots de passe utilisé par le gérant du club que vous stockez dans un coin, sans trop savoir à quoi ça va vous servir.`
            ,
            links: [
                {label: `Lire les mails.`,
                path: "137"},
                {label: `Télécharger tout le disque.`,
                path: "139"},
                {label: `Fouiller la pièce.`,
                path: "135"},
                {label: `Fouiller le bureau.`,
                path: "134"},
                {label: `Sortir tant qu'il en est encore temps.`,
                path: "133"}
        ]
});

episode({
    key: "139",
    title: `Chercher des codes secrets`,
    text:
    `C'est sans doute ce qu'il y a de mieux à faire, vous pourrez ainsi étudiez tout ça au calme.
Après quelques minutes, le transfert est terminé. Vous décidez donc de...
Vous trouvez une liste de mots de passe utilisé par le gérant du club que vous stockez dans un coin, sans trop savoir à quoi ça va vous servir.`
            ,
            links: [
                {label: `Fouiller la pièce.`,
                path: "135"},
                {label: `Fouiller le bureau.`,
                path: "134"},
                {label: `Sortir tant qu'il en est encore temps.`,
                path: "133"}
        ]
});

episode({
    key: "86",
    title: `Se rendre aux gardes dans le conduit`,
    text:
    `"Du calme, faites-vous, je me rends".

L'un d'eux vous tire comme il peut à l'extérieur et vous agenouille dans le bureau. Et soudain, c'est le...`
            ,
            links: [
                {label: `Noir.`,
                path: "96"}
        ]
});

episode({
    key: "45",
    title: `Les toilettes des artistes`,
    text:
    `Vous tombez nez à nez avec ***un type en train de se recoiffer*** devant la glace. Il vous salue vaguement de la tête avant de vous ignorer.

Les toilettes sont propres. Trois cabines et des pissotières. Vous remarquez ***un conduit d'aération*** au dessus de l'une des cabines. Impossible d'y accéder tant que l'autre type est là.
`
            ,
            links: [
                {label: `Assommer la personne.`,
                path: "46"},
                {label: `S'enfermer dans la cabine en question et attendre que la personne parte.`,
                path: "47"},
                {label: `Sortir des toilettes, après tout, votre objectif actuel est de quitter le club.`,
                path: "48"},
        ]
});


episode({
    key: "75",
    title: `Trouver une autre entrée`,
    text:
    `Après tout, il suffit de passer par la porte.

Vous retournez dans les conduits et prenez celui qui semble mener vers les loges.
Il débouche dans les toilettes des artistes, vides, heureusement.

Vous sortez des WC et vous retrouvez dans les loges. La porte de sortie est au fond du couloir, à côté d'un escalier menant au premier étage. C'est sans aucun doute là bas que se trouve le bureau.

Un technicien passe devant vous, en vous ignorant. Vous savez cependant que vous ne devriez pas moisir ici.

`
            ,
            links: [
                {label: `Traverser le couloir et sortir.`,
                path: "20"},
                {label: `Aller au premier étage.`,
                path: "21"}
        ]
});

episode({
    key: "84",
    title: `Fouiller la pièce`,
    text:
    `Trop lent. Les agents de sécurité débarquent alors que vous êtes en train de retourner les meubles.

"Stop !", fait l'un d'eux.`
            ,
            links: [
                {label: `Se rendre.`,
                path: "93"},
                {label: `Se défendre.`,
                path: "97"},
                {label: `Fuir.`,
                path: "95"}
        ]
});

episode({
    key: "93",
    title: `Se rendre`,
    text:
    `"On se calme", dites-vous en croisant vos mains derrière votre nuque et vous agenouillant sur la moquette.

L'un d'entre eux passe derrière vous et...
`
            ,
            links: [
                {label: `Noir.`,
                path: "96"}
        ]
});

episode({
    key: "87",
    title: `Affronter le personnel de sécurité dans le conduit`,
    text:
    `"Malgré l'espace minuscule, vous arrivez assommer un poursuivant mais c'est inutile, ils vous bloquent complêtement l'arrière de toute manières, il va falloir sortir...

Soudain, le conduit s'effondre et vous chutez lourdement sur le dos.

Juste au dessus de vous se tient l'homme que vous avez aperçu dans la rue tout à l'heure. Il vient de défoncer le plafond.

Il est en effet ***augmenté, comme vous, mais à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            links: [
                {label: `Noir.`,
                path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
});

episode({ //TODO: si arme alors utiliser arme, sinon non
    key: "97",
    title: `Combattre les agents de sécurité dans le bureau`,
    text:
    `Vous vous abritez derrière le bureau et faites cracher votre BK13 tout neuf.

L'affrontement est bref, mais intense. Trois coups, trois hommes à terre. Vous n'avez pas perdu la main.`
            ,
            links: [
                {label: `Fouiller les hommes à terre.`,
                path: "98"},
                {label: `Fouiller la pièce.`,
                path: "99"},
                {label: `Consulter l'ordinateur.`,
                path: "100"},
                {label: `Partir.`,
                path: "101"},
        ]
});

episode({
    key: "98",
    title: `Fouiller les corps`,
    text:
    `Aucun des trois n'est mort, mais sans soins rapides, ils n'en ont plus pour très longtemps.

Vous vous penchez sur le premier et... un coup de pied magistral en plein visage vous fait traverser la pièce. Mais qui...?

Devant la porte se tient un augmenté, comme vous, mais à une toute autre échelle. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            links: [
                {label: `Noir.`,
                path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
});

episode({
    key: "99",
    title: `Fouillez la pièce`,
    text:
    `Vous pouvez désormais fouiller tranquille. Vous finissez par trouver, derrière un tableau, un coffre. Et soudain, vous voilà projeté à travers la pièce.

Vous n'avez rien vu venir. Un camouflage ? Non, juste à côté de vous se tient un augmenté, comme vous, mais à une toute autre échelle. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            links: [
                {label: `Noir.`,
                path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
});

episode({
    key: "85",
    title: `Consulter l'ordinateur`,
    text:
    `Vous avez a peine eu le temps d'allumer la machine que trois agents de sécu arrivent dans la pièce.

"Rendez-vous !", Fait l'un deux.`
            ,
            links: [
                {label: `Se rendre.`,
                path: "93"},
                {label: `Se défendre.`,
                path: "97"},
                {label: `Fuir.`,
                path: "95"}
        ]
});

episode({ //TODO: si on a un flingue...
    key: "94",
    title: `Se défendre`,
    text:
    `A main nue contre trois gardes armés, vous n'avez aucune chance. Alors que vous vous jetiez sur eux, deux balles viennent se loger dans vos genoux.

Vous êtes rapidement maitrisé, plaqué contre la moquette et...`
            ,
            links: [
                {label: `Noir.`,
                path: "95"}
        ]
});

episode({
    key: "90",
    title: `Lire les mails`,
    text:
    `Pas le temps...
Vous aviez à peine reperé l'endroit où étaient rapatriés les mails que trois agents de sécu arrivent dans la pièce.

"Rendez-vous !", fait l'un deux.`
            ,
            links: [
                {label: `Se rendre.`,
                path: "93"},
                {label: `Se défendre.`,
                path: "97"},
                {label: `Fuir.`,
                path: "95"}
        ]
});

episode({
    key: "91",
    title: `Chercher des données sensibles`,
    text:
    `Ca demande beaucoup trop de temps...

La porte s'ouvre soudainement et trois agents de sécu débarquent en vous demandant de vous rendre.`
            ,
            links: [
                {label: `Se rendre.`,
                path: "93"},
                {label: `Se défendre.`,
                path: "97"},
                {label: `Fuir.`,
                path: "95"}
        ]
});

episode({
    key: "92",
    title: `Copiez le contenu de l'ordinateur du club`,
    text:
    `Si le transfert est assez rapide, c'est sans doute le meilleur moyen d'exploiter les informations par la suite, au calme.

Malheureusement, le disque est énorme et le transfert s'éternise.

Trois agents de sécurité finissent par arriver dans le bureau.

"Rendez-vous", fait l'un deux.`
            ,
            links: [
                {label: `Se rendre.`,
                path: "93"},
                {label: `Se défendre.`,
                path: "94"},
                {label: `Fuir.`,
                path: "95"}
        ]
});

episode({
    key: "100",
    title: `Consulter l'ordinateur`,
    text:
    `Vous vous apprétez à brancher le cable de vos lunettes lorsque vous voilà soudain projeté à travers la pièce.

Vous n'avez rien vu venir. Un camouflage ? Non, juste à côté de vous se tient un augmenté, comme vous, mais à une toute autre échelle. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            links: [
                {label: `Noir.`,
                path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
});

episode({
    key: "101",
    title: `Consulter l'ordinateur`,
    text:
    `Vous ne voulez pas pousser votre chance trop loin. Vous sautez dans le conduit et...

Êtes soudain tiré en arrière et projeté contre le mur.


Vous n'avez rien vu venir. Un camouflage ? Non, juste à côté de l'aération se tient un augmenté, comme vous, mais à une toute autre échelle. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            links: [
                {label: `Noir.`,
                path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
});

episode({
    key: "21",
    title: `Monter l'escalier des loges`,
    text:
    `L'escalier fait un coude pour déboucher sur des pièces au dessus de la salle principale. Vous passez rapidement la tête dans l'angle : trois personnes (dont deux agents de sécurité) sont en train de discuter. Vous avez eu le temps de voir deux portes et un couloir.
Pas moyen de passer sans vous faire voir.
`
            ,
            links: [
                {label: `Redescendre et chercher un autre passage.`,
                path: "redescendreLoges"},
                {label: `Essayer de les convaincre de vous laisser passer.`,
                path: "126"},
                {label: `Passer en force.`,
                path: "128"}
        ]
        ,image:"arriereClub.jpg"
});

episode({
    key: "redescendreLoges",
    title: `Redescendre dans les loges`,
    text:
    `Vous voilà redescendu dans les loges.`
            ,
    links: [
            {label: `Traverser le couloir et sortir.`,
            path: "20"},
            {label: `Aller au premier étage.`,
            path: "21"},
            {label: `Visiter les pièces.`,
            path: "22"}
        ]
});

episode({
    key: "22",
    title: `Visiter les pièces`,
    text:
    `Vous jetez un rapide coup d'oeil derrière les rideaux, rien d'intéressant si ce n'est du matériel son et lumière. Les pièces avec portes sont ***toutes fermées***, excepté ***les toilettes***.`
            ,
            links: [
                {label: `Traverser le couloir et sortir.`,
                path: "20"},
                {label: `Aller au premier étage.`,
                path: "21"},
                {label: `Aller aux toilettes.`,
                path: "45"}
        ]
});

episode({
    key: "51",
    title: `Vers l'extérieur`,
    text:
    `Vous rampez vers ce que vous croyez être la sortie.
Et en effet, vous voilà derrière le gros bloc climatiseur accroché à un côté du batiment. A travers les interstices, vous pouvez voir la rue, faiblement éclairée par les lampadaires jaune pisse.

Vous êtes juste au dessus de l'entrée des artistes. Quelques-un sont d'ailleurs en train de griller une cigarette en discutant. Il y a aussi un grand ***type en imperméable qui semble augmenté***, comme vous, portant lui aussi des lunettes noires. Sa peau blanche semble presque fluorescente.

Peut être n'est-ce qu'une concidence. Peut être n'est-il pas là pour vous. Peut être pas. Et peut être que oui.

Bon. Si vous voulez sortir par là, ***il faudra défoncer le climatiseur***, de toute façon. Ca ne sera pas très discret.`
            ,
            links: [
                {label: `Sortir par là et vous barrer en courant.`,
                path: "80"},
                {label: `Défoncer le climatiseur mais ne pas sortir.`,
                path: "81"},
                {label: `Sortir par l'entrée des artistes.`,
                path: "82"},
                {label: `Faire demi tour complètement et sortir par l'entrée principale.`,
                path: "83"}
        ]
        ,image:"sortieArriereClub.jpg"
});

episode({
    key: "65",
    title: `Sortir d'ici`,
    text:
    `Vous décidez de ne pas prendre de risques inutiles en visitant le bureau et préférez ramper vers ce que vous croyez être la sortie.
Et en effet, vous voilà derrière le gros bloc climatiseur accroché à un côté du batiment. A travers les interstices, vous pouvez voir la rue, faiblement éclairée par les lampadaires jaune pisse.

Vous êtes juste au dessus de l'entrée des artistes. Quelques-un sont d'ailleurs en train de griller une cigarette en discutant. Il y a aussi un grand ***type en imperméable qui semble augmenté***, comme vous, portant lui aussi des lunettes noires. Sa peau blanche semble presque fluorescente.

Peut être n'est-ce qu'une concidence. Peut être n'est-il pas là pour vous. Peut être pas. Et peut être que oui.

Bon. Si vous voulez sortir par là, il faudra ***défoncer le climatiseur***, de toute façon. Ca ne sera pas très discret.`
            ,
            links: [
                {label: `Sortir par là et vous barrer en courant.`,
                path: "80"},
                {label: `Défoncer le climatiseur mais ne pas sortir.`,
                path: "81"},
                {label: `Sortir par l'entrée des artistes.`,
                path: "82"},
                {label: `Faire demi tour complètement et sortir par l'entrée principale.`,
                path: "83"}
        ]
});

episode({
    key: "52",
    title: `La pièce du premier étage`,
    text:
    `A travers la grille, vous voyez que conduit débouche dans bureau chic aux tons verts, avec sofa et mini bar. Certainement celui du patron de la boite. Plusieurs tableaux abstraits sont accrochées aux murs.`
            ,
            links: [
                {label: `Vous n'avez rien à faire ici. Vous essayez de quitter le club par le conduit.`,
                path: "65"},
                {label: `Visitez l'endroit après avoir analysé d'éventuelles défenses.`,
                path: "66"}
        ]
});

episode({
    key: "66",
    title: `La pièce du premier étage`,
    text:
    `Oui, il y a certainement des choses intéressantes ici.

Vous lancez machinalement un scan de la grille : elle est ***protégée par des lasers***, évidemment. Par contre, à première vue, ils semblent être reliés au circuit principal. Il suffirait de ***couper l'électricité*** de la boite ***pour pouvoir passer***.`
            ,
            links: [
                {label: `Aller couper le courant de la boite de nuit.`,
                path: "couperCourantNouveau"},
                {label: `Passer malgré les lasers, et fouiller la pièce à toute vitesse.`,
                path: "68"},
                {label: `Trouver une autre entrée.`,
                path: "75"},
                {label: `Assez perdu de temps, quitter carrément le club.`,
                path: "65"},
        ]
});

episode({
    key: "couperCourantNouveau",
    title: `Trouver un moyen de couper le courant`,
    text:
    `Très bien, mais où se trouve le ***disjoncteur***...? Certainement dans les coulisses. Vous faites demi-tour et arrivez à une intersection.
    
Un conduit mène vers la sortie, vu l'air frais. L'autre retourne vers les toilettes du club. Vous prenez le 3e chemin.
    
Vous débouchez dans les toilettes des artistes. Personne en vue.

Vous sortez dans les loges, à la recherche d'un dijoncteur, que vous finissez par trouver sous l'escalier du fond. Vous ***l'arrachez sans ménagement du mur***.
Noir. Bruits de panique.

Aidé par la vision infrarouge de vos lunettes, vous ***retournez dans les conduits*** aussi vite que possible, remontez, éclatez la grille et vous ***voilà enfin dans le bureau du directeur***.`
            ,
            links: [
                {label: `Fouiller le bureau.`,
                path: "fouillerBureauBoisClubCoupureCourant"},
                {label: `Fouiller la pièce.`,
                path: "fouillerPieceClubCoupureCourant"},
                {label: `Consulter l'ordinateur.`,
                path: "consulterOrdiClubCoupureCourant"},
                {label: `Partir.`,
                path: "73"},
        ]
});

episode({
    key: "fouillerBureauBoisClubCoupureCourant",
    title: `Fouiller le bureau`,
    text:
    `Des papiers, des dossiers, du matériel de bureau. Rien d'intéressant.

Soudain, vous remarquez sous le plateau une sorte de renfoncement, avec un joli petit cadeau : un bon vieux ***pistolet*** automatique, en l'occurence un BK13 de Croon, facilement reconnaissable avec sa bande rouge sur le long. C'est pas tout récent, moyennement précis, mais très fiable, avec une excellente cadence de tir et surtout, étant très courant, on trouve ses munitions (0.45 ACP) un peu partout.

Il est chargé à bloc, soit 40 balles. ***Vous l'empochez***, en espérant ne pas avoir à vous en servir, et décidez de...`
            ,
            links: [
                {label: `Fouiller la pièce.`,
                path: "fouillerPieceClubCoupureCourant"},
                {label: `Consulter l'ordinateur.`,
                path: "consulterOrdiClubCoupureCourant"},
                {label: `Partir.`,
                path: "73"},
        ]
        ,commands: () => {
        giveToPlayer({key:"pistoletBK13", name:"Pistolet BK13", description:"", amount:1 });
        giveToPlayer({key:"ballePistolet", name:"Balle de pistolet (0.45 ACP)", description:"", amount:40 });
    }
    ,revisit:"fouillerBureauBoisClubCoupureCourantrevisit"
});

episode({
    key: "fouillerBureauBoisClubCoupureCourantrevisit",
    title: `Fouiller le bureau`,
    text:
    `Vous avez déjà tout fouillé.`
    ,
            links: [
                {label: `Fouiller la pièce.`,
                path: "fouillerPieceClubCoupureCourant"},
                {label: `Consulter l'ordinateur.`,
                path: "consulterOrdiClubCoupureCourant"},
                {label: `Partir.`,
                path: "73"},
        ]
});

episode({
    key: "fouillerPieceClubCoupureCourant",
    title: `Fouiller la pièce.`,
    text:
    `Il n'y a pas grand chose à fouiller. Vous retournez les meubles, les plantes, les tableaux... Et tombez sur un coffre fort. Il s'ouvre avec une empreinte digitale... mais l'alimentation est coupée.
`
            ,
            links: [
                {label: `Fouiller le bureau en bois.`,
                path: "fouillerBureauBoisClubCoupureCourant"},
                {label: `Consulter l'ordinateur.`,
                path: "consulterOrdiClubCoupureCourant"},
                {label: `Essayer de défoncer le coffre.`,
                path: "defoncerCoffreCLub"},
                {label: `Partir.`,
                path: "133"}
        ]
});

episode({
    key: "defoncerCoffreCLub",
    title: `Tenter de défoncer le coffre`,
    text:
    `Malgré vos augmentations qui vous donnent une super force, ***vous n'arrivez à rien***.
`
            ,
            links: [
                {label: `Fouiller le bureau en bois.`,
                path: "fouillerBureauBoisClubCoupureCourant"},
                {label: `Fouiller la pièce.`,
                path: "fouillerPieceClubCoupureCourant"},
                {label: `Partir.`,
                path: "133"}
        ]
});

episode({
    key: "consulterOrdiClubCoupureCourant",
    title: `Consulter l'ordinateur éteint`,
    text:
    `Oui, l'ordinateur doit avoir quelques infos intéressantes.

Ca serait une bonne idée de le consulter ***s'il y avait du courant***. Malheureusement, vous venez de le couper.`
            ,
            links: [
                {label: `Fouiller le bureau en bois.`,
                path: "fouillerBureauBoisClubCoupureCourant"},
                {label: `Consulter l'ordinateur.`,
                path: "consulterOrdiClubCoupureCourant"},
                {label: `Partir.`,
                path: "133"}
        ]
});

episode({
    key: "68",
    title: `Passer malgré les lasers`,
    text:
    `Vous faites sauter la grille d'un coup de talon et entrez. Vous n'entendez aucune alarme, mais nulle doute qu'elle s'est déjà déclenchée et que la sécu converge déjà vers le bureau.

Vous avez le temps pour une action. UNE SEULE action.`
            ,
            links: [
                {label: `Fouiller le bureau.`,
                path: "76"},
                {label: `Fouiller la pièce.`,
                path: "77"},
                {label: `Consulter l'ordinateur.`,
                path: "78"},
                {label: `Retourner dans le conduit.`,
                path: "73"},
        ]
});

episode({
    key: "76",
    title: `Fouiller le bureau`,
    text:
    `Vous fouillez à toute vitesse dans les tiroirs : des papiers, des dossiers, du matériel de bureau. Rien d'intéressant. Merde !

Soudain, vous remarquez sous le plateau une sorte de renfoncement, avec un joli petit cadeau : un bon vieux ***pistolet*** automatique, en l'occurence un BK13 de Croon, facilement reconnaissable avec sa bande rouge sur le long. C'est pas tout récent, moyennement précis, mais très fiable, avec une excellente cadence de tir et surtout, étant très courant, on trouve ses munitions (0.45 ACP) un peu partout.

Il est chargé à bloc, soit 40 balles. ***Vous l'empochez***, en espérant ne pas avoir à vous en servir, et décidez de...`
            ,
            links: [
                {label: `Fouiller la pièce.`,
                path: "84"},
                {label: `Consulter l'ordinateur.`,
                path: "85"},
                {label: `Retourner dans le conduit.`,
                path: "73"},
        ],
    commands: () => {
        giveToPlayer({key:"pistoletBK13", name:"Pistolet BK13", description:"", amount:1 });
        giveToPlayer({key:"ballePistolet", name:"Balle de pistolet (0.45 ACP)", description:"", amount:40 });
    },
    revisit:"76revisit"
});

episode({
    key: "76revisit",
    title: `Fouiller le bureau`,
    text:
    `Vous avez déjà tout fouillé.`
            ,
            links: [
                {label: `Fouiller la pièce.`,
                path: "84"},
                {label: `Consulter l'ordinateur.`,
                path: "85"},
                {label: `Retourner dans le conduit.`,
                path: "73"},
        ]
});

episode({
    key: "77",
    title: `Fouiller la pièce`,
    text:
    `Vous retournez toute la pièce à toute vitesse et finissez par tomber sur un coffre fort caché derrière un tableau.
Vous savez très bien que vous n'aurez le temps de rien faire. Dommage.`
            ,
            links: [
                {label: `Essayer d'ouvrir le coffre.`,
                path: "88"},
                {label: `Fouiller le bureau.`,
                path: "76"},
                {label: `Consulter l'ordinateur.`,
                path: "85"},
                {label: `Retourner dans le conduit.`,
                path: "73"},
        ]
});

episode({
    key: "88",
    title: `Essayer d'ouvrir le coffre`,
    text:
    `Voyons, c'est une serrure à empreinte digitale, vous pouvez essayer de le pirater ou de le forcer ou...
Pas le temps.

Trois agents de sécurité débarquent, armes au poing.

"On ne bouge plus !"
`
            ,
            links: [
                {label: `Se rendre.`,
                path: "93"},
                {label: `Se defendre.`,
                path: "94"},
                {label: `Fuir.`,
                path: "95"}
        ]
});

episode({
    key: "78",
    title: `Consulter l'ordinateur`,
    text:
    `Conscient que vous n'avez pas beaucoup de temps devant vous, vous vous attaquez à ce qui vous semble le plus intéressant : l'ordinateur.

L'accès au système d'exploitation (un OS récent... à priori c'est une très bonne machine) est protégée par mot de passe, mais peut être que les données ne sont pas chiffrées. Vous tirez un fin cable du côté gauche de vos lunettes et le branchez. L'ordinateur boote "dans" le système live de vos lunettes et vous pouvez désormais vous promener à loisir sur le disque.
C'est très bien mais vous n'avez certainement ***pas le temps*** de faire grand chose...`
            ,
            links: [
                {label: `Lire les mails.`,
                path: "90"},
                {label: `Chercher des codes secrets (ou autre données sensibles).`,
                path: "91"},
                {label: `Télécharger tout le disque.`,
                path: "92"},
                {label: `Retourner dans le conduit.`,
                path: "73"},
        ]
});

episode({
    key: "80",
    title: `Vers l'extérieur`,
    text:
    `Il vous faut taper quelques secondes, mais vous réussissez finalement à arracher le climatiseur. Vous atterrissez lourdement dans la rue et...
Un coup de pied magistral vous envoie voler contre le mur du club.

C'est le grand albinos en imperméable.
*Il est en effet augmenté*, comme vous, mais ***à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez ***même pas le temps*** de le voir se déplacer. Vous le voyez juste... Disparaitre. Et...`
            ,
            links: [
                {label: `Noir`,
                path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
});

episode({
    key: "81",
    title: `Vers l'extérieur`,
    text:
    `Après quelques secondes, vous parvenez à arracher le climatiseur qui se fracasse dans la rue.

Vous voyez les gens se regrouper autour et regarder dans votre direction. Ils ne peuvent heureusement pas vous voir, car vous êtes dans le noir, mais le type augmenté semble vous avoir vu.

Il se rue dans le club, sans doute va-t-il se mettre à votre poursuite dans les conduits.`
            ,
            links: [
                {label: `Fuir par les conduits.`,
                path: "102"},
                {label: `Fuir par la rue.`,
                path: "103"}
            ]
});

episode({
    key: "82",
    title: `Sortir par la porte de derrière`,
    text:
    `Vous retournez dans les conduits et prenez celui qui semble descendre vers les loges. Vous voilà dans les toilettes des artistes, plutôt propres et heureusement vides.

Vous sortez et vous retrouvez dans les loges. La porte de sortie est au fond du couloir, à côté d'un escalier menant au premier étage. Un technicien passe devant vous, en vous ignorant. Vous savez cependant que vous ne devriez pas moisir ici.
`
            ,
            links: [
                {label: `Traverser le couloir et sortir.`,
                path: "20"},
                {label: `Aller au premier étage.`,
                path: "21"}
            ]
            ,image: "toilettesClub2.jpg"
});

episode({
    key: "83",
    title: `Rebrousser chemin pour sortir par l'entrée principale`,
    text:
    `Vous reprenez les conduit en sens inverse, débouchez dans des toilettes et vous rendez vers la sortie principale en enlevant la poussière de vos vêtements.

Pas de flic en vue. Et même s'il y en avait en civil, après tout, pourquoi ça tomberait sur vous ?, pensez-vous, en vous dirigeant vers la sortie le plus naturellement possible.

Et la main d'un policier en civil vient s'abattre sur votre épaule.
"Je le tiens.", fait-il.`
            ,
    links: [
            {label: `Lui péter le bras.`,
            path: "105"},
            {label: `Lui demander ce qu'il veut.`,
            path: "106"},
            {label: `Fuir vers la sortie.`,
            path: "107"},
            {label: `Fuir vers l'intérieur du club.`,
            path: "108"}
        ]
});

episode({
    key: "124",
    title: `Briser le bras de l'augmenté à la sortie du club`,
    text:
    `Vous saisissez son bras d'une main et frappez son coude de l'extérieur :
Crack.

Rien de cassé chez lui, mais chez vous non plus, d'après ce qu'il vous semble.
En tout cas, il est aussi costaud que vous, sinon plus.

Vous libérez rapidement votre main pour tenter une autre attaque mais, un flash, un mouvement flou, et...`
            ,
            links: [
                {label: `Noir`,
                path: "96"}
        ]
});

episode({
    key: "102",
    title: `Fuir par les conduits`,
    text:
    `Pensant à juste titre qu'il lui faudra un peu de temps avant de grimper vous rejoindre, vous rampez à toute vitesse vers là où vous êtes entré.
Soudain, le conduit s'effondre et vous chutez lourdement sur le dos.

Juste au dessus de vous se tient l'homme que vous avez aperçu dans la rue tout à l'heure. Il vient de défoncer le plafond.

Il est en effet augmenté, comme vous, mais à une toute autre échelle. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même pas le temps de le voir attaquer. Vous le voyez juste... Disparaitre. Et...`
            ,
            links: [
                {label: `Noir`,
                path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
});

episode({
    key: "103",
    title: `Fuir dans la rue`,
    text:
    `C'est l'occasion.
Vous atterrissez lourdement dans la rue et courez de toute votre énergie. Vos augmentations font de vous l'un des coureurs les plus rapide du globe. C'est gagné.

Mais... Vous entendez alors des pas à côté. C'est le type.
Il est en effet ***augmenté, comme vous, mais à une toute autre échelle***. Son corps noueux, d'un noir d'ébène, donne naissance au niveau du cou à une tête tellement blanche qu'on la croirait fluorescente.

Vous n'avez même ***pas le temps de le voir*** se déplacer. Vous n'avez aucune chance. Vous le voyez juste... Disparaitre. Et...`
            ,
            links: [
                {label: `Noir`,
                path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
});

episode({
    key: "125",
    title: `Fuir l'augmenté gardant la sortie du club`,
    text:
    `Vous vous dégagez d'une torsion, lui abandonnant votre manteau , et partez en courant.
Vos augmentations font de vous l'un des coureurs les plus rapide du globe. C'est gagné.

Mais... Vous entendez alors des pas à côté, un bruit de vent. C'est le type.
Vous pouvez distinguez son corps un court instant : il est en effet ***augmenté, comme vous, mais à une toute autre échelle***. Son corps noueux est d'un noir d'ébène, il n'a quasiment plus rien d'humain, on croirait voir une sorte d'insecte.

Vous n'avez ***même pas le temps de le voir*** se déplacer. Vous n'avez aucune chance. Vous le voyez juste... Disparaitre. Et...`
            ,
            links: [
                {label: `Noir`,
                path: "96"}
        ]
        ,commands: () => {
            setVariable("augmenteClubVu", true);
        }
});

episode({
    key: "96",
    title: `Lumière`,
    text:
    `
Un type avec un masque de chirugien se penche sur vous. Vous êtes allongé dans une salle d'opération.

"Bon retour à la maison. J'ai l'honneur de vous annoncer que vous êtes ***de nouveau actif***.
-J'ai démissionné, parvenez-vous à gromeler.
-Si vous aviez vraiment démissionné, ça serait difficile d'avoir cette conversation, car vous ne seriez plus qu'un cerveau dans un bocal."
Très juste. On ne laissait pas les gens ***partir*** comme ça avec des implants qui ***coutent aussi cher qu'un avion de combat***. Mais au bout de quelques mois, vous aviez presque fini par y croire.

"J'ai démissionné, répétez-vous.
-C'est pas à moi qu'il faut dire ça de toute façon, fait-il en détachant divers cables le long de vos bras, Alice vous attend. Vous pouvez vous lever."`
,links: [
    {label: `Vous lever.`,
    path: "96seLever"}
]
,image:"salleImplantation.jpg"
});

episode({
    key: "96seLever",
    title: `Lumière`,
    text:
    `Vous vous asseyez sur le lit. Vous êtes dans une salle d'opération ou, pour être plus précis, d'implantation. Pareille mais bourrée d'électronique. Deux infirmiers s'occupent de ranger le matériel qu'ils ont utilisé pour faire dieu seul sait quoi sur vous. Le médecin enlève son masque et dévoile un visage fatigué qui contraste bizarrement avec sa voix gaie.
    <img src="data/img/salleImplantation.jpg" class="imgDansTexte">
"Il y a eu du changement ici. Alice a son bureau au troisième étage. Vous y arriverez tout seul ?"
Vous lui assurez que oui, et que non, vous n'allez pas faire de bêtises.

Vous sortez de la salle et débouchez au milieu d'un court couloir plutôt chic, rappellant d'avantage un hôtel qu'un hôpital. Vers la gauche se trouve l'ascenseur. Une affichette vous indique que vous êtes au deuxième étage.
`
,links: [
    {label: `Aller vers l'ascenseur.`,
    path: "115"},
    {label: `Visiter les autres pièces du couloir.`,
    path: "116"},
    {label: `Retourner dans la salle d'implantation.`,
    path: "117"},
    {label: `Essayer de vous enfuir.`,
    path: "118"}
]
,image:"couloirsPremanod.jpg"
});


episode({
    key: "115",
    title: `Prendre l'ascenseur`,
    text: () =>
    `
    Vous appelez l'ascenseur et appuyez sur le chiffre 3.
    
    La cabine est plutôt clean elle aussi. De la musique, des fausses plantes vertes. Un grand miroir.
    `
    ,links: [
        {label: `La porte de l'ascenseur s'ouvre.`,
        path: "rencontreAlice"}
    ]
    ,image:"couloirsPremanod.jpg"
});

episode({
    key: "rencontreAlice",
    title: `Prendre l'ascenseur`,
    text: () =>
    `   
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
,links: [
    {label: `Accepter.`,
    path: "119"},
    {label: `Demander des détails.`,
    path: "120"},
    {label: `Retourner dans la salle d'implantation.`,
    path: "117"},
    {label: `Demander du temps pour réfléchir.`,
    path: "121"}
]
,commands: () => {
    if (variable("augmenteClubVu")) {
        variable("insertion", ` Vous vous souvenez l'avoir vu au club.`);
    } else {
        variable("insertion", ` `);
    }
}
,image:"couloirsPremanod.jpg"
});

episode({
    key: "116",
    title: `Visiter les autres pièces du deuxième étage`,
    text:
    `A côté de la salle d'implantation se trouve une pièce fermée à clef : vous pouvez voir à travers l'étroite vitre que du matériel médical y est stocké. La dernière porte le long de ce mur mène aux toilettes.

    Sur le mur en face, deux autres portes : l'une, vitrée, est celle d'un bureau. Sur l'autre est indiqué "escaliers".
    <img src="data/img/planEtageSalleImplantation.png" class="imgDansTexte">
`
,links: [
    {label: `Aller vers l'ascenseur.`,
    path: "115"},
    {label: `Retourner dans la salle d'implantation.`,
    path: "117"},
    {label: `Essayer de vous enfuir.`,
    path: "118"},
    {label: `Entrer dans le bureau.`,
    path: "140"},
    {label: `Aller aux toilettes.`,
    path: "141"},
    {label: `Jeter un oeil au matériel médical.`,
    path: "163"},
    {label: `Prendre la porte menant aux escaliers.`,
    path: "142"}
]
,image:"couloirsPremanod.jpg"
});

episode({
    key: "117",
    title: `Lumière`,
    text:
    `Ils sont en train de ranger leur matériel. Le médecin lève les sourcils en vous voyant.

    "Oui ? Un problème ?"
    `
,links: [
    {label: `"Qu'est-ce que vous m'avez fait, au juste ?"`,
    path: "143"},
    {label: `"Pouvez-vous m'améliorer ?"`,
    path: "144"},
    {label: `"Non, rien."`,
    path: "145"}
]
,image:"salleImplantation.jpg"
});

episode({
    key: "142",
    title: `Escalier`,
    text:
    `Larges et chichement éclairés par les ampoules de secours.
    La cage d'escalier est bercée par le vombrissement hypnotique d'un aérateur. Par réflexe, vous prenez mentalement note de l'existence probable de conduits où vous pourriez vous faufiler pour explorer le bâtiment.
    `
,links: [
    {label: `Monter l'escalier pour rencontre Alice.`,
    path: "rencontreAlice"},
    {label: `Retourner dans le couloir`,
    path: "148"}
]
,image:"couloirsPremanod.jpg"
});

episode({
    key: "118",
    title: `Essayer de vous enfuir ?`,
    text:
    `C'est ridicule. Vous n'avez rien à fuir, Alice est une vieille connaissance.
    Mieux vaut discuter pour savoir ce qu'il veut avant de prendre de telles décisions.
    
    Et puis, ça fait longtemps que vous n'avez pas vu son visage bouffi.`
,links: [
    {label: `Aller vers l'ascenseur.`,
    path: "115"},
    {label: `Visiter les autres pièces du couloir.`,
    path: "116"},
    {label: `Retourner dans la salle d'implantation.`,
    path: "117"}
]
,image:"couloirsPremanod.jpg"
});

episode({
    key: "119",
    title: `Lumière`,
    text:
    `"C'est d'accord."

C'est pas comme si vous avez le choix, de toute façon. La dernière mission que vous aviez effectué pour Premanod vous a laissé un goût amer dans la bouche, mais après tout, ils n'y étaient pour rien. Peut être que vous pourrez gérer les choses différemment cette fois.

"Super ! Content que tu sois de retour parmi nous. Par contre il va me falloir un peu de temps pour les conneries administratives. Je te recontacte dans quelques jours pour signer le contrat, d'accord ?"

Sur la demande d'Alice, vous ré-autorisez son accès à votre module de communication. L'augmenté vous raccompagne vers l'ascenseur.

`
,links: [
    {label: `Vous arrivez au rez de chaussé..`,
    path: "152"}
]
,image:"couloirsPremanod.jpg"
});

episode({
    key: "120",
    title: `Demander des détails sur l'offre d'Alice`,
    text:
    `Les conditions n'ont pas beaucoup changées depuis que vous êtes parti.
    Premanod vous fournit un appartement coquet à deux pas d'ici, un entretien et des upgrades du corps ainsi qu'un salaire dans la moyenne.
    Obligation d'être d'astreinte en permanence : vous devez toujours être près à partir en mission. Vous êtes néanmoins libre de les exécuter selon vos termes ou même carrément de les refuser. Un comité décidera alors si votre attitude mérite des sanctions ou non.
    
    Quand aux missions elles mêmes, pas de changement non plus. Premanod propose aux états des groupes tactiques d'interventions lors de situation de siège, de prise d'otage et de missions à hauts risques.
    
    "Tu ne retrouveras pas tout de suite ta place dans la hierachie, évidemment, mais ça te reviendra rapidement. Ton talent nous manque. Tu nous manques."`
,links: [
    {label: `Accepter.`,
    path: "119"},
    {label: `Demander du temps pour réfléchir.`,
    path: "121"}
]
,image:"couloirsPremanod.jpg"
});

episode({
    key: "121",
    title: `Demander à réfléchir sur la proposition`,
    text:
    `"J'ai besoin de temps.
    -Pas de souci. Tu sais quoi, je dois préparer toute la merde administrative de toute façon. On se revoit dans quelques jours, et là je te demanderais ta décision. Ok ?"
    
    Vous acceptez. Vous n'avez rien à perdre.
    
    La dernière mission que vous aviez effectué pour Premanod vous a laissé un goût amer dans la bouche, mais après tout, ils n'y étaient pour rien. Peut être que vous pourrez gérer les choses différemment cette fois.
    
    Sur la demande d'Alice, vous rétablissez son accès à votre module de communication. L'augmenté vous raccompagne vers l'ascenseur.`
,links: [
    {label: `Vous arrivez au rez de chaussé.`,
    path: "152"}
]
,image:"couloirsPremanod.jpg"
});

episode({
    key: "140",
    title: `Aller dans le bureau en face de la salle d'implantation`,
    text:
    `C'est une petite pièce, avec une table au centre entourée de petites armoires métalliques à tiroir. Les meubles sont recouverts de tas de dossiers bourrés à craquer, organisés sans logique apparente. Un ordinateur attend patiemment que quelqu'un vienne le réveiller.

    Quoi que vous fassiez, faites-le vite : les médecins et les infirmiers vont bien finir par sortir de la salle d'implantation un jour et ils risquent de moyennement apprécier qu'on fouille leur bureau.`
,links: [
    {label: `Fouiller la pièce.`,
    path: "146"},
    {label: `Fouiller l'ordinateur.`,
    path: "147"},
    {label: `Sortir du bureau.`,
    path: "148"}
]
});

episode({
    key: "146",
    title: `Fouiller le bureau`,
    text:
    `Vous parcourez rapidement la pièce à la recherche de quelque chose d'intéressant. Rien de particulier. Des bons de livraisons, des rapports, des vieilles factures, des contrats, des décharges...`
,links: [
    {label: `Consulter l'ordinateur.`,
    path: "147"},
    {label: `Sortir du bureau.`,
    path: "148"}
]
});

episode({
    key: "147",
    title: `Consulter l'ordinateur`,
    text:
    `L'ordinateur était en veille. Il vous demande un mot de passe.
    Vous tapez celui qui est inscrit sur le post-it collé sur l'écran et accédez au système.
    
    Le disque est quasi-vide, on pourrait penser que l'OS vient tout juste d'être installé. Seule une icône DOSSIERS MED sur le bureau indique le contraire.
    `
,links: [
    {label: `Consulter les dossiers médicaux.`,
    path: "149"},
    {label: `Lire les mails.`,
    path: "150"},
    {label: `Fouiller la pièce.`,
    path: "146"},
    {label: `Sortir du bureau.`,
    path: "148"}
]
});

episode({
    key: "149",
    title: `Ouvrir DOSSIER MED`,
    text:
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
,links: [
    {label: `Lire les mails.`,
    path: "150"},
    {label: `Fouiller la pièce.`,
    path: "146"},
    {label: `Sortir du bureau.`,
    path: "148"}
]
});

episode({
    key: "150",
    title: `Lire les mails de l'ordinateur du bureau en face de la salle d'implantation`,
    text:
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
,links: [
    {label: `Consulter les dossiers médicaux.`,
    path: "149"},
    {label: `Lire les mails.`,
    path: "150"},
    {label: `Fouiller la pièce.`,
    path: "146"},
    {label: `Sortir du bureau.`,
    path: "148"}
]
});

episode({
    key: "143",
    title: `Demander au médecin ce qu'il vous a fait`,
    text:
    `"Eh bien, juste une petite maintenance. Vous savez, vous devriez la faire une fois par semaine au moins. Ca faisait longtemps, n'est-ce pas ?
    -Presque deux mois, avouez-vous.
    -Oh ? A ce point ?"
    Il prend quelques instants pour réfléchir.
    
    "Ca n'a pas dû être facile. Pas trop de tremblements ?
    -Avec les drogues, ça allait.
    -Hmm hmm. Vous devriez faire un peu plus attention. Vous avez eu de la chance que la compagnie s'intéresse de nouveau à vous.
    -Si vous le dites..."`
,links: [
    {label: `"Pouvez-vous m'améliorer ?"`,
    path: "144"},
    {label: `"Je vais y aller..."`,
    path: "145"}
]
,image:"salleImplantation.jpg"
});

episode({
    key: "144",
    title: `Demander au médecin s'il peut vous améliorer.`,
    text:
    `Il secoue la tête.
    "Pas pour le moment. Revenez après avoir vu Alice et on en reparle, c'est d'accord ?"`
,links: [
    {label: `"D'accord. J'y vais."`,
    path: "145"},
    {label: `"Que m'avez-vous fait, au fait ?"`,
    path: "143"}
]
,image:"salleImplantation.jpg"
});

episode({
    key: "145",
    title: `Dans le couloir du deuxième étage`,
    text:
    `Vous voilà dans le couloir du deuxième étage.
    En face, l'ascenseur menant à Alice, qui vous attend.`
,links: [
    {label: `Prendre l'ascenseur.`,
    path: "115"},
    {label: `Visiter les autres pièces du couloir.`,
    path: "116"},
    {label: `Essayer de vous enfuir.`,
    path: "118"}
]
,image:"couloirsPremanod.jpg"
});

episode({
    key: "148",
    title: `Retourner dans le couloir du deuxième étage`,
    text:
    `Vous revoilà dans le couloir chic aux tons bleus.`
,links: [
    {label: `
    Aller vers l'ascenseur où Alice vous attend.`,
    path: "115"},
    {label: `Visiter les autres pièces du couloir.`,
    path: "116"},
    {label: `Retourner dans la salle d'implantation.`,
    path: "117"},
    {label: `Essayer de vous enfuir.`,
    path: "118"}
]
,image:"couloirsPremanod.jpg"
});

episode({
    key: "141",
    title: `Dans les toilettes du deuxième étage`,
    text:
    `Deux lavabos et autant de cabines. Pas de bouche d'aération.

    Vous en profitez pour vous passer le visage sous l'eau. Quelle sale tête vous avez. Certainement en état de manque. La peau synthétique commence à se craqueler par endroit, aux tempes autour des implantations des connectiques des lunettes noires.
    Vous éteignez le robinet. L'eau sur vos mains était-elle chaude, ou froide ? Vos capteurs n'ont même pas pu vous le dire. Vos doigts sont un petit miracle d'ingénérie robotique, répondant parfaitement à chacune de vos solicitation, aussi bien pour donner un coup qu'une caresse. Mais vous sentez les articulations frotter. La peau s'écaille sur le dessous des pouces. La couleur de la chair n'est plus aussi uniforme qu'autrefois.
    
    Finalement, c'est une forme de vieillesse, pensez-vous, en retournant dans le couloir.
    `
,links: [
    {label: `
    Aller vers l'ascenseur où Alice vous attend.`,
    path: "115"},
    {label: `Visiter les autres pièces du couloir.`,
    path: "116"},
    {label: `Retourner dans la salle d'implantation.`,
    path: "117"},
    {label: `Essayer de vous enfuir.`,
    path: "118"}
]
});

episode({
    key: "163",
    title: `Jeter un oeil à la pièce où est stocké le matériel médical`,
    text:
    `Le stock est fermé par une solide porte de métal. Un étroit panneau de verre blindé vous permet de voir le matériel médical stocké dans la pièce.

    Vous savez déjà que vous n'arriverez à rien sans outil. Impossible de briser cette porte, même avec vos augmentations.
    
    `
,links: [
    {label: `Visiter les autres pièces du couloir.`,
    path: "116"}
]
});