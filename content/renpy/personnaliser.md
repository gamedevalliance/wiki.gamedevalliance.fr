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

Dans cette troisième partie, nous allons remédier à l'austérité de notre script. Parce que des dialogues sur un fond noir sans musique ce n'est pas vraiment très funky... Ajoutons-y un peu de personnalité :

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

    a "Très bonne idée, Ren'Py est tout à fait adapté pour une histoire terrifiante...{p}
    Je vais t'aider grâce à un super tuto sur le wiki !"

    scene black
    with fade
return

label romance:

    a "Un grand classique des visuals novels Ren'Py, la romance étudiante...{p}
    Je vais t'aider grâce à un super tuto sur le wiki !"

    scene black
    with fade
return
```

## Afficher des images

Premièrement enregistrez ces deux images et placez les dans le dossier de votre jeu, dans le sous-dossier `images` :

![Image de décors](/images/renpy/debutdututo.jpg)

![Image de personnage](/images/renpy/astride.jpg)

Vous pourrez ensuite appeler ces images dans le script par leurs noms sans leur suffixe (`.png` ou `.jpg`)

### Décors

```python
label start:
    scene debutdututo
    with fade
```

Ainsi, dès le début du label `start` nous allons ajouter un décors grâce à l'instruction `scene` . Ici nous allons définir comme décors l'image `debutdututo.jpg` , nous écrivons donc `scene debutdututo` !

Afin de rendre l'apparition de l'image un peu moins brutale, nous allons ajouter une transition grâce à l'instruction `with`. La transition `fade` est très bien pour les décors, `dissolve` quant à elle fonctionne bien sur les personnages.

```python
	scene black
	with fade
return
```
A la fin de notre jeu, pour réaliser un fondu au noir, nous aurions pu créer une image toute noire et l'afficher via l'instruction `scene` ... Mais Ren'Py permet déjà d'afficher un fond noir grâce à l'instruction `scene black` , pratique !

### Personnages

```python
show astride
with dissolve
```

L'instruction `show` va vous permettre d'afficher vos personnages, ici elle est associé à l'image `astride.jpg` et à la transition `dissolve`.

Pour afficher plusieurs personnages vous pouvez indiquer la position des différents personnages tel que :

```python
show astride at right
with dissolve
```
Ici `right` pour droite peut être remplacé par `left` , `top` ou `bottom` . Ne pas mettre d'instruction `at` placera l'image au centre de l'écran.

Enfin l'instruction `hide nomdelimage` permet de faire disparaître le personnage.

## Jouer une musique

L'instruction pour jouer une musique est `play music` , on peut également jouer un simple bruitage avec `play sound`, suivi du nom du fichier sonore (celui-ci doit être au format `.ogg`, `.mp3` ou `.wav` ) et vous pouvez ajoutez une transition grâce à `fadein` .

```python
play music "mozart.ogg" fadein 1.0
play sound "woof.mp3"
play music [ "a.ogg", "b.ogg" ] #Ici la musique a.ogg sera jouée, puis la musique b.ogg
```

Les channels `music` et `sound` sont inclus de base dans votre jeu, le joueur pourra modifier leur volume dans les options indépendamment du volume général du jeu. Si vous souhaitez ajouter un channel sonore à votre jeu (par exemple pour les bruits d'ambiances) il faut d'abord définir ce channel, puis ensuite utiliser l'instruction `play LENOMDUCHANNEL` :

```python
define renpy.music.register_channel(ambiance)
label start :
    play ambiance "punch.wav"
```

Pour arrêter une musique, vous devez utiliser l'instruction `stop` suivie du nom du channel sonore et potentiellement d'une transition `fadeout`. Par exemple pour un son et une musique :

```python
stop sound
stop music fadeout 1.0
```

{{< end "/content/renpy.md" >}}