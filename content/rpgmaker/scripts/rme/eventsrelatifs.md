Il est très courant de vouloir exécuter un évènement au chargement de certaines cartes. RME possède un système assez simple à utiliser pour exécuter une série de commandes RME dès qu'une carte est chargée.

Il suffit de créer un emplacement vide dans l'éditeur de scripts, en dessous de RME, que vous pouvez par exemple nommer `Map Onload Events`. C'est dans cet emplacement que vous pourrez écrire des évènements à exécuter au déclenchement d'une carte. Par exemple :

```ruby
map_onload(1) do
   # Ici vous pouvez mettre toutes les commandes RME
end
```

Au chargement de la carte 1, toutes les commandes présentes entre `do` et `end` seront exécutées.  Vous pouvez placer autant de onload que vous le désirez.

Admettons que je désire, pour la map2, charger le panorama de la map2 et afficher un effet de lumière au chargement de cette dernière, mais aussi, par exemple, qu'en arrivant sur la map3, vous désireriez attribuer à la variable 19, la valeur 27 :

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

Il est possible de généraliser un comportement pour plusieurs cartes. Par exemple :

```ruby
map_onload(1,2,3,4,5) do
   V[2] = player_x
   V[3] = player_y
end
```

Cette commande fera que chaque fois que les maps1, 2, 3, 4, et 5 seront chargées, les variables 2 et 3 prendront les coordonnées du joueur.

### Sélection universelle

Il existe un sélecteur un peu particulier, `:all` qui permet de pointer toutes les maps. Par exemple :

```ruby
map_onload(:all) do
   pictures_clear
   parallaxes_clear
end
```

Cette commande efface toutes les images et les panoramas au chargement d'une nouvelle carte.

### Note sur les priorités

On peut appeler autant de onload que l'on désire. Donc cette succession de commandes est parfaitement valide :

```ruby
map_onload(1) do
   pictures_clear
end
map_onload(1) do
   parallaxes_clear
end
```

Cependant, c'est **toujours** le premier onload défini qui sera exécuté en premier. Par contre les sélections universelles seront toujours appelées **en tout premier**.

### Evènements continus

Au delà de pouvoir exécuter une succession de commandes au démarrage de la carte, il est aussi possible d'exécuter une succession de commandes en parallèle, durant l'exécution d'une carte. Par exemple :

```ruby
map_onload(:all){
   picture_show(20, "cursor")
}
map_onprogress(:all){
   V[1] = mouse_x
   V[2] = mouse_y
   picture_move(20, V[1], V[2], 100, 100, 1, false)
}
```

Affichera l'image "cursor" en chargement de carte, puis en parallèle, les coordonnées de la souris seront placées dans les variables 1 et 2, et l'image cursor sera déplacée au coordonnées de la souris.