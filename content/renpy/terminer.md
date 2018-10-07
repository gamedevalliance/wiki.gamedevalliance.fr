---
title: "Terminer votre jeu Ren'Py"
description: "Vous avez créé votre jeu Ren'Py. Voici les différentes choses à faire pour corriger les bugs et envoyer le jeu au public !"
portail: renpy
menu:
  renpy:
    name: "Terminer votre jeu"
    parent: debuter
    weight: 3

---

Une fois que votre jeu est créé, il y a un certain nombre de choses que vous devriez faire avant de le distribuer.

## Ajouter une ou plusieurs fins

Vous pouvez terminer le jeu avec l'instruction `return`. Avant de faire cela, il est préférable d'afficher quelque chose dans le jeu qui indique qu'il est fini.

```python
"Happy End."
return
```

C'est tout !

## Éditer les options

Le fichier `options.rpy`, créé avec le projet, contient des paramètres que vous pouvez personnaliser. Certains, comme la hauteur et la largeur de l'écran, sont généralement établis avant la création du jeu. D'autres, comme le titre de la fenêtre, peuvent être changés n'importe quand.

## Mettre à jour Ren'Py

De nouvelles version de Ren'Py sortent régulièrement, pour corriger les bugs et ajouter de nouvelles fonctionnalités. Vous devriez vérifier la [page de télécharement](https://www.renpy.org/latest.html) pour voir si une nouvelle version est sortie. Les corrections de bugs sont listées sur cette page.

## Vérifier le script

Depuis le lanceur, choisissez « Vérifier le script (Lint) ». Cela va vérifier si vos jeux contiennent des erreurs qui peuvent toucher des utilisateurs. Ces erreurs peuvent toucher les utilisateurs de Linux ou macOS, il est donc important de les corriger toutes, même si vous ne les voyez pas sur votre ordinateur.

## Construire les paquets

Depuis le lanceur, choisissez « Compiler les paquets ». En se basant sur les informations contenues dans `options.rpy`, le lanceur va construire un ou plusieurs fichiers contenant votre jeu.

## Tester le jeu

Lint ne remplace pas un test minutieux. Demandez à vos amis de vous aider à tester votre jeu ! Souvent, d'autres personnes trouvent des problèmes auxquels vous n'auriez pas pensé.

## Distribution

Pour obtenir plus d'informations sur la distribution de jeux indés en général, consultez [notre portail sur le sujet]({{< ref "/distribution/presentation.md" >}}).