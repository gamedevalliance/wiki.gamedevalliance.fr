---
title: "Passer l'écran titre avec RME"
portail: rme
menu:
  rme:
    name: "Passer l'écran titre"
    parent: bdd
    weight: 3
---

Il est parfois intéressant de débuter le jeu sur une carte plutôt que sur l'écran titre, notamment pour tester plus vite, ou alors pour créer son propre écran titre en évènement. RME dispose d'une manière élégante et simple de réaliser cela. Il est utile de lire la section sur la [base de données étendue]({{< ref "/rme/bdd.md" >}}) pour comprendre comment fonctionne ce système.

## Utilisation de la base de données étendue

Ouvrez le fichier `Database/tables/ISkipTitle.csv` de votre projet pour paramétrer le passeur d'écran titre.

![Contenu du csv](/images/rme/bdd/ecrantitre/csv.png)

Vous pouvez changer tous les paramètres sauf `options`, qui doit contenir `SkipTitle`, sinon le projet plantera.

Pour activer le passeur d'écran titre, il suffit de mettre le champ `activate` à `true`, de paramétrer la case de départ en changeant `x` et `y`, et de modifier la carte de départ dans `map_id`. Si la carte n'existe pas, le passeur d'écran titre pointera vers l'écran titre classique.

## Créer un splash screen

Prenons un exemple où l'on voudrait afficher le logo de notre superbe équipe avant l'écran titre. Il suffit de paramétrer le passeur d'écran titre pour qu'il pointe vers une carte qui contient un évènement en processus parallèle.

![Contenu de l'évènement](/images/rme/bdd/ecrantitre/splashscreen.png)

L'évènement est très simple : à vous d'imaginer ce que vous pourriez en faire.

## Un écran titre minimaliste

Un autre exemple serait la création d'un écran titre personnalisé. Voici un système minimaliste d'écran titre. On admet que le héros est paramétré transparent dans la base de données.

![Contenu de l'évènement](/images/rme/bdd/ecrantitre/ecrantitre.png)

C'est bien sûr un exemple très simple, mais qui permet de saisir la base de la création d'un système d'écran titre.

## Atteindre la position de départ

Il peut être utile d'atteindre la position de départ définie dans l'éditeur. Vous pouvez vous en servir pour commencer le jeu après votre écran titre personnalisé. Pour cela, il suffit d'appeler la commande `start_new_game`.

N'oubliez pas que pouvez désactiver le passeur d'écran titre en écrivant `false` dans le champ `activate`.