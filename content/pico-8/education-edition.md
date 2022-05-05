---
title: "PICO-8 Education Edition"
description: "La version Education permet d'utiliser PICO-8 sur le web, gratuitement et sans créer de compte."
portail: pico-8
menu:
  pico-8:
    parent: general
    weight: 1
---

PICO-8 Education Edition est une version sur navigateur parue en 2022 et disponible gratuitement à l'adresse [pico-8-edu.com](https://www.pico-8-edu.com/). Tous les outils de création sont disponibles et il est possible de sauvegarder et charger des cartouches de jeu au format `.p8` ou `.p8.png`, mais il n'est pas possible d'exporter son jeu en version HTML ou en exécutable. La fonction SPLORE (pour explorer les jeux publics) est également désactivée.

![Image de présentation de PICO-8 Education Edition](/pico-8/education-edition/cover.gif)

## Fonctionnement

Les jeux sont sauvegardés dans un espace de stockage temporaire du navigateur. Pour télécharger le fichier de cartouche `.p8`, il faut écrire la commande `save nom-du-jeu`. Le raccourci Ctrl+S sauvegarde le jeu uniquement dans le stockage temporaire.

Pour charger un jeu depuis le stockage temporaire, il faut écrire la commande `load nom-du-jeu`, comme dans la version normale de PICO-8. Pour charger un jeu extérieur, il suffit de glisser le fichier `.p8` dans la fenêtre ou d'écrire la commande `load` sans nom.

Pour réaliser les raccourcis des touches de fonction, par exemple F7 pour créer une image de couverture, il faut utiliser Ctrl+7 ou un autre chiffre correspondant.

Bien que l'explorateur SPLORE ne soit pas inclus à la version web, il est tout de même possible de charger des jeux provenant du forum officiel en renseignant leur ID avec `load #id_du_jeu`. Pratique pour partager un projet à un groupe d'étudiants.

## Partage par URL

En plus des formats `.p8` et `.p8.png`, l'édition Education introduit les cartouches URL. Les graphismes et le code du jeu sont encodés dans l'adresse de la page, tant qu'ils rentrent dans 2040 caractères. [Voici un exemple.](https://www.pico-8-edu.com/?c=AHB4YQMCAdLrweIDPMAbHP8IRfME2d3J6c0zHP8E3fVl_hJL0UvckkRJEtsgaG676qjsrKOSm4qiDRQDHuAdZp5hRC4on6iaAfGQsAijPq2qsKruqoLuIZZctfQCZdm-xFVntUGYj81lt3U_yNtqLsmmhjZWkik-9P2NNyUGe4AnGBldm1lYPfB9yrXY97BF0pbJ3GAwN1XPKZXYfwJh1UiWhd5xhsi4VAY1xtVNzY2kaTQrMrRTxWUYrIy9ijRJVLZuidRO1rZG1_QDBgVCpYrETuxSZbtjk-oI95mgKZyUplrhvGF0IG-rUBZBImBrtG7lFGyUOEAm4cxMFWFscE0sXWt1sraW5TNjqgwz7Vg6shZYpW2CtWlldgxJDgwLMxghMYojskaVaU6KrTDHgdWF40bpjCYQlI6sJzuLM-KNzxAtNN2K7EMzoaygKrAxODiwlLZhI-qwlBltIAlunPLWhemqzuDE_MjcQKOhkoxtqUVMrM0kZTAUxVtHluXc0s5SvtA8zk4gHbFaG2tCFSYZNfcLmWvM-PE_Hsk7a5X3XP0wropcKYo0tbM3sLHwFlqUNzxGFw1ko2OVAkmkYv5Mr43MRLVIwNhYo1RXaC_ZAA==&g=AHwCHw-wwXwCHgHQHw-wpHgHQnQ3Aw-wpXQ3AA3ABHBw-wq3ABHBA3Dw-wq3DA3Cw-wr3CAHwAHAHw-wqHQHAH)

Une cartouche URL se génère avec la commande `save @url`, qui change l'adresse dans la barre du navigateur et qu'on peut ensuite copier-coller.
