---
title: "πco, un script de Grim"
description: "πco étend les possibilités des évènements de RPG Maker MV grâce aux appels de scripts."
---

πco, anciennement MicroRME, propose un sous-ensemble minimaliste de [RME]({{< ref "scripts/rme.md" >}}) pour les utilisateurs de [RPG Maker MV]({{< ref "rpgmaker.md#rpg-maker-mv" >}}).

L'idée reposant derrière πco est d'utiliser la commande d'[appel de script]({{< ref "scripts/appels.md" >}}) pour étendre les fonctionnalités offertes par les évènements. Le fait de passer par l'appel de script permet plus de flexibilité dans les commandes, par exemple, le fait de pouvoir passer des variables à la place de tous les arguments.

Grim, l'auteur du projet, explique dans la [discussion sur le forum](https://rpgmakeralliance.com/d/248-pco-event-making-et-autres-tribulations) que πco sera un système composé de plusieurs plugins. Le premier, `pico-core.js`, est déjà disponible et sera nécessaire pour utiliser les autres.

##  pico-core.js

- [Lien direct vers le script](https://raw.githubusercontent.com/grrim/pico/develop/plugins/pico-core.js)
- [Documentation d'origine](https://rpgmakeralliance.com/d/248-pco-event-making-et-autres-tribulations)

Ce plugin est la base de πico, il sera le cœur des prochains différents plugins. Il ajoute les variables locales, des raccourcis syntaxiques, et une première collection de commandes.

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

### Commandes

Comme pour RME, πco fonctionne beaucoup par appels de petites commandes qui renvoient des valeurs. Voici la liste des commandes actuelles.

#### Math

```js
π.math.random(a, b)
π.math.percent(value, max)
π.math.apply_percent(percent, value)
```

#### Objets, Armes, Armures

```js
π.item.count(id) // compte la quantité possédée de l'objet référencé son ID.
π.weapon.count(id)
π.armor.count(id)
π.item.has(id) // renvoie true si l'objet référencé par son ID est possédé, false sinon.
π.weapon.has(id)
π.armor.has(id)
```

#### Acteurs

```js
π.actor.level(id)
π.actor.hp(id)
π.actor.exp(id)
π.actor.max_hp(id)
π.actor.max_mp(id)
π.actor.atk(id)
```

#### Evénements et joueur

```js
π.event.x(id)
π.event.y(id)
π.player.x()
π.player.y()
π.event.screen_x(id)
π.event.screen_y(id)
π.player.screen_x()
π.player.screen_y()
π.event.direction(id)
π.player.direction()
```

#### Carte

```js
π.map.id()
π.map.width()
π.map.height()
π.map.display_name()
```

#### Equipe de jeu

```js
π.party.team_size()
π.party.gold()
π.party.steps()
π.party.playtime()
π.party.timer()
π.party.save_count()
π.party.battle_count()
π.party.victory_count()
π.party.escape_count()
```

Si le caractère `π` est trop ennuyeux à écrire sur votre clavier, vous pouvez utiliser `Pico` à la place de `π`.
