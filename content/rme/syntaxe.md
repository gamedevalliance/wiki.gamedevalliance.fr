---
title: Variables, interrupteurs et pointeurs
portail: rme
menu:
  rme:
    name: "Variables et interrupteurs"
    parent: syntaxe
    weight: 1
---

Les variables et les interrupteurs sont très utilisés dans la création d'un jeu RPG Maker. En général, les fenêtres du logiciel permettent d'affecter des variables à certaines valeurs (par exemple la position x et y d'une image ou encore les coordonnées de téléportation du héros). Cependant, leur utilisation dans un appel de script est longue.

```ruby
$game_variables[id] # pour accéder à une variable
$game_switches[id]  # pour accéder à un interrupteur
```

Le premier objectif de RME est de simplifier l'accès aux variables et aux interrupteurs. Le script ajoute une nouvelle syntaxe :

```ruby
V[id] # pour accéder à une variable
S[id] # pour accéder à un interrupteur
```

## Les variables

L'attribution de valeur à une variable devient donc très facile. Par exemple, pour donner la valeur 134 à la variable 98, il suffira de faire dans un appel de script (ou dans un script complet) :

```ruby
V[98] = 134
```

Étant donné qu'il est possible d'utiliser cette syntaxe partout, il serait tout à fait envisageable de faire :

```ruby
V[V[12]] = V[1] + V[2] * V[3]
```

Ce qui signifie que la valeur de la variable 12 sera l'ID de la variable que l'on modifie et qu'on lui donnera la valeur de la variable 1 plus le produit de la variable 2 et de la variable 3.

### Opérations arithmétiques

Il existe une série d'opérateurs en plus de `+` et `*`, voici une liste rapide des opérateurs possibles :

```ruby
V[1] = V[2] + V[3]   # Addition
V[5] = V[3] - 3      # Soustraction
V[10] = 7 * V[9]     # Multiplication
V[8] = 2/4           # Division entière
V[6] = V[1] ** V[2]  # Puissance
V[1] = V[2] %4       # Modulo, le reste de la division entière
```

Il existe un petit raccourci syntaxique pour compresser certaines expressions :

```ruby
x += y  :  x = x + y
x -= y  :  x = x - y
x /= y  :  x = x / y
x *= y  :  x = x * y
x %= y  :  x = x % y
```

Cette notation peut être plus complexe, par exemple : `V[1] += (10 * (V[2] ** 2))`.

Comme pour les opérations arithmétiques classiques, les parenthèses permettent de changer les priorités des opérations.

Même si cette syntaxe peut sembler superflue au premier abord, elle permet de gagner un temps incroyable. Essayez par exemple de réaliser l'expression précédente `V[1] += (10 * (V[2] ** 2))` avec des commandes d'évènement classiques et vous constaterez que cela prend beaucoup plus de lignes et de temps.

## Les interrupteurs

On ne peut donner que deux valeurs à des interrupteurs, `true` signifiant que l'interrupteur est activé ou `false` indiquant qu'il est désactivé. Voici quelques expressions :

```ruby
S[1] = true  # active l'interrupteur 1
S[2] = false # désactive l'interrupteur 2
S[3] = S[1]  # donne à l'interrupteur 3 la valeur de l'interrupteur 1
```

### Opérations logiques

Alors que les variables étaient munies d'opérations arithmétiques, les interrupteurs sont liés d'opérations logiques. On peut donc combiner des interrupteurs :

*    `S[1] or S[2]`, pouvant s'écrire aussi `S[1] || S[2]` sera vrai si l'un des deux est activé
*    `S[1] and S[2]`, pouvant s'écrire aussi `S[1] && S[2]` sera vrai si les deux sont activés
*    `!S[1]`, pouvant s'écrire aussi `not S[1]` renverra l'inverse de l'expression.

Ces expressions peuvent par exemple être écrites dans l'espace « Script » d'une condition en évènements.

Comme pour les opérations arithmétiques, les opérations logiques peuvent être composées :

```ruby
(S[1] and S[2]) or (not S[3])
(S[1] && S[2]) || (!S[3])
```

Ces deux écritures sont strictement équivalentes.

### Opérateurs de comparaison

Dans RPG Maker, on a tendance à ne faire qu'activer ou désactiver des interrupteurs. Pour cela, on utilise généralement une condition. Par exemple :

> « *Si ma variable 5 est plus grande que 6, alors j'active l'interrupteur 3, sinon je le désactive.* »

C'est assez verbeux et long, alors que concrètement, l'expression « ma variable 5 est plus grande que 6 » est déjà une expression qui vaut `true` ou `false`. Donc on pourrait simplifier ce genre de comportement par : `S[3] =` « ma variable 5 est-elle plus grande que 6 ? ». Nous allons voir comment construire des valeurs pour les interrupteurs et donc économiser des conditions !

Il existe dans Ruby des opérateurs permettant la comparaison de valeurs. Nous allons en survoler quelques-uns.

* `x == y` est `true` si x égal à y, `false` sinon.
* `x != y` est `true` si x différent de y. Donc c'est identique à `!(x == y)`.
* `x > y` est `true` si x est strictement supérieur à y.
* `x < y` est `true` si x est strictement inférieur à y.
* `x >= y` est `true` si x est superieur ou égal à y.
* `x <= y` est `true` si x est inférieur ou égal à y.

Au travers de ces opérateurs, il est possible de composer des expressions plus complexes. Par exemple :

> « *Je veux activer un interrupteur* **si** *ma variable 13 est plus grande que ma variable 12* **et** *que la somme de ma variable 7 et de ma variable 8 donne un multiple de deux,* **ou bien si** *l'interrupteur est déjà activé.* »

```ruby
S[1] = S[1] or ((V[13] > V[12]) and (V[7] + V[8])%2 == 0)
```

Comme vous pouvez le voir, le parenthèsage permet de s'en sortir lors de la rédaction d'expressions complexes.

## Pointeurs

Dans l'index de variable ou d'interrupteur, on peut spécifier n'importe quelle expression Ruby valide qui retourne un entier. Par exemple `S[1+2+3]` désigne l'interrupteur 6, `S[V[10]]` qui désigne l'interrupteur dont l'index est défini par la valeur de la variable 10 ou encore `V[(V[10]+V[11])*3]` qui désignera la variable dont le numéro est la somme de la variable 10 et de la variable 11 multiplié par trois.

Dans une section suivante, vous verrez que certaines des commandes de RME renvoient des entiers. Il serait donc très original, mais possible, en utilisant une commande comme `mouse_x` qui renvoie la position X de la souris, d'écrire l'expression `V[mouse_x]`.

## Jutsus complémentaires

Voici deux petites techniques capables de faire gagner du temps dans des cas précis.

* `V[1], V[2] = V[2], V[1]` intervertit les valeurs de la variable 1 et 2
* `S[7..29] = true` active du 7ème interrupteur au 29ème interrupteur

Ces deux exemples fonctionnent aussi bien avec des variables que des interrupteurs.