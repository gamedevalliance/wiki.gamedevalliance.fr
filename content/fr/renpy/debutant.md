---
title: "Tutoriel de Ren'Py pour les débutants"
description: "Créez des personnages, ajoutez des images, des musiques, des sons et des choix dans votre jeu Ren'Py."
portail: renpy
menu:
  renpy:
    name: "Tutoriel pour les débutants"
    parent: debuter
    weight: 2

---

Ce tutoriel est la suite directe de [Premiers pas avec Ren'Py]({{< ref "/renpy/premierspas.md" >}}). Vous allez apprendre à créer des personnages, ajouter des images, des musiques, des sons et des choix dans votre jeu Ren'Py.

## Personnages

Il y a une première chose que nous pourrions améliorer dans notre exemple précédent. Vous deviez inscrire de façon répétitive le nom d'un personnage à chaque fois qu'il parle. Dans un jeu plein de dialogues, cela peut faire beaucoup à taper. Aussi, chaque nom de personne est affiché de la même manière, avec un texte blanc ennuyeux.

Pour éviter tout cela, Ren'Py vous permet de définir des personnages au début du script. Vous pouvez associer un nom court au personnage et changer la couleur de son nom.

```Python
define s = Character('Sylvie', color = "#c8ffc8")
define m = Character('Moi', color = "#c8c8ff")

label start:
    "Je vais lui demander..."

    m "Hum... est-ce que..."
    m "Est-ce que tu accepterais de m'aider à faire un visual novel ?"
    
    "Silence."
    "Elle est stupéfaite, puis..."
    
    s "Bien sûr, mais c'est quoi un \"visual novel\" ?"
```

Les deux premières lignes définissent des personnages. La première déclare un personnage avec un nom court `s`, un nom long `Sylvie`, et une couleur verdâtre. Les couleurs sont codées avec un nombre hexadécimal, comme c'est le cas sur les pages Web par exemple.

Le seconde ligne déclare un personnage avec un nom court `m`, un nom long `Moi`, et une couleur bleutée. D'autres personnages peuvent être définis en copiant l'une des deux lignes, et en changeant les paramètres.

Nous avons aussi changé les instructions de dialogue pour utiliser les objets de personnage au lieu de leurs simples noms.

## Images

Un visual novel n'en serait pas un sans quelques images ! Ajoutons-en à notre jeu.

Pour que Ren'Py puisse trouver les fichiers image, ils doivent être placés dans le répertoire `game` du projet. Vous pouvez facilement ouvrir un répertoire depuis le lanceur. Copiez les images depuis le répertoire `game` de *La Question*, puis collez-les dans le répertoire de votre projet.

Ren'Py ne fait pas de distinction entre les images de personnage ou de fond. En général, les images de personnage ont besoin de transparence et doivent donc être au format PNG. Les fonds peuvent être au format JPEG ou PNG, mais devraient plutôt être en PNG pour préserver leur qualité. Par convention, les images de fond commencent avec l'étiquette `bg`.

```Python
define s = Character('Sylvie', color="#c8ffc8")
define m = Character('Moi', color="#c8c8ff")

label start:
    scene bg meadow
    show sylvie green smile

    "Je vais lui demander..."
    
    m "Hum... est-ce que..."
    m "Est-ce que tu accepterais de m'aider à faire un visual novel ?"
    
    show sylvie green surprised
    
    "Silence."
    "Elle est stupéfaite, puis..."
    
    show sylvie green smile
    
    s "Bien sûr, mais c'est quoi un \"visual novel\" ?"
```

L'instruction `scene` efface tout ce qu'il y a à l'écran, et montre l'image `bg meadow`. La ligne suivante est une instruction `show` qui montre l'image `sylvie green smile`.

La première partie du nom d'une image est son étiquette. Si une image est sur le point d'apparaître à l'écran et qu'une autre image avec la même étiquette y est déjà, alors l'image qui est déjà à l'écran est remplacée par la nouvelle. Cela arrive à la deuxième instruction `show`. Avant que cette ligne ne soit atteinte, l'image `sylvie green smile` est affichée à l'écran. Quand la ligne est atteinte, cette image est remplacée par `sylvie green surprised`, parce qu'elles ont toutes les deux l'étiquette `sylvie`.

### L'intruction `hide`

Ren'Py fournit une instruction `hide` qui cache l'image indiquée.

```Python
label depart:

    s "Je vais aller droit au but !"
    
    hide sylvie
    
    "..."
    
    m "C'est pas ce que je voulais dire"
```

En fait, c'est assez rare qu'il soit nécessaire d'utiliser l'instruction `hide`. On utilise `show` quand un personnage change d'émotion et `scene` lorsque tous les personnages partent. Vous n'avez besoin d'utiliser `hide` que lorsqu'un personnage quitte une scène qui ne change pas.

### Transitions

Faire apparaître et disparaître les images est pour le moment un peu trop brutal. Ren'Py implémente des transitions qui peuvent rendre les changements de scène plus intéressants.

```Python
label start:
    scene bg uni
    show sylvie green smile

    s "Oh, salut, je peux marcher avec toi ?"
    m "Oui..."
    "Ma voix était déjà en train de trembler."
    
    scene bg meadow
    with fade
    
    "Nous sommes arrivés aux prairies à l'entrée de notre village."
    "L'automne est si beau."
    "Quand on était enfants, nous jouions souvent ici."
    m "Hey... hummm..."
    
    show sylvie green smile
    with dissolve
    
    "Elle se tourna vers moi et me sourit."
    "Je vais lui demander..."
    m "Hum... est-ce que..."
    m "Est-ce que tu accepterais de m'aider à faire un visual novel ?"
```

L'instruction `with` doit être suivie du nom de la transition à utiliser. L'instruction la plus commune est `dissolve`, qui dissout un écran vers le suivant. Une autre transition utile est `fade`, qui estompe l'écran jusqu'à ce qu'il devienne noir et l'estompe à nouveau jusqu'à présenter le nouvel écran.

Lorsqu'une transition est placée après plusieurs instructions `scene`, `show` ou `hide`, elle s'applique à l'ensemble de ces instructions. Si vous écrivez :

```Python
scene bg meadow
show sylvie green smile
with dissolve
```

`bg meadow` et `sylvie green smile` vont fondre au même moment. Pour faire cela une image à la fois, vous devez écrire deux instructions `with` :

```Python
scene bg meadow
with dissolve
show sylvie green smile
with dissolve
```

Enfin, si vous voulez afficher instantanément `bg meadow` mais afficher `sylvie` avec une transition, vous pouvez écrire :

```Python
scene bg meadow
with None
show sylvie green smile
with dissolve
```

Ici, `None` indique une transition spéciale qui met à jour ce que Ren'Py devra afficher, sans que rien ne soit encore affiché pour l'utilisateur.

### Positionnement

Par défaut, les images sont centrées horizontalement et alignées en bas. Cela convient généralement pour les images de fond et les personnages seuls, mais lorsque l'on montre plus d'un personnage à l'écran, il vaut mieux changer leur positionnement. Aussi, on pourrait vouloir choisir la position d'un personnage pour les besoins de l'histoire.

```Python
show sylvie green smile at right
```

Pour effectuer ce positionnement, on ajoute `at` à l'instruction `show` puis une position. Ren'Py a déjà prédéfini plusieurs positions : `left`, `right`, `center` (par défaut) et `truecenter` pour un centrage horizontal et vertical.

Il est possible de définir vos propres positions et même des mouvements complexes, mais cela ne rentre pas dans le cadre de ce tutoriel.

## Musique et sons

La plupart des jeux ont une musique de fond. Dans Ren'Py, les fichiers musicaux sont joués en boucle automatiquement jusqu'à ce qu'ils soient arrêtés. La musique est lancée via l'instruction `play music`.

```Python
play music "illurock.ogg"
```

Lorsque vous changez de musique, vous pouvez ajouter `fadeout` pour une transition en fondu entre l'ancienne musique et la nouvelle.

```Python
play music "illurock.ogg" fadeout 1.0
```

La musique peut être arrêtée avec l'instruction `stop music`, qui peut également prendre en option `fadeout`.

```Python
stop music
```

Les effets sonores peuvent être joués via l'instruction `play sound`.

```Python
play sound "effect.ogg"
```

Ren'Py supporte plusieurs formats audio, mais le format [OGG Vorbis](http://fr.wikipedia.org/wiki/OGG_Vorbis) est conseillé. Les fichiers audio doivent être placés dans le répertoire game.

## Créer des choix 

Pour créer un véritable visual novel et non un simple diaporama, il faut que le joueur puisse effectuer des choix dans les dialogues. Plusieurs méthodes sont possibles pour ajouter des interactions dans votre jeu.

### Menus, labels et sauts

L'instruction menu vous permet de présenter un choix au joueur

```Python
    s "Bien sûr, mais c'est quoi un \"visual novel\" ?"

menu:
    "C'est une histoire avec des images.":
         jump vn

    "C'est un jeu hentai.":
         jump hentai

label vn:
    m "C'est une histoire avec des images et de la musique."
    jump marry

label hentai:
    m "C'est un jeu coquin."
    jump marry

label marry:
    scene black
    with dissolve

    "--- des années plus tard ---"
```

`menu` introduit un menu de jeu. Cette instruction est suivie d'un bloc de chaînes de caractères suivies de deux points `:`. Ce sont les choix présentés au joueur. Le choix doit être suivi d'un bloc d'une ou plusieurs instructions.

Dans notre exemple, chaque choix du menu est suivi d'une instruction `jump`, qui nous fait passer à un autre label.

Les labels peuvent être définis dans n'importe quel fichier présent dans le répertoire `game` se terminant en `.rpy`. Peu importe le nom du fichier pour Ren'Py, seuls comptent les labels contenus dedans. Un label doit apparaître dans un seul fichier.

### Les variables Python et l'instruction `if`

Bien qu'on puisse faire un jeu uniquement avec des menus et des sauts, au bout d'un moment il devient nécessaire de stocker les choix de l'utilisateur dans des variables pour y accéder plus tard. C'est ce à quoi sert le support de Python dans Ren'Py.

On peut utiliser Python via deux moyens. Une ligne commençant par un dollar `$` est une ligne en Python, tandis que le mot clé `Python:` permet d'introduire un bloc entier en Python.

Python permet de créer des variables qui contiennent des valeurs. Il vous suffit de déclarer la variable au début du jeu :

```python
label start:
    $ coquin = False
```

Vous pouvez ensuite changer la valeur de la variable à l'endroit voulu :

```python
label hentai:

    $ coquin = True
    
    m "C'est un jeu coquin."
    s "Vraiment ? J'ai toujours voulu en faire un."
    s "Je vais le faire tout de suite !"
    
    jump marry
```

Et vérifiez sa valeur plus tard dans le jeu :

```python
"C'est ainsi que nous sommes devenus une équipe de création de visual novels."
"Nous avons pris plein de plaisir à écrire des jeux."

if coquin: # Sera exécuté si coquin est True
    "Enfin, à part pour le jeu coquin pour lequel elle a insisté."

"Et un jour..."
```

Bien sûr, les variables Python ne sont pas forcément des simples True/False (Vrai/Faux). Elles peuvent être utilisées pour stocker le nom du joueur, un score, ou toute autre chose. Puisque Ren'Py inclut la possibilité d'utiliser l'ensemble du langage Python, les possibilités sont très vastes !
