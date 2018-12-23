---
title: "Les micro-évènements de RME"
---

Les micro-évènements permettent d'économiser un nombre important d'évènements en processus parallèle, tout en gagnant en performance. C'est une nouveauté de RME issue d'une fusion entre les déclencheurs personnalisés, les commandes et les sélecteurs.

L'idée est de permettre de n'exécuter des portions d'évènements que sous certaines conditions ! Par exemple, je voudrais que chaque fois que je clique sur un évènement, on affiche (au moyen de `p "lol"`) "lol" dans la console. Une solution serait de faire un évènement en processus parallèle avec une boucle etc. Et il faudrait répéter ce code si on veut ce comportement pour plusieurs évènements. Avouez que ce n'est pas très commode.

## La commande bind

La commande `bind` permet d'associer à des évènements (au moyen d'un sélecteur) une condition de déclenchement et une portion d'évènement à exécuter.

```ruby
bind(selecteur, nom, *nombre_executions)
```

1. Pour créer un sélecteur, référez-vous à [cette section]().
2. Nom du micro-évènement.
3. Nombre de fois qu'il faut exécuter l'action. Par défaut, le nombre est infini.

Pour reprendre l'exemple cité dans l'introduction, on utilisera cette commande : `bind(0, :click)`. Une fois que cette commande sera exécutée, chaque fois que la condition relative à click sera remplie pour le héros (événement 0), la commande 'p "lol"' sera exécutée".

## Sauvegarder un micro-event

Comme beaucoup de choses dans RME, il faut sauvegarder un micro-évènement. Vous pouvez prendre l'habitude de les sauvegarder dans un script vierge au-dessus de `Main`. La sémantique de l'ajout d'un micro-évènement est :

```ruby
store_action(:name, trigger{|id| condition sur id}){|id| action sur id}
```

Par exemple, si je voulais que chaque fois que l'on clique sur un évènement la console affiche son ID, on pourrait imaginer ceci :

```ruby
store_action(:click_to_id, trigger{|id| mouse_click_event?(id)}){|id| p "Oh, l'évènement #{id} a été cliqué !"}
```

Et pour démarrer le micro-évènement,l suffit de faire cet appel de script :

```ruby
bind(all_events, :click_to_id)
```

Une fois que cet évènement est lancé, chaque fois qu'un évènement sera cliqué, la console affichera le message.

### Exemple d'utilisation

Par exemple, si nous désirons connaître le dernier évènement sur lequel la souris a cliqué, il suffirait de créer un écouteur sur tous les évènements :

```ruby
bind(all_events, :click){|id| V[5] = id}
```

Chaque fois qu'un évènement sera cliqué, la variable 5 prendra l'ID de l'évènement cliqué.

Un autre exemple (un peu étrange), serait : Chaque fois que je clique sur un évènement, je veux que l'image 1 reçoive un effet miroir :

```ruby
bind(all_events, :click){|id| picture_flip(1)}
```

### Durée de vie

Il est possible d'ajouter une durée de vie à un micro-évènement. En ajoutant un troisième paramètre au `bind`, comprenant le nombre d'exécutions possibles **par évènement**.

### La commande unbind

Il est évident que la commande `unbind` permet de délier un Micro-évènement. En effet `unbind(SELECTOR)` déliera tous les Micro-évènements de tous les évènements pointés par le sélecteur. Cependant, il est possible de spécifier quel Micro-évènement délier en passant en second argument le nom du sélecteur à délier. Par exemple `unibind(selector, :press)` déliera de tous les évènements pointés par le sélecteur, le Micro-évènement `:press`.

### Construire vos propres déclencheurs

*    Le nom de déclencheur est obligatoire pour pouvoir supprimer l'évènement via la commande `unbind`.
*    Le `trigger` est identique aux [déclencheurs personnalisés](Déclencheurs-personnalisés), si ce n'est que la variable `id` permet de travailler sur l'évènement courant.

## Conclusion

Même si l'usage des Micro-évènements peut paraître très complexe, je suis intimement convaincu qu'ils sont un véritable plus pour faciliter l'Event-Making, tout en proposant un véritable gain de performance (car ils sont plus légers à exécuter que des évènements en processus parallèles).
Ils peuvent être déclarés dans les `map_onload` ou dans un évènement en processus parallèle qui se supprime après. Et peuvent réellement faire gagner beaucoup de temps.
De mon point de vue, c'est la fonctionnalité la plus novatrice de RME.