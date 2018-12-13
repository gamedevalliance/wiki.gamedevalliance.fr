---
title: "Les variables"
description: "Les variables sont des outils essentiels pour programmer la logique d'un jeu sur RPG Maker. Nous verrons ici leur fonctionnement ainsi que des exemples d'utilisation."
portail: rpgmaker
menu:
  rpgmaker:
    name: "Les variables"
    parent: events
    weight: 3
---

En programmation, une variable est identifiée par un nom, et peut contenir toutes sortes de données : du texte, un tableau, un nombre, etc.

Dans RPG Maker, les variables du jeu sont plus simples. Elles sont désignées par un numéro que l'on appelle identifiant (ID), et contiennent un nombre entier qui est la valeur de la variable. Ce nombre peut être modifié à tout moment dans un évènement.

RPG Maker utilise l'ID pour désigner une variable, mais pour un humain, ce nombre ne permet pas de reconnaître l'utilité facilement. C'est pourquoi nous pouvons nommer les variables, bien que cette information soit inutile pour le logiciel. Ainsi, nous comprenons en un clin d'œil quelle variable représente l'or du joueur, ou le nombre d'orcs abattus dans le jeu.

Une variable se modifie par la commande d'évènement [Modifier une variable]({{< ref "evenements.md#modifier-une-variable" >}}), et reste mémorisée tout au long du jeu. A travers une [condition]({{< ref "evenements.md#condition" >}}), on peut réaliser les vérifications suivantes :

La variable est...   | par rapport à...
---------------------|--------------------
- égale              |- Un nombre spécifié
- supérieure         |- Une autre variable
- supérieure ou égale|
- inférieure         |
- inférieure ou égale|

Ces vérifications peuvent aussi être réalisées via un [appel de script]({{< ref "evenements.md#script" >}}).

## Exemple d'utilisation

Tout comme les [interrupteurs globaux]({{< ref "interrupteurs.md" >}}), les variables sont globales et gardent leur valeur entre les évènements.

Dans cet exemple, le joueur parle à un personnage important du village : le maire. Celui-ci n'aime que les personnes riches et ayant du pouvoir. Nous souhaitons que le maire change d'attitude en fonction de la richesse du joueur :

- Si on a moins de 100 pièces d'or : « Je ne parle pas aux pauvres. Hors de ma vue ! »
- Si on a au moins 100 pièces d'or : « Bienvenue dans notre humble village. Puis-je vous faire visiter ? »

Dans l'événement du maire, utilisez la commande **Gestion des variables**. Choisissez une variable que vous nommerez "Or du joueur". Dans la section **Opération** laissez l'option **Régler**, afin de remplacer la valeur déjà existante. Dans la section **Opérande**, choisissez l'option **Données du Jeu**, et dans la liste déroulante de l'option **Autre**, choisissez **Or**.

Créez une condition pour vérifier que la variable "Or du joueur" est **supérieure ou égale** à 100. Cochez la case permettant d'exécuter des commandes si la condition n'est pas remplie. A l'intérieur de la branche conditionnelle, insérez le texte « Bienvenue dans notre humble village. Puis-je vous faire visiter ?* » et dans la branche **Sinon**, insérez « Je ne parle pas aux pauvres. Hors de ma vue ! ».

Cet exemple peut également être réalisé en fonction de la force du héros, ou toute autre caractéristique, pour peu que l'on choisisse la bonne donnée dans **Gestion des variables**.

## Commandes de script

### RPG Maker MV

Via un appel de script, il est possible de modifier la valeur d'une variable :

```js
$gameVariables.setValue(id, value);
```

Où `id` est l'ID de la variable et `value` la nouvelle valeur de la variable, qui peut être un nombre.

On peut accéder à la valeur d'une variable par cette fonction :

```js
$gameVariables.getValue(id);
```

Où `id` est l'ID de la variable.

### RPG Maker VX Ace

Via un appel de script, il est possible de modifier la valeur d'une variable :

```ruby
$game_variables[id] = value
```

Où `id` est l'ID de la variable et `value` la nouvelle valeur de la variable, qui peut être un nombre.

On peut accéder à la valeur d'une variable ainsi :

```ruby
$game_variables[id];
```

Où `id` est l'ID de la variable.
