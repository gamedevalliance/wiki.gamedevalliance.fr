---
title: "Personnaliser l'écran d'introduction « Powered by MV »"
description: "Passez l'écran qui apparaît au début de chaque jeu RPG Maker MV, ou bien personnalisez-le pour ajouter vos propres images et choisir le timing."
---

Comment passer cet écran au début du jeu qui n'était pas là dans les versions précédentes de RPG Maker, et surtout qui nous fait perdre 120 frames de `Fade In`, 160 de `Wait Time` et 120 de `Fade Out` ?
(soit 400 images / 60 images par seconde = 6,66 secondes)

## Enlever le splash screen

L'écran est géré par le plugin `MadeWithMv`. Cliquez sur l'icône des pièces de puzzle pour ouvrir le gestionnaire de plugins, et vous l'apercevrez. Double-cliquez dessus et passez son statut à OFF.

## Paramétrer le splash screen

Là où ça devient intéressant, c'est que vous avez accès à plusieurs valeurs du plugin, comme le nombre d'images pour l'intro, l'outro, le temps à l'écran, mais aussi l'image à afficher. Vous pouvez ainsi remplacer l'image à afficher, ou en afficher deux en changeant les valeurs de `Show Custom Splash` à `true`, et en sélectionnant une image dans `Custom Image`.
