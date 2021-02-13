---
title: "Résolution de problèmes"
description: "Vous débutez sur RPG Maker ? Nous pouvons sûrement vous aider. Voici les réponses à toutes les questions que peuvent se poser les débutants."
portail: rpgmaker
aliases:
    - /rpgmaker/problemes/
---

Cette page recense diverses questions que se posent régulièrement les débutants sur notre [serveur Discord](https://discord.gg/RrBppaj). Si vous ne trouvez pas l'information dont vous avez besoin, n'hésitez pas à nous demander de l'aide.

## Questions fréquentes

### J'ai peu de décorations pour dessiner ma carte

Le panneau à gauche de l'éditeur est votre tileset. Par défaut, le tileset sélectionné sert à dessiner des cartes du monde, c'est pourquoi vous n'avez pas tous les décors. En bas à gauche de RPG Maker, cliquez-droit sur le nom de votre carte pour ouvrir ses propriétés, puis changez de tileset. Les débutants font souvent leurs premières cartes avec le tileset Extérieur.

{{< figure src="/rpgmaker/faq/tileset.png" alt="Changement de tileset" caption="Changement de tileset dans les propriétés de la carte." >}}

### Passer d'une carte à une autre

Activez la couche des évènements puis cliquez-droit sur une case de la carte pour créer un évènement rapide de téléportation. Choisissez la destination et le regard du personnage à l'arrivée. Si vous le souhaitez, vous pouvez examiner comment l'évènement fonctionne en double-cliquant dessus.

{{< figure src="/rpgmaker/faq/teleportation.png" alt="Evènements rapides" caption="Création d'un évènement rapide sur la carte." >}}

### Créer une cinématique

Vous pouvez faire en sorte qu'un évènement se lance dès l'arrivée du joueur sur la carte. Pour cela, en bas à gauche de la fenêtre de l'évènement, choisissez le [mode de déclenchement]({{< ref "rpgmaker/vue-d-ensemble.md#declenchement" >}}) Exécution automatique. Pour réaliser une cinématique, la pratique la plus courante est de créer un évènement sans apparence dans un coin de la carte puis d'y insérer tous les dialogues et autres éléments de mise en scène. N'oubliez pas de désactiver l'évènement après votre cinématique, sans quoi elle se jouera en boucle.

{{< figure src="/rpgmaker/faq/automatique.png" alt="Choix du mode de déclenchement d'un évènement" caption="Choix du mode de déclenchement d'un évènement." >}}

### Désactiver un évènement

Pour effacer un évènement temporairement, utilisez la commande [Effacer cet évènement]({{< ref "rpgmaker/vue-d-ensemble.md#effacer-cet-évènement" >}}) à la fin de l'évènement. Avec cette méthode, en quittant la carte puis y retournant, l'évènement réapparaîtra. C'est tout à fait normal car la commande Effacer cet évènement n'a pas un effet permanent.

Pour une suppression permanente, au lieu d'utiliser la commande Effacer cet évènement, utilisez [Modifier un interrupteur local]({{< ref "rpgmaker/vue-d-ensemble.md#modifier-un-interrupteur-local" >}}) afin d'activer l'interrupteur local A. Ensuite, créez une [nouvelle page]({{< ref "rpgmaker/vue-d-ensemble.md#pages-et-conditions-d-activation" >}}) dans votre évènement, que vous laisserez vide. Dans les conditions d'activation de cette nouvelle page vide, cochez l'interrupteur local A. Ainsi, après s'être joué, l'évènement sera bloqué indéfiniment dans une page 2 qui n'exécute rien. Votre problème est réglé !

{{< figure src="/rpgmaker/faq/page2.png" caption="Création de la deuxième page vide." >}}

### Comment travailler à plusieurs ?

Editer un projet à plusieurs est possible mais demande une bonne compréhension des données de RPG Maker. Toutes les informations sont dans le [guide du travail en équipe]({{< ref "travailler-en-equipe.md" >}}).

### Existe-t-il des RPG Maker gratuits ?

Tous les RPG Maker sont payants et peuvent être achetés sur le [site officiel](http://www.rpgmakerweb.com/products), sur [Steam](http://store.steampowered.com/search/?term=RPG+Maker), sur [Humble
Store](https://www.humblebundle.com/store/search?sort=bestselling&search=RPG%20Maker), et d'autres magasins. Si vous n'avez pas les moyens, vous pouvez surveiller les [périodes de soldes](https://isthereanydeal.com/game/rpgmakermv/history/).

Vous pouvez essayer les logiciels avant de les acheter en téléchargeant les [versions d'essai](http://www.rpgmakerweb.com/download/free-trials), valables 20 à 30 jours.

Si la limite de temps ne vous convient pas, il existe [RPG Maker VX Ace Lite](http://store.steampowered.com/app/224280/RPG_Maker_VX_Ace_Lite/), une version limitée en fonctionnalités mais suffisante pour s'entraîner et créer des petits jeux.

### Trouver d'autres ressources

Consultez la liste des DLC pour obtenir des packs officiels et payants. Si vous préférez utiliser des ressources gratuites réalisées par les utilisateurs, le forum officiel comporte un espace organisé à cet effet. Voici une liste d'adresses utiles pour mener vos recherches :

- [Liste des packs](http://www.rpgmakerweb.com/products/resources) sur le site officiel
- [Liste des DLC](https://store.steampowered.com/dlc/220700) pour RPG Maker VX Ace sur Steam
- [Liste des DLC](https://store.steampowered.com/dlc/363890) pour RPG Maker MV sur Steam
- [Catégorie des ressources](https://forums.rpgmakerweb.com/index.php?categories/resource-showcase.27/) sur le forum officiel
- [OpenGameArt.org](https://opengameart.org/) pour tous types d'assets gratuits
- [itch.io](https://itch.io/game-assets) contient de nombreux packs gratuits et payants
- [Kenney](http://www.kenney.nl/assets) propose des assets dans le domaine public
- [Game-icons.net](http://game-icons.net/) offre une variété d'icônes dans un style simple mais expressif

Quelle que soit la source, vérifiez sous quelles conditions l'artiste vous autorise à utiliser ses ressources et créditez-le si nécessaire.

## Problèmes techniques fréquents

Cette page répertorie les bugs fréquents qui peuvent survenir en jouant à un jeu RPG Maker ou en utilisant l'éditeur. Si vous n'y trouvez pas de solution, parlez de votre problème sur notre [serveur Discord](https://discord.gg/RrBppaj) pour recevoir de l'aide.

## Failed to initialize DirectX Audio

Cette erreur peut survenir au lancement d'un jeu RPG Maker VX Ace ou antérieur, si vous n'avez aucune sortie son branchée à l'ordinateur. Branchez des haut-parleurs ou des écouteurs, puis relancez le jeu.

## RTP introuvables

Le RTP (Run-Time Package) contient les graphismes et sons inclus au logiciel. Si une personne obtient cette erreur lorsque vous lui envoyez votre jeu, c'est qu'il nécessite le RTP pour fonctionner. Pour rendre votre jeu indépendant du RTP, suivez notre guide pour [exporter un jeu RPG Maker VX Ace ou antérieur]({{< ref "vue-d-ensemble.md#exporter-son-jeu" >}}).

## Fichier image ou son introuvable

### Déployé avec RPG Maker MV

Parfois, un jeu qui fonctionne bien depuis l'éditeur de RPG Maker MV pourra planter après le déploiement en raison d'un fichier introuvable. Généralement, c'est parce que le logiciel a supprimé des fichiers pourtant nécessaires lors de l'export. Recommencez le déploiement en décochant l'option « Exclure les fichiers inutilisés » afin d'éviter ce comportement. Il est malheureusement nécessaire de supprimer les fichiers inutiles soi-même pour obtenir un résultat sûr.

### Caractères spéciaux

Si cela ne correspond pas à votre problème, le fichier introuvable comporte peut-être un accent. Les noms de fichier comportant des caractères spéciaux ne fonctionnent pas sur tous les systèmes et logiciels. De manière générale, en informatique, une bonne pratique est d'éviter les accents et les espaces dans vos noms de fichier pour n'utiliser que des lettres majuscules et minuscules, des tirets et des tirets bas.

## Déploiement web indisponible

Si dans la fenêtre de déploiement de RPG Maker MV, l'option pour navigateur web n'est pas présente, vous possédez une ancienne version du logiciel. Assurez-vous de garder RPG Maker MV à jour autant que possible afin d'éviter des problèmes fréquents et des incompatibilités de plugins.

## Fichier de données corrompu

![Erreur RPG Maker MV : Impossible de lire le fichier Game.rpgproject](/rpgmaker/problemes/fichiercorrompu.png)

Cette erreur arrive le plus fréquemment dans RPG Maker MV. Il est possible que vous ne puissiez plus ouvrir votre projet car le logiciel ne peut pas lire `Game.rpgproject` ou un fichier du dossier `data`, tel que `Actors.json`. Le fichier en question est probablement corrompu et vide. Récupérez le fichier depuis une sauvegarde de votre projet que vous auriez réalisée au préalable.

Si vous n'avez aucune copie fonctionnelle de votre projet, il n'y a aucun moyen de récupérer les données du fichier corrompu. Remplacez le fichier par celui d'un nouveau projet vierge.

Réessayez d'ouvrir le projet dans l'éditeur. Si une erreur similaire apparait pour un autre fichier, alors plusieurs fichiers ont été corrompus. Répétez la même opération pour chaque fichier problématique jusqu'à pouvoir accéder à votre projet.

Nous ne connaissons pas la raison pour laquelle RPG Maker MV corrompt des fichiers aussi fréquemment. Si vous comptez travailler sérieusement avec ce logiciel, nous vous conseillons vivement de réaliser des copies de votre projet.
