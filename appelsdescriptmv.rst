:tocdepth: 2

.. meta::
   :description: Découvrez notre liste de commandes de scripts pour personnaliser votre jeu RPG Maker MV. Ajoutez de nouvelles commandes puissantes à vos évènements.

.. _appelsdescriptmv:

Appels de script pour RPG Maker MV
==================================

Messages
________

Afficher un texte
-----------------

::

    $gameMessage.setFaceImage("Actor1", 0)
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
