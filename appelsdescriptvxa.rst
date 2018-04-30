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

::

    S[id] = true/false

Modifier un interrupteur local
------------------------------

::

    SS[map, event, id] = true/false

Modifier une variable
---------------------

::

    V[id] = value

Modifier une variable locale
----------------------------

::

    SV[map, event, id] = value

Condition
---------

En ruby, « si » se traduit par ``if`` et « sinon » par ``else``.

::

    if # élément à vérifier
      ···
    else
      ···
    end

On peut écrire « sinon, si » avec ``elsif`` et ansi imbriquer des conditions facilement.

::

    if # élément à vérifier
      ···
    elsif # élément à vérifier si faux
      ···
    elsif # élément à vérifier si faux
      ···
    else
      ···
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
