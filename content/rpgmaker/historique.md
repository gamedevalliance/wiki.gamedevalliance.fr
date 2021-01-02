---
title: "Historique de la série"
description: "Découvrez toute l'histoire de la série RPG Maker en français. Retracez l'historique de toutes les versions, de RPG Maker 95 à RPG Maker MZ, avec leurs fonctionnalités et leur réception dans la communauté."
portail: rpgmaker
aliases:
    - /rpgmaker/serie/
---

Pour choisir une version de RPG Maker adaptée à votre projet, consultez notre [comparatif]({{< ref "/rpgmaker/premiers-pas.md#comparatif-des-versions" >}}).

## RPG Construction Tool Dante

Le premier logiciel de la série, développé par ASCII, est sorti en 1990 dans l'édition de février de MSX Magazine[^Dante], un magazine japonais mensuel publié par ASCII. La plupart des parutions peuvent être lues sur [archive.org](https://archive.org/details/msxmagazinejp) ou [issuu.com](https://issuu.com/msxblog/stacks/29f3f163a46440f68724bcfe5c786ccd). Dante était livré avec le jeu d'exemple Badoma, pensé pour présenter les possibilités du logiciel et servir de référence[^Badoma].

[^Dante]: MSX Magazine, numéro de février 1990, p. 76 ([archive](https://archive.org/details/MSX_Magazine_1990-02_ASCII_JP/page/n75))

[^Badoma]: MSX Magazine, numéro de février 1990, p. 88 ([archive](https://archive.org/details/MSX_Magazine_1990-02_ASCII_JP/page/n87))

{{< figure src="/rpgmaker/historique/badoma.png" caption="Badoma" >}}

Un éditeur de sprites permettait de dessiner ses graphismes, mais le choix des musiques était limité à celles par défaut. Deux types de personnage joueur pouvaient être créés : pour la terre ferme et pour la mer (en bâteau). Par contre, les PNJ étaient considérés comme une case de décor : ils ne pouvaient pas bouger ou être animés, et il fallait dessiner le décor autour d'eux puisqu'il n'y avait pas de gestion de la transparence.

## Action RPG Construction Tool Dante 2

{{< figure class="align-right" src="/rpgmaker/historique/legend-of-lidorun.png" caption="Legend of Lidorun, fourni avec Dante 2." >}}

Cette nouvelle version est sortie en février 1992, toujours publiée par MSX Magazine et développée par ASCII[^Dante2]. Il ne s'agit pas d'une simple suite comme le 2 dans le titre pourrait le laisser penser, mais bien d'une proposition très différente puisque le programme permet de réaliser des action-RPG : les affrontements se déroulent directement sur la carte du jeu. Les boss peuvent avoir une taille plus grande que le personnage et émettre des projectiles. Cette fois, les PNJ peuvent se déplacer, et il est possible d'ajouter ses propres musiques en utilisant le logiciel de composition MuSICA, également distribué dans MSX Magazine.

[^Dante2]: MSX Magazine, numéro de février 1992, p. 48 ([archive](https://archive.org/details/MSX_Magazine_1992-02_ASCII_JP/page/n47))

{{< figure src="/rpgmaker/historique/msx-magazine.jpg" caption="Dans [cette double page](https://archive.org/details/MSX_Magazine_1992-04_ASCII_JP/page/n79) de MSX Magazine, on pouvait lire des conseils pour mieux équilibrer ses jeux et apprendre à utiliser MuSICA." >}}

{{< figure class="align-right" src="/rpgmaker/historique/cipher.png" caption="Cipher de Ramon Verlinden, 2004" >}}

Il est très difficile de trouver des jeux réalisés avec Dante 2 aujourd'hui. Le jeu d'exemple Legend of Lidorun (リドルーンの伝説), dont il est possible de trouver des vidéos sur Niconico[^Niconico], est un jeu d'exploration comportant des zones de forêt, de grotte et d'autres donjons. Le projet avorté [Cipher](https://sdsnatcher.jorito.net/dante2.html), inspiré par les jeux cyberpunk de l'ère MSX, était une belle démonstration du potentiel de Dante 2 et se démarquait par ses environnements modernes. Enfin, Takumi Naramura, connu pour être le développeur de [La-Mulana](https://fr.wikipedia.org/wiki/La-Mulana), avait à l'époque utilisé Dante 2 pour créer un remake de l'action-RPG Hydlide[^Takumi Naramura].

[^Niconico]: [Video search by keyword リドルーンの伝説](https://www.nicovideo.jp/search/%E3%83%AA%E3%83%89%E3%83%AB%E3%83%BC%E3%83%B3%E3%81%AE%E4%BC%9D%E8%AA%AC), Niconico Video

[^Takumi Naramura]: Koji Fukuyama, [『MSX愛＆インディー精神を貫いてきたNIGOROのこれまでの道のり。「LA-MULANA 2」の完成記念イベント「LA-MULANA 通の会」レポート』](https://automaton-media.com/articles/reportjp/20180805-73517/), AUTOMATON, 2018-08-05

Le développement d'un Dante 3 avait été annoncé dans MSX Magazine en mai 1992[^Dante3], mais il fut abandonné lorsque la publication du magazine s'arrêta durant l'été. Cependant, les nouveautés prévues pour Dante 3, notamment un affichage de la carte en plein-écran, furent conservées pour Dante 98 et même approfondies grâce aux possibilités du PC-98.

[^Dante3]: MSX Magazine, numéro de mai 1992, p. 79 ([archive](https://archive.org/details/MSX_Magazine_1992-05_ASCII_JP/page/n77))

## RPG Maker 95

RPG Maker 95 est le premier titre de la série pour Microsoft Windows, développé et publié au Japon le 28 mars 1997 par ASCII. La traduction non-officielle en français est réalisée par Edwin, du site [Black Sword]({{< ref "communautes.md#zanarkand" >}})[^RM95 Wiki Oniro]. RPG Maker 95, bien qu'aujourd'hui dépassé, est l'un des premiers logiciels rendant la création de jeu accessible à un plus large public. C'est une petite révolution pour la série et le milieu de la création amatrice.

[^RM95 Wiki Oniro]: [« RPG Maker 95 »](http://www.rpg-maker.fr/wiki-23-rpg-maker-95.html), wiki d'Oniromancie

### Fonctionnalités

Les jeux ont une résolution de 640×480 pixels, ce qui est honorable pour l'époque. On y importe des images bitmap indexées en 256 couleurs, des fichiers audio en WAVE et des vidéos au format AVI. De plus, il est possible de jouer des pistes CD si le jeu est partagé par ce biais.

Les systèmes de véhicule et de déplacement en chenille sont déjà présents. L'équipe s'étend jusqu'à huit personnages, dont quatre peuvent participer aux combats traditionnels en vue subjective. Le moteur permet de créer facilement des magasins et des auberges, menus incontournables d'un RPG. Une option est proposée pour lancer des images et des dialogues au démarrage du jeu.

Cependant, le logiciel manque encore de maturité : un seul tileset est autorisé et les commandes d'évènement tiennent sur une page. Il est impossible de manipuler des variables, toute la logique du jeu doit être programmée par interrupteurs. On note cependant une gestion native de la souris dans les jeux, fonctionnalité que l'on ne retrouvera que bien plus tard dans RPG Maker MV.

{{< figure src="/rpgmaker/historique/rpgmaker95event.png" alt="Fenêtre d'évènement et liste des commandes." caption="L'éditeur d'évènements de RPG Maker 95." >}}

### Utilisation

Les utilisateurs devaient faire preuve d'ingéniosité et de ténacité pour réaliser des systèmes originaux malgré l'absence de fonctions essentielles telles que les variables et les boucles.[^RM95 Découvrir Oniro] Le logiciel perd rapidement en popularité à la sortie de RPG Maker 2000, une alternative bien plus intéressante.

[^RM95 Découvrir Oniro]: [« Découvrir les logiciels : RPG Maker 95 »](http://www.rpg-maker.fr/decouvrir-logiciel-rm95.html), Oniromancie

Certains atouts de RPG Maker 95 sont perdus dans la transition, notamment le support de la souris, de la résolution 640×480 et la lecture de pistes CD. De plus, RPG Maker 95 permet de distribuer les jeux sous la forme d'un installeur divisé en plusieurs petits fichiers. Cette méthode était utile à l'époque où les disquettes, d'une capacité de 1,47 Mo, étaient un support de stockage couramment utilisé.[^RM95 Wikipedia]

[^RM95 Wikipedia]: [『RPGツクール95』](https://ja.wikipedia.org/wiki/RPG%E3%83%84%E3%82%AF%E3%83%BC%E3%83%AB95), Wikipedia

### Support

RPG Maker 95 est entièrement compatible avec Windows 95, 98 et ME. Depuis la version RPG Maker 95 VALUE! l'éditeur et les jeux fonctionnent également sur Windows NT, bien qu'aucune information officielle n'ait été communiquée. En raison du mode 256 couleurs remplaçant la palette de Windows, les jeux s'affichent de façon incorrecte, rendant plusieurs menus illisibles. Sur certains systèmes, les jeux plantent en passant du mode plein-écran au mode fenêtré.

## Sim RPG Maker 95

Sim RPG Maker 95 sort officiellement le 29 mai 1998 au Japon uniquement, un an après [RPG Maker 95]({{< ref "/rpgmaker/historique.md#rpg-maker-95" >}}). Il se démarque du reste de la série pour son aspect restrictif et son axe sur le genre tactical RPG.

Le logiciel permet de créer des jeux similaires aux *Fire Emblem* et *Final Fantasy Tactics*. Une carte inclut généralement une cinématique d'introduction, un combat, puis une cinématique de conclusion. Une carte peut aussi être uniquement dédiée à une cinématique. Entre les cartes, le joueur peut être envoyé au campement pour acheter des objets et gérer son équipe. Plusieurs objectifs sont possibles en combat :

- Vaincre tous les ennemis
- Vaincre un ennemi spécifique
- Survivre à suffisamment de tours
- Atteindre un emplacement défini
- Protéger un personnage

Bien que la progression sur une carte soit linéaire, il est possible de créer des embranchements dans l'histoire en choisissant la carte vers laquelle le joueur est envoyé.

## RPG Maker 2000

RPG Maker 2000 est la seconde version principale de la série sur Windows. Le style graphique change drastiquement par rapport à [RPG Maker 95]({{< ref "/rpgmaker/historique.md#rpg-maker-95" >}}), puisque la résolution passe à 320×240 pixels tout en restant à 256 couleurs.

RPG Maker 2000 introduit le concept du Run-Time Package (RTP) permettant aux créateurs de distribuer leurs jeux sans inclure les ressources de base du logiciel, pour peu que les joueurs les possèdent déjà. Ce concept était très apprécié à l'époque en raison de la faible vitesse des connexions. Cependant, inclure les RTP à son jeu pour le rendre indépendant était une tâche complexe et mal documentée, ce qui fut une source d'erreurs dans de nombreux jeux.

## RPG Maker 2003

Cette version ressemble beaucoup à son prédécesseur [RPG Maker 2000]({{< ref "/rpgmaker/historique.md#rpg-maker-2000" >}}) en améliorant certains aspects techniques. De plus, le système de combat change pour une vue de côté à la Final Fantasy, avec des personnages animés.

{{< figure src="/rpgmaker/historique/spacefuneral.png" alt="Carte d'un marais avec des graphismes personnalisés" caption="Le jeu Space Funeral ouvert dans RPG Maker 2003." >}}

Après de nombreuses demandes et pétitions des utilisateurs, qui travaillaient sur des projets de plus en plus ambitieux et souhaitaient les publier dans la légalité, une version anglaise officielle est enfin distribuée le 24 avril 2015 par Degica, sous la direction de Kadokawa Games et Enterbrain et avec l'aide de Cherry, auteur de nombreux hacks non officiels à l'époque. Le code source du logiciel ayant été perdu, l'expérience de Cherry dans le domaine fut cruciale pour améliorer le programme par des moyens détournés.

## RPG Maker XP

RPG Maker XP est le premier logiciel de la série à connaitre une traduction anglaise officielle. La version japonaise est publiée en juillet 2004 et la version anglaise en septembre 2005. La résolution maximum des jeux est de 640×480 pixels avec l'introduction du support des PNG transparents. On peut y lire des musiques MIDI, Ogg, WAVE, MP3 et WMA.

La grande révolution apportée par RPG Maker XP est le système de scripting. Les utilisateurs peuvent modifier les systèmes existants en profondeur ou créer les leurs en utilisant le langage Ruby et la bibliothèque RGSS (Ruby Game Scripting System) spécialement écrite pour le logiciel. Très rapidement, les makers s'échangent des scripts sur Internet et les forums ouvrent des sections dédiées, ce qui permet aux néophytes de personnaliser leurs jeux sans savoir programmer.

## RPG Maker VX

*Section vide.*

## RPG Maker VX Ace

RPG Maker VX Ace sort le 15 janvier 2011 au Japon et le 15 mars 2012 en version anglaise. Cette version revient sur les options manquantes de RPG Maker VX et peut être perçue comme une grande mise à jour, de la même manière que RPG Maker 2003 a amélioré RPG Maker 2000. Le logiciel est strictement supérieur à son prédecesseur RPG Maker VX, désormais considéré par la communauté comme obsolète.

{{< figure src="/rpgmaker/historique/almostheroic.png" alt="Carte d'un marais avec des graphismes personnalisés" caption="Les évènements et la base de données deviennent plus complets et agréables sur VX Ace." >}}

Une traduction française amatrice est réalisée par Kaila et Arthur Jeannin, alias Kitu, pour la communauté [RPG Maker Détente]({{< ref "communautes.md#rpg-maker-détente" >}}). Degica récupère plus tard cette traduction pour l'intégrer à une mise à jour distribuée sur Steam. Cependant, la qualité de la traduction est altérée au fil des mises à jour, si bien qu'Arthur décide de modifier la traduction de Steam, avec l'aide d'Aurélien Dos Santos, pour y réintégrer la traduction de RPG Maker Détente et corriger quelques détails. La modification est officiellement ajoutée le 10 mai 2018.

## RPG Maker MV

*Section vide.*

## RPG Maker MZ

*Section vide.*

## Versions console

### RPG Maker GB

{{< figure class="align-right" src="/rpgmaker/historique/rpg-maker-gb.png" alt="Captures d'écran de RPG Maker GB." >}}

Le premier RPG Maker de poche ! Sorti le 17 mars 2000, il permet de créer des petits RPG facilement et n'importe où. On peut enregistrer des raccourcis pour écrire facilement les mots fréquemment utilisés. Les combats en vue de face rappelle beaucoup ceux de Dragon Quest sur la même console, les arrière-plans en moins. Une traduction anglaise non officielle de l'éditeur a été réalisée par MageCraft Translations, la dernière version datant de janvier 2002[^Traduction GB].

[^Traduction GB]: [Translations - RPG Tsukuru GB](https://www.romhacking.net/translations/42/), Romhacking.net

Le programme comporte quelques bugs et certains aspects pourraient être améliorés, mais la proposition est convaincante et les musiques sont particulièrement appréciées. Field 1, en particulier, a acquis une petite réputation au sein de la communauté[^RMGB Blog Post]. Pour commémorer la sortie du logiciel, l'évènement "Tag Team Maker Contest" fut organisé[^FAQ TABITEAM] dans lequel les participants devaient créer un jeu en duo en tirant parti de la fonction de partage par câble link[^Concours GB]. Le jeu ayant gagné le Grand Prix a ensuite été intégré à RPG Maker GB 2.

{{< nicovideo sm17957227 "RPG Maker GB – Field 1" >}}

[^RMGB Blog Post]: [『RPGツクールGB』](http://tukutuku-con.blogspot.com/2019/03/blog-post.html), RPGツクールの森, March 28, 2019

[^FAQ TABITEAM]: [『RPGツクールGB講座 - よくある質問』](http://tabiteam.s16.xrea.com/gbkouza-situmon.html), TABITEAM

[^Concours GB]: Résultats du concours, tkool.jp ([archive](http://web.archive.org/web/20080217005320/http://tkool.jp/products/rpggb/tagkon/tagkon_2.html))

L'espace disponible dans la cartouche permet de sauvegarder un jeu de quelques heures. Pour étendre la capacité de stockage, ASCII a mis sur le marché le Turbo File GB, un accessoire de stockage permettant de stocker plusieurs jeux sans problème.

{{< figure class="align-right" src="/rpgmaker/historique/rpg-maker-gb2.jpg" >}}

### Taro the Space Alien in RPG Maker GB 2

Cette nouvelle version, sortie le 20 juillet 2001[^Wikipedia JP], contient la même base que RPG Maker GB et, chose unique dans la série, met en avant une collaboration avec un manga, Taro the Space Alien, publié dans le Monthly CoroCoro Comic.

Monthly CoroCoro Comic est un magazine de prépublication de mangas destiné aux enfants, connu pour publier des histoires en lien avec l'univers du jeu vidéo. Bien que la collaboration avec Taro soit parue étrange aux yeux de la communauté RPG Maker japonaise ; il est supposé qu'Enterbrain tentait plutôt d'attirer une nouvelle audience[^RMGB2 Blog Post]. Le manga, disponible uniquement en japonais, raconte l'histoire de Takashi, un écolier dont la classe accueille Taro, nouvel élève qui se révèle être un alien. Takashi, intrigué, tente de percer le mystère autour des origines de Taro. RPG Maker GB 2 comprend un jeu d'exemple avec les deux personnages qui expliquent d'une façon accessible aux débutants comment réaliser un RPG.

L'autre jeu d'exemple, Monster School (MONSTERスクール), n'est autre que le gagnant du "Tag Team Maker Contest" ayant eu lieu pour commémorer la sortie de RPG Maker GB. Le jeu est particulièrement bien réalisé, ce qui en fait une bonne référence pour les apprentis créateurs[^RMGB2 Blog Post].

{{< figure src="/rpgmaker/historique/gb2-nouveautes.png" caption="Les nouveautés de RPG Maker GB 2." >}}

Le logiciel est très similaire, les ajouts notables étant de nouvelles images de monstres ainsi que l'apparition des images de visage et de scène. De plus, le menu de debug, que l'on ouvre avec SELECT en cours de jeu, a été étoffé de plusieurs options intéressantes. On peut maintenant y modifier l'équipe, changer le niveau et les caractéristiques des personnages, s'ajouter des objets et de l'argent, ainsi que réinitialiser la position du véhicule[^TABITEAM GB].

[^RMGB2 Blog Post]: [『RPGツクールGB2』](http://tukutuku-con.blogspot.com/2019/09/rpggb2.html), RPGツクールの森, September 9, 2019

[^TABITEAM GB]: [『RPGツクールGB講座 - 製品紹介』](http://tabiteam.s16.xrea.com/gbkouza-seihin.html), TABITEAM

[^Wikipedia JP]: [『RPGツクール』](https://ja.wikipedia.org/wiki/RPG%E3%83%84%E3%82%AF%E3%83%BC%E3%83%AB), Wikipedia

### RPG Maker Advance

Sortie uniquement au Japon le 25 avril 2003, cette version Game Boy Advance propose des graphismes soignés et une vue de côté pendant les combats. La volonté des développeurs est d'unir les deux activités séparées que sont la création et le jeu.[^Tkool History]

[^Tkool History]: 『RPGツクールの歴史』, ツクール ([archive](https://web.archive.org/web/20070717234604/http://www.enterbrain.co.jp/tkool/histry.html))

Le câble link de la Game Boy peut être utilisé pour envoyer ses créations vers d'autres consoles. De plus, en branchant le Turbo File Advance, un accessoire de stockage prévu pour les jeux d'ASCII et conçu en collaboration avec Sammy, il est possible de stocker jusqu'à 15 sauvegardes différentes afin de pallier à la limite d'une cartouche GBA[^GBA Gamekult].

[^GBA Gamekult]: Puyo, [« RPG Maker Advance retardé »](https://www.gamekult.com/actualite/rpg-maker-advance-retarde-22421.html), Gamekult, 9 décembre 2002
