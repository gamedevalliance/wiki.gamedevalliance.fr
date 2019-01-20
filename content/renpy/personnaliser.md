---
title: "Personnaliser votre jeu"
description: "Ajoutons des images et de la musique à votre premier script !"
portail: renpy
menu:
  renpy:
    name: "Personnaliser votre jeu"
    parent: debuter
    weight: 3

---

Dans ce troisième article, faisant suite à ["Un vrai dialogue"]({{< ref "/renpy/dialogue.md" >}}), nous allons remédier à l'austérité de notre script. Parce que des dialogues sur un fond noir sans musique ce n'est pas vraiment très funky... Ajoutons y un peu de personnalité :

```python
define m = Character("Marvin", color="#ffc8c8")
define a = Character("Astride", color="#c8c8ff")

label start:
    play music "illurock.opus"
    scene debutdututo
    with fade

    m "Bonjour !"
    m "Bienvenue dans mon {size=+10}super{/size} jeu \"fait maison\""

    show astride
    with dissolve
    a "Génial un {i}visual novel{/i} !"
    a "C'est un bon début{w}, mais tu sais quel genre d'histoire tu aimerais raconter ?"

    menu:

        m "Je voudrais créer..."

        "un jeu d'horreur !":

            jump horreur

        "une histoire d'amour !":

            jump romance

label horreur:

    a "Très bonne idée, Ren'Py est tout à fait adapté pour une histoire térrifiante...{p}
    Je vais t'aider grâce à un super tuto sur le wiki !"

    scene black
    with dissolve
return

label romance:

    a "Un grand classique des visuals novels Ren'Py, la romance étudiante...{p}
    Je vais t'aider grâce à un super tuto sur le wiki !"

    scene black
    with dissolve
return
```

## Afficher des images

Premièrement enregistrez ces deux images et placez les dans le dossier de votre jeu, dans le sous-dossier `image` :



## Jouer une musique

## Modifier option.rpy

