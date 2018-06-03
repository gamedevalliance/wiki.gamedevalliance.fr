.. meta::
   :description: Personnalisez les compétences de votre jeu RPG Maker. Découvrez toutes les commandes disponibles, et réalisez des formules complexes en un clin d'œil.

Formules de dégâts
==================

A partir de :ref:`rpgmakervx`, les dégâts de base infligés par une compétence sont personalisables précisément à l'aide de formules.

.. figure:: assets/formules_interface.png
   :alt: Interface d'écriture de formules

   Formule de l'attaque de base.

Calculs simples
---------------

L'utilisateur de la compétence est représenté par ``a`` et la cible par ``b``. On y associe un terme avec un point. Par exemple, ``a.atk`` signifie « l'attaque du joueur » et ``b.def`` signifie « la défense de la cible ».

+-----------+-------------------+
| Termes    | Signification     |
+===========+===================+
| ``atk``   | Attaque           |
+-----------+-------------------+
| ``def``   | Défense           |
+-----------+-------------------+
| ``mat``   | Magie             |
+-----------+-------------------+
| ``mdf``   | Défense magique   |
+-----------+-------------------+
| ``agi``   | Agilité           |
+-----------+-------------------+
| ``luk``   | Chance            |
+-----------+-------------------+
| ``mhp``   | PV maximum        |
+-----------+-------------------+
| ``mmp``   | PM maximum        |
+-----------+-------------------+
| ``hp``    | PV actuels        |
+-----------+-------------------+
| ``mp``    | PM actuels        |
+-----------+-------------------+
| ``tp``    | PT actuels        |
+-----------+-------------------+
| ``level`` | Niveau            |
+-----------+-------------------+
| ``v[x]``  | Variable numéro x |
+-----------+-------------------+

On peut réaliser des opérations arithmétiques en suivant la syntaxe de Ruby. La priorité des opérations est respectée, et les parenthèses sont supportées.

+-----------+----------------+
| Opérateur | Signification  |
+===========+================+
| ``+``     | Addition       |
+-----------+----------------+
| ``-``     | Soustraction   |
+-----------+----------------+
| ``*``     | Multiplication |
+-----------+----------------+
| ``/``     | Division       |
+-----------+----------------+
| ``**``    | Exponentielle  |
+-----------+----------------+
| ``%``     | Modulo         |
+-----------+----------------+

Notez que la résistance élémentaire et les autres effets sont calculés séparément. Cette formule concerne uniquement les dégâts de base.

Aller plus loin avec Ruby
-------------------------

Pour réaliser des formules complexes et intéressants, il est possible de tirer parti des possibilités de Ruby, le langage de script utilisé sur :ref:`rpgmakervx` et :ref:`VX Ace <rpgmakervxace>`.

Conditions
~~~~~~~~~~

Imaginons une condition simple : si l'attaque de l'utilisateur est supérieure à 20, la compétence fera 200 points de dégâts, sinon, elle fera seulement 100 points de dégâts.

::

    if a.atk > 20
      200
    else
      100
    end

Cependant, le champ de formule ne fait qu'une seule ligne. Pour condenser ceci, on écrit ``;`` à la place d'un retour à la ligne.

::

    if a.atk > 20; 200; else; 100; end;

Il existe une autre façon d'écrire une condition en une ligne ::

    condition ? commande_si_vrai : commande_si_faux

Cela permet d'écrire notre exemple ainsi ::

    a.atk > 20 ? 200 : 100

Manipuler les nombres
~~~~~~~~~~~~~~~~~~~~~

.. highlight:: ruby

Les nombres peuvent être négatifs, en les précédant d'un ``-`` sans espace. Espacer correctement les opérateurs et les nombres permet d'avoir un meilleur contrôle sur ses opérations.

::

    4 + -6    => -2
    4 - -6    => 10

Evitez de laisser un zéro avant votre nombre, ou il sera traité en `base 8 <https://fr.wikipedia.org/wiki/Syst%C3%A8me_octal>`__.

::

    0567      => 375

Il est possible d'utiliser des nombres décimaux, en séparant la partie entière et la partie décimale d'un ``.``. Utiliser au moins un décimal dans une opération produira toujours un résultat décimal.

::

    5 + 10.0  => 15.0

Cette astuce vous permet de choisir entre un résultat de division arrondi ou décimal.

::

    3 / 2     => 1
    3 / 2.0   => 1.5

Aller plus loin avec les formules pour MV
-----------------------------------------

Une partie de ce qui va suivre devrait être compatible avec :ref:`VX Ace <rpgmakervxace>`. Tout comme ce qui a été écrit avant est compatible avec :ref:`rpgmakermv`.

Récapitulatif des paramètres additionnels
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Les Ex-params ont une valeur de 0% par défaut. Les Sp-params ont une valeur de 100% par défaut. Toutes ces valeurs peuvent varier entre -1000% et +1000%

+-----------+---------------------------+-----------+-------------------------------------------+
| Ex-params | Signification             | Sp-params | Signification                             |
+===========+===========================+===========+===========================================+
| ``hit``   | Chance de toucher         | ``trg``   | Chance d'être ciblé                       |
+-----------+---------------------------+-----------+-------------------------------------------+
| ``eva``   | Taux d'esquive            | ``grd``   | Taux de réduction des dommages            |
+-----------+---------------------------+-----------+-------------------------------------------+
| ``cri``   | Taux de critique          | ``rec``   | Taux de régénération (via skill)          |
+-----------+---------------------------+-----------+-------------------------------------------+
| ``cev``   | Taux d'esquive critique   | ``pha``   | Taux de régénération (via item)           |
+-----------+---------------------------+-----------+-------------------------------------------+
| ``mev``   | Taux d'évasion magique    | ``mrc``   | Augmentation/réduction du coût en MP      |
+-----------+---------------------------+-----------+-------------------------------------------+
| ``mrf``   | Taux de réflexion magique | ``tcr``   | Augmentation/réduction du gain en PT      |
+-----------+---------------------------+-----------+-------------------------------------------+
| ``cnt``   | Chance de contrer         | ``pdr``   | Taux de réduction des attaques physiques  |
+-----------+---------------------------+-----------+-------------------------------------------+
| ``hrg``   | Taux de regen des PV/tour | ``mdr``   | Taux de réduction des attaques magiques   |
+-----------+---------------------------+-----------+-------------------------------------------+
| ``mrg``   | Taux de regen des PM/tour | ``fdr``   | Taux de réduction des dommages de terrain |
+-----------+---------------------------+-----------+-------------------------------------------+
| ``trg``   | Taux de regen des PT/tour | ``exr``   | Bonus/malus à l'expérience                |
+-----------+---------------------------+-----------+-------------------------------------------+

Quelques fonctions utiles
~~~~~~~~~~~~~~~~~~~~~~~~~

.. highlight:: javascript

Pour rappel : a = lanceur de la compétence, b = cible de la compétence.

Action qui change si la cible est morte ::

    b.isDead() ? commande_si_vrai : commande_si_faux

Action qui change si la cible est sur le point de mourir (sa vie est descendue à 1/4 de sa vie maximale) ::

   b.isDying() ? commande_si_vrai : commande_si_faux

Action qui change si le lanceur de la compétence est sous un effet quelconque. ``ID_de_l_effet`` est le numéro affiché à coté de l'effet en question dans l'onglet **Statuts** de la base de données.

::

   a.isStateAffected(ID_de_l_effet) ? commande_si_vrai : commande_si_faux

Savoir si la cible est un allié ou un ennemi ::

   b.isActor() // allié ?
   b.isEnemy() // ennemi ?
