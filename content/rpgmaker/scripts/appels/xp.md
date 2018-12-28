---
title: "Appels de script pour RPG Maker XP"
description: "Découvrez notre liste de commandes de scripts pour personnaliser votre jeu RPG Maker XP. Ajoutez de nouvelles commandes puissantes à vos évènements."
tocmaxdepth: 1
portail: rpgmaker
---

## Gestion globale

### Modifier un interrupteur

`id` est le numéro de l'interrupteur dans RPG Maker. En Ruby, `true` signifie « vrai » et `false` signifie « faux ». On choisit l'un ou l'autre pour rendre l'interrupteur égal à ON ou OFF.

```ruby
$game_switches[id] = true/false
```

### Modifier un interrupteur local

Les interrupteurs locaux fonctionnent comme les interrupteurs globaux, si ce n'est qu'ils sont référencés par trois ID : une carte, un évènement et une lettre.

```ruby
$game_self_switches = {[map, event, "letter"] => true/false}
$game_map.need_refresh = true
```

La dernière ligne permet au joueur de voir immédiatement les conséquences du changement. Si elle est omise, l'interrupteur local sera bien modifié mais il faudra quitter la carte et y revenir pour voir les conséquences. Voici un exemple d'utilisation :

```ruby
$game_self_switches = {[2, 4, "A"] => true}
$game_self_switches = {[1, 3, "B"] => false}
$game_map.need_refresh = true
```

### Modifier une variable

`id` est le numéro de la variable dans RPG Maker. `value` est sa nouvelle valeur, qui peut être un nombre entier ou bien un autre type de valeur : texte, tableau, etc.

```ruby
$game_variables[id] = value
```
