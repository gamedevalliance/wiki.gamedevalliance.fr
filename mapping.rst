Le mapping
==========

On appelle *mapping* l'action de dessiner une carte (ou *map*) qui sera généralement explorée par le joueur. C'est une activité intuitive, et souvent le premier contact des débutants avec le logiciel.

.. contents::
    :depth: 2
    :local:

Principes de base
-----------------

Chaque carte possède ses propres propriétés, notamment la taille et le tileset utilisé. On appelle tileset l'ensemble des cases (ou *tiles*) à disposition pour dessiner une carte, à l'image de la palette d'un peintre.

Le format et la taille des tilesets varient selon la version de RPG Maker utilisée, mais ils sont toujours composés de deux éléments principaux : les tiles normaux, et les autotiles. Ces derniers génèrent automatiquement des bords en fonction des tiles qui les entourent, ce qui permet de tracer des chemins facilement. Les autotiles peuvent être animés, pour représenter une étendue d'eau, ou une cascade.

Afin de superposer les éléments, le mapping est réalisé sur deux couches ou plus, selon le logiciel. La première couche est utilisée pour dessiner le sol et les murs, tandis que les couches supérieures permettent de placer des éléments contenant de la transparence, comme les arbres.

Spécificités des logiciels
--------------------------

RPG Maker 2000 et 2003
~~~~~~~~~~~~~~~~~~~~~~

Les tilesets de :ref:`rpgmaker2000` et :ref:`rpgmaker2003` sont au même format, et donc interchangeables. Les tiles font 16 pixels de côté. Un tileset tient dans une seule image, qui doit respecter un agencement précis :

* 3 autotiles animés
* 3 tiles animés
* 12 autotiles
* Tiles de la première couche
* Tiles de la deuxième couche

Dans l'éditeur, une partie différente du tileset est affichée selon qu'on active la première ou la deuxième couche.

RPG Maker XP
~~~~~~~~~~~~

A partir de :ref:`rpgmakerxp` et jusqu'à :ref:`rpgmakervxace`, les tiles font 32 pixels de côté. Sur RPG Maker XP, un tileset est composé de 7 autotiles disposés en haut, chacun étant stocké dans une image indépendante, puis d'une grande image contenant tous les tiles normaux, de largeur fixe mais de hauteur libre. C'est le seul logiciel de la série permettant d'utiliser des tilesets de taille infinie. Certains jeux utilisent par exemple des tilesets de plus de 10 000 pixels de hauteur, sans impact notable sur les performances. Chaque tile peut être librement disposé sur l'une des trois couches disponibles.

RPG Maker VX
~~~~~~~~~~~~

Le format des tilesets de :ref:`rpgmakervx` change drastiquement, pour revenir à une philosophie similaire à RPG Maker 2000, avec un agencement très strict. Un tileset est composé de 5 sets, nommés A à E. La couche active est automatiquement déterminée par le set sélectionné dans l'éditeur. Le set A, dédié à la première couche, contient un grand nombre d'autotiles, afin de faciliter le mapping de nombreux éléments, même les murs. Les sets B à E contiennent tous les éléments à superposer sur la deuxième couche.

Le logiciel inclut une limite 5 tilesets par jeu, et fut largement critiqué pour cette raison. Il est possible de contourner cette limite à l'aide de scripts.

RPG Maker VX Ace
~~~~~~~~~~~~~~~~

:ref:`rpgmakervxace` est quasiment identique à son prédecesseur, mais supprime la limite du nombre de tilesets par jeu. Une couche dédiée aux régions fait son apparition. Ce sont des zones invisibles numérotées, utiles à la programmation de systèmes.

RPG Maker MV
~~~~~~~~~~~~

:ref:`rpgmakermv` utilise le même format que RPG Maker VX Ace, avec des tiles de 48 pixels de côté. Trois couches sont disponibles, mais elles sont gérées automatiquement par le logiciel. La première couche reste réservée à l'onglet A, tandis que les deux couches supérieures sont utilisées en superposant deux éléments des autres onglets. Cette fonctionnalité est une source de bugs, ainsi le résultat affiché dans l'éditeur peut différer de l'affichage en jeu.

Autres techniques de mapping
----------------------------

Parallax mapping
~~~~~~~~~~~~~~~~

Le parallax mapping est une technique utilisée depuis RPG Maker 2000, qui fut plus largement popularisée avec l'arrivée de RPG Maker VX, en raison de ses possibilités de mapping trop restrictives. Cela consiste à réaliser sa carte dans un éditeur d'image externe, au lieu de l'éditeur de RPG Maker, puis à ancrer l'image produite à la carte du jeu, souvent à l'aide d'un script. Ce procédé permet une liberté totale mais produit des fichiers beaucoup plus lourds, car on perd l'optimisation liée aux cases réutilisables d'un tileset.

Une carte dessinée en parallax mapping est composée d'une image pour la couche inférieure aux personnages, d'une deuxième image pour la couche supérieure, et d'éventuelles images supplémentaires pour les effets de lumière et de brouillard.

Programmes dédiés
~~~~~~~~~~~~~~~~~

Toujours dans l'optique d'élargir ses possibilités, il est possible d'utiliser des programmes spécialisés dans le mapping, comme Tiled (`mapeditor.org <http://www.mapeditor.org/>`_). Cela demande cependant de programmer un interpréteur des données produites, pour les rendre compatibles avec son jeu RPG Maker.

Conseils pour un mapping esthétique
-----------------------------------

*Section vide.*
