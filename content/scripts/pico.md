---
title: "πco, un script de Grim"
description: "πco étend les possibilités des évènements de RPG Maker MV grâce aux appels de scripts."
---

πco, anciennement MicroRME, propose un sous-ensemble minimaliste de [RME]({{< ref "scripts/rme.md" >}}) pour les utilisateurs de [RPG Maker MV]({{< ref "rpgmaker.md#rpg-maker-mv" >}}).

L'idée reposant derrière πco est d'utiliser la commande d'[appel de script]({{< ref "scripts/appels.md" >}}) pour étendre les fonctionnalités offertes par les évènements. Le fait de passer par l'appel de script permet plus de flexibilité dans les commandes, par exemple, le fait de pouvoir passer des variables à la place de tous les arguments.

Grim, l'auteur du projet, explique dans la [discussion sur le forum](https://rpgmakeralliance.com/d/248-pco-event-making-et-autres-tribulations) que πco sera un système composé de plusieurs plugins. Le premier, `pico-core.js`, est déjà disponible et sera nécessaire pour utiliser les autres.

##  pico-core.js

Ce plugin est la base de πco, et il sera le cœur des prochains différents plugins. Il ajoute les variables locales, des raccourcis syntaxiques, et une première collection de commandes.

- [Lien direct vers le script](https://raw.githubusercontent.com/grrim/pico/develop/plugins/pico-core.js)
- [Liste des commandes](https://grrim.github.io/picocorico/doc.html)

Si le caractère `π` est trop ennuyeux à écrire sur votre clavier, vous pouvez utiliser `Pico` à la place de `π`.

### Syntaxe des variables et interrupteurs

- `V(id)` récupère la valeur d'une variable
- `V(id, value)` modifie la valeur d'une variable
- `S(id)`  récupère la valeur d'un interrupteur
- `S(id, value)` modifie la valeur d'un interrupteur
- `SS(map_id, event_id, id)`  récupère la valeur d'un interrupteur local
- `SS(map_id, event_id, id, value)` modifie la valeur d'un interrupteur local
- `SV(map_id, event_id, id)`  récupère la valeur d'une variable locale
- `SV(map_id, event_id, id, value)` modifie la valeur d'une variable locale

Il est aussi possible d'utiliser un raccourci syntaxique pour référencer les variables locales ou les interrupteurs locaux de l'évènement qui lance la commande :

- `this.V(id)` et `this.V(id, value)` pour accéder à/modifier une variable locale de l'événement courant
- `this.S(id)` et `this.S(id, value)` pour accéder à/modifier un interrupteur de l'événement courant

## pico-picture.js

Ce plugin ajoute une série de commandes pour manipuler plus facilement les images. Il dépend de `pico-core.js`, vous devez donc le placer en-dessous dans votre liste des plugins.

- [Lien direct vers le script](https://raw.githubusercontent.com/grrim/pico/develop/plugins/pico-picture.js)
- [Liste des commandes picture](https://grrim.github.io/picocorico/doc.html#/category/picture)
