---
title: "Évènements relatifs aux cartes"
portail: rme
menu:
  rme:
    name: "Évènements relatifs"
    parent: events
    weight: 1
---

Il est très courant de vouloir exécuter un évènement au chargement de certaines cartes. Un système simple permet d'exécuter une série de commandes RME dès qu'une carte est chargée.

Créez un emplacement vide dans l'éditeur de scripts, en dessous de RME, que vous pouvez par exemple nommer `Map Onload Events`. C'est dans cet emplacement que vous pourrez écrire ce qu'il se passe à l'arrivée sur une carte. Par exemple :

```ruby
map_onload(1) do
   # Insérer des commandes RME
end
```

Au chargement de la carte 1, toutes les commandes présentes dans ce bloc seront exécutées. Vous pouvez écrire autant de blocs onload que vous le désirez.

Voici un autre exemple où, sur la carte 2, on charge un panorama et on affiche un effet de lumière, mais aussi où en arrivant sur la carte 3, on attribue la valeur 27 à la variable 19.

```ruby
map_onload(2) do
   parallax_show(1, "panorama_map2", 100)
   picture_show(10, "effet_lumiere", 0, 0)
end

map_onload(3) do
   V[19] = 27
end
```

### Sélection multiple de cartes

Il est possible de généraliser un comportement pour plusieurs cartes.

```ruby
map_onload(1,2,3,4,5) do
   V[2] = player_x
   V[3] = player_y
end
```

Avec ce script, chaque fois que les cartes 1, 2, 3, 4, et 5 seront chargées, les variables 2 et 3 prendront les coordonnées du joueur.

### Sélection universelle

Il existe un sélecteur un peu particulier, `:all`, qui permet de cibler toutes les maps.

```ruby
map_onload(:all) do
   pictures_clear
   parallaxes_clear
end
```

Cet exemple efface toutes les images et les panoramas au chargement d'une nouvelle carte.

### Note sur les priorités

On peut appeler autant de onload que l'on désire, donc cette succession de commandes est parfaitement valide :

```ruby
map_onload(1) do
   pictures_clear
end
map_onload(1) do
   parallaxes_clear
end
```

C'est toujours le premier onload défini qui sera exécuté en premier. Cependant, les sélections universelles seront toujours appelées en tout premier.

### Evènements continus

En plus d'exécuter des commandes au démarrage de la carte, il est aussi possible d'exécuter une succession de commandes en parallèle durant l'exécution d'une carte.

```ruby
map_onload(:all) do
   picture_show(20, "cursor")
end
map_onprogress(:all) do
   picture_move(20, mouse_x, mouse_y, 100, 100, 1, false)
end
```

Ce script affiche l'image `cursor.png` lors de l'arrivée sur la carte puis, en parallèle, l'image sera déplacée sur les coordonnées de la souris.