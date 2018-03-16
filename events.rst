Les évènements
==============

Un évènement peut avoir une apparence, se déplacer, et exécuter des commandes pour faire évoluer le jeu. Il se place sur une case de la carte, sur la couche d'évènements.

Déclenchement
-------------

Le déclencheur permet de spécifier à quel moment du jeu s'exécutent les commandes de l'évènement.

* **Touche action :** Exécute les commandes une fois, lorsque le joueur appuie sur la touche action devant ou sur l'évènement.
* **Contact avec le héros :** En plus de l'effet de **Touche action**, les commandes s'exécutent également si le joueur entre en contact à l'aide des touches de déplacement.
* **Contact avec l'évènement :** En plus de l'effet de **Contact avec le héros**, se déclenche quand le héros et l'évènement entrent en contact par n'importe quel moyen. Par exemple, si l'évènement poursuit le héros qui se fait rattraper à son insu.
* **Automatique :** Dès lors que la transition d'arrivée sur la carte est terminée, les commandes s'écutent en boucle, indéfiniment. Tant qu'un évènement automatique est actif, le joueur est bloqué, ce qui est utile pour les cinématiques.
* **Processus parallèle :** Dès l'arrivée sur la carte, les commandes s'exécutent en boucle, indéfiniment. Comme son nom l'indique, l'évènement ne bloque pas le joueur pendant son exécution. Plusieurs processus parallèles peuvent être actifs en même temps.

Utiliser les pages
------------------

Un évènement peut contenir plusieurs pages, chacune ayant ses propres paramètres et commandes. Le jeu tentera toujours d'activer la page la plus à droite possible, sauf dans les évènements des groupes de combat, où la page la plus à gauche possible est activée. Cependant, les **conditons**, dans le coin supérieur gauche d'une page, doivent être remplies pour que la page puisse être active. Il est donc possible de naviguer entre les pages, en spécifiant des conditions, puis en choisissant de les remplir ou non, par le biais de commandes d'évènement.

Liste des commandes
-------------------

Afficher un message
~~~~~~~~~~~~~~~~~~~

Permet d'écrire les dialogues du jeu. En laissant votre curseur un instant sur le champ de texte, une info-bulle apparait contenant la liste des codes disponibles, permettant d'afficher des valeurs dynamiques dans le message comme le montant d'argent possédé.

Gestion des interrupteurs
~~~~~~~~~~~~~~~~~~~~~~~~~

Se référer à la section :ref:`interrupteurs`.

Gestion des interrupteurs locaux
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Se référer à la section :ref:`interrupteurslocaux`.

Gestion des variables
~~~~~~~~~~~~~~~~~~~~~

Se référer à la section :ref:`variables`.

Insérer un commentaire
~~~~~~~~~~~~~~~~~~~~~~

Vous permet d'ajouter des indications ignorées par le jeu, pour vous repérer dans un code complexe ou travailler en groupe.

