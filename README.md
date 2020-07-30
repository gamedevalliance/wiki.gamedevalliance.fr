# Bienvenue dans le wiki de la création de jeux

![Bannière](/static/images/accueil/banniere.png)

### [Read this in English](#readme-in-english)

Ce wiki aborde la création de jeux vidéo sous tous ses aspects. Vous y trouverez des guides pour utiliser des logiciels, ainsi que des renseignements sur la communauté et ses jeux.

Vous pouvez étoffer les pages existantes ou en ajouter de nouvelles. Si vous cherchez de l'inspiration, parcourez la [liste des issues](https://github.com/gamedevalliance/wiki/issues), ou demandez aux gens ce qu'ils aimeraient bien lire.

GDA assurera la perrénité du site et de ses précieuses informations : votre contribution ne sera pas perdue dans les méandres d'Internet. Le contenu des articles est sous licence [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Pour plus de renseignements à ce sujet, contactez-nous sur [Discord](https://discord.gg/RrBppaj).

## Modifier une page rapidement

Depuis n’importe quelle page du wiki, cliquez sur *Modifier cette page* dans le sommaire de droite, qui apparait si votre fenêtre est suffisamment grande. Cela ouvrira le fichier correspondant dans le dépôt.

## Construire localement le wiki

Pour construire le site, [Hugo Extended](https://github.com/gohugoio/hugo/releases) (en bas de la liste) et [Git](https://git-scm.com/downloads) doivent être installés sur votre ordinateur.

Clonez le dépôt en incluant le submodule : le [Royal Theme](https://github.com/Princesseuh/hugo-royal-theme) de Princesseuh.

```
git clone --recurse-submodules https://github.com/mon-pseudo/mon-fork
```

Utilisez ensuite cette commande pour lancer le serveur :

```
hugo server
```

Pour une marche à suivre plus détaillée et accessible aux néophytes, lisez [Installer le wiki](https://wiki.gamedevalliance.fr/contribuer/installer).

## Ajouter une image ou une vidéo

Vous pouvez déposer des images et des vidéos pour les utiliser dans vos articles. Chaque page possède son propre dossier. Par exemple, pour un article situé dans

```
content/tutoriels/teleportation.md
```

il vous faudrait situer l'image ou la vidéo dans

```
static/images/tutoriels/teleportation/image.png
static/videos/tutoriels/teleportation/video.mp4
```

puis dans votre article, la référencer ainsi :

```markdown
![Mon image](/images/tutoriels/teleportation/image.png)
```

## Syntaxe

Les articles du wiki sont écrits dans un Markdown enrichi de fonctions personnelles. Référez-vous à la [documentation de la syntaxe](https://wiki.gamedevalliance.fr/contribuer/syntaxe) ou inspirez-vous des articles existants.

# Readme in English

This wiki is about the creation of video games in all its aspects. You will find guides to use software, as well as information about the community and its games.

You can expand existing pages or add new ones. If you're looking for inspiration, check out the [issues list](https://github.com/gamedevalliance/wiki/issues), or ask people what they would like to read.

The content of the articles is licensed [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). For more information about this, contact us on [Discord](https://discord.gg/RrBppaj).

## Quick edits

On the wiki, from any page, click *Edit this page* in the table of contents on the right, which appears if your window is big enough. This will open the corresponding file in the repository.

## Build the wiki locally

To build the site, [Hugo Extended](https://github.com/gohugoio/hugo/releases) (at the bottom of the list) and [Git](https://git-scm.com/downloads) must be installed on your computer.

Clone the repository and include the submodule: the [Royal Theme](https://github.com/Princesseuh/hugo-royal-theme) by Princesseuh.

```
git clone --recurse-submodules https://github.com/mon-pseudo/mon-fork
```

Then use this command to launch the server:

```
hugo server
```

For a more detailed and accessible guide for begginers, read [Install the Encyclopedia](https://wiki.gamedevalliance.fr/en/contribute/install).

## Add an image or a video

You can upload images and videos to use them in your articles. Each page has its own folder. For example, for an article located in

```
content/tutorials/teleportation.md
```

you should place the image or video in

```
static/images/tutorials/teleportation/image.png
static/videos/tutorials/teleportation/video.mp4
```

then in your article, reference it as follows:

```markdown
![My image](/images/tutorials/teleportation/image.png)
```

## Syntax

Articles in the Encyclopedia are written in a Markdown enriched with personal functions. Refer to the [syntax documentation](https://wiki.gamedevalliance.fr/en/contribute/syntax) or take inspiration from existing articles.
