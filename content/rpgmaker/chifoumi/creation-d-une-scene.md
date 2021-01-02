---
title: "Création d'une scène"
description: "Le guide pour créer un pierre-papier-ciseaux entièrement en scripts sur RPG Maker VX Ace. Apprenez à scripter en Ruby et RGSS pour créer vos propres systèmes sur RPG Maker !"
portail: rpgmaker
---

Rendez-vous dans l'éditeur de script et créez un emplacement sous Materials. On place généralement nos scripts dans Materials pour qu'ils soient en dessous des scripts qui composent le RGSS, et au dessus de Main, qui correspond à la boucle du jeu. Un script placé après Main ne serait jamais exécuté.

![Création d'un emplacement dans l'éditeur de script.](/rpgmaker/chifoumi/emplacement.png)

Certains programmeurs fractionnent les différentes composantes de leurs scripts dans des emplacements séparés. Pour un script aussi petit que le notre, ou pour un script destiné au partage, on peut tout mettre dans un seul emplacement. Ecrivons le squelette de notre scène :

```ruby
class Scene_Chifoumi < Scene_Base
  # Ici se trouvera le code notre scène
end
```

Les textes précédés de `#` sont des commentaires ignorés par le programme. Cela permet de structurer le code pour aider le scripteur à s'y retrouver. On s'en sert également pour expliquer le fonctionnement du script aux utilisateurs.

La première ligne indique que nous créons une classe appelée `Scene_Chifoumi`, et `< Scene_Base` indique que notre classe héritera de la classe `Scene_Base`.

`end` marque la fin d'un bloc. Ici, cela signifie que la définition de la classe se termine. Toute la caractérisation de la scène se trouvera entre `class` et `end`.

## Qu'est ce que l'héritage ?

En créant une nouvelle classe, on peut faire en sorte qu'elle possède toutes les caractéristiques d'une autre classe déjà existante. On appelle ce lien l'héritage. C'est assez cool parce que ça évite de réécrire du code qui existe déjà.

Le RGSS comporte une collection de classes déjà programmées pour nous faciliter le travail. Notre classe `Scene_Chifoumi` aura exactement le même comportement que `Scene_Base`, une classe très générique qui comprend toutes les routines de base d'une scène.

## Testons notre scène !

Dans un évènement, utilisez la commande d'[appel de script]({{< ref "rpgmaker/vue-d-ensemble.md#appel-de-script" >}}) et écrivez :

```ruby
SceneManager.call(Scene_Chifoumi)
```

Dans le jeu, déclencher cet évènement vous enverra sur notre scène, qui devrait être toute noire. C'est normal, nous n'avons encore rien fait dessus. Avec cette commande, vous pouvez également essayer d'accéder à d'autres scènes, comme `Scene_Title` !

## La structure d'une scène

Avant de nous soucier d'ajouter des choses à notre scène, il est important de comprendre sa structure. Voici, de manière fort schématique, le déroulement d'une scène :

![Schéma du déroulement d'une scène](/rpgmaker/chifoumi/schema2.png)

Quand on appelle une scène, la méthode `start` se lance. Une méthode est une action référente à une classe. On va donc effectuer les premières tâches : afficher les images, les menus, etc.

Une fois que cette action est terminée, on boucle dans la méthode `update`, jusqu’à ce qu'une interruption soit envoyée. Si cette interruption engendre la fin de la scène, par exemple dans le cas d'un changement de scène, on va dans la méthode `terminate`. Celle-ci va supprimer tout ce qu'il faut avant de quitter la scène.

Grâce à l'héritage de `Scene_Base`, nous n'avons pas à écrire ces méthodes. `update` rafraichit déjà chacune des `Window` et `terminate` les supprime. Nous devrions réécrire ces méthodes uniquement pour rafraichir ou supprimer d'autres éléments.

## Les variables d'attribut

Une variable est une étiquette liée à une valeur :

```ruby
je_suis_une_variable = 10
je_suis_une_variable = je_suis_une_variable + 1
```

Dans cet exemple, `je_suis_une_variable` vaudra 11. On peut stocker toutes sortes de choses dans une variable, par exemple une image ou une `Window`. Cependant, une variable possède une portée limitée.

Nous avons parlé des méthodes de `Scene`. Si je crée une variable dans la méthode `start`, elle n'existera pas dans la méthode `update`, parce que sa durée de vie est limitée à `start`. Pour pallier à cela, il existe les variables d'attribut. Nous avons vu qu'une classe permet de décrire des éléments par des caractéristiques. Les attributs sont des variables servant à caractériser une classe. Il suffit de rajouter `@` devant le nom et on pourra accéder à cette variable partout dans la classe.

Concrètement, quand j'aurai besoin d'une valeur temporaire, j'utiliserai une variable normale, et quand j'aurai besoin de garder cette valeur tout au long de la classe, j'utiliserai un attribut, dont le nom commence par `@`.

## Notre premier élément

Dans cette section, nous allons réaliser ceci :

![Capture d'écran de la première fenêtre de la scène](/rpgmaker/chifoumi/premierefenetre.png)

Nous pourrions directement créer cette composante dans la méthode start, cependant j'ai l'habitude de fractionner mon code en sous-procédures. Dans notre classe, nous allons donc créer une nouvelle méthode chargée de créer la fenêtre de titre :

```ruby
class Scene_Chifoumi < Scene_Base
  # Lancement de la scène
  def start
    super
    create_title
  end
  def create_title
    # Ici on créera le titre
  end
end
```

Pour afficher une fenêtre en haut de la scène, utilisons une composante du RGSS : `Window_Help`. Pour comprendre son fonctionnement, ouvrez le script dans l'éditeur. La méthode `initialize` sera appelée la première fois, pour la construction de l'objet. On appelle cela un constructeur.

En écrivant `MaClasse.new`, j'appelle la méthode `initialize` de la classe `MaClasse` et je construis une instance de cette classe. Dans notre exemple, nous avons besoin d'une fenêtre d'une case de hauteur, afin d'écrire une ligne. Nous écrivons ceci :

```ruby
class Scene_Chifoumi < Scene_Base
  # Lancement de la scène
  def start
    super
    create_title
  end
  def create_title
    @title = Window_Help.new(1)
  end
end
```

L'utilisation d'un attribut avec `@` est obligatoire, car la méthode `terminate` devra supprimer la fenêtre lorsqu'on quitte la scène. Ainsi, même si on a l'impression d'utiliser la fenêtre de titre une seule fois, ce n'est pas vraiment le cas.

En testant la scène, on peut voir notre fenêtre, bien qu'elle soit vide. Nous allons utiliser une méthode de `Window_Help` qui s'appelle `set_text`. Vous pouvez examiner son fonctionnement dans le code de `Window_Help`. Cette méthode permet d'écrire du texte dans la fenêtre :

```ruby
class Scene_Chifoumi < Scene_Base
  # Lancement de la scène
  def start
    super
    create_title
  end
  def create_title
    @title = Window_Help.new(1)
    @title.set_text("CHI FOU MI !")
  end
end
```

Cette fois vous pouvez tester la scène et... magie ! Elle ressemble à notre objectif !

Nous avons créé un premier élément graphique et en plus, nous avons été modernes car nous avons utilisé une méthode ! Sachez que dans une classe, vous pouvez créer autant de méthodes que vous le souhaitez. Personnellement, j'utilise les méthodes pour améliorer la lisibilité et éviter les trop grosses portions de code !

{{< next "rpgmaker/chifoumi/le-menu-de-selection.md" >}}