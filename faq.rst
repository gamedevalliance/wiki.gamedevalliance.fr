.. meta::
   :description: Vous débutez sur RPG Maker ? Nous pouvons sûrement vous aider. Voici les réponses à toutes les questions que peuvent se poser les débutants.

Questions fréquentes
====================

Cette page recense diverses questions que se posent régulièrement les débutants sur notre `serveur Discord <https://discord.gg/RrBppaj>`__. Si vous ne trouvez pas l'information dont vous avez besoin, n'hésitez pas à nous demander de l'aide.

Mapping
-------

Je n'ai pas beaucoup de choix de décorations pour dessiner ma carte.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Le panneau à gauche de l'éditeur est votre tileset. Par défaut, le tileset sélectionné sert à dessiner des cartes du monde, c'est pourquoi vous n'avez pas tous les décors. En bas à gauche de RPG Maker, cliquez-droit sur le nom de votre carte pour ouvrir ses propriétés, puis changez de tileset. Les débutants font souvent leurs premières cartes avec le tileset Extérieur.

.. figure:: https://i.imgur.com/w9mCDAO.png
   :alt: Changement de tileset

   Changement de tileset dans les propriétés de la carte.

Évènements
----------

Passer d'une carte à une autre
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Activez la couche des évènements, puis cliquez-droit sur une case de la carte pour créer un évènement rapide de téléportation. Choisissez la destination et le regard du personnage à l'arrivée. Si vous le souhaitez, vous pouvez examiner comment l'évènement fonctionne en double-cliquant dessus.

.. figure:: https://i.imgur.com/hpwDJsb.png
   :alt: Evènements rapides

   Création d'un évènement rapide sur la carte.

Créer une cinématique
~~~~~~~~~~~~~~~~~~~~~

Vous pouvez faire en sorte qu'un évènement se lance dès l'arrivée du joueur sur la carte. Pour cela, en bas à gauche de la fenêtre de l'évènement, choisissez le :ref:`mode de déclenchement <declenchement>` Exécution automatique. Pour réaliser une cinématique, la pratique la plus courante est de créer un évènement sans apparence dans un coin de la carte, puis d'y insérer tous les dialogues et autres éléments de mise en scène. N'oubliez pas de désactiver l'évènement après votre cinématique, sans quoi elle se jouera en boucle.

.. figure:: https://i.imgur.com/MwSESNz.png
   :alt: Déclenchement automatique

   Choix du mode de déclenchement d'un évènement.

Désactiver un évènement
~~~~~~~~~~~~~~~~~~~~~~~

Pour effacer un évènement temporairement, utilisez la commande :ref:`effacercetevenement` à la fin l'évènement. Avec cet méthode, en quittant la carte puis y retournant, l'évènement réapparaîtra. C'est tout à fait normal, car la commande Effacer cet évènement n'a pas un effet permanent.

Pour une suppression permanente, au lieu d'utiliser la commande Effacer cet évènement, utilisez :ref:`gestiondesinterrupteurslocaux` afin d'activer l'interrupteur local A. Ensuite, créez une :ref:`nouvelle page <pages>` dans votre évènement, que vous laisserez vide. Dans les conditions d'activation de cette nouvelle page vide, cochez l'interrupteur local A. Ainsi, après s'être joué, l'évènement sera bloqué indéfiniment dans une page 2 qui n'exécute rien. Votre problème est réglé !

.. figure:: https://i.imgur.com/hbwBUqs.png
   :alt: Illustration

   Création de la deuxième page vide.

Questions générales
-------------------

Comment travailler à plusieurs ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Editer un projet à plusieurs est possible, mais demande une bonne compréhension des données de RPG Maker. Toutes les informations sont dans la section :ref:`collaborer`.

Existe-t-il des RPG Maker gratuits ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Tous les RPG Maker sont payants,** et peuvent être achetés sur le `site officiel <http://www.rpgmakerweb.com/products>`__, sur `Steam <http://store.steampowered.com/search/?term=RPG+Maker>`__, sur `Humble Store <https://www.humblebundle.com/store/search?sort=bestselling&search=RPG%20Maker>`__, et d'autres magasins. Si vous n'avez pas les moyens, vous pouvez surveiller les `périodes de soldes <https://isthereanydeal.com/game/rpgmakermv/history/>`__.

Vous pouvez essayer les logiciels avant de les acheter, en téléchargeant les `versions d'essai <http://www.rpgmakerweb.com/download/free-trials>`__, valables 20 à 30 jours.

Si la limite de temps ne vous convient pas, il existe `RPG Maker VX Ace Lite <http://store.steampowered.com/app/224280/RPG_Maker_VX_Ace_Lite/>`__, une version limitée en fonctionnalités, mais suffisante pour s'entraîner et créer des petits jeux.

Sur RMA, nous respectons les opinions de chacun au sujet de l'utilisation de versions illégales. Cependant, nous vous demandons de ne pas les partager au sein de la communauté. De plus, les versions non officielles sont souvent obsolètes et sujettes à des problèmes. En cas de problème technique ou de fonctionnalité absente, merci de vous assurer que vous possédez une version officielle et à jour avant de demander de l'aide à la communauté.

Trouver d'autres ressources graphiques et sonores
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Consultez la liste des DLC pour obtenir des packs officiels et payants. Si vous préférez utiliser des ressources gratuites réalisées par les utilisateurs, le forum officiel comporte un espace organisé à cet effet. Pour aller plus loin, consultez notre `guide sur le partage de ressources <https://rpgmakeralliance.com/d/105>`_. Voici une liste d'adresses utiles pour mener vos recherches :

* `Liste des packs <http://www.rpgmakerweb.com/products/resources>`_ sur le site officiel
* `Liste des DLC <https://store.steampowered.com/dlc/220700>`_ pour RPG Maker VX Ace sur Steam
* `Liste des DLC <https://store.steampowered.com/dlc/363890>`_ pour RPG Maker MV sur Steam
* `Catégorie des ressources <https://forums.rpgmakerweb.com/index.php?categories/resource-showcase.27/>`_ sur le forum officiel
* `OpenGameArt.org <https://opengameart.org/>`_ pour tous types d'assets gratuits
* `itch.io <https://itch.io/game-assets>`_ contient de nombreux packs gratuits et payants
* `Kenney <http://www.kenney.nl/assets>`_ propose des assets dans le domaine public
* `Game-icons.net <http://game-icons.net/>`_ offre une variété d'icônes dans un style simple mais expressif

Quelque soit la source, vérifiez sous quelles conditions l'artiste vous autorise à utiliser ses ressources, et créditez-le si nécessaire.

Comment faire une capture d'écran et la montrer sur Discord ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pour capturer tout l'écran, appuyez sur la touche dédiée de votre clavier, souvent appelée ``Impr écran`` ou ``Prnt scrn``. Pour capturer la fenêtre active uniquement, appuyez sur ``Alt + Impr écran``. Dans le champ de saisie de message de Discord, faites un clic droit puis Coller, ou ``Ctrl+V``.

Pour capturer une zone précise de l'écran, ouvrez le programme **Outil Capture d'écran** intégré à Windows. Une fois votre capture réalisée, copiez l'image, puis collez-la dans Discord.

Pour les utilisateurs expérimentés, nous recommandons le programme `ShareX <https://getsharex.com/>`__, afin de paramétrer vos propres raccourcis clavier et la mise en ligne automatisée de vos images sur `Imgur <https://imgur.com/>`__.
