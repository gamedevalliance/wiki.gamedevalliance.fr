---
title: "Tutoriel Ren'py niveau débutants"
description: "Ren'Py est un moteur libre et gratuit permettant de créer des Visual Novels sur Windows, Linux, MacOS, Android et IOS."
portail: renpy
menu:
  renpy:
    name: "Tutoriel débutants"
    parent: "Débuter dans Ren'Py"
    weight: 1

---

Le but de ce tutoriel est de vous permettre d'apprendre à créer des personnages, d'ajouter des images, des musiques, des sons et des choix dans votre jeu Ren'Py.

## Personnages

Un problème que nous avons avec ce premier exemple, c’est qu’il nécessite que vous inscriviez de façon répétitive le nom de chaque personnage à chaque fois qu’il parle. Dans un jeu plein de dialogues, cela peut faire beaucoup à taper. Aussi, chaque nom de personne est afficher de la même manière, avec un texte blanc ennuyeux. Pour pallier cela, Ren’Py vous permet de définir des personnages au début du script. Cela vous permet d’associer un nom court au personnage, et de changer la couleur de son nom.

```
define s \= Character('Sylvie', color\="#c8ffc8")
define m \= Character('Moi', color\="#c8c8ff")

label start:
    "Je vais lui demander..."

    m "Hum... est-ce que..."
    m "Est-ce que tu accepterais de m'aider à faire un Visual Novel ?"
    
    "Silence."
    "Elle est stupéfaite, puis..."
    
    s "Bien sûr, mais c'est quoi un \\"Visual Novel\\" ?"
```

Les deux premières lignes définissent des personnages. La première déclare un personnage avec un nom court « s », un nom long « Sylvie », avec un nom montré dans une couleur verdâtre. (Les couleurs sont encodée avec un triplet hexadécimal rouge-vert-bleu, comme c’est le cas sur les pages Web.)

Le seconde ligne déclare un personnage avec un nom court « m », un nom long « Moi », et un nom montré dans une couleur bleutée. D’autres personnages peuvent être définis en copiant l’une des deux lignes, et en changeant les noms court et longs et la couleur.

Nous avons aussi changer les instructions de dialogue pour utiliser les objets de type personnage au lieu des noms des personnages. Cela indique à Ren’Py d’utiliser les personnage que nous avons déclaré dans le bloc d’initiation.

## Images

Un Visual Novel n’est pas un Visual Novel sans images ! Ajoutons quelques images à notre jeu.

```
image bg prairie \= "prairie.jpg"
image bg fac \= "fac.jpg"

image sylvie sourie \= "sylvie\_sourie.png"
image sylvie surprise \= "sylvie\_surprise.png"

define s \= Character('Sylvie', color\="#c8ffc8")
define m \= Character('Moi', color\="#c8c8ff")

label start:
    scene bg prairie
    show sylvie sourie

    "Je vais lui demander..."
    
    m "Hum... est-ce que..."
    m "Est-ce que tu accepterais de m'aider à faire un Visual Novel ?"
    
    show sylvie surprise
    
    "Silence."
    "Elle est stupéfaite, puis..."
    
    show sylvie sourie
    
    s "Bien sûr, mais c'est quoi un \\"Visual Novel\\" ?"
```

La première chose dont nous avons besoin, c’est de déclarer les images. On utilise l’instruction image aux lignes 1, 2, 4 et 5, dans le bloc d’initiation. Ces instructions d’images donnent un nom à l’image, et le nom du fichier image correspondant.

Par exemple, la ligne 4 déclare une image nommée « sylvie sourie », trouvé dans le fichier « sylvie\_sourie.png », avec l’étiquette « sylvie ».

Nous avons une instruction scene à la ligne 11. Cette instruction efface tout ce qu’il y a à l’écran, et montre l’image « bg prairie ». La ligne suivante est une instruction show, qui montre l’image « sylvie sourie » à l’écran.

La première partie du nom d’une image est son étiquette. Si une image est sur le point d’apparaître à l’écran, et qu’une autre image avec la même étiquette y est déjà, alors, l’image qui est déjà à l’écran est remplacée par la nouvelle. Cela arrive ligne 19, à la deuxième instruction show. Avant que la ligne 19 ne soit atteinte, l’image « sylvie sourie » est affichée à l’écran. Quand la ligne 19 est atteinte, cette image est remplacée par « sylvie surprise », puisque elles ont toutes les deux l’étiquette « sylvie ».

Pour que Ren’Py puisse trouver les fichiers images, ils doivent être placés dans le répertoire game du projet. Le répertoire game se trouve dans « Nom-du-projet/game/ », vous pouvez y accéder en cliquant sur « game » sous « Ouvrir le répertoire » dans le lanceur. Vous voudrez certainement copier les images depuis le répertoire « the\_question/game/ » vers le répertoire « ma\_question/game/ », pour alors pouvoir lancer cet exemple.

Ren’Py ne fait pas de distinction entre images et personnage ou de fond. En général, les images de personnages ont besoin de transparence, ce qui signifie qu’elles devraient être au format PNG. Les fonds peuvent être au format JPEG ou PNG. Par convention, les images de fond commencent avec l’étiquette « bg ».

### Intruction hide

Ren’Py fourni également une instruction hide, qui cache l’image indiquée.

```
label depart:

    s "Je vais aller droit au but !"
    
    hide sylvie
    
    "..."
    
    m "C'est pas ce que je voulais dire"
```

En fait c’est assez rare qu’il soit nécessaire d’utiliser l’instruction hide. On utilise show quand un personnage change d’émotion, et scene lorsque tous les personnages partent. Vous n’avez besoin d’utiliser hiden que lorsqu’un personnage quitte un scène qui reste la même.

### Transitions

Voir les images apparaître et disparaître est un peu trop banal, alors Ren’Py implémente des transitions qui peuvent rendre les changement de scènes plus intéressants. Les transitions changent l’écran depuis ce à quoi il ressemblait à la fin de la dernière interaction (dialogue, menu ou transition), à ce qu’il doit être après une instruction scene, show ou hide.

```
label start:
    scene bg fac
    show sylvie sourie

    s "Oh, salut, je peux marcher avec toi ?"
    m "Oui..."
    "Ma voix était déjà en train de trembler."
    
    scene bg prairie
    with fade
    
    "Nous sommes arrivés aux prairies à l'entrée de notre village."
    "L'automne est si beau ici."
    "Quand on était enfants, nous jouions souvent ici."
    m "Hey... hummm..."
    
    show sylvie sourie
    with dissolve
    
    "Elle se tourna vers moi et me sourit."
    "Je vais lui demander..."
    m "Hum... est-ce que..."
    m "Est-ce que tu accepterais de m'aider à faire un Visual Novel ?"
```

L’instruction with doit être suivie du nom de la transition à utiliser. L’instruction la plus commune est dissolve qui dissous un écran vers le suivant. Une autre transition utile est fade, qui estompe l’écran jusqu’à ce qu’il devienne noir, et l’estompe à nouveau jusqu’à présenter le nouvel écran.

Lorsque une transition est placée après plusieurs instructions scene, show ou hide, elle s’applique à l’ensemble de ces instructions. Si vous écrivez :

```
    scene bg prairie
    show sylvie sourie
    with dissolve
```

Et « bg prairie » et « sylvie sourie » vont avoir un rendu fondu au même moment. Pour faire cela une photo à la fois, vous devez écrire deux instructions with:

```
    scene bg prairie
    with dissolve
    show sylvie sourie
    with dissolve
```

La première fait apparaître avec l’effet dissous « prairie » et ensuite, « sylvie ». Si vous vouliez afficher instantanément « prairie » puis montrer « sylvie », vous pouvez écrire :

```
    scene bg prairie
    with None
    show sylvie sourie
    with dissolve
```

Ici, « None » est utilisé pour indiquer une transition spéciale qui met à jour ce que Ren’Py devra afficher sans que rien ne soit encore affiché pour l’utilisateur.

### Positionnements

Par défaut, les images sont centrées horizontalement, avec le bas de l’image aligné avec la bas de l’écran. Cela convient généralement pour les images de fond et les personnages seuls, mais lorsque l’on montre plus d’un personnage à l’écran, cela a du sens de changer le positionnement. Aussi, on pourrait vouloir choisir la position d’un personnage pour les besoins de l’histoire.

```
     show sylvie sourie at right
```

Pour effectuer ce positionnement, on ajoute un clause at à l’instruction show. La clause at est suivit d’une position. Ren’Py a déjà pré-définit plusieurs positions (en anglais) : left (gauche), right (droite), center (centre, position par défaut) et truecenter pour un centrage horizontal et vertical.

Il est possible de définir vos propres positions, et même des mouvements complexes, mais cela ne rentre pas dans le cadre de ce tutoriel.

## Musique et son

La plupart des jeux ont une musique de fond. Dans Ren’Py, les fichiers musicaux sont joués en boucle automatiquement, jusqu’à ce qu’ils soient arrêtés. La musique est lancée via l’instruction play music.

```
    play music "illurock.ogg"
```

Lorsque vous changez de musique, vous pouvez ajouter une clause fadeout, pour une transition en fondu entre l’ancienne musique et la nouvelle.

```
    play music "illurock.ogg" fadeout 1.0
```

La musique peut être arrêtée avec l’instruction stop music, qui peut également prendre en option la clause fadeout.

```
    stop music
```

Les effets sonores peuvent être jouée via l’instruction play sound.

```
    play sound "effect.ogg"
```

Ren’Py supporte plusieurs formats audio, mais le format [OGG Vorbis](http://fr.wikipedia.org/wiki/OGG_Vorbis) est conseillé. Tout comme les images, les fichiers audios doivent être placés dans le répertoire game.

## Créer des choix 

Pour faire un véritable Visual Novels, et non un simple diaporama, il faut que le joueur puisse effectuer des choix par exemple dans les dialogues. Plussieurs méthodes sont possible pour ajouter des interractions dans votre jeu.

### Menus, Labels et Sauts

L’instruction menu vous permet de présenter un choix au joueur

```
    s "Bien sûr, mais c'est quoi un \\"Visual Novel\\" ?"

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

Cet exemple montre comment les menus sont utilisés dans Ren’Py. L’instruction menu introduit un menu de jeu. Cette instruction est suivie d’un bloc de lignes, chacune de ces lignes consistent en une chaîne de caractères suivit de deux points. Ce sont les choix présentés au joueur. La choix doit être suivit d’un bloc d’une ou plusieurs instructions Ren’Py. Lorsque un choix est fait, les instructions le suivant sont parcourues.

Dans notre exemple, chaque choix du menu est suivit d’une instruction jump. L’instruction jump (saut) transfert le contrôle à un label défini par l’instruction label. Le code suivant ce label est alors parcouru.

Dans notre exemple au dessus, après la question de Sylvie, un menu contenant deux choix est présenté à l’utilisateur. Si l’utilisateur choisis « C’est une histoire avec des images. », la première instruction jump est parcourue, et le contrôle est transféré au label vn. Cela entraînera que la personnage « Moi » dira « C’est une histoire avec des images et de la musique. », après quoi le contrôle est transféré au label marry.

Les labels peuvent être définis dans n’importe quel fichier présent dans le répertoire game se terminant en .rpy. Peut importe le nom du fichier pour Ren’Py, seuls comptent les labels contenus dedans. Un label doit apparaître dans un seul fichier.

### Python et instructions if

Alors que des jeux simple (et même assez complexes) peuvent être faits uniquement avec des menus et des sauts, au bout d’un moment il devient nécessaire de stocker les choix de l’utilisateur dans des variables pour y accéder plus tard. C’est ce à quoi sert le support de python dans Ren’Py.

On peut accéder au support de python via deux moyens. Une ligne commençant par un dollar ($) est une ligne simple d’instruction python, tandis que le mot clé « python: » est utilisé pour introduire un bloc d’instructions python.

Python permet de stocker facilement des drapeaux selon les choix du joueurs. Il vous suffit d’initialiser le drapeau au début du jeu :

```
label start:
    $ bl\_game \= False
```

Vous pouvez ensuite changer le drapeau dans le code choisis via les menus :

```
label hentai:
`
    $ bl\_game \= True
    
    m "C'est un jeu coquin."
    s "Tu veux dire, un jeu pour les garçons ?"
    s "J'ai toujours voulu en faire un."
    s "Je vais le faire tout de suite !"
    
    jump marry
```

Et vérifiez le plus tard:

```
"C'est ainsi que nous sommes devenus une équipe de création de Visual Novels"
"Nous avons fait des jeux et pris plein de plaisir à les faire."

if bl\_game:
    "Enfin, à part pour pour le jeu pour garçon qu'elle a insisté qu'on fasse."

"Et un jour..."
```

Bien sûr, les variables pythons n’ont pas besoin d’être des simples True/False (Vrai/Faux). Elles peuvent être des valeurs pythons arbitraires. Elles peuvent être utilisées pour stocker le nom du joueur, un score, ou toute autre chose. Puisque Ren’Py inclus la possibilité d’utiliser l’ensemble du langage python, plein de choses sont possibles.
