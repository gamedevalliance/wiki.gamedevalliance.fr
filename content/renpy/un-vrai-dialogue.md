---
title: "Un vrai dialogue"
description: "Enrichissez vos dialogues en rajoutant des choix, des personnages et des commandes."
portail: renpy
menu:
  renpy:
    name: "Un vrai dialogue"
    parent: debuter
    weight: 2

---

Dans cette seconde partie, nous allons enrichir notre dialogue grâce à un système de personnages, des choix et quelques petites commandes.

## Créer un choix

Un visual novel est un jeu vidéo, pas simplement un texte qui défile sur un écran avec quelques images ! Ainsi, pour amener de l'interactivité et impliquer vos joueurs dans l'histoire que vous leur racontez, vous aurez sans doute besoin de présenter des choix au joueur et de créer des embranchements dans le script.

Un menu de choix se présente comme cela :

```python
menu:

    "Marvin" "Je voudrais créer..."

    "un jeu d'horreur !":

        jump horreur

    "une histoire d'amour !":

        jump romance
```
Vous avez tout d'abord "menu", l'instruction pour prévenir Ren'Py qu'il va falloir présenter un menu de choix, suivi d'un bloc de code. Dans ce bloc de code, vous pouvez indiquer le message à afficher en même temps que le menu (facultatif) puis les différents choix entre guillemets ( " ) suivis de deux points.

Une fois le menu affiché, il va falloir créer les embranchements spécifiques à chaque choix dans le script, nous allons les réaliser grâce aux labels !

## Les labels et les sauts

Souvenez-vous ! Vous avez déjà utilisé les labels dans votre script :

```python
label start:
```

Le `label start` permet en effet d'indiquer à Ren'Py où commence votre script. Il illustre bien à quoi servent les labels de manière générale : nommer un endroit précis du script pour pouvoir le retrouver ou y envoyer le joueur, *label* veut d'ailleurs dire "étiquette" en anglais.

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

(Vous noterez que, comme vu dans l'article précédent, il est possible d'écrire deux instructions `return` dans le script pour avoir plusieurs fins en fonction des actes du joueur)

Mais revenons à notre menu de choix :

```python
menu:

    "Marvin" "Je voudrais créer..."

    "un jeu d'horreur !":

        jump horreur

    "une histoire d'amour !":

        jump romance
```

Vous l'avez sans doute compris, les instructions `jump` permettent d'envoyer le joueur vers n'importe quel `label` situé dans votre script (qu'il soit situé avant ou après l'instruction `jump`), pour cela vous devez indiquer le nom du label sur lequel vous souhaitez envoyer le joueur.

Ainsi `jump horreur` renvoie sur `label horreur:`.

## Système de personnage

Pour vous faciliter le travail d'écriture des dialogues et vous permettre d’arrêter d'écrire en boucle le nom des mêmes personnages, Ren'Py propose un système qui ressemble à ça :

```python
define m = Character("Marvin", color="#ffc8c8")
define a = Character("Astride", color="#c8c8ff")
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

## Tags texte

Les tags texte permettent d'ajouter des petits twists à vos dialogues, par exemple modifier la taille d'une partie du texte, faire des pauses, mettre en gras... Les tags se présentent de cette manière `{TAG}`, certains sont accompagné d'une valeur `{TAG= valeur}` et/ou doivent être fermés avec `{/TAG}` .

Vous pouvez consulter la liste des tags sur la documentation anglaise, mais voici plusieurs exemples utiles dans notre cas :

```python
 m "Bienvenue dans mon {size=+10}super{/size} jeu \"fait maison\""
```

Premièrement le tag `{size}` va modifier la taille du texte jusqu'à ce qu'il soit fermé (par `{/size}`) . Il doit évidemment être accompagné d'une valeur qui peut être :`{size=+5}` et qui va agrandir la taille du texte de 5 pixels, ou `{size=-15}` qui va réduire la taille du texte de 15 pixels, et bien sûr `{size=24}` qui va définir la taille du texte sur 24 pixels.

```python
a "Génial un {i}visual novel{/i} !"
```

Deuxièmement le tag `{i}` va mettre en italique le texte jusqu'à ce qu'il soit fermé (par `{/i}`). Il existe également `{b}` pour mettre en gras et `{u}` pour souligner le texte (respectivement fermés par `{/b}` et `{/u}`).

```python
a "C'est un bon début{w}, mais tu sais quel genre d'histoire tu aimerais raconter ?"
```

Troisièmement le tag `{w}` est une pause dans votre texte. Le texte va s'afficher jusqu'à lui, puis le joueur devra cliquer pour que le reste du texte s'affiche. Un peu comme un second message de dialogue mais qui s'afficherait à la suite du premier.

```python
a "Très bonne idée, Ren'Py est tout à fait adapté pour une histoire terrifiante...{p}
Je vais t'aider grâce à un super tuto sur le wiki !"
```

Enfin, le tag `{p}` est à peu près identique au tag `{w}` mais plutôt que de continuer sur la même ligne, le texte va s'afficher sur un nouveau paragraphe.

{{< next "renpy/personnaliser.md" >}}