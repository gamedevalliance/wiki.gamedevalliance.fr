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

## Editer l'Encyclopédie

### Modifier une page

{{< youtube iTtZuuJB2Jw >}}

### Télécharger le wiki et modifier en profondeur

Vidéo disponible dans les prochaines heures.

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

### Liens

Créez un lien en entourant le texte cliquable de crochets `[]`, puis en entourant l'URL de parenthèses `()`.

```md
Voici le [serveur Discord](https://discord.gg/RrBppaj) de RMA.
```

### Liens internes au wiki

Le shortcode `ref` génère un lien vers une page du wiki. Ecrivez directement le nom du fichier Markdown `.md`. Pour pointer vers un titre précis d'une page, ajoutez son ancre `#` comme elle apparait dans l'URL.

```
{{</* ref "scripts.md" */>}}              => https://wiki.rpgmakeralliance.com/scripts/
{{</* ref "scripts/fullscreen++.md" */>}} => https://wiki.rpgmakeralliance.com/scripts/fullscreen++/
{{</* ref "jeux.md#laxius-power" */>}}    => https://wiki.rpgmakeralliance.com/jeux#laxius-power
```

Combinez ce shortcode avec un lien Markdown pour obtenir un résultat agréable :

```md
Choisissez le [déclencheur]({{</* ref "evenements.md#declenchement" */>}}) de votre évènement.
```

### Images et figures

En Markdown, on crée une image en commençant par un point d'exclamation `!`, en entourant le texte alternatif de crochets `[]` et en entourant le lien vers l'image de parenthèses `()`. Le texte alternatif est utilisé lorsque l'image ne peut pas être affichée.

```md
![Texte alternatif](/images/something.png)
```

Cependant, cette syntaxe est parfois insuffisante. En HTML, l'élément `<figure>` permet d'ajouter une légende sous l'image. Le shortcode suivant permet de générer facilement une figure :

```html
{{</* figure class="align-right" src="/images/something.png" alt="Texte alternatif" caption="Légende" */>}}
```

Pour aligner l'image à gauche, écrivez `class="align-left"` et pour l'aligner à droite, écrivez `class="align-right"`. Retirez ce paramètre pour garder l'image au centre. De la même façon, vous pouvez retirer les attributs `alt` et `caption` si vous n'en avez pas besoin.

### Vidéos et intégrations

Les shortcodes suivants permettent d'intégrer des vidéos, des gists, des tweets et des images Instagram.

```html
{{</* youtube HKXL-0i7uAM */>}}      => https://www.youtube.com/watch?v=HKXL-0i7uAM
{{</* vimeo 146022717 */>}}          => https://vimeo.com/channels/staffpicks/146022717
{{</* gist spf13 7896402 */>}}       => https://gist.github.com/spf13/7896402
{{</* tweet 877500564405444608 */>}} => https://twitter.com/spf13/status/877500564405444608
{{</* instagram BWNjjyYFxVx */>}}    => https://www.instagram.com/p/BWNjjyYFxVx/
```

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
