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

On accède à l'état d'un interrupteur avec ``$game_switches[id]`` où ``id`` est le numéro de l'interrupteur. On peut le rendre égal à ``true`` pour ON, ou ``false`` pour OFF, comme dans cet exemple ::

    $game_switches[1] = true

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
et les **conditions** permettent d'accéder aux interrupteurs locaux de l'évènement qui lance la commande.

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

Où ``map`` est l'ID de la carte, ``event`` est l'ID de l'évènement, ``letter`` est la lettre désignant l'interrupteur local,
et ``value`` peut être ``true`` ou ``false``. Pour plus de clarté, un appel de script complet peut ressembler à ceci ::

    var key = [22, 5, 'A'];
    $gameSelfSwitches.setValue(key, true);

RPG Maker VX Ace
>>>>>>>>>>>>>>>>

On utilise les arguments décrits ci-dessus, en changeant la ligne par ``$game_self_switches[[map, event, 'letter']]``, ce qui nous amène à reproduire l'exemple ainsi ::

    $game_self_switches[[22, 5, 'A']] = true

.. _variables:

Variables
---------

Principe
~~~~~~~~

En programmation, une variable est identifiée par un nom, et peut contenir toutes sortes de données : du texte, un tableau, un nombre, etc.

Dans RPG Maker, les variables du jeu sont plus simples. Elles sont désignées par un numéro que l'on appelle identifiant (ID), et contiennent un nombre qui est la valeur de la variable. Ce nombre peut être modifié à tout moment dans un évènement.

RPG Maker utilise l'ID pour désigner une variable, mais pour un humain, ce nombre ne permet pas de reconnaître l'utilité facilement. C'est pourquoi nous pouvons nommer les variables, bien que cette information soit inutile pour le logiciel. Ainsi, nous comprenons en un clin d'œil quelle variable représente l'or du joueur, ou le nombre d'orcs abattus dans le jeu.

Une variable se modifie par la commande d'évènement **Gestion des variables**, et reste mémorisée tout au long du jeu.
A travers une **Condition**, on peut réaliser les vérifications suivantes :

+--------------------------+----------------------+
| La variable est...       | par rapport à...     |
+==========================+======================+
| * égale                  | * Un nombre spécifié |
| * supérieure             | * Une autre variable |
| * supérieure ou égale    |                      |
| * inférieure             |                      |
| * inférieure ou égale    |                      |
+--------------------------+----------------------+

Ces vérifications peuvent aussi être réalisées via un appel de script.

Exemple d'utilisation
~~~~~~~~~~~~~~~~~~~~~

Tout comme les :ref:`interrupteurs normaux <interrupteurs>`, les variables sont globales et gardent leur valeur entre les évènements.

Dans cet exemple, le joueur parle à un personnage important du village : le maire. Celui-ci n'aime que les personnes riches et ayant du pouvoir. Nous souhaitons que le maire change d'attitude en fonction de la richesse du joueur :

* Si on a moins de 100 pièces d'or : « *Je ne parle pas aux pauvres. Hors de ma vue !* »
* Si on a au moins 100 pièces d'or : « *Bienvenue dans notre humble village. Puis-je vous faire visiter ?* »

Dans l'événement du maire, utilisez la commande **Gestion des variables**. Choisissez une variable que vous nommerez
"Or du joueur". Dans la section **Opération** laissez l'option **Régler**, afin de remplacer la valeur déjà existante. Dans la section **Opérande**, choisissez l'option **Données du Jeu**, et dans la liste déroulante de l'option **Autre**, choisissez **Or**.

Créez une condition pour vérifier que la variable "Or du joueur" est **supérieure ou égale** à 100.
Cochez la case permettant d'exécuter des commandes si la condition n'est pas remplie.
A l'intérieur de la branche conditionnelle, insérez le texte « *Bienvenue dans notre humble village. Puis-je vous faire visiter ?* » et dans la branche **Sinon**, insérez « *Je ne parle pas aux pauvres. Hors de ma vue !* ».

Cet exemple peut également être réalisé en fonction de la force du héros, ou toute autre caractéristique, pour peu que l'on choisisse la bonne donnée dans **Gestion des variables**.

Commandes de script
~~~~~~~~~~~~~~~~~~~

RPG Maker MV
>>>>>>>>>>>>

Avec un **appel de script**, il est possible de modifier la valeur d'une variable ::

  $gameVariables.setValue(id, value);

Où ``id`` est l'ID de la variable et ``value`` la nouvelle valeur de la variable, qui peut être un nombre.

On peut accéder à la valeur d'une variable avec cette fonction ::

  $gameVariables.getValue(id);

Où ``id`` est l'ID de la variable.

RPG Maker VX Ace
>>>>>>>>>>>>>>>>

Avec un **appel de script**, il est possible de modifier une variable ::

  $game_variables[id] = value

Où ``id`` est l'ID de la variable et ``value`` la nouvelle valeur de la variable qui peut être un nombre.

On peut accéder à la valeur d'une variable avec cette fonction ::

  $game_variables[id];

Où ``id`` est l'ID de la variable.
