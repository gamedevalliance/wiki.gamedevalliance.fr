---
title: "Gestion et format des ressources"
description: "Ajoutez vos propres graphismes et musiques à vos jeux RPG Maker. Suivez notre guide pour importer vos fichiers dans le bon format."
portail: rpgmaker
menu:
  rpgmaker:
    name: "Format des ressources"
    parent: doc
    weight: 3
---

RPG Maker permet d'utiliser ses propres ressources graphiques et audio (ou *assets*). Il est possible de les importer depuis le gestionnaire de ressources dans l'éditeur ou tout simplement d'ajouter les fichiers au dossier du projet. Cette section répertorie les formats à respecter pour chaque logiciel.

## Format des fichiers audio

Dans RPG Maker, les fichiers audio sont classés dans quatre catégories.

- **BGM :** Musiques jouées en boucle.
- **BGS :** Ambiances sonores jouées en boucle, comme le bruit de la pluie ou d'une cascade.
- **ME :** Courts effets musicaux et jingles, lors d'une victoire ou d'une nuit à l'auberge.
- **SE :** Effets sonores joués une fois.

### RPG Maker MV et MZ

Les fichiers se trouvent dans le dossier `audio` de votre projet et doivent être au format Ogg Vorbis (`.ogg`) et AAC (`.m4a`). Dans le cas d'un export pour Windows, macOS ou Linux, seul le format Ogg Vorbis est requis. Pour un export web, Android ou iOS, il est nécessaire d'inclure chaque fichier dans les deux formats.

### RPG Maker VX Ace

Les fichiers doivent être placés dans le dossier `Audio` du projet. [RPG Maker VX Ace]({{< ref "/rpgmaker/historique.md#rpg-maker-vx-ace" >}}) supporte les formats MIDI, Ogg, MP3, WMA et WAVE.

Des informations intégrées aux fichiers peuvent donner des instructions sur la façon de boucler la musique en jeu. Une fois qu'un MIDI arrive à la fin, il est relancé à l'emplacement contenant la valeur de contrôle 111, si elle existe. Dans le cas d'un Ogg, les commentaires `LOOPSTART` et `LOOPLENGTH` permettent de définir le début et la durée de la boucle.

## Format des fichiers image

### Tilesets

#### RPG Maker MV

[RPG Maker MV]({{< ref "/rpgmaker/historique.md#rpg-maker-mv" >}}) utilise le même format que [RPG Maker VX Ace]({{< ref "/rpgmaker/historique.md#rpg-maker-vx-ace" >}}), mais avec des tiles de 48 pixels de côté. Bien qu'à l'utilisation, le logiciel donne l'impression qu'il n'y a que deux couches, en réalité il y en a cinq, gérées automatiquement par le logiciel.

Les deux premières couches sont les plus basses et elles sont réservées à l'onglet A. Les deux dernières sont les plus hautes et sont réservées aux onglets B, C, D et E. Entre les couches basses et les couches hautes se trouve la couche d'ombre.

- [Templates des tilesets pour RPG Maker MV]({{< ref "/rpgmaker/templates/mv.md" >}})

##### Fonctionnement des couches basses

Les sets A1, A3, A4 et A5 sont liés à la première couche. La moitié gauche du set A2 est liée à la première couche, tandis que la moitié droite est liée à la deuxième couche.

En mode « Type de zone », la deuxième couche peut se combiner à n'importe quel tile de la première couche.

En mode « Type de monde », placer un tile de la deuxième couche sur un tile de la deuxième ou quatrième colonne du set A2, remplace automatiquement la première couche par le tile de la première ou troisième colonne du set A2.

##### Fonctionnement des couches hautes

Le premier tile est placé sur la quatrième couche. Poser un nouveau tile par-dessus le place sur la cinquième couche.

Lorsqu'on ajoute un troisième tile :

- Le tile qui se trouvait sur la quatrième couche disparait ;
- Le tile qui se trouvait sur la cinquième couche passe à la quatrième couche ;
- Le nouveau tile est placé sur la cinquième couche.

Pour effacer facilement la quatrième et la cinquième couche, il faut recouvrir la case avec un tile spécial, situé en haut à gauche de l'onglet B.

La combinaison de tiles passables et de tiles impassables sur les couches hautes cause un bug graphique indétectable dans l'éditeur, mais qui se révèle en jeu. Un tile avec le symbole ☆ s'affichera toujours au-dessus, qu'il soit sur la quatrième ou la cinquième couche. La passabilité de la case dépend alors du tile sur l'autre couche. Ainsi, une combinaison ◯ et ☆ sera passable, tandis qu'une combinaison ╳ et ☆ sera bloquante, et ce peu importe l'ordre de la combinaison.

#### RPG Maker VX et VX Ace

Le format des tilesets de RPG Maker VX change drastiquement par rapport à [RPG Maker XP]({{< ref "/rpgmaker/historique.md#rpg-maker-xp" >}}), pour revenir à une philosophie similaire à [RPG Maker 2000]({{< ref "/rpgmaker/historique.md#rpg-maker-2000" >}}), avec un agencement très strict. Un tileset est composé de 5 onglets, nommés de A à E. La couche active est automatiquement déterminée par l'onglet sélectionné dans l'éditeur. L'onglet A, dédié à la première couche, contient un grand nombre d'autotiles afin de faciliter le mapping des sols et des murs. Les onglets B à E contiennent tous les éléments à superposer sur la deuxième couche.

Le logiciel inclut une limite de 5 tilesets par jeu et fut largement critiqué pour cette raison. Il est possible de contourner cette limite à l'aide de scripts.

RPG Maker VX Ace est quasiment identique à son prédecesseur mais supprime la limite du nombre de tilesets par jeu. Une couche dédiée aux régions fait son apparition. Ce sont des zones invisibles numérotées, utiles à la programmation de systèmes.

- [Templates des tilesets pour RPG Maker VX Ace]({{< ref "/rpgmaker/templates/vxace.md" >}})

#### RPG Maker XP

A partir de [RPG Maker XP]({{< ref "/rpgmaker/historique.md#rpg-maker-xp" >}}) et jusqu'à [VX Ace]({{< ref "/rpgmaker/historique.md#rpg-maker-vx-ace" >}}), les tiles font 32 pixels de côté. Sur RPG Maker XP, un tileset est composé de 7 autotiles disposés en haut, chacun étant stocké dans une image indépendante, puis d'une grande image contenant tous les tiles normaux, de largeur fixe mais de hauteur libre.

C'est le seul logiciel de la série permettant d'utiliser des tilesets de taille infinie. Certains jeux utilisent par exemple des tilesets de plus de 10 000 pixels de hauteur, sans impact notable sur les performances. Chaque tile peut être librement disposé sur l'une des trois couches disponibles.

#### RPG Maker 2000 et 2003

Les tilesets de [RPG Maker 2000]({{< ref "/rpgmaker/historique.md#rpg-maker-2000" >}}) et [RPG Maker 2003]({{< ref "/rpgmaker/historique.md#rpg-maker-2003" >}}) sont au même format, et donc interchangeables. Les tiles font 16 pixels de côté. Un tileset tient dans une seule image, qui doit respecter un agencement précis :

* 3 autotiles animés
* 3 tiles animés
* 12 autotiles
* Tiles de la première couche
* Tiles de la deuxième couche

Dans l'éditeur, une partie différente du tileset est affichée selon qu'on active la première ou la deuxième couche.

### Sideview Battlers

Ces images représentent un personnage de l'équipe dans les combats en vue de côté. Chaque image fait 64 pixels de côté. Une planche en contient 9×6, pour une taille totale de 576×384 pixels.

Trois images alignées forment une animation. Voici la correspondance des poses, de haut en bas puis de gauche à droite :

1.  Pas en avant
2.  En attente
3.  En attente (magie)
4.  Défense
5.  Subit des dégâts
6.  Esquive
7.  Thrust (Poussée)
8.  Swing (Balancier)
9.  Missile (Missile)
10. Compétence physique
11. Compétence magique
12. Objet
13. S'échappe
14. Victorieux
15. PV bas
16. Altération d'état néfaste
17. Endormi
18. Mort

Les animations jouées en boucle sont répétées dans l'ordre 1-2-3-2, tandis que les animations jouées une fois, comme celle de dégâts, suivent l'ordre 1-2-3.

### Images système

- **Balloon :** bulles d'émotion. L'espace transparent en bas de l'image peut être complété pour créer des bulles personnalisées.
- **ButtonSet :** affiché sur les appareils tactiles pour éditer les champs de nombres, par exemple lors de l'achat d'objets.
- **Damage :** chiffres de l'affichage des dégâts en combat.
- **GameOver :** image de game over.
- **Loading :** affiché pendant les chargements. Très utile pour les jeux sur navigateur aux chargements plus lent.
- **IconSet :** icônes des objets, armes, compétences, etc.
- **Shadow1 :** ombre affichée en utilisant un avion.
- **Shadow2 :** ombre des membres de l'équipe dans les combats en vue de côté.
- **States :** état des alliés dans les combats en vue de côté.
- **Weapons :** armes affichées lors de l'attaque d'un membre de l'équipe dans les combats en vue de côté. Weapons1 et Weapons2 contiennent 12 images prédéfinies. Weapons3 est destiné à la personnalisation.
- **Window :** éléments composant les fenêtres.

## Format des fichiers vidéo

### RPG Maker MV et MZ

Les fichiers vidéo sont stockés dans le dossier `movies` du projet et doivent être produits dans deux formats : un fichier WebM et un fichier MP4 encodé avec H.264. Dans le cas d'un export pour Windows ou macOS, seul le fichier WebM est requis. Pour un export web, Android ou iOS, il est nécessaire d'inclure les deux formats.

### RPG Maker VX Ace

Les fichiers vidéo se trouvent dans le dossier `Movies` du projet et doivent être au format Ogg Theora (`.ogv`). Une vidéo plus large que la résolution du jeu verra ses bords coupés pour rentrer dans la fenêtre.

## Commandes du jeu

De [RPG Maker XP]({{< ref "/rpgmaker/historique.md#rpg-maker-xp" >}}) à [VX Ace]({{< ref "/rpgmaker/historique.md#rpg-maker-vx-ace" >}}), les touches que l'on détecte via les évènements sont en réalité des symboles. Ce que nous appellerons les touches RGSS ne correspondent pas directement à des touches réelles du clavier. Ce tableau rappelle les correspondances pour plus de clarté. Notez que sur [RPG Maker MV]({{< ref "/rpgmaker/historique.md#rpg-maker-mv" >}}), la dénomination des touches est différente.

Touche MV  | Touche RGSS | Clavier
-----------|-------------|-------------------
Directions | Directions  | Flèches, Pavé num.
Shift      | A           | Shift
Annuler    | B           | Echap, Num 0, X
OK         | C           | Espace, Entrée, Z
           | X           | A
           | Y           | S
           | Z           | D
Page préc. | L           | Q, Haut de page
Page suiv. | R           | W, Bas de page

Il est possible d'accéder directement aux touches réelles du clavier avec différents scripts dont [RME]({{< ref "/content/rme.md" >}}).

Fonction          | RPG Maker VX Ace | RPG Maker MV
------------------|------------------|-------------
Plein écran       | Alt + Entrée     | F4
Mode fantôme      | Ctrl*            | Ctrl*
Paramètres        | F1               |
Compteur de FPS   | F2               | F2
Ratio d'affichage |                  | F3
Console           |                  | F8*
Ecran de debug    | F9*              | F9*
Réinitialiser     | F12              | F5

\* Uniquement en testant le jeu depuis l'éditeur.

Le mode fantôme permet de traverser les murs et d'ignorer les combats aléatoires en maintenant **Ctrl**.
