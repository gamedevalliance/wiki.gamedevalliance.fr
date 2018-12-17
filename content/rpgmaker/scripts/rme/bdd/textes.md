Cette partie présente un usage de la [base de données]() et de deux tables internes, c'est-à-dire prédéfinies par RME.

## L'afficheur de textes à l'écran

RME possède une série de commandes pour [afficher du texte à l'écran](). Ces commandes requièrent parfois l'usage d'un profil et de couleurs. Les profils et les couleurs sont stockées dans la base de données statique pour être facilement modifiées.

Lors de l'exécution du jeu depuis l'éditeur, RME construit, si elles n'existent pas, la table `IColor` et `ITextProfile`. En général, lorsqu'une table commence par `I`, c'est que c'est une table qui sert le système.

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

Cette table est dotée d'un champ de chaîne de caractères, correspondant au nom, qui est aussi la clé primaire, puis de quatre champs d'entiers correspondant respectivement aux valeurs de rouge, vert, bleu et de transparence (255 étant opaque, 0 étant invisible). Pour ajouter une couleur, il suffit donc de se rendre dans le fichier `Database/tables/IColor.csv` et d'ajouter une ligne, de cette manière :

![Un petit gif](http://biloucorp.com/BCW/Nuki/RME/exColor.gif)

En lançant votre jeu depuis l'éditeur, les deux couleurs auront été ajoutées dans la liste des couleurs disponibles.

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

![Un petit gif](http://biloucorp.com/BCW/Nuki/RME/exProfil.gif)

Attention, la taille doit être comprise entre 7 et 96, ni plus ni moins.

N'hésitez pas à créer le plus de profils possibles, par exemple pour l'affichage de dégâts !

## Suppression des couleurs et des profils par défaut

Si vous supprimez par inadvertance des éléments par défaut, vous pouvez déplacer les tables concernées dans `Database/backups` et relancer le jeu. Les tables seront reconstruites avec les éléments par défaut, et vous pourrez copier-coller les éléments ajoutés depuis la backup.