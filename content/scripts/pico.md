---
title: "πco, une collection de plugins de Grim"
description: "πco étend les possibilités des évènements de RPG Maker MV grâce aux appels de scripts."
---

πco, anciennement MicroRME, propose un sous-ensemble minimaliste de [RME]({{< ref "scripts/rme.md" >}}) pour les utilisateurs de [RPG Maker MV]({{< ref "rpgmaker.md#rpg-maker-mv" >}}).

L'idée reposant derrière πco est d'utiliser la commande d'[appel de script]({{< ref "scripts/appels.md" >}}) pour étendre les fonctionnalités offertes par les évènements. Le fait de passer par l'appel de script permet plus de flexibilité dans les commandes, par exemple, le fait de pouvoir passer des variables à la place de tous les arguments.

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

- `this.S(id)` récupère la valeur pour l'évènement en cours
- `this.S(id, value)` modifie la valeur pour l'évènement en cours
- `SS(map_id, event_id, id)` récupère la valeur d'un évènement donné
- `SS(map_id, event_id, id, value)` modifie la valeur d'un évènement donné

#### Variables locales

- `this.V(id)` récupère la valeur pour l'évènement en cours
- `this.V(id, value)` modifie la valeur pour l'évènement en cours
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
