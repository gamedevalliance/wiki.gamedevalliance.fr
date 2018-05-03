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

On peut créer une infinité de lignes supplémentaires avec ``$gameMessage.add()``.

Afficher des choix
------------------

::

    choices = []; params = [];
    $gameMessage.setChoices(choices, 0)
    choices.push("Premier choix");choices.push("Deuxième choix");
    params.push()

On peut créer une infinité de choix supplémentaires avec ``choices.push()``.

Entrer un nombre
----------------

Demandez au jouer d'entrer un nombre à ``n`` chiffres que vous stockerez dans la variable ``var``.

::

    $gameMessage.setNumberInput(var, n);

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
      // commandes
    } else {
      // commandes
    }

Boucle
------

.. figure:: https://i.imgur.com/A5r4zWE.png
   :alt: Boucle simple

   Boucle simple et infinie.

Une boucle dans RPG Maker se joue en boucle indéfiniment, à moins d'utiliser une commande pour en sortir. La boucle seule peut se traduire ainsi ::

    while(true) {
      // commandes
    }

En évènement, nous devons créer une condition et sortir de la boucle si elle est validée. Voici un exemple de boucle où un nombre est incrémenté de 0 à 9 avant de sortir de la boucle.

.. figure:: https://i.imgur.com/tpmWeDy.png
   :alt: Boucle simple

   Boucle avec un chiffre allant de 0 à 9.

::

    var i = 0;
    while(true) {
      if (i > 10) {
        break;
      }
      // commandes
      i++;
    }

Pour plus d'élégance, nous pouvons insérer le contenu de la condition directement dans ``while()``. Plus besoin de ``break;`` pour sortir de la boucle, car la condition dans ``while()`` est vérifiée à chaque tour.

::

    var i = 0;
    while (i < 10) {
      // commandes
      i++;
    }

Cependant, le meilleur moyen de réaliser une boucle de ce type reste d'utiliser une boucle for. Plus besoin de gérer la variable ``i`` en dehors de la boucle !

::

    for(var i = 0; i < 10; i++) {
      // commandes
    }

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
