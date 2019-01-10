---
title: "Un vrai dialogue"
description: "Enrichissez vos dialogues en rajoutant des choix, des personnages et des labels."
portail: renpy
menu:
  renpy:
    name: "Un vrai dialogue"
    parent: debuter
    weight: 2

---

Dans ce second article, faisant suite à ["Votre premier projet !"]({{< ref "/renpy/premierprojet.md" >}}), nous allons enrichir notre dialogue grâce à un menu de choix, accélérer son écriture grâce au système de personnage et découvrir les labels. Voilà à quoi ressemblera notre script à la fin du tuto :

```python
define m = Character(_("Marvin"), color="#ffc8c8")
define a = Character(_("Astride"), color="#c8c8ff")

label start:

    m "Bonjour !"
    m "Bienvenue dans mon super jeu \"fait maison\""

    a "Génial un visual novel !"
    a "C'est un bon début, mais tu sais quel genre d'histoire tu aimerais raconter ?"

    menu:

        m "Je voudrais créer..."

        "un jeu d'horreur !":

            jump horreur

        "une histoire d'amour !":

            jump romance

label horreur:

    a "Très bonne idée, Ren'Py est tout à fait adapté pour une histoire terrifiante..."
    a "Je vais t'aider grâce à un super tuto sur le wiki !"

return

label romance:

    a "Un grand classique des visuals novels Ren'Py, la romance étudiante..."
    a "Je vais t'aider grâce à un super tuto sur le wiki !"

return
```

## Créer un choix

Un visual novel est un jeu vidéo, pas simplement un texte qui défile sur un écran avec quelques images :) Ainsi, pour amener de l'interactivité et impliquer vos joueurs dans l'histoire que vous leur racontez, vous aurez sans doute besoin de présenter des choix au joueur et de créer des embranchements dans le script.

Un menu de choix se présente comme cela :

```python
menu:

    "Marvin" "Je voudrais créer..."

    "un jeu d'horreur !":

        jump horreur

    "une histoire d'amour !":

        jump romance
```
Vous avez tout d'abord "menu" , l'instruction pour prévenir Ren'Py qu'il va falloir présenter un menu de choix, suivi d'un bloc de code. Dans ce bloc de code, vous pouvez indiquer le message à afficher en même temps que le menu (facultatif) puis les différents choix entre croches ( " ) suivis de deux points.

Une fois le menu affiché, il va falloir créer les embranchements dans le script spécifique à chaque choix, nous allons les réaliser grâce aux labels !

## Les labels et les sauts

Souvenez-vous ! Vous avez déjà utilisé les labels dans votre script :

```python
label start:
```

Le `label start` permet en effet d'indiquer à Ren'Py où commence votre script. Il illustre bien à quoi servent les labels de manière générale : nommer un endroit précis du script pour pouvoir le retrouver / y envoyer le joueur, label veut d'ailleurs dire "étiquette" en anglais.

Ainsi, l'instruction `label` doit s'accompagner d'un nom : si `start` est prédéfini par Ren'Py, vous pouvez nommer librement vos autres labels, mais deux labels ne peuvent pas avoir le même nom. Dans notre exemple, nous avons créé un label `horreur` et un label `romance` pour coller avec les deux choix possibles et créer leurs embranchements dans le script :

```python
label horreur:

    "Astride" "Très bonne idée, Ren'Py est tout à fait adapté pour une histoire terrifiante..."
    "Astride" "Je vais t'aider grâce à un super tuto sur le wiki !"

return

label romance:

    "Astride" "Un grand classique des visuals novels Ren'Py, la romance étudiante..."
    "Astride" "Je vais t'aider grâce à un super tuto sur le wiki !"

return
```

(Vous noterez que, comme vu dans l'article précédent, il est possible d'écrire deux instructions `return` dans le script pour avoir plusieurs fins en fonction des actes du joueur ;) ) 

Mais revenons à notre menu de choix :

```python
menu:

    "Marvin" "Je voudrais créer..."

    "un jeu d'horreur !":

        jump horreur

    "une histoire d'amour !":

        jump romance
```

Vous l'avez sans doute compris, les instructions `jump` permettent d'envoyer le joueur vers n'importe quel `label` situé dans votre script (qu'il soit situé avant ou après l'instruction `jump`) pour cela vous devez indiqué le nom du label sur lequel vous souhaitez envoyer le joueur.

Ainsi `jump horreur` renvoie sur `label horreur:`.

## Système de personnage

Pour vous faciliter le travail d'écriture des dialogues et vous permettre d’arrêter d'écrire en boucle le nom des mêmes personnages, Ren'Py propose un système qui ressemble à ça :

```python
define m = Character(("Marvin"), color="#ffc8c8")
define a = Character(("Astride"), color="#c8c8ff")
```

L'instruction `define` permet de définir un raccourci (exemple : `m`) à un personnage ( `character`), puis vous pouvez définir les caractéristiques par défaut de ce personnage comme son nom (exemple : `("Marvin")`) et la couleur de son nom dans les dialogues (exemple : `color="#ffc8c8"`)

Il vous suffira alors d'écrire le raccourci avant un dialogue pour que Ren'Py affiche le nom complet du personnage dans la couleur que vous avez définie. Ainsi le dialogue :

```python
    "Marvin" "Bonjour !"
    "Marvin" "Bienvenue dans mon super jeu \"fait maison\""

    "Astride" "Génial un visual novel !"
    "Astride" "C'est un bon début, mais tu sais quel genre d'histoire tu aimerais raconter ?"
```

Devient :

```python
    m "Bonjour !"
    m "Bienvenue dans mon super jeu \"fait maison\""

    a "Génial un visual novel !"
    a "C'est un bon début, mais tu sais quel genre d'histoire tu aimerais raconter ?"
```

***Article suivant : [Personnaliser le jeu]({{< ref "/renpy/personnaliser.md" >}})***
