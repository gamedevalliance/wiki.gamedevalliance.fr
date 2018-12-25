---
title: Interrupteurs locaux et variables locales
portail: rme
menu:
  rme:
    name: "Var. et interrupteurs locaux"
    parent: syntaxe
    weight: 2
---

RME ajoute les variables locales. Les interrupteurs locaux ne sont pas une extension du script, cependant, ils bénéficient eux aussi d'une syntaxe allégée.

## Les variables locales

Pour certains, cette partie peut paraître plus abstraite, cependant, soyez sûrs que les variables locales permettent beaucoup de flexibilité dans la construction de systèmes avec les évènements.

Une variable locale est propre à un évènement. Elle est presque identique à une variable globale (les variables normales de RPG Maker, accessibles via `V[id]`), si ce n'est qu'elle est référencée par 3 ID et non un seul.

* L'ID de la map,
* L'ID de l'évènement,
* L'ID de la variable.

### Syntaxe

Une variable locale s'écrit `SV[map, evenement, id]`. "SV" est l'abréviation de "self variable".

On peut spécifier uniquement l'ID de la variable locale, et RME complètera avec l'ID de l'évènement qui lance la commande, et l'ID de la carte où se trouve l'évènement.

Imaginons une carte (numéro 23) sur laquelle on peut trouver plusieurs évènements dont l'évènement 4 qui appellera ces différentes variables locales :

* `SV[5]` : comme c'est l'évènement 4 de la carte 23 qui appelle la variable, cela devient `SV[23, 4, 5]`.
* `SV[2, 8]` : l'évènement est précisé mais pas la carte, cela devient `SV[23, 2, 8]`.
* `SV[12, 3, 1]` : toutes les informations sont données. On appelle la variable 1 de l'évènement 3 sur la carte 12.

La première écriture, avec un seul argument, permet d'éviter facilement de gaspiller une variable globale quand on en a besoin au sein d'un seul évènement. De plus, cela permet de copier-coller des évènements sans devoir modifier les variables qu'ils utilisent, par exemple pour stocker la vie de chaque évènement.

Ces adresses étant purement virtuelles, il est possible d'associer des variables à des évènements qui n'existent pas.

### Opérations

Tous les opérateurs présentés dans [la section sur les variables]() sont compatibles avec les variables locales. Par exemple :

```ruby
SV[5] += V[6]
SV[1, 2, 3], V[2] = V[2], SV[1 ,2 ,3]
```

Attention, les intervalles `V[1..10]` ne fonctionnent pas pour les variables locales.

### Quand faut-il les utiliser ?

Les variables locales peuvent faire tout ce que permettent de faire les variables normales. Cependant, il est conseillé de ne s'en servir que pour des variables propres à un seul évènement. Par exemple, les points de vie des ennemis dans un ARPG, ou encore les points de réputation envers chaque personnage.

## Les interrupteurs locaux

Dans le cas des interrupteurs locaux, il ne s'agit pas d'un ajout, mais d'un simple raccourci syntaxique comme pour les variables et les interrupteurs.

Ils fonctionnent comme les interrupteurs normaux, avec le même système d'adressage que les variables locales. La seule différence est qu'ils sont limités à 4. On y accède via une lettre (`A`, `B`, `C`, `D`) ou via un entier (`1`, `2`, `3`, `4`) et on utilise la primitive `SS` (pour "self switches").

```ruby
SS["A"] # Remarquez les guillemets
SS[1]   # Les deux lignes sont équivalentes
```

Tout comme avec les variables locales, il est possible d'accéder aux interrupteurs locaux d'autres évènements.

```ruby
SS[4, 30, "A"]
SS[4, 30, 1]
```

Ces deux lignes appellent l'interrupteur local A de l'évènement 30 sur la carte 4.

## Conclusion

Qu'il s'agisse des variables locales ou des interrupteurs locaux, ils sont très pratiques pour créer des évènements génériques à copier-coller sans détruire la logique du système.
