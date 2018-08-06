---
title: "Introduction au mapping"
description: "Apprenez à dessiner de plus belles cartes sur RPG Maker. Maîtrisez l'art du mapping et du level-design grâce à nos guides et tutoriels."
menu:
  docs:
    name: "Le mapping"
    parent: "graphisme"
    weight: 1
---

On appelle *mapping* l'action de dessiner une carte (ou *map*) qui sera généralement explorée par le joueur. C'est une activité intuitive, et souvent le premier contact des débutants avec le logiciel.

## Principes de base

Chaque carte possède ses propres propriétés, notamment la taille et le tileset utilisé. On appelle tileset l'ensemble des cases (ou *tiles*) à disposition pour dessiner une carte, à l'image de la palette d'un peintre.

Le format et la taille des tilesets varient selon la version de RPG Maker utilisée, mais ils sont toujours composés de deux éléments principaux : les tiles normaux, et les autotiles. Ces derniers génèrent automatiquement des bords en fonction des tiles qui les entourent, ce qui permet de tracer des chemins facilement. Les autotiles peuvent être animés, pour représenter une étendue d'eau, ou une cascade.

Afin de superposer les éléments, le mapping est réalisé sur deux couches ou plus, selon le logiciel. La première couche est utilisée pour dessiner le sol et les murs, tandis que les couches supérieures permettent de placer des éléments contenant de la transparence, comme les arbres.

Tout comme le dessin et un tas d'autres pratiques créatives, le mapping repose sur des bases théoriques qu'il est bon de connaître afin de s'améliorer et développer son propre style.

## Le style de mapping

### Approche réaliste

*Section vide. Si vous possédez des informations, {{< editpage "modifiez cette page" >}} ou contactez-nous.*

### Approche symbolique

Une approche que l'on peut qualifier de plus symbolique et minimaliste est utilisée dans les jeux Pokémon. Les arbres sont alignés, et les zones d'herbe haute sont de grandes étendues rectangulaires. Les personnages sont plus grands que le reste, et les bâtiments ne respectent pas d'échelle lorsqu'on y entre.

Ce style dégage une grande force évocatrice. Des groupements d'arbres compacts aux bords de la carte laissent imaginer une forêt qui ceinture la zone. Quelques lignes droites de relief suffisent à évoquer un milieu montagnard. Maîtriser l'approche symbolique permet de produire des cartes élégantes, qui ne s'encombrent pas du réalisme pour plutôt mettre l'accent sur les éléments de jeu et de narration. Les tilesets de RPG Maker MV s'y prêtent bien, car composés de gros carrés n'étant pas pensés pour du lissage.

### Connaître son tileset

*Section vide. Si vous possédez des informations, {{< editpage "modifiez cette page" >}} ou contactez-nous.*

### Représentation des murs

Il existe plusieurs façons de représenter les murs en intérieur. Chacune a ses avantages et ses inconvénients. Réfléchissez-y avant de vous lancer dans le mapping, et conservez la même méthode dans tout votre jeu dans un souci de cohérence.

{{< figure src="/images/rpgmaker/mapping/murs.png" caption="Différentes représentations des murs." >}}

## Maîtriser l'éditeur

### Recopier une case

Cliquez-droit sur une case pour récupérer son contenu. Vous pouvez ainsi dessiner avec, tout en générant les autotiles environnants. En maintenant le clic droit, vous pouvez sélectionner une zone rectangulaire à recopier.

{{< figure src="/images/rpgmaker/mapping/copie.png" caption="Copie normale d'une case." >}}

### Recopier exactement une case avec Shift

Pour récupérer non seulement les tiles d'une case, mais aussi ses informations d'autotile, maintenez la touche Shift en cliquant droit. Maintenir Shift en dessinant permet d'appliquer ces informations d'autotile, et d'empêcher la génération des autotiles environnants.

{{< figure src="/images/rpgmaker/mapping/shift.png" caption="Copie d'une case en maintenant Shift." >}}

### Décomposer l'autotile

Sur [RPG Maker XP]({{< ref "rpgmaker.md#rpg-maker-xp" >}}), en double-cliquant sur un autotile, on peut ouvrir une fenêtre affichant toutes les combinaisons possibles. Cette fonctionnalité très utile a disparu dans les versions suivantes.

![Fenêtre d'expansion de l'autotile](/images/mapping/autotileexpansion.png)

## Autres techniques de mapping

### Mapping en panoramas

Le mapping en panoramas est souvent appelé *parallax mapping* dans la communauté RPG Maker, mais il ne faut pas le confondre avec le véritable [parallax mapping](https://fr.wikipedia.org/wiki/Parallax_mapping) dont on parle plus généralement dans le milieu du jeu vidéo, qui est une technique de rendu en 3D.

Cette méthode de mapping est utilisée depuis RPG Maker 2000, mais elle fut plus largement popularisée avec l'arrivée de RPG Maker VX, en raison de ses possibilités de mapping trop restrictives. Cela consiste à réaliser sa carte dans un éditeur d'image externe, au lieu de l'éditeur de RPG Maker. On ancre ensuite l'image produite à la carte du jeu, souvent grâce à l'option de panorama (*parallax* en anglais). Des scripts permettent de mieux paramétrer le panorama et d'en utiliser plusieurs sur une même carte. Ce procédé permet une liberté totale mais produit des fichiers plus lourds, car on perd l'optimisation liée aux cases réutilisables d'un tileset.

Une carte dessinée de la sorte est généralement composée d'une image pour la couche inférieure aux personnages, d'une deuxième image pour la couche supérieure, et d'éventuelles images supplémentaires pour les effets de lumière et de brouillard.

### Programmes dédiés

Toujours dans l'optique d'élargir ses possibilités, il est possible d'utiliser des programmes spécialisés dans le mapping, comme Tiled ([mapeditor.org](http://www.mapeditor.org/)). Cela demande cependant de programmer un interpréteur des données produites, pour les rendre compatibles avec son jeu RPG Maker.
