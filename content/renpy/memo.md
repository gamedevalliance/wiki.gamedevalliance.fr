---
title: "Aide-mémoire"
description: "Cet aide-mémoire pour Ren'Py vous permettra de retrouver facilement des raccourcis claviers, des règles de syntaxe et des commandes."
portail: renpy
menu:
  renpy:
    name: "Aide-mémoire"
    parent: debuter
    weight: 4
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
# Joue une musique en boucle.
play music "musique.ogg"
stop music
# Joue un son une seule fois.
play sound "fichier_audio.ogg"
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