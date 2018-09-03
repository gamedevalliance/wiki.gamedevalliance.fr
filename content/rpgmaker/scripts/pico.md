---
title: "πco, une collection de plugins de Grim"
description: "πco étend les possibilités des évènements de RPG Maker MV grâce aux appels de scripts."
portail: rpgmaker
aliases:
    - /scripts/pico/
---

πco propose un sous-ensemble minimaliste de [RME]({{< ref "rme.md" >}}) pour les utilisateurs de [RPG Maker MV]({{< ref "/rpgmaker.md#rpg-maker-mv" >}}).

L'idée reposant derrière πco est d'utiliser la commande d'[appel de script]({{< ref "/rpgmaker/scripts/appels.md" >}}) pour étendre les fonctionnalités offertes par les évènements. Le fait de passer par l'appel de script permet plus de flexibilité dans les commandes, par exemple, le fait de pouvoir passer des variables à la place de tous les arguments.

Grim, l'auteur du projet, explique dans la [discussion sur le forum](https://rpgmakeralliance.com/d/248-pco-event-making-et-autres-tribulations) que πco sera un système composé de plusieurs plugins. Le premier, `pico-core.js`, est déjà disponible et sera nécessaire pour utiliser les autres.

## pico-core.js

Ce plugin est la base de πco, le cœur des plugins suivants. Il ajoute les variables locales, des raccourcis syntaxiques, et une première collection de commandes.

- [Lien direct vers le script](https://raw.githubusercontent.com/grrim/pico/develop/plugins/pico-core.js) (clic droit, enregistrer sous...)
- [Liste des commandes](https://grrim.github.io/picocorico/doc.html)

Si le caractère `π` est trop ennuyeux à écrire sur votre clavier, vous pouvez utiliser `Pico` à la place de `π`.

### Raccourcis syntaxiques

Les variables et interrupteurs peuvent être référencés par une écriture plus synthétique. Les interrupteurs locaux peuvent maintenant être facilement modifiés à distance, et les variables locales sont ajoutées par πco.

#### Interrupteurs

- `S(id)` récupère la valeur
- `S(id, value)` modifie la valeur. `value` peut être `true` ou `false`.

#### Variables

- `V(id)` récupère la valeur
- `V(id, value)` modifie la valeur

#### Interrupteurs locaux

- `SS(map_id, event_id, id)` récupère la valeur d'un évènement donné
- `SS(map_id, event_id, id, value)` modifie la valeur d'un évènement donné

#### Variables locales

- `SV(map_id, event_id, id)` récupère la valeur d'un évènement donné
- `SV(map_id, event_id, id, value)` modifie la valeur d'un évènement donné

#### Dans un message

Il est possible d'afficher la valeur d'une variable dans un message, avec une construction de ce type :

- `SV[map_id, event_id, id]`
- `SV[event_id, id]` (où le `map_id` sera celui de la carte en cours)
- `SV[id]` (où l'`event_id` sera celui de l'évènement en cours)

## pico-picture.js

Ce plugin ajoute une série de commandes pour manipuler les images. Il devient plus facile de changer individuellement l'angle, la position, l'opacité et d'autres paramètres d'une image.

Le plugin dépend de `pico-core.js`, vous devez donc le placer en-dessous dans votre liste des plugins.

- [Lien direct vers le script](https://raw.githubusercontent.com/grrim/pico/develop/plugins/pico-picture.js)
- [Liste des commandes picture](https://grrim.github.io/picocorico/doc.html#/category/picture)

## pico-mv.js

Ce plugin permet de reproduire en appel de script presque toutes les commandes d'évènement offertes par RPG Maker MV. L'intérêt est de pouvoir personnaliser chaque argument, car les fenêtres des évènements empêchent d'entrer certains types de données.

Le plugin dépend de `pico-core.js` et `pico-picture.js`, vous devez donc le placer en-dessous dans votre liste des plugins.

- [Lien direct vers le script](https://raw.githubusercontent.com/grrim/pico/develop/plugins/pico-mv.js)

## pico-syntax.js

La syntaxe classique des interrupteurs et des variables pouvant paraître assez contraignante et inhabituelle, ce plugin offre une syntaxe alternative, qui se rapproche de celle de RME. L'ancienne syntaxe fonctionne toujours.

Le plugin dépend de `pico-core.js`, vous devez donc le placer en-dessous dans votre liste des plugins.

- [Lien direct vers le script](https://raw.githubusercontent.com/grrim/pico/develop/plugins/pico-syntax.js)

### Syntaxe alternative

#### Interrupteurs et variables globales

`S[id]` renvoie la valeur d'un interrupteur. `S[id] = value` modifie sa valeur, qui peut être `true` ou `false`.

`V[id]` renvoie la valeur d'une variable, et `V[id] = value` modifie sa valeur.

#### Interrupteurs et variables locales

Il est maintenant possible de référencer un interrupteur local sans écrire tous les arguments. Voici les trois écritures possibles :

```javascript
SS[id]
SS["event_id, id"]
SS["map_id, event_id, id"]
```

Si la carte et l'évènement sont omis, cela signifie qu'on fait référence à la carte et l'évènement actuels.

Remarquez la présence de guillemets, qui sont obligatoires avec deux ou trois arguments. Sachez cependant que vous pouvez aussi utiliser des listes. Par exemple, ces deux lignes sont équivalentes :

```javascript
SS["1, 2, D"]
SS[[1, 2, "D"]]
```

La seconde notation est pratique si on veut utiliser une variable comme clé, par exemple :

```javascript
SS[[1, V[1], V[2]]]
```

Les variables locales fonctionnent de la même façon, sauf qu'il faut utiliser `SV` à la place de `SS`.

## pico-loop.js

L'objectif de ce plugin est de faciliter certains aspects liés à l'utilisation des boucles dans RPG Maker MV.

Il dépend de `pico-core.js`, vous devez donc le placer en-dessous dans votre liste des plugins.

- [Lien direct vers le script](https://raw.githubusercontent.com/grrim/pico/develop/plugins/pico-loop.js)
- [Liste des commandes loop](https://grrim.github.io/picocorico/doc.html#/category/loop)

### Créer une boucle itérative

Le comportement standard d'une boucle est de "boucler" jusqu'à ce que l'on demande *explicitement* à RPG Maker d'arrêter de boucler. Par exemple, pour créer une boucle qui va de 0 à 10, et qui affiche un message à chaque étape, voici comment je devrais faire sans `π.loop` :

```
 Contrôler les Variables：#0001 = 0
 Boucle
   Si：#0001 > 10
     Rompre la Boucle
  ：Fin
   Texte：Aucun, Fenêtre, Bas
  ：     ：On est à l'étape \V[1] !
   Contrôler les Variables：#0001 += 1
：Répéter Ci-Dessus
```

Rien de catastrophique, si ce n'est que c'est un peu long. En effet, il faut :

1. Initialiser la variable qui va servir **d'itérateur**, ici la #0001 ;
2. Préciser, en début ou en fin de boucle, que si notre variable est trop grande, il faut sortir de la boucle ;
3. Exécuter notre traitement, ici l'affichage du message ;
4. Puis ne pas oublier d'incrémenter notre variable !

Ce motif est commun à la plupart des boucles effectuant un parcours, d'où l'intérêt de le simplifier.

`π.loop.i()` est une commande qui **ne peut être utilisée que dans une boucle** : elle permet de savoir combien de fois nous sommes déjà passés dans la boucle. On peut réécrire notre évènement de cette manière :

```
 Boucle
   Contrôler les Variables：#0001 = π.loop.i()
   Si：#0001 > 10
     Rompre la Boucle
  ：Fin
   Texte：Aucun, Fenêtre, Bas
  ：     ：On est à l'étape \V[1] !
：Répéter Ci-Dessus
```

C'est déjà un peu plus court, mais nous pouvons aller plus loin, en simplifiant la condition de sortie.

### State et Drivers

D'autres commandes précisent quand une boucle doit se terminer, grâce aux notions **d'état** et de **driver**. Un driver est une commande Pico que l'on appelle **juste-au dessus d'une boucle**, pour décrire comment la boucle doit se comporter.

`π.loop.times(X)` permet d'exécuter la boucle X fois.

`π.loop.state()` donne une valeur définie en fonction du driver appelé sur la boucle. A ne pas confondre avec `π.loop.i()` qui donne le nombre de fois que l'on est passé dans la boucle.

Refaisons notre exemple précédent. Comme on utilise le driver `π.loop.times(X)`, le state vaudra
successivement 1, 2, 3... jusqu'à X.

```
 Script：π.loop.times(10)
 Boucle
   Contrôler les Variables：#0001 = π.loop.state()
   Texte：Aucun, Fenêtre, Bas
  ：     ：On est à l'étape \V[1] !
：Répéter Ci-Dessus
```

La commande `π.loop.times(10)` au dessus de la boucle siginifie « je répète 10 fois le contenu
de la boucle, ensuite je sors de la boucle ». La commande `π.loop.state()` donne l'état actuel de la boucle, donc un nombre entre 1 et 10.

Cette fois ça y est ! On a réussi à avoir une boucle très compacte et tout de même lisible !

### Utilisation des autres drivers

Voyons rapidement les autres drivers qui permettent de construire rapidement des boucles.

`π.loop.range(a, b)` permet de boucler entre les valeurs A et B. Par exemple, pour effacer les images 12 à 18, on peut effectuer cette boucle :

```
 Script：π.loop.range(12, 18)
 Boucle
   Contrôler les Variables：#0001 = π.loop.state()
   Script：π.picture.erase(V(1))
：Répéter Ci-Dessus
```

Les intervalles peuvent être croissantes ou décroissantes.

`π.loop.for(array)` permet de boucler sur toutes les valeurs d'un tableau, et de mettre ces valeurs dans State ! Par exemple, pour dire successivement bonjour à `Nuki`, `Zangther`, `XHTMLBoy`, `Joke` et `msp`, on peut faire ceci :

```
 Script：π.loop.for(["Nuki", "Zangther", "XHTMLBoy", "Joke", "msp"])
 Boucle
   Contrôler les Variables：#0001 = π.loop.state()
    Texte：Aucun, Fenêtre, Bas
  ：     ：Hey ! Salut \V[1]
：Répéter Ci-Dessus
```

Il est évidemment toujours possible d'utiliser `π.loop.i()` si vous en avez besoin dans votre boucle !

Ces commandes de boucle fonctionnent aussi avec les boucles imbriquées. Par contre, dès lors que dans une boucle, on utilise un **saut vers une étiquette**, toutes les valeurs des boucles sont remises à zéro. En effet, il est impossible de calculer efficacement le passage dans la boucle, si on saute d'une boucle à l'autre avec les étiquettes.

Une fois qu'un driver est défini, il ne l'est que pour la boucle suivante. Les boucles imbriquées n'héritent pas du driver parent (heureusement !).
