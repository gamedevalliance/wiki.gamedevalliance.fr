---
title: "Déclencheurs personnalisés"
portail: rme
menu:
  rme:
    name: "Déclencheurs"
    parent: events
    weight: 2
---

Les ajouts apportés à RPG Maker par RME (les variables locales, les labels et l'accessibilité des interrupteurs locaux) posent un souci au niveau des déclencheurs des évènements.

Les conditions de déclenchement sont limitées aux variables et aux interrupteurs. On regrette l'absence de condition « Si `script` » sur les pages des évènements. Pour pallier à ce manque, RME dispose d'un mécanisme qui permet d'évaluer n'importe quelle expression Ruby et donc de vérifier n'importe quelle variable, variables locale, interrupteur et même n'importe quelle commande RME renvoyant un booléen (vrai ou faux) et provoquant un rafraichissement de carte.

## Ajouter un déclencheur

Le déclencheur doit être la première commande de la page. Il s'agit d'un appel de script de cette forme :

```ruby
trigger{condition}
```

Par exemple, `trigger{V[10] > 7}` activera la page si la variable 10 est supérieure à 7.

Comme on ne peut mettre qu'un seul déclencheur personnalisé par page, il est possible de combiner des expressions au moyen des [opérateurs logiques]().

### Relation avec les déclencheurs de RPG Maker

S'il existe déjà une condition de déclenchement de RPG Maker, elle se combinera avec la condition personnalisée. Elles seront reliées par un `and`.

Il est possible d'occulter ce déclencheur initial en utilisant `ignore_left{condition}` à la place de `trigger`. Dans les évènements classiques, ce n'est absolument pas utile, vous en comprendrez cependant l'utilité en lisant la suite.

### Référencer l'identifiant du receveur

Au sein de la condition du déclencheur, vous pouvez utiliser l'ID de l'évènement qui l'exécute.

```ruby
trigger{|id| condition }
ignore_left{|id| condition }
```

Dans votre condition, vous pouvez alors utiliser la variable `id` qui référencera l'ID de l'évènement.

## Déclencheurs en combat

Cet ajout rend possible la personnalisation du système de combat de base. Il s'agit d'une annotation pour dire qu'un évènement commun s'exécute **comme un évènement en processus parallèle** durant un combat. On appelle cela un court-circuitage car on peut injecter des évènements riches, comme des affichages d'images, en cours de combat.

Pour rendre votre évènement commun concurrent à un combat, il suffit que la première ligne soit un appel de script : `in_battle`.

Attention, un évènement commun qui commence par `in_battle` n'est plus exécutable ailleurs qu'en combat.

Comme pour les autres déclencheurs, il est possible de le spécialiser. Par exemple, `in_battle{ V[1] == 9 }` ne déclenchera l'évènement dans les combats que si la variable 1 est égale à 9.

Il est possible de restreindre un court-circuit à certains groupes de monstres en utilisant la commande `current_troop`.

```ruby
in_battle{ current_troop > 10 }
```

Cet exemple rend l'évènement valide pour tous les combats dont le groupe a un ID supérieur à 10.