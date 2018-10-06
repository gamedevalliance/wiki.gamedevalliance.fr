---
title: "Terminer votre jeu"
description: "Ren'Py est un moteur libre et gratuit permettant de créer des Visual Novels sur Windows, Linux, MacOS, Android et IOS."
portail: renpy
menu:
  renpy:
    name: "Terminer votre jeu"
    parent: "Débuter dans Ren'Py"
    weight: 1

---

Une fois que votre jeu est créé, il y a un certain nombre de choses que vous devriez faire avant de le distribuer :

## Ajouter une ou plussieurs fin

Vous pouvez terminer le jeu avec l’instruction return, sans aucun autre argument. Avant de faire cela, il est préférable d’afficher quelque chose dans le jeu qui indique que le jeu est fini, et peut être indiquer au joueur un numéro de fin ou un nom de fin.

```
    ".:. Happy End."
    
    return
```

C’est tout ce dont vous avez besoin pour créer une nouvelle animée. Maintenant, nous allons voir comment faire un jeu présentant des menus au joueur.

## Éditez options.rpy

Le fichier options.rpy, créé lorsque vous créez un nouveau jeu, contient un certains nombre de paramètres que vous pourriez vouloir personnaliser. Certains, comme la hauteur et la largeur de l’écran, devraient probablement êtres établis avant la création du jeu. D’autres, comme le titre de la fenêtre, peuvent être établis n’importe quand.

## Ajouter Ren’Py dans les remerciements

Cette étape est totalement optionnelle, mais nous vous demandons si vous avez une page de remerciement dans votre jeu, de mentionner Ren’Py dedans. Nous suggérons quelque chose comme « Fait avec le moteur de Visual Novel Ren’Py », mais c’est juste une suggestion, et c’est à vous de choisir ce que vous écrivez.

Nous pensons que les jeux que font les gens sont la meilleure publicité pour Ren’Py, et nous espérons qu’en incluant ceci, vous aiderez d’avantage de gens à apprendre comment faire des Visual Novels avec Ren’Py.

## Vérifier si une nouvelle version de Ren’Py est disponible

De nouvelles version de Ren’Py sortent régulièrement, pour corriger les bogues et ajouter de nouvelles fonctionnalités. Vous devriez vérifier la [page de télécharement](http://www.renpy.org/wiki/renpy/Download_Ren'Py) pour voir si une nouvelle version est sortie. Vous pourriez aussi vouloir voir si des corrections de bogues sont disponibles sur cette page.

## Vérifier le script

Depuis le lanceur, choisissez « Vérifier le script (Lint) ». Cela va vérifier si vos jeux contiennent des erreurs qui peuvent toucher des utilisateurs. Ces erreurs peuvent toucher les utilisateurs de GNU-Linux ou Mac OS, il est donc important de les corriger toutes, même si vous ne les voyez pas sur votre ordinateur.

## Construire les paquets

Depuis la lanceur, choisissez « Contruire les paquets ». En se basant sur les informations contenues dans options.rpy, le lanceur va construire un ou plusieurs fichiers d’archives contenant votre jeu.

## Tester

Lint ne remplace pas le test minutieux. Il est de votre responsabilité de vérifier votre jeu avant de le distribuer. Songez à demander à vos amis de vous aider à tester votre jeu, souvent les testeurs trouvent des problèmes que vous ne pouvez pas trouver vous même.

## Distribuez

Pour obtenir 