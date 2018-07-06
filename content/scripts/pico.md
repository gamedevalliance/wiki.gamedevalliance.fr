---
title: "πco, un script de Grim"
description: "πco étend les possibilités des évènements de RPG Maker MV grâce aux appels de scripts !"
---

πco, anciennement MicroRME, propose un sous-ensemble minimaliste de [RME]({{< ref "scripts/rme.md" >}}) pour les utilisateurs de [RPG Maker MV]({{< ref "rpgmaker.md#rpg-maker-mv" >}}).

L'idée reposant derrière πco (comme RME) est d'utiliser la commande d'[appel de script]({{< ref "scripts/appels.md" >}}) pour étendre les fonctionnalités offertes par les évènements. Le fait de passer par l'appel de script permet plus de flexibilité dans les commandes, par exemple, le fait de pouvoir passer des variables à la place de tous les arguments.

Grim, qui a lancé le projet, a expliqué [sur le forum RMA](https://rpgmakeralliance.com/d/248-pco-event-making-et-autres-tribulations) que πco serait un système composé de plussieurs plugins. Le premier, pico-core.js , est d'hors est déjà disponible et sera nécéssaire pour utiliser les suivants. Grim a également annoncé travailler sur le plugin qui permettra de manipuler les images et sur des tutoriels !

##  pico-core.js

- [Lien direct vers le script](https://raw.githubusercontent.com/grrim/pico/develop/plugins/pico-core.js)
- [Documentation d'origine](https://rpgmakeralliance.com/d/248-pco-event-making-et-autres-tribulations)

Ce plugin est "la base de πico", il fera office de glue entre les  différentes plugins que je compte développer. Ce plugin offre plusieurs  fonctionnalités :

- Des variables locales;
- des raccourcis syntaxiques pour les variables et interrupteurs (locaux ou non);
- une première collection de commandes.

### Documentation

#### Syntaxe des variables et interrupteurs

- `V(id)` pour récupérer la valeur d'une variable 
- `V(id, value)` pour modifier la valeur d'une variable
- `S(id)`  pour récupérer la valeur d'un interrupteur
- `S(id, value)` pour modifier la valeur d'un interrupteur
- `SS(map_id, event_id, id)`  pour récupérer la valeur d'un interrupteur local
- `SS(map_id, event_id, id, value)` pour modifier la valeur d'un interrupteur local
- `SV(map_id, event_id, id)`  pour récupérer la valeur d'une variable local
- `SV(map_id, event_id, id, value)` pour modifier la valeur d'une variable local

Il est aussi possible d'utiliser un raccourcis syntaxique pour  référencer les variables locales ou les événements locaux des événements  "courants" :

- `this.V(id)` et `this.V(id, value)` pour accéder/modifier une variable locale de l'événement courant
- `this.S(id)` et `this.S(id, value)` pour accéder/modifier un interrupteur de l'événement courant

#### Commandes

Comme pour RME, πco fonctionne beaucoup par appel de "petites  commandes" qui "font des choses" (on peut appeler ça des effets) ou qui  renvoie des valeurs. Les commandes sont organisées en topic et voici la  liste des commandes actuellement implémentées dans ce plugin :

> Le nom des commandes devraient être explicites mais ne vous en faites pas, une documentation ne devrait pas tarder à arriver !

##### Math

- `π.math.random(a, b)`
- `π.math.percent(value, max)`
- `π.math.apply_percent(percent, value)`

##### Objets, Armes, Armures

- `π.item.count(id)` (compte le nombre de l'objet référencé son ID possédé)
- `π.weapon.count(id)`
- `π.armor.count(id)`
- `π.item.has(id)` (renvoie `true` si l'objet référencé par son ID est possédé, `false` sinon)
- `π.weapon.has(id)`
- `π.armor.has(id)`

##### Acteurs

- `π.actor.level(id)`
- `π.actor.hp(id)`
- `π.actor.exp(id)`
- `π.actor.max_hp(id)`
- `π.actor.max_mp(id)`
- `π.actor.atk(id)`

##### Evénements et joueur

- `π.event.x(id)`

- ```
  π.player.x()
  ```

  - `π.event.y(id)`

- `π.player.y()`

- `π.event.screen_x(id)`

- `π.player.screen_x()`

- `π.event.screen_y(id)`

- `π.player.screen_y()`

- `π.event.direction(id)`

- `π.player.direction()`

##### Carte

- `π.map.id()` 
- `π.map.width()`
- `π.map.height()`
- `π.map.display_name()`

##### Equipe de jeu

- `π.party.team_size()` 
- `π.party.gold()` 
- `π.party.steps()` 
- `π.party.playtime()` 
- `π.party.timer()` 
- `π.party.save_count()` 
- `π.party.battle_count()` 
- `π.party.victory_count()` 
- `π.party.escape_count()`

> Si le caractère `π` est trop ennuyeux à écrire sur votre clavier, vous pouvez utiliser `Pico` à la place de `π`.