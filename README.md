# Bienvenue sur le wiki de FaireDesJeux.fr

> :warning: Vous êtes actuellement sur la branche `redesign`.

[FaireDesJeux.fr](https://fairedesjeux.fr) est un site collaboratif proposant des formations gratuites pour accompagner les débutants et débutantes dans la création de jeux vidéo, plus d'informations sur le [répo Github](https://github.com/gamedevalliance/fairedesjeux.fr) du projet.

Le wiki de FaireDesJeux.fr est un site complétementaire mais indépendant, proposant un maximum d'informations encyclopédiques sur les moteurs, logiciels et outils liés au développement de jeux vidéo. Vous y trouverez ainsi des guides d'installation détaillé, des réponses aux problèmes techniques les plus courants, des éléments d'histoires sur les différents logiciels ou les communautés qui y sont liées... Vous n'y trouverez néanmoins pas de tutoriels, qui relèvent eux de [FaireDesJeux.fr](https://fairedesjeux.fr).

Tout le monde peut participer au projet, que ce soit pour corriger une faute ou créer du contenu. Une charte de qualité permet de s'assurer que tout le monde avance dans une même direction, et une page de référence détaille la syntaxe Markdown ainsi que les fichiers à créer pour commencer l'écriture d'un nouveau portail.

## Modifier une page rapidement

Depuis n’importe quelle page du wiki, cliquez sur *Modifier cette page* dans le sommaire de droite. Cela ouvrira le fichier correspondant dans le dépôt.

## Devenir un contributeur régulier

Pour améliorer vos contributions au wiki, merci de bien lire la [charte de qualité]() et la [syntaxe du wiki](). Avant de vous lancer dans une contribution, regardez s'il n'existe pas une [issue github](https://github.com/gamedevalliance/wiki.fairedesjeux.fr/issues) sur le sujet et, si c'est le cas, à lire les discussions qui y sont liées.

S'il n'existe pas d'issue déjà documentée :

- S'il s'agit d'un bug, d'une erreur ou d'un problème, merci de créer une `issue` dédiée en vous assurant de bien suivre les [issues guidelines](https://github.com/gamedevalliance/wiki.fairedesjeux.fr/tree/master/.github/issues_guidelines.md).

- S'il s'agit d'un contenu que vous souhaitez réaliser dans le futur (par exemple un nouveau portail), mieux vaut d'abord réaliser la contribution puis la proposer au sein d'une `pull request` en vous assurant de bien suivre le template proposé. Inutile de créer une issue qui restera vide ad vitam eternam.

Pour faciliter la contribution, n'hésitez pas à suivre le channel *#projets-de-gda* sur notre [serveur Discord](https://discord.gg/RrBppaj) et installer le wiki sur votre ordinateur comme détaillé dans la section ci-dessous.

## Installer localement le wiki

Pour construire le site, [Hugo Extended](https://github.com/gohugoio/hugo/releases) (en bas de la liste) et [Git](https://git-scm.com/downloads) doivent être installés sur votre ordinateur.

Clonez le dépôt en incluant le submodule : le [Royal Theme](https://github.com/Princesseuh/hugo-royal-theme) de Princesseuh.

```
git clone --recurse-submodules https://github.com/mon-pseudo/mon-fork
```

Utilisez ensuite cette commande pour lancer le serveur :

```
hugo server
```
