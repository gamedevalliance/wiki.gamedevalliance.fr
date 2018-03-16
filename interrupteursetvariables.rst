Interrupteurs et variables
==========================

Les interrupteurs et les variables sont des outils essentiels pour programmer la logique d'un jeu sur RPG Maker.
Nous verrons ici leur fonctionnement, ainsi que des exemples d'usages courants.

.. contents::
    :depth: 2
    :local:

.. _interrupteurs:

Interrupteurs
-------------

Principe
~~~~~~~~

L'état d'un interrupteur se modifie par la commande d'évènement **Gestion des interrupteurs**.
Pour lire l'état d'un interrupteur, on crée une **Condition**.
On peut également y accéder par un appel de script.

Exemples d'utilisation
~~~~~~~~~~~~~~~~~~~~~~

Commandes de script
~~~~~~~~~~~~~~~~~~~

Sur RPG Maker MV ::

    $gameSwitches.setValue(switchId, value);

Où ``switchID`` est le numéro de l'interrupteur, et ``value`` peut être ``true`` pour ON, ou ``false`` pour OFF.

Pour lire la valeur d'un interrupteur, on procède comme suit ::

.. _interrupteurslocaux:

Interrupteurs locaux
--------------------

Utiliser des interrupteurs pour le moindre évènement de son jeu est fastidieux et rend rapidement la liste des interrupteurs
difficile à lire. C'est pourquoi les interrupteurs locaux sont disponibles à partir de RPG Maker XP.

Principe
~~~~~~~~

Ils sont basés sur le principe des
:ref:`interrupteurs classiques <interrupteurs>`, avec la particularité d'agir uniquement dans l'évènement dans lequel ils sont
utilisés. Chaque évènement possède quatre interrupteurs locaux, A, B, C et D. La commande **Gestion des interrupteurs locaux**
et les **conditions** permettent toujours d'accéder aux interrupteurs locaux de l'évènement qui lance la commande.

Exemples d'utilisation
~~~~~~~~~~~~~~~~~~~~~~

Commandes de script
~~~~~~~~~~~~~~~~~~~

Avec un **appel de script**, il est possible d'accéder à un interrupteur local depuis n'importe quel évènement ::

    $gameSelfSwitches.setValue([mapId, eventId, 'letter'], value);

Où ``mapId`` est l'ID de la carte, ``eventID`` est l'ID de l'évènement, ``letter`` est la lettre désignant l'interrupteur local,
et ``value`` peut être ``true`` ou ``false``. Un appel de script complet peut ressembler à ceci ::

    var key = [22, 5, 'A'];
    $gameSelfSwitches.setValue(key, true);

.. _variables:

Variables
---------

``$gameVariables.setValue(var, value);``
