# Questions sur le mapping

## Je n'ai pas beaucoup de choix de décorations pour dessiner ma carte.

Le panneau à gauche est votre tileset. Par défaut, le tileset sélectionné sert à dessiner des cartes du monde, c'est pourquoi vous n'avez pas tous les décors. En bas à gauche de RPG Maker, sur le nom de votre carte, faites un **clic droit** puis **Propriétés**, et changez de tileset. Les débutants font souvent leurs premières cartes avec le tileset **Extérieur** (sur RPG Maker MV).

# Questions sur les évènements

## J'ai créé une cinématique, mais elle se joue en boucle indéfiniment.

Si votre évènement a comme déclenchement **Exécution automatique** ou **Processus parallèle**, il se jouera en boucle indéfiniment. Pour l'arrêter, utilisez la commande **Effacer cet évènement** à la fin l'évènement. Cependant, vous remarquerez qu'en quittant la carte puis y retournant, l'évènement réapparaît et rejoue la cinématique.

En effet, **la commande Effacer cet évènement n'a pas un effet permanent.**

Voici une méthode alternative avec un effet permanent. A la fin de votre évènement, **activez l'interrupteur local A** (parfois appelé interrupteur auto). Ensuite, créez une nouvelle page dans votre évènement, que vous laisserez vide. En haut à gauche de la fenêtre se trouve un espace **Conditions**. Ce sont les conditions requises pour que votre page 2 soit activée. Cochez **Interrupteur local A**. Ainsi, une fois votre cinématique terminée, votre évènement sera bloqué indéfiniment dans une page 2 qui n'exécute rien. Votre problème est réglé !

# Questions générales

## Comment obtenir RPG Maker ?

**Tous les RPG Maker sont payants**, et peuvent être achetés sur le [site officiel](http://www.rpgmakerweb.com/products), sur [Steam](http://store.steampowered.com/search/?term=RPG+Maker), sur [Humble Store](https://www.humblebundle.com/store/search?sort=bestselling&search=RPG%20Maker), et d'autres magasins. Si vous n'avez pas les moyens, vous pouvez attendre les [périodes de soldes](https://isthereanydeal.com/game/rpgmakermv/history/), ou télécharger un crack. Notez que la dernière version de RPG Maker MV n'est pas toujours disponible en crack. Si vous téléchargez une ancienne version, vous pourriez rencontrer des bugs qui sont résolus depuis longtemps dans la version payante. De plus, **certains plug-ins sont incompatibles avec les anciennes versions**, et plantent sans raison apparente. Nous ne pourrons pas vous aider dans ce cas.

## Comment trouver davantage de ressources graphiques et sonores ?

Vous pouvez consulter la [liste des DLC](http://www.rpgmakerweb.com/products/resources) pour obtenir des packs officiels et payants. Si vous préférez utiliser des ressources gratuites réalisées par les utilisateurs, vous pourrez en trouver un peu partout sur les forums. Le forum officiel comporte un [espace organisé](https://forums.rpgmakerweb.com/index.php?categories/resource-showcase.27/) à cet effet. Dans tous les cas, vérifiez sous quelles conditions le créateur vous donne le droit d'utiliser ses ressources, et créditez-le si nécessaire.
