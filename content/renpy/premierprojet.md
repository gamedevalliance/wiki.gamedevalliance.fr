---
title: "Votre premier projet !"
description: "Téléchargez Ren'Py gratuitement et apprenez les bases du moteur pour créer votre premier projet."
portail: renpy
menu:
  renpy:
    name: "Votre premier projet"
    parent: debuter
    weight: 1

---

Dans ce premier article, nous allons ensemble installer le moteur Ren'Py, découvrir son interface et créer un premier script qui ressemblera à ça :

```python
label start:

    "Marvin" "Bonjour"
    "Marvin" "Bienvenue dans mon premier jeu \"fait maison\"."

    "Astride" "Génial !"

return
```

## Premiers pas

Pour commencer, rendez vous sur la [page de téléchargement](https://renpy.org/latest.html) de Ren'Py.

Cliquez sur le bouton vert pour obtenir la dernière version de Ren'Py pour votre système d'exploitation. Une fois le téléchargement terminé et l'archive extraite, vous devrez executer le fichier `Renpy.exe` (sous Windows) ou `Renpy.sh` (sous GNU/Linux) ou `Renpy` (sous macOS).

La fenêtre qui s'ouvre devant vous est le "lanceur" de Ren'Py, vous pouvez le passer en Francais en cliquant sur "preferences" en bas à droite. Cliquez ensuite sur "Créer un nouveau projet" , Ren'Py va alors vous demander plussieurs informations (Emplacement où créer le projet, son nom...) laissez vous guider puis patientez pendant que le moteur génère les fichiers.

## Script Ren'Py

Comme une pièce de théatre ou un film, une Visual Novel suit un script contenant tout les dialogues, les informations sur les décords, les personnages... Lorsqu'un joueur lance le jeu, celui-ci va suivre le script du début à la fin en réalisant les instructions que vous y aurez indiqués.

### Une scène basique

Pour modifier ce fameux script, cliquez sur `script.rpy` en haut à droit du lanceur. Ren'py va alors vous demander quel éditeur de code vous souhaitez utiliser, nous vous conseillons l'éditeur [Atom](https://renpy.org/latest.html) mais vous pouvez utiliser n'importe quel éditeur (Tel que [VScode](https://code.visualstudio.com/) ou [Emacs](https://www.gnu.org/software/emacs/), pour les plus connus) en cliquant sur "System Editor" et en selectionnant votre éditeur préféré comme logiciel par défaut pour ouvrir les fichiers `.rpy`.

Vous voilà donc dans le fichier script, il contient déjà quelques lignes que vous pouvez effacer pour écrire :

```python
label start:

    "Marvin" "Bonjour"
    "Marvin" "Bienvenue dans mon premier jeu \"fait maison\"."

    "Astride" "Génial !"
```

La première ligne `label start:` est importante. Une instruction de label (étiquette en Francais) permet de nommer un endroit dans votre script, en l'occurence le label `start` permet d'indiquer à Ren'py où votre jeu commence.

Les lignes sont des instructions de dialogue. Les noms entre guillemets sont facultatif mais pratique pour indiquer au joueur qui parle, ils sont suivi par des textes également entre guillements qui seront les dialogues.

Au début de toutes les instructions de dialogue, il y a quatre espaces. On appelle cela l'indentation. Cela signifie qu'elles constituent un bloc de code pour l'instruction `label`. Dans Ren'Py, les blocs doivent être indentés par rapport aux lignes d'instructions auxquelles elles répondent et toutes les lignes d'un même bloc doivent être indentées de la même manière.

Lorsqu'un texte contient des guillemets doubles comme dans le second dialogue, ces caractères doivent être précédés d'une barre oblique inversée, ou backslash `\`. Cela permet à Ren'Py de comprendre qu'ils font partie du dialogue et ne pas les confondre avec ceux qui démarre et termine les dialogues.

### Terminer et tester un script

Vous pouvez terminer le jeu avec l'instruction `return`, qui renvoie immédiatement à l'écran-titre :

```python
label start:

    "Marvin" "Bonjour"
    "Marvin" "Bienvenue dans mon premier jeu \"fait maison\"."

    "Astride" "Génial !"

return
```

(Note pour plus tard : Il est possible d'ajouter plusieurs `return` à différents endroits du script afin de créer plusieurs fins au jeu.)

Sauvegardez le fichier et lancez le projet avec le lanceur. Remarquez comment, sans aucun travail supplémentaire de votre part, Ren'Py ajoute des menus pour charger et sauvegarder le jeu ou changer les options.

Pour vérifier le script, cliquez sur "Vérifier le script (Lint)" dans le lanceur. Même si vous n'avez pas repérer d'erreurs vous même il est important de vérifier votre script, notamment pour les utilisateurs qui y joueront sur un autre système d'exploitation.

Enfin, une fois le script vérifié, vous pouvez cliquer sur "Compiler les paquets" dans le lanceur pour générer les fichiers de votre jeu que vous pourrez distribuer à vos futurs joueurs. Pour obtenir plus d'informations sur la distribution de jeux indés en général, consultez [notre portail sur le sujet]({{< ref "/distribution/presentation.md" >}}).

***Article suivant : [Un vrai dialogue !]({{< ref "/renpy/dialogue.md" >}})***
