---
title: "Finalisation de l'application"
description: "Le guide pour créer un pierre-papier-ciseaux entièrement en scripts sur RPG Maker VX Ace. Apprenez à scripter en Ruby et RGSS pour créer vos propres systèmes sur RPG Maker !"
portail: rpgmaker
---

On arrive tout au bout de notre système ! Utilisons notre superbe méthode `display_message`.

## Utilisation de display_message

Cette partie est très facile, parce que nous avons déjà conçu nos outils. Dans les méthodes `pierre`, `feuille` et `ciseaux`, substituez les utilisations de la méthode `p` par la méthode que nous venons de créer. Par exemple, au lieu d'écrire :

```ruby
p "Vous avez choisi pierre et l'ordinateur ciseaux, vous gagnez !"
```

Faites plutôt :

```ruby
display_message("Vous avez choisi pierre et l'ordinateur ciseaux.", 2)
```

Problème : le message ne s'affiche jamais ! Ou plutôt, la fenêtre va bien s'afficher, mais de suite après, un changement de scène est appelé. Il serait préférable d'attendre l'appui de la touche action avant de changer de scène.

## Attendre l'appui d'une touche

Nous allons modifier la méthode `pre_terminate` de la classe `Window_Base`. Nous savons que grâce à l'héritage, il n'est pas nécessaire d'écrire certaines méthodes. La méthode `pre_terminate` est appelée juste avant la suppression automatique des éléments de la scène. Pour éviter que notre message soit effacé car la scène est terminée, nous allons ajouter une attente dans la méthode `pre_terminate`, jusqu'à ce que la touche C, ou touche action, soit pressée.

```ruby
def pre_terminate
  super
  loop do
    Graphics.update
    Input.update
    break if Input.trigger?(:C)
  end
end
```

Le mot `super` permet d'appeler la méthode `pre_terminate` de `Window_Base`, qui est normalement vide, mais sait-on jamais ! Un script personnalisé pourrait l'avoir amélioré.

Le code compris entre `loop do` et `end` sera répété à l'infini. Cette boucle va durer plusieurs frames, il faut donc rafraichir l'affichage et la détection des touches : c'est le rôle de `Graphics.update` et de `Input.update`.

`break` permet de sortir de la boucle. La dernière ligne indique donc que l'on sort de la boucle si la touche C est pressée. Cette écriture en une ligne est identique à :

```ruby
if Input.trigger?(:C)
  break
end
```

Quand on n'a qu'une seule commande à exécuter, on peut synthétiser une condition comme dans la première forme.

Concrètement, une fois que le message est affiché, nous indiquons que nous souhaitons changer de scène. Notre scène va appeler la méthode `pre_terminate`, juste avant `terminate`. Ainsi, dès que la touche action est pressée, on sort de la boucle et s'en suit la méthode `terminate` qui supprime les éléments et renvoie vers la scène demandée !

Voici un rappel du code terminé :

```ruby
# Scène de jeu principale
class Scene_Chifoumi < Scene_Base
 # Lancement de la scène
 def start
   super
   create_title
   create_commands
   generate_choice
   create_window_message
 end
 # Création de la fenêtre de titre
 def create_title
   @title = Window_Help.new(1)
   @title.set_text("CHI FOU MI !")
 end
 # Création de la fenêtre de sélection
 def create_commands
   @window_selection = Window_Chifoumi.new(0, 48)
   @window_selection.set_handler(:pierre, method(:pierre))
   @window_selection.set_handler(:papier, method(:papier))
   @window_selection.set_handler(:ciseaux, method(:ciseaux))
 end
 # Génère le choix de l'ordinateur
 def generate_choice
   list_signs = [:pierre, :papier, :ciseaux]
   @computer_choice = list_signs.sample
 end
 def create_window_message
   @message = Window_Base.new(132, 168, 280, 80)
   @message.hide
 end
 # Affiche un message
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
 # Cas de sélection de Pierre
 def pierre
   if @computer_choice == :pierre
     display_message("Vous : Pierre, Ordi : Pierre", 0)
     SceneManager.call(Scene_Chifoumi)
   elsif @computer_choice == :papier
     display_message("Vous : Pierre, Ordi : Papier", 1)
     SceneManager.call(Scene_Map)
   else
     display_message("Vous : Pierre, Ordi : Ciseaux", 2)
     SceneManager.call(Scene_Map)
   end
 end
 # Cas de sélection de Papier
 def papier
   if @computer_choice == :papier
     display_message("Vous : Papier, Ordi : Papier", 0)
     SceneManager.call(Scene_Chifoumi)
   elsif @computer_choice == :ciseaux
     display_message("Vous : Papier, Ordi : Ciseaux", 1)
     SceneManager.call(Scene_Map)
   else
     display_message("Vous : Papier, Ordi : Pierre", 2)
     SceneManager.call(Scene_Map)
   end
 end
 # Cas de sélection de Ciseaux
 def ciseaux
   if @computer_choice == :ciseaux
     display_message("Vous : Ciseaux, Ordi : Ciseaux", 0)
     SceneManager.call(Scene_Chifoumi)
   elsif @computer_choice == :pierre
     display_message("Vous : Ciseaux, Ordi : Pierre", 1)
     SceneManager.call(Scene_Map)
   else
     display_message("Vous : Ciseaux, Ordi : Papier", 2)
     SceneManager.call(Scene_Map)
   end
 end
 # Attente de la pression du bouton C
 def pre_terminate
   super
   loop do
     Graphics.update
     Input.update
     break if Input.trigger?(:C)
   end
 end
end

# Fenêtre de sélection de coup
class Window_Chifoumi < Window_Command
 # Création de la liste de sélection
 def make_command_list
   add_command("Pierre", :pierre)
   add_command("Papier", :papier)
   add_command("Ciseaux", :ciseaux)
 end
end
```

{{< figure src="/images/rpgmaker/chifoumi/resultat.png" caption="Le résultat final." >}}

## Conclusion

Enfin ! Nous avons créé un script complet qui, malgré son aspect très simple, fut l'occasion d'aborder de nombreux concepts. Ce guide n'aura pas été d'une rigueur exemplaire, afin d'être plus abordable. Pour aller plus loin, je vous recommande [cet ouvrage très complet sur le Ruby](http://www.ruby-doc.org/docs/ProgrammingRuby/). Bonne continuation dans la suite de votre formation !

{{< end "/content/rpgmaker.md" >}}
