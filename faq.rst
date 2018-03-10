Questions fréquentes
====================

Cette page recense diverses questions que se posent régulièrement les débutants sur `notre serveur Discord <https://discord.gg/RrBppaj>`__. Si vous ne trouvez pas l'information dont vous avez besoin, n'hésitez pas à nous demander de l'aide.

.. contents:: Sommaire
    :local:

Mapping
-------

Je n'ai pas beaucoup de choix de décorations pour dessiner ma carte.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Le panneau à gauche est votre tileset. Par défaut, le tileset sélectionné sert à dessiner des cartes du monde, c'est pourquoi vous
n'avez pas tous les décors. En bas à gauche de RPG Maker, sur le nom de votre carte, faites un **clic droit** puis **Propriétés**, et changez de tileset. Les débutants font souvent leurs premières cartes avec le tileset **Extérieur** (sur RPG Maker MV).

Évènements
----------

Comment créer une cinématique ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Vous pouvez faire en sorte qu'un évènement se lance dès l'arrivée du joueur sur la carte. Pour cela, en bas à gauche de la fenêtre de l'évènement, choisissez le mode de déclenchement **Exécution automatique**. Pour réaliser une cinématique, la pratique la plus courante est de créer un évènement sans apparence dans un coin de la carte, puis d'y insérer tous les dialogues et autres éléments de mise en scène.

J'ai créé une cinématique, mais elle se joue en boucle indéfiniment.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Si votre évènement a comme déclenchement **Exécution automatique** ou **Processus parallèle**, il se jouera en boucle indéfiniment. Pour l'arrêter, utilisez la commande **Effacer cet évènement** à la fin l'évènement. Cependant, vous remarquerez qu'en quittant la carte puis y retournant, l'évènement réapparaît et rejoue la cinématique.

En effet, **la commande Effacer cet évènement n'a pas un effet permanent.**

Voici une méthode alternative avec un effet permanent. A la fin de votre évènement, **activez l'interrupteur local A** (parfois appelé interrupteur auto). Ensuite, créez une nouvelle page dans votre évènement, que vous laisserez vide. En haut à gauche de la fenêtre se trouve un espace **Conditions**. Ce sont les conditions requises pour que votre page 2 soit activée. Cochez **Interrupteur local A**. Ainsi, une fois votre cinématique terminée, votre évènement sera bloqué indéfiniment dans une page 2 qui n'exécute rien. Votre problème est réglé !

Questions générales
-------------------

Existe-t-il des RPG Maker gratuits ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Tous les RPG Maker sont payants,** et peuvent être achetés sur le `site officiel <http://www.rpgmakerweb.com/products>`__, sur
`Steam <http://store.steampowered.com/search/?term=RPG+Maker>`__, sur `Humble Store <https://www.humblebundle.com/store/search?sort=bestselling&search=RPG%20Maker>`__, et d'autres magasins. Si vous n'avez pas les moyens, vous pouvez attendre les `périodes de soldes <https://isthereanydeal.com/game/rpgmakermv/history/>`__.

Vous pouvez essayer les logiciels avant de les acheter, en `téléchargeant les versions d'essai <http://www.rpgmakerweb.com/download/free-trials>`__, valables 20 à 30 jours.

Si la limite de temps ne vous convient pas, il existe `RPG Maker VX Ace Lite <http://store.steampowered.com/app/224280/RPG_Maker_VX_Ace_Lite/>`__, une version limitée en fonctionnalités, mais suffisante pour s'entraîner et créer des petits jeux.

Sur RMA, nous sommes favorables à l'utilisation de cracks, tant que vous
les trouvez par vos propres moyens et que vous êtes conscient des
implications. Les versions crackées de RPG Maker MV peuvent contenir des
bugs résolus depuis longtemps dans la version payante. De plus,
**certains plugins sont incompatibles avec les anciennes versions**, et
plantent sans raison apparente. Nous ne pourrons pas vous aider dans ce
cas.

Comment trouver davantage de ressources graphiques et sonores ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Vous pouvez consulter la `liste des
DLC <http://www.rpgmakerweb.com/products/resources>`__ pour obtenir des
packs officiels et payants. Si vous préférez utiliser des ressources
gratuites réalisées par les utilisateurs, vous pourrez en trouver un peu
partout sur les forums. Le forum officiel comporte un `espace
organisé <https://forums.rpgmakerweb.com/index.php?categories/resource-showcase.27/>`__
à cet effet. Dans tous les cas, vérifiez sous quelles conditions le
créateur vous donne le droit d'utiliser ses ressources, et créditez-le
si nécessaire.

Comment faire une capture d'écran et la montrer sur Discord ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Pour capturer tout l'écran,** appuyez sur la touche dédiée de votre
clavier, souvent appelée ``Impr écran`` ou ``Prnt scrn``. L'image est
silencieusement copiée dans votre
`presse-papiers <https://fr.wikipedia.org/wiki/Presse-papier_(informatique)>`__.
Dans le champ de saisie de message de Discord, faites un **clic droit**
puis **Coller** (ou ``Ctrl+V``).

**Pour capturer une zone de l'écran,** ouvrez le programme **Outil
Capture d'écran** intégré à Windows. Une fois votre capture réalisée,
faites un **clic droit** sur l'image puis **Copier** (ou ``Ctrl+C``).
Dans le champ de saisie de message de Discord, faites un **clic droit**
puis **Coller** (ou ``Ctrl+V``).

**Pour les utilisateurs expérimentés,** nous recommandons le programme
`ShareX <https://getsharex.com/>`__, afin de paramétrer vos propres
raccourcis clavier et la mise en ligne automatisée de vos images sur
`Imgur <https://imgur.com/>`__.
