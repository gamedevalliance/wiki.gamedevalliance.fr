.. meta::
   :description: Les évènements sont les personnages et les cinématiques de votre jeu. Découvrez toutes les commandes des évènements et ajoutez des éléments de gameplay à votre jeu.

.. _evenements:

Les évènements
==============

Un évènement peut avoir une apparence, se déplacer, et exécuter des commandes pour faire évoluer le jeu. Il se place sur une case de la carte, sur la couche d'évènements.

.. _declenchement:

Déclenchement
-------------

Le déclencheur permet de spécifier à quel moment du jeu s'exécutent les commandes de l'évènement.

* **Touche action :** Exécute les commandes une fois, lorsque le joueur appuie sur la touche action devant ou sur l'évènement.
* **Contact avec le héros :** En plus de l'effet de **Touche action**, les commandes s'exécutent également si le joueur entre en contact à l'aide des touches de déplacement.
* **Contact avec l'évènement :** En plus de l'effet de **Contact avec le héros**, se déclenche quand le héros et l'évènement entrent en contact par n'importe quel moyen. Par exemple, si l'évènement poursuit le héros qui se fait rattraper à son insu.
* **Automatique :** Dès lors que la transition d'arrivée sur la carte est terminée, les commandes s'écutent en boucle, indéfiniment. Tant qu'un évènement automatique est actif, le joueur est bloqué, ce qui est utile pour les cinématiques.
* **Processus parallèle :** Dès l'arrivée sur la carte, les commandes s'exécutent en boucle, indéfiniment. Comme son nom l'indique, l'évènement ne bloque pas le joueur pendant son exécution. Plusieurs processus parallèles peuvent être actifs en même temps.

.. _pages:

Pages et conditions d'activation
--------------------------------

Un évènement peut contenir plusieurs pages, chacune ayant ses propres paramètres et commandes. Le jeu tentera toujours d'activer la page la plus à droite possible, sauf dans les évènements des groupes de combat, où la page la plus à gauche possible est activée.

Les conditions dans le coin supérieur gauche d'une page doivent être remplies pour que la page soit active. Ainsi, il est possible de naviguer entre les pages, en spécifiant des conditions que l'on remplira progressivement au cours du jeu.

Liste des commandes
-------------------

La plupart des commandes sont explicites, et peuvent être comprises en expérimentant rapidement. Certaines proposent néanmoins des fonctionnalités complexes qu'il n'est pas évident de déceler au premier abord.

Afficher un message
~~~~~~~~~~~~~~~~~~~

Permet d'écrire les dialogues du jeu. En laissant votre curseur un instant sur le champ de texte, une info-bulle apparait contenant la liste des codes disponibles, permettant d'afficher des valeurs dynamiques dans le message comme le montant d'argent possédé.

.. _gestiondesinterrupteurs:

Gestion des interrupteurs
~~~~~~~~~~~~~~~~~~~~~~~~~

Permet d'activer et désactiver un :ref:`interrupteur <interrupteurs>`, ou une plage d'interrupteurs.

.. _gestiondesinterrupteurslocaux:

Gestion des interrupteurs locaux
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Permet d'activer et désactiver un :ref:`interrupteur local <interrupteurslocaux>` de l'évènement exécutant la commande.

.. _gestiondesvariables:

Gestion des variables
~~~~~~~~~~~~~~~~~~~~~

Modifie la valeur d'une :ref:`variable <variables>` ou d'une plage de variables. Il est possible de leur attribuer une nouvelle valeur, prédéterminée ou tirée des données du jeu, et d'effectuer des opérations mathématiques.

Une variable peut contenir d'autres types de valeur. Par exemple, pour stocker un texte, entrez le script `"Mon texte"`. Notez que les commandes d'évènement de RPG Maker ne peuvent évaluer que les nombres entiers. Pour manipuler des variables d'un autre type, vous devrez utiliser des :ref:`appels de script <appeldescript>`.

Insérer un commentaire
~~~~~~~~~~~~~~~~~~~~~~

Vous permet d'ajouter des indications ignorées par le jeu, pour vous repérer dans un code complexe ou travailler en groupe.

.. _condition:

Condition
~~~~~~~~~

Une condition permet de détecter si quelque chose est vrai, auquel cas les commandes situées à l'intérieur de la branche conditionnelle s'exécuteront. Si la condition est fausse, la branche **Sinon** est exécutée. Cette branche est facultative et peut être affichée en cochant la case adéquate dans la fenêtre des conditions.

On utilise les conditions pour vérifier qu'un interrupteur est activé, qu'une variable a atteint une certaine valeur, que le chronomètre est arrivé à zéro, que le joueur appuie sur une touche, et tout un tas d'autres choses. Il est possible d'imbriquer plusieurs conditions pour réaliser des vérifications complexes.

Parfois, vous aurez besoin de vérifier une donnée indisponible dans la fenêtre des conditions. Dans ce cas, utilisez la commande **Gestion des variables** pour rendre la variable de votre choix égale à la donnée du jeu souhaitée. Ensuite, réalisez une condition sur cette variable. Pour les cas les plus complexes, il est également possible de vérifier si une ligne de script renvoie vrai ou faux.

Créer une boucle
~~~~~~~~~~~~~~~~

Lorsque le système parcourt un évènement et entre dans une boucle, il y restera bloqué jusqu'à ce qu'on lui donne l'ordre d'en sortir. Cela signifie que lorsque le système atteint la fin de la boucle, il retourne au début, et exécute ainsi le contenu de la boucle à l'infini.

Créer une boucle dont il est impossible de sortir bloquera le jeu, à moins qu'elle soit exécutée dans un processus parallèle.

Sortir de la boucle
~~~~~~~~~~~~~~~~~~~

Lorsque le système atteint cette commande, il quitte la boucle en cours, et exécute les commandes situées après **Fin de la boucle**.

Il est également possible de quitter une boucle en :ref:`plaçant une étiquette <placeruneetiquette>` après la boucle, et en utilisant la commande :ref:`alleraletiquette` lorsque vous souhaitez en sortir.

.. _effacercetevenement:

Effacer cet évènement
~~~~~~~~~~~~~~~~~~~~~

L'évènement est temporairement supprimé tant que vous restez sur la carte. Si vous quittez la carte puis y retournez, l'évènement sera présent à nouveau.

.. _placeruneetiquette:

Placer une étiquette
~~~~~~~~~~~~~~~~~~~~

Nommez votre étiquette comme il vous plait. Vous pourrez demander au système d'y revenir instantanément avec :ref:`alleraletiquette`.

.. _alleraletiquette:

Aller à l'étiquette
~~~~~~~~~~~~~~~~~~~

Lorsque le système atteint cette commande, il se positionnera à l'étiquette désignée, et continuera à parcourir l'évènement depuis ce nouvel emplacement. Vous pouvez utiliser les étiquettes pour mettre en place des boucles et d'autres logiques complexes.

Déplacer un évènement
~~~~~~~~~~~~~~~~~~~~~

Contrairement à ce que l'on pourrait penser, cette commande n'est pas seulement utilisée pour déplacer l'évènement ciblé, mais aussi pour modifier ses propriétés. C'est donc par cette commande que vous changerez l'apparence ou la priorité d'affichage de vos évènements.

Pour plus de simplicité et de flexibilité, il est possible d'ajouter des sons à sa trajectoire, ou de modifier un interrupteur. Pour répondre aux besoins les plus avancés, il est également possible d'exécuter des commandes de script, et ainsi d'influer sur des aspects du jeu qui ne sont pas proposés par les boutons.

.. _preparerlatransition:

Préparer la transition
~~~~~~~~~~~~~~~~~~~~~~

Cette commande, disponible uniquement dans :ref:`rpgmakerxp`, fige l'écran jusqu'à l'exécution de la commande :ref:`executerlatransition`. Seul le rafraîchissement de l'affichage est désactivé, mais la logique du jeu s'exécute toujours pendant ce temps. Cela vous permet de préparer un changement de carte, un déplacement de caméra, un changement de ton d'écran, ou tout autre effet, avant de l'afficher de façon élégante par une transition.

.. _executerlatransition:

Exécuter la transition
~~~~~~~~~~~~~~~~~~~~~~

Cette commande, disponible uniquement dans :ref:`rpgmakerxp`, rétablit le rafraîchissement de l'écran, qui aura été désactivé au préalable par la commande :ref:`preparerlatransition`. La transition est personnalisable et permet de réaliser des mises en scène originales.

.. _appeldescript:

Appel de script
~~~~~~~~~~~~~~~

Cette commande permet d'entrer un texte qui sera évalué dans le langage de script du logiciel. C'est utile pour accéder à des données du jeu habituellement inaccessibles, et pour utiliser les scripts que vous avez installés.
