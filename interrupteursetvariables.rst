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

Un interrupteur peut avoir deux états : ON ou OFF, comme les interrupteurs du monde réel. En programmation, on appelle cela un booléen (`Wikipédia <https://fr.wikipedia.org/wiki/Bool%C3%A9en>`_). L'état d'un interrupteur se modifie par la commande d'évènement **Gestion des interrupteurs**, et reste mémorisé tout au long du jeu. On peut vérifier l'état de l'interrupteur dans une **Condition**, ou par un appel de script.

Exemple d'utilisation
~~~~~~~~~~~~~~~~~~~~~

Les interrupteurs sont globaux, ce qui permet de créer un évènement influant sur d'autres évènements.

Dans cet exemple, le joueur peut parler à deux personnages : des évènements que nous appelleront Eric et Anabelle.
Nous souhaitons qu'Eric puisse nous dire deux choses différentes :

* Si nous n'avons pas parlé à Anabelle : « *Parle-lui, elle t'apprendra les secrets des interrupteurs !* »
* Si nous avons parlé à Anabelle : « *C'était intéressant n'est-ce pas ?* »

Dans l'évènement d'Anabelle, avant ou après son texte, utilisez la commande **Gestion des interrupteurs** pour
activer l'interrupteur de votre choix.

Dans l'évènement d'Eric, créez une condition pour vérifier que l'interrupteur soit activé. Cochez la case
permettant d'exécuter des commandes si la condition n'est pas remplie. A l'intérieur de la branche conditionnelle, insérez le texte
« *C'était intéressant n'est-ce pas ?* » et dans la branche **Sinon**, insérez « *Parle-lui, elle t'apprendra les secrets des interrupteurs !* ».

Commandes de script
~~~~~~~~~~~~~~~~~~~

Sur RPG Maker MV : 

    $gameSwitches.setValue(switchId, value);

Où ``switchID`` est le numéro de l'interrupteur, et ``value`` peut être ``true`` pour ON, ou ``false`` pour OFF.

Pour lire la valeur d'un interrupteur, on procède comme suit : 

    $gameSwitches.value(switchId);

Cela renverra ``true`` ou ``false``.

.. _interrupteurslocaux:

Interrupteurs locaux
--------------------

Utiliser des interrupteurs pour le moindre évènement de son jeu est fastidieux et rend rapidement la liste des interrupteurs
difficile à lire. C'est pourquoi les interrupteurs locaux ont été ajoutés à partir de RPG Maker XP.

Principe
~~~~~~~~

Ils sont basés sur le principe des
:ref:`interrupteurs classiques <interrupteurs>`, avec la particularité d'agir uniquement dans l'évènement dans lequel ils sont
utilisés. Chaque évènement possède quatre interrupteurs locaux, A, B, C et D. La commande **Gestion des interrupteurs locaux**
et les **conditions** permettent toujours d'accéder aux interrupteurs locaux de l'évènement qui lance la commande.

Exemple d'utilisation
~~~~~~~~~~~~~~~~~~~~~

Les interrupteurs locaux sont utilisés pour influer sur l'évènement en cours uniquement.

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
