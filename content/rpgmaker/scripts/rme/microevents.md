La plus grosse et la plus cool des nouveautés de RME. Elle est l'issue d'une fusion entre tout ce que vous avez pu lire dans les pages précédentes (Déclencheurs personnalisés, commandes et sélecteurs), les micro-évènements vous permettront d'économiser un nombre assez important d'évènements en processus parallèle, tout en gagnant en performance !

## Exécuter des portions d'évènements dans certains contextes

L'idée qui ressort d'un Micro-évènement est de permettre de n'exécuter des portions d'évènements que sous certaines conditions ! Par exemple, je voudrais que chaque fois que je clique sur un évènement, on affiche (au moyen de `p "lol"`) "lol" dans la console. Une solution serait de faire un évènement en processus parallèle avec une boucle etc. Et il faudrait répéter ce code si on veut ce comportement pour plusieurs évènements. Avouez que ce n'est pas très commode.

### La commande bind

Concrètement, la commande `bind` permet d'associer à des évènements (au moyen d'un sélecteur), une condition de déclenchement et une portion d'évènement à exécuter si la condition de déclenchement est respectée. Pour reprendre l'exemple cité dans l'introduction, on utilisera cette commande : `bind(0, :click)`. Une fois que cette commande sera exécutée, chaque fois que la condition relative à click sera remplie pour le héros (événement 0), la commande 'p "lol"' sera exécutée".

#### Taxinomie de bind

Nous allons voir maintenant quelle est la forme de cette commande un peu particulière. Concrètement, la voici :

`bind(SELECTEUR, TRIGGER, *Nombre_execution)`.

*    Le sélecteur n'a rien de complexe, vous pouvez vous référer à [cette section](Sélecteurs-d'évènements)
*    Nom du micro event
*    Nombre de fois qu'il faut exécuter l'action. Par défaut, le nombre est infini

##### Sauvegarder un micro-event

Comme beaucoup de choses dans RME, il faut sauvegarder un micro-évènement. J'ai pris l'habitude de les sauvegarder dans un script vierge au dessus du `main`. La sémantique de l'ajout d'un micro-évènement est :

```ruby
store_action(:name, trigger{|id| condition sur id}){|id| action sur id}
```

Par exemple, si je voulais que chaque fois que l'on clique sur un évènement la console affiche son ID, on pourrait imaginer ceci :

```ruby
store_action(:click_to_id, trigger{|id| mouse_click_event?(id)}){|id| p "Oh, l'évènement #{id} a été cliqué !"}
```

Et pour démarrer le micro-évènement. Il suffit de faire cet appel de script :

```ruby
bind(all_events, :click_to_id)
```

Une fois que cet évènement est lancé, chaque fois qu'un évènement sera cliqué, la console affichera le message.

##### Exemple d'utilisation

Par exemple, si nous désirons connaître le dernier évènement sur lequel la souris a cliqué, il suffirait de créer un écouteur sur tous les évènements :

`bind(all_events, :click){|id| V[5] = id}`

Chaque fois qu'un évènement sera cliqué, la variable 5 prendra l'ID de l'évènement cliqué.

Un autre exemple (un peu étrange), serait : Chaque fois que je clique sur un évènement, je veux que l'image 1 reçoive un effet miroir :

`bind(all_events, :click){|id| picture_flip(1)}`

#### Durée de vie

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