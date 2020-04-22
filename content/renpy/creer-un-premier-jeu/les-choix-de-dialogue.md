---
title: "Les choix de dialogue"
description: "Enrichissez vos dialogues en rajoutant des choix et des embranchements d'histoire."
portail: renpy
menu:
  renpy:
    parent: cours1
    weight: 4

---

Il ne reste plus qu'une chose avant que vous ne puissiez réellement créer un petit jeu par vous-même : les choix de dialogue. C'est important dans un visual novel pour amener de l'interactivité et impliquer vos joueurs dans l'histoire que vous leur racontez !

![Screenshot des choix en jeu](/images/renpy/choix.png)

## Créer un menu

Un menu de choix se présente ainsi :

```python
menu:
    m "Je voudrais créer..."
    "Un jeu d'horreur !":
        jump horreur
    "Une histoire d'amour.":
        jump romance
```

Notez le décalage (ou indentation) après `menu:`, qui montre que toutes les lignes suivantes font partie d'un nouveau bloc de code.

Le premier texte est facultatif, et s'affiche en même temps que le menu de choix. Puis les différents choix sont écrits entre guillemets `"` et suivis de deux points `:`. Vous aurez peut-être remarqué l'indentation après chaque choix : c'est parce que chacun d'entre eux introduit un nouveau bloc de code qui décrit ce qui se passe lorsqu'on le choisit.

Je vous explique juste après ce que signifie l'instruction `jump`. Mais tout d'abord, nous allons créer les embranchements spécifiques à chaque choix, et ce grâce aux labels !

## Les labels et les sauts

Souvenez-vous ! Vous avez déjà utilisé un label dans votre script :

```python
label start:
```

Le `label start` permet en effet d'indiquer à Ren'Py où commence votre jeu. Il illustre bien à quoi servent les labels : nommer un endroit précis du script, pour pouvoir le retrouver et y envoyer le joueur. Label veut d'ailleurs dire "étiquette" en anglais.

Ainsi, l'instruction `label` doit s'accompagner d'un nom. `start` est prédéfini par Ren'Py, mais vous pouvez nommer librement vos autres labels. Dans notre exemple, nous allons créer un label `horreur` et un label `romance` pour coller avec les deux choix possibles et créer leurs embranchements :

```python
label horreur:
    a "Très bonne idée, Ren'Py est tout à fait adapté pour une histoire terrifiante !"

label romance:
    a "Un grand classique des visual novels, la romance étudiante..."
```

Revenons maintenant à notre menu de choix :

```python
define m = Character("Marvin", color="#ffc8c8")
define a = Character("Astride", color="#c8c8ff")

label start:
    m "J'aimerais créer un \"visual novel\"."
    m "Mais je ne sais pas par où commencer..."
    a "Je peux t'aider si tu veux !"
    menu:
        m "Je voudrais créer..."
        "Un jeu d'horreur !":
            jump horreur
        "Une histoire d'amour.":
            jump romance

label horreur:
    a "Très bonne idée, Ren'Py est tout à fait adapté pour une histoire terrifiante !"

label romance:
    a "Un grand classique des visual novels, la romance étudiante..."
```

Vous l'avez sans doute compris, l'instruction `jump` permet d'envoyer le joueur vers n'importe quel `label` situé dans votre script. Ainsi `jump horreur` envoie le joueur au `label horreur`.

Les sauts sont très utiles étant donné qu'en temps normal, Ren'Py lit le script de haut en bas. Dans un jeu à embranchements, nous avons besoin de court-circuiter cet ordre de lecture en envoyant le joueur à des endroits précis du script, et c'est pour cela qu'on utilise l'instruction `jump`.

D'ailleurs, si vous testez le jeu, vous remarquerez qu'en choisissant le jeu d'horreur, Ren'Py va lire le `label horreur`, mais aussi le `label romance` puisqu'il est situé juste à la suite ! Maintenant que vous savez utiliser les jumps et les labels, je ne doute pas que vous parviendrez à régler ce problème.

Le cours est bientôt terminé ! Dans la dernière étape, nous allons ajouter des fins au jeu et l'exporter pour le publier.

{{< next "renpy/creer-un-premier-jeu/ajouter-des-fins.md" >}}