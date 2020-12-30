---
title: "Caractéristiques et formules"
portail: rpgmaker
menu:
  rpgmaker:
    parent: doc
    weight: 2
aliases:
    - /rpgmaker/caracteristiques/
    - /rpgmaker/formules
---

A partir de RPG Maker VX, les dégâts infligés par une compétence sont personnalisables précisément à l'aide de formules et des caractéristiques.

{{< figure src="/rpgmaker/caracteristiques-et-formules/interface.png" alt="Interface d'écriture de formules" caption="Formule de l'attaque de base." >}}

L'utilisateur de la compétence est représenté par `a` et la cible par `b`. On y associe un attribut avec un point. Par exemple, `a.atk` signifie « l'attaque du joueur » et `b.def` signifie « la défense de la cible ».

## Caractéristiques de base

Caractéristique | Symbole
----------------|--------
Attaque         | `atk`
Défense         | `def`
Magie           | `mat`
Déf. magique    | `mdf`
Agilité         | `agi`
Chance          | `luk`
PV maximum      | `mhp`
PM maximum      | `mmp`

Les caractéristiques des personnages ont une utilité par défaut qui est détaillée ici, mais il est aussi possible de les manipuler d'une façon différente à l'aide des formules.

### Attaque et défense

L'attaque, la défense, l'attaque magique et la défense magique n'ont aucun effet particulier et sont uniquement utilisées pour calculer les dégâts dans les formules des compétences ou des objets. Leur impact est donc facilement personnalisable.

### Agilité

#### Attaques surprise

L'agilité influe sur la possibilité de réaliser une attaque surprise au début du combat. Lors d'une attaque surprise, l'adversaire ne peut pas agir durant le premier tour. Les attaques surprises ne peuvent pas survenir lors d'un combat déclenché par un évènement.

- Agilité moyenne de l'équipe >= agilité moyenne des ennemis :
  - Attaque surprise de l'équipe : 5%
  - Attaque surprise de l'ennemi : 3%

- Agilité moyenne de l'équipe < agilité moyenne des ennemis :
  - Attaque surprise de l'équipe : 3%
  - Attaque surprise de l'ennemi : 5%

De plus, dans l'onglet *Autre* des caractéristiques, l'effet de groupe *Augmenter les attaques préventives** augmente les chances par un facteur de 4. Un autre effet permet de désactiver les attaques surprise ennemies.

#### Fuite

L'agilité détermine également la probabilité de réussir une fuite :

> Chances de fuir (%) = 150 - 100 × **agilité moyenne de l'ennemi** ÷ **agilité moyenne de l'équipe**

Un bonus de 10% est ajouté après chaque tentative de fuite échouée. De plus, l'équipe peut s'échapper à coup sûr lors d'une attaque surprise.

### Chance

La chance influe lorsqu'on souhaite appliquer une altération d'état à une cible, ou pour calculer la probabilité pour que l'état se dissipe :

> Chance (%) = 100 + (**chance du lanceur** - **chance de la cible**) ÷ 10

## Paramètres supplémentaires

Les caractéristiques "Ex" ont une valeur de 0% par défaut, tandis que les paramètres "Sp" ont une valeur de 100% par défaut. Toutes ces valeurs peuvent varier entre -1000% et +1000%.

Ex    |Signification            |Sp    |Signification
------|-------------------------|------|-----------------------------------------
`hit` |Chance de toucher<sup>1</sup>|`tgr` |Chance d'être ciblé
`eva` |Taux d'esquive<sup>1</sup>   |`grd` |Taux de réduction des dommages
`cri` |Taux de critique         |`rec` |Taux de régénération (via skill)
`cev` |Taux d'esquive critique  |`pha` |Taux de régénération (via item)
`mev` |Taux d'évasion magique   |`mrc` |Augmentation/réduction du coût en MP
`mrf` |Taux de réflexion        |`tcr` |Augmentation/réduction du gain en PT
`cnt` |Chance de contrer<sup>2</sup>|`pdr` |Taux de réduction des attaques physiques
`hrg` |Taux de regen des PV/tour|`mdr` |Taux de réduction des attaques magiques
`mrg` |Taux de regen des PM/tour|`fdr` |Taux de réduction des dommages de terrain<sup>3</sup>
`trg` |Taux de regen des PT/tour|`exr` |Bonus/malus à l'expérience

1. La chance de toucher et la chance d'esquiver sont calculées séparément. Par exemple, si l'attaquant a une précision de 90% et la cible a une esquive de 10%, la chance d'esquiver sera 10% de 90%, ce qui revient à une précision globale de 81%.

2. La contre-attaque est uniquement possible contre les attaques physiques des ennemis.

3. Le taux de réduction des dommages a l'impact suivant :

    Dégâts en défense = Dégâts normaux ÷ (2 × **taux de réduction**)

## Attributs en cours de jeu

Attribut | Signification
---------|------------------
`hp`     | PV actuels
`mp`     | PM actuels
`tp`     | PT actuels
`level`  | Niveau
`v[x]`   | Variable numéro x

## Ecrire des formules

Les formules sont écrites dans le langage de script du logiciel. On peut utiliser les opérateurs suivants mais aussi des parenthèses : la priorité des opérations est respectée.

Opérateur | Signification
----------|-----------------
`+`       | Addition
`-`       | Soustraction
`*`       | Multiplication
`/`       | Division
`**`      | Exponentielle
`%`       | Modulo

Notez que la résistance élémentaire et les autres effets sont calculés séparément. Les formules concernent uniquement les dégâts de base des compétences.

### RPG Maker VX et VX Ace

Pour réaliser des formules complexes et intéressantes, il est possible de tirer parti des possibilités de Ruby.

#### Conditions

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

#### Manipuler les nombres

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

### RPG Maker MV et MZ

Plusieurs conditions très pratiques peuvent être utilisées au sein d'une formule :

Condition   | La cible...
------------|------------
`isDead()`  | Est morte
`isDying()` | N'a plus qu'un quart de sa vie
`isStateAffected(id)` | Subit le statut de numéro `id`
`isActor()` | Fait partie de l'équipe
`isEnemy()` | Est un ennemi

Elles sont à utiliser ainsi. Pour rappel, `a` est le lanceur de la compétence et `b` est la cible.

```js
b.isDying() ? commande_si_vrai : commande_si_faux
```
