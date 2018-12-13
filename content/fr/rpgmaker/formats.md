---
title: "Gestion et format des ressources"
description: "Ajoutez vos propres graphismes et musiques à vos jeux RPG Maker. Suivez notre guide pour importer vos fichiers dans le bon format."
portail: rpgmaker
menu:
  rpgmaker:
    name: "Format des ressources"
    parent: doc
    weight: 1
---

RPG Maker permet d'utiliser ses propres ressources graphiques et audio (ou *assets*). Il est possible de les importer depuis le gestionnaire de ressources dans l'éditeur, ou tout simplement d'ajouter les fichiers au dossier du projet. Cette section répertorie les formats à respecter pour chaque logiciel.

## Format des fichiers audio

Dans RPG Maker, les fichiers audio sont classés dans quatre catégories.

- **BGM :** Musiques jouées en boucle.
- **BGS :** Ambiances sonores jouées en boucle, comme le bruit de la pluie ou d'une cascade.
- **ME :** Courts effets musicaux et jingles, lors d'une victoire ou d'une nuit à l'auberge.
- **SE :** Effets sonores joués une fois.

### RPG Maker MV

Les fichiers se trouvent dans le dossier `audio` de votre projet, et doivent être au format Ogg Vorbis (`.ogg`) et AAC (`.m4a`). Dans le cas d'un export pour Windows, macOS ou Linux, seul le format Ogg Vorbis est requis. Pour un export web, Android ou iOS, il est nécessaire d'inclure chaque fichier dans les deux formats.

### RPG Maker VX Ace

Les fichiers doivent être placés dans le dossier `Audio` du projet. [RPG Maker VX Ace]({{< ref "/rpgmaker/serie.md#rpg-maker-vx-ace" >}}) supporte les formats MIDI, Ogg, MP3, WMA et WAVE.

Des informations intégrées aux fichiers peuvent donner des instructions sur la façon de boucler la musique en jeu. Une fois qu'un MIDI arrive à la fin, il est relancé à l'emplacement contenant la valeur de contrôle 111, si elle existe. Dans le cas d'un Ogg, les commentaires `LOOPSTART` et `LOOPLENGTH` permettent de définir le début et la durée de la boucle.

## Format des fichiers image

<div id="index-flex-container">
    <section>
        <h4>Documentation</h4>
        <ul>
          <li><a href="{{< ref "/rpgmaker/formats/mv.md" >}}">RPG Maker MV</a></li>
          <li><a href="{{< ref "/rpgmaker/formats/vxace.md" >}}">RPG Maker VX Ace</a></li>
          <li><a href="{{< ref "/rpgmaker/formats/vx.md" >}}">RPG Maker VX</a></li>
          <li><a href="{{< ref "/rpgmaker/formats/xp.md" >}}">RPG Maker XP</a></li>
          <li><a href="{{< ref "/rpgmaker/formats/2003.md" >}}">RPG Maker 2003</a></li>
        </ul>
    </section>

    <section>
        <h4>Templates</h4>
        <ul>
          <li><a href="{{< ref "/rpgmaker/templates/mv.md" >}}">RPG Maker MV</a></li>
          <li><a href="{{< ref "/rpgmaker/templates/vxace.md" >}}">RPG Maker VX Ace</a></li>
        </ul>
    </section>
</div>

## Format des fichiers vidéo

### RPG Maker MV

Les fichiers vidéo sont stockés dans le dossier `movies` du projet, et doivent être produits dans deux formats : un fichier WebM, et un fichier MP4 encodé avec H.264. Dans le cas d'un export pour Windows ou macOS, seul le fichier WebM est requis. Pour un export web, Android ou iOS, il est nécessaire d'inclure les deux formats.

### RPG Maker VX Ace

Les fichiers vidéo se trouvent dans le dossier `Movies` du projet, et doivent être au format Ogg Theora (`.ogv`). Une vidéo plus large que la résolution du jeu verra ses bords coupés pour rentrer dans la fenêtre.

## Commandes du jeu

De [RPG Maker XP]({{< ref "/rpgmaker/serie.md#rpg-maker-xp" >}}) à [VX Ace]({{< ref "/rpgmaker/serie.md#rpg-maker-vx-ace" >}}), les touches que l'on détecte via les évènements sont en réalité des symboles. Ce que nous appellerons les touches RGSS ne correspondent pas directement à des touches réelles du clavier. Ce tableau rappelle les correspondances pour plus de clarté. Notez que sur [RPG Maker MV]({{< ref "/rpgmaker/serie.md#rpg-maker-mv" >}}), la dénomination des touches est différente.

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

Il est possible d'accéder directement aux touches réelles du clavier avec différents scripts, dont [RME]({{< ref "rme.md" >}}).

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
