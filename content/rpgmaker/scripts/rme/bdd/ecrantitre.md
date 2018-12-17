Il est parfois intéressant de débuter le jeu sur une carte plutôt que sur l'écran titre, notamment pour tester plus vite, ou alors pour créer son propre écran titre en évènement. RME dispose d'une manière élégante et simple de démarrer ailleurs que sur l'écran titre.

Il est intéressant de relire la [section sur la base de données étendue]() pour comprendre comment modifier le passeur d'écran titre.

## Utilisation de la base de données étendue

Comme beaucoup de fonctionnalités complémentaires, la configuration du passeur d'écran titre passe par la base de données étendue. Rendez-vous dans le fichier `Database/tables/ISkipTitle.csv` de votre projet pour paramétrer le passeur d'écran titre.

![Skiptitle](http://www.biloucorp.com/BCW/Nuki/RME/skiptitle1.png)

Cette table est un peu particulière car elle ne peut contenir qu'un seul enregistrement et les seuls champs modifiables sont : `activate`, `x`, `y`, `map_id`. Si vous changez le premier champ `options`, qui contient normalement `SkipTitle`, le projet plantera.

Pour activer le passeur d'écran titre, il suffit de mettre le champ `activate` à `true`, de paramétrer la case de départ en changeant `x` et `y`, et de modifier la map de départ dans `map_id`. Si la map n'existe pas, le passeur d'écran titre pointera vers l'écran titre classique.

## Créer un splash screen

On voudrait voir apparaître le logo de notre superbe équipe avant l'écran titre. Par exemple "Biloucorp". Il suffit de paramétrer le passeur d'écran titre pour qu'il pointe vers une carte qui déclencherait un évènement en processus parallèle.

![Skiptitle](http://www.biloucorp.com/BCW/Nuki/RME/skiptitle2.png)

L'évènement est très simple : à vous d'imaginer ce que vous pourriez en faire.

## Un écran titre minimaliste

Un autre exemple serait la création d'un écran titre personnalisé. Voici un système minimaliste d'écran titre. On admet que le héros est paramétré transparent dans la base de données.

![Skiptitle](http://www.biloucorp.com/BCW/Nuki/RME/skiptitle3.png)

C'est bien sûr un exemple très simple, mais qui permet de saisir la base de la création d'un système d'écran titre.

## Arriver directement sur la carte où la position de départ a été définie

Pour cela, il suffit de créer un évènement en processus parallèle ou automatique sur la carte pointée par le passeur d'écran titre, qui appelle la commande `start_new_game`.

N'oubliez pas que pouvez désactiver le passeur d'écran titre en écrivant `false` dans le champ `activate`.