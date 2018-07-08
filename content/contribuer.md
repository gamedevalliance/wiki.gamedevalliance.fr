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

## Syntaxe

Les articles de l'Encyclopédie sont écrits dans un Markdown enrichi de fonctions personnelles. Pour en apprendre plus, consultez la [documentation de la syntaxe]({{< ref "contribuer/syntaxe.md" >}}).

## Télécharger le wiki et l'éditer

Le wiki fonctionne grâce à [Hugo](https://gohugo.io/), un générateur de sites web. Chaque fois que le code source sur GitHub est modifié, notre serveur le récupère, et Hugo génère à nouveau le site.

Pour éditer le wiki plus confortablement, vous pouvez générer un aperçu de ce que vous écrivez, directement sur votre ordinateur. Pour cela, il suffit de télécharger le code source du wiki, et d'installer Hugo pour générer le site sur votre ordinateur.

Cela vous permet d'écrire des articles dans votre éditeur favori, de modifier plusieurs fichiers à la fois, et d'avoir un aperçu en temps réel de vos modifications. Les explications ci-dessous vous donnent la marche à suivre idéale si vous débutez dans le domaine.

### Obtenir les fichiers

Sur votre ordinateur, créez les dossiers qui serviront à stocker Hugo et le wiki. Dans ce guide, nous créons les chemins suivants :

```
C:\Hugo\bin     => contiendra le programme hugo.exe
       \Sites   => contiendra le wiki et vos autres sites
```

Installez [GitHub Desktop](https://desktop.github.com/) et connectez-vous à votre compte sur l'application. Créez un fork du [dépôt officiel](https://github.com/rpgmakeralliance/wiki) puis clonez le fork avec GitHub Desktop, dans le dossier `C:\Hugo\Sites`.

Téléchargez la [dernière version de Hugo](https://github.com/gohugoio/hugo/releases) correspondant à votre système. Le fichier qui nous intéresse dans le zip est `hugo.exe`, à déplacer dans le dossier `bin`. N'oubliez pas d'[ajouter ce dossier à votre Path]({{< ref "contribuer/path.md" >}}).

Enfin, installez [Git](https://git-scm.com/downloads), sinon Hugo ne pourra pas lancer le serveur. En effet, nous utilisons Git pour obtenir la date de dernière modification en bas de page. Lors de l'installation, prenez soin de choisir une option qui ajoute Git à votre Path, sinon vous devrez [l'ajouter manuellement]({{< ref "contribuer/path.md" >}}) comme vous l'avez fait pour Hugo.

### Lancer le serveur local

Ouvrez l'invite de commande en cherchant `cmd` dans Windows, puis écrivez :

```bat
cd C:\Hugo\Sites\wiki
hugo server
```

Lorsque le serveur est lancé, accédez à l'adresse `localhost:1313` avec votre navigateur. Dès que vous modifiez un fichier, la page est automatiquement reconstruite et actualisée. Arrêtez le serveur avec `Ctrl+C` dans l'invite de commandes.

Hugo propose d'autres commandes pouvant être utiles pour les utilisateurs avancés :

```
hugo server --disableFastRender  => recrée entièrement le site à chaque changement
hugo server --disableLiveReload  => désactive l'actualisation du site à chaque changement
hugo new article.md              => crée une nouvelle page pré-remplie
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
