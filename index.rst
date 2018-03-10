Questions fréquemment posées sur RMA
====================================

Vous venez de commencer RPG Maker ? Familiarisez-vous avec `Les bases de RPG Maker <https://www.youtube.com/watch?v=HKXL-0i7uAM>`_, puis apprenez-en plus sur les combats et les interrupteurs dans `Créer un Donjon Partie 1 <https://www.youtube.com/watch?v=yTmpdDe77C8>`_ et `Partie 2 <https://www.youtube.com/watch?v=zwNfO6HHfRo>`_.

Vous préférez les tutoriels écrits ? La série `Débuter sur VX <http://www.rpg-maker.fr/tutoriels-192-debuter-sur-vx-01-creation-d-un-projet-et-premiere-carte.html>`_, par Monos et Ephy, est facile à suivre avec RPG Maker VX Ace et MV. `Accéder aux 11 parties. <http://www.rpg-maker.fr/tutoriels-pour-rmvx.html>`_

Questions sur le mapping
========================

Je n'ai pas beaucoup de choix de décorations pour dessiner ma carte.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Le panneau à gauche est votre tileset. Par défaut, le tileset sélectionné sert à dessiner des cartes du monde, c'est pourquoi vous n'avez pas tous les décors. En bas à gauche de RPG Maker, sur le nom de votre carte, faites un **clic droit** puis **Propriétés**, et changez de tileset. Les débutants font souvent leurs premières cartes avec le tileset **Extérieur** (sur RPG Maker MV).

Questions sur les évènements
============================

Comment créer une cinématique ?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Créez un évènement et laissez son apparence vide. En bas à gauche de la fenêtre, choisissez le déclenchement **Exécution automatique**. De cette façon, l'évènement s'exécutera dès que le joueur arrive sur la carte.

J'ai créé une cinématique, mais elle se joue en boucle indéfiniment.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Si votre évènement a comme déclenchement **Exécution automatique** ou **Processus parallèle**, il se jouera en boucle indéfiniment. Pour l'arrêter, utilisez la commande **Effacer cet évènement** à la fin l'évènement. Cependant, vous remarquerez qu'en quittant la carte puis y retournant, l'évènement réapparaît et rejoue la cinématique.

En effet, **la commande Effacer cet évènement n'a pas un effet permanent.**

Voici une méthode alternative avec un effet permanent. A la fin de votre évènement, **activez l'interrupteur local A** (parfois appelé interrupteur auto). Ensuite, créez une nouvelle page dans votre évènement, que vous laisserez vide. En haut à gauche de la fenêtre se trouve un espace **Conditions**. Ce sont les conditions requises pour que votre page 2 soit activée. Cochez **Interrupteur local A**. Ainsi, une fois votre cinématique terminée, votre évènement sera bloqué indéfiniment dans une page 2 qui n'exécute rien. Votre problème est réglé !

Questions générales
===================

Comment obtenir RPG Maker ?
^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Tous les RPG Maker sont payants,** et peuvent être achetés sur le `site officiel <http://www.rpgmakerweb.com/products>`_, sur `Steam <http://store.steampowered.com/search/?term=RPG+Maker>`_, sur `Humble Store <https://www.humblebundle.com/store/search?sort=bestselling&search=RPG%20Maker>`_, et d'autres magasins. Si vous n'avez pas les moyens, vous pouvez attendre les `périodes de soldes <https://isthereanydeal.com/game/rpgmakermv/history/>`_.

Sur RMA, nous sommes favorables à l'utilisation de cracks, tant que vous les trouvez par vos propres moyens et que vous êtes conscient des implications. Les versions crackées de RPG Maker MV peuvent contenir des bugs résolus depuis longtemps dans la version payante. De plus, **certains plugins sont incompatibles avec les anciennes versions**, et plantent sans raison apparente. Nous ne pourrons pas vous aider dans ce cas.

Comment trouver davantage de ressources graphiques et sonores ?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Vous pouvez consulter la `liste des DLC <http://www.rpgmakerweb.com/products/resources>`_ pour obtenir des packs officiels et payants. Si vous préférez utiliser des ressources gratuites réalisées par les utilisateurs, vous pourrez en trouver un peu partout sur les forums. Le forum officiel comporte un `espace organisé <https://forums.rpgmakerweb.com/index.php?categories/resource-showcase.27/>`_ à cet effet. Dans tous les cas, vérifiez sous quelles conditions le créateur vous donne le droit d'utiliser ses ressources, et créditez-le si nécessaire.

Comment faire une capture d'écran et la montrer sur Discord ?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Pour capturer tout l'écran,** appuyez sur la touche dédiée de votre clavier, souvent appelée `Impr écran` ou `Prnt scrn`. L'image est silencieusement copiée dans votre `presse-papiers <https://fr.wikipedia.org/wiki/Presse-papier_(informatique)>`_. Dans le champ de saisie de message de Discord, faites un **clic droit** puis **Coller** (ou `Ctrl+V`).

**Pour capturer une zone de l'écran,** ouvrez le programme **Outil Capture d'écran** intégré à Windows. Une fois votre capture réalisée, faites un **clic droit** sur l'image puis **Copier** (ou `Ctrl+C`). Dans le champ de saisie de message de Discord, faites un **clic droit** puis **Coller** (ou `Ctrl+V`).

**Pour les utilisateurs expérimentés,** nous recommandons le programme `ShareX <https://getsharex.com/>`_, afin de paramétrer vos propres raccourcis clavier et la mise en ligne automatisée de vos images sur `Imgur <https://imgur.com/>`_.
