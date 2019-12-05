---
title: "Exporter un jeu sur RPG Maker"
description: "Découvrez comment envoyer votre jeu à vos amis et au public. Exportez votre projet en créant un dossier lége et en évitant les erreurs de fichiers manquants."
portail: rpgmaker
menu:
  rpgmaker:
    name: "Exporter un projet"
    parent: decouvrir
    weight: 3
---

En partageant votre jeu, vous avez peut-être déjà été frustré par un dossier trop lourd ou par des erreurs de fichier manquant. Voici les méthodes les plus simples pour exporter votre jeu le plus proprement possible en fonction de votre logiciel.

{{< youtube LFyPmIrvHFM >}}

## RPG Maker MV

Le dossier de votre projet contient toutes les données du jeu ainsi qu'un fichier pour l'ouvrir dans l'éditeur mais pas d'exécutable pour lancer directement le jeu. Vous ne pouvez donc pas partager ce dossier tel quel.

Dans l'éditeur, ouvrez le menu Fichier et cliquez sur Déploiement. Choisissez le système d'exploitation désiré et choisissez de cocher ou non l'option « Exclure les fichiers inutilisés ».

![Options de déploiement de RPG Maker MV](/images/rpgmaker/exporter/deploiement.png)

En créant un projet, RPG Maker MV copie toutes les ressources graphiques et audio par défaut dans le dossier du jeu. C'est pourquoi vos projets pèsent plus de 300 Mo par défaut. Pourtant, la plupart du temps vous n'utiliserez pas une grande partie de ces ressources. Il est peu probable que vous ayez besoin de toutes les musiques, toutes les images d'écran titre ou encore toutes les animations d'attaque, qui sont pourtant des fichiers assez lourds.

L'option « Exclure les fichiers inutilisés » permet de produire un dossier plus léger, mais la méthode de tri est imprécise. Les fichiers référencés d'une quelconque façon dans les données du jeu seront conservées. Par exemple, si vous avez laissé la liste des animations par défaut dans la base de données, alors toutes les images d'animation seront incluses à votre projet. De plus, le logiciel ne peut pas détecter les fichiers utilisés par les scripts à moins que les programmeurs aient correctement déclaré les fichiers dans le code, ce qui n'est pas toujours le cas. Vous l'aurez compris : cocher l'option ne suffit pas, il faut également effectuer des vérifications manuelles.

## RPG Maker VX Ace

Sur RPG Maker VX Ace et les versions antérieures, le logiciel, les ressources et les jeux sont trois entités séparées. Les ressources graphiques et audio par défaut sont assemblées dans un paquet appelé RTP pour Run-Time Package. Le RTP est inclus dans l'installation du logiciel mais peut aussi être téléchargé gratuitement depuis le site officiel.

Logiciel | RTP    | Jeu
---------|--------|-----
30 Mo    | 200 Mo | 5 Mo

En créant un projet, RPG Maker VX Ace n'inclut pas le RTP directement mais stipule dans le fichier Game.ini que le jeu en a besoin pour fonctionner. Dans ce cas, le jeu lit les données du RTP depuis son emplacement d'installation.

Cette segmentation des données est pratique pour se partager rapidement des jeux entre collègues possédant déjà le RTP. Cependant, pour la distribution au grand public, c'est plus délicat. Ce ne serait pas très professionnel de demander aux joueurs d'installer eux-mêmes le RTP depuis le site officiel. Pour inclure le RTP à son jeu, il existe deux méthodes.

### Compilation automatique

Depuis RPG Maker VX Ace, dans le menu Fichier, cliquez sur Compiler le jeu. Choisissez un dossier de destination et cochez « Inclure les RTP ». Le logiciel produit une [archive auto-extractible](https://fr.wikipedia.org/wiki/Auto-extractible) à l'interface peu accueillante. On considère que compresser le dossier soi-même dans un zip est une meilleure pratique. A l'intérieur de cette archive se trouve le jeu et tous les fichiers du RTP. Il est donc recommandé de supprimer les images et musiques inutiles avant la distribution.

### Inclure le RTP manuellement

Ouvrez le fichier Game.ini situé dans le dossier du projet. La ligne `RTP=RPGVXAce` indique au jeu qu'il doit chercher les ressources dans le RTP installé sur l'ordinateur. Supprimez cette ligne pour rendre votre jeu indépendant ! En lançant le jeu, vous aurez probablement des messages d'erreur indiquant un fichier manquant. En effet, vous devez maintenant ajouter vous-même les fichiers du RTP dont vous avez besoin. Le RTP est généralement installé au même endroit que le logiciel. N'oubliez pas d'inclure le dossier Fonts et d'y ajouter vos polices personnelles si vous en utilisez.
