:tocdepth: 2

.. meta::
   :description: Découvrez notre liste de commandes de scripts pour personnaliser votre jeu RPG Maker XP. Ajoutez de nouvelles commandes puissantes à vos évènements.

.. _appelsdescriptxp:

Appels de script pour RPG Maker XP
==================================

.. highlight:: ruby

Gestion globale
_______________

Modifier un interrupteur
------------------------

``id`` est le numéro de l'interrupteur dans RPG Maker. En Ruby, ``true`` signifie « vrai » et ``false`` signifie « faux ». On choisit l'un ou l'autre pour rendre l'interrupteur égal à ON ou OFF.

::

    $game_switches[id] = true/false

Modifier un interrupteur local
------------------------------

Les interrupteurs locaux fonctionnent comme les interrupteurs globaux, si ce n'est qu'ils sont référencés par trois ID : une carte, un évènement, et une lettre.

::

    $game_self_switches = {[map, event, "letter"] => true/false}
    $game_map.need_refresh = true

La dernière ligne permet au joueur de voir les conséquences du changement immédiatement. Si elle est omise, l'interrupteur local sera bien modifié, mais il faudra quitter la carte et y revenir pour voir les conséquences. Voici un exemple d'utilisation ::

    $game_self_switches = {[2, 4, "A"] => true}
    $game_self_switches = {[1, 3, "B"] => false}
    $game_map.need_refresh = true

Modifier une variable
---------------------

``id`` est le numéro de la variable dans RPG Maker. ``value`` est sa nouvelle valeur, qui peut être un nombre entier, ou bien un autre type de valeur : texte, tableau, etc.

::

    $game_variables[id] = value
