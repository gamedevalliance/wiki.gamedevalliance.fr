---
title: "Choix et conditions"
description: "Le guide pour créer un pierre-papier-ciseaux entièrement en scripts sur RPG Maker VX Ace. Apprenez à scripter en Ruby et RGSS pour créer vos propres systèmes sur RPG Maker !"
portail: rpgmaker
---

Grâce à l'organigramme, on s'est rendu compte des outils qu'il nous manque pour continuer. Commençons par la sélection aléatoire d'un des coups par l'ordinateur !

## Liste et sélection aléatoire

En programmation, il arrive souvent que l'on doive stocker plusieurs valeurs de manière ordonnée. Pour cela, on utilise un tableau, qui est une liste de valeurs. Pour créer une liste, il suffit de dire qu'une variable est égale à `[valeur1, valeur2, etc.]`. Comme j'utilise des symboles pour représenter les coups, cela donne :

```ruby
liste_signes = [:pierre, :papier, :ciseaux]
```

Vous vous demandez peut-être pourquoi j'utilise un tableau, alors que l'on a besoin d'une seule valeur. C'est parce que comme pour les fenêtres, les scènes, et à peu près tout en Ruby, il est possible de leur appliquer des méthodes. La liste des méthodes applicables se trouve dans la [documentation des tableaux de Ruby](http://ruby-doc.org/core-2.0/Array.html). Nous allons utiliser la méthode [sample](http://ruby-doc.org/core-2.0/Array.html#method-i-sample) pour récupérer une cellule aléatoire du tableau.

```ruby
liste_signes = [:pierre, :papier, :ciseaux]
valeur_aleatoire = liste_signes.sample
```

On peut également raccourcir ce code de la façon suivante :

```ruby
valeur_aleatoire = [:pierre, :papier, :ciseaux].sample
```

Ceci stocke dans la variable `valeur_aleatoire` une cellule sélectionnée au hasard dans le tableau `[:pierre, :papier, :ciseaux]`. Avec ce que nous venons d'apprendre, nous pouvons clôturer la première partie du schéma.

![Schéma de la première partie du déroulement du système](/rpgmaker/chifoumi/schema4.png)

Pour ce faire, je vous propose de créer une nouvelle méthode pour générer la sélection de l'ordinateur. Une fois de plus, on fractionne le tout en méthodes pour rendre le code lisible ! Le résultat de la sélection sera stockée dans un attribut, car nous en aurons besoin dans d'autres méthodes. Je vous invite à essayer par vous-même avant de consulter la solution.

Voici à quoi doit devrait maintenant ressembler `Scene_Chifoumi` !

```ruby
class Scene_Chifoumi < Scene_Base
  # Lancement de la scène
  def start
    super
    create_title
    create_commands
    generate_choice
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
  # Cas de sélection de Pierre
  def pierre
    p "Vous avez choisi la pierre."
  end
  # Cas de sélection de Papier
  def papier
    p "Vous avez choisi le papier."
  end
  # Cas de sélection de Ciseaux
  def ciseaux
    p "Vous avez choisi les ciseaux."
  end
end
```

## Les structures conditionnelles

Peut-être y avez-vous déjà été confrontés en programmant par évènements : les [conditions]({{< ref "evenements.md#condition" >}}) permettent de faire varier un programme. Sur l'organigramme, on peut facilement voir quand il faut utiliser une condition. Ce n'est pas le cas lors de la sélection d'un coup par le joueur, car l'appel des méthodes se charge de la structure conditionnelle. Par contre, pour définir s'il s'agit d'une victoire, d'un match nul ou d'une défaite, il faut utiliser les conditions. Une condition se structure ainsi :

![Schéma de la structure d'une condition](/rpgmaker/chifoumi/schema5.png)

En programmation, il n'y a pas de nuance : soit c'est vrai, soit c'est faux. Ruby est capable de répondre à des questions simples qui n'ont que ces deux réponses possibles représentées par `true` et `false`.

On peut s'interroger sur l'égalité entre deux valeurs (`a == b`), les comparer (`a > b`, `a < b`, `a >= b`, `a <= b`) et plein d'autres choses ! Nous nous intéresserons uniquement à l'égalité ici. Voici comment écrire une condition en Ruby :

```ruby
if question
  # Succession d'actions si la réponse est vrai
else
  # Succession d'actions si la réponse est faux
end
# Suite du programme
```

Si vous ne parlez pas anglais, retenez que `if` veut dire si, et `else` veut dire sinon ! Un exemple plus concret :

```ruby
if @computer_choice == :papier
  p "L'ordinateur a choisi papier."
else
  p "L'ordinateur n'a pas choisi papier."
end
```

Il y a plusieurs subtilités à connaitre quand on manipule des conditions. Par exemple, `else` n'est pas obligatoire. Dans ce cas, si la condition renvoie faux, le programme continue après le bloc de condition :

```ruby
if @computer_choice == :pierre
  p "L'ordinateur a choisi Pierre"
end
# Suite du programme
```

On peut aussi imbriquer des conditions. Dans notre système, nous devons manipuler plusieurs cas. Voici un exemple tout simple pour savoir quel coup est attribué à l'ordinateur :

```ruby
if @computer_choice == :pierre
  p "L'ordinateur a choisi pierre."
else
  if @computer_choice == :papier
    p "L'ordinateur a choisi papier."
  else
    p "L'ordinateur a choisi ciseaux."
  end
end
```

Il faut reconnaître que cette forme est un peu lourde. Enchaînons plutôt les questions au moyen de la primitive `elsif`. Ce code fait exactement la même chose que le précédent :

```ruby
if @computer_choice == :pierre
  p "L'ordinateur a choisi pierre."
elsif @computer_choice == :papier
  p "L'ordinateur a choisi papier."
else
 p "L'ordinateur a choisi ciseaux."
end
```

Concrètement, que se passe-t-il ici ? On évalue d'abord la première condition : « Est-ce que `@computer_choice` vaut `:pierre` ? » Si oui, on affiche le message et on sort de la condition. Sinon, on évalue la seconde condition : « Est-ce que `@computer_choice` vaut `:feuille` ? » Si oui, on affiche le message et on sort de la condition. Sinon, comme seulement trois choix sont possibles, cela signifie que l'ordinateur a choisi « ciseaux ». On affiche donc le message et on sort de la condition.

## Implémentation de la logique dans notre système

Rappelons les règles du pierre-papier-ciseaux :

- La pierre bat les ciseaux.
- Le papier bat la pierre.
- Les ciseaux battent le papier.
- Si les deux choix sont identiques, alors c'est match nul.

Nous avions préparé trois méthodes : `pierre`, `feuille` et `ciseaux`, appelées en fonction du choix du joueur. C'est dans ces trois méthodes que nous coderons les conditions ! Il serait possible de créer une seule méthode vérifiant la victoire en fonction de deux arguments, mais nous partons du principe que nous débutons avec Ruby et le RGSS, donc autant écrire trois petites méthodes facilement compréhensibles.

Dans un premier temps, nous afficherons un petit message pour dire qui a gagné, et dans le cas d'un match nul, nous renverrons au début de la scène. Pour cela, il suffit d'appeler à nouveau la scène. Dans un cas de victoire ou de défaite, on renvoie vers `Scene_Map`. Essayez donc de coder ces trois fonctions, puis regardez la solution !

Ne vous en faites pas si vos conditions sont dans un ordre différent des miennes. Il n'y a pas d'ordre précis et optimal. Personnellement, je commence par tester si les deux choix sont identiques, ensuite s'il y a défaite, et sinon, c'est qu'il y a victoire. Voici le code complet pour récapituler :

```ruby
# Scène de jeu principale
class Scene_Chifoumi < Scene_Base
  # Lancement de la scène
  def start
    super
    create_title
    create_commands
    generate_choice
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
  # Cas de sélection de Pierre
  def pierre
    if @computer_choice == :pierre
      p "Vous avez tous les deux choisi pierre, match nul."
      SceneManager.call(Scene_Chifoumi)
    elsif @computer_choice == :papier
      p "Vous avez choisi pierre et l'ordinateur papier, vous perdez !"
      SceneManager.call(Scene_Map)
    else
      p "Vous avez choisi pierre et l'ordinateur ciseaux, vous gagnez !"
      SceneManager.call(Scene_Map)
    end
  end
  # Cas de sélection de Papier
  def papier
    if @computer_choice == :papier
      p "Vous avez tous les deux choisi papier, match nul."
      SceneManager.call(Scene_Chifoumi)
    elsif @computer_choice == :ciseaux
      p "Vous avez choisi papier et l'ordinateur ciseaux, vous perdez !"
      SceneManager.call(Scene_Map)
    else
      p "Vous avez choisi papier et l'ordinateur pierre, vous gagnez !"
      SceneManager.call(Scene_Map)
    end
  end
  # Cas de sélection de Ciseaux
  def ciseaux
    if @computer_choice == :ciseaux
      p "Vous avez tous les deux choisi ciseaux, match nul."
      SceneManager.call(Scene_Chifoumi)
    elsif @computer_choice == :pierre
      p "Vous avez choisi ciseaux et l'ordinateur pierre, vous perdez !"
      SceneManager.call(Scene_Map)
    else
      p "Vous avez choisi ciseaux et l'ordinateur papier, vous gagnez !"
      SceneManager.call(Scene_Map)
    end
  end
end

# Fenêtre de sélection du coup
class Window_Chifoumi < Window_Command
  # Création de la liste de selection
  def make_command_list
    add_command("Pierre", :pierre)
    add_command("Papier", :papier)
    add_command("Ciseaux", :ciseaux)
  end
end
```

Je vous invite à tester la scène, en affichant la console pour voir les résultats, et... magie ! Notre système fonctionne !

![La console RGSS](/rpgmaker/chifoumi/console2.png)

Nous avons effectué 90% de notre application. C'est super !

{{< next "rpgmaker/chifoumi/affichage-des-messages.md" >}}
