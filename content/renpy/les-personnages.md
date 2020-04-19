---
title: "Les personnages"
description: "Définissez vos personnages dans Ren'Py pour être plus efficace et choisir leur couleur."
portail: renpy
menu:
  renpy:
    parent: cours1
    weight: 2

---

Tout à l'heure, nous avons vu que pour écrire le nom du personnage qui parle, on écrit ceci :

```python
"Marvin" "J'aimerais créer un \"visual novel\"."
```

Mais devoir recopier `"Marvin"` à chaque ligne risque bien vite de devenir ennuyeux. C'est pourquoi on va déclarer notre personnage et lui donner un petit nom de raccourci, ici `m`. Ecrivez ceci tout en haut de votre script :

```python
define m = Character("Marvin", color="#ffc8c8")
```

Comme vous le voyez, on peut aussi préciser la couleur du nom quand il est affiché en jeu. Cette valeur qui commence par un `#` est un code hexadécimal, aussi utilisé dans le webdesign ou les logiciels de graphisme. `#ffc8c8` correspond à un rouge pâle, mais vous pouvez choisir votre propre couleur en cherchant "sélecteur de couleur" sur Google par exemple.

{{< figure src="/images/renpy/colorpicker.png" caption="Le sélecteur de couleur de Google." >}}

Maintenant que le personnage est défini, on peut écrire les dialogues plus rapidement !

```python
define m = Character("Marvin", color="#ffc8c8")
define a = Character("Astride", color="#c8c8ff")

label start:
    m "J'aimerais créer un \"visual novel\"."
    m "Mais je ne sais pas par où commencer..."
    a "Je peux t'aider si tu veux !"
```

{{< figure src="/images/renpy/couleurdunom.png" alt="Screenshot du projet" caption="Le nom est bel et bien rouge pâle." >}}

Dans la prochaine partie, nous allons enrichir le jeu avec des illustrations et des musiques.

{{< next "renpy/images-et-sons.md" >}}