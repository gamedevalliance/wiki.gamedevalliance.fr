---
title: "Aide-mémoire"
description: "Cet aide-mémoire pour Ren'Py vous permet de retrouver facilement des raccourcis clavier, des règles de syntaxe et des commandes."
portail: renpy
menu:
  renpy:
    parent: general
    weight: 2
---

Cet aide-mémoire vous permettra de retrouver facilement des raccourcis clavier, des règles de syntaxe et des commandes. Si vous repérez que quelque chose manque ou n'est plus à jour, n'hésitez pas à {{< editpage "modifier la page" >}}.

## Raccourcis clavier

Ces quelques raccourcis clavier vous permettront de gagner du temps. Les raccourcis nécessitent pour la plupart d'entre eux que l'option `config.developer` soit sur `True` pour fonctionner.

- `Maj+E` ouvre le fichier `script.rpy` dans votre éditeur préféré.
- `Maj+D` ouvre le menu pour développeur, qui peut s'avérer utile.
- `Maj+R` recharge le script, pour prendre en compte les éventuelles modifications que vous y avez apportées. Notez que l'état du jeu et les valeurs actuelles des variables sont préservées.
- `Maj+I` lance l'inspection du code.

## Structure du langage

Les blocs de code sont espacés de 4 caractères par rapport au bloc de code parent. Les [tabulations ↹](http://fr.wikipedia.org/wiki/Touche_tabulation) sont interdites.

```python
# Les lignes commençant par # sont des commentaires.
condition1:
    # Les : indiquent que ce qui suit est un bloc
    # qui sera parcouru si condition1 est vrai.
    # Le contenu du bloc est indenté de 4 espaces.
    condition2:
        # On se décale à nouveau de 4 espaces.
condition3:
    # Un autre bloc.
```

## Personnages

```python
define p = Character("Popeye", color="#ffffff")
```

Définit le personnage `p` avec le nom `Popeye` et la couleur `#ffffff`.

## Dialogues

```python
"Ceci est un message du narrateur"
p "Ceci est un message du personnage p"
"Ceci est un message du narrateur contenant des \"guillemets\""
```

## Images

Les images doivent être placées dans le répertoire `images` de votre projet. Les formats recommandés sont PNG pour les dessins, et PNG ou JPEG pour les photos.

```python
# Affiche l'image "fond hongkong" en tant que fond
# Avec un effet "dissolve" en transition.
scene fond hongkong
with dissolve # facultatif

# Affiche l'image "marie heureuse"
show marie heureuse
# Affiche l'image à droite (right peut être remplacé par left, top ou bottom)
show marie heureuse at right
# Cache l'image "marie heureuse"
hide marie heureuse
```

## Musique et sons

Les fichiers audio doivent être placés dans le répertoire `game` de votre projet. Le format recommandé est l'OGG Vorbis.

```python
play music "mozart.ogg" fadein 1.0
play sound "woof.mp3"
play music ["a.ogg", "b.ogg"] #Ici la musique a.ogg sera jouée, puis la musique b.ogg
```

Les channels `music` et `sound` sont inclus de base dans votre jeu, le joueur pourra modifier leur volume dans les options indépendamment du volume général du jeu. Si vous souhaitez ajouter un channel sonore à votre jeu (par exemple pour les bruits d'ambiance) il faut d'abord définir ce channel, puis ensuite utiliser l'instruction `play LENOMDUCHANNEL` :

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

## Choix multiples

Remarquez l'indentation qui est essentielle pour que le code fonctionne.

```python
menu:
    "Une question ?" # Facultatif
    "Une réponse possible":
        # Bloc exécuté si la réponse ci-dessus est choisie
    "Une autre réponse possible":
        # Bloc exécuté si la réponse ci-dessus est choisie
    "Une troisième réponse possible":
        # Bloc exécuté si la réponse ci-dessus est choisie
```

## Labels et sauts

Les labels marquent différents états du jeu. Alors que normalement le code est parcouru ligne après ligne, les sauts permettent d'aller directement à un endroit marqué d'un label. Les sauts sont généralement utilisés dans les menus.

```python
label infini: # Déclaration d'un label nommé "infini"
    "Ne suis-je pas déjà passé par là ?"
    jump infini # Retourne à la première ligne.
    # Ce cas particulier est appelé boucle infinie.
```

## Exemple simple avec menus et sauts

```python
menu:
    "Vous aimez le chocolat ?"
    "Oh oui !":
        jump aime_chocolat
    "Beurk, non !":
        jump aime_pas_chocolat

label aime_chocolat:
    "Alors comme ça vous aimez le chocolat..."
    jump suite # Ce saut est important. Sans lui,
    # l'état "aime_pas_chocolat" serait parcouru.

label aime_pas_chocolat:
    "Non, sérieusement ?"

label suite:
    "Bon, peu importe."
```

## Tags texte

Les tags texte permettent d'ajouter des petits twists à vos dialogues, par exemple modifier la taille d'une partie du texte, faire des pauses, mettre en gras... Les tags se présentent de cette manière `{TAG}`, certains sont accompagné d'une valeur `{TAG=valeur}` et/ou doivent être fermés avec `{/TAG}` .

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

## Récapitulatif

- `show` affiche une image
- `with` effectue l'action précédente avec l'effet mentionné
- `hide` cache une image
- `play` joue un son (`sound`) ou une musique (`music`)
- `stop music` arrête la musique
- `label` crée un label qui pourra ensuite être atteint par un saut
- `jump` saute au label indiqué
- `define p = Character(…)` définit un personnage `p`
- `menu` introduit un menu pour présenter plusieurs choix