---
title: "Premiers pas"
description: "Vous souhaitez découvrir RPG Maker ? Achetez-le à ces adresses puis apprenez à faire un premier jeu avec nos vidéos."
portail: rpgmaker
aliases:
    - /rpgmaker/premierspas/
    - /rpgmaker/comparatif/
    - /rpgmaker/starter-pack/
    - /rpgmaker/telecharger/
---

## Obtenir le logiciel

Les RPG Maker peuvent être achetés sur le [site officiel](http://www.rpgmakerweb.com/products), sur [Steam](http://store.steampowered.com/search/?term=RPG+Maker), sur [Humble Store](https://www.humblebundle.com/store/search?sort=bestselling&search=RPG%20Maker) et d'autres magasins. Si vous n'avez pas les moyens, vous pouvez surveiller les [périodes de soldes](https://isthereanydeal.com/game/rpgmakermv/history/).

Vous pouvez essayer les logiciels avant de les acheter en téléchargeant les [versions d'essai](http://www.rpgmakerweb.com/download/free-trials), valables 20 à 30 jours. Si la limite de temps ne vous convient pas, il existe [RPG Maker VX Ace Lite](http://store.steampowered.com/app/224280/RPG_Maker_VX_Ace_Lite/), une version limitée en fonctionnalités mais suffisante pour s'entraîner et créer des petits jeux.

La version la plus récente de RPG Maker n'est pas toujours la plus pertinente selon le projet. En cas d'hésitation, consultez le comparatif ci-dessous.

## Comparatif des versions

Régulièrement sur notre [serveur Discord](https://discord.gg/RrBppaj) revient la question du meilleur RPG Maker à utiliser. La réponse n'est pas simple, puisqu'aucun RPG Maker n'est absolument meilleur qu'un autre. Chaque version possède des avantages et des inconvénients, qui pèseront différemment dans la balance en fonction du projet que vous souhaitez réaliser. Afin de vous aiguiller le plus précisément possible, voici un comparatif des logiciels détaillé pour chaque aspect de la création de jeu.

{{< youtube 8RS2_VDglYM >}}

Nous omettrons les versions quasiment inutilisées aujourd'hui, à savoir [RPG Maker 95]({{< ref "rpgmaker/historique.md#rpg-maker-95" >}}), [2000]({{< ref "rpgmaker/historique.md#rpg-maker-2000" >}}) et [VX]({{< ref "rpgmaker/historique.md#rpg-maker-vx" >}}), car elles n'ont pas de particularité intéressante par rapport aux versions plus populaires.

### Avec lequel débuter ?

La plupart des utilisateurs s'accordent à dire que [RPG Maker VX Ace]({{< ref "rpgmaker/historique.md#rpg-maker-vx-ace" >}}) est la version la plus agréable à utiliser pour un débutant. La base de données est complète et bien organisée et le mapping, bien que relativement limité, est très simple à prendre en main.

[RPG Maker MV]({{< ref "rpgmaker/historique.md#rpg-maker-mv" >}}) lui ressemble beaucoup et on pourrait croire qu'il est aussi simple. Cependant, il existe des différences auxquelles on ne s'attend pas et qui peuvent être source d'erreurs et de découragements :

- Les scripts sont inaccessibles depuis l'éditeur et sont moins bien organisés, ce qui a tendance à rebuter les curieux souhaitant comprendre le code du jeu.
- Des utilisateurs ont parfois des erreurs de fichiers corrompus dans leur projet, impossibles à restaurer, malgré une utilisation normale du logiciel.
- Certains projets contiennent des bugs après les mises à jour, qui sont pourtant automatiques.

Il est toujours utile de maitriser un programme de gestion de versions avant de se lancer dans un projet sérieux mais c'est particulièrement essentiel sur RPG Maker MV.

[RPG Maker XP]({{< ref "rpgmaker/historique.md#rpg-maker-xp" >}}) est encore utilisé par une petite part des utilisateurs qui préfèrent son système de mapping.

Enfin, [RPG Maker 2003]({{< ref "rpgmaker/historique.md#rpg-maker-xp" >}}) est toujours utilisable et se démarque par son style graphique rétro, mais il est considéré comme obsolète par certains membres la communauté francophone. Les utilisateurs de ce logiciel sont souvent passés à RPG Maker VX Ace avec le script [ORMS]({{< ref "orms.md" >}}), qui réplique le style pixel art.

### Systèmes supportés

Tous les RPG Maker fonctionnent nativement sur Windows, à l'exception de RPG Maker MV qui peut également être utilisé sur macOS et Linux. Cependant les anciennes versions de RPG Maker fonctionnent très bien sur Linux en passant par Steam ([plus d'infos](https://en.wikipedia.org/wiki/Valve_Proton)).

Grâce à la technologie HTML5, les jeux réalisés avec RPG Maker MV peuvent être joués sur navigateur, mais aussi sur Android et iOS, bien que sur ces deux plateformes la qualité de l'expérience soit moindre, en raison d'une interface inadaptée au tactile et à des problèmes de performance.

#### Outils supplémentaires

Plusieurs outils sont développés afin d'étendre les systèmes supportés par les jeux RPG Maker. Voici les deux projets les plus aboutis et viables.

[EasyRPG Player](https://easyrpg.org/) est un programme gratuit et open source permettant d'interpréter les jeux RPG Maker 2000 et 2003, comme s'ils étaient lancés avec l'exécutable normal. Le programme est disponible sur Windows, macOS, Linux, Android, iOS et plusieurs consoles supportant les homebrews. Certaines fonctionnalités de RPG Maker ne sont pas encore disponibles mais les jeux ne les utilisant pas fonctionnent normalement.

[mkxp](https://github.com/Ancurio/mkxp) est une implémentation open source de l'interface RGSS utilisée par RPG Maker XP, VX et VX Ace, permettant de lancer les jeux nativement sur Linux. L'auteur a notamment réalisé le portage de *To the Moon* vers Linux.

### Aspect graphique

#### RPG Maker 2000 et 2003

{{< figure src="/rpgmaker/comparatif/2003.png" caption="Carte de Bienvenue à l'Auberge par Mr Alf." >}}

Les graphismes colorés et pixellisés apportent un charme unique à la série. Le petit format permet aux amateurs de pixel art et aux débutants de personnaliser leurs ressources plus facilement. Le logiciel est livré avec cinq tilesets :

- Carte du monde basique et éléments de décor fréquemment utilisés.
- Extérieur : végétation et chemins, décorations de ville, enceintes et deux types de maison.
- Intérieur : décorations de maisons, magasins et châteaux.
- Donjon : grottes volcaniques, glaciales ou en pierre, avec quelques décorations et des rails.
- Bateau modulable et complet bien que difficile à utiliser.

Le contenu des tilesets est cependant très limité pour produire un jeu complet. L'espace est rempli par des éléments récopiés dans deux ou trois tilesets différents, diminuant considérablement la variété des décors. C'est pourquoi peu de productions de l'époque utilisent uniquement les ressources de base.

#### RPG Maker XP

{{< figure src="/rpgmaker/comparatif/xp.png" caption="Carte réalisée sur RPG Maker XP par Heretic." >}}

Les décors de [RPG Maker XP]({{< ref "/rpgmaker/historique.md#rpg-maker-xp" >}}) ont des couleurs plus douces. Le style se veut réaliste, avec des éléments beaucoup plus grands. La cinquantaine de tilesets propose des environnements plus variés et complets que dans les autres logiciels.

- 10 types d'extérieurs à explorer : Plaines, Bois, Forêt, Montagne, Plage, Désert, Marais, Plaines enneigées, Grand pont, Ruines.
- 8 types de villes : Fortifiée, Portuaire, Classique, Forestière, Minière, du Désert, Enneigée, Ferme. Pour chacune de ces villes, il existe un tileset supplémentaire pour les intérieurs.
- Un intérieur spécial pour les magasins, avec une grande variété de décorations.
- Château, Forteresse, Tour, et leurs intérieurs, avec un intérieur supplémentaire pour des geôles.
- Eglise, Bateau, Paradis, et leurs intérieurs.
- 9 types de donjon : Antre du démon (extérieur et intérieur), Cavernes de Terre, de Feu, de Glace et d'Eau, Mine, Egouts, Grotte organique et Dimension maléfique.

Chaque tileset correspondant à un environnement très spécifique, ils pourront parfois être contraignants à utiliser. Heureusement, RPG Maker XP supporte les tilesets d'une taille infinie ; vous pouvez donc mettre plusieurs tilesets bout à bout dans un éditeur d'image, et ainsi obtenir les ressources les plus flexibles de la série.

#### RPG Maker VX et VX Ace

{{< figure src="/rpgmaker/comparatif/vx.png" caption="Carte réalisée sur RPG Maker VX Ace par Grim." >}}

Le style graphique redevient plus stylisé, rappelant les RPG rétro à la Dragon Quest tout en tirant parti de la précision apportée par les cases de 32 pixels. Les quatre tilesets inclus sont très denses :

- Carte du monde complète et variée
- Extérieur : 40 murs et toits, végétation et décoration de villes et de temples.
- Intérieur : 24 murs et sols, décorations de maisons, magasins et chateaux.
- Donjons : 24 murs et sols, décorations de grottes, mines et temples.

Les ressources de [RPG Maker VX Ace]({{< ref "/rpgmaker/historique.md#rpg-maker-vx-ace" >}}) sont suffisamment variées pour réaliser un jeu complet. La structure principalement composée d'autotiles permet de condenser tous les murs en un petit nombre de tilesets, ce qui est très pratique pour accéder à une variété d'éléments en un instant. Cela pourrait être un inconvénient si vous souhaitez utiliser vos propres ressources : il est obligatoire de suivre cette structure particulière, et le logiciel ne gère que deux couches de mapping.

#### RPG Maker MV

*Section vide. Si vous possédez des informations, {{< editpage "modifiez cette page" >}} ou contactez-nous.*

### Musiques et effets sonores

Chaque version de RPG Maker possède une banque de musiques et de sons différente. Tout comme pour les graphismes, la licence stipule que l'on peut récupérer les musiques de n'importe quelle version pour les utiliser sur une autre, tant que l'on a acheté tous les logiciels concernés. Notez que jusqu'à RPG Maker XP, les musiques étaient au format MIDI, donc elles sonneront différemment selon l'endroit où vous les jouez.

### Langage de script

A partir de RPG Maker XP, il est possible de programmer ses propres scripts ou d'en obtenir sur Internet. L'utilité des scripts peut varier du simple correctif au changement profond du comportement du jeu. Ils permettent de modifier le système de combat, de déplacement, de message, etc.

Sauf dans certains cas exceptionnels, un script est uniquement compatible avec la version de RPG Maker pour laquelle il est écrit, en raison des évolutions du langage à chaque itération du logiciel. On peut donc considérer qu'un script de qualité constitue un atout pour le logiciel compatible en raison de son caractère exclusif. Par exemple, l'[AMS Ultimate]({{< ref "amsultimate.md" >}}) existe uniquement sur RPG Maker XP et ne connait pas d'équivalent pour les autres versions, tout comme [RME]({{< ref "/content/rme.md" >}}) existe uniquement sur RPG Maker VX Ace.

La révolution des scripts rend RPG Maker 2000 et 2003 obsolètes. Leur style visuel, qui constituait leur unicité dans la série, est d'ailleurs facilement réplicable sur RPG Maker VX Ace avec le script [ORMS]({{< ref "orms.md" >}}).

### Système de combat

RPG Maker propose un système de combat traditionnel au tour par tour, rappelant les jeux de l'époque NES et SNES. Le joueur peut contrôler une équipe allant jusqu'à 4 personnages à la fois. Les mécaniques de jeu sont très similaires entre les versions, mais la base de données permet une personnalisation plus précise à partir de RPG Maker VX.

Tous les RPG Maker proposent une vue de face en combat, similaire à celle de Dragon Quest, à l'exception de RPG Maker 2003 qui offre une vue de côté à la Final Fantasy. RPG Maker MV permet également d'afficher la vue de côté en cochant une case dans la base de données.

Notez que la vue de combat et les mécaniques peuvent être personnalisées en téléchargeant des scripts.

### Possibilités de gameplay

En dehors des combats, les systèmes de jeu sont programmés visuellement dans des [évènements]({{< ref "rpgmaker/vue-d-ensemble.md#les-evenements" >}}) que l'on place sur la carte. Le principe reste toujours le même, bien qu'entre les versions, certaines commandes apparaissent ou disparaissent. Ces changements minimes ne sauraient être une différenciation significative.

Par défaut, RPG Maker 2003 contient les commandes d'évènement les plus détaillées et personnalisables. En réalité, cette comparaison n'est pas vraiment pertinente car la commande d'appel de script des logiciels suivants permettent de pallier aux éventuelles lacunes. Dans la communauté française, la plupart des utilisateurs expérimentés sur RPG Maker 2003 sont aujourd'hui passés à RPG Maker VX Ace avec [RME]({{< ref "/content/rme.md" >}}), qui offre un meilleur équilibre entre puissance et facilité d'utilisation.

### Performances

Les jeux réalisés sur RPG Maker VX Ace sont probablement les plus fluides et stables de la série. Les jeux RPG Maker 2003 tournent également sans problème.

Le moteur de RPG Maker XP est plus problématique car plus lent et par défaut à 40 fps.

RPG Maker MV est un cas particulier puisque les jeux sont programmés en JavaScript et rendus avec WebGL. En des termes simples, cela signifie que le jeu fonctionne dans une page web et la fenêtre que l'on lance est un mini-navigateur. L'avantage est d'obtenir un jeu compatible avec n'importe quel système pouvant afficher une page web mais aux prix de performances très variables selon l'appareil. Les ordinateurs récents, optimisés pour les technologies web, n'auront pas de problème pour afficher les jeux MV à 60 fps. Par contre, un vieil ordinateur, même si sa puissance brute est meilleure, pourrait avoir du mal à tenir le rythme en raison de drivers trop vieux et non optimisés.

C'est un problème mineur dans les régions en bonne situation économique car les joueurs y renouvellent régulièrement leurs appareils. Cependant, dans les pays où la population conserve longtemps les mêmes machines, RPG Maker MV n'est pas viable car il se repose sur des technologies trop récentes. Il faut également noter que RPG Maker MV produit des jeux plus lourds, ce qui rend l'expérience moins agréable en cas de connexion Internet lente.

## Ressources pour apprendre

Vous venez d'installer RPG Maker ? Familiarisez-vous avec le logiciel grâce à nos [tutoriels vidéo](https://www.youtube.com/playlist?list=PLHKUrXMrDS5ttOdEh5tNuEi96Vv--TVLE).

### RPG Maker VX Ace Starter Pack

RPG Maker VX Ace Starter Pack est un projet regroupant un panel complet d'exemples afin de guider et inspirer les débutants dans la création de leur jeu.

- [Télécharger](https://gamedevalliance.itch.io/starterpack) la dernière version du Starter Pack.
- [Consulter](https://github.com/gamedevalliance/rmvxa-starter-pack) le projet sur GitHub pour y contribuer.

Les exemples sont classés dans quatre catégories :

- **Mapping :** exemples d'utilisation des RTP (ressources incluses au logiciel)
   - **Intérieurs :** maisons, boutiques, châteaux, donjons, etc.
   - **Extérieurs :** jardins, forêts, temples, etc.
   - **Éléments individuels :** une variété de formes inspirantes pour vos escaliers, bâtiments, cascades, etc.
- **Gameplay :** guides et systèmes conçus en évènements, prêts à l'emploi ou nécessitant une personnalisation.
- **Mise en scène :** conseils et astuces pour améliorer le rythme et l'impact des scènes narratives.
- **Scripts :** scripts populaires et utiles, voire indispensables à la plupart des projets.

![Carte d'intérieur moderne](/rpgmaker/starterpack/interieur.png)

#### Crédits

RPG Maker VX Ace Starter Pack est une initiative de No0ony. Toutes les personnes alimentant ce projet sont bénévoles.

Les cartes, systèmes et autres éléments du projet sont réutilisables librement sans citer l'auteur d'origine.

Les rayons du soleil dans le dossier `Graphics/Pictures` sont réalisés par Benben et distribués en open source, ce qui signifie qu'ils sont modifiables et réutilisables librement.

![Carte d'entrée de temple](/rpgmaker/starterpack/temple.png)
