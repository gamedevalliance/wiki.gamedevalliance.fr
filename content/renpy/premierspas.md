---
title: "Premiers pas avec Ren'Py"
description: "Ren'Py est un moteur libre et gratuit permettant de créer des Visual Novels sur Windows, Linux, MacOS, Android et IOS."
portail: renpy
menu:
  renpy:
    name: "Premiers pas"
    parent: "Débuter dans Ren'Py"
    weight: 1

---

Le but de ce tutoriel est de permettre à un débutant de prendre en main Ren'Py. Beaucoup d'aspect du logiciel ne sont pas abordés, seulement les bases.

## Le lanceur Ren’Py

Avant de faire un jeu, vous devriez d’abord prendre le temps d’apprendre comment fonctionne le lanceur Ren’Py. Le lanceur vous permet de créer, de gérer et de lancer vos projets Ren’Py.

Pour commencer, vous voudrez sans doute [télécharger Ren’Py](https://renpy.org/latest.html).

Une fois le téléchargement de Ren’Py terminé, il faudra extraire le contenu de l’archive. Cela se fait généralement en double-cliquant dessus, ou en faisant un clic droit et en choisissant l’option « extraire ici » ou bien « Ouvrir ». Suivez ensuite les instructions.

{{< figure class="align-right" src="/images/renpy/Launcher.png" alt="" caption="Le launcher de Ren'Py" >}}

Une fois que Ren’Py est décompressé, il ne vous reste qu’à le lancer.

*   Sur GNU-Linux, lancer le via le fichier renpy.sh.
*   Sur Windows, lancer Ren’Py via le fichier renpy ou renpy.exe.
*   Sur Mac OS X, lancer le via le fichier renpy.

Une fois cela fait, le lanceur Ren’Py devrait tourner.

### Choisir et lancer un projet

Vous devriez d’abord regarder à quoi ressemble le jeu _La Question_. Pour faire cela, démarrer le lanceur Ren’Py et choisissez « La Question » sur la gauche. Puis « Lancer le projet » pour le lancer.

Vous pouvez voir la démo de Ren’Py en faisant la même chose, mais en choisissant « Tutoriel » au lieu de « La Question ».

### Créer un nouveau projet 

Pour créer un projet, choisissez « Créer un nouveau projet » depuis le lanceur. Le lanceur vous demandera alors de choisir un nom pour le projet. Puisque « the\_question » est déjà pris, vous allez devoir choisir autre chose, par exemple « Ma Question ». La lanceur va ensuite vous demande de choisir un thème de couleur pour le projet. Peu importe ce que vous choisissez à cet endroit, prenez quelque chose qui vous plaît. Vous serez redirigé-e à l’accueil du lanceur, avec votre nouveau projet sélectionné.

## Un jeu simple

```
label start:
    "Je vais lui demander..."

    "Moi" "Hum... est-ce que..."
    "Moi" "Est-ce que tu accepterais de m'aider à faire un Visual Novel ?"
    
    "Silence."
    "Elle est stupéfaite, puis..."
    
    "Sylvie" "Bien sûr, mais c'est quoi un \\"Visual Novel\\" ?"
```

Ceci est peut-être l’un des jeux Ren’Py les plus simples. Il ne contient aucune image ni rien de ce genre, mais montre une conversation entre les deux personnages.

Pour essayer cela, aller dans le lanceur et choisissez votre projet « Ma Question », et choisissez « script.rpy » sous « Éditer le fichier ». Ren’Py devrait vous demander de choisir un éditeur de texte, après quoi il téléchargera l’éditeur que vous aurez choisis. Quand cela sera fait, script.rpy s’ouvrira dans votre éditeur. Supprimez tout ce qui se trouve dans script.rpy, puisque nous allons tout faire à partir de rien, et vous n’avez donc pas besoin de ce qu’il y a là. Copiez l’exemple ci-dessus dans script.rpy, et sauvegardez le fichier.

Vous êtes maintenant prêt à lancer cet exemple. Retournez au lanceur, et choisissez « Lancer le projet ». Ren’Py va le démarrer. Remarquez comment, sans aucun travail supplémentaire de votre part, Ren’Py a ajouté des menus qui permet de charger et sauvegarder le jeu, et de changer des préférences multiples. Quand vous êtes prêt, cliquer sur « Lancer le projet », et jouer avec ce petit jeu d’exemple.

Cet exemple montre certaines des instructions les plus utilisées dans Ren’Py.

La première ligne est une instruction de label. Cette instruction est utilisée pour nommer un endroit dans le programme. Dans le cas présent, nous avons créé un label nommé start. Le label start est particulier, car c’est là où les scripts Ren’Py commencent à tourner lorsque l’utilisateur clique sur « Démarrer le Jeu » depuis le menu principal.

Les autres lignes sont des instructions de dialogue. La première est une chaîne de caractères (commençant par des guillemets doubles, contenant des caractères, et finissant par des guillemets doubles) sur une ligne avec rien d’autre, utilisée pour la narration, ou pour les pensées du personnage principal. La deuxième forme consiste en deux chaînes de caractères. Cela est utilisé pour les dialogues, la première chaîne étant le nom du personnage et la seconde, ce que le personnage dit.

Remarquez que toutes les instructions de dialogue sont indentées de quatre espaces. Ceci s’explique du fait qu’elles constituent un bloc de code pour l’instruction label. Dans Ren’Py, les blocs doivent être indentés par rapport aux lignes d’instructions auxquelles elles répondent, et toutes les lignes d’un même bloc doivent être indenté de la même manière.

Lorsque une chaîne de caractère contient des guillemets doubles, ces caractères doivent être précédés d’une barre oblique inversée (ou backslash (\\)). C’est le cas à la dernière ligne de notre exemple.

Si ce jeu simple ne va pas très loin, c’est un exemple qui montre combien il est facile d’obtenir quelque chose dans Ren’Py. Pour continuer à apprendre à utiliser Ren'Py, à ajouter des personnages, des images, des sons et des choix, nous vous invitons à lire notre [tutoriel niveau débutant]({{</* ref "renpy/tutorieldebutant.md" */>}}).

## Script de « The Question »

Vous pouvez voir le script complet de « The Question » [ici](http://www.renpy.org/doc/html/thequestion.html#thequestion). Il s'agit en fait d'un équivalent de notre [starter pack]({{</* ref "rpgmaker/starterpack.md" */>}}) pour RPG Maker, mais en très simple et pour Ren'Py.