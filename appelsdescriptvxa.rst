:tocdepth: 2

.. meta::
   :description: Découvrez notre liste de commandes de scripts pour personnaliser votre jeu RPG Maker VX Ace avec RME. Ajoutez de nouvelles commandes puissantes à vos évènements.

.. _appelsdescriptvxa:

Appels de script pour RPG Maker VX Ace
======================================

.. highlight:: ruby

Dans cette liste, nous partons du principe que le script :ref:`RME <rme>` est installé. Il permet de raccourcir certaines commandes, ce qui les rend plus claires et faciles à utiliser.

Gestion de la progression
_________________________

Modifier un interrupteur
------------------------

``id`` est le numéro de l'interrupteur dans RPG Maker. En Ruby, ``true`` signifie « vrai » et ``false`` signifie « faux ». On choisit l'un ou l'autre pour rendre l'interrupteur égal à ON ou OFF.

::

    S[id] = true/false

.. _appeldescriptinterrupteurlocal:

Modifier un interrupteur local
------------------------------

Les interrupteurs locaux fonctionnent comme les interrupteurs globaux, si ce n'est qu'ils sont référencés par trois ID : une carte, un évènement, et un numéro de variable.

::

    SS[map, event, id] = true/false

On peut omettre ``map`` et ``event`` pour indiquer « sur la carte actuelle » et « dans l'évènement actuel ». Les deux écritures suivantes sont donc possibles ::

    SS[event, id] = true/false
    SS[id] = true/false

Modifier une variable
---------------------

``id`` est le numéro de la variable dans RPG Maker. ``value`` est sa nouvelle valeur, qui peut être un nombre entier, ou bien un autre type de valeur : texte, tableau, etc.

::

    V[id] = value

Modifier une variable locale
----------------------------

Les variables locales sont introduites par RME. Tout comme les :ref:`interrupteurs locaux <appeldescriptinterrupteurlocal>`, elles sont référencées par trois ID, dont les deux premiers peuvent être omis selon le contexte.

::

    SV[map, event, id] = value

Condition
---------

En ruby, « si » se traduit par ``if`` et « sinon » par ``else``.

::

    if # élément à vérifier
      # commandes
    else
      # commandes
    end

On peut écrire « sinon, si » avec ``elsif`` et ainsi imbriquer des conditions facilement.

::

    if # élément à vérifier
      # commandes
    elsif # élément à vérifier si faux
      # commandes
    elsif # élément à vérifier si faux
      # commandes
    else
      # commandes
    end

Appeler un évènement commun
---------------------------

::

    call_common_event(id)

Attendre
--------

::

    wait(frames)

Effets visuels
______________

Effets météorologiques
----------------------

::

    $game_map.screen.change_weather(type, power, transition)

``type`` vaut ``:none``, ``:rain``, ``:storm``, ou ``:snow``. ``power`` est l'intensité de l'effet. ``transition`` est une durée en frames.

Par défaut, les effets météorologiques assombrissent l'écran. Il est possible de désactiver et de réactiver cet effet.

::

    disable_weather_dimness
    enable_weather_dimness

Exemple d'utilisation
#####################

On souhaite faire varier l'intensité de la pluie aléatoirement entre 3 et 9. ``rand(7)`` produit un nombre entre 0 et 6, auquel on ajoute 3.

::

    $game_map.screen.change_weather(:rain, 3 + rand(7), 120)

Scènes du jeu
_____________

Ouvrir le menu de chargement
----------------------------

::

    call_load_screen

Retourner à l'écran titre
-------------------------

::

    call_title_screen

Quitter le jeu
--------------

::

    rm_kill
