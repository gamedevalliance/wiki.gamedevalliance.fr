---
title: "Téléportation réaliste entre les cartes"
description: "Ce système utilise les variables pour téléporter le joueur entre les cartes au bon endroit, en utilisant un seul évènement pour tout le jeu."
---

Ce guide s'adresse aux personnes qui ont découvert les variables depuis peu, et qui cherchent un moyen utile de les exploiter. Nous allons réaliser un système qui permet de se téléporter entre les cartes au bon endroit, et sans placer des évènements de téléportation sur tous les bords. Le système présenté ici fonctionne uniquement dans le cas où toutes les cartes font la même taille. Grâce aux variables, nous allons utiliser un seul évènement pour tout le jeu.

{{< video src="/videos/rpgmaker/tutoriels/teleportation/demo.webm" attr="muted loop controls" >}}

## Préparation

On aura besoin d'un interrupteur, `Système de téléportation`, que vous mettrez sur ON au début du jeu, avant qu'on se téléporte.

Nous utiliserons 6 variables, que vous pouvez entrer dans la liste en avance pour plus de confort :

- `Position X actuelle`
- `Position Y actuelle`
- `Map actuelle`
- `X de destination`
- `Y de destination`
- `Map de destination`

N'oubliez pas de valider après les avoir nommées, ou vous devrez recommencer.

## Explications

Dans la base de données, créez un nouvel évènement commun en [processus parallèle]({{< ref "evenements.md#declenchement" >}}). On est obligé de mettre un interrupteur en condition de déclenchement, c'est pour cela que je vous avais dit d'activer l'interrupteur `Système de téléportation` au début du jeu.

Le début de l'évènement consistera à enregistrer où se trouve le joueur. Rendez la variable `Position X actuelle` égale à la position X du joueur sur la carte. Vous trouverez cette information en cliquant sur *Données Jeu* :

![Contrôler les variables](/images/rpgmaker/tutoriels/teleportation/variables.png)

![Données jeu](/images/rpgmaker/tutoriels/teleportation/donneesjeuX.png)

Faites la même chose pour enregistrer la position Y dans la variable `Position Y actuelle`.

Enfin, on va enregistrer l'ID de la carte sur laquelle se trouve le joueur dans la variable `Map actuelle`. Cela se trouve également dans la fenêtre *Données Jeu* :

![Données jeu](/images/rpgmaker/tutoriels/teleportation/donneesjeuID.png)

Votre évènement doit maintenant ressembler à ça :

![Evènement commun](/images/rpgmaker/tutoriels/teleportation/eventcommun.png)

Vous pouvez vérifier que ça fonctionne ! Dans le jeu, activez l'interrupteur `Système de téléportation` puis appuyez sur F9.

![Debugger](/images/rpgmaker/tutoriels/teleportation/F9.png)

Pour mieux comprendre les positions X et Y, vous pouvez également passer le curseur sur votre carte en étant en mode dessin. En bas à droite de l'éditeur, vous pouvez lire l'ID de la map, ainsi que la position X et Y de la case que vous survolez. Vous pouvez constater qu'en étant positionné tout à gauche, X est égal à 0, et que tout en haut, Y est égal à 0.

Reprenons notre évènement commun. Nous allons programmer le passage de la map 1 à la map 2, comme dans la vidéo d'exemple. Nous devons détecter quand le joueur est tout à droite de la map 1, ce qui équivaut à X = 16. Nous avons enregistré toutes les données dont nous avons besoin dans des variables, vous pouvez donc créer ces deux conditions imbriquées :

![Si map = 1 et X = 16](/images/rpgmaker/tutoriels/teleportation/conditionsimbriquees.png)

Prenons un instant pour examiner le fonctionnement de la commande de téléportation. Nous ne pouvons pas utiliser *Désignation directe*, car la case du héros va varier. Nous devrons utiliser *Désignation avec des variables*, c'est pourquoi je vous avais dit de nommer trois variables supplémentaires au début du guide :

![Transférer joueur](/images/rpgmaker/tutoriels/teleportation/teleportation.png)

Avant de téléporter le joueur, nous devons donner une valeur à ces variables. Dans cet exemple, le personnage doit arriver sur la map 2, tout à gauche, mais en laissant une case de marge. La première case à gauche étant 0 en X, notre destination sera à 1 en X. Enfin, la position d'arrivée de haut en bas, dépend de la position de haut en bas où se trouvait le joueur sur la map 1. La destination est donc variable en Y.

Votre condition doit donc ressembler à ceci :

![Commandes pour transfert](/images/rpgmaker/tutoriels/teleportation/partie1.png)

Prenez le temps de comprendre ces commandes, puis testez en jeu.

Maintenant, programmons la téléportation dans l'autre sens. Lorsque nous sommes tout à gauche de la map 2, c'est-à-dire à X = 0, nous allons vers la map 1. Nous devons arriver tout à droite de la map, avec une case de marge, ce qui équivaut à X = 15. Comme tout à l'heure, la position Y est variable. La condition finale ressemble donc à ceci :

![Condition entière](/images/rpgmaker/tutoriels/teleportation/partie2.png)

Testez en jeu, et vous devriez avoir reproduit l'exemple !

## Conclusion

Il est très utile de savoir manipuler la position du joueur avec des variables ! Avec ces connaissances, vous pourrez par exemple imaginer des énigmes basées sur la position du joueur et d'objets environnants.

Si vous le souhaitez, vous pouvez vous entraîner davantage avec ce système. Maintenant que vous savez passer entre deux maps de gauche à droite, avec un Y variable, tentez un passage de bas en haut, avec un X variable. Vous pouvez utiliser cet évènement commun pour tout votre jeu, en ajoutant une nouvelle condition pour chaque passage entre deux maps.
