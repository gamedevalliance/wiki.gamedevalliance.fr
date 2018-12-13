---
title: "Appels de script pour RPG Maker VX Ace"
tocmaxdepth: 1
description: "Découvrez notre liste de commandes de scripts pour personnaliser votre jeu RPG Maker VX Ace avec RME. Ajoutez de nouvelles commandes puissantes à vos évènements."
tocmaxdepth: 1
portail: rpgmaker
---

Dans cette liste, nous partons du principe que le script [RME]({{< ref "rme.md" >}}) est installé. Il permet de raccourcir certaines commandes, ce qui les rend plus claires et faciles à utiliser.

Les appels de script sont listés dans un ordre rappelant celui de la fenêtre des commandes de RPG Maker.

## Messages

### Afficher un message

Documentation de [message()](http://rmex.github.io/RMEDoc/#message).

### Afficher un choix

Documentation de [choice()](http://rmex.github.io/RMEDoc/#choice).

### Demander un nombre

[textfield_int_show()](http://rmex.github.io/RMEDoc/#textfield_int_show) affiche un champ de texte à l'endroit de votre choix, permettant de saisir des nombres entiers.

## Gestion globale

### Modifier un interrupteur

`id` est le numéro de l'interrupteur dans RPG Maker. En Ruby, `true` signifie « vrai » et `false` signifie « faux ». On choisit l'un ou l'autre pour rendre l'interrupteur égal à ON ou OFF.

```ruby
S[id] = true
```

### Modifier un interrupteur local

Les interrupteurs locaux fonctionnent comme les interrupteurs globaux, si ce n'est qu'ils sont référencés par trois ID : une carte, un évènement, et un numéro de variable.

```ruby
SS[map, event, id] = true
```

On peut omettre `map` et `event` pour indiquer « sur la carte actuelle » et « dans l'évènement actuel ». Les deux écritures suivantes sont donc possibles :

```ruby
SS[event, id] = true
SS[id] = true
```

### Modifier une variable

`id` est le numéro de la variable dans RPG Maker. `value` est sa nouvelle valeur, qui peut être un nombre entier, ou bien un autre type de valeur : texte, tableau, etc.

```ruby
V[id] = value
```

### Modifier une variable locale

Les variables locales sont introduites par RME. Tout comme les interrupteurs locaux <appeldescriptinterrupteurlocal>, elles sont référencées par trois ID, dont les deux premiers peuvent être omis selon le contexte.

```ruby
SV[map, event, id] = value
```

## Programmation

### Condition

En ruby, « si » se traduit par `if` et « sinon » par `else`.

```ruby
if # élément à vérifier
  # commandes
else
  # commandes
end
```

On peut écrire « sinon, si » avec `elsif` et ainsi imbriquer des conditions facilement.

```ruby
if # élément à vérifier
  # commandes
elsif # élément à vérifier si faux
  # commandes
elsif # élément à vérifier si faux
  # commandes
else
  # commandes
end
```

### Appeler un évènement commun

```ruby
call_common_event(id)
```

### Attendre

```ruby
wait(frames)
```

## Equipe

### Modifier l'argent

`gold` renvoie l'argent possédé.

`gain_gold(x)` fait gagner `x` pièces à l'équipe.

`lose_gold(x)` fait perdre `x` pièces à l'équipe.

`monster_give_gold(id)` renvoie l'or donné par un ennemi référencé par son `id`.

## Déplacement

### Téléportation

```ruby
player_teleport(map_id, x, y, direction, fondu)
```

`direction` est facultatif et vaut 2, 4, 6 ou 8.

`fade_type` est facultatif et vaut 0 par défaut pour un fondu au noir. 1 est un fondu au blanc, et 2 est une transition instantanée.

## Effets visuels

### Effets météorologiques

```ruby
$game_map.screen.change_weather(type, power, transition)
```

`type` vaut `:none`, `:rain`, `:storm`, ou `:snow`.

`power` est l'intensité de l'effet.

`transition` est une durée en frames.

Par défaut, les effets météorologiques assombrissent l'écran. Il est possible de désactiver et de réactiver cet effet.

```ruby
disable_weather_dimness
enable_weather_dimness
```

Voici un exemple dans lequel l'intensité de la pluie varie aléatoirement entre 3 et 9. `rand(7)` produit un nombre entre 0 et 6, auquel on ajoute 3.

```ruby
$game_map.screen.change_weather(:rain, 3 + rand(7), 120)
```

## Musiques et effets sonores

### Gestion de la musique (BGM)

```ruby
bgm_play(name, volume, pitch)
```

`volume` et `pitch` sont facultatifs et valent 100 par défaut. Ces paramètres peuvent être changés plus tard avec les commandes `bgm_volume(volume)` et `bgm_pitch(pitch)`.

La musique en cours peut être mémorisée avec `save_bgm` puis être reprise avec `replay_bgm`.

La musique peut être arrêtée soudainement :

```ruby
bgm_stop
```

Ou bien s'effacer en fondu :

```ruby
bgm_fade(secondes)
```

La durée du fondu peut également être précisée en frames :

```ruby
bgm_fade(frames, true)
```

### Gestion de l'ambiance sonore (BGS)

Les commandes sont les mêmes que précédemment, en changeant `bgm` par `bgs`, à l'exception des commandes `save_bgm` et `replay_bgm` qui n'ont pas d'équivalent.

Enfin, notez qu'il est possible d'arrêter en fondu le BGM et le BGS en une seule commande :

```ruby
sound_fade(secondes)
sound_fade(frames, true)
```

## Scènes du jeu

### Ouvrir le menu de chargement

```ruby
call_load_screen
```

### Retourner à l'écran titre

```ruby
call_title_screen
```

### Quitter le jeu

```ruby
rm_kill
```
