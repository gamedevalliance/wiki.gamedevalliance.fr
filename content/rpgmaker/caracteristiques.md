---
title: "Caractéristiques"
portail: rpgmaker
menu:
  rpgmaker:
    parent: doc
    weight: 2
---

## Caractéristiques de base

Les caractéristiques des personnages ont une utilité par défaut qui est détaillée ici, mais il est aussi possible de les manipuler d'une façon différente à l'aide des [formules]({{< ref "/rpgmaker/formules.md" >}}).

- PV Maximum
- PM Maximum
- Attaque
- Défense
- Magie
- Défense magique
- Agilité
- Chance

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

## Caractéristiques additionnelles

Les caractéristiques "Ex" ont une valeur de 0% par défaut. Toutes ces valeurs peuvent varier entre -1000% et +1000%.

- Chance de toucher
- Taux d'esquive
- Taux de critique
- Taux d'esquive critique
- Taux d'évasion magique
- Taux de réflexion
- Chance de contrer
- Taux de regen des PV/tour
- Taux de regen des PM/tour
- Taux de regen des PT/tour

### Notes

La chance de toucher et la chance d'esquiver sont calculées séparément. Par exemple, si l'attaquant a une précision de 90% et la cible a une esquive de 10%, la chance d'esquiver sera 10% de 90%, ce qui revient à une précision globale de 81%.

La contre-attaque est uniquement possible contre les attaques physiques des ennemis.

## Caractéristiques spéciales

Les caractéristiques "Sp" ont une valeur de 100% par défaut. Toutes ces valeurs peuvent varier entre -1000% et +1000%.

- Chance d'être ciblé
- Taux de réduction des dommages
- Taux de régénération (via skill)
- Taux de régénération (via item)
- Augmentation/réduction du coût en MP
- Augmentation/réduction du gain en PT
- Taux de réduction des attaques physiques
- Taux de réduction des attaques magiques
- Taux de réduction des dommages de terrain
- Bonus/malus à l'expérience

### Notes

Le taux de réduction des dommages a l'impact suivant :

> Dégâts en défense = Dégâts normaux ÷ (2 × **taux de réduction**)