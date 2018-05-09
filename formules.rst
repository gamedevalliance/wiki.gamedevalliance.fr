.. meta::
   :description: Personnalisez les compétences de votre jeu RPG Maker. Découvrez toutes les commandes disponibles, et réalisez des formules complexes en un clin d'œil.

Formules de dégâts
==================

A partir de :ref:`rpgmakervx`, les dégâts de base infligés par une compétence sont personalisables précisément à l'aide de formules.

.. figure:: https://i.imgur.com/UTvfvGj.png
   :alt: Formule

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
