---
title: "Erreurs fréquentes sur RPG Maker"
description: "Votre logiciel ou jeu RPG Maker comporte un problème ? Consultez cette liste des bugs fréquents pour obtenir des renseignements et une marche à suivre."
---

## Failed to initialize DirectX Audio

Cette erreur peut survenir au lancement d'un jeu RPG Maker VX Ace ou antérieur, si vous n'avez aucune sortie son branchée à l'ordinateur. Branchez des haut-parleurs ou des écouteurs, puis relancez le jeu.

## RTP introuvables

Le RTP (Run-Time Package) contient les graphismes et sons inclus au logiciel. Si une personne obtient cette erreur lorsque vous lui envoyez votre jeu, c'est qu'il nécessite le RTP pour fonctionner. Pour rendre votre jeu indépendant du RTP, suivez notre guide pour [exporter un jeu RPG Maker VX Ace ou antérieur]({{< ref "exporter.md#rpg-maker-vx-ace" >}}).

## Fichier image ou son introuvable

Parfois, un jeu qui fonctionne bien depuis l'éditeur de RPG Maker MV pourra planter après le déploiement, en raison d'un fichier introuvable. Généralement, c'est parce que le logiciel a supprimé des fichiers pourtant nécessaires lors de l'export. Recommencez le déploiement en décochant l'option « Exclure les fichiers inutilisés » afin d'éviter ce comportement. Il est malheureusement nécessaire de supprimer les fichiers inutiles soi-même pour obtenir un résultat sûr.

Si cela ne correspond pas à votre problème, le fichier introuvable comporte peut-être un accent. Les noms de fichier comportant des caractères spéciaux ne fonctionnent pas sur tous les systèmes et logiciels. De manière générale, en informatique, une bonne pratique est d'éviter les accents et les espaces dans vos noms de fichier, pour n'utiliser que des lettres majuscules et minuscules, des tirets et des tirets bas.

## RPG Maker MV ne propose pas le déploiement pour navigateur web

Vous possédez une ancienne version de RPG Maker MV. Assurez-vous de garder RPG Maker MV à jour autant que possible, afin d'éviter des problèmes fréquents et des incompatibilités de plugins.
