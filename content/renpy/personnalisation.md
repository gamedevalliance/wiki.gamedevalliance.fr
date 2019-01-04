---
title: "Personnaliser l'interface de votre jeu"
description: "Modifiez facilement les fenêtres, les images et les icônes de votre jeu Ren'Py."
portail: renpy
menu:
  renpy:
    name: "Personnaliser l'interface"
    parent: progresser
    weight: 2
---

Cet article complet sur la personnalisation des fenêtres et icônes est divisé en trois catégories, allant des conseils les plus accesibles aux débutants, jusqu'à ceux destinés aux plus expérimentés.

## Configuration simple de l'interface

Certains petits éléments de l'interface peuvent facilement être modifiés, pour apporter une touche d'originalité à votre visual novel. Ce sont des changements légers qui ne nécessitent pas d'éditer le fichier `gui.rpy` !

### Changer la taille et la couleur 

La modification la plus évidente que vous puissiez faire, c'est la taille et la couleur de l'interface. Ren'Py vous permet de choisir ces paramètres lors de la création d'un projet, mais vous pouvez à tout moment cliquer sur "*Modifier l'interface GUI*" dans le lanceur pour revenir sur vos choix.

Lorsque vous modifiez l'interface graphique via le lanceur, Ren'Py vous demandera si vous souhaitez seulement générer à nouveau les images, ou mettre à jour le fichier `gui.rpy`. Les deux choix écraseront la plupart des images, et écraser `gui.rpy` supprimera les modifications apportées à ce fichier. Pensez donc à le faire avant toute autre personnalisation du fichier `gui.rpy`.

### Options.rpy

Dans le fichier `options.rpy` vous trouverez plusieurs variables qui influent sur l'interface graphique.

```python
define config.name = _("Les aventures d'Aurélien et Princesseuh")
```

Entrez ici le nom complet de votre jeu. Il sera utilisé dans le nom de la fenêtre et à chaque fois où le nom sera requis dans l'interface.

```python
define gui.show_name = True
```

Cette valeur doit être `False` pour masquer le titre du jeu et le numéro de version dans le menu principal. Utile lorsque le titre est présent dans l'image du menu principal.

```python
define config.version = "1.0"
```

Indiquez ici la version de votre jeu. Elle sera affichée à certains endroits de l'interface, et permettra à vos joueurs de vous indiquer avec quelle version ils ont trouvé un bug.

```python
define gui.about = _p("Réalisé par Nev.\n\nLes images sont de Phantou et Baéto.")
```

Entrez ici le texte qui apparaitra dans l'écran "A propos". Vous pouvez créer un nouveau paragraphe en sautant deux lignes, ou en écrivant `\n\n`.

### Changer les images de fond

Les images de l'interface se trouvent dans le dossier `gui`, que vous pouvez ouvrir depuis le lanceur. Les images de fond sont `main_menu.png` pour le menu principal, et `game_menu.png` pour le menu de jeu.

{{</* figure class="align-center" src="/images/renpy/gui1.jpg" alt="Menu principal" caption="Le menu principal, en changeant seulement l'image de fond." */>}}

### Icone d'application

L'icône d'application est l'image représentant votre jeu sur le bureau de Windows, le dock de macOS ou le tiroir d'applications de votre téléphone.

Cet icône peut être modifié en changeant l'image `window_icon.png` dans le dossier `gui`.

## Customisation de l'interface

L'étape suivante de la customisation de l'interface est de changer les couleurs, les polices et les images utilisées par le jeu. Un des objectifs que nous allons chercher à réaliser est d'obtenir une identité graphique cohérente entre les différents écrans du jeux, garder les mêmes boutons, la même police...

Beaucoup de ces modifications impliquent la modification de variables dans `gui.rpy`. Par exemple, pour augmenter la taille de la police pendant les dialogues, recherchez la ligne :

```
define gui.font_size = 22
```

Réduire ou augmenter la variable permettra de réduire ou d’agrandir la taille de la police :

```
define gui.font_size = 20
```

Certaines modifications dont nous allons parler modifient les fichiers images de votre jeu. Par conséquent, les modifications ne prendront effet que lorsque les fichiers image seront mis à jour, ce qui peut être effectué en choisissant "Modifier l'interface graphique" dans le programme de lancement et en lui demandant de régénérer les fichiers image. (Notez toutefois que cela écrasera tous les fichiers image que vous avez déjà modifiés.)

### Dialogue

Il existe un certain nombre de personnalisations relativement faciles qui peuvent être effectuées pour changer la façon dont les dialogues sont affichés. Tout d'abord pour changer la fenêtre de texte :

- gui/textbox.png

Ce fichier contient l’arrière-plan de la fenêtre de texte. Notez que le texte n’est affiché que dans les 60% centraux de l’écran, avec une bordure de 20% de chaque côté.

De plus, un certain nombre de variables peuvent être personnalisées pour modifier le dialogue :

- Pour modifier la couleur du texte :  `gui.text_color` = "#402000" 

-  Pour définir la police utilisée pour le texte de dialogue, les menus, les entrées et tout autre texte du jeu : `gui.text_font` = "NomDeVotrePolice.ttf" (Note :  Le fichier de la police `.tff` doit être mis dans le dossier du jeu)

-  Pour définir la taille des textes de dialogue : `gui.text_size` = 33

-  Pour la taille des noms de personnages : `gui.name_text_size` = 45

-  Et enfin la hauteur de la fenêtre de dialogue : `gui.textbox_height` = 278 (Note : Généralement il s'agit de la hauteur du fichier `gui/textbox.png` )

Par défaut, l’étiquette du nom du personnage utilise la couleur accentuée (Dont nous reparlerons plus tard), mais celle-ci peut très bien être modifiée pour chaque personnage :

```
define e = Character("Eileen", who_color="#104010")
```

![_images/textbox.png](https://www.renpy.org/doc/html/_images/textbox.png)

Exemple de fenêtre de dialogue customisée.

![_images/easy_say_screen.jpg](https://www.renpy.org/doc/html/_images/easy_say_screen.jpg)

Exemple de dialogue customisé en modifiant la fenêtre de dialogue et en utilisant les variables présentées au dessus.

### Choice Menus

The choice screen is used by the menu statement to display choices to the player. Again, there  are some relatively easy customizations that can be performed on the choice screen. The first are the two image files:

- gui/button/choice_idle_background.png

  This image is used as the background of choice buttons that are not focused.

- gui/button/choice_hover_background.png

  This image is used as the background of choice buttons that are focused.

By default, text is placed in the central 75% of these images. There are also a couple of variables that control the color of the text in choice buttons.

-  define `gui.choice_button_text_idle_color` = '#888888'

  The color used for the text of unfocused choice buttons. 

-  define `gui.choice_text_hover_color` = '#0066cc'

  The color used for the text of focused choice buttons. 

These should suffice for simple customization, where the size of the images does not need to be changed. For more complex customizations, check out the section on buttons, below.

![_images/choice_idle_background.png](https://www.renpy.org/doc/html/_images/choice_idle_background.png)

An example gui/button/idle_background.png image.

![_images/choice_hover_background.png](https://www.renpy.org/doc/html/_images/choice_hover_background.png)

An example gui/button/choice_hover_background.png image.

![_images/easy_choice_screen.jpg](https://www.renpy.org/doc/html/_images/easy_choice_screen.jpg)

An example of the choice screen, as customized using the images and variable settings given above.

## Customisation de l'interface avancée

Une customisation plus avancée de l'interface est possible en modifiant le fichier `screens.rpy` , voir en supprimant tout son contenu pour le modifier à votre convenance. Voilà quelques pistes pour commencer :

### Styles

Les styles et les propriétés de styles définissent comment les différentes fênetres s'affichent. Pour savoir quel style utilisent une fenêtre, passez votre souris dessus et utilisez le raccourci `ALt+I` pour lancer l'inspecteur de style. Une fois le nom du style utilisé connu, vous pouvez le modifier grâce à un appel de style.

Par exemple, disons que nous avons complétement péter un cable en écrivant cette documentation, et que nous souhaitons surligner en rouge tout les dialogues. Il nous suffit de passer notre souris sur le texte, utiliser `ALT+I` , voir que le style utilisé est `say_dialogue`. Nous pouvons donc ajouter à la fin du document `screens.rpy` (ou n'importe où dans `options.rpy`) l'appel de style suivant :  

```
style say_dialogue:
    outlines [ (1, "#f00", 0, 0 ) ]
```

Enormément de personnalisations sont possible uniquement en utilisant des appels de style.

### Ecrans - Navigation

L'étape suivante dans la customisation est de modifier les écrans. Ainsi un des écrans les plus important est l'écran de navigation, qui apparait à la fois dans le menu principal et celui en jeu. Cet écran peut être modifié pour ajouter d'avatage de bouton (soit sur un des menus, soit sur les deux)

Exemple :

```
screen navigation():

    vbox:
        style_prefix "navigation"

        xpos gui.navigation_xpos
        yalign 0.5

        spacing gui.navigation_spacing

        if main_menu:

            textbutton _("Start") action Start()

            textbutton _("Prologue") action Start("prologue")

        else:

            textbutton _("Codex") action ShowMenu("codex")

            textbutton _("History") action ShowMenu("history")

            textbutton _("Save") action ShowMenu("save")

        textbutton _("Load") action ShowMenu("load")

        textbutton _("Preferences") action ShowMenu("preferences")

        if _in_replay:

            textbutton _("End Replay") action EndReplay(confirm=True)

        elif not main_menu:

            textbutton _("Main Menu") action MainMenu()

        textbutton _("About") action ShowMenu("about")

        textbutton _("Extras") action ShowMenu("extras")

        if renpy.variant("pc"):

            textbutton _("Help") action ShowMenu("help")

            textbutton _("Quit") action Quit(confirm=not main_menu)
```

Vos joueurs auront alors accés à l'écran prologue depuis le menu principal, à l'écran codex depuis le menu en jeu, et à un écran extras depuis les deux menus.

### Ecran - Menu en jeu

Vous pouvez réaliser vos propres menus. Ces écrans peuvent utiliser l'écran `game_menu` pour afficher un titre et une fenètre scrollable. Voici un exemple de menu en jeu minimaliste :

```
screen codex():

    tag menu

    use game_menu(_("Codex"), scroll="viewport"):

        style_prefix "codex"

        has vbox:
            spacing 20

        text _("{b}Mechanical Engineering:{/b} Where we learn to build things like missiles and bombs.")

        text _("{b}Civil Engineering:{/b} Where we learn to build targets.")
```

 De toute évidence, un codex fonctionnel devrait être plus élaboré que cela.

Notez la ligne `tag menu`. Cette ligne est importante car elle masque d'autres écrans de menu lorsque le codex est affiché. Sans cela, il serait difficile de basculer entre les différents menus.

### Ecrans - Cliquez pour continuer

Un écran qui est généralement présent dans les visual novels est le "cliquez pour continuer". Il s’agit d’un écran qui s’affichera à la fin de l’affichage du texte. Voici un exemple simple:

```
screen ctc():

    frame:
        at ctc_appear
        xalign .99
        yalign .99

        text _("(click to continue)"):
            size 18

transform ctc_appear:
    alpha 0.0
    pause 5.0
    linear 0.5 alpha 1.0
```

Cet écran "Cliquez pour continuer" particulier utilise une transformation pour afficher le cadre après 5 secondes. Il est judicieux de retarder les animations de quelques secondes afin de donner à Ren'Py le temps de prévoir et de charger des images.

### Refonte complète de l'interface graphique

Les utilisateurs expérimentés peuvent remplacer complétement, ou presque, leur fichier `screens.rpy`. Pour cela, il est conseillé d'utiliser l'appel `gui.init()` pour réinitialiser les styles, mais après ça vous êtes libre de faire ce que vous souhaitez !

Pensez tout de mêmes à inclure tout les "écrans spéciaux", pour être sûr que vos joueurs puissent toujours accéder à toutes les fonctionnaltiés de base de Ren'Py.