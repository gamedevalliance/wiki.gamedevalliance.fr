---
title: "Questions fréquentes sur Ren'Py"
description: "Vous débutez sur Ren'Py ? Nous pouvons sûrement vous aider. Voici les réponses à toutes les questions que peuvent se poser les débutants et débutantes."
portail: renpy
---

Cette page recense diverses questions que se posent régulièrement les débutants et débutantes sur notre [serveur Discord](https://discord.gg/RrBppaj). Si vous ne trouvez pas l'information dont vous avez besoin, n'hésitez pas à nous demander de l'aide.

## Personnages

### Mon image ne s'affiche pas

Si une silhouette grise s'affiche à la place de votre personnage, ou que votre fond ne s'affiche pas correctement, vous avez peut-être mis une majuscule dans votre commande. Si votre image s'appelle `Astride.png`, vous pourriez être tenté·e d'écrire :

```python
show Astride
```

Mais en réalité, il faut écrire :

```python
show astride
```

Et ce, même si le fichier d'origine contient des majuscules ! Pour produire le nom final des images, Ren'Py prend tous les fichiers présents dans le dossier `images` (ainsi que tous ses éventuels sous-dossiers), retire l'extension `.png` ou `.jpg` et transforme le reste en minuscules.

- [Documentation](https://www.renpy.org/doc/html/displaying_images.html#images-directory) des images

### Afficher un personnage sur le côté

Pour afficher un personnage à gauche ou à droite, on utilise `at` suivi d'un transform :

```python
show astride at left
show marvin at right
```

Pour le glisser ailleurs ensuite, on peut utiliser la transition `move` :

```python
show astride at center
with move
```

En plus de `left`, `right` et `center`, il existe d'autres transforms par défaut ([liste](https://www.renpy.org/doc/html/transforms.html)) pour placer vos personnages de différentes façons. Vous pouvez également créer vos propres transforms pour déplacer vos personnages plus précisément, les agrandir, etc. [Voir la documentation.](https://www.renpy.org/doc/html/atl.html)

## Dialogues

### Afficher un message aléatoire

On peut sélectionner un élément aléatoire d'une liste avec `renpy.random.choice`. La particularité intéressante de `renpy.random` est qu'elle est compatible avec le *rollback* : le résultat généré à un moment donné sera toujours le même, même si vous revenez en arrière dans le jeu !

```python
$ random_text = renpy.random.choice(["à bientôt", "reviens vite !", "tu vas me manquer !"])
a "Au revoir, [random_text]"
```

Le défaut de cette solution est que la variable `random_text` contiendra ce que renvoie `renpy.random.choice`, c'est-à-dire une seule des trois possibilités. La variable contiendra donc toujours le même texte si on la lit dans plusieurs dialogues. Voici une variante :

```python
$ random_texts = ["à bientôt", "reviens vite !", "tu vas me manquer !"]
$ a("Au revoir, " + renpy.random.choice(random_texts))
```

Pour rappel, cette écriture est possible car `perso "texte"` équivaut à `$ perso("texte")` ([documentation](https://www.renpy.org/doc/html/statement_equivalents.html)). Ici, le texte aléatoire est choisi au moment du dialogue, ainsi la variable `random_texts` contient toujours la liste des possibilités et peut être réutilisée plus tard.

- [Documentation](https://www.renpy.org/doc/html/other.html#renpy-random) de `renpy.random`

### Afficher le message précédent dans un choix

Une méthode correcte, mais redondante serait d'écrire ceci :

```python
m "Où va-t-on ?"
menu:
    m "Où va-t-on ?"
    "Chez moi":
    "Chez toi":
```

Ce n'est pas très pratique, et en plus la supercherie se verra si votre texte défile lettre par lettre. Il vaut mieux utiliser `extend`, un nom de personnage spécial qui répète le message précédent suivi du tag `{fast}`, qui affiche ce qui le précède instantanément. Pour faire simple, il s'utilise ainsi : 

```python
show eileen triste
e "Parfois, je suis triste."
show eileen heureuse
extend " Et d'autres fois tout va bien !"
```

Vous pouvez l'utiliser dans votre menu ainsi :

```python
m "Où va-t-on ?"
menu:
    extend ""
    "Chez moi":
    "Chez toi":
```

- [Documentation](https://www.renpy.org/doc/html/dialogue.html#special-characters) des personnages spéciaux
