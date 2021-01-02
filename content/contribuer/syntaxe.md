---
title: "Documentation de la syntaxe"
description: "Consultez la liste des commandes Markdown pour mettre en forme vos textes ainsi que des fonctionnalités supplémentaires du wiki pour afficher des vidéos et plus encore."
---

Les articles du wiki sont écrits en Markdown, une syntaxe simple et populaire également utilisée sur GitHub, Discord et bien d'autres services.

Markdown est parfois insuffisant, par exemple pour ajouter des légendes aux images ou afficher une vidéo. Dans ces cas-là, il est possible d'écrire du HTML brut, mais c'est en contradiction avec la simplicité du Markdown qui rend accessible à tous l'édition des pages. C'est pourquoi nous utilisons des shortcodes, écrits `{{</* shortcode */>}}`, afin d'utiliser des fonctionnalités avancées sans impacter la lisibilité.

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

Ecrire `ruby`, `javascript` ou un autre nom de langage est facultatif et déclenche la coloration syntaxique.

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
Voici le [serveur Discord](https://discord.gg/RrBppaj) de GDA.
```

Le shortcode `ref` génère un lien vers une page du wiki. Ecrivez directement le nom du fichier Markdown `.md`. Pour pointer vers un titre précis d'une page, ajoutez son ancre `#` comme elle apparait dans l'URL.

```
{{</* ref "scripts.md" */>}}              => https://wiki.gamedevalliance.fr/scripts
{{</* ref "scripts/fullscreen++.md" */>}} => https://wiki.gamedevalliance.fr/scripts/fullscreen++
{{</* ref "jeux.md#laxius-power" */>}}    => https://wiki.gamedevalliance.fr/jeux#laxius-power
```

Combinez ce shortcode avec un lien Markdown pour obtenir un résultat agréable :

```md
Choisissez le [déclencheur]({{</* ref "rpgmaker/vue-d-ensemble.md#declenchement" */>}}) de votre évènement.
```

### Images et figures

Les images sont à ajouter dans le dossier `images`. Par exemple, si votre article est à l'adresse :

```
content/unity/mon-article.md
```

Créez le dossier suivant pour votre image :

```
images/unity/mon-article/illustration.png
```

Dans votre article, vous pouvez maintenant utiliser la syntaxe Markdown pour afficher l'image. Une image commence par un point d'exclamation `!` suivi d'un texte alternatif entre crochets `[]` et du lien vers l'image entre parenthèses `()`. Le texte alternatif est une description de l'image pour les lecteurs d'écran et les robots.

```md
![Texte alternatif](illustration.png)
```

Il est préférable de mettre le chemin complet afin de s'assurer que le lien vers l'image reste fiable à l'avenir :

```md
![Texte alternatif](/unity/illustration.png)
```

Cette syntaxe simple est insuffisante lorsqu'on veut placer l'image sur le côté ou ajouter une légende. En HTML, l'élément `<figure>` permet d'ajouter une légende sous l'image. Le shortcode suivant permet de générer facilement une figure :

```go
{{</* figure class="align-right" src="/unity/illustration.png" alt="Texte alternatif" caption="Légende" */>}}
```

Alignez l'image à gauche ou à droite avec `class="align-left"` ou `class="align-right"`. Retirez ce paramètre pour garder l'image au centre. Affichez une légende sous l'image avec `caption="Légende"`. Ajoutez un texte alternatif décrivant le contenu de l'image pour les malvoyants et les robots avec `alt="Texte"`.

### Vidéos et intégrations

Vous pouvez déposer vos vidéos dans le dossier `videos` et créer un sous-dossier pour votre page, de la même manière que pour les [images](#images-et-figures). Trois formats sont supportés : `mp4`, `webm`, et `ogg`.

Par défaut, une vidéo est en lecture automatique et boucle sans le son (attributs `autoplay muted loop`). Cela permet d'imiter le comportement d'un gif animé tout en profitant des avantages d'une vidéo : une meilleure qualité et un fichier plus léger. Vous pouvez consulter des exemples sur la page du script [Scroll Pictures]({{< ref "scrollpictures.md" >}}).

```go
{{</* video class="align-right" src="/rpgmaker/scripts/scrollpictures/poussiere.mp4" caption="La poussière flotte dans la lumière de la fenêtre." */>}}
{{</* video src="/rpgmaker/scripts/scrollpictures/fumee.mp4" alt="Capture d'écran de RPG Maker XP" caption="De la fumée dans un couloir." */>}}
```

Vous pouvez aligner la vidéo à gauche ou à droite avec `class="align-left"` ou `class="align-right"`. Affichez une légende sous la vidéo avec `caption="Légende"`. Ajoutez un texte alternatif avec `alt="Texte"`.

En spécifiant vos propres attributs avec `attr="…"`, vous remplacez les attributs par défaut `autoplay muted loop`. Par exemple, ajouter l'attribut `controls` permet d'afficher un bouton pause et une barre de progression.

```go
{{</* video src="/rpgmaker/demo.webm" attr="autoplay muted loop controls" */>}}
```

Les shortcodes suivants permettent d'intégrer des vidéos YouTube et Vimeo, des gists, des tweets et des images Instagram :

```html
{{</* youtube HKXL-0i7uAM */>}}        => https://www.youtube.com/watch?v=HKXL-0i7uAM
{{</* vimeo 146022717 */>}}            => https://vimeo.com/146022717
{{< nicovideo sm17957227 "Légende" >}} => https://www.nicovideo.jp/watch/sm17957227
{{</* gist spf13 7896402 */>}}         => https://gist.github.com/spf13/7896402
{{</* tweet 877500564405444608 */>}}   => https://twitter.com/spf13/status/877500564405444608
{{</* instagram BWNjjyYFxVx */>}}      => https://www.instagram.com/p/BWNjjyYFxVx/
```

## Configuration des pages

### Métadonnées

Au début de chaque fichier sont renseignées les métadonnées de la page : son titre, sa description, etc. La description, idéalement de deux ou trois phrases, est affichée lors du partage sur les réseaux sociaux, Discord, etc.

```yaml
title: "Liste des scripts pour RPG Maker"
description: "Téléchargez des scripts pour ajouter de nouvelles fonctionnalités à vos jeux RPG Maker."
```

Le wiki est divisé en [portails](#portails-et-sommaires), ce qui signifie que lorsque vous visitez une page consacrée à [RPG Maker]({{< ref "/content/rpgmaker.md" >}}), seul le sommaire `rpgmaker` est affiché à gauche. Si rien n'est spécifié, le sommaire `general` est affiché.

```yaml
portail: rpgmaker
```

Chaque sommaire est divisé en catégories. Par exemple, dans le cas du portail `rpgmaker`, il existe la catégorie « Scripts » dont l'identifiant est `scripts`. Vous pouvez afficher votre page dans un ou plusieurs sommaires ainsi :

```yaml
menu:
  rpgmaker:                   # Nom du portail
    name: "Liste des scripts" # Titre affiché dans le sommaire (facultatif)
    parent: scripts           # Catégorie du sommaire
    weight: 2                 # Ordre au sein de la catégorie
```

Les noms des portails et des catégories sont situés dans le fichier `config.toml`.

D'autres paramètres permettent de personnaliser les fonctionnalités du wiki pour une page spécifique :

* `og_image: "{IMAGE_URL}"` permet de changer l'icône Open Graph affichée lorsque la page est partagée.
* `onthispage: false` désactive le sommaire de droite.
* `tocmaxdepth: 2` limite le sommaire de droite aux titres de deuxième niveau `##`.

### Portails et sommaires

L'en-tête, le sommaire de gauche et les portails peuvent être édités dans le fichier `config.toml`.

Les liens de l'en-tête sont dans `[[menu.global]]` :

```toml
[[menu.global]]
name = "Site"
weight = 5
identifier = "site"
url = "https://gamedevalliance.fr/"
```

On peut facilement créer de nouveaux portails dans ce fichier : pour créer le portail `cool`, il suffit d'écrire `[[menu.cool]]` et lui ajouter une ou plusieurs catégories.

Par exemple, voici la catégorie « Scripts » dans le portail `rpgmaker` :

```toml
[[menu.rpgmaker]]
name = "Scripts"
weight = 30
identifier = "scripts"
url = "/scripts/"
```

L'`identifier` est utilisé pour choisir un parent dans les [métadonnées d'une page](#metadonnees).

`weight` permet d'ordonner les éléments.

`pre` et `post` permettent d'insérer du code HTML dans l'élément.

`[[menu.general]]` est un portail spécial, qui s'affiche sur l'accueil du site ou sur toute page qui n'a pas de portail.

Facultatif : on peut donner un surnom aux portails dans `/data/portals.yaml`.
