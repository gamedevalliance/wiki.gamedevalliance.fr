---
title: Profils de texte et couleurs
portail: rme
menu:
  rme:
    name: "Textes et couleurs"
    parent: bdd
    weight: 2
---

Cette partie présente un usage de la [base de données]({{< ref "/rme/bdd.md" >}}) et de deux tables internes, c'est-à-dire prédéfinies par RME.

## L'afficheur de textes à l'écran

RME possède une série de commandes pour [afficher du texte à l'écran](http://rmex.github.io/RMEDoc/#text_show). Ces commandes requièrent parfois l'usage d'un profil et de couleurs. Lors de l'exécution du jeu depuis l'éditeur, RME construit, si elles n'existent pas, les tables `IColor` et `ITextProfile`.

### Créer une couleur

Premièrement, voyons le schéma de la table `IColor` :

```ruby
class IColor < Static::Table
  pk string :name
  integer :red
  integer :green
  integer :blue
  integer :alpha
end
```

Cette table est dotée d'un champ de texte correspondant au nom de la couleur, puis de quatre champs d'entiers pour le rouge, le vert, le bleu et la transparence (255 étant opaque, 0 étant invisible). Pour ajouter une couleur, il suffit donc de se rendre dans le fichier `Database/tables/IColor.csv` et d'ajouter une ligne, de cette manière :

{{< figure src="/images/rme/bdd/textes/color.png" alt="IColor.csv" caption="Ajout d'une ligne pink" >}}

En lançant votre jeu depuis l'éditeur, la ligne est ajoutée à la liste des couleurs disponibles.

### Construction d'un profil

Voici le schéma des profils :

```ruby
class ITextProfile < Static::Table
  pk string :name
  integer :size
  string :font
  string :color_name
  boolean :italic
  boolean :bold
  boolean :outline
  string :outline_color_name
  boolean :shadow
end
```

Il suffit de modifier le fichier `Database/tables/ITextProfile.csv`, comme pour la couleur :

{{< figure src="/images/rme/bdd/textes/textprofile.png" alt="ITextProfile.csv" caption="Ajout d'une ligne pinktext" >}}

Attention, la taille doit être comprise entre 7 et 96. N'hésitez pas à créer le plus de profils possibles, par exemple pour l'affichage de dégâts !

## Suppression des couleurs et des profils par défaut

Si vous supprimez par inadvertance des éléments par défaut, vous pouvez déplacer les tables concernées dans `Database/backups` et relancer le jeu. Les tables seront reconstruites avec les éléments par défaut et vous pourrez copier-coller les éléments ajoutés depuis la backup.