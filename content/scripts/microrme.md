---
title: "MicroRME, un script de Grim"
description: "RME étend les possibilités des évènements de RPG Maker VX Ace, avec des outils pratiques et des centaines de nouvelles commandes."
---

MicroRME propose un sous-ensemble minimaliste de [RME]({{< ref "scripts/rme.md" >}}) pour les utilisateurs de [RPG Maker MV]({{< ref "rpgmaker.md#rpg-maker-mv" >}}).

L'idée reposant derrière RME est d'utiliser la commande d'[appel de script]({{< ref "scripts/appels.md" >}}) pour étendre les fonctionnalités offertes par les évènements. Le fait de passer par l'appel de script permet plus de flexibilité dans les commandes, par exemple, le fait de pouvoir passer des variables à la place de tous les arguments.

MicroRME permet d'accéder à des interrupteurs locaux d'autres évènements, et introduit les variables locales, ainsi que quelques commandes pour accéder facilement à des données du jeu.

## Obtenir

- [Lien direct vers le script](https://gist.github.com/grrim/0d39fe1f0a552514fe01315d3cd5f89f#file-microrme-js)
- [Documentation d'origine](https://gist.github.com/grrim/0d39fe1f0a552514fe01315d3cd5f89f#file-readme-md)

## Documentation

### Variables et interrupteurs

Il est possible d'accéder aux variables et aux interrupteurs avec des commandes plus courtes :

```js
this.V(ID)          // renvoie la valeur de la variable
this.V(ID, value)   // modifie la valeur de la variable

this.S(ID)          // renvoie la valeur de l'interrupteur
this.S(ID, value)   // modifie la valeur de l'interrupteur

this.SS(key)        // renvoie la valeur de l'interrupteur local
this.SS(key, value) // modifie la valeur de l'interrupteur local
```

La clé (`key`) peut avoir plusieurs formes :

```js
this.SS("A")          // interrupteur local A de l'évènement courant
this.SS([2, "C"])     // interrupteur local C de l'évènement 2
this.SS([32, 6, "B"]) // interrupteur local B de l'évènement 6 de la map 32
```

Dans ce script, il existe aussi des variables locales. La clé possède la même forme que celle des interrupteurs locaux, sauf qu'au lieu d'une lettre en ID, on peut utiliser un nombre :

```js
this.SV(key)        // renvoie la valeur de la variable locale
this.SV(key, value) // modifie la valeur de la variable locale
```

### Opérandes

Pour offrir autant de flexibilité que les variables normales, il est possible d'utiliser des commandes à l'intitulé explicite, stockées dans le module `RME`.

```js
RME.actorLevel(id)
RME.actorExp(id)
RME.actorHp(id)
RME.actorMp(id)
RME.actorMaxHp(id)
RME.actorAtk(id)
RME.actorDef(id)

RME.characterX(id)         // ID 0 pour le héros
RME.characterY(id)         // ID 0 pour le héros
RME.characterScreenX(id)   // ID 0 pour le héros
RME.characterScreenY(id)   // ID 0 pour le héros
RME.characterDirection(id) // ID 0 pour le héros

RME.itemCount(id)
RME.weaponCount(id)
RME.armorCount(id)
RME.hasItem(id)
RME.hasWeapon(id)
RME.hasArmor(id)

RME.mapId()
RME.teamSize()
RME.gold()
RME.steps()
RME.playtime()
RME.timer()
RME.saveCount()
RME.battleCount()
RME.winCount()
RME.escapeCount()

RME.random(a, b)
```
