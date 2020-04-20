---
title: "Penser le déroulement d'un système"
description: "Le guide pour créer un pierre-papier-ciseaux entièrement en scripts sur RPG Maker VX Ace. Apprenez à scripter en Ruby et RGSS pour créer vos propres systèmes sur RPG Maker !"
portail: rpgmaker
---

Le plus dur est derrière nous, nous allons maintenant pouvoir travailler sur quelque chose de vraiment amusant. Jusqu’à présent, nous avons résolu séquentiellement chacun de nos besoins. En effet, nous avions besoin d'une scène, nous avons créé une scène. Nous voulions afficher un titre, nous l'avons fait ; nous avions besoin d'un outil de sélection, nous l'avons fait. Il est temps d'apprendre quelque chose d'un peu plus abstrait.

En tant qu'analyste programmeur, on est souvent amené à penser des applications et systèmes complexes, dont le déroulement n'est pas linéaire. En tant que créateur de systèmes pour RPG Maker, c'est aussi le cas. Dans un script, il arrive que le déroulement ne soit pas explicite. Par exemple, bien que notre système soit assez simple, au moment de la sélection du coup, notre application peut prendre trois directions différentes. Dans cette section nous allons tâcher de représenter le processus de notre système.

![Schéma du déroulement du système](/images/rpgmaker/chifoumi/deroulement.png)

La première partie est déjà presque entièrement écrite. Il ne reste plus qu'à générer le choix de l'ordinateur, ce que nous ferons un peu plus tard. Pour le reste, il s'agit simplement de vérifier qui a gagné. Dans le cas où le choix de l'ordinateur équivaut à celui du joueur, c'est un match nul, et on renvoie vers le début de la scène après avoir affiché un message. Sinon, on affiche un message de victoire ou de défaite, et on renvoie vers la carte.

Ce genre de schéma permet de se représenter tous les états d'une application, et il m'arrive souvent d'en croquer quelques-uns sur papier. Si vous êtes très à l'aise avec l'abstraction, et que vous avez la capacité de vous projeter une application sans dessin, vous n'êtes pas obligé de le faire.

{{< next "rpgmaker/chifoumi/choix-et-conditions.md" >}}