---
title: "Le menu de sélection"
description: "Le guide pour créer un pierre-papier-ciseaux entièrement en scripts sur RPG Maker VX Ace. Apprenez à scripter en Ruby et RGSS pour créer vos propres systèmes sur RPG Maker !"
portail: rpgmaker
---

Nous avons un titre... c'est un début. Maintenant, il serait intéressant d'avoir un véritable élément d’interactivité : un menu de sélection des coups pierre, papier et ciseaux. C'est sans doute la partie la plus importante de ce guide. En effet, nous allons apprendre à créer des interactions entre l'utilisateur et le jeu au moyen d'une composante du RGSS !

## Une classe héritée de Window_Command

Le RGSS met à notre disposition la classe `Window_Command` pour représenter des listes de choix. Comme pour notre scène, nous allons créer, sous la classe `Scene_Chifoumi`, une classe pour la sélection du coup ! Vous pouvez l'ajouter dans un autre emplacement de script, mais je choisis de l'écrire à la suite, dans le même emplacement.

```ruby
class Window_Chifoumi < Window_Command
end
```

Dans le code de `Window_Command`, on peut voir que son constructeur prend deux arguments déterminant la position en X et en Y. Créons une fenêtre Window_Chifoumi dans une nouvelle méthode `create_commands`.

```ruby
# Scène principale
class Scene_Chifoumi < Scene_Base
  # Lancement de la scène
  def start
    super
    create_title
    create_commands
  end
  # Création de la fenêtre de titre
  def create_title
    @title = Window_Help.new(1)
    @title.set_text("CHI FOU MI !")
  end
  # Création de la fenêtre de sélection
  def create_commands
    @window_selection = Window_Chifoumi.new(0, 48)
  end
end

# Fenêtre de sélection du coup
class Window_Chifoumi < Window_Command
end
```

En testant ceci... vous ne voyez rien de plus qu'une petite fenêtre positionnée en (0, 48) et dotée d'une petite flèche ! C'est normal, car nous n'avons pas encore spécifié les choix disponibles.

## Ajouter des commandes

Ajouter une liste de commandes à notre fenêtre de sélection est très simple. Il suffit d'ajouter une méthode `make_command_list` dans laquelle on utilise la méthode `add_command`, qui prend deux arguments : le texte affiché dans la liste, et un symbole pour identifier la valeur sélectionnée. Le symbole est un texte précédé de `:` et sera traité quand on programmera l'interaction avec notre fenêtre de sélection.

```ruby
class Window_Chifoumi < Window_Command
  # Création de la liste de sélection
  def make_command_list
    add_command("Pierre", :pierre)
    add_command("Papier", :papier)
    add_command("Ciseaux", :ciseaux)
  end
end
```

Nous pouvons tester la scène : ça a tout de même plus de classe que précédemment !

![Capture d'écran de la fenêtre de sélection](/rpgmaker/chifoumi/choix.png)

C'est génial parce qu'en très peu de lignes, nous avons déjà pas mal de choses, et nous avons survolé une grande quantité de concepts. Maintenant, nous pouvons programmer des actions en fonction du choix.

## Créer des cas de figure

Chaque cas de figure sera une méthode, appelée si le bon choix est effectué. Dans un premier temps, notre application se contentera de confirmer le coup choisi en l'écrivant dans la console. Si ce n'est pas déjà fait, cliquez sur « Afficher la console » dans le menu Jeu.

```ruby
class Scene_Chifoumi < Scene_Base
  # Lancement de la scène
  def start
    super
    create_title
    create_commands
  end
  # Création de la fenêtre de titre
  def create_title
    @title = Window_Help.new(1)
    @title.set_text("CHI FOU MI !")
  end
  # Création de la fenêtre de sélection
  def create_commands
    @window_selection = Window_Chifoumi.new(0, 48)
  end
  # Cas de sélection de Pierre
  def pierre
    p "Vous avez choisi la pierre"
  end
  # Cas de sélection de Papier
  def feuille
    p "Vous avez choisi la feuille"
  end
  # Cas de sélection de Ciseaux
  def ciseaux
    p "Vous avez choisi les ciseaux"
  end
end
```

La méthode `p` affiche un message dans la console, mais cela ne va pas encore fonctionner. Maintenant que nos méthodes sont prêtes, nous allons indiquer à la fenêtre de sélection qu'elle doit appeler la bonne méthode d'après le choix du joueur.

Nous devons utiliser la méthode `set_handler` de `Window_Base`, que `Window_Chifoumi` possède aussi grâce à l'héritage. `set_handler` prend deux arguments : un symbole et une méthode à appeler. Nous avons déjà défini les symboles dans `add_command`.

```ruby
# Création de la fenêtre de sélection
def create_commands
  @window_selection = Window_Chifoumi.new(0, 48)
  @window_selection.set_handler(:pierre, method(:pierre))
  @window_selection.set_handler(:feuille, method(:papier))
  @window_selection.set_handler(:ciseaux, method(:ciseaux))
end
# Cas de sélection de Pierre
def pierre
  p "Vous avez choisi la pierre."
end
# Cas de sélection de Papier
def feuille
  p "Vous avez choisi le papier."
end
# Cas de sélection de Ciseaux
def ciseaux
  p "Vous avez choisi les ciseaux."
end
```

J'ai utilisé `method(:nom_methode)` pour passer la méthode en argument à `set_handler`. Celle-ci prend en argument une chose à exécuter. En testant la scène, vous remarquerez que le message correspondant à votre sélection s'affiche bien dans la console.

![La console RGSS](/rpgmaker/chifoumi/console.png)

Nous avons assez de matière pour créer notre application. Nous savons afficher des fenêtres, créer des fenêtres de sélection, relier une sélection à une action... Nous pouvons coder le raisonnement logique du jeu !

{{< next "rpgmaker/chifoumi/penser-le-deroulement-d-un-systeme.md" >}}