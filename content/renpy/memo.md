---
title: "Aide mémoire"
description: "Ren'Py est un moteur libre et gratuit permettant de créer des visual novels sur Windows, Linux, macOS, Android et iOS."
portail: renpy
menu:
  renpy:
    name: "Aide mémoire"
    parent: progresser
    weight: 1


---

Cet aide mémoire vous permettra de retrouver facilement des raccourcis claviers, des règles de syntaxes et des commandes que vous auriez oublier.

## Raccourcis clavier

Ces quelques raccourcis clavier pourront vous permettre de gagner  du temps. Les raccourcis ci-dessous nécessitent pour la plupart d’entre  eux que l’option *config.developer* soit mise à *True* pour fonctionner.

**Maj+E** ouvre le fichier script.rpy dans votre éditeur préféré.
 **Maj+D** ouvre le menu pour développeur, qui peut s’avérer utile.
 **Maj+R** recharge le script, pour prendre en compte les  éventuelles modifications qui vous y avez apporté. Notez que l’état du  jeu, et les valeurs actuelles des variables sont préservées.
 **Maj+I** lance l’inspection du code.

## Structure du langage

Les blocs de code sont espacés de 4 caractères par rapport au bloc de code parent. Les [tabulations](http://fr.wikipedia.org/wiki/Touche_tabulation) (↹) sont interdites.

```
#Les lignes commençant par un dièse (#) sont des commentaires !
condition1: #les deux points (:) indiquent que ce qui suit est un bloc qui sera parcouru dans le cas où condition1 est vrai
    #Le bloc de code est indenté de 4 espaces
    #...

    #ici nous sommes toujours dans le même bloc de code parcouru lorsque condition1 est vrai, malgré le saut de ligne
    condition1.1:
        #on se décale à nouveau de 4 espaces
        #etc.
condition2:
    #etc.
```

## Personnages

```
#Défini le personnage "p" avec la nom "Popeye" et la couleur #RRVVBB
define p = Character('Popeye', color="#RRVVBB")
```

## Dialogues

```
"Ceci est un message du narateur"
p "Ceci est un message du personnage nommé p"
"Ceci est un message du narateur contenant des \"guillemets\""
```

## Images

Les images doivent être placées dans le répertoire game de votre projet.
Les formats recommandés sont PNG pour les dessins et JPEG pour les photos.

```
#Cela va créer l'image "fond hongkong" à partir du chier nommé hongkong.png se trouvant le répertoire game
image fond hongkong = "hongkong.png" 
#Cela va créer l'image "marie heureuse" à partir du chier nommé marie_heureuse.png se trouvant le répertoire game
image marie heureuse = "marie_heureuse.png" 
#Va afficher l'image "fond hongkong" en tant qu'image de fond avec un effet "dissolve" en transition
scene fond hongkong
with dissolve #L'utilisation des transitions est facultative

#Affiche l'image marie heureuse
show marie heureuse
#Affiche l'image à droite (right). right peut être remplacé par left (gauche), top (haut) ou bottom (bas).
show marie heureuse at right
#Cache l'image "marie heureuse"
hide marie heureuse
```

## Musique et sons

Les fichiers audios doivent être placées dans le répertoire game de votre projet.
Le format recommandé est le OGG Vorbis.

```
#Joue la musique "musique.ogg" en boucle
play music "musique.ogg"
#Arrête la musique
stop music
#Joue un son (une seule fois). Cela peut être fait même lorsqu'une musique de fond est jouée.
play sound "fichier_audio.ogg"
```

## Menus – Choix multiples

Remarquez l’indentation qui est très importante (si vous n’indentez pas votre code, il ne marchera pas).

```
menu:
    "Une question ?" #Facultative
    "Une réponse possible":
        #Bloc de code exécuté si la réponse ci-dessus est choisie
    "Une autre réponse possible":
        #Bloc de code exécuté si la réponse ci-dessus est choisie
    "Une troisième réponse possible":
        #Bloc de code exécuté si la réponse ci-dessus est choisie
    #etc.
```

## Labels et Sauts

Les labels marquent différents états du jeux. Tandis que normalement,  le code est parcouru ligne après ligne, les sauts permettent d’aller  directement à un endroit marqué d’un label. Cela fonctionne, que le  label soit au dessus ou en dessous de la ligne de saut dans le code. Les  saut sont généralement utilisés dans les menus.

```
1. label infini:#Définition d'un label nommé "infini", suivit de son bloque d'instructions
2.     "Ne suis-je pas déjà passé par là ?"
3.     jump infini #Retourne deux lignes plus haut, à la ligne 1... Ce cas particulier est appelé boucle infinie.
```

## Exemple simple avec menus et sauts

```
menu:
    "Vous aimez le chocolat ?"
    "Oh oui !":
        jump aime_chocolat
    "Beurk, non !":
        jump aime_pas_chocolat

label aime_chocolat:
    "Alors comme ça vous aimez le chocolat..."
    jump suite #Ce saut est important, sans lui, l'état "aime_pas_chocolat" va être parcouru

label aime_pas_chocolat:
    "Non, sérieusement ?"

label suite:
    "Bon, peu importe..."
```

## Récapitulatif

- **show** : *montre* une image
- **with** : effectue l’action précédente *avec* l’effet mentionné
- **hide** : *cache* une image
- **plays** : *joue* un son (**sound**) ou une musique (**music**)
- **stop music** : *arrête la musique*
- **label** : créé un *label* qui pourra ensuite être atteint par un saut
- **jump** : *saute* au label indiqué
- **define** p = **Character**(…) : *defini* un *personnage* p
- **image** : défini une *image*
- **menu** : introduit un *menu* qiu va présenter au joueur plusieurs choix