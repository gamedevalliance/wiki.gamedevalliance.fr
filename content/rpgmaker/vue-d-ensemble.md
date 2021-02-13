---
title: "Vue d'ensemble"
description: "Découvrez nos guides et nos tutoriels sur RPG Maker ! Téléchargez les meilleurs scripts et plugins de la communauté française. Perfectionnez votre maîtrise de RPG Maker et créez votre propre aventure."
portail: rpgmaker
aliases:
    - /rpgmaker/caracteristiques-et-formules/
    - /rpgmaker/caracteristiques/
    - /rpgmaker/formules/
    - /rpgmaker/evenements/
    - /rpgmaker/exporter/
    - /rpgmaker/formats/
    - /rpgmaker/interrupteurs/
    - /rpgmaker/variables/
    - /rpgmaker/mapping/
---

## Le mapping

On appelle *mapping* l'action de dessiner une carte (ou *map*) qui sera généralement explorée par le joueur. C'est une activité intuitive et souvent le premier contact des débutants avec le logiciel.

Chaque carte possède ses propres propriétés, notamment la taille et le tileset utilisé. On appelle tileset l'ensemble des cases (ou *tiles*) à disposition pour dessiner une carte, à l'image de la palette d'un peintre.

Le format et la taille des tilesets varient selon la version de RPG Maker utilisée mais ils sont toujours composés de deux éléments principaux : les tiles normaux et les autotiles. Ces derniers génèrent automatiquement des bords en fonction des tiles qui les entourent, ce qui permet de tracer des chemins facilement. Les autotiles peuvent être animés pour représenter une étendue d'eau ou une cascade par exemple.

Afin de superposer les éléments, le mapping est réalisé sur deux couches ou plus selon le logiciel. La première couche est utilisée pour dessiner le sol et les murs tandis que les couches supérieures permettent de placer des éléments contenant de la transparence, comme les arbres.

Tout comme le dessin et un tas d'autres pratiques créatives, le mapping repose sur des bases théoriques qu'il est bon de connaître afin de s'améliorer et développer son propre style.

### Le style de mapping

#### Approche symbolique

Une approche que l'on peut qualifier de symbolique et minimaliste est notamment utilisée dans les jeux *Pokémon*. Les arbres sont alignés et les zones d'herbe haute sont de grandes étendues rectangulaires. Les personnages sont plus grands que le reste et les bâtiments ne respectent pas d'échelle lorsqu'on y entre.

Ce style dégage une grande force évocatrice. Des groupements d'arbres compacts aux bords de la carte laissent imaginer une forêt qui ceinture la zone. Quelques lignes droites de relief suffisent à évoquer un milieu montagnard. Maîtriser l'approche symbolique permet de produire des cartes élégantes, qui ne s'encombrent pas du réalisme pour plutôt mettre l'accent sur les éléments de jeu et de narration. Les tilesets de RPG Maker MV s'y prêtent bien car composés de gros carrés n'étant pas pensés pour du lissage.

#### Représentation des murs

Il existe plusieurs façons de représenter les murs en intérieur. Chacune a ses avantages et ses inconvénients. Réfléchissez-y avant de vous lancer dans le mapping et conservez la même méthode dans tout votre jeu dans un souci de cohérence.

{{< figure src="/rpgmaker/mapping/murs.png" caption="Différentes représentations des murs." >}}

### Maîtriser l'éditeur

#### Recopier une case avec Shift

Cliquez-droit sur une case pour récupérer son contenu. Vous pouvez ainsi dessiner avec tout en générant les autotiles environnants. En maintenant le clic droit, vous pouvez sélectionner une zone rectangulaire à recopier.

{{< figure src="/rpgmaker/mapping/copie.png" caption="Copie normale d'une case." >}}

Pour récupérer non seulement les tiles d'une case mais aussi ses informations d'autotile, maintenez la touche Shift en cliquant droit. Maintenir Shift en dessinant permet d'appliquer ces informations d'autotile et d'empêcher la génération des autotiles environnants.

{{< figure src="/rpgmaker/mapping/shift.png" caption="Copie d'une case en maintenant Shift." >}}

#### Décomposer l'autotile

Sur [RPG Maker XP]({{< ref "/rpgmaker/historique.md#rpg-maker-xp" >}}), en double-cliquant sur un autotile, on peut ouvrir une fenêtre affichant toutes les combinaisons possibles. Cette fonctionnalité très utile a disparu dans les versions suivantes.

![Fenêtre d'expansion de l'autotile](/rpgmaker/mapping/autotileexpansion.png)

### Autres techniques de mapping

#### Mapping en panoramas

Le mapping en panoramas est souvent appelé *parallax mapping* dans la communauté RPG Maker, mais il ne faut pas le confondre avec le véritable [parallax mapping](https://fr.wikipedia.org/wiki/Parallax_mapping) dont on parle plus généralement dans le milieu du jeu vidéo, qui est une technique de rendu en 3D.

Cette méthode de mapping est utilisée depuis RPG Maker 2000 mais elle fut plus largement popularisée avec l'arrivée de RPG Maker VX en raison de ses possibilités de mapping trop restrictives. Cela consiste à réaliser sa carte dans un éditeur d'image externe au lieu de l'éditeur de RPG Maker. On ancre ensuite l'image produite à la carte du jeu, souvent grâce à l'option de panorama (*parallax* en anglais). Des scripts permettent de mieux paramétrer le panorama et d'en utiliser plusieurs sur une même carte. Ce procédé permet une liberté totale mais produit des fichiers plus lourds car on perd l'optimisation liée aux cases réutilisables d'un tileset.

Une carte dessinée de la sorte est généralement composée d'une image pour la couche inférieure aux personnages, d'une deuxième image pour la couche supérieure et d'éventuelles images supplémentaires pour les effets de lumière et de brouillard.

#### Programmes dédiés

Toujours dans l'optique d'élargir ses possibilités, il est possible d'utiliser des programmes spécialisés dans le mapping comme *Tiled* ([mapeditor.org](http://www.mapeditor.org/)). Cela demande cependant de programmer un interpréteur des données produites pour les rendre compatibles avec son jeu RPG Maker.

## Les évènements

Un évènement peut avoir une apparence, se déplacer et exécuter des commandes pour faire évoluer le jeu. Il se place sur une case de la carte, sur la couche d'évènements.

### Déclenchement

Le déclencheur permet de spécifier à quel moment du jeu s'exécutent les commandes de l'évènement.

![Menu déroulant des déclencheurs d'évènement](/rpgmaker/evenements/declencheur.png)

- **Touche action :** Exécute les commandes une fois, lorsque le joueur appuie sur la touche action devant ou sur l'évènement.
- **Contact avec le héros :** En plus de l'effet de **Touche action**, les commandes s'exécutent également si le joueur entre en contact à l'aide des touches de déplacement.
- **Contact avec l'évènement :** En plus de l'effet de **Contact avec le héros**, se déclenche quand le héros et l'évènement entrent en contact par n'importe quel moyen. Par exemple, si l'évènement poursuit le héros qui se fait rattraper à son insu.
- **Automatique :** Dès lors que la transition d'arrivée sur la carte est terminée, les commandes s'écutent en boucle indéfiniment. Tant qu'un évènement automatique est actif, le joueur est bloqué, ce qui est utile pour les cinématiques.
- **Processus parallèle :** Dès l'arrivée sur la carte, les commandes s'exécutent en boucle indéfiniment. Comme son nom l'indique, l'évènement ne bloque pas le joueur pendant son exécution. Plusieurs processus parallèles peuvent être actifs en même temps.

### Pages et conditions d'activation

Un évènement peut contenir plusieurs pages, chacune ayant ses propres paramètres et commandes. Le jeu tentera toujours d'activer la page la plus à droite possible, sauf dans les évènements des groupes de combat où la page la plus à gauche possible est activée.

![Pages d'évènement et conditions d'activation](/rpgmaker/evenements/pages.png)

Les conditions dans le coin supérieur gauche d'une page doivent être remplies pour que la page soit active. Ainsi, il est possible de naviguer entre les pages en spécifiant des conditions que l'on remplira progressivement au cours du jeu.

### Commandes d'évènement

La plupart des commandes sont explicites et peuvent être comprises en expérimentant rapidement. Certaines proposent néanmoins des fonctionnalités complexes qu'il n'est pas évident de déceler au premier abord. Cette section détaille quelques astuces parfois méconnues liées aux commandes.

#### Afficher un message

Permet d'écrire les dialogues du jeu. En laissant votre curseur un instant sur le champ de texte, une info-bulle apparait et contient la liste des codes disponibles, permettant d'afficher des valeurs dynamiques dans le message comme le montant d'argent possédé.

* `\V[n]` Valeur de la variable numéro `n`.
* `\N[n]` Personnage en `n` position dans la base de données.
* `\P[n]` Nom du personnage en `n` position dans le groupe.
* `\G` Nom de la monnaie.
* `\C[n]` Affiche la suite du texte dans la couleur numéro `n`.
* `\I[n]` Icône numéro `n`.
* `\{` Affiche la suite du texte en plus grand.
* `\{` Affiche la suite du texte en plus petit.
* `\\` Affiche le caractère `\`.
* `\$` Affiche la fenêtre de l'argent du groupe.
* `\.` Arrête le défilement du texte pendant 1⁄4 de seconde.
* `\|` Arrête le défilement du texte pendant une seconde.
* `\!` Attend l'appui de la touche Action pour faire défiler la suite du texte.
* `\>` Affiche d'un bloc la suite de la ligne.
* `\<` Reprend le défilement normal du texte.
* `\^` Ferme la fenêtre sans attendre l'appui de la touche Action.

#### Modifier une variable

Modifie la valeur d'une [variable]({{< ref "#les-variables" >}}) ou d'une plage de variables. Il est possible de leur attribuer une nouvelle valeur prédéterminée ou tirée des données du jeu et d'effectuer des opérations mathématiques.

Une variable peut contenir d'autres types de valeur. Par exemple, pour stocker un texte, entrez le script `"Mon texte"`. Notez que les commandes d'évènement de RPG Maker ne peuvent évaluer que les nombres entiers. Pour manipuler des variables d'un autre type, vous devrez utiliser des [appels de script]({{< ref "#appel-de-script" >}}).

#### Commentaire

Vous permet d'ajouter des indications ignorées par le jeu pour vous repérer dans un code complexe ou travailler en groupe.

#### Condition

Une condition permet de détecter si quelque chose est vrai, auquel cas les commandes situées à l'intérieur de la branche conditionnelle s'exécuteront. Si la condition est fausse, la branche "Sinon" est exécutée. Cette branche est facultative et peut être affichée en cochant la case adéquate dans la fenêtre des conditions.

On utilise les conditions pour vérifier qu'un interrupteur est activé, qu'une variable a atteint une certaine valeur, que le chronomètre est arrivé à zéro, que le joueur appuie sur une touche et tout un tas d'autres choses. Il est possible d'imbriquer plusieurs conditions pour réaliser des vérifications complexes.

{{< figure src="/rpgmaker/evenements/conditions.png" alt="Commandes d'évènement" caption="Deux conditions imbriquées." >}}

Parfois, vous aurez besoin de vérifier une donnée indisponible dans la fenêtre des conditions. Dans ce cas, utilisez la commande [Modifier une variable](#modifier-une-variable) pour rendre la variable de votre choix égale à la donnée du jeu souhaitée. Ensuite, réalisez une condition sur cette variable. Pour les cas les plus complexes, il est également possible de vérifier si une ligne de script renvoie vrai ou faux.

#### Créer une boucle

Lorsque le système parcourt un évènement et entre dans une boucle, il y restera bloqué jusqu'à ce qu'on lui donne l'ordre d'en sortir. Cela signifie que lorsque le système atteint la fin de la boucle, il retourne au début et exécute ainsi le contenu de la boucle à l'infini.

Créer une boucle dont il est impossible de sortir bloquera le jeu, à moins qu'elle soit exécutée dans un processus parallèle.

#### Sortir de la boucle

Lorsque le système atteint cette commande, il quitte la boucle en cours et exécute les commandes situées après "Fin de la boucle".

Il est également possible de quitter une boucle en [plaçant une étiquette](#placer-une-etiquette) après la boucle et en utilisant la commande [Aller à l'étiquette](#aller-a-l-etiquette) lorsque vous souhaitez en sortir.

#### Effacer cet évènement

L'évènement est temporairement supprimé tant que vous restez sur la carte. Si vous quittez la carte puis y retournez, l'évènement sera présent à nouveau.

#### Placer une étiquette

Nommez votre étiquette comme il vous plait. Vous pourrez demander au système d'y revenir instantanément avec [Aller à l'étiquette]({{< ref "#alleretiquette" >}}).

#### Aller à l'étiquette

Lorsque le système atteint cette commande, il se positionnera à l'étiquette désignée et continuera à parcourir l'évènement depuis ce nouvel emplacement. Vous pouvez utiliser les étiquettes pour mettre en place des boucles et d'autres logiques complexes.

#### Déplacer un évènement

Contrairement à ce que l'on pourrait penser, cette commande n'est pas seulement utilisée pour déplacer l'évènement ciblé mais aussi pour modifier ses propriétés. C'est donc par cette commande que vous changerez l'apparence ou la priorité d'affichage de vos évènements.

Pour plus de simplicité et de flexibilité, il est possible d'ajouter des sons à sa trajectoire ou de modifier un interrupteur. Pour répondre aux besoins les plus avancés, il est également possible d'exécuter des commandes de script et ainsi d'influer sur des aspects du jeu qui ne sont pas proposés par les boutons.

#### Préparer la transition

Cette commande, disponible uniquement dans [RPG Maker XP]({{< ref "/rpgmaker/historique.md#rpg-maker-xp" >}}), fige l'écran jusqu'à ce que le jeu arrive à la commande [Exécuter la transition]({{< ref "#executer-la-transition" >}}). Seul le rafraîchissement de l'affichage est désactivé mais la logique du jeu s'exécute toujours pendant ce temps. Cela vous permet de préparer un changement de carte, un déplacement de caméra, un changement de ton d'écran ou tout autre effet avant de l'afficher de façon élégante par une transition.

#### Exécuter la transition

Cette commande, disponible uniquement dans [RPG Maker XP]({{< ref "/rpgmaker/historique.md#rpg-maker-xp" >}}), rétablit le rafraîchissement de l'écran qui aura été désactivé au préalable par la commande [Préparer la transition]({{< ref "#executer-la-transition" >}}). La transition est personnalisable et permet de réaliser des mises en scène originales.

#### Appel de script

Cette commande permet d'entrer un texte qui sera évalué dans le langage de script du logiciel. C'est utile pour accéder à des données du jeu habituellement inaccessibles et pour utiliser les scripts que vous avez installés. Plus d'informations dans le [catalogue des appels de script]({{< ref "/rpgmaker/scripts.md#catalogue-des-appels-de-script" >}}).

### Les interrupteurs

Les interrupteurs, tout comme les [variables](#les-variables), sont des outils essentiels pour programmer la logique d'un jeu dans les évènements.

Un interrupteur peut avoir deux états : ON ou OFF. C'est l'équivalent des [booléens](https://fr.wikipedia.org/wiki/Bool%C3%A9en) en programmation. On change leur état avec la commande d'évènement [Modifier un interrupteur]({{< ref "rpgmaker/vue-d-ensemble.md#modifier-un-interrupteur" >}}), et ils restent mémorisés tout au long de la partie, y compris dans la sauvegarde. On peut vérifier l'état d'un interrupteur dans une [condition]({{< ref "rpgmaker/vue-d-ensemble.md#condition" >}}) ou par un [appel de script]({{< ref "rpgmaker/vue-d-ensemble.md#appel-de-script" >}}).

#### Interrupteurs normaux

Les interrupteurs normaux ont une portée globale : ils peuvent être utilisés depuis n'importe quel évènement. Ils permettent donc de sauvegarder une information qui sera utile dans un autre évènement, plus tard dans le jeu.

##### Commandes de script

Su RPG Maker MV et MZ, on peut changer l'état d'un interrupteur en insérant ce code dans un appel de script :

```js
$gameSwitches.setValue(id, value);
```

Où `id` est le numéro de l'interrupteur, et `value` peut être `true` pour ON ou `false` pour OFF.

Cet appel de script renvoie la valeur d'un interrupteur (`true` ou `false`) :

```js
$gameSwitches.value(id);
```

Sur RPG Maker VX Ace, on accède à l'état d'un interrupteur avec `$game_switches[id]`. On peut le rendre égal à `true` pour ON ou `false` pour OFF, comme dans cet exemple :

```ruby
$game_switches[1] = true
```

#### Interrupteurs locaux

Utiliser des interrupteurs normaux pour le moindre évènement de son jeu est fastidieux et rend rapidement la liste des interrupteurs difficile à lire. C'est pourquoi les interrupteurs locaux ont été ajoutés à partir de RPG Maker XP. Ils sont propres à chaque évènement et ne peuvent être accédés depuis un autre évènement, à moins d'utiliser un appel de script.

Chaque évènement possède quatre interrupteurs locaux A, B, C et D. La commande [Gestion des interrupteurs locaux]({{< ref "rpgmaker/vue-d-ensemble.md#interrupteurslocaux" >}}) et les [conditions]({{< ref "rpgmaker/vue-d-ensemble.md#condition" >}}) permettent d'accéder aux interrupteurs locaux de l'évènement qui lance la commande.

Les interrupteurs locaux sont très utiles dans les évènements recopiés plusieurs fois au cours du jeu et dont chaque instance doit rester indépendante, par exemple les coffres. On pourrait copier-coller un coffre sans en changer les commandes, car chaque nouvel évènement utilisera son propre interrupteur local.

##### Commandes de script

Avec un [appel de script]({{< ref "rpgmaker/vue-d-ensemble.md#script" >}}), il est possible d'accéder à un interrupteur local depuis n'importe quel évènement :

```js
$gameSelfSwitches.setValue([map, event, 'letter'], value);
```

Où `map` est l'ID de la carte, `event` est l'ID de l'évènement, `letter` est la lettre désignant l'interrupteur local et `value` peut être `true` ou `false`. Pour plus de clarté, un appel de script complet peut ressembler à ceci :

```js
$gameSelfSwitches.setValue([22, 5, 'A'], true);
```

Sur RPG Maker VX Ace, on utilise les arguments décrits ci-dessus en changeant la ligne par `$game_self_switches[[map, event, 'letter']]`, ce qui nous amène à reproduire l'exemple ainsi :

```ruby
$game_self_switches[[22, 5, 'A']] = true
```

### Les variables

En programmation, une variable est identifiée par un nom et peut contenir toutes sortes de données : du texte, un tableau, un nombre, etc.

Dans RPG Maker, les variables du jeu sont plus simples. Elles sont désignées par un numéro que l'on appelle identifiant (ID) et contiennent un nombre entier qui est la valeur de la variable. Ce nombre peut être modifié à tout moment dans un évènement.

RPG Maker utilise l'ID pour désigner une variable mais pour un humain, ce nombre ne permet pas de reconnaître l'utilité facilement. C'est pourquoi nous pouvons nommer les variables, bien que cette information soit inutile pour le logiciel. Ainsi, nous comprenons en un clin d'œil quelle variable représente l'or du joueur ou le nombre d'orcs abattus dans le jeu.

Une variable se modifie par la commande d'évènement [Modifier une variable]({{< ref "rpgmaker/vue-d-ensemble.md#modifier-une-variable" >}}) et reste mémorisée tout au long du jeu. A travers une [condition]({{< ref "rpgmaker/vue-d-ensemble.md#condition" >}}), on peut réaliser les vérifications suivantes :

- **La variable est :** égale, supérieure, supérieure ou égale, inférieure, inférieure ou égale
- **...par rapport à :** un nombre spécifié, ou une autre variable.

Ces vérifications peuvent aussi être réalisées via un [appel de script]({{< ref "rpgmaker/vue-d-ensemble.md#script" >}}).

#### Commandes de script

Si la commande d'évènement classique ne permet que de stocker un nombre entier dans une variable, elles peuvent en fait contenir des données de toute nature : un texte, un tableau, etc, comme ce serait le cas pour une variable normale en JavaScript ou en Ruby. Le seul moyen de stocker ce type d'information est d'utiliser un appel de script.

##### RPG Maker MV et MZ

Accéder à la valeur d'une variable :

```js
$gameVariables.getValue(id);
```

Où `id` est l'ID de la variable. Modifier la valeur d'une variable :

```js
$gameVariables.setValue(id, value);
```

Où `value` est la nouvelle valeur de la variable.

##### RPG Maker VX Ace

Accéder à la valeur d'une variable :

```ruby
$game_variables[id]
```

Où `id` est l'ID de la variable. Modifier la valeur d'une variable :

```ruby
$game_variables[id] = value
```

Où `value` est la nouvelle valeur de la variable.

## Caractéristiques et formules

A partir de [RPG Maker VX]({{< ref "historique.md#rpg-maker-vx" >}}), les dégâts infligés par une compétence sont personnalisables précisément à l'aide de formules et des caractéristiques.

{{< figure src="/rpgmaker/caracteristiques-et-formules/interface.png" alt="Interface d'écriture de formules" caption="Formule de l'attaque de base." >}}

L'utilisateur de la compétence est représenté par `a` et la cible par `b`. On y associe un attribut avec un point. Par exemple, `a.atk` signifie « l'attaque du joueur » et `b.def` signifie « la défense de la cible ».

### Caractéristiques de base

Caractéristique | Symbole
----------------|--------
Attaque         | `atk`
Défense         | `def`
Magie           | `mat`
Déf. magique    | `mdf`
Agilité         | `agi`
Chance          | `luk`
PV maximum      | `mhp`
PM maximum      | `mmp`

Les caractéristiques des personnages ont une utilité par défaut qui est détaillée ici, mais il est aussi possible de les manipuler d'une façon différente à l'aide des formules.

#### Attaque et défense

L'attaque, la défense, l'attaque magique et la défense magique n'ont aucun effet particulier et sont uniquement utilisées pour calculer les dégâts dans les formules des compétences ou des objets. Leur impact est donc facilement personnalisable.

#### Agilité

##### Attaques surprise

L'agilité influe sur la possibilité de réaliser une attaque surprise au début du combat. Lors d'une attaque surprise, l'adversaire ne peut pas agir durant le premier tour. Les attaques surprises ne peuvent pas survenir lors d'un combat déclenché par un évènement.

- Agilité moyenne de l'équipe >= agilité moyenne des ennemis :
  - Attaque surprise de l'équipe : 5%
  - Attaque surprise de l'ennemi : 3%

- Agilité moyenne de l'équipe < agilité moyenne des ennemis :
  - Attaque surprise de l'équipe : 3%
  - Attaque surprise de l'ennemi : 5%

De plus, dans l'onglet *Autre* des caractéristiques, l'effet de groupe *Augmenter les attaques préventives** augmente les chances par un facteur de 4. Un autre effet permet de désactiver les attaques surprise ennemies.

##### Fuite

L'agilité détermine également la probabilité de réussir une fuite :

> Chances de fuir (%) = 150 - 100 × **agilité moyenne de l'ennemi** ÷ **agilité moyenne de l'équipe**

Un bonus de 10% est ajouté après chaque tentative de fuite échouée. De plus, l'équipe peut s'échapper à coup sûr lors d'une attaque surprise.

#### Chance

La chance influe lorsqu'on souhaite appliquer une altération d'état à une cible, ou pour calculer la probabilité pour que l'état se dissipe :

> Chance (%) = 100 + (**chance du lanceur** - **chance de la cible**) ÷ 10

### Paramètres supplémentaires

Les caractéristiques "Ex" ont une valeur de 0% par défaut, tandis que les paramètres "Sp" ont une valeur de 100% par défaut. Toutes ces valeurs peuvent varier entre -1000% et +1000%.

Ex    |Signification            |Sp    |Signification
------|-------------------------|------|-----------------------------------------
`hit` |Chance de toucher<sup>1</sup>|`tgr` |Chance d'être ciblé
`eva` |Taux d'esquive<sup>1</sup>   |`grd` |Taux de réduction des dommages
`cri` |Taux de critique         |`rec` |Taux de régénération (via skill)
`cev` |Taux d'esquive critique  |`pha` |Taux de régénération (via item)
`mev` |Taux d'évasion magique   |`mrc` |Augmentation/réduction du coût en MP
`mrf` |Taux de réflexion        |`tcr` |Augmentation/réduction du gain en PT
`cnt` |Chance de contrer<sup>2</sup>|`pdr` |Taux de réduction des attaques physiques
`hrg` |Taux de regen des PV/tour|`mdr` |Taux de réduction des attaques magiques
`mrg` |Taux de regen des PM/tour|`fdr` |Taux de réduction des dommages de terrain<sup>3</sup>
`trg` |Taux de regen des PT/tour|`exr` |Bonus/malus à l'expérience

1. La chance de toucher et la chance d'esquiver sont calculées séparément. Par exemple, si l'attaquant a une précision de 90% et la cible a une esquive de 10%, la chance d'esquiver sera 10% de 90%, ce qui revient à une précision globale de 81%.

2. La contre-attaque est uniquement possible contre les attaques physiques des ennemis.

3. Le taux de réduction des dommages a l'impact suivant :

    Dégâts en défense = Dégâts normaux ÷ (2 × **taux de réduction**)

### Attributs en cours de jeu

Attribut | Signification
---------|------------------
`hp`     | PV actuels
`mp`     | PM actuels
`tp`     | PT actuels
`level`  | Niveau
`v[x]`   | Variable numéro x

### Ecrire des formules

Les formules sont écrites dans le langage de script du logiciel. On peut utiliser les opérateurs suivants mais aussi des parenthèses : la priorité des opérations est respectée.

Opérateur | Signification
----------|-----------------
`+`       | Addition
`-`       | Soustraction
`*`       | Multiplication
`/`       | Division
`**`      | Exponentielle
`%`       | Modulo

Notez que la résistance élémentaire et les autres effets sont calculés séparément. Les formules concernent uniquement les dégâts de base des compétences.

#### RPG Maker VX et VX Ace

Pour réaliser des formules complexes et intéressantes, il est possible de tirer parti des possibilités de Ruby.

##### Conditions

Imaginons une condition simple : si l'attaque de l'utilisateur est supérieure à 20, la compétence fera 200 points de dégâts, sinon, elle fera seulement 100 points de dégâts.

```ruby
if a.atk > 20
  200
else
  100
end
```

Cependant, le champ de formule ne fait qu'une seule ligne. Pour condenser ceci, on écrit `;` à la place d'un retour à la ligne.

```ruby
if a.atk > 20; 200; else; 100; end;
```

Il existe une autre façon d'écrire une condition en une ligne :

```ruby
condition ? commande_si_vrai : commande_si_faux
```

Cela permet d'écrire notre exemple ainsi :

```ruby
a.atk > 20 ? 200 : 100
```

##### Manipuler les nombres

Les nombres peuvent être négatifs en les précédant d'un `-` sans espace. Espacer correctement les opérateurs et les nombres permet d'avoir un meilleur contrôle sur ses opérations.

```ruby
4 + -6 => -2
4 - -6 => 10
```

Evitez de laisser un zéro avant votre nombre ou il sera traité en [base 8](https://fr.wikipedia.org/wiki/Syst%C3%A8me_octal).

```ruby
0567 => 375
```

Il est possible d'utiliser des nombres décimaux en séparant la partie entière et la partie décimale d'un `.`. Utiliser au moins un décimal dans une opération produira toujours un résultat décimal.

```ruby
5 + 10.0 => 15.0
```

Cette astuce vous permet de choisir entre un résultat de division arrondi ou décimal.

```ruby
3 / 2 => 1
3 / 2.0 => 1.5
```

#### RPG Maker MV et MZ

Plusieurs conditions très pratiques peuvent être utilisées au sein d'une formule :

Condition   | La cible...
------------|------------
`isDead()`  | Est morte
`isDying()` | N'a plus qu'un quart de sa vie
`isStateAffected(id)` | Subit le statut de numéro `id`
`isActor()` | Fait partie de l'équipe
`isEnemy()` | Est un ennemi

Elles sont à utiliser ainsi. Pour rappel, `a` est le lanceur de la compétence et `b` est la cible.

```js
b.isDying() ? commande_si_vrai : commande_si_faux
```

## Format des ressources

RPG Maker permet d'utiliser ses propres ressources graphiques et audio (ou *assets*). Il est possible de les importer depuis le gestionnaire de ressources dans l'éditeur ou tout simplement d'ajouter les fichiers au dossier du projet. Cette section répertorie les formats à respecter pour chaque logiciel.

### Format des fichiers audio

Dans RPG Maker, les fichiers audio sont classés dans quatre catégories.

- **BGM :** Musiques jouées en boucle.
- **BGS :** Ambiances sonores jouées en boucle, comme le bruit de la pluie ou d'une cascade.
- **ME :** Courts effets musicaux et jingles, lors d'une victoire ou d'une nuit à l'auberge.
- **SE :** Effets sonores joués une fois.

#### RPG Maker MV et MZ

Les fichiers se trouvent dans le dossier `audio` de votre projet et doivent être au format Ogg Vorbis (`.ogg`) et AAC (`.m4a`). Dans le cas d'un export pour Windows, macOS ou Linux, seul le format Ogg Vorbis est requis. Pour un export web, Android ou iOS, il est nécessaire d'inclure chaque fichier dans les deux formats.

#### RPG Maker VX Ace

Les fichiers doivent être placés dans le dossier `Audio` du projet. [RPG Maker VX Ace]({{< ref "/rpgmaker/historique.md#rpg-maker-vx-ace" >}}) supporte les formats MIDI, Ogg, MP3, WMA et WAVE.

Des informations intégrées aux fichiers peuvent donner des instructions sur la façon de boucler la musique en jeu. Une fois qu'un MIDI arrive à la fin, il est relancé à l'emplacement contenant la valeur de contrôle 111, si elle existe. Dans le cas d'un Ogg, les commentaires `LOOPSTART` et `LOOPLENGTH` permettent de définir le début et la durée de la boucle.

### Format des fichiers image

#### Tilesets

##### RPG Maker MV

[RPG Maker MV]({{< ref "/rpgmaker/historique.md#rpg-maker-mv" >}}) utilise le même format que [RPG Maker VX Ace]({{< ref "/rpgmaker/historique.md#rpg-maker-vx-ace" >}}), mais avec des tiles de 48 pixels de côté. Bien qu'à l'utilisation, le logiciel donne l'impression qu'il n'y a que deux couches, en réalité il y en a cinq, gérées automatiquement par le logiciel.

Les deux premières couches sont les plus basses et elles sont réservées à l'onglet A. Les deux dernières sont les plus hautes et sont réservées aux onglets B, C, D et E. Entre les couches basses et les couches hautes se trouve la couche d'ombre.

- [Templates des tilesets pour RPG Maker MV]({{< ref "/rpgmaker/templates/mv.md" >}})

###### Fonctionnement des couches basses

Les sets A1, A3, A4 et A5 sont liés à la première couche. La moitié gauche du set A2 est liée à la première couche, tandis que la moitié droite est liée à la deuxième couche.

En mode « Type de zone », la deuxième couche peut se combiner à n'importe quel tile de la première couche.

En mode « Type de monde », placer un tile de la deuxième couche sur un tile de la deuxième ou quatrième colonne du set A2, remplace automatiquement la première couche par le tile de la première ou troisième colonne du set A2.

###### Fonctionnement des couches hautes

Le premier tile est placé sur la quatrième couche. Poser un nouveau tile par-dessus le place sur la cinquième couche.

Lorsqu'on ajoute un troisième tile :

- Le tile qui se trouvait sur la quatrième couche disparait ;
- Le tile qui se trouvait sur la cinquième couche passe à la quatrième couche ;
- Le nouveau tile est placé sur la cinquième couche.

Pour effacer facilement la quatrième et la cinquième couche, il faut recouvrir la case avec un tile spécial, situé en haut à gauche de l'onglet B.

La combinaison de tiles passables et de tiles impassables sur les couches hautes cause un bug graphique indétectable dans l'éditeur, mais qui se révèle en jeu. Un tile avec le symbole ☆ s'affichera toujours au-dessus, qu'il soit sur la quatrième ou la cinquième couche. La passabilité de la case dépend alors du tile sur l'autre couche. Ainsi, une combinaison ◯ et ☆ sera passable, tandis qu'une combinaison ╳ et ☆ sera bloquante, et ce peu importe l'ordre de la combinaison.

##### RPG Maker VX et VX Ace

Le format des tilesets de RPG Maker VX change drastiquement par rapport à [RPG Maker XP]({{< ref "/rpgmaker/historique.md#rpg-maker-xp" >}}), pour revenir à une philosophie similaire à [RPG Maker 2000]({{< ref "/rpgmaker/historique.md#rpg-maker-2000" >}}), avec un agencement très strict. Un tileset est composé de 5 onglets, nommés de A à E. La couche active est automatiquement déterminée par l'onglet sélectionné dans l'éditeur. L'onglet A, dédié à la première couche, contient un grand nombre d'autotiles afin de faciliter le mapping des sols et des murs. Les onglets B à E contiennent tous les éléments à superposer sur la deuxième couche.

Le logiciel inclut une limite de 5 tilesets par jeu et fut largement critiqué pour cette raison. Il est possible de contourner cette limite à l'aide de scripts.

RPG Maker VX Ace est quasiment identique à son prédecesseur mais supprime la limite du nombre de tilesets par jeu. Une couche dédiée aux régions fait son apparition. Ce sont des zones invisibles numérotées, utiles à la programmation de systèmes.

- [Templates des tilesets pour RPG Maker VX Ace]({{< ref "/rpgmaker/templates/vxace.md" >}})

##### RPG Maker XP

A partir de [RPG Maker XP]({{< ref "/rpgmaker/historique.md#rpg-maker-xp" >}}) et jusqu'à [VX Ace]({{< ref "/rpgmaker/historique.md#rpg-maker-vx-ace" >}}), les tiles font 32 pixels de côté. Sur RPG Maker XP, un tileset est composé de 7 autotiles disposés en haut, chacun étant stocké dans une image indépendante, puis d'une grande image contenant tous les tiles normaux, de largeur fixe mais de hauteur libre.

C'est le seul logiciel de la série permettant d'utiliser des tilesets de taille infinie. Certains jeux utilisent par exemple des tilesets de plus de 10 000 pixels de hauteur, sans impact notable sur les performances. Chaque tile peut être librement disposé sur l'une des trois couches disponibles.

##### RPG Maker 2000 et 2003

Les tilesets de [RPG Maker 2000]({{< ref "/rpgmaker/historique.md#rpg-maker-2000" >}}) et [RPG Maker 2003]({{< ref "/rpgmaker/historique.md#rpg-maker-2003" >}}) sont au même format, et donc interchangeables. Les tiles font 16 pixels de côté. Un tileset tient dans une seule image, qui doit respecter un agencement précis :

* 3 autotiles animés
* 3 tiles animés
* 12 autotiles
* Tiles de la première couche
* Tiles de la deuxième couche

Dans l'éditeur, une partie différente du tileset est affichée selon qu'on active la première ou la deuxième couche.

#### Sideview Battlers

Ces images représentent un personnage de l'équipe dans les combats en vue de côté. Chaque image fait 64 pixels de côté. Une planche en contient 9×6, pour une taille totale de 576×384 pixels. Trois images alignées forment une animation. Voici la correspondance des poses :

Colonne 1        | Colonne 2           | Colonne 3
-----------------|---------------------|----------
En attente       | Thrust (Poussée)    | S'échappe
Prêt (Physique)  | Swing (Balancier)   | Victoire
Prêt (Magie)     | Tire (Missile)      | PV bas
Défense          | Compétence physique | Altération d'état néfaste
Subit des dégâts | Compétence magique  | Endormi
Esquive          | Utilise un objet    | Mort·e

Les animations jouées en boucle sont répétées dans l'ordre 1-2-3-2, tandis que les animations jouées une fois, comme celle de dégâts, suivent l'ordre 1-2-3.

#### Images système

- **Balloon :** bulles d'émotion. L'espace transparent en bas de l'image peut être complété pour créer des bulles personnalisées.
- **ButtonSet :** affiché sur les appareils tactiles pour éditer les champs de nombres, par exemple lors de l'achat d'objets.
- **Damage :** chiffres de l'affichage des dégâts en combat.
- **GameOver :** image de game over.
- **Loading :** affiché pendant les chargements. Très utile pour les jeux sur navigateur aux chargements plus lent.
- **IconSet :** icônes des objets, armes, compétences, etc.
- **Shadow1 :** ombre affichée en utilisant un avion.
- **Shadow2 :** ombre des membres de l'équipe dans les combats en vue de côté.
- **States :** état des alliés dans les combats en vue de côté.
- **Weapons :** armes affichées lors de l'attaque d'un membre de l'équipe dans les combats en vue de côté. Weapons1 et Weapons2 contiennent 12 images prédéfinies. Weapons3 est destiné à la personnalisation.
- **Window :** éléments composant les fenêtres.

### Format des fichiers vidéo

#### RPG Maker MV et MZ

Les fichiers vidéo sont stockés dans le dossier `movies` du projet et doivent être produits dans deux formats : un fichier WebM et un fichier MP4 encodé avec H.264. Dans le cas d'un export pour Windows ou macOS, seul le fichier WebM est requis. Pour un export web, Android ou iOS, il est nécessaire d'inclure les deux formats.

#### RPG Maker VX Ace

Les fichiers vidéo se trouvent dans le dossier `Movies` du projet et doivent être au format Ogg Theora (`.ogv`). Une vidéo plus large que la résolution du jeu verra ses bords coupés pour rentrer dans la fenêtre.

## Commandes du jeu

De [RPG Maker XP]({{< ref "/rpgmaker/historique.md#rpg-maker-xp" >}}) à [VX Ace]({{< ref "/rpgmaker/historique.md#rpg-maker-vx-ace" >}}), les touches que l'on détecte via les évènements sont en réalité des symboles. Ce que nous appellerons les touches RGSS ne correspondent pas directement à des touches réelles du clavier. Ce tableau rappelle les correspondances pour plus de clarté. Notez que sur [RPG Maker MV]({{< ref "/rpgmaker/historique.md#rpg-maker-mv" >}}), la dénomination des touches est différente.

Touche MV  | Touche RGSS | Clavier
-----------|-------------|-------------------
Directions | Directions  | Flèches, Pavé num.
Shift      | A           | Shift
Annuler    | B           | Echap, Num 0, X
OK         | C           | Espace, Entrée, Z
           | X           | A
           | Y           | S
           | Z           | D
Page préc. | L           | Q, Haut de page
Page suiv. | R           | W, Bas de page

Il est possible d'accéder directement aux touches réelles du clavier avec différents scripts dont [RME]({{< ref "/content/rme.md" >}}).

Fonction          | RPG Maker VX Ace | RPG Maker MV
------------------|------------------|-------------
Plein écran       | Alt + Entrée     | F4
Mode fantôme      | Ctrl*            | Ctrl*
Paramètres        | F1               |
Compteur de FPS   | F2               | F2
Ratio d'affichage |                  | F3
Console           |                  | F8*
Ecran de debug    | F9*              | F9*
Réinitialiser     | F12              | F5

\* Uniquement en testant le jeu depuis l'éditeur.

Le mode fantôme permet de traverser les murs et d'ignorer les combats aléatoires en maintenant **Ctrl**.

## Exporter son jeu

En partageant votre jeu, vous avez peut-être déjà été frustré par un dossier trop lourd ou par des erreurs de fichier manquant. Voici les méthodes les plus simples pour exporter votre jeu le plus proprement possible en fonction de votre logiciel.

### RPG Maker MV

Le dossier de votre projet contient toutes les données du jeu ainsi qu'un fichier pour l'ouvrir dans l'éditeur mais pas d'exécutable pour lancer directement le jeu. Vous ne pouvez donc pas partager ce dossier tel quel.

Dans l'éditeur, ouvrez le menu Fichier et cliquez sur Déploiement. Choisissez le système d'exploitation désiré et choisissez de cocher ou non l'option « Exclure les fichiers inutilisés ».

![Options de déploiement de RPG Maker MV](/rpgmaker/exporter/deploiement.png)

En créant un projet, RPG Maker MV copie toutes les ressources graphiques et audio par défaut dans le dossier du jeu. C'est pourquoi vos projets pèsent plus de 300 Mo par défaut. Pourtant, la plupart du temps vous n'utiliserez pas une grande partie de ces ressources. Il est peu probable que vous ayez besoin de toutes les musiques, toutes les images d'écran titre ou encore toutes les animations d'attaque, qui sont pourtant des fichiers assez lourds.

L'option « Exclure les fichiers inutilisés » permet de produire un dossier plus léger, mais la méthode de tri est imprécise. Les fichiers référencés d'une quelconque façon dans les données du jeu seront conservées. Par exemple, si vous avez laissé la liste des animations par défaut dans la base de données, alors toutes les images d'animation seront incluses à votre projet. De plus, le logiciel ne peut pas détecter les fichiers utilisés par les scripts à moins que les programmeurs aient correctement déclaré les fichiers dans le code, ce qui n'est pas toujours le cas. Vous l'aurez compris : cocher l'option ne suffit pas et il vaut mieux effectuer des vérifications manuelles.

### RPG Maker VX Ace

Sur [RPG Maker VX Ace]({{< ref "historique.md#rpg-maker-vx-ace" >}}) et les versions antérieures, le logiciel, les ressources et les jeux sont trois entités séparées. Les ressources graphiques et audio par défaut sont assemblées dans un paquet appelé RTP pour Run-Time Package. Le RTP est inclus dans l'installation du logiciel mais peut aussi être téléchargé gratuitement depuis le site officiel.

Logiciel | RTP    | Jeu
---------|--------|-----
30 Mo    | 200 Mo | 5 Mo

En créant un projet, RPG Maker VX Ace n'inclut pas le RTP directement mais stipule dans le fichier Game.ini que le jeu en a besoin pour fonctionner. Dans ce cas, le jeu lit les données du RTP depuis son emplacement d'installation.

Cette segmentation des données est pratique pour se partager rapidement des jeux entre collègues possédant déjà le RTP. Cependant, pour la distribution au grand public, c'est plus délicat. Ce ne serait pas très professionnel de demander aux joueurs d'installer eux-mêmes le RTP depuis le site officiel. Pour inclure le RTP à son jeu, il existe deux méthodes.

#### Compilation automatique

Depuis RPG Maker VX Ace, dans le menu Fichier, cliquez sur Compiler le jeu. Choisissez un dossier de destination et cochez « Inclure les RTP ». Le logiciel produit une [archive auto-extractible](https://fr.wikipedia.org/wiki/Auto-extractible) à l'interface peu accueillante. On considère que compresser le dossier soi-même dans un zip est une meilleure pratique. A l'intérieur de cette archive se trouve le jeu et tous les fichiers du RTP. Il est donc recommandé de supprimer les images et musiques inutiles avant la distribution.

#### Inclure le RTP manuellement

Ouvrez le fichier Game.ini situé dans le dossier du projet. La ligne `RTP=RPGVXAce` indique au jeu qu'il doit chercher les ressources dans le RTP installé sur l'ordinateur. Supprimez cette ligne pour rendre votre jeu indépendant ! En lançant le jeu, vous aurez probablement des messages d'erreur indiquant un fichier manquant. En effet, vous devez maintenant ajouter vous-même les fichiers du RTP dont vous avez besoin. Le RTP est généralement installé au même endroit que le logiciel. N'oubliez pas d'inclure le dossier Fonts et d'y ajouter vos polices personnelles si vous en utilisez.

