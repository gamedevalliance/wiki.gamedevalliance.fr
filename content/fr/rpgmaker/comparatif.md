---
title: "Comparatif des versions de RPG Maker"
description: "Découvrez quel est le meilleur RPG Maker pour votre projet ! Comparez les différentes versions de RPG Maker à travers plusieurs catégories et choisissez celui qui vous conviendra le mieux."
portail: rpgmaker
menu:
  rpgmaker:
    name: "Comparatif des versions"
    parent: "decouvrir"
    weight: 2
---

Régulièrement sur notre [serveur Discord](https://discord.gg/RrBppaj) revient la question du meilleur RPG Maker à utiliser. La réponse n'est pas simple, puisqu'aucun RPG Maker n'est absolument meilleur qu'un autre. Chaque version possède des avantages et des inconvénients, qui pèseront différemment dans la balance en fonction du projet que vous souhaitez réaliser. Afin de vous aiguiller le plus précisément possible, voici un comparatif des logiciels détaillé pour chaque aspect de la création de jeu.

## Avec lequel débuter ?

La plupart des utilisateurs s'accordent à dire que RPG Maker VX Ace est la version la plus agréable à utiliser pour un débutant. La base de données est complète et bien organisée et le mapping, bien que relativement limité, est très simple à prendre en main.

RPG Maker MV lui ressemble beaucoup et on pourrait croire qu'il est aussi simple. Cependant, il existe des différences auxquelles on ne s'attend pas et qui peuvent être source d'erreurs et de découragements :

- La traduction française est de très mauvaise qualité, au point que l'intitulé de certaines commandes soit erroné ou manque de clarté pour un non-initié.
- Les scripts sont inaccessibles depuis l'éditeur et sont moins bien organisés, ce qui a tendance à rebuter les curieux souhaitant comprendre le code du jeu.
- Des utilisateurs ont parfois des erreurs de fichiers corrompus dans leur projet, impossibles à restaurer, malgré une utilisation normale du logiciel.
- Certains projets contiennent des bugs après les mises à jour, qui sont pourtant automatiques.

Il est toujours utile de maitriser un programme de gestion de versions avant de se lancer dans un projet sérieux mais c'est particulièrement essentiel sur RPG Maker MV.

RPG Maker XP est encore utilisé par une petite part des utilisateurs qui préfèrent son système de mapping.

Enfin, RPG Maker 2003 est considéré comme obsolète par la communauté francophone. Les utilisateurs de ce logiciel sont quasiment tous passés à RPG Maker VX Ace avec le script [ORMS]({{< ref "orms.md" >}}), qui réplique le style pixel art.

## Systèmes supportés

Tous les RPG Maker fonctionnent sur Windows uniquement, à l'exception de [RPG Maker MV]({{< ref "/rpgmaker/serie.md#rpg-maker-mv" >}}) qui peut également être utilisé sur macOS et Linux. Grâce à la technologie HTML5, les jeux réalisés avec RPG Maker MV peuvent aussi être joués sur navigateur, Android et iOS avec un degré de succès variable selon les appareils. Pour plus de détails, se référer à la section [Performances](#performances).

### Outils supplémentaires

Plusieurs outils sont développés afin d'étendre les systèmes supportés par les jeux RPG Maker. Voici les deux projets les plus aboutis et viables.

[EasyRPG Player](https://easyrpg.org/) est un programme gratuit et open source permettant d'interpréter les jeux [RPG Maker 2000]({{< ref "/rpgmaker/serie.md#rpg-maker-2000" >}}) et [2003]({{< ref "/rpgmaker/serie.md#rpg-maker-2003" >}}), comme s'ils étaient lancés avec l'exécutable normal. Le programme est disponible sur Windows, macOS, Linux, Android, iOS et plusieurs consoles supportant les homebrews. Certaines fonctionnalités de RPG Maker ne sont pas encore disponibles mais les jeux ne les utilisant pas fonctionnent normalement.

[mkxp](https://github.com/Ancurio/mkxp) est une implémentation open source de l'interface RGSS utilisée par [RPG Maker XP]({{< ref "/rpgmaker/serie.md#rpg-maker-xp" >}}), [VX]({{< ref "/rpgmaker/serie.md#rpg-maker-vx" >}}) et [VX Ace]({{< ref "/rpgmaker/serie.md#rpg-maker-vx-ace" >}}), permettant de lancer les jeux nativement sur Linux. L'auteur a notamment réalisé le portage de *To the Moon* vers Linux.

## Aspect graphique

Consulter les [différences esthétiques entre les logiciels]({{< ref "/rpgmaker/mapping/comparatif.md" >}}).

## Musiques et effets sonores

*Section vide. Si vous possédez des informations, {{< editpage "modifiez cette page" >}} ou contactez-nous.*

## Langage de script

A partir de RPG Maker XP, il est possible de programmer ses propres scripts ou d'en obtenir sur Internet. L'utilité des scripts peut varier du simple correctif au changement profond du comportement du jeu. Ils permettent de modifier le système de combat, de déplacement, de message, etc.

Sauf dans certains cas exceptionnels, un script est uniquement compatible avec la version de RPG Maker pour laquelle il est écrit, en raison des évolutions du langage à chaque itération du logiciel. On peut donc considérer qu'un script de qualité constitue un atout pour le logiciel compatible en raison de son caractère exclusif. Par exemple, l'[AMS Ultimate]({{< ref "amsultimate.md" >}}) existe uniquement sur RPG Maker XP et ne connait pas d'équivalent pour les autres versions, tout comme [RME]({{< ref "rme.md" >}}) existe uniquement sur RPG Maker VX Ace.

La révolution des scripts rend RPG Maker 2000 et 2003 obsolètes. Leur style visuel, qui constituait leur unicité dans la série, est d'ailleurs facilement réplicable sur RPG Maker VX Ace avec le script [ORMS]({{< ref "orms.md" >}}).

## Système de combat

*Section vide. Si vous possédez des informations, {{< editpage "modifiez cette page" >}} ou contactez-nous.*

## Possibilités de gameplay

En dehors des combats, les systèmes de jeu sont programmés visuellement dans des [évènements]({{< ref "evenements.md" >}}) que l'on place sur la carte. Le principe reste toujours le même, bien qu'entre les versions, certaines commandes apparaissent ou disparaissent. Ces changements minimes ne sauraient être une différenciation significative.

Par défaut, RPG Maker 2003 contient les commandes d'évènement les plus détaillées et personnalisables. En réalité, cette comparaison n'est pas vraiment pertinente car la commande d'[appel de script]({{< ref "/rpgmaker/scripts/appels.md" >}}) des logiciels suivants permettent de pallier aux éventuelles lacunes. Dans la communauté française, la plupart des utilisateurs expérimentés sur RPG Maker 2003 sont aujourd'hui passés à RPG Maker VX Ace avec [RME]({{< ref "rme.md" >}}), qui offre un meilleur équilibre entre puissance et facilité d'utilisation.

## Performances

Les jeux réalisés sur RPG Maker VX Ace sont probablement les plus fluides et stables de la série. Les jeux RPG Maker 2003 tournent également sans problème.

Le moteur de RPG Maker XP est plus problématique car plus lent et par défaut à 40 fps.

RPG Maker MV est un cas particulier puisque les jeux sont programmés en JavaScript et rendus avec WebGL. En des termes simples, cela signifie que le jeu fonctionne dans une page web et la fenêtre que l'on lance est un mini-navigateur. L'avantage est d'obtenir un jeu compatible avec n'importe quel système pouvant afficher une page web mais aux prix de performances très variables selon l'appareil. Les ordinateurs récents, optimisés pour les technologies web, n'auront pas de problème pour afficher les jeux MV à 60 fps. Par contre, un vieil ordinateur, même si sa puissance brute est meilleure, pourrait avoir du mal à tenir le rythme en raison de drivers trop vieux et non optimisés.

C'est un problème mineur dans les régions en bonne situation économique car les joueurs y renouvellent régulièrement leurs appareils. Cependant, dans les pays où la population conserve longtemps les mêmes machines, RPG Maker MV n'est pas viable car il se repose sur des technologies trop récentes. Il faut également noter que RPG Maker MV produit des jeux plus lourds, ce qui rend l'expérience moins agréable en cas de connexion Internet lente.
