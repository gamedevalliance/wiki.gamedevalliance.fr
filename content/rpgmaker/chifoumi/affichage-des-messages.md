---
title: "Affichage des messages"
description: "Le guide pour créer un pierre-papier-ciseaux entièrement en scripts sur RPG Maker VX Ace. Apprenez à scripter en Ruby et RGSS pour créer vos propres systèmes sur RPG Maker !"
portail: rpgmaker
---

Dans la section précédente, nous avons établi toute la logique de notre application, donc elle fonctionne ! Maintenant, il faudrait que notre système affiche des messages de victoire ou de défaite. Nous allons créer une fenêtre qui s'affichera au bon moment.

## Une fenêtre simple

Nous utiliserons `Window_Base`, la représentation la plus simple d'une fenêtre. L'objectif de ce type de fenêtre est simplement d'afficher des informations. Dans le code de `Window_Base`, on peut voir que son constructeur prend 4 arguments : la position en X et en Y, puis la taille en largeur et en hauteur.

Je vous invite à créer une méthode `create_window_message` dont le rôle sera de dessiner une fenêtre simple dans un attribut nommé `message`. Je souhaite lui donner les dimensions (280, 80) et la placer au centre de l'écran. Le point d'origine d'une fenêtre étant son coin haut gauche, nous devons effectuer quelques calculs pour la positionner au centre :

- Centrer en X : (Ecran de jeu / 2) − Largeur fenêtre / 2
- Centrer en Y : (Ecran de jeu / 2) − Hauteur fenêtre / 2

La résolution d'un jeu RPG Maker VX Ace étant 544×416 par défaut, le résultat final est le suivant :

- En X : (544 / 2) − (280 / 2) = 132
- En Y : (416 / 2) − (80 / 2) = 168

C'est une petite ruse pour positionner correctement la fenêtre. On écrit `create_window_message` de cette manière :

```ruby
def create_window_message
  @message = Window_Base.new(132, 168, 280, 80)
end
```

N'oubliez pas d'appeler `create_window_message` dans la méthode `start`. Vous pouvez tester la scène, c'est cool, on a bien une fenêtre bien placée. L'idéal serait que cette fenêtre s'affiche uniquement au besoin. Nous allons modifier notre méthode pour que la fenêtre soit invisible au départ.

```ruby
def create_window_message
  @message = Window_Base.new(132, 168, 280, 80)
  @message.hide
end
```

## Ecrire du texte dans la fenêtre

Une fenêtre vide c'est pas génial, donc nous allons essayer d'y écrire du texte. Une fois de plus, le RGSS met à notre disposition une méthode qui fait précisément cela : `draw_text`.

```ruby
draw_text(x, y, width, height, text, [align=0])
```

Concrètement, on va préparer un rectangle invisible dans la fenêtre, qui accueillera le texte. Ce rectangle est défini par une position et une taille. Le dernier argument donne l'alignement du texte. Il est facultatif, car il vaut 0 par défaut, pour signifier un alignement à gauche. 1 = alignement au centre, et 2 = alignement à droite.

Essayons d'écrire un texte dans la méthode `create_window_message`, en supprimant temporairement la commande qui masque la fenêtre, afin de voir ce que l'on fait.

```ruby
def create_window_message
  @message = Window_Base.new(132, 168, 280, 80)
  # @message.hide
  @message.draw_text(0, 0, 280, 38, "Vous avez choisi la pierre.")
end
```

Je vous parlais de la création d'un rectangle, dans lequel sera placé le texte. Voici la représentation de ce rectangle :

{{< figure src="/rpgmaker/chifoumi/drawtext.png" caption="Représentation du rectangle de draw_text." >}}

Vou pouvez voir que le contenu d'une fenêtre possède des marges de 12 pixels, définies par la méthode `standard_padding` de `Window_Base`.

Nous allons écrire une petite fonction pour afficher les différents résultats possibles. La méthode aura deux arguments. Le premier sera un texte tel que « Vous avez choisi pierre et l'ordinateur papier ». Le deuxième argument pourra prendre 3 valeurs : 0, 1, ou 2. Dans le cas où le nombre vaut 0, on affiche « Match nul », si le nombre vaut 1, « Vous perdez » et sinon, « Vous gagnez ».

```ruby
def display_message(text, number)
  @message.draw_text(0, 0, 280, 38, text)
  message = "Vous gagnez !"
  if number == 0
    message = "Match nul."
  elsif number == 1
    message = "Vous perdez !"
  end
  @message.draw_text(0, 20, 280, 38, message)
  @message.show
end
```

Pour éviter de réécrire la seconde méthode `draw_text` qui est assez lourde, j'utilise une variable `message`. Remarquez comment je me suis passé du `else` à la fin de la branche conditionnelle, en initialisant la variable avec une valeur par défaut.

Il est maintenant temps d'utiliser notre nouvelle méthode !

{{< next "rpgmaker/chifoumi/finalisation-de-l-application.md" >}}