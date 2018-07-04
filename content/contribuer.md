---
title: "Contribuer à l'Encyclopédie du making"
description: "Tout le monde peut participer à l'Encyclopédie du making et écrire de nouveaux contenus. Découvrez comment faire."
menu:
  docs:
    name: "Contribuer"
    parent: "meta"
    weight: 1
---

Tout le monde peut proposer une nouvelle section ou un nouvel article sur un sujet lié au making. Il est toutefois souhaitable d'en discuter avec la communauté au préalable, afin de récolter leurs suggestions, et de vous assurer de la pertinence de votre contribution.

Le principe de l'Encyclopédie veut que tout écrit peut être modifié. Si malgré tout, vous vous sentez mal à l'aise à l'idée de changer le travail d'une autre personne, parlez de vos idées à la communauté.

## Modifier une page

Modifier le contenu du wiki requiert la possession d'un [compte GitHub](https://github.com/join).

{{< youtube iTtZuuJB2Jw >}}

## Documentation de la syntaxe

Les articles de l'Encyclopédie sont écrits en Markdown, une syntaxe simple et populaire, également utilisée sur notre forum, Discord, GitHub, et bien d'autres services.

Parfois, Markdown est insuffisant, par exemple pour ajouter des légendes aux images. Dans ces cas-là, il est possible d'écrire du HTML brut, mais c'est en contradiction avec la simplicité du Markdown qui rend accessible à tous l'édition des pages. C'est pourquoi nous utilisons des shortcodes, écrits `{{</* shortcode */>}}`, afin d'utiliser des fonctionnalités avancées sans impacter la lisibilité.

### Titres

Pour créer un titre, ajoutez un ou plusieurs `#` avant le texte.

```md
# Titre d'article
## Titre de section
### Titre de sous-section
```

Le premier niveau de titre s'affiche comme le titre d'une page en orange. Pour éditer le contenu d'un article, on utilise donc des titres de deuxième ou troisième niveau.

### Emphases

Style                  | Syntaxe
-----------------------|-------------------------
*Italique*             | `*Italique*`
**Gras**               | `**Gras**`
***Italique et gras*** | `***Italique et gras***`

### Listes

Un élément de liste non ordonnée peut commencer par `-` ou `*`.

```md
- George Washington
- John Adams
- Thomas Jefferson
```

Pour ordonner une liste, précédez les éléments d'un nombre.

```md
1. George Washington
2. John Adams
3. Thomas Jefferson
```

### Citations

Une citation commence par `>`.

```md
William Shakespeare disait :

> Être ou ne pas être...

```

### Morceaux de code

Entourez un texte d'accents graves `` ` `` pour qu'il soit affiché dans une police monospace et sans formatage.

```md
La balise `<h1>` est un titre en HTML.
```

Pour afficher du texte dans un bloc distinct du paragraphe, utilisez trois accents graves.

````md
Voici un exemple de code :
```ruby
class Scene_Tuto
  puts "Coucou"
end
```
````

Ecrire `ruby`, `javascript` ou un autre nom de langage est facultatif, et déclenche la coloration syntaxique.

### Tableaux

Un tableau est toujours composé d'une ligne principale, séparée des autres lignes par des tirets `-`.

```md
Jeux        | Auteurs
------------|-------------
Aëdemphia   | Sylvanor
OFF         | Mortis Ghost
To the Moon | Kan Gao
```

### Liens et références

Créez un lien en entourant le texte cliquable de crochets `[]`, puis en entourant l'URL de parenthèses `()`.

```md
Voici le [serveur Discord](https://discord.gg/RrBppaj) de RMA.
```

Le shortcode `ref` génère un lien vers une page du wiki. Ecrivez directement le nom du fichier Markdown `.md`. Pour pointer vers un titre précis d'une page, ajoutez son ancre `#` comme elle apparait dans l'URL.

```
{{</* ref "scripts.md" */>}}              => https://wiki.rpgmakeralliance.com/scripts
{{</* ref "scripts/fullscreen++.md" */>}} => https://wiki.rpgmakeralliance.com/scripts/fullscreen++
{{</* ref "jeux.md#laxius-power" */>}}    => https://wiki.rpgmakeralliance.com/jeux#laxius-power
```

Combinez ce shortcode avec un lien Markdown pour obtenir un résultat agréable :

```md
Choisissez le [déclencheur]({{</* ref "evenements.md#declenchement" */>}}) de votre évènement.
```

### Images et figures

En Markdown, on crée une image en commençant par un point d'exclamation `!`, en entourant le texte alternatif de crochets `[]` et en entourant le lien vers l'image de parenthèses `()`. Le texte alternatif est utilisé lorsque l'image ne peut pas être affichée.

Les images sont à ajouter dans `/static/images`, où chaque page possède son propre dossier. Référencez ensuite votre image ainsi :

```md
![Texte alternatif](/images/article/exemple.png)
```

Cependant, cette syntaxe est parfois insuffisante. En HTML, l'élément `<figure>` permet d'ajouter une légende sous l'image. Le shortcode suivant permet de générer facilement une figure :

```go
{{</* figure class="align-right" src="/images/article/exemple.png" alt="Texte alternatif" caption="Légende" */>}}
```

Pour aligner l'image à gauche, écrivez `class="align-left"` et pour l'aligner à droite, écrivez `class="align-right"`. Retirez ce paramètre pour garder l'image au centre. De la même façon, vous pouvez retirer les attributs `alt` et `caption` si vous n'en avez pas besoin.

### Vidéos et intégrations

Vous pouvez déposer vos vidéos dans le dossier `/static/videos`, où chaque page possède son propre sous-dossier. Trois formats sont supportés : `mp4`, `webm`, et `ogg`.

Par défaut, une vidéo est en lecture automatique et boucle sans le son (attributs `autoplay muted loop`). Cela permet d'imiter le comportement d'un gif animé, tout en profitant des avantages d'une vidéo : une meilleure qualité et un fichier plus léger. Vous pouvez consulter des exemples sur la page du script [Scroll Pictures]({{< ref "scripts/scrollpictures.md" >}}).

```go
{{</* video class="align-right" src="/videos/scripts/scrollpictures/poussiere.mp4" caption="La poussière flotte dans la lumière de la fenêtre." */>}}
{{</* video src="/videos/scripts/scrollpictures/fumee.mp4" alt="Capture d'écran de RPG Maker XP" caption="De la fumée dans un couloir." */>}}
```

Vous pouvez aligner la vidéo à gauche ou à droite, avec `class="align-left"` ou `class="align-right"`. Affichez une légende sous la vidéo avec `caption="Légende"`. Ajoutez un texte alternatif décrivant le contenu de la vidéo pour les malvoyants et les robots avec `alt="Texte"`.

En spécifiant vos propres attributs avec `attr="…"`, vous remplacez les attributs par défaut `autoplay muted loop`. Dans le [tutoriel de téléportation réaliste]({{< ref "tutoriels/teleportation.md" >}}), l'attribut `controls` permet d'afficher d'ajouter un bouton pause et une barre de progression.

```go
{{</* video src="/videos/tutoriels/teleportation/demo.webm" attr="autoplay muted loop controls" */>}}
```

Les shortcodes suivants permettent d'intégrer des vidéos YouTube et Vimeo, des gists, des tweets et des images Instagram :

```html
{{</* youtube HKXL-0i7uAM */>}}      => https://www.youtube.com/watch?v=HKXL-0i7uAM
{{</* vimeo 146022717 */>}}          => https://vimeo.com/channels/staffpicks/146022717
{{</* gist spf13 7896402 */>}}       => https://gist.github.com/spf13/7896402
{{</* tweet 877500564405444608 */>}} => https://twitter.com/spf13/status/877500564405444608
{{</* instagram BWNjjyYFxVx */>}}    => https://www.instagram.com/p/BWNjjyYFxVx/
```

### Métadonnées des pages

Au début de chaque fichier sont renseignées les métadonnées de la page. Il y a toujours le titre de la page, puis éventuellement une description de deux à trois phrases, affichée lors du partage sur les réseaux sociaux, Discord, etc. Les autres paramètres peuvent être renseignés pour lister la page dans le sommaire à gauche.

```yaml
---
title: "Contribuer à l'Encyclopédie du making"
description: "Tout le monde peut participer à l'Encyclopédie du
making et écrire de nouveaux contenus. Découvrez comment faire."
menu:
  docs:
    name: "Contribuer"  # Nom affiché dans le sommaire
    parent: "meta"      # identifier de la catégorie dans config.toml
    weight: 1           # Ordre au sein de la catégorie
---
```

D'autres paramètres permettent de personnaliser les fonctionnalités du wiki pour une page spécifique :

* `og_image: "{IMAGE_URL}"` permet de changer l'icône affichée lorsque la page est partagée.
* `onthispage: false` désactive le sommaire de droite.
* `tocmaxdepth: 2` limite le sommaire de droite aux titres de deuxième niveau `##`.

## Télécharger le wiki et l'éditer

Pour éditer le wiki plus confortablement, vous pouvez le télécharger et le construire localement. Cela vous permet d'écrire dans votre éditeur favori, de modifier plusieurs fichiers à la fois, et d'avoir un aperçu en temps réel de vos modifications.

*Vidéo en ligne dans quelques heures.*

### Obtenir les fichiers

Sur votre ordinateur, créez les dossiers qui serviront à stocker Hugo et le wiki. Dans ce guide, nous créons les chemins suivants :

```
C:\Hugo\bin     => contiendra le programme hugo.exe
       \Sites   => contiendra le wiki et vos autres sites
```

Installez [GitHub Desktop](https://desktop.github.com/) et connectez-vous à votre compte sur l'application. Créez un fork du [dépôt officiel](https://github.com/rpgmakeralliance/wiki) puis clonez le fork avec GitHub Desktop, dans le dossier `C:\Hugo\Sites`.

Téléchargez la [dernière version de Hugo](https://github.com/gohugoio/hugo/releases) correspondant à votre système. Le fichier qui nous intéresse dans le zip est `hugo.exe`, à déplacer dans le dossier `bin`. N'oubliez pas d'ajouter ce dossier à votre Path.

Enfin, installez [Git](https://git-scm.com/downloads), sinon Hugo ne pourra pas lancer le serveur. En effet, nous utilisons Git pour obtenir la date de dernière modification en bas de page. Lors de l'installation, prenez soin de choisir une option qui ajoute Git à votre Path, sinon vous devrez l'ajouter manuellement comme vous l'avez fait pour Hugo.

### Lancer le serveur local

Ouvrez l'invite de commande en cherchant `cmd` dans Windows, puis écrivez :

```bat
cd C:\Hugo\Sites\wiki
hugo server
```

Lorsque le serveur est lancé, accédez à l'adresse `localhost:1313` avec votre navigateur. Dès que vous modifiez un fichier, la page est automatiquement reconstruite et actualisée. Arrêtez le serveur avec `Ctrl+C` dans l'invite de commandes.

Hugo propose d'autres commandes pouvant être utiles pour les utilisateurs avancés :

```
hugo server --disableLiveReload  => désactive l'actualisation du site à chaque changement
hugo server --disableFastRender  => recrée entièrement le site à chaque changement
hugo new article.md              => crée une nouvelle page pré-remplie
```

### Configuration des menus

L'aperçu en direct vous permet de plus facilement modifier les menus si besoin. Les paramètres de l'en-tête et du sommaire de gauche sont renseignés dans le fichier `config.toml`. L'organisation du sommaire peut y être éditée.

L'en-tête est appelé `global` :

```toml
[[menu.global]]
name = "Forum"
weight = 5
identifier = "forum"
url = "https://rpgmakeralliance.com/"
```

Le sommaire de gauche est appelé `docs` :

```toml
[[menu.docs]]
name = "L'Encyclopédie"
weight = 55
identifier = "meta"
url = "/encyclopedie/"
```

L'`identifier` est utilisé pour choisir un parent dans les [métadonnées d'une page]({{< ref "contribuer.md#metadonnees-des-pages" >}}).

`weight` permet d'ordonner les éléments.

`pre` et `post` permettent d'insérer du code HTML dans l'élément.

## Critères de qualité

L'Encyclopédie du making offre un contenu objectif et vérifiable, que chacun peut modifier et améliorer. Voici les critères qu'un contenu doit respecter pour être ajouté.

### Style d'écriture

Un soin particulier doit être apporté à l'écriture. Le texte doit être agréable à lire tout en étant informatif. La concision est appréciée, sans pour autant survoler les détails. Si vous souhaitez apporter vos connaissances mais avez peur de faire des fautes, soyez sans crainte : l'équipe de modération corrigera les erreurs avant de valider votre contribution. Pour faciliter leur travail, nous vous invitons à vérifier votre texte sur un site tel que [BonPatron](https://bonpatron.com/fr/).

Si vous repérez une coquille dans l'Encyclopédie, n'hésitez pas à modifier la page pour nous le signaler. Lorsqu'un choix s'impose, l'[orthographe rectifiée de 1990](https://fr.wikipedia.org/wiki/Rectifications_orthographiques_du_fran%C3%A7ais_en_1990) est préférée à l'orthographe traditionnelle.

### Informations sourcées

Il est recommandé de sourcer les informations en ajoutant une liste de liens à la fin d'une section. Cela permet aux lecteurs les plus curieux d'approfondir leurs recherches.

Dans certains cas, les informations peuvent être impossibles à sourcer. Par exemple, de nombreux évènements datant des débuts du making français sont aujourd'hui impossibles à retracer sur Internet. Afin de transmettre vos connaissances aux nouvelles générations, c'est une bonne idée d'écrire sur ces évènements malgré le manque de preuves, tant que la présentation des faits reste neutre.

### Neutralité du point de vue

Sur l'Encyclopédie, l'opinion personnelle des rédacteurs importe peu. Le plus important est de dépeindre une vision neutre de la communauté, en donnant à chaque point de vue une place représentative de son importance dans les discussions.

Autant que possible, toutes les opinions doivent être présentées, et les rédacteurs des articles ne doivent pas porter de jugement sur une position. L'Encyclopédie permet au lecteur de forger sa propre opinion, grâce à des informations fiables et objectives.

## Processus de vérification

Chaque contribution est vérifiée par l'équipe de modération avant d'être validée. Si votre contribution ne respecte pas les critères de qualité, les modérateurs réaliseront les améliorations nécessaires. N'ayez donc pas peur de contribuer sans répondre à toutes les exigences, bien que nous apprécions tous vos efforts permettant de faciliter l'étape de vérification.

Parfois, il peut arriver que la valeur d'un article soit discutable, et que son intérêt fasse débat. Dans ce cas, l'équipe de modération lancera une discussion pour récolter différents avis, et prendra la décision lui paraissant la plus bénéfique pour l'Encyclopédie. Cela peut, par exemple, prendre la forme d'une fusion avec un article déjà existant.
