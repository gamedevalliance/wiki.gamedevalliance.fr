---
title: "Map Effects, un script de Zeus81"
description: "Ce script pour RPG Maker VX et VX Ace permet d'afficher des effets visuels à l'écran, tels que des flous, des zooms et des distorsions."
tocmaxdepth: 3
---

Ce script pour [RPG Maker VX]({{< ref "rpgmaker.md#rpg-maker-vx" >}}) et [VX Ace]({{< ref "rpgmaker.md#rpg-maker-vx-ace" >}}) permet d'afficher des effets visuels à l'écran, tels que des flous, des zooms et des distorsions.

{{< youtube 9yxZOikSKBk >}}

## Obtenir

- [Lien direct](https://www.dropbox.com/sh/cajvk3wf6ue0ivf/AABwBm7uJirrzGCvgs6hW3OYa/Map%20Effects.rb) vers le script
- [Documentation](https://www.dropbox.com/sh/cajvk3wf6ue0ivf/AAA7tzlyyB0aQLtXNe8ov6jla/Map%20Effects%20Doc%20Fr.txt) originale

## Documentation

Placez ce script après les autres dans l'éditeur de script pour une meilleure compatibilité.

Son fonctionnement est très simple : il fait une capture d'écran de la map qu'il affiche à la place de celle-ci. Les effets sont alors appliqués sur cette image, une sorte de post processing. Pour appliquer des effets vous pouvez utiliser une (ou plusieurs) des fonctions ci-dessous dans un [appel de script]({{< ref "evenements.md#appel-de-script" >}}).

### Liste rapide des fonctions

```ruby
map_effects.memorize
map_effects.restore
map_effects.clear
map_effects.active = true ou false
map_effects.refresh_rate = vitesse de rafraîchissement en fps
map_effects.back = true ou false
map_effects.mirror = true ou false
map_effects.blend_type = 0 ou 1 ou 2
map_effects.set_zoom(zoom, duration, center_on_player)
map_effects.set_angle(angle, duration)
map_effects.set_wave(amp, length, speed, duration)
map_effects.set_origin(x, y)
map_effects.set_opacity(opacity, duration)
map_effects.set_color(red, green, blue, alpha, duration)
map_effects.set_tone(red, green, blue, gray, duration)
map_effects.set_hue(hue, duration)
map_effects.set_pixelize(pixel_size, duration)
map_effects.setup_blur(division, fade, animation, duration)
map_effects.set_gaussian_blur(length, duration)
map_effects.set_linear_blur(angle, length, duration)
map_effects.set_zoom_blur(zoom, duration)
map_effects.set_radial_blur(angle, duration)
map_effects.set_motion_blur(rate, duration)
```

### Détails

#### map_effects.memorize

Mémorise l'état actuel de tous les effets.

#### map_effects.restore

Restaure les états mémorisés de tous les effets.

#### map_effects.clear

Remet à zéro les effets, excepté les options `active` et `refresh_rate`.

#### map_effects.active = true ou false

Par défaut la valeur est `true`.

Permet d'activer ou désactiver tous les effets sans plus d'effort. Ce script utilise une certaine quantité de CPU, il peut donc être intéressant de laisser aux joueurs qui ont un PC peu puissannt la possibilité de désactiver les effets, étant donné que c'est assez dispensable.

#### map_effects.refresh_rate = vitesse de rafraîchissement

Par défaut la valeur est 30, pour un rafraîchissement une frame sur deux. La valeur maximum est 60.

Comme les effets consomment du CPU, il peut être utile de baisser le taux de rafraîchissement, car jusqu'à un certain point ça ne se voit pas pour certains effets.

On pourrait tout aussi bien laisser le `refresh_rate` à 60 et le jeu baisserait automatiquement son nombre de fps si nécessaire, mais en baissant manuellement le taux de rafraîchssement on peut obtenir de meilleurs résultats. Bien sûr il ne faut pas mettre de valeur trop basse (en dessous de 20) sinon le jeu donne l'impression de ramer et devient injouable.

Si on met 0, les captures ne sont plus mises à jour. La dernière capture en date est utilisée pour les effets : ça rame moins et ça peut être utile pour réaliser des effets plus compliqués, comme des transitions ou des scénettes fixes.

Modifier le `refresh_rate` ne concerne que ce script (quand on utilise des effets) et n'a aucune incidence sur le reste du jeu.

#### map_effects.back = true ou false

Par défaut la valeur est `false`.

Affiche une image de la map sans aucun effet derrière les images d'effets. A utiliser conjointement avec `map_effects.set_opacity` pour la laisser transparaître. Utilisée avec `map_effects.set_wave` par exemple, cette commande peut produire un effet de chaleur.

#### map_effects.mirror = true ou false

Par défaut la valeur est `false`.

Affiche la map en mode miroir (flip horizontal).

#### map_effects.blend_type = 0 ou 1 ou 2

Par défaut la valeur est 0.

Change le mode fusion (type de transparence) des effets.

- 0 = Normal
- 1 = Addition
- 2 = Soustraction

Ca ne sert pas à grand chose tout seul, mais additionné à d'autres effets de couleur, ça peut donner des trucs sympas.

#### map_effects.set_zoom(zoom, duration, center_on_player)

Zoome sur la map.

`zoom` est un pourcentage, de préférence supérieur à 100. On peut mettre des valeurs inférieures 100 mais l'image sera simplement réduite et centrée, on ne verra pas davantage de la map donc ça ne sert pas à grand chose. La valeur par défaut est 100.

`duration` est la durée de transition en nombre de frames. 0 = pas de transition. On peut omettre cete argument, ce qui mettra sa valeur à 0. Cela fonctionne de la même façon partout.

`center_on_player` vaut `true` ou `false`.

- Si `true` : recentre automatiquement la caméra sur le héros.
- Si `false` : recentre la caméra au milieu de l'écran. Par conséquent si le héros est au milieu de l'écran ça change rien. On met `false` quand on utilise des scrolling de caméra et qu'on veut zoomer en même temps.

Exemples :

```ruby
map_effects.set_zoom(200) # => zoom à 200% instantané
map_effects.set_zoom(200, 60) # => zoom à 200% sur 60 frames
map_effects.set_zoom(200, 60, false) # => idem mais pas auto recentré
```

#### map_effects.set_angle(angle, duration)

Fait tourner la map. En plus d'être peu utile ça fait ramer, surtout sur VX Ace, donc à éviter en temps réel. Cependant on peut toujours l'utiliser pour faire des effets de transition en ayant au préalable mis le `refresh_rate` à 0.

`angle` est le nombre de degrés. On peut aussi mettre un nombre négatif. A noter que si on fait une rotation de 360° puis qu'on veut en refaire une autre une deuxième fois, ça ne fera rien, parce qu'on est déjà à 360°. Il faut soit tourner à 720°, soit remettre la valeur à 0 avant de la remettre à 360.

Exemple :

```ruby
map_effects.set_angle(360, 60) # => do a barrel roll
```

#### map_effects.set_wave(amp, length, speed, duration)

Fait onduler la map.

`amp` est l'amplitude (horizontale) de l'ondulation en nombre de pixels. Ce doit être un nombre supérieur à 0.

`length` est la longueur (verticale) de l'onde en nombre de pixels. La valeur par défaut est 180.

`speed` est la vitesse de l'ondulation. La valeur par défaut est 360.

Exemple :

```ruby
map_effects.set_wave(4, 180, 360, 60)
```

#### map_effects.set_origin(x, y)

Change le point d'origine, principalement pour les effets de flou de zoom et de flou radial. C'est aussi effectif pour les zooms et rotations de la map, mais dans ces cas-là il vaut mieux le laisser au milieu. Ca ne fait rien si on le change sans effet.

`x` est la coordonnée x du centre de l'image en pourcentage. 0 = tout à gauche. 100 = tout à droite. La valeur par défaut est 50.

`y` est la coordonnée y du centre de l'image en pourcentage. 0 = tout en haut. 100 = tout en bas. La valeur par défaut est 50.

Exemple :

```ruby
map_effects.set_origin(100, 0) # Origine au coin haut-droit
```

#### map_effects.set_opacity(opacity, duration)

Change l'opacité des images d'effet, ce qui veut dire que c'est inutile sans effet. A utiliser conjointement avec `map_effects.back` pour avoir une image derrière.

`opacity` est un pourcentage entre 0 et 100. La valeur par défaut est 100.

Exemple :

```ruby
map_effects.set_opacity(75, 60)
```

#### map_effects.set_color(red, green, blue, alpha, duration)

Colorise/applique une couleur sur la map.

`red, green, blue` sont des nombres entre 0 et 255. Ce sont les composantes de la couleur.

`alpha` est un nombre entre 0 et 255. C'est la transparence de la couleur. Mettre à 0 désactive l'effet.

Exemple :

```ruby
map_effects.set_color(255, 0, 0, 128, 60) # => map rouge
```

#### map_effects.set_tone(red, green, blue, gray, duration)

Change le ton de la map. C'est comme pour l'écran, mais pour la map. Tout seul ça ne sert à rien, autant utiliser la commande pour modifier le ton de l'écran. Cela dit, combiné avec d'autres effets, ça peut donner des trucs nouveaux.

`red, green, blue` sont des nombres entre -255 et 255. C'est comme dans la commande pour modifier le ton de l'écran.

`gray` est un nombre entre 0 et 255. C'est la saturation.

Exemple :

```ruby
map_effects.set_tone(0, 0, 0, 255, 60) # => map en noir et blanc
```

#### map_effects.set_hue(hue, duration)

Change la teinte de la map. Ca fait beaucoup ramer donc c'est pas vraiment utilisable, mais je l'avais implémenté, et comme j'aime pas travailler pour rien je l'ai laissé.

`hue` est un nombre pour la teinte. C'est un angle pour être plus précis, donc si on met 360 ça fera une rotation complète de la teinte.

Exemple :

```ruby
map_effects.set_hue(180, 60)
```

#### map_effects.set_pixelize(pixel_size, duration)

Pixelise l'écran ; on peut s'en servir pour faire des transitions old school. Ce n'est pas un zoom.

`pixel_size` est le pourcentage multiplicateur de la taille des pixels. Ce doit être supérieur à 100.

Exemple :

```ruby
map_effects.set_pixelize(4000, 60) # => gloubiboulga
```

#### map_effects.setup_blur(division, fade, animation, duration)

Configure des variables utilisées par les divers effets de flou.

`division` est un nombre entre 1 et 16. Par défaut la valeur est 4. C'est le nombre d'images utilisées pour les divers effets de flou. Plus il y en a et plus c'est joli, et plus ça utilise de CPU. Pour le flou gaussien il est préférable d'utiliser un multiple de 4.

`fade` est le facteur d'estompement des différentes images de flou. Par défaut la valeur est 0, ce qui veut dire que l'opacité des images est constante. Pour le flou gaussien, il vaut mieux laisser cette valeur à 0. Pour les autres, on peut la modifier selon l'effet que l'on veut obtenir. Plus la valeur est haute et plus l'opacité s'estompera vite. On peut aussi mettre une valeur inférieure à 0 pour avoir l'effet inverse. Il est très conseillé de mettre une valeur de 100 pour le flou de zoom.

`animation` est la vitesse d'animation du flou. Par défaut la valeur est 0 = pas d'animation. On peut mettre une valeur négative pour changer le sens de l'animation. Pour animer un effet de flou, il est préférable de mettre aussi le `fade` à 100, sinon ce n'est pas très joli. L'animation ne marche pas avec le flou gaussien ni avec le flou de mouvement.

Exemple :

```ruby
map_effects.setup_blur(8, 100, 1)
map_effects.set_linear_blur(0, 50, 60)
```

#### map_effects.set_gaussian_blur(length, duration)

Applique un effet de flou en superposant l'image de la map plusieurs fois avec un petit décalage à chaque fois. Le nombre d'image à superposer est défini au préalable par `blur_division`, et il vaut mieux avoir un multiple de 4.

`length` est la longueur du décalage, un nombre entier. La valeur par défaut est 0 = effet désactivé. Mieux vaut mettre des petits nombres : 1 c'est bien. Si le décalage est trop grand, ça donne un effet bourré plutôt que flou.

Exemple :

```ruby
map_effects.set_gaussian_blur(10, 60)
```

#### map_effects.set_linear_blur(angle, length, duration)

Flou cinétique linéaire dans une direction.

`angle` est la direction du flou cinétique exprimé en degrés. 0 = vers la droite, 90 = vers le haut, etc.

`length` est l'étendue du flou en nombre de pixels. La valeur par défaut est 0 = effet désactivé.

Exemple :

```ruby
map_effects.set_linear_blur(0, 20, 60)
```

#### map_effects.set_zoom_blur(zoom, duration)

Flou cinétique de zoom.

`zoom` est l'étendue du flou en pourcentage de zoom. La valeur par défaut est 100 = effet désactivé. La valeur minimum est 0.

Exemple :

```ruby
map_effects.set_zoom_blur(200, 60)
```

#### map_effects.set_radial_blur(angle, duration)

Cet effet fait malheureusement pas mal ramer, et la surcharge augmente exponentiellement avec le nombre d'images de flou (division). Utilisé conjointement avec le flou de zoom, ça donne un magnifique effet de spirale, mais à 0 FPS.

`angle` est l'étendue du flou en degrés. La valeur par défaut est 0 = désactivé.

Exemple :

```ruby
map_effects.set_radial_blur(10, 60)
```

#### map_effects.set_motion_blur(rate, duration)

Flou de mouvement.

rate est la latence de l'effet en nombre de frames. La valeur par défaut est 0 = effet désactivé.

Exemple :

```ruby
map_effects.set_motion_blur(1)
```
