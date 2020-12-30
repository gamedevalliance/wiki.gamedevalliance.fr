---
title: "Interrupteurs et variables"
description: "Les interrupteurs sont des outils essentiels pour programmer la logique d'un jeu sur RPG Maker. Nous verrons ici leur fonctionnement ainsi que des exemples d'utilisation."
portail: rpgmaker
menu:
  rpgmaker:
    parent: general
    weight: 3
aliases:
    - /rpgmaker/interrupteurs/
    - /rpgmaker/variables/
---

Les interrupteurs et les variables sont des outils essentiels pour programmer la logique d'un jeu dans les évènements.

## Interrupteurs

Un interrupteur peut avoir deux états : ON ou OFF. C'est l'équivalent des [booléens](https://fr.wikipedia.org/wiki/Bool%C3%A9en) en programmation. On change leur état avec la commande d'évènement [Modifier un interrupteur]({{< ref "evenements.md#modifier-un-interrupteur" >}}), et ils restent mémorisés tout au long de la partie, y compris dans la sauvegarde. On peut vérifier l'état d'un interrupteur dans une [condition]({{< ref "evenements.md#condition" >}}) ou par un [appel de script]({{< ref "evenements.md#appel-de-script" >}}).

### Interrupteurs normaux

Les interrupteurs normaux ont une portée globale : ils peuvent être utilisés depuis n'importe quel évènement. Ils permettent donc de sauvegarder une information qui sera utile dans un autre évènement, plus tard dans le jeu.

#### Commandes de script

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

### Interrupteurs locaux

Utiliser des interrupteurs normaux pour le moindre évènement de son jeu est fastidieux et rend rapidement la liste des interrupteurs difficile à lire. C'est pourquoi les interrupteurs locaux ont été ajoutés à partir de RPG Maker XP. Ils sont propres à chaque évènement et ne peuvent être accédés depuis un autre évènement, à moins d'utiliser un appel de script.

Chaque évènement possède quatre interrupteurs locaux A, B, C et D. La commande [Gestion des interrupteurs locaux]({{< ref "evenements.md#interrupteurslocaux" >}}) et les [conditions]({{< ref "evenements.md#condition" >}}) permettent d'accéder aux interrupteurs locaux de l'évènement qui lance la commande.

Les interrupteurs locaux sont très utiles dans les évènements recopiés plusieurs fois au cours du jeu et dont chaque instance doit rester indépendante, par exemple les coffres. On pourrait copier-coller un coffre sans en changer les commandes, car chaque nouvel évènement utilisera son propre interrupteur local.

#### Commandes de script

Avec un [appel de script]({{< ref "evenements.md#script" >}}), il est possible d'accéder à un interrupteur local depuis n'importe quel évènement :

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

## Variables

En programmation, une variable est identifiée par un nom et peut contenir toutes sortes de données : du texte, un tableau, un nombre, etc.

Dans RPG Maker, les variables du jeu sont plus simples. Elles sont désignées par un numéro que l'on appelle identifiant (ID) et contiennent un nombre entier qui est la valeur de la variable. Ce nombre peut être modifié à tout moment dans un évènement.

RPG Maker utilise l'ID pour désigner une variable mais pour un humain, ce nombre ne permet pas de reconnaître l'utilité facilement. C'est pourquoi nous pouvons nommer les variables, bien que cette information soit inutile pour le logiciel. Ainsi, nous comprenons en un clin d'œil quelle variable représente l'or du joueur ou le nombre d'orcs abattus dans le jeu.

Une variable se modifie par la commande d'évènement [Modifier une variable]({{< ref "evenements.md#modifier-une-variable" >}}) et reste mémorisée tout au long du jeu. A travers une [condition]({{< ref "evenements.md#condition" >}}), on peut réaliser les vérifications suivantes :

- **La variable est :** égale, supérieure, supérieure ou égale, inférieure, inférieure ou égale
- **...par rapport à :** un nombre spécifié, ou une autre variable.

Ces vérifications peuvent aussi être réalisées via un [appel de script]({{< ref "evenements.md#script" >}}).

### Commandes de script

Si la commande d'évènement classique ne permet que de stocker un nombre entier dans une variable, elles peuvent en fait contenir des données de toute nature : un texte, un tableau, etc, comme ce serait le cas pour une variable normale en JavaScript ou en Ruby. Le seul moyen de stocker ce type d'information est d'utiliser un appel de script.

#### RPG Maker MV et MZ

Accéder à la valeur d'une variable :

```js
$gameVariables.getValue(id);
```

Où `id` est l'ID de la variable. Modifier la valeur d'une variable :

```js
$gameVariables.setValue(id, value);
```

Où `value` est la nouvelle valeur de la variable.

#### RPG Maker VX Ace

Accéder à la valeur d'une variable :

```ruby
$game_variables[id]
```

Où `id` est l'ID de la variable. Modifier la valeur d'une variable :

```ruby
$game_variables[id] = value
```

Où `value` est la nouvelle valeur de la variable.
