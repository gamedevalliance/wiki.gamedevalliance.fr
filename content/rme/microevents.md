---
title: "Les micro-évènements de RME"
portail: rme
menu:
  rme:
    name: "Micro-évènements"
    parent: events
    weight: 4
---

Les micro-évènements permettent d'économiser un nombre important d'évènements en processus parallèle, tout en gagnant en performance. C'est une nouveauté de RME issue d'une fusion entre les déclencheurs personnalisés, les commandes et les sélecteurs. L'idée est de permettre de n'exécuter des portions d'évènements que sous certaines conditions.

## La commande bind

La commande `bind` permet d'associer à un sélecteur une condition de déclenchement et une portion d'évènement à exécuter.

```ruby
bind(selecteur, nom, nombre_executions)
```

1. Pour créer un sélecteur, référez-vous à [cette section]({{< ref "/rme/selecteurs.md" >}}).
2. Nom du micro-évènement.
3. Facultatif : nombre de fois que l'action peut être exécutée. Par défaut, le nombre est infini. Vous pouvez ainsi donner une durée de vie à votre micro-évènement

## Sauvegarder un micro-event

Vous pouvez prendre l'habitude de sauvegarder vos micro-évènements dans un script vierge au-dessus de `Main`. La sémantique de l'ajout d'un micro-évènement est :

```ruby
store_action(:name, trigger{|id| condition sur id}){|id| action sur id}
```

Le `trigger` est identique aux [déclencheurs personnalisés]{{< ref "/rme/declencheurs.md" >}}), si ce n'est que la variable `id` permet de travailler sur l'évènement courant.

Voici un exemple où chaque fois que l'on clique sur un évènement, la console affiche son ID :

```ruby
store_action(:click_to_id, trigger{|id| mouse_click_event?(id)}){|id| p "Oh, l'évènement #{id} a été cliqué !"}
```

Pour démarrer le micro-évènement, on écrit cet appel de script :

```ruby
bind(all_events, :click_to_id)
```

Cette commande associe le sélecteur `all_events` à notre micro-évènement. Après que ce script ait été exécuté, chaque fois qu'un évènement est cliqué, la console affiche le message.

## Exemple d'utilisation

Ici, nous désirons connaître le dernier évènement sur lequel la souris a cliqué. On peut créer un écouteur sur tous les évènements :

```ruby
bind(all_events, :click){|id| V[5] = id}
```

Chaque fois qu'un évènement sera cliqué, la variable 5 prendra l'ID de l'évènement en question.

## La commande unbind

La commande `unbind(selecteur)` délie tous les micro-évènements des évènements pointés par le sélecteur. On peut spécifier quel micro-évènement délier en écrivant `unbind(selecteur, :microevent)`.

## Conclusion

Les micro-évènements sont un ajout très novateur de RME. Bien que leur usage puisse paraître très complexe, ils peuvent constituer un avantage pour faciliter la programmation en évènements, tout en proposant un gain de performance, car ils sont plus légers à exécuter que des évènements en processus parallèle.

Ils peuvent être déclarés dans les `map_onload` ou dans un évènement en processus parallèle qui se supprime après. Espérons qu'ils vous offriront un gain de temps !