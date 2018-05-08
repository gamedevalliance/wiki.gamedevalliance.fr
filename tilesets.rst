.. meta::
   :description: Les tilesets sont les éléments qui vous permettent de dessiner votre carte, à l'image de la palette d'un peintre. Voici le format des tilesets pour toutes les versions de RPG Maker.

Format des tilesets
===================

RPG Maker 2000 et 2003
----------------------

Les tilesets de :ref:`rpgmaker2000` et :ref:`rpgmaker2003` sont au même format, et donc interchangeables. Les tiles font 16 pixels de côté. Un tileset tient dans une seule image, qui doit respecter un agencement précis :

* 3 autotiles animés
* 3 tiles animés
* 12 autotiles
* Tiles de la première couche
* Tiles de la deuxième couche

Dans l'éditeur, une partie différente du tileset est affichée selon qu'on active la première ou la deuxième couche.

RPG Maker XP
------------

A partir de :ref:`rpgmakerxp` et jusqu'à :ref:`rpgmakervxace`, les tiles font 32 pixels de côté. Sur RPG Maker XP, un tileset est composé de 7 autotiles disposés en haut, chacun étant stocké dans une image indépendante, puis d'une grande image contenant tous les tiles normaux, de largeur fixe mais de hauteur libre. C'est le seul logiciel de la série permettant d'utiliser des tilesets de taille infinie. Certains jeux utilisent par exemple des tilesets de plus de 10 000 pixels de hauteur, sans impact notable sur les performances. Chaque tile peut être librement disposé sur l'une des trois couches disponibles.

RPG Maker VX
------------

Le format des tilesets de :ref:`rpgmakervx` change drastiquement, pour revenir à une philosophie similaire à RPG Maker 2000, avec un agencement très strict. Un tileset est composé de 5 sets, nommés A à E. La couche active est automatiquement déterminée par le set sélectionné dans l'éditeur. Le set A, dédié à la première couche, contient un grand nombre d'autotiles, afin de faciliter le mapping de nombreux éléments, même les murs. Les sets B à E contiennent tous les éléments à superposer sur la deuxième couche.

Le logiciel inclut une limite 5 tilesets par jeu, et fut largement critiqué pour cette raison. Il est possible de contourner cette limite à l'aide de scripts.

RPG Maker VX Ace
----------------

:ref:`rpgmakervxace` est quasiment identique à son prédecesseur, mais supprime la limite du nombre de tilesets par jeu. Une couche dédiée aux régions fait son apparition. Ce sont des zones invisibles numérotées, utiles à la programmation de systèmes.

RPG Maker MV
------------

:ref:`rpgmakermv` utilise le même format que RPG Maker VX Ace, avec des tiles de 48 pixels de côté. Même si à l'utilisation, le logiciel donne l'impression qu'il n'y a que deux couches, en réalité il y a cinq sous-couches, toutes gérées automatiquement par le logiciel. Les deux premières sous-couches sont les plus basses et sont réservées à l'onglet A. Les deux dernières sont les plus hautes et sont réservées aux onglets B, C, D et E. Entre les sous-couches basses et les sous-couches hautes on trouve la sous-couche d'ombre.

Quelques indications pour une meilleure compréhension du fonctionnement des deux sous-couches basses :

* il y a une différence majeure entre le type de tileset dit **Type de monde** et le type de tileset dit **Type de zone**
* ceci concerne essentiellement le tileset [A2], l'un des composants de l'onglet A
* la moitié gauche du tileset [A2] appartient à la sous-couche *base* (la plus basse) et la moitié droite constitue la sous-couche *décoration*
* les tilesets [A1], [A3], [A4] et [A5] appartiennent également à la sous-couche *base*
* en mode **Type de zone**, la sous-couche *décoration* peut se combiner à n'importe quel tile de la sous-couche *base*
* en mode **Type de monde**, si on veut placer un tile de la sous-couche *décoration* sur un tile de la deuxième colonne ou la quatrième colonne du tileset [A2] (et uniquement ces tiles précisément), la sous-couche *base* va automatiquement être changée par le logiciel pour le tile de la première colonne ou la troisième colonne du tileset [A2], sinon elle se comporte comme en mode **Type de zone**

Quelques indications pour une meilleure compréhension du fonctionnement des deux sous-couches hautes :

* contrairement à l'onglet A, il n'y a pas de tile dédié à une seule des deux sous-couches, tous les tiles sont utilisables pour les deux sous-couches
* on crée un tile combiné en posant un tile sur un autre tile
* quand on rajoute un troisième tile, celui qui est le plus en-dessous disparait, celui qui était anciennement au-dessus passe automatiquement sur la sous-couche inférieure et le nouveau tile est sur la sous-couche supérieure
* pour effacer totalement et **proprement** un tile combiné, il faut le recouvrir avec le tile transparent en haut à gauche de l'onglet B (c'est un tile spécial)

La combinaison de tiles passables et de tiles impassables en couche haute est source de bugs graphiques : c'est indétectable dans l'éditeur mais ça se verra en jeu ! La règle à suivre est la suivante :

* **si le tile passable a le symbole ☆, qu'il soit sur la couche inférieure ou supérieure, il s'affichera toujours au-dessus en jeu**
* cependant, la passabilité du tile combiné dépend de la passabilité de l'autre tile qui lui est associé (un tile combiné composé d'un tile O et d'un tile ☆ sera passable, un tile combiné composé d'un tile X et d'un tile ☆ sera bloquant) peu importe l'ordre dans lequel ils ont été combinés
