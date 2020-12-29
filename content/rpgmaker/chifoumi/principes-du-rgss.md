---
title: "Principes du RGSS"
description: "Le guide pour créer un pierre-papier-ciseaux entièrement en scripts sur RPG Maker VX Ace. Apprenez à scripter en Ruby et RGSS pour créer vos propres systèmes sur RPG Maker !"
portail: rpgmaker
---

> *Pour voir correctement les illustrations de ce cours, merci de passer le wiki en mode sombre.*

## La notion de scène

Dans RPG Maker, chaque écran est une scène. Suivons un parcours typique dans un jeu RPG Maker : on arrive sur l'écran-titre, on lance une nouvelle partie, on explore la carte, on ouvre le menu, on retourne sur la carte, on entre dans un combat, qui nous amène sur une autre carte en cas de victoire, on entre dans un magasin, on retourne sur la map et on meurt. On aura lancé plusieurs scènes comme le montre ce schéma.

![Schéma du parcours typique d'un joueur.](/rpgmaker/chifoumi/schema1.png)

Vous l'aurez compris, tous les écrans sont des scènes. En RGSS, une scène est représentée par une classe. Dans l'éditeur de script, vous pouvez consulter l'intégralité des scènes du RGSS.

![Scènes du RGSS dans l'éditeur de script.](/rpgmaker/chifoumi/scenes.png)

Pour créer notre mini-jeu, nous allons créer un nouvel écran où se déroulera le chifoumi, et donc une scène dédiée.

## Un langage orienté objet

Ruby est un langage orienté objet, ce qui signifie que tous les éléments sont basés sur un modèle, appelé classe. Par exemple, dans un système de combat, nous serons amenés à créer toutes sortes de monstres : des zombies, des chauve-souris... Tous ces ennemis ont des choses en commun : ils ont des caractéristiques et peuvent attaquer le joueur. Au lieu de réécrire ces comportements dans chaque monstre, nous écrivons une classe « ennemi » contenant ces informations communes, et nous l'appliquons à chaque monstre. Dans la programmation orientée objet (plus spécifiquement orientée classe, mais ne nous arrêtons pas sur ce détail), on est amené à utiliser des classes déjà existantes et à créer nos propres classes, pour décrire des éléments.

## Le RGSS, c'est plein de classes

Dans RPG Maker, le RGSS nous offre énormément de classes déjà écrites. Pour vous en rendre compte, je vous invite à ouvrir l'éditeur de script et à survoler les différentes sections. Pour réaliser un système en RGSS, on part de classes déjà existantes et on en crée de nouvelles. Il existe toute une série d'autres classes inaccessibles via l'éditeur de script, mais décrites dans l'aide du logiciel. Le scripteur averti les consultera régulièrement, mais nous n'en aurons pas besoin ici.

{{< next "rpgmaker/chifoumi/creation-d-une-scene.md" >}}