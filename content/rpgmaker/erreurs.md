---
title: "Erreurs fréquentes sur RPG Maker"
description: "Votre logiciel ou jeu RPG Maker comporte un problème ? Consultez cette liste des bugs fréquents pour obtenir des renseignements et une marche à suivre."
portail: rpgmaker
---

Cette page répertorie les bugs fréquents qui peuvent survenir en jouant à un jeu RPG Maker ou en utilisant l'éditeur. Si vous n'y trouvez pas de solution, parlez de votre problème sur notre [serveur Discord](https://discord.gg/RrBppaj) pour recevoir de l'aide.

## Failed to initialize DirectX Audio

Cette erreur peut survenir au lancement d'un jeu RPG Maker VX Ace ou antérieur, si vous n'avez aucune sortie son branchée à l'ordinateur. Branchez des haut-parleurs ou des écouteurs, puis relancez le jeu.

## RTP introuvables

Le RTP (Run-Time Package) contient les graphismes et sons inclus au logiciel. Si une personne obtient cette erreur lorsque vous lui envoyez votre jeu, c'est qu'il nécessite le RTP pour fonctionner. Pour rendre votre jeu indépendant du RTP, suivez notre guide pour [exporter un jeu RPG Maker VX Ace ou antérieur]({{< ref "exporter.md#rpg-maker-vx-ace" >}}).

## Fichier image ou son introuvable

### Déployé avec RPG Maker MV

Parfois, un jeu qui fonctionne bien depuis l'éditeur de RPG Maker MV pourra planter après le déploiement, en raison d'un fichier introuvable. Généralement, c'est parce que le logiciel a supprimé des fichiers pourtant nécessaires lors de l'export. Recommencez le déploiement en décochant l'option « Exclure les fichiers inutilisés » afin d'éviter ce comportement. Il est malheureusement nécessaire de supprimer les fichiers inutiles soi-même pour obtenir un résultat sûr.

### Caractères spéciaux

Si cela ne correspond pas à votre problème, le fichier introuvable comporte peut-être un accent. Les noms de fichier comportant des caractères spéciaux ne fonctionnent pas sur tous les systèmes et logiciels. De manière générale, en informatique, une bonne pratique est d'éviter les accents et les espaces dans vos noms de fichier, pour n'utiliser que des lettres majuscules et minuscules, des tirets et des tirets bas.

## Déploiement web indisponible

Si dans la fenêtre de déploiement de RPG Maker MV, l'option pour navigateur web n'est pas présente, vous possédez une ancienne version du logiciel. Assurez-vous de garder RPG Maker MV à jour autant que possible, afin d'éviter des problèmes fréquents et des incompatibilités de plugins.

## Fichier de données corrompu

![Erreur RPG Maker MV : Impossible de lire le fichier Game.rpgproject](/images/rpgmaker/erreurs/fichiercorrompu.png)

Cette erreur arrive le plus fréquemment dans RPG Maker MV. Il est possible que vous ne puissiez plus ouvrir votre projet, car le logiciel ne peut pas lire `Game.rpgproject` ou un fichier du dossier `data`, tel que `Actors.json`. Le fichier en question est probablement corrompu et vide. Récupérez le fichier depuis une sauvegarde de votre projet que vous auriez réalisée au préalable.

Si vous n'avez aucune copie fonctionnelle de votre projet, il n'y a aucun moyen de récupérer les données du fichier corrompu. Remplacez le fichier par celui d'un nouveau projet vierge.

Réessayez d'ouvrir le projet dans l'éditeur. Si une erreur similaire apparait pour un autre fichier, alors plusieurs fichiers ont été corrompus. Répétez la même opération pour chaque fichier problématique, jusqu'à pouvoir accéder à votre projet.

Nous ne connaissons pas la raison pour laquelle RPG Maker MV corrompt des fichiers aussi fréquemment. Si vous comptez travailler sérieusement avec ce logiciel, nous vous conseillons vivement de réaliser des copies de votre projet.
