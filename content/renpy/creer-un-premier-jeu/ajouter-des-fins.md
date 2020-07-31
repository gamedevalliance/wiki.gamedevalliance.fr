---
title: "Ajouter des fins"
description: "Ajouter une ou plusieurs fins à votre jeu Ren'Py puis compilez-le pour le partager."
portail: renpy
---

Vous pouvez terminer le jeu avec l'instruction `return`, qui renvoie immédiatement à l'écran-titre. En ajoutant plusieurs `return` à différents endroits, vous pouvez créer plusieurs fins à votre histoire.

```python
label horreur:
    a "Très bonne idée, Ren'Py est tout à fait adapté pour une histoire terrifiante !"
    return

label romance:
    a "Un grand classique des visual novels, la romance étudiante..."
    return
```

Testez le jeu, et vous verrez que la fin est plutôt abrupte. On va ajouter un fondu au noir avant le `return` !

Souvenez-vous : `scene` permet de changer l'image de fond. En écrivant `scene black`, vous pouvez obtenir un fond noir sans avoir à créer une image. Ajoutez à cela un fondu, et le tour est joué !

```python
scene black
with dissolve
return
```

Et voilà, vous savez tout ce dont vous avez besoin pour créer une petite histoire simple sur Ren'Py ! Il ne vous manque plus qu'à compiler le jeu afin de le partager à vos amis ou sur Internet.

## Compiler le jeu

Avant toute chose, cliquez sur "Vérifier le script (Lint)" dans le launcher. Ren'Py va ensuite scanner votre jeu et afficher un compte-rendu. S'il contient des erreurs, assurez-vous de les comprendre et de les régler. En effet, cet outil peut détecter des erreurs subtiles qui ne se verraient pas chez vous, mais pourraient poser problème en jouant sur un autre système.

{{< figure src="/images/renpy/lintreport.png" caption="Un rapport Lint sans erreur." >}}

Ensuite, cliquez sur "Compiler les paquets" dans le launcher pour générer les fichiers Windows, Mac ou Linux que vous pourrez distribuer à vos futurs joueurs et joueuses. Pour obtenir plus d'informations sur la distribution de jeux indés en général, consultez notre [portail sur la distribution]({{< ref "/content/distribution.md" >}}).

{{< end "/content/renpy.md" >}}