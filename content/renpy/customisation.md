---
title: "Customiser l'apparence de votre jeu"
description: "Cet article complet vous permettra d'apprendre à modifier toutes les fénêtres et icones de votre jeu Ren'Py."
portail: renpy
menu:
  renpy:
    name: "Costomiser l'apparence de votre jeu"
    parent: progresser
    weight: 2

---

Cet article complet sur la customisation de l'apparences des fenêtres et icones Ren'Py est directement traduit de la documentation officielle en anglais. Il est conseillé de maitriser déjà les bases du logiciel, cela dit cet article est divisé en trois catégories regroupant les conseils les plus accesibles aux débutants juqu'aux conseils déstinés aux plus expérimentés d'entres vous.

## Simples modifications de l'interface

Certains petits éléments de l'interface peuvent facilement être modifiés et apporteront une vraie touche d'originalité même pour les visual novels les plus simples. Ces modifications changent légérement l'interface, sans la changer drastiquement et surtout ne nécéssite pas d'éditer le fichier `gui.rpy` !

### Changer la taille et la couleur 

La modification la plus évidente de l'interface graphique que vous puissiez faire, c'est modifier la taille et la couleur de celle ci. Ren'Py vous permet de modifier ces paramètres lors de la création d'un projet, mais vous pouvez à tout moment cliquez sur *"Change/Update GUI"* dans le lanceur pour revenir sur vos choix.

Lorsque vous modifiez l'interface graphique via le lanceur, Ren'Py vous demandera si vous souhaitez simplement modifier le programme de lancement ou mettre à jour le fichier gui.rpy. Les deux choix écraseront la plupart des images et écraser gui.rpy supprimera les modifications apportées à ce fichier.

Par conséquent, pensez donc à le faire avant toute autre personnalisation du fichier `gui.rpy`.

Ren'Py vous demandera la résolution par défaut du projet, puis le thème de couleurs à utiliser. Une fois que vous avez sélectionné ceux-ci, l'interface graphique sera mise à jour pour s'y adapter.

### `Options.rpy`

Dans le fichier `options.rpy` vous trouverez plussieurs variables qui influent sur l'interface graphique.

- `config.name`

  Entrez ici le nom complet de votre jeu. Celui-ci sera utilisé pour le nom de la fenêtre et pour chaque fois où le nom de votre jeu sera requis dans l'interface.

- `gui.show_name`

  Cette valeur doit être `False` pour masquer le titre du jeu et le numéro de version dans le menu principal. (Généralement le titre est présent dans l'image du menu principal.)

- `config.version`

   Indiquez ici la version de votre jeu. Elle sera indiqué à certains endroits de l'interface et permettra à vos joueurs de vous indiquez avec quelle version ils ont trouvé tel ou tel bugs.

- `gui.about`

  Entrez ici le texte qui apparaitra dans l'écran "A propos". Si vous souhaitez écrire plussieurs paragraphes, vous pouvez revenir à la ligne avec la commande `\n\n`.

Voici un exemple de fichier `Options.rpy` :

```
define config.name = _('Les aventures d'Aurélien et Princesseuh)

define gui.show_name = False

define config.version = "1.0"

define gui.about = _("Réalisé par Nev.\n\nLes images sont de Phantou et Baéto.")
```

### Changer les images de fond des menus

Les images utilisées par l'interface peuvent être trouver dans le dossier `game/gui`, que vous pouvez ouvrir en cliquant sur "Open Directory: gui" dans le lanceur. Les fichiers qui vous intéressent sont :

- `gui/main_menu.png` : L'image qui sera utilisée sur le menu principal.
- gui/game_menu.png : L'image qui sera utilisée dans le menu du jeu.

{{</* figure class="align-center" src="/images/renpy/gui1.jpg" alt="Menu principal" caption="Le menu principal, en changeant seulement l'image de fond." */>}}

### Icone d'application

L'icône d'application est l'image représentant votre application que ce soit sur le bureau de Windows, le dock de MacOS ou le tiroir d'applications de votre téléphone.

Cette icône peut être modifié en changeant l'image gui/window_icon.png (sans modifier le nom du fichier)

## Customisation de l'interface intermédiaire

(En cours de traduction)

## Refonte avancée de l'interface

(En cours de traduction)