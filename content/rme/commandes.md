---
title: "Principe des commandes de RME"
portail: rme
menu:
  rme:
    name: "Principe des commandes"
    parent: commandes
    weight: 1
---

Les commandes constituent la brique centrale de RME. Elles permettent des actions qui seraient très complexes en évènements classiques. Pour en voir certains usages, téléchargez le [Starter Pack]({{< ref "/rpgmaker/starterpack.md" >}}) ou consultez les exemples de ce portail.

Une commande n'est rien de plus qu'une action :

* Pouvant renvoyer une valeur, comme les coordonnées d'un évènement.
* Pouvant effectuer quelque chose, par exemple effacer une image.
* Pouvant effectuer quelque chose et renvoyer une valeur.

Les commandes sont généralement appelées dans des appels de script mais peuvent aussi être utilisées dans des scripts. Il existe plusieurs manières d'appeler une commande.

```ruby
nom_de_la_commande(argument1, argument2, etc.)
```

Cette forme n'est utilisable que dans les appels de scripts, dans un évènement. Comme les commandes ont été pensées pour cette utilisation, c'est cette forme qui est présentée dans la documentation.

```ruby
command(:nom_de_la_commande, arg1, arg2, etc.)
cmd(:nom_de_la_commande, arg1, arg2, etc.)
c(:nom_de_la_commande, arg1, arg2, etc.)
Command.nom_de_la_commande(arg1, arg2, etc.)
```

Ces formes permettent d'utiliser les commandes dans n'importe quel script, si cela est possible. Libre à vous de choisir votre syntaxe préférée parmi ces quatre.

## Usage de la documentation

Toutes les commandes sont référencées dans la [liste](http://rmex.github.io/RMEDoc) et sont organisées par catégories. Chaque commande est décrite formellement.

Une commande peut prendre plusieurs arguments ou aucun. Si une commande ne demande aucun argument, il n'est pas nécessaire d'écrire `()` en fin de commande.

L'action d'attribuer une valeur à un argument est souvent nommée « passer x en argument ».

### Types d'argument

Les arguments ont des types de données différents précisés dans la documentation. Voici les types que vous pourrez y trouver :

Type | Description
--- | ---
`:Fixnum` | Un entier, allant de -infini à +infini. Ex: `1`, `10`, `-7000`. C'est le type d'argument le plus fréquent.
`:Float` | Un nombre à virgule. Ex: `12.345`
`:String` | Une chaîne de caractères. Elles s'écrivent entre guillemets ou apostrophes. Ex: `"chien"`, `'chat'`
`:Boolean` | Peut être `true` (pour vrai ou activé) ou `false` (pour faux ou désactivé). Une commande attendant un booléen peut prendre un interrupteur à la place de `true` ou `false`.
`:Symbol` | Un mot préfixé de `:`. Ex: `:chien`, `:chat`. Souvent, quand une commande attend un symbole, la liste des symboles autorisés est spécifiée dans la documentation. Les symboles sont aussi utilisés pour référencer une [touche du clavier ou de la souris]({{< ref "/rme/syntaxe/touches.md" >}}).
`:Tone` | Une teinte. Il est conseillé d'écrire la commande `tone(r, v, b, g)` qui génère une teinte.
`:Color` | Une couleur. Il est conseillé d'écrire la commande `color(r, v, b, a)` qui génère une couleur.
`:Selector` | Une construction pour sélectionner plusieurs évènements d'un coup. Voir la [section sur les sélecteurs]({{< ref "/rme/selecteurs.md" >}}).

### Arguments facultatifs

Un argument facultatif possède une valeur par défaut. Par conséquent, il n'est pas obligatoire de spécifier cet argument si on ne veut pas le modifier.

Dans la documentation, les arguments facultatifs sont précédés d'un `*`. Imaginons par exemple cette commande :

```ruby
commande(a, b, c, *d, *e)
```

`a`, `b` et `c` sont des arguments obligatoires.

`d` et `e` sont des arguments facultatifs.

On peut donc utiliser cette commande de différentes manières :

* `commande(truc, bidule, chouette)` et les arguments `d` et `e` prendront leur valeur par défaut.
* `commande(truc, bidule, chouette, machin)` et l'argument `e` prendra sa valeur par défaut.
* `commande(truc, bidule, chouette, machin, chose)` et aucune valeur par défaut ne sera utilisée.

Il est impossible de jouir de la valeur par défaut de `d` si on veut spécifier la valeur de `e`. Cependant, la documentation spécifie chaque fois la valeur par défaut de ces arguments facultatifs, ce qui vous permet de la renseigner manuellement.

### Exemple de lecture

Prenons la commande `picture_show` comme exemple, parce qu'elle est longue et utilise plusieurs types d'arguments !

```ruby
picture_show(id, name, *x, *y, *origin, *zoom_x, *zoom_y, *opacity, *blend_type)
# Affiche une image à l'écran
```

Nom | Type | Description
--- | --- | ---
`id` | `Fixnum` | ID de l'image
`name` | `String` | Nom de l'image, sans l'extension `.png`
`*x` | `Fixnum` | Position X de l'image, par défaut 0
`*y` | `Fixnum` | Position Y de l'image, par défaut 0
`*origin` | `Fixnum` | Origine de l'image, 0 = Haut gauche, 1 = centré, [x,y] = orienté autours de X,Y, par défaut, zéro
`*zoom_x` | `Fixnum` | Zoom en largeur, par défaut 100 pour 100%
`*zoom_y` | `Fixnum` | Zoom en hauteur, par défaut 100 pour 100%
`*opacity` | `Fixnum` | Opacité de l'image de 0 à 255, par défaut 255
`*blend_type` | `Fixnum` | Mode de fusion. 0=Normal, 1=Addition, 2=Soustraction, par défaut 0

On voit que ses arguments minimes sont `id` et `name`. Donc pour afficher l'image `lol.png` en tant qu'image 1, il suffit d'écrire `picture_show(1, "lol")`.

Maintenant voyons plusieurs cas de figure :

```ruby
picture_show(1, "lol", 10, 20)
```

Affiche l'image 1, le fichier "lol", à 10 pixels de la gauche et 20 pixels du haut.

```ruby
picture_show(1, "lol", 10, 20, 1)
```

La même chose, sauf que l'image est positionnée par rapport à son centre : origine 1 = centré.

```ruby
picture_show(1, "lol", 10, 20, [10, 10])
```

Cette fois-ci, l'origine de l'image n'est ni le point haut-gauche, ni le centre, mais précisément le point de coordonnées `[10, 10]`.

Si la taille de l'image fait 30×40 pixels, il est possible de prendre comme origine le point bas-gauche `[0,40]`, le point haut-droite `[30,0]`, ou bien... n'importe quel point. Très pratique !

```ruby
picture_show(1, "lol", 10, 20, 0, 100, 84, 220, 1)
```

On utilise tous les paramètres : l'origine de l'image est son point haut-gauche ; elle fait toute sa largeur (`zoom_x = 100`) mais seulement 84% de sa hauteur (`zoom_y = 84`). Son opacité est à 220 (légère transparence) et son mode de fusion est l'addition (`blend_type = 1`).

### Arguments particuliers

En général, le type d'un argument dans la documentation donne une information limitée. C'est très visible dans le cas des arguments `:Fixnum`. Voici donc une spécification sur certains arguments entiers :

* Lorsqu'une `opacity` est attendue, la valeur doit être comprise en 0 (transparent) et 255 (opaque).
* Pour un `blend_mode` ou `blend_type`, la valeur peut être 0 (normal), 1 (addition) ou 2 (soustraction).
* Un `zoom` doit être compris entre 0 et 100.
* Pour une `speed`, un nombre négatif correspond au sens opposé. Par exemple, pour une rotation dans le sens des aiguilles d'une montre, la vitesse sera positive et, pour tourner dans l'autre sens, la vitesse sera négative.

## Commandes renvoyant des valeurs

Certaines commandes renvoient des valeurs, comme `mouse_x` et `mouse_y`. Ces commandes peuvent être liées à une variable ou construire des expressions.

Par exemple : `V[1] = mouse_x`. Ou encore « Si script : `mouse_x > 3` ».

Les commandes qui renvoient des booléens (`true` ou `false`) peuvent être utilisées dans une expression ou être liées à des interrupteurs comme `S[1] = pixel_in_picture?(1, mouse_x, mouse_y)`.

Enfin, il existe certaines commandes renvoyant des tableaux mais qui sont un peu particulières à manipuler. La commande `actor_armors(id_heros)` par exemple renvoie un tableau de tous les index des armures équipées par un héros. On peut connaître la taille d'un tableau au moyen de la commande `length(tableau)` et accéder à une cellule particulière au moyen de la commande `get(tableau, index_de_la_cellule)`. N'oubliez pas que la première cellule a pour index 0.