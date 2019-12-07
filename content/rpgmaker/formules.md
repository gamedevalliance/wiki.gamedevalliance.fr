---
title: "Formules de dégâts"
description: "Personnalisez les compétences de votre jeu RPG Maker. Découvrez toutes les commandes disponibles et réalisez des formules complexes en un clin d'œil."
portail: rpgmaker
menu:
  rpgmaker:
    parent: doc
    weight: 3
---

A partir de RPG Maker VX, les dégâts infligés par une compétence sont personnalisables précisément à l'aide de formules et des [caractéristiques]({{< ref "/rpgmaker/caracteristiques.md" >}}).

{{< figure src="/images/rpgmaker/formules/interface.png" alt="Interface d'écriture de formules" caption="Formule de l'attaque de base." >}}

## Calculs simples

L'utilisateur de la compétence est représenté par `a` et la cible par `b`. On y associe un terme avec un point. Par exemple, `a.atk` signifie « l'attaque du joueur » et `b.def` signifie « la défense de la cible ».

Termes | Signification
-------|------------------
`atk`  | Attaque
`def`  | Défense
`mat`  | Magie
`mdf`  | Défense magique
`agi`  | Agilité
`luk`  | Chance
`mhp`  | PV maximum
`mmp`  | PM maximum
`hp`   |  PV actuels
`mp`   | PM actuels
`tp`   | PT actuels
`level`| Niveau
`v[x]` | Variable numéro x

On peut réaliser des opérations arithmétiques en suivant la syntaxe de Ruby. La priorité des opérations est respectée et les parenthèses sont supportées.

Opérateur | Signification
----------|-----------------
`+`       | Addition
`-`       | Soustraction
`*`       | Multiplication
`/`       | Division
`**`      | Exponentielle
`%`       | Modulo

Notez que la résistance élémentaire et les autres effets sont calculés séparément. Cette formule concerne uniquement les dégâts de base.

## Paramètres additionnels

Les paramètres Ex ont une valeur de 0% par défaut. Les paramètres Sp ont une valeur de 100% par défaut. Toutes ces valeurs peuvent varier entre -1000% et +1000%.

Ex    |Signification            |Sp    |Signification
------|-------------------------|------|-----------------------------------------
`hit` |Chance de toucher        |`tgr` |Chance d'être ciblé
`eva` |Taux d'esquive           |`grd` |Taux de réduction des dommages
`cri` |Taux de critique         |`rec` |Taux de régénération (via skill)
`cev` |Taux d'esquive critique  |`pha` |Taux de régénération (via item)
`mev` |Taux d'évasion magique   |`mrc` |Augmentation/réduction du coût en MP
`mrf` |Taux de réflexion        |`tcr` |Augmentation/réduction du gain en PT
`cnt` |Chance de contrer        |`pdr` |Taux de réduction des attaques physiques
`hrg` |Taux de regen des PV/tour|`mdr` |Taux de réduction des attaques magiques
`mrg` |Taux de regen des PM/tour|`fdr` |Taux de réduction des dommages de terrain
`trg` |Taux de regen des PT/tour|`exr` |Bonus/malus à l'expérience

## Aller plus loin sur RPG Maker VX

Pour réaliser des formules complexes et intéressantes, il est possible de tirer parti des possibilités de Ruby, le langage de script utilisé sur RPG Maker VX et VX Ace.

### Conditions

Imaginons une condition simple : si l'attaque de l'utilisateur est supérieure à 20, la compétence fera 200 points de dégâts, sinon, elle fera seulement 100 points de dégâts.

```ruby
if a.atk > 20
  200
else
  100
end
```

Cependant, le champ de formule ne fait qu'une seule ligne. Pour condenser ceci, on écrit `;` à la place d'un retour à la ligne.

```ruby
if a.atk > 20; 200; else; 100; end;
```

Il existe une autre façon d'écrire une condition en une ligne :

```ruby
condition ? commande_si_vrai : commande_si_faux
```

Cela permet d'écrire notre exemple ainsi :

```ruby
a.atk > 20 ? 200 : 100
```

### Manipuler les nombres

Les nombres peuvent être négatifs en les précédant d'un `-` sans espace. Espacer correctement les opérateurs et les nombres permet d'avoir un meilleur contrôle sur ses opérations.

```ruby
4 + -6 => -2
4 - -6 => 10
```

Evitez de laisser un zéro avant votre nombre ou il sera traité en [base 8](https://fr.wikipedia.org/wiki/Syst%C3%A8me_octal).

```ruby
0567 => 375
```

Il est possible d'utiliser des nombres décimaux en séparant la partie entière et la partie décimale d'un `.`. Utiliser au moins un décimal dans une opération produira toujours un résultat décimal.

```ruby
5 + 10.0 => 15.0
```

Cette astuce vous permet de choisir entre un résultat de division arrondi ou décimal.

```ruby
3 / 2 => 1
3 / 2.0 => 1.5
```

## Aller plus loin sur RPG Maker MV

Pour rappel : a = lanceur de la compétence, b = cible de la compétence.

Action qui change si la cible est morte :

```js
b.isDead() ? commande_si_vrai : commande_si_faux
```

Action qui change si la cible est sur le point de mourir (sa vie est descendue à 1/4 de sa vie maximale) :

```js
b.isDying() ? commande_si_vrai : commande_si_faux
```

Action qui change si le lanceur de la compétence est sous un effet donné. `id` est le numéro affiché à coté de l'effet en question dans l'onglet *Statuts* de la base de données.

```js
a.isStateAffected(id) ? commande_si_vrai : commande_si_faux
```

Savoir si la cible est un allié ou un ennemi :

```js
b.isActor() // allié ?
b.isEnemy() // ennemi ?
```
