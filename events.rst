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

Un évènement peut contenir plusieurs pages, chacune ayant ses propres paramètres et commandes. Le jeu tentera toujours d'activer la page la plus à droite possible, sauf dans les évènements des groupes de combat, où la page la plus à gauche possible est activée.

Les **Conditions**, dans le coin supérieur gauche d'une page, doivent être remplies pour que la page soit active. Ainsi, il est possible de naviguer entre les pages, en spécifiant des conditions que l'on remplira progressivement au cours du jeu.

Liste des commandes
-------------------

La plupart des commandes sont explicites, et peuvent être comprises en expérimentant rapidement. Certaines proposent néanmoins des fonctionnalités complexes qu'il n'est pas évident de déceler au premier abord.

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

Conditions
~~~~~~~~~~

Une condition permet de détecter si quelque chose est vrai, auquel cas les commandes situées à l'intérieur de la branche conditionnelle s'exécuteront. Si la condition est fausse, la branche **Sinon** est exécutée. Cette branche est facultative et peut être affichée en cochant la case adéquate dans la fenêtre des conditions.

On utilise les conditions pour vérifier qu'un interrupteur est activé, qu'une variable a atteint une certaine valeur, que le chronomètre est arrivé à zéro, que le joueur appuie sur une touche, et tout un tas d'autres choses.

Parfois, vous aurez besoin de vérifier une donnée indisponible dans la fenêtre des conditions. Dans ce cas, utilisez la commande **Gestion des variables** pour rendre la variable de votre choix égale à la donnée du jeu souhaitée. Ensuite, réalisez une condition sur cette variable. Pour les cas les plus complexes, il est également possible de vérifier si une ligne de script renvoie vrai ou faux.

Créer une boucle
~~~~~~~~~~~~~~~~

Lorsque le système parcourt un évènement et entre dans une boucle, il y restera bloqué jusqu'à ce qu'on lui donne l'ordre d'en sortir. Cela signifie que lorsque le système atteint la fin de la boucle, il retourne au début, et exécute ainsi le contenu de la boucle à l'infini.

Créer une boucle dont il est impossible de sortir bloquera le jeu, à moins qu'elle soit exécutée dans un processus parallèle.

Sortir de la boucle
~~~~~~~~~~~~~~~~~~~

Lorsque le système atteint cette commande, il quitte la boucle en cours, et exécute les commandes situées après **Fin de la boucle**.

Il est également possible de quitter une boucle en :ref:`plaçant une étiquette <placeruneetiquette>` après la boucle, et en utilisant la commande :ref:`alleraletiquette` lorsque vous souhaitez en sortir.

Supprimer cet évènement
~~~~~~~~~~~~~~~~~~~~~~~

L'évènement est temporairement supprimé tant que vous restez sur la carte. Si vous quittez la carte puis y retournez, l'évènement sera présent à nouveau.

.. _placeruneetiquette:

Placer une étiquette
~~~~~~~~~~~~~~~~~~~~

Nommez votre étiquette comme il vous plait. Vous pourrez demander au système d'y revenir instantanément avec :ref:`alleraletiquette`.

.. _alleraletiquette:

Aller à l'étiquette
~~~~~~~~~~~~~~~~~~~

Lorsque le système atteint cette commande, il se positionnera à l'étiquette désignée, et continuera à parcourir l'évènement depuis ce nouvel emplacement. Vous pouvez utiliser les étiquettes pour mettre en place des boucles et d'autres logiques complexes.
