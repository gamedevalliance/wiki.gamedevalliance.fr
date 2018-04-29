:tocdepth: 3

Liste des appels de script
==========================

Les commandes de cette liste s'utilisent en les écrivant dans un :ref:`appeldescript`. Ce sont les équivalents en programmation des commandes visuelles de RPG Maker.

RPG Maker MV
~~~~~~~~~~~~

Messages
________

Afficher un texte
-----------------

::

    $gameMessage.setFaceImage('Actor1',0)
    $gameMessage.setBackground(1)
    $gameMessage.setPositionType(1)
    $gameMessage.add("Première ligne")
    $gameMessage.add("Deuxième ligne")

Il est possible d'ajouter une infinité de lignes avec ``$gameMessage.add()``.

Afficher des choix
------------------

::

    choices = []; params = [];
    $gameMessage.setChoices(choices, 0)
    choices.push("Premier choix");choices.push("Deuxième choix");
    params.push()

Il est possible d'ajouter une infinité de choix avec ``choices.push()``.

Entrer un nombre
----------------

::

    $gameMessage.setNumberInput(var, digits);

Sélection d'un objet
--------------------

::

    $gameMessage.setItemChoice(var, n);

``n`` est une valeur entre 1 et 4 en fonction du type d'objet.

Afficher un texte défilant
--------------------------

::

    $gameMessage.setScroll(speed, true);
    $gameMessage.add("Texte");

Ecrire ``true`` revient à cocher « Pas d'avance rapide », ``false`` revient à le décocher.

Equipe
______

Modifier l'argent
-----------------

::

    $gameParty.gainGold(n);

Modifier les objets
-------------------

::

    $gameParty.gainItem($dataItems[itemId], n);

Modifier les armes
------------------

::

    $gameParty.gainItem($dataWeapons[weaponId], n, true);

Ecrire ``true`` revient à cocher « Inclure l'équipement », ``false`` revient à le décocher.

Modifier les armures
--------------------

::

    $gameParty.gainItem($dataArmors[weaponId], n, true);

Ecrire ``true`` revient à cocher « Inclure l'équipement », ``false`` revient à le décocher.

Changer les membres du groupe
-----------------------------

::

    $gameParty.addActor(n);
    $gameParty.removeActor(n);

Gestion de la progression
_________________________

Contrôler un interrupteur
-------------------------

::

    $gameSwitches.setValue(num, true/false);

Contrôler une variable
----------------------

::

    $gameVariables.setValue(var, value);

Contrôler un interrupteur local
-------------------------------

::

    $gameSelfSwitches.setValue([mapId, eventId, A-D], true/false);

Réinitialiser tous les interrupteurs locaux
-------------------------------------------

::

    $gameSelfSwitches.clear();

Contrôler le chronomètre
------------------------

::

    $gameTimer.start(time);   $gameTimer.stop();

Condition
---------

::

    if (condition) {
      ···
    else
      ···
    }

Boucle
------

::

    while (;;) {
      ···
    }

Sortir de la boucle
-------------------

::

    break;

Arrêter l'exécution des évènements
----------------------------------

::

    $gameInterpreter._index = $gameInterpreter._list.length;

Appeler un évènement commun
---------------------------

::

    $gameTemp.reserveCommonEvent(n);

Appeler un évènement
--------------------

::

    $gameMap.event(EventID, EventPage).start();

``EventPage`` peut être omis s'il n'est pas nécessaire d'appeler une page spécifique.

Scènes du jeu
_____________

Ouvrir le menu principal
------------------------

::

    SceneManager.push(Scene_Menu);

Ouvrir le menu de sauvegarde
----------------------------

::

    SceneManager.push(Scene_Save);

Vérifier l'existence de sauvegardes
-----------------------------------

::

    DataManager.isAnySavefileExists()

Ouvrir le menu de chargement
----------------------------

::

    SceneManager.push(Scene_Load);

Créer une sauvegarde
--------------------

::

    $gameSystem.onBeforeSave();
    if (DataManager.saveGame(index)) {
      StorageManager.cleanBackup(index);
    }

Charger une sauvegarde
----------------------

::

    if (DataManager.loadGame(index)) {
        $gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y);
        $gamePlayer.requestMapReload();
        SceneManager.goto(Scene_Map);
    }

Effacer une sauvegarde
----------------------

::

    StorageManager.remove(index);

Game over
---------

::

    SceneManager.goto(Scene_Gameover);

Retourner à l'écran titre
-------------------------

::

    SceneManager.goto(Scene_Title);

Quitter le jeu
--------------

::

    SceneManager.exit();

RPG Maker VX Ace
~~~~~~~~~~~~~~~~

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
