.. meta::
   :description: Le guide pour créer un pierre-papier-ciseaux entièrement en scripts sur RPG Maker VX Ace. Apprenez à scripter en Ruby et RGSS pour créer vos propres systèmes sur RPG Maker !

Apprendre le RGSS3 avec un pierre-papier-ciseaux
================================================

.. highlight:: ruby

Ce guide explique la création d'un jeu de pierre-papier-ciseaux en script de manière simple et rapide, sans s'étaler théoriquement sur les concepts survolés. J'invite donc les lecteurs méticuleux à effectuer leurs propres recherches... parce que c'est tout de même plus cool de connaitre ce que l'on utilise.

Si vous avez toujours voulu créer vos propres systèmes, mais que vous avez toujours trouvé que l'apprentissage des scripts est une chose trop complexe, ce guide est fait pour vous !

Nous allons apprendre à réaliser un chifoumi (qui est l'appellation cool de pierre-papier-ciseaux) via Ruby et RGSS3 pour :ref:`rpgmakervxace` en admettant que vous n'ayez aucune connaissance en programmation en dehors des évènements.

.. figure:: https://i.imgur.com/DV2Nlwz.png
   :alt: Menu de chifoumi

   Le système que nous allons réaliser dans ce guide.

Je suis moi-même persuadé que l'apprentissage de la programmation est une démarche rigoureuse et qui demande beaucoup d'implication, mais je vais tenter de faire abstraction de plein de choses compliquées qui, généralement, intimident les débutants.

Principes du RGSS
-----------------

La notion de scène
~~~~~~~~~~~~~~~~~~

Dans RPG Maker, chaque écran est une scène. Suivons un parcours typique dans un jeu RPG Maker : on arrive sur l'écran-titre, on lance une nouvelle partie, on explore la carte, on ouvre le menu, on retourne sur la carte, on entre dans un combat, qui nous amène sur une autre carte en cas de victoire, on entre dans un magasin, on retourne sur la map et on meurt. On aura lancé plusieurs scènes comme le montre ce schéma.

.. figure:: http://www.biloucorp.com/BCW/Michael/Tutos/Shifumi/1.png
   :alt: Schéma

   Parcours typique d'un joueur.

Vous l'aurez compris, tous les écrans sont des scènes. En RGSS, une scène est représentée par une classe. Dans l'éditeur de script, vous pouvez consulter l'intégralité des scènes du RGSS.

.. figure:: http://www.biloucorp.com/BCW/Michael/Tutos/Shifumi/1.png
   :alt: Editeur de script.

   Scènes du RGSS.

Pour créer notre mini-jeu, nous allons créer un nouvel écran où se déroulera le chifoumi, et donc une scène dédiée.

Un langage orienté objet
~~~~~~~~~~~~~~~~~~~~~~~~

Ruby est un langage orienté objet, ce qui signifie que tous les éléments sont basés sur un modèle, appelé classe. Par exemple, dans un système de combat, nous serons amenés à créer toutes sortes de monstres : des zombies, des chauve-souris... Tous ces ennemis ont des choses en commun : ils ont des caractéristiques et peuvent attaquer le joueur. Au lieu de réécrire ces comportements dans chaque monstre, nous écrivons une classe « ennemi » contenant ces informations communes, et nous l'appliquons à chaque monstre. Dans la programmation orientée objet (plus spécifiquement orientée classe, mais ne nous arrêtons pas sur ce détail), on est amené à utiliser des classes déjà existantes et à créer nos propres classes, pour décrire des éléments.

Le RGSS, c'est plein de classes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Le RGSS contient énormément de classes déjà écrites. Pour vous en rendre compte, je vous invite à ouvrir l'éditeur de script et à survoler les différentes sections. Pour réaliser un système en RGSS, on part de classes déjà existantes et on en crée de nouvelles. Il existe toute une série d'autres classes inaccessibles via l'éditeur de script, mais décrites dans l'aide du logiciel. Le scripteur averti les consultera régulièrement, mais nous n'en aurons pas besoin ici.

Création d'une scène
--------------------

Rendez-vous dans l'éditeur de script et créez un emplacement sous Materials. On place généralement nos scripts dans Materials pour qu'ils soient en dessous des scripts qui composent le RGSS, et au dessus de Main, qui correspond à la boucle du jeu. Un script placé après Main ne serait jamais exécuté.

.. figure:: https://i.imgur.com/AGnJPfz.png
   :alt: Editeur de script.

   Création d'un emplacement.

Certains programmeurs fractionnent les différentes composantes de leurs scripts dans des emplacements séparés. Pour un script aussi petit que le notre, ou pour un script destiné au partage, on peut tout mettre dans un seul emplacement. Ecrivons le squelette de notre scène ::

    class Scene_Chifoumi < Scene_Base
      # Ici se trouvera le code notre scène
    end

Les textes précédés de ``#`` sont des commentaires ignorés par le programme. Cela permet de structurer le code pour aider le scripteur à s'y retrouver. On s'en sert également pour expliquer le fonctionnement du script aux utilisateurs.

La première ligne indique que nous créons une classe appelée ``Scene_Chifoumi``, et ``< Scene_Base`` indique que notre classe héritera de la classe ``Scene_Base``.

``end`` marque la fin d'un bloc. Ici, cela signifie que la définition de la classe se termine. Toute la caractérisation de la scène se trouvera entre ``class`` et ``end``.

Qu'est ce que l'héritage ?
~~~~~~~~~~~~~~~~~~~~~~~~~~

En créant une nouvelle classe, on peut faire en sorte qu'elle possède toutes les caractéristiques d'une autre classe déjà existante. On appelle ce lien l'héritage. C'est assez cool parce que ça évite de réécrire du code qui existe déjà.

Le RGSS comporte une collection de classes déjà programmées pour nous faciliter le travail. Notre classe ``Scene_Chifoumi`` aura exactement le même comportement que ``Scene_Base``, une classe très générique qui comprend toutes les routines de base d'une scène.

Testons notre scène !
~~~~~~~~~~~~~~~~~~~~~

Dans un :ref:`évènement <evenements>`, utilisez la commande :ref:`appeldescript` et écrivez ::

    SceneManager.call(Scene_Chifoumi)

Dans le jeu, déclencher cet événement vous enverra sur notre scène, qui devrait être toute noire. C'est normal, nous n'avons encore rien fait dessus. Avec cette commande, vous pouvez également essayer d'accéder à d'autres scènes, comme ``Scene_Title`` !

La structure d'une scène
~~~~~~~~~~~~~~~~~~~~~~~~

Avant de nous soucier d'ajouter des choses à notre scène, il est important de comprendre sa structure. Voici, de manière fort schématique, le déroulement d'une scène :

.. figure:: http://www.biloucorp.com/BCW/Michael/Tutos/Shifumi/4.png
   :alt: Schéma

   Déroulement d'une scène.

Quand on appelle une scène, la méthode ``start`` se lance. Une méthode est une action référente à une classe. On va donc effectuer les premières tâches : afficher les images, les menus, etc.

Une fois que cette action est terminée, on boucle dans la méthode ``update``, jusqu’à ce qu'une interruption soit envoyée. Si cette interruption engendre la fin de la scène, par exemple dans le cas d'un changement de scène, on va dans la méthode ``terminate``. Celle-ci va supprimer tout ce qu'il faut avant de quitter la scène.

Grâce à l'héritage de ``Scene_Base``, nous n'avons pas à écrire ces méthodes. ``update`` rafraichit déjà chacune des ``Window``, et ``terminate`` les supprime. Nous devrions réécrire ces méthodes uniquement pour rafraichir ou supprimer d'autres éléments.

Les variables d'attribut
~~~~~~~~~~~~~~~~~~~~~~~~

Une variable est une étiquette liée à une valeur ::

    je_suis_une_variable = 10
    je_suis_une_variable = je_suis_une_variable + 1

Dans cet exemple, ``je_suis_une_variable`` vaudra 11. On peut stocker toutes sortes de choses dans une variable, par exemple une image, ou une ``Window``. Cependant, une variable possède une portée limitée.

Nous avons parlé des méthodes de ``Scene``. Si je crée une variable dans la méthode ``start``, elle n'existera pas dans la méthode ``update``, parce que sa durée de vie est limitée à ``start``. Pour pallier à cela, il existe les variables d'attribut. Nous avons vu qu'une classe permet de décrire des éléments par des caractéristiques. Les attributs sont des variable servant à caractériser une classe. Il suffit de rajouter ``@`` devant le nom et on pourra accéder à cette variable partout dans la classe.

Concrètement, quand j'aurai besoin d'une valeur temporaire, j'utiliserai une variable normale, et quand j'aurai besoin de garder cette valeur tout au long de la classe, j'utiliserai un attribut, dont le nom commence par ``@``.

Notre premier élément
~~~~~~~~~~~~~~~~~~~~~

Dans cette section, nous allons réaliser ceci :

.. figure:: https://i.imgur.com/9Dfh4RY.png
   :alt: Capture d'écran

   Première fenêtre de la scène.

Nous pourrions directement créer cette composante dans la méthode start, cependant j'ai l'habitude de fractionner mon code en sous-procédures. Dans notre classe, nous allons donc créer une nouvelle méthode chargée de créer la fenêtre de titre ::

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

Pour afficher une fenêtre en haut de la scène, utilisons une composante du RGSS : ``Window_Help``.
Pour comprendre son fonctionnement, ouvrez le script dans l'éditeur. La méthode ``initialize`` sera appelée la première fois, pour la construction de l'objet. On appelle cela un constructeur.

En écrivant ``MaClasse.new``, j'appelle la méthode ``initialize`` de la classe ``MaClasse`` et je construis une instance de cette classe. Dans notre exemple, nous avons besoin d'une fenêtre d'une case de hauteur, afin d'écrire une ligne. Nous écrivons ceci ::

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

L'utilisation d'un attribut avec ``@`` est obligatoire, car la méthode ``terminate`` devra supprimer la fenêtre lorsqu'on quitte la scène. Ainsi, même si on a l'impression d'utiliser la fenêtre de titre une seule fois, ce n'est pas vraiment le cas.

En testant la scène, on peut voir notre fenêtre, bien qu'elle soit vide. Nous allons utiliser une méthode de ``Window_Help`` qui s'appelle ``set_text``. Vous pouvez examiner son fonctionnement dans le code de ``Window_Help``. Cette méthode permet d'écrire du texte dans la fenêtre ::

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

Cette fois vous pouvez tester la scène et... magie ! Elle ressemble à notre objectif !

Nous avons créé un premier élément graphique et en plus, nous avons été modernes car nous avons utilisé une méthode ! Sachez que dans une classe, vous pouvez créer autant de méthodes que vous le souhaitez. Personnellement, j'utilise les méthodes pour améliorer la lisibilité et éviter les trop grosses portions de code !

Le menu de sélection
--------------------

Nous avons un titre... c'est un début. Maintenant, il serait intéressant d'avoir un véritable élément d’interactivité : un menu de sélection des coups pierre, papier et ciseaux. C'est sans doute la partie la plus importante de ce guide. En effet, nous allons apprendre à créer des interactions entre l'utilisateur et le jeu au moyen d'une composante du RGSS !

Une classe héritée de Window_Command
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Le RGSS met à notre disposition la classe ``Window_Command`` pour représenter des listes de choix. Comme pour notre scène, nous allons créer, sous la classe ``Scene_Chifoumi``, une classe pour la sélection du coup ! Vous pouvez l'ajouter dans un autre emplacement de script, mais je choisis de l'écrire à la suite, dans le même emplacement.

::

    class Window_Chifoumi < Window_Command
    end

Dans le code de ``Window_Command``, on peut voir que son constructeur prend deux arguments déterminant la position en X et en Y. Créons une fenêtre `Window_Chifoumi` dans une nouvelle méthode ``create_commands``.

::

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

En testant ceci... vous ne voyez rien de plus qu'une petite fenêtre positionnée en (0, 48) et dotée d'une petite flèche ! C'est normal, car nous n'avons pas encore spécifié les choix disponibles.

Ajouter des commandes
~~~~~~~~~~~~~~~~~~~~~

Ajouter une liste de commandes à notre fenêtre de sélection est très simple. Il suffit d'ajouter une méthode ``make_command_list`` dans laquelle on utilise la méthode ``add_command``, qui prend deux arguments : le texte affiché dans la liste, et un symbole pour identifier la valeur sélectionnée. Le symbole est un texte précédé de ``:`` et sera traité quand on programmera l'interaction avec notre fenêtre de sélection.

::

class Window_Chifoumi < Window_Command
  # Création de la liste de sélection
  def make_command_list
    add_command("Pierre", :pierre)
    add_command("Papier", :papier)
    add_command("Ciseaux", :ciseaux)
  end
end

Nous pouvons tester la scène : ça a tout de même plus de classe que précédemment !

.. figure:: https://i.imgur.com/D2EPTl2.png
   :alt: Capture d'écran

   Fenêtre de sélection.

C'est génial parce qu'en très peu de lignes, nous avons déjà pas mal de choses, et nous avons survolé une grande quantité de concepts. Maintenant, nous pouvons programmer des actions en fonction du choix.

Créer des cas de figure
~~~~~~~~~~~~~~~~~~~~~~~

Chaque cas de figure sera une méthode, appelée si le bon choix est effectué. Dans un premier temps, notre application se contentera de confirmer le coup choisi en l'écrivant dans la console. Si ce n'est pas déjà fait, cliquez sur « Afficher la console » dans le menu Jeu.

::

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

La méthode ``p`` affiche un message dans la console. Maintenant que nos méthodes sont prêtes, nous allons indiquer à la fenêtre de sélection qu'elle doit appeler la bonne méthode d'après le choix du joueur. Nous devons utiliser la méthode ``set_handler`` de ``Window_Base``, que ``Window_Chifoumi`` possède aussi grâce à l'héritage. Cette fonction prend deux arguments : un symbole et une méthode à appeler. Nous avons déjà défini les symboles dans ``add_command``.

::

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
    end

J'ai utilisé ``method(:nom_methode)`` pour passer la méthode en argument à ``set_handler``. Celle-ci prend en argument une chose à exécuter. En testant la scène, vous remarquerez que le message correspondant à votre sélection s'affiche bien dans la console.

Nous avons assez de matière pour créer notre application. Nous savons afficher des fenêtres, créer des fenêtres de sélection, relier une sélection à une action... Nous pouvons coder le raisonnement logique du jeu !

Penser le déroulement d'un système
----------------------------------

Le plus dur est derrière nous, nous allons maintenant pouvoir travailler sur quelque chose de vraiment amusant. Jusqu’à présent, nous avons résolu séquentiellement chacun de nos besoins. En effet, nous avions besoin d'une scène, nous avons créé une scène. Nous voulions afficher un titre, nous l'avons fait ; nous avions besoin d'un outil de sélection, nous l'avons fait. Il est temps d'apprendre quelque chose d'un peu plus abstrait.

En tant qu'analyste programmeur, on est souvent amené à penser des applications et systèmes complexes, dont le déroulement n'est pas linéaire. En tant que créateur de systèmes pour RPG Maker, c'est aussi le cas. Dans un script, il arrive que le déroulement ne soit pas explicite. Par exemple, bien que notre système soit assez simple, au moment de la sélection du coup, notre application peut prendre trois directions différentes. Dans cette section nous allons tâcher de représenter le processus de notre système.

.. figure:: http://www.biloucorp.com/BCW/Michael/Tutos/Shifumi/7.png
   :alt: Schéma

   Déroulement du système.

La première partie est déjà presque entièrement écrite. Il ne reste plus qu'à générer le choix de l'ordinateur, ce que nous ferons un peu plus tard. Pour le reste, il s'agit simplement de vérifier qui a gagné. Dans le cas où le choix de l'ordinateur équivaut à celui du joueur, c'est un match nul, et on renvoie vers le début de la scène après avoir affiché un message. Sinon, on affiche un message de victoire ou de défaite, et on renvoie vers la carte.

Ce genre de schéma permet de se représenter tous les états d'une application, et il m'arrive souvent d'en croquer quelques-uns sur papier. Si vous êtes très à l'aise avec l'abstraction, et que vous avez la capacité de vous projeter une application sans dessin, vous n'êtes pas obligé de le faire.

Choix et conditions
-------------------

Grâce à l'organigramme, on s'est rendus compte des outils qu'il nous manque pour continuer. Commençons par la sélection aléatoire d'un des coups par l'ordinateur !

Liste et sélection aléatoire
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

En programmation, il arrive souvent que l'on doive stocker plusieurs valeurs de manière ordonnée. Pour cela, on utilise une liste, ou un tableau. La nuance entre ces deux concepts existe, cependant nous ne nous étendrons pas sur le sujet. Pour créer une liste, il suffit de dire qu'une variable est égale à ``[valeur1, valeur2, etc.]``. Utilisons une liste pour stocker les différents choix possibles. Comme j'utilise des symboles pour représenter les coups, cela donne ::

    liste_signes = [:pierre, :papier, :ciseaux]

Vous vous demandez peut-être pourquoi j'utilise une liste, alors que l'on a besoin d'une seule valeur. C'est parce que comme pour les fenêtres, les scènes, et à peu près tout en Ruby, il est possible de leur appliquer des méthodes. La liste des méthodes applicables se trouve dans la `documentation des tableaux de Ruby <http://ruby-doc.org/core-2.0/Array.html>`__. Nous allons utiliser la méthode `sample <http://ruby-doc.org/core-2.0/Array.html#method-i-sample>`__ pour récupérer une cellule aléatoire du tableau.

::

    liste_signes = [:pierre, :papier, :ciseaux]
    valeur_aleatoire = liste_signes.sample

On peut également raccourcir ce code de la façon suivante ::

    valeur_aleatoire = [:pierre, :papier, :ciseaux].sample

Ceci stocke dans la variable ``valeur_aleatoire`` une cellule sélectionnée au hasard dans le tableau ``[:pierre, :papier, :ciseaux]``. Avec ce que nous venons d'apprendre, nous pouvons clôturer la première partie du schéma.

.. figure:: http://www.biloucorp.com/BCW/Michael/Tutos/Shifumi/8.png
   :alt: Schéma

   Première partie du déroulement du système.

Pour ce faire, je vous propose de créer une nouvelle méthode pour générer la sélection de l'ordinateur. Une fois de plus, on fractionne le tout en méthodes pour rendre le code lisible ! Le résultat de la sélection sera stockée dans un attribut, car nous en aurons besoin dans d'autres méthodes. Je vous invite à essayer par vous-même avant de consulter la solution.

Voici à quoi doit devrait maintenant ressembler ``Scene_Chifoumi`` !

::

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

Les structures conditionnelles
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Peut-être y avez-vous déjà été confrontés en programmant par évènements. Les :ref:`conditions` permettent de faire varier un programme. Sur l'organigramme, on peut facilement voir quand il faut utiliser une condition. Ce n'est pas le cas lors de la sélection d'un coup par le joueur, car l'appel des méthodes se charge de la structure conditionnelle. Par contre, pour définir s'il s'agit d'une victoire, d'un match nul ou d'une défaite, il faut utiliser les conditions. Une condition se structure ainsi :

http://www.biloucorp.com/BCW/Michael/Tutos/Shifumi/9.png

En programmation, il n'y a pas de nuance : soit c'est vrai, soit c'est faux. Ruby est capable de répondre à des questions simples qui n'ont que ces deux réponses possibles représentées par ``true`` et ``false``.

On peut s'interroger sur l'égalité entre deux valeurs (``a == b``), les comparer (``a > b``, ``a < b``, ``a >= b``, ``a <= b``), et plein d'autres choses ! Nous nous intéresserons uniquement à l'égalité ici. Voici comment écrire une condition en Ruby ::

    if question
      # Succession d'actions si la réponse est vrai
    else
      # Succession d'actions si la réponse est faux
    end
    # suite du programme

Si vous ne parlez pas anglais, retenez que ``if`` veut dire si, et ``else`` veut dire sinon ! Un exemple plus concret ::

    if @computer_choice == :papier
      p "L'ordinateur a choisi papier."
    else
      p "L'ordinateur n'a pas choisi papier."
    end

Il y a plusieurs subtilités à connaitre quand on manipule des conditions. Par exemple, ``else`` n'est pas obligatoire. Dans ce cas, si la condition renvoie faux, le programme continue après le bloc de condition :

    if @computer_choice == :pierre
      p "L'ordinateur a choisi Pierre"
    end
    # suite du programme

On peut aussi imbriquer des conditions. Dans notre système, nous devons manipuler plusieurs cas. Voici un exemple tout simple pour savoir quel coup est attribué à l'ordinateur ::

    if @computer_choice == :pierre
      p "L'ordinateur a choisi pierre."
    else
      if @computer_choice == :papier
        p "L'ordinateur a choisi papier."
      else
        p "L'ordinateur a choisi ciseaux."
      end
    end

Il faut reconnaître que cette forme est un peu lourde. Enchaînons plutôt les questions au moyen de la primitive ``elsif``. Ce code fait exactement la même chose que le précédent ::

    if @computer_choice == :pierre
      p "L'ordinateur a choisi pierre."
    elsif @computer_choice == :papier
      p "L'ordinateur a choisi papier."
    else
     p "L'ordinateur a choisi ciseaux."
    end

Concrètement, que se passe-t-il ici ? On évalue d'abord la première condition, « Est-ce que @computer_choice vaut :pierre ? » Si oui, on affiche le message et on sort de la condition, sinon, on évalue la seconde condition : « Est-ce que @computer_choice vaut :feuille ? » Si oui, on affiche le message et on sort de la condition. Sinon, comme seulement trois choix sont possibles, cela signifie que l'ordinateur a choisi « ciseaux ». On affiche donc le message et on sort de la condition.

Implémentation de la logique dans notre système
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Rappelons les règles du pierre-papier-ciseaux :

* La pierre bat les ciseaux
* Le papier bat la pierre
* Les ciseaux battent le papier
* Si les deux choix sont identiques, alors c'est match nul

Nous avions préparé trois méthodes : ``pierre``, ``feuille`` et ``ciseaux``, appelées en fonction du choix du joueur. C'est dans ces trois méthodes que nous coderons les conditions ! Il serait possible de créer une seule méthode vérifiant la victoire en fonction de deux arguments, mais nous partons du principe que nous débutons avec Ruby et le RGSS, donc autant écrire trois petites méthodes facilement compréhensibles.

Dans un premier temps, nous afficherons un petit message pour dire qui a gagné, et dans le cas d'un match nul, nous renverrons au début de la scène. Pour cela, il suffit d'appeler à nouveau la scène. Dans un cas de victoire ou de défaite, on renvoie vers ``Scene_Map``. Essayez donc de coder ces trois fonctions, puis regardez la solution !

Ne vous en faites pas si vos conditions sont dans un ordre différent des miennes. Il n'y a pas d'ordre précis et optimal. Personnellement, je commence par tester si les deux choix sont identiques, ensuite s'il y a défaite, et sinon, c'est qu'il y a victoire. Voici le code complet pour récapituler ::

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
    elsif @computer_choice == :Pierre
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

Je vous invite à tester la scène, en affichant la console pour voir les résultats, et... magie ! Notre système fonctionne ! Nous avons effectué 90% de notre application. C'est super !

Affichage des messages
----------------------

Dans la section précédente, nous avons établi toute la logique de notre application, donc elle fonctionne ! Maintenant, il faudrait que notre système affiche des messages de victoire ou de défaite. Nous allons créer une fenêtre qui s'affichera au bon moment.

Une fenêtre simple
~~~~~~~~~~~~~~~~~~

Nous utiliserons ``Window_Base``, la représentation la plus simple d'une fenêtre. L'objectif de ce type de fenêtre est simplement d'afficher des informations. Dans le code de ``Window_Base``, on peut voir que son constructeur prend 4 arguments : la position en X et en Y, puis la taille en largeur et en hauteur.

Je vous invite à créer une méthode ``create_window_message`` dont le rôle sera de dessiner une fenêtre simple dans un attribut nommé ``message``. Je souhaite lui donner les dimensions (280, 80) et la placer au centre de l'écran. Le point d'origine d'une fenêtre étant son coin haut gauche, nous devons effectuer quelques calculs pour la positionner au centre :

* Centrer en X : (Ecran de jeu / 2) - Largeur fenêtre / 2
* Centrer en Y : (Ecran de jeu / 2) - Hauteur fenêtre / 2

La résolution d'un jeu RPG Maker VX Ace étant 544×416 par défaut, le résultat final est le suivant :

* En X : (544 / 2) − (280 / 2) = 132
* En Y : (416 / 2) − (80 / 2) = 168

C'est une petite ruse pour positionner correctement la fenêtre. On écrit ``create_window_message`` de cette manière ::

    def create_window_message
      @message = Window_Base.new(132, 168, 280, 80)
    end

N'oubliez pas d'appeler ``create_window_message`` dans la méthode ``start``. Vous pouvez tester la scène, c'est cool, on a bien une fenêtre bien placée. L'idéal serait que cette fenêtre s'affiche uniquement au besoin. Nous allons modifier notre méthode pour que la fenêtre soit invisible au départ.

::

    def create_window_message
      @message = Window_Base.new(132, 168, 280, 80)
      @message.hide
    end

Ecrire du texte dans la fenêtre
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Une fenêtre vide c'est un peu tout pourri, donc nous allons essayer d'y écrire du texte. Une fois de plus, le RGSS met à notre disposition une méthode qui fait précisément cela : ``draw_text``.

    draw_text(x, y, width, height, text, [align=0])

Concrètement, on va préparer un rectangle invisible dans la fenêtre, qui accueillera le texte. Ce rectangle est défini par une position et une taille. Le dernier argument donne l'alignement du texte. Il est facultatif, car il vaut 0 par défaut, pour signifier un alignement à gauche. 1 = alignement au centre, et 2 = alignement à droite.

Essayons d'écrire un texte dans la méthode ``create_window_message``, en supprimant temporairement la commande qui masque la fenêtre, afin de voir ce que l'on fait.

::

    def create_window_message
      @message = Window_Base.new(132, 168, 280, 80)
      # @message.hide
      @message.draw_text(0, 0, 280, 38, "Vous avez choisi la pierre.")
    end

Je vous parlais de la création d'un rectangle, dans lequel sera placé le texte. Voici la représentation de ce rectangle :

.. figure:: http://www.biloucorp.com/BCW/Michael/Tutos/Shifumi/11.png
   :alt: Capture d'écran

   Représentation du rectangle de draw_text.

Vou pouvez voir que le contenu d'une fenêtre possède des marges de 12 pixels, définies par la méthode ``standard_padding`` de ``Window_Base``.

Nous allons écrire une petite fonction pour afficher les différents résultats possibles. La méthode aura deux arguments. Le premier sera un texte tel que « Vous avez choisi pierre et l'ordinateur papier ». Le deuxième argument pourra prendre 3 valeurs : 0, 1, ou 2. Dans le cas ou le nombre vaut 0, on affiche « Match Nul », si le nombre vaudra 1, « Vous avez Perdu », sinon, « Vous avez gagné ».

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

Pour éviter de réécrire la seconde méthode ``draw_text`` qui est assez lourde, j'utilise une variable ``message``. Remarquez comment je me suis passé du ``else`` à la fin de la branche conditionnelle, en initialisant la variable avec une valeur par défaut.

Finalisation de l'application
-----------------------------

On arrive tout au bout de notre système ! Utilisons notre superbe méthode ``display_message``.

Utilisation de display_message
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Cette partie est très facile, parce que nous avons déjà conçu nos outils. Dans les méthodes ``pierre``, ``feuille`` et ``ciseaux``, substituez les utilisations de la méthode ``p`` par la méthode que nous venons de créer. Par exemple, au lieu d'écrire ::

    p "Vous avez choisi pierre et l'ordinateur ciseaux, vous gagnez !"

Faites plutôt ::

    display_message("Vous avez choisi pierre et l'ordinateur ciseaux.", 2)

Problème : le message ne s'affiche jamais ! Ou plutôt, la fenêtre va bien s'afficher, mais de suite après, un changement de scène est appelé. Il serait préférable d'attendre l'appui de la touche action avant de changer de scène.

Attente de l'appui d'une touche
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nous allons modifier la méthode ``pre_terminate`` de la classe ``Window_Base``. Nous savons que grâce à l'héritage, il n'est pas nécessaire d'écrire certaines méthodes. La méthode ``pre_terminate`` est appelée juste avant la suppression automatique des éléments de la scène. Pour éviter que notre message soit effacé car la scène est terminée, nous allons ajouter une attente dans la méthode ``pre_terminate``, jusqu'à ce que la touche C soit pressée.

    def pre_terminate
      super
      loop do
        Graphics.update
        Input.update
        break if Input.trigger?(:C)
      end
    end

Le mot ``super`` permet d'appeler la méthode ``pre_terminate`` de ``Window_Base``, qui est normalement vide, mais sait-on jamais ! Un script personnalisé pourrait l'avoir amélioré.

Le code compris entre ``loop do`` et ``end`` sera répété à l'infini. Cette boucle va durer plusieurs frames, il faut donc rafraichir l'affichage et la détection des touches : c'est le rôle de ``Graphics.update`` et de ``Input.update``.

``break`` permet de sortir de la boucle. La dernière ligne indique donc que l'on sort de la boucle si la touche C est pressée. Cette écriture en une ligne est identique à ::

    if Input.trigger?(:C)
      break
    end

Pour exécuter une seule commande, on peut synthétiser une condition comme dans la première forme.

Concrètement, une fois que le message est affiché, nous indiquons que nous souhaitons changer de scène. Notre scène va appeler la méthode ``pre_terminate``, juste avant ``terminate``. Ainsi, dès que la touche action est pressée, on sort de la boucle et s'en suit la méthode ``terminate`` qui supprime les éléments et renvoie vers la scène demandée !

Conclusion
----------

Enfin ! Nous avons créé un script complet qui, malgré son aspect très simple, fut l'occasion d'aborder de nombreux concepts. Ce guide n'aura pas été d'une rigueur exemplaire, afin d'être plus abordable. Pour aller plus loin, je vous recommande `cet ouvrage très complet sur le Ruby <http://www.ruby-doc.org/docs/ProgrammingRuby/>`__. Bonne continuation dans la suite de votre formation !

Voici un rappel du code terminé ::

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
       elsif @computer_choice == :Pierre
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

Source
~~~~~~

Ce guide est issu du très bon article de msp (S4suk3) sur la `BilouCorp <http://www.biloucorp.com/creation-dun-shifumi-avec-le-rgss3-16>`__. Il a été ajouté au wiki avec son autorisation.
