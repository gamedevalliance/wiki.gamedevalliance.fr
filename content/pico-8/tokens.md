---
title: "Economiser des tokens"
description: "Le code d'un jeu PICO-8 a une taille limitée : il ne peut dépasser 8192 tokens. Découvrez toutes nos astuces pour réduire le nombre de tokens de votre jeu."
portail: pico-8
menu:
  pico-8:
    parent: general
    weight: 2
---

Le code d'un jeu PICO-8 ne peut pas dépasser 8192 tokens. Les tokens sont une limite arbitraire qui participe à l'identité des jeux PICO-8, au même titre que la palette de couleurs ou la résolution par exemple.

Coûtent 1 token chacun :

- les noms de variables,
- les opérateurs,
- les parenthèses et les crochets,
- les nombres et les chaînes de caractères.

Ne sont pas comptés :

- les virgules, les points et les points-virgule,
- les `local`,
- les `end`.

Le nombre de tokens actuellement utilisés est affiché en bas à droite de l'éditeur de code. En cliquant dessus, on peut afficher deux autres limites :

- le nombre de caractères (65535),
- la taille du code une fois compressé, qui ne doit être prise en compte que si vous exportez votre jeu en cartouche PNG.

Toutefois, c'est bien la limite de tokens qui sera le plus souvent atteinte en premier, et ce en quelques jours de travail tout au plus. Mais comme toute limite, on peut jouer avec et tenter d'exploiter nos ressources limitées au maximum à l'aide de quelques astuces. Certaines de ces pratiques permettent d'économiser des tokens tout en gardant un code lisible, mais la plupart le rendront difficile à modifier et particulièrement obscur, et sont donc à réserver pour la fin du développement.

## Assignations en une ligne

Vous pouvez déclarer autant de variables que vous le souhaitez en une ligne, ce qui vous économise un `=` par variable supplémentaire.

```lua
x, y, z = 10, 22, 3
```

Les virgules n'étant pas comptées, vous économisez ainsi un token par variable. Vous pouvez mélanger différents types de variables en une ligne. Le mot-clé `local` rendra toutes les variables de la ligne locales, et il ne coûte pas de token.

```lua
local text, anim = "abonnez-vous", {1, 2, 3}
```

A vrai dire, vous n'êtes même pas obligé·e d'assigner une valeur à chaque variable :

```lua
x, y, z = 10
```

Ici, `x` vaut `10` tandis que `y` et `z` valent `nil`, autrement dit n'ont pas de valeur. Lorsque vous avez envie de supprimer la valeur d'une variable, vous économisez un token supplémentaire en le faisant ainsi !

## Foreach

La fonction `foreach()` permet d'appeler une fonction donnée pour chaque élément d'un tableau. Son existence est parfois oubliée, peut-être car elle est jugée moins intuitive, mais elle peut aider à réaliser quelques économies. Cette boucle, qui coûte 10 tokens :

```lua
for i in all(tableau) do
    action(i)
end
```

peut être réduite en 4 tokens à l'aide de `foreach()` :

```lua
foreach(tableau, action)
```

## Astuces sur les tableaux

### Créer des variables séparées

On utilise souvent les tableaux pour créer des objets ayant des propriétés, par exemple `player.x` et `player.y`. C'est utile lorsque vos fonctions prennent des objets en argument, par exemple une fonction de déplacement qui s'occupe de tous les objets aux propriétés `x` et `y`.

Cela dit, `player.x` prend 2 tokens là où `player_x` n'en prendrait qu'un. Si vous créez des objets par simple habitude mais n'exploitez pas leur intérêt, il vaudra mieux les remplacer par des variables simples pour économiser beaucoup de tokens sur le long terme.

### Utiliser des variables locales

Lorsqu'une valeur d'un tableau doit être accédée à répétition dans une fonction, il est préférable de stocker son contenu dans une variable locale pour économiser des tokens.

```lua
local x = player.x
```

Par exemple, cette ligne coûte 4 tokens mais devient rentable à partir de 5 utilisations de la variable `x`. Le gain sera d'autant plus grand que la variable est difficile d'accès :

```lua
local x = enemy[1].x
```

Cette ligne coûte 6 tokens, mais elle devient rentable au bout de 3 utilisations de `x` seulement ! De plus, en assignant plusieurs variables locales en une ligne, on réduit le coût de départ de cette astuce.

### Transformer les tableaux de données en strings

Dans un projet qui contient de grands tableaux de données, par exemple un RPG avec beaucoup d'ennemis et d'objets, vous pourriez atteindre assez facilement la limite de tokens. Au lieu d'utiliser des tableaux, il est possible de stocker ces mêmes données dans un très long string puis de le convertir en un tableau pendant le jeu.

```lua
-- 33 tokens :
data = {0,1,2,3,4,5,6,7,9,8,9,
1,6,5,3,3,6,8,9,3,3,5,7,8,9,0}
foreach(data, print)

-- 12 tokens :
data_string = "0,1,2,3,4,5,6,7,9,8,9,1,6,5,3,3,6,8,9,3,3,5,7,8,9,0"
data = split(data_string)
foreach(data, print)
```

Le gain est non négligeable et s'accroît avec la taille des données, puisqu'avec la première méthode, chaque nouvel élément de tableau requerrait un token supplémentaire. Cependant, notez que la deuxième méthode ne vous met pas à l'abri des limites de caractère et de RAM, bien qu'elles devraient être suffisamment permissives pour la plupart des jeux.

## Les opérateurs logiques

On peut utiliser les opérateurs logiques de Lua pour imiter un opérateur ternaire, et c'est une bonne façon d'économiser des tokens :

```lua
-- 11 tokens :
local x
if a then
  x = b
else
  x = c
end

-- 7 tokens :
local x = a and b or c
```

Lorsque Lua lit une expression avec les opérateurs logiques `and` et `or`, le programme s'arrête dès qu'il peut résoudre la condition. Par exemple, dans le cas de l'expression `a or b`, si `a` retourne une valeur vraie, `b` n'est même pas évalué.

Notez que tout ce qui n'est pas `false` ou `nil` est vrai pour les opérateurs logiques. Ainsi, un texte ou même le nombre 0 sont considérés comme vrais.

En sachant cela, vous pouvez écrire :

```lua
variable = variable or "cool"
```

Si la variable existe déjà, alors elle garde sa valeur, mais si elle n'existe pas encore (`nil`) ou qu'elle vaut `false`, on lui donne la valeur `"cool"`. Cela prend 2 tokens de moins que :

```lua
if not variable then
  variable = "cool"
end
```

Pour récapituler :

- `a and b` renvoie `a` si l'expression est fausse, `b` si elle est vraie.
- `a or b` renvoie `a` si l'expression est vraie, `b` si elle est fausse.

En suivant ces deux règles, on peut comprendre comment fonctionne l'astuce `a and b or c`. Comme `and` a une plus haute priorité que `or`, il se passe en fait ceci :

```lua
(a and b) or c
```

Le résultat de cette expression sera donc `b` ou `c`.

## Les fonctions

### Créer des arguments par défaut

Les fonctions de base de PICO-8 ont beaucoup d'arguments facultatifs, et c'est un moyen efficace d'économiser des tokens. Par exemple, l'argument de couleur est souvent optionnel puisque son comportement par défaut est de prendre la dernière couleur utilisée. Vous pouvez utiliser le même principe dans vos propres fonctions ! Mettons que votre fonction `action()` est appelée très souvent avec l'argument `"potion"`, mais pas toujours. L'écriture suivante :

```lua
function action(argument)
    -- Votre fonction
end
action("potion")
action("potion")
action("potion")
action("magie")
```

peut devenir :

```lua
function action(argument)
    argument = argument or "potion"
    -- Votre fonction
end
action()
action()
action()
action("magie")
```

C'est le retour des opérateurs logiques ! Comme la nouvelle ligne ajoute 5 tokens, cela devient rentable au bout de 6 utilisations de `action()`.

Cependant, si votre fonction n'a qu'un seul argument comme dans cet exemple, l'astuce ci-dessous vous permettra sûrement d'économiser le même nombre de tokens tout en conservant un code explicite.

### Appeler une fonction avec des strings

Au lieu d'appeler une `fonction()` avec des parenthèses, il est possible de les appeler avec des guillemets (`fonction""`) ou des accolades (`fonction{}`). Ainsi, le string ou le tableau renseigné sera passé en argument :

```lua
-- 3 tokens :
fonction("string")
fonction({tableau})
-- 2 tokens :
fonction"string"
fonction{tableau}
```

Il est aussi possible de passer un nombre en tant que string (`btn"0"`) et cela fonctionnera dans la plupart des cas, étant donné que l'argument sera converti en nombre lorsqu'une opération le nécessitera.

### Renvoyer plusieurs valeurs

```lua
function calculs(a, b)
    return a*b, a/b
end
mult, div = calculs(12, 8)
```

## Remplacer les constantes par leur valeur

Stocker les valeurs dans des variables, même lorsqu'elles sont constantes, est souvent une bonne pratique pour garder un code explicite : `speed` et `gravity` sont des noms plus parlants que `12.3` et `5.67`. Bien sûr, déclarer ces constantes au début du jeu vous coûtera quelques tokens, alors pour faire des petites économies vers la fin du développement, vous pourriez remplacer toutes les références à ces variables par leur véritable valeur, mais attention : retoucher votre jeu deviendra alors un véritable casse-tête. Dans la même idée, vous pouvez simplifier tous vos calculs, qui deviendront moins clairs mais plus condensés.

Prenons comme exemple une fonction de caméra qui suit le personnage. Elle utilise 55 tokens et contient des constantes dans des variables locales ainsi que des calculs qui pourraient être simplifiés.

```lua
function update_camera()
    local map_width = 31
    local map_height = 31
    local camx = mid(0, (p.x - 7.5) * 8 + p.ox, (map_width - 15) * 8)
    local camy = mid(0, (p.y - 7.5) * 8 + p.oy, (map_height - 15) * 8)
    camera(camx, camy)
end
```

De plus, il faut penser aux 2 tokens nécessaires pour appeler `update_camera()` dans `_update()`. Si l'on réduit la fonction à son strict minimum, on obtient :

```lua
camera(mid(0, 8 * p.x - 60 + p.ox, 128), mid(0, 8 * p.y - 60 + p.oy, 128))
```

Le code est réduit à 28 tokens mais devient moins flexible et moins agréable à lire. Ce genre de processus peut permettre de retrouver beaucoup de tokens, mais il vaut mieux le faire en dernier lieu, lorsque la partie du code en question ne sera jamais retouchée.

