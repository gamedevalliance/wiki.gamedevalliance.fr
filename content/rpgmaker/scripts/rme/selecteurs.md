Il arrive parfois que l'on désire appliquer une action sur des évènements en particulier, mais à la volée. Par exemple, pour programmer que si le joueur clique sur l'évènement 1 ou l'évènement 2, il saute sur place.

Il est possible de le réaliser avec des conditions. Cependant, toutes les commandes qui effectuent une action sur un évènement peuvent, au lieu de prendre l'ID d'un seul évènement, prendre une construction un peu particulière : le sélecteur.

Prenons par exemple la commande `mouse_click_event?(events)` qui renvoie `true` si la souris clique un évènement du sélecteur.

Nom  |Type | Description
--- | --- | ---
`events` | `Selectors` | Sélecteur d'évènements

Ici, l'expression  `mouse_click_event?(1)` renverra `true` si la souris clique sur l'évènement 1.

Maintenant comment vérifier la même action pour les évènements 1, 2 et 3 ? Vous pourriez utiliser un `or`, cependant cela n'est pas très efficace. A la place, il est possible de passer à l'argument `events`, qui attend un sélecteur, bien plus qu'un simple entier.

## Composer un sélecteur simple

Au-delà du simple entier, le sélecteur "produit" permet de sélectionner une liste d'évènements : `get_events(id1, id2, etc)`. On peut lui donner une infinité d'ID d'évènements et il ne prendra que ceux existants.

Pour reprendre l'exemple précédent, et en ajoutant le héros (dont l'ID est 0), nous pourrions utiliser ce sélecteur pour écrire :

```ruby
mouse_click_event?(get_events(1, 2, 3, 0))
```

## Générer un sélecteur

Le sélecteur simple nous oblige à connaître tous les ID. Il est possible de générer un sélecteur de cette manière :

```ruby
get_events{|id| générateur}
```

Par exemple, pour sélectionner tous les évènements dont l'ID est supérieur à 10 : `get_events{|id| id > 10}`.

On peut utiliser des opérateurs logiques dans le générateur :

```ruby
get_events{|id| id > 15 and id < 100}
```

### Utilisation des commandes RME

Comme le générateur connait l'ID d'un évènement, on peut faire preuve de plus d'originalité en utilisant des commandes RME.

```ruby
get_events{|id| event_x(id) > 14 and event_y(id) > player_y}
```

Ceci sélectionnera les évènements dont la position X est supérieure à 14, et qui se trouvent sous le héros.

### Combinaison d'un sélecteur simple et d'un générateur

Il est possible de sélectionner et de générer en même temps.

```ruby
get_events(1,2,3){|id| event_x(id) > 15}
```

Ce sélecteur contiendra les évènements 1, 2 et 3, mais aussi tous les évènements dont la coordonnée X est supérieure à 15.

## Sélecteurs supplémentaires

On peut très simplement créer un sélecteur comprenant l'intégralité des évènements et le héros.

Une manière d'écrire ce sélecteur serait : `get_events{|id| id >= 0}`. Cependant, il existe un sélecteur plus simple : `all_events` ou, en fonction de votre préférence, `get_events(:all_events)`.

Deux sélecteurs renvoient un seul évènement trouvé dans la liste :

- `once_event{|id| générateur}` renvoie le premier ID correspondant au générateur.
- `once_random_event{|id| générateur}` renvoie un ID aléatoire correspondant au générateur.

Les deux commandes renvoient `nil` si aucun évènement ne correspond au sélecteur.

Notez qu'il existe également les sélecteurs `get_pictures` et `all_pictures` pour manipuler les ID d'image.

## Exclure des évènements

Parfois, les générateurs prennent trop d'évènements à notre goût et nous aimerions pouvoir en retirer quelques-uns. Pour cela, on peut se servir de `not`. Par exemple, `all_events.not(0)` renvoie un sélecteur comprenant tous les évènements sauf le héros. Comme pour le sélecteur simple, on peut passer à `not` une infinité d'identifiants.

```ruby
get_events{|id| id%2 == 0}.not(2, 4, 16, 38)
```

Ce sélecteur prend tous les évènements dont les ID sont pairs, sauf les évènements 2, 4, 16 et 38.

La fonction `not` peut aussi exclure avec un générateur d'exclusion.

```ruby
all_events.not{|id| event_x(id) < player_x}
```

Ce sélecteur prend tous les évènements sauf ceux situés à gauche du héros.

Comme pour les générateurs simples, il est possible de combiner l'énumération et le générateur.

```ruby
all_events.not(0){|id| id > 13}
```

Ceci ne fonctionne pas sur les sélecteurs uniques !

## Astuce pratique

Il arrive que les sélecteurs deviennent longs, n'hésitez donc pas à les stocker dans des variables et à les écrire sur plusieurs lignes.

```ruby
V[1] = get_events{ |id|
   (event_y(id) == player_y) and (id%2 != 0)
}.not(0)
```

Cet exemple sélectionne tous les évènements se trouvant sur le même axe vertical que le héros, et dont l'identifiant est impair.