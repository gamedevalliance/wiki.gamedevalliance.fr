# Bienvenue dans l'Encyclopédie de la création de jeux

![Bannière](/static/images/accueil/banniere.png)

L'Encyclopédie aborde la création de jeux vidéo sous tous ses aspects. Vous y trouverez des guides pour utiliser des logiciels, ainsi que des renseignements sur la communauté et ses jeux.

Vous pouvez étoffer les pages existantes ou en ajouter de nouvelles. Si vous cherchez de l'inspiration, parcourez la [liste des issues](https://github.com/rpgmakeralliance/wiki/issues), ou demandez aux gens ce qu'ils aimeraient bien lire.

RMA assurera la perrénité du site et de ses précieuses informations : votre contribution ne sera pas perdue dans les méandres d'Internet. Le contenu des articles est sous licence [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Pour plus de renseignements à ce sujet, contactez-nous sur [Discord](https://discord.gg/RrBppaj).

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

Pour une marche à suivre plus détaillée et accessible aux néophytes, lisez [Installer l'Encyclopédie](https://wiki.rpgmakeralliance.com/contribuer/installer).

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

Les articles de l’Encyclopédie sont écrits dans un Markdown enrichi de fonctions personnelles. Référez-vous à la [documentation de la syntaxe](https://wiki.rpgmakeralliance.com/contribuer/syntaxe) ou inspirez-vous des articles existants.
