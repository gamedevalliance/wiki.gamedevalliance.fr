---
title: "Questions fréquentes"
description: "Vous débutez sur RPG Maker ? Nous pouvons sûrement vous aider. Voici les réponses à toutes les questions que peuvent se poser les débutants."
portail: rpgmaker
menu:
  rpgmaker:
    parent: "decouvrir"
    weight: 5
aliases:
    - /faq/
---

Cette page recense diverses questions que se posent régulièrement les débutants sur notre [serveur Discord](https://discord.gg/RrBppaj). Si vous ne trouvez pas l'information dont vous avez besoin, n'hésitez pas à nous demander de l'aide.

## Mapping

### J'ai peu de décorations pour dessiner ma carte

Le panneau à gauche de l'éditeur est votre tileset. Par défaut, le tileset sélectionné sert à dessiner des cartes du monde, c'est pourquoi vous n'avez pas tous les décors. En bas à gauche de RPG Maker, cliquez-droit sur le nom de votre carte pour ouvrir ses propriétés, puis changez de tileset. Les débutants font souvent leurs premières cartes avec le tileset Extérieur.

{{< figure src="/images/rpgmaker/faq/tileset.png" alt="Changement de tileset" caption="Changement de tileset dans les propriétés de la carte." >}}

## Évènements

### Passer d'une carte à une autre

Activez la couche des évènements puis cliquez-droit sur une case de la carte pour créer un évènement rapide de téléportation. Choisissez la destination et le regard du personnage à l'arrivée. Si vous le souhaitez, vous pouvez examiner comment l'évènement fonctionne en double-cliquant dessus.

{{< figure src="/images/rpgmaker/faq/teleportation.png" alt="Evènements rapides" caption="Création d'un évènement rapide sur la carte." >}}

### Créer une cinématique

Vous pouvez faire en sorte qu'un évènement se lance dès l'arrivée du joueur sur la carte. Pour cela, en bas à gauche de la fenêtre de l'évènement, choisissez le [mode de déclenchement]({{< ref "evenements.md#declenchement" >}}) Exécution automatique. Pour réaliser une cinématique, la pratique la plus courante est de créer un évènement sans apparence dans un coin de la carte puis d'y insérer tous les dialogues et autres éléments de mise en scène. N'oubliez pas de désactiver l'évènement après votre cinématique, sans quoi elle se jouera en boucle.

{{< figure src="/images/rpgmaker/faq/automatique.png" alt="Choix du mode de déclenchement d'un évènement" caption="Choix du mode de déclenchement d'un évènement." >}}

### Désactiver un évènement

Pour effacer un évènement temporairement, utilisez la commande [Effacer cet évènement]({{< ref "evenements.md#effacer-cet-évènement" >}}) à la fin de l'évènement. Avec cette méthode, en quittant la carte puis y retournant, l'évènement réapparaîtra. C'est tout à fait normal car la commande Effacer cet évènement n'a pas un effet permanent.

Pour une suppression permanente, au lieu d'utiliser la commande Effacer cet évènement, utilisez [Modifier un interrupteur local]({{< ref "evenements.md#modifier-un-interrupteur-local" >}}) afin d'activer l'interrupteur local A. Ensuite, créez une [nouvelle page]({{< ref "evenements.md#pages-et-conditions-d-activation" >}}) dans votre évènement, que vous laisserez vide. Dans les conditions d'activation de cette nouvelle page vide, cochez l'interrupteur local A. Ainsi, après s'être joué, l'évènement sera bloqué indéfiniment dans une page 2 qui n'exécute rien. Votre problème est réglé !

{{< figure src="/images/rpgmaker/faq/page2.png" caption="Création de la deuxième page vide." >}}

## Questions générales

### Comment travailler à plusieurs ?

Editer un projet à plusieurs est possible mais demande une bonne compréhension des données de RPG Maker. Toutes les informations sont dans le [guide du travail en équipe]({{< ref "collaborer.md" >}}).

### Existe-t-il des RPG Maker gratuits ?

Tous les RPG Maker sont payants et peuvent être achetés sur le [site officiel](http://www.rpgmakerweb.com/products), sur [Steam](http://store.steampowered.com/search/?term=RPG+Maker), sur [Humble
Store](https://www.humblebundle.com/store/search?sort=bestselling&search=RPG%20Maker), et d'autres magasins. Si vous n'avez pas les moyens, vous pouvez surveiller les [périodes de soldes](https://isthereanydeal.com/game/rpgmakermv/history/).

Vous pouvez essayer les logiciels avant de les acheter en téléchargeant les [versions d'essai](http://www.rpgmakerweb.com/download/free-trials), valables 20 à 30 jours.

Si la limite de temps ne vous convient pas, il existe [RPG Maker VX Ace Lite](http://store.steampowered.com/app/224280/RPG_Maker_VX_Ace_Lite/), une version limitée en fonctionnalités mais suffisante pour s'entraîner et créer des petits jeux.

### Trouver d'autres ressources

Consultez la liste des DLC pour obtenir des packs officiels et payants. Si vous préférez utiliser des ressources gratuites réalisées par les utilisateurs, le forum officiel comporte un espace organisé à cet effet. Pour aller plus loin, consultez notre [guide sur le partage de ressources](https://rpgmakeralliance.com/d/105). Voici une liste d'adresses utiles pour mener vos recherches :

- [Liste des packs](http://www.rpgmakerweb.com/products/resources) sur le site officiel
- [Liste des DLC](https://store.steampowered.com/dlc/220700) pour RPG Maker VX Ace sur Steam
- [Liste des DLC](https://store.steampowered.com/dlc/363890) pour RPG Maker MV sur Steam
- [Catégorie des ressources](https://forums.rpgmakerweb.com/index.php?categories/resource-showcase.27/) sur le forum officiel
- [OpenGameArt.org](https://opengameart.org/) pour tous types d'assets gratuits
- [itch.io](https://itch.io/game-assets) contient de nombreux packs gratuits et payants
- [Kenney](http://www.kenney.nl/assets) propose des assets dans le domaine public
- [Game-icons.net](http://game-icons.net/) offre une variété d'icônes dans un style simple mais expressif

Quelle que soit la source, vérifiez sous quelles conditions l'artiste vous autorise à utiliser ses ressources et créditez-le si nécessaire.

### Problèmes techniques sur RPG Maker

En cas de bug dans l'éditeur de RPG Maker ou dans un jeu, consultez la [liste des erreurs fréquentes]({{< ref "erreurs.md" >}}).

### Capturer son écran et le montrer sur Discord

- Pour capturer tout l'écran, appuyez sur la touche dédiée de votre clavier, souvent appelée `Impr écran` ou `Prnt scrn`.
- Pour capturer la fenêtre active uniquement, appuyez sur `Alt + Impr écran`.
- Pour capturer un rectangle précis, appuyez sur `Windows + Shift + S`.

Dans le champ de saisie de message de Discord, collez l'image avec `Ctrl+V`.

Pour les utilisateurs expérimentés, nous recommandons le programme [ShareX](https://getsharex.com/) afin de paramétrer vos propres raccourcis clavier et la mise en ligne automatisée de vos images sur [Imgur](https://imgur.com/).
