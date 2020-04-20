---
title: "Votre premier dialogue"
description: "Téléchargez Ren'Py gratuitement et apprenez les bases du moteur pour créer votre premier projet."
portail: renpy
menu:
  renpy:
    parent: cours1
    weight: 1

---

## Présentation de Ren'Py

Ren'Py est un moteur entièrement gratuit et open source permettant de créer des visual novels, un genre de jeu assez populaire au Japon et proche des livres dont vous êtes le héros.

{{< figure src="/images/renpy/butterflysoup.png" alt="Screenshot de Butterfly Soup" caption="Les visual novels contiennent généralement des dialogues et des choix. (Butterfly Soup)" >}}

La simplicité du langage de Ren'Py le rend idéal pour un écrivain sans aucune notion de programmation, mais on peut aussi étendre les fonctionnalités du jeu à sa guise en écrivant du Python. Il est par exemple assez simple de programmer des phases de point and click ou de RPG. Les possibilités sont nombreuses et pour le constater, il suffit de regarder les jeux créés avec Ren'Py [sur itch.io](https://itch.io/games/newest/made-with-renpy) par exemple.

{{< figure src="/images/renpy/dokidokiliteratureclub.png" alt="Screenshot de Butterfly Soup" caption="Un système de carnet programmé dans Ren'Py. (Doki Doki Literature Club)" >}}

Les jeux peuvent fonctionner sur Windows, Linux, macOS, Android, iOS ou en tant qu'application Chrome.

Dans ce premier chapitre, nous allons créer en quelques minutes un dialogue complet entre plusieurs personnages.

{{< video src="/videos/renpy/demo1.mp4" poster="/images/renpy/imagesenjeu.png" caption="Le résultat final de ce chapitre." attr="muted loop controls" >}}

## Télécharger le logiciel

Pour commencer, rendez vous sur la [page de téléchargement](https://renpy.org/latest.html) de Ren'Py.

Cliquez sur le bouton vert pour obtenir la dernière version du logiciel pour votre système d'exploitation. Une fois le téléchargement terminé et l'archive extraite, vous devrez exécuter le fichier `Renpy.exe` (sous Windows), `Renpy.sh` (sous GNU/Linux) ou `Renpy` (sous macOS).

La fenêtre qui s'ouvre devant vous est le lanceur de Ren'Py (ou *launcher*). Vous pouvez le passer en Français en cliquant sur "Preferences" en bas à droite.

![Lanceur de Ren'Py](/images/renpy/launcher.png)

Deux projets sont déja disponibles : le tutoriel donne plein de renseignements assez poussés sur toutes les possibilités de Ren'Py, tandis que "La Question" est une petite histoire d'exemple avec deux personnages et différents décors. N'hésitez pas à l'essayer et à examiner son script !

## Créer son projet

Cliquez ensuite sur "Créer un nouveau projet". Ren'Py va alors vous demander plusieurs informations : emplacement où créer le projet, son nom... Laissez-vous guider puis patientez pendant que le moteur génère les fichiers. Vous pouvez ensuite lancer le jeu pour découvrir ce qu'il contient !

## Ouvrir le script du jeu

Comme une pièce de théatre ou un film, un visual novel suit un script contenant tous les dialogues, les informations sur les décors, les personnages... Lorsqu'un joueur lance le jeu, celui-ci va suivre le script du début à la fin en réalisant les instructions que vous y aurez indiquées.

Pour modifier ce fameux script, cliquez sur `script.rpy` en haut à droite du launcher. Ren'Py va alors vous demander quel éditeur vous souhaitez utiliser. Si vous n'avez jamais développé de jeu, vous pourriez penser qu'il s'agit d'un éditeur de texte tel que Word, mais on parle plutôt d'éditeur de code, qu'on utilise en programmation.

![Choix de l'éditeur](/images/renpy/selectionediteur.png)

Ne vous tracassez pas sur le choix de l'éditeur au début : ils se ressemblent tous quand on débute. Je vous conseille de choisir [Atom](https://renpy.org/latest.html) pour commencer, mais vous pouvez utiliser n'importe quel éditeur, comme [Visual Studio Code](https://code.visualstudio.com/) ou [Emacs](https://www.gnu.org/software/emacs/) par exemple, en cliquant sur "System Editor" et en sélectionnant votre éditeur préféré comme logiciel par défaut pour ouvrir les fichiers `.rpy`.

Vous voilà donc dans le fichier de script ! Il contient déjà du texte par défaut, qui ressemble à ceci :

```python
# Déclarez les personnages utilisés dans le jeu.
define e = Character('Eileen', color="#c8ffc8")

# Le jeu commence ici
label start:
    e "Vous venez de créer un nouveau jeu Ren'Py."
    e "Après avoir ajouté une histoire, des images et de la musique, vous pourrez le présenter au monde entier !"
    return
```

Nous verrons au fur et à mesure comment tout cela fonctionne, mais vous pouvez déjà remarquer quelques petites choses. Les lignes commençant par `#` sont des commentaires : c'est du texte qui n'est pas lu par Ren'Py et qui sert simplement à vous repérer dans votre script ou à laisser des notes pour votre équipe. Tout à la fin, l'instruction `return` déclenche la fin du jeu : en atteignant cette ligne, vous retournez à l'écran-titre.

## Un premier texte

Je vous propose d'effacer le contenu par défaut pour que l'on écrive quelque chose ensemble :

```python
label start:
    "Dans une contrée lointaine, très lointaine..."
    "Marvin" "J'aimerais créer un \"visual novel\"."
```

La première ligne `label start:` est importante. Une instruction de label (étiquette en français) permet de nommer un endroit dans votre script : en l'occurence, le label `start` permet d'indiquer le début du jeu à Ren'Py.

Après le `label start:`, toutes les lignes sont décalées : on appelle ça l'indentation. Vous pouvez les écrire avec 4 espaces ou avec la touche Tab. Cela signifie que toutes ces lignes font partie du bloc de `label start:`.

Les lignes suivantes sont des instructions de dialogue. Les noms entre guillemets sont facultatifs mais pratiques pour indiquer au joueur qui parle. Ils sont suivis par des textes également entre guillements qui seront les dialogues.

Lorsqu'un texte contient des guillemets doubles comme dans le second texte, ces caractères doivent être précédés d'un `\` pour indiquer à Ren'Py qu'ils font partie du dialogue. Sinon, le jeu ne pourrait pas savoir à quel guillemet le texte est censé se terminer.

Retournez sur le launcher pour essayer votre jeu. Vous avez affiché votre premier texte !

{{< figure src="/images/renpy/premiertexte.png" alt="Screenshot du projet" caption="C'est un bon début !" >}}

{{< next "renpy/les-personnages.md" >}}