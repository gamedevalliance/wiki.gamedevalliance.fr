---
title: "Installer l'Encyclopédie"
description: "Documentation pour l'installation de Git et Hugo, le téléchargement de l'Encyclopédie et la contribution."
---

### Créer un fork

Sur la {{< editpage "page du code source" >}}, cliquez sur le bouton Fork pour obtenir une copie sur votre compte GitHub. Différenciez bien le dépôt officiel `rpgmakeralliance/wiki` et le fork `votrepseudo/wiki`.

## Installer Git et Hugo

### Windows

Créez les dossiers qui serviront à stocker Hugo et le wiki. Nous vous recommandons de créer les chemins suivants pour que le site soit facile d'accès :

```
C:\Hugo\bin     => contiendra le programme hugo.exe
       \Sites   => contiendra le wiki et vos autres sites
```

Téléchargez la [dernière version de Hugo Extended](https://github.com/gohugoio/hugo/releases) correspondant à votre système, qui devrait ressembler à `hugo_extended_x.xx_Windows-64bit.zip`. Le fichier qui nous intéresse dans le zip est `hugo.exe`, à déplacer dans le dossier `bin` créé précédemment.

Ajoutez le dossier `bin` à votre Path en suivant [notre guide]({{< ref "/contribuer/path.md" >}}).

Enfin, installez [Git](https://git-scm.com/downloads). Lors de l'installation, prenez soin de choisir une option qui ajoute Git à votre Path, sinon vous devrez l'ajouter manuellement comme à l'étape précédente.

### Linux

Assurez-vous d'installer la version extended de Hugo. Sur une [distribution supportant les snaps](https://docs.snapcraft.io/core/install), utilisez cette commande :

```
snap install hugo --channel=extended
```

Sur Debian et Ubuntu, Hugo Extended est directement disponible :

```
sudo apt install git
sudo apt install hugo
```

## Télécharger le wiki

### Avec GitHub Desktop

Installez [GitHub Desktop](https://desktop.github.com/) et connectez-vous à votre compte sur l'application.

Sur la page web de votre fork `votrepseudo/wiki`, cliquez sur le bouton vert *Clone or download*, puis sur *Open in Desktop*. Le logiciel va s'ouvrir : clonez le dépôt dans le dossier `C:\Hugo\Sites`.

### Avec le terminal

Clonez l'Encyclopédie dans un nouveau dossier `wiki` :

```bash
git clone --recurse-submodules https://github.com/votrepseudo/wiki
```

Le submodule contient le [thème](https://github.com/Princesseuh/hugo-royal-theme), situé dans le dossier `themes`. Il est nécessaire pour créer l'aperçu du site.

## Lancer le serveur local

Lancez un serveur local avec Hugo dans le terminal.

```bat
cd C:\Hugo\Sites\wiki
hugo server
```

Lorsque le serveur est lancé, accédez à l'adresse `localhost:1313` avec votre navigateur. Dès que vous modifiez un fichier, la page est automatiquement reconstruite et actualisée.

Hugo propose d'autres commandes pouvant être utiles pour les utilisateurs avancés :

```
hugo server --disableFastRender  => recrée entièrement le site à chaque changement
hugo server --disableLiveReload  => désactive l'actualisation du site à chaque changement
hugo new article.md              => crée une nouvelle page pré-remplie
```

## Modifier le wiki

Le moyen le plus simple d'éditer le wiki est d'installer [Visual Studio Code](https://code.visualstudio.com/), un éditeur multi-plateforme et intégrant Git.

Vous pouvez également ouvrir le dépôt dans un autre éditeur de texte de votre choix, puis utiliser Git ou GitHub Desktop séparément pour envoyer vos changements.

## Envoyer vos changements

Dans Git, un commit est un ensemble de changements. Créer un commit permet de mettre en ligne vos changements sur votre fork, qui pourront ensuite être fusionnés au dépôt d'origine.

### Avec VS Code

Dans le panneau de contrôle de code source, la liste des fichiers modifiés s'affiche. Vous pouvez y entrer le titre de votre commit, puis appuyer sur `Ctrl + Entrée` pour le créer.

### Avec GitHub Desktop

Sous la liste des fichiers modifiés, vous pouvez nommer votre commit et le créer. Cliquez ensuite sur *Push origin* pour le mettre en ligne.

## Synchroniser le wiki

Lorsque vous créez un fork, vous obtenez la version du wiki qui se situe dans le dépôt à ce moment précis. Ainsi, si des changements ont lieu plus tard dans le dépôt d'origine, votre fork ne sera plus synchronisé. Cela peut poser problème si vous souhaitez travailler sur des pages qui ont été récemment mises à jour.

### Avec VS Code

Dans le panneau de contrôle de code source, ou dans le bandeau en bas de la fenêtre, cliquez sur le bouton de synchronisation.

### Avec GitHub.com

Sur la page de votre fork `votrepseudo/wiki`, cliquez sur *Compare*.

Par défaut, le *base fork* est `rpgmakeralliance/wiki` : changez-le pour `votrepseudo/wiki`. La page va alors comparer deux branches identiques : cliquez sur *compare across forks* puis changez le *head fork* pour `rpgmakeralliance/wiki`.

Vous verrez alors tous les commits faits sur `rpgmakeralliance/wiki` depuis le jour où vous avez créé votre fork.

Cliquez sur *Create pull request*, puis sur *Merge pull request* à la page suivante.

### Avec le terminal

Consultez la documentation de GitHub pour [synchroniser un fork](https://help.github.com/articles/syncing-a-fork/).