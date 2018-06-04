.. meta::
   :description: Les interrupteurs sont des outils essentiels pour programmer la logique d'un jeu sur RPG Maker. Nous verrons ici leur fonctionnement ainsi que des exemples d'utilisation.

Interrupteurs
=============

Les interrupteurs et les :ref:`variables <variables>` sont des outils essentiels pour programmer la logique d'un jeu sur RPG Maker. On différencie les interrupteurs normaux, ayant une portée globale, des interrupteurs locaux, qui sont propres à chaque évènement. Nous verrons ici le fonctionnement de chacun, ainsi que des exemples d'usages courants.

.. _interrupteurs:

Interrupteurs globaux
---------------------

Un interrupteur peut avoir deux états : ON ou OFF, comme les interrupteurs du monde réel. En programmation, on appelle cela un `booléen <https://fr.wikipedia.org/wiki/Bool%C3%A9en>`_. L'état d'un interrupteur se modifie par la commande d'évènement :ref:`gestiondesinterrupteurs`, et reste mémorisé tout au long du jeu. On peut vérifier l'état de l'interrupteur dans une :ref:`condition <condition>`, ou par un :ref:`appel de script <appeldescript>`.

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

RPG Maker MV
>>>>>>>>>>>>

On peut changer l'état d'un interrupteur en insérant ce code dans un appel de script ::

    $gameSwitches.setValue(id, value);

Où ``id`` est le numéro de l'interrupteur, et ``value`` peut être ``true`` pour ON, ou ``false`` pour OFF.

Pour lire la valeur d'un interrupteur, on procède comme suit ::

    $gameSwitches.value(id);

Cela renverra ``true`` ou ``false``.

RPG Maker VX Ace
>>>>>>>>>>>>>>>>

On accède à l'état d'un interrupteur avec ``$game_switches[id]`` où ``id`` est le numéro de l'interrupteur. On peut le rendre égal à ``true`` pour ON, ou ``false`` pour OFF, comme dans cet exemple :

.. code-block:: ruby

    $game_switches[1] = true

.. _interrupteurslocaux:

Interrupteurs locaux
--------------------

Utiliser des interrupteurs pour le moindre évènement de son jeu est fastidieux et rend rapidement la liste des interrupteurs difficile à lire. C'est pourquoi les interrupteurs locaux ont été ajoutés à partir de RPG Maker XP.

Ils sont basés sur le principe des :ref:`interrupteurs classiques <interrupteurs>`, avec la particularité d'agir uniquement dans l'évènement dans lequel ils sont utilisés. Chaque évènement possède quatre interrupteurs locaux, A, B, C et D. La commande :ref:`gestiondesinterrupteurslocaux` et les :ref:`conditions <condition>` permettent d'accéder aux interrupteurs locaux de l'évènement qui lance la commande.

Dans RPG Maker MV, la traduction française est trompeuse, les nommant à tort *interrupteurs auto*.

Exemple d'utilisation
~~~~~~~~~~~~~~~~~~~~~

Les interrupteurs locaux sont utilisés pour influer sur l'évènement en cours uniquement. Ils sont très utiles dans les évènements répétés plusieurs fois au cours du jeu et dont chaque instance doit rester indépendante, par exemple les coffres.

Créez un coffre que le joueur peut ouvrir pour gagner un objet. A la fin de l'évènement, utilisez la commande **Gestion des interrupteurs locaux** pour activer l'interrupteur local A. Créez une nouvelle page dans l'évènement, avec une apparence de coffre ouvert, mais aucune commande. Il s'agit de l'état du coffre après que le joueur l'ait ouvert, afin qu'il ne puisse pas interagir avec une nouvelle fois. En haut à gauche de la fenêtre se trouve un espace Conditions. Ce sont les conditions requises pour que la page 2 soit activée. Cochez Interrupteur local A.

Vous pouvez copier-coller le coffre sans adapter les commandes, car chaque nouvel évènement utilisera son propre interrupteur local.

Commandes de script
~~~~~~~~~~~~~~~~~~~

RPG Maker MV
>>>>>>>>>>>>

Avec un **appel de script**, il est possible d'accéder à un interrupteur local depuis n'importe quel évènement ::

    $gameSelfSwitches.setValue([map, event, 'letter'], value);

Où ``map`` est l'ID de la carte, ``event`` est l'ID de l'évènement, ``letter`` est la lettre désignant l'interrupteur local, et ``value`` peut être ``true`` ou ``false``. Pour plus de clarté, un appel de script complet peut ressembler à ceci ::

    var key = [22, 5, 'A'];
    $gameSelfSwitches.setValue(key, true);

RPG Maker VX Ace
>>>>>>>>>>>>>>>>

.. highlight:: ruby

On utilise les arguments décrits ci-dessus, en changeant la ligne par ``$game_self_switches[[map, event, 'letter']]``, ce qui nous amène à reproduire l'exemple ainsi ::

    $game_self_switches[[22, 5, 'A']] = true
