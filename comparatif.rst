Comparatif des versions de RPG Maker
====================================

Régulièrement sur notre `serveur Discord <https://discord.gg/RrBppaj>`_ revient la question du meilleur RPG Maker à utiliser. La réponse n'est pas simple, puisqu'aucun RPG Maker n'est absolument meilleur qu'un autre. Chaque version possède des avantages et des inconvénients, qui pèseront différemment dans la balance en fonction du projet que vous souhaitez réaliser. Afin de vous aiguiller le plus précisément possible, voici un comparatif des logiciels détaillé pour chaque aspect de la création de jeu.

Systèmes supportés
------------------

Tous les RPG Maker fonctionnent sur Windows uniquement, à l'exception de :ref:`rpgmakermv` qui peut également être utilisé sur macOS et Linux. Grâce à la technologie HTML5, les jeux réalisés avec RPG Maker MV peuvent aussi être joués sur navigateur, Android et iOS, avec un degré de succès variable selon les appareils. Pour plus de détails, se référer à la section :ref:`performances`.

Outils supplémentaires
~~~~~~~~~~~~~~~~~~~~~~

Plusieurs outils sont développés afin d'étendre les systèmes supportés par les jeux RPG Maker. Voici les deux projets les plus aboutis et viables.

`EasyRPG Player <https://easyrpg.org/>`_ est un programme gratuit et open source permettant d'interpréter les jeux :ref:`rpgmaker2000` et :ref:`2003 <rpgmaker2003>`, comme s'ils étaient lancés avec l'exécutable normal. Le programme est disponible sur Windows, macOS, Linux, Android, iOS, et plusieurs consoles supportant les homebrews. Certaines fonctionnalités de RPG Maker ne sont pas encore disponibles, mais les jeux ne les utilisant pas fonctionnent normalement.

`mkxp <https://github.com/Ancurio/mkxp>`_ est une implémentation open source de l'interface RGSS utilisée par :ref:`rpgmakerxp`, :ref:`VX <rpgmakervx>` et :ref:`VX Ace <rpgmakervxace>`, permettant de lancer les jeux nativement sur Linux. L'auteur a notamment réalisé le portage de To the Moon vers Linux.

Accessibilité
-------------

Les utilisateurs s'accordent à dire que RPG Maker VX Ace est la version la plus facile à utiliser pour un débutant. La base de données est complète et bien organisée, et le mapping, bien que relativement limité, est très simple à prendre en main.

RPG Maker MV est très similaire, ce qui le rend tout aussi simple dans sa structure. Cependant, sa traduction française est de très mauvaise qualité, au point que l'intitulé de certaines commandes soit erroné ou manque de clarté pour un non-initié.

Aspect graphique
----------------

Se référer à la section :ref:`esthetique`.

Musiques et effets sonores
--------------------------

*Section vide. Si vous possédez des informations, vous pouvez modifier cette page ou nous contacter.*

Langage de script
-----------------

A partir de RPG Maker XP, il est possible de programmer ses propres scripts ou d'en obtenir sur Internet. L'utilité des scripts peut varier du simple correctif au changement profond du comportement du jeu. Ils permettent de modifier le système de combat, de déplacement, de message, etc.

Sauf dans certains cas exceptionnels, un script est uniquement compatible avec la version de RPG Maker pour laquelle il est écrit, en raison des évolutions du langage à chaque itération du logiciel. On peut donc considérer qu'un script de qualité constitue un atout pour le logiciel compatible, en raison de son caractère exclusif. Par exemple, l'AMS Ultimate existe uniquement sur RPG Maker XP et ne connait pas d'équivalent pour les autres versions, tout comme :ref:`RME <rme>` existe uniquement sur RPG Maker VX Ace.

La révolution des scripts rend RPG Maker 2000 et 2003 obsolètes. Leur style visuel, qui constituait leur unicité dans la série, est d'ailleurs facilement réplicable sur RPG Maker VX Ace avec le script :ref:`ORMS <orms>`.

Système de combat
-----------------

*Section vide. Si vous possédez des informations, vous pouvez modifier cette page ou nous contacter.*

Possibilités de gameplay
------------------------

En dehors des combats, les systèmes de jeu sont programmés visuellement dans des :ref:`évènements <evenements>` que l'on place sur la carte. Le principe reste toujours le même, bien qu'entre les versions, certaines commandes apparaissent ou disparaissent. Ces changements minimes ne sauraient être une différenciation significative.

.. _performances:

Performances
------------

Les jeux réalisés sur RPG Maker VX Ace sont probablement les plus fluides et stables de la série. Les jeux RPG Maker 2003 tournent également sans problème.

Le moteur de RPG Maker XP est plus problématique, car plus lent et par défaut à 40 fps. Il est possible de monter la fréquence d'affichage à 60 fps pour respecter la norme, mais une légère instabilité et un `tearing <https://en.wikipedia.org/wiki/Screen_tearing>`_ subsistent.
