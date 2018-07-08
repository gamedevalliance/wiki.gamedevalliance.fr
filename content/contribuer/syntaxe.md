---
title: "Documentation de la syntaxe"
description: "Consultez la liste des commandes Markdown pour mettre en forme vos texes, et des fonctionnalités supplémentaires de l'Encyclopédie pour afficher des vidéos et plus encore."
---

Les articles de l'Encyclopédie sont écrits en Markdown, une syntaxe simple et populaire, également utilisée sur notre forum, Discord, GitHub, et bien d'autres services.

Parfois, Markdown est insuffisant, par exemple pour ajouter des légendes aux images, ou afficher une vidéo. Dans ces cas-là, il est possible d'écrire du HTML brut, mais c'est en contradiction avec la simplicité du Markdown qui rend accessible à tous l'édition des pages. C'est pourquoi nous utilisons des shortcodes, écrits `{{</* shortcode */>}}`, afin d'utiliser des fonctionnalités avancées sans impacter la lisibilité.

## Mise en forme du contenu

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

## Configuration des pages

### Métadonnées

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

### Menu et sommaire

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

L'`identifier` est utilisé pour choisir un parent dans les [métadonnées d'une page](#metadonnees).

`weight` permet d'ordonner les éléments.

`pre` et `post` permettent d'insérer du code HTML dans l'élément.
