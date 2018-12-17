Une des choses les plus "limitées" de RPG Maker est la base de données. En effet, on ne peut pas créer de nouveaux champs ni de nouvelles tables. On ne peut qu'ajouter des enregistrements dans les structures déjà prévues. Dans l'idéologie générale de RME, nous avons implémenté un système de base de données extensible à souhait.

## Un peu de terminologie

Pour être sur la même longueur d'onde, voici un résumé du vocabulaire que l'on utilisera dans cette section.

*   Une **table** est une structure de données dotée de caractéristiques
*   Un **champ** est une caractéristique de tables
*   Un **enregistrement** est une entrée dans la base de données
*   Une **clé primaire** est un champ qui sert à l'indexation des enregistrements
*   Un type est un domaine de restriction d'une table (mais c'est plus optionnel de le savoir;))

Par exemple, dans la base de données de RPG Maker, voici un exemple de à quoi correspondent ces mots :

![bddRM](http://biloucorp.com/BCW/Nuki/RME/db.png)

Et comme vous pouvez le voir, alors que l'on peut ajouter autant d'enregistrements que l'on veut, on ne peut pas altérer la structure d'une table.

## Deux types de base de données ajoutées

Deux bases de données ont été ajoutées à RME. La première est un complément de la base de données native, elle permet de décrire des données statiques, qui ne changeront pas en cours de jeu. La seconde est une base de données dynamique, qui elle est vide au lancement du jeu et est remplie en cours de jeu (et sauvegardée lors des sauvegardes). Typiquement, la base de données statique permet de décrire des nouvelles structures de données et la base de données dynamique des inventaires. La procédure de création de table est presque identique pour les deux bases de données.

### Des champs typés

Les champs de la base de données sont typés. Ce qui veut dire qu'à l'exécution du jeu, la base de données vérifie leur validité (dans la mesure du possible). Par contre, il est nécessaire d'exprimer ces champs.

### Création d'une table

En règle générale, la création d'une table se fait dans l'éditeur de script. J'ai pris l'habitude de réserver un champ de script libre en dessous des composants de RME dans lequel j'écris toutes mes tables. La description d'une table est de cette sorte :

```ruby
class NomDeLaTable < TypeDeLaTable
  pk type :champ_cle_primaire
  type :un_autre_champ
  type :encore_un_autre_champ
end
```

La ligne `type :quelqchose`, type est à remplacer par le type désiré. Par exemple, pour représenter la description d'une quête dans la base de données statique on pourrait proposer ce schéma :

```ruby
class Quest < Static::Table
    pk integer :id
    string :name
    string :description
    integer :gold
    integer :exp
end
```

Et pour sa version dynamique :

```ruby
class Game_Quest < Dynamic::Table
    pk integer :quest_id
    boolean :finished
end
```

Où la clé primaire serait l'id de la Quête représenté statiquement.
Chaque champ doit impérativement être typé pour qu'à chaque insertion, il y ait une conversion dans le bon type (si possible).

#### A propos de la clé primaire

La clé primaire correspond à l'index d'un enregistrement. Elle doit donc toujours impérativement être définie (et à l'insertion nous verrons qu'elle doit toujours être unique !)

#### Survol des types possibles

Les types sont une petite coquetterie (mise en place par éthique et morale !) qui permettent plus de fiabilité dans la réalisation d'une base de données. Avant de se lancer dans la création d'une table, il est donc nécéssaire de bien réfléchir à son système de type :)

*    `integer` type qui représente les nombre entiers
     * _Autre nom_ : `int` `natural` `fixnum`

*    `float` type qui représente les nombres à virgule
     * _Autre nom_ : `double` `real` `numeric`

*    `string` type qui représente les textes
     * _Autre nom_ : `text` `raw`

*    `boolean` type qui représente les booléens (true ou false)
     * _Autre nom_ : `bool` `switch`

*    `poly` type qui représente une donnée RGSS/Ruby quelconque (donc un affreux type qui peut prendre n'importe quel type... beurk)
     * _Autre nom_ : `polymorphic` `script` `rgss`

##### Types issus du RGSS

Les types du RGSS sont un petit peu particuliers, car ils stockent juste l'ID d'un élément de la base de données originale et lorsque on les appelle, ils donnent l'objet Ruby s'y référant. (C'est un outil pratique pour faire des relations avec la base de données de RM de manière propre)

*    `actor` type qui représente un actor (un héros)
*    `klass` type qui représente les classes de personnages
*    `item` type qui représente les objets
*    `weapon` type qui représente les armes
*    `armor` type qui représente les armures
*    `enemy` type qui représente les ennemis
*    `troop` type qui représente les groupes d'ennemis
*    `state` type qui représente les états
*    `animation` type qui représente les animations
*    `tileset` type qui représente les tilesets
*    `mapinfo` type qui représente les infos de map
*    `map` type qui représente une map

Comme dit dans l'introduction de cette section ces types permettent de faciliter l'accès à des données statiques de RPG Maker. Ils ne peuvent pas être utilisés comme des clés primaires.

##### Le type particulier, la Liste

Il arrive parfois qu'un champ doive être une liste de données, pour ça il existe un constructeur de type qui prend une liste :
*    `list :type, :nom` : Il est aussi possible d'imbriquer les listes (de faire des listes de listes de listes d'entiers par exemple), mais pour ceux qui ne veulent pas s'embêter avec de la déduction de type, vous n'avez qu'à utiliser l'__affreux type polymorphe__ :)

##### Un dernier exemple pour la route

```ruby
# Une table super cheloue
class Table_Louche < Static::Table
	pk integer :id
	string :name
	string :nickname
	boolean :male
	list :integer, :parents_ids
	actor :heroes
end
```

##### Connaitre le schéma d'une table

InGame, il est possible de connaître le schéma d'une table, sans devoir aller le lire dans l'éditeur de script. En effet, il suffit de faire : `Table.schema`, où Table est le nom de la table. Par exemple, pour notre exemple précédent, il faudrait faire `Table_Louche.schema`.

## Insertion dans la base de données dynamique

Les insertions dans la base de données dynamique peuvent être effectuées dans l'éditeur de script, ou dans un appel d'évènement. La syntaxe est : `LaTableOuInsererQuelqueChose.insert(ValeurDuChamp1, ValeurDuChamp2, ValeurDuChamp3 etc.)`. Aucun champ ne peut être ommis.

## Fonctionnement de la base de données statique

L'exécution du projet depuis l'éditeur génèrera les fichiers de remplissage de la base de données dans le dossier `Database/tables/` créé à la racine de votre projet. Une table statique est un fichier `csv`(donc éditable via Excel ou LibreOffice Calc) que l'on peut remplir. Chaque ligne correspondant à un nouvel enregistrement. L'exécution en mode tests crée aussi un fichier `Data/StaticDB.rvdata2` qui comprend une version compilée de la base de données statique. De ce fait, lorsque le jeu est fini, en compilant (et cryptant le projet), le répertoire `Database` peut être supprimé.
(Le répertoire `backups` va être présenté dans la section suivante, le répertoire `views`, lui, contient des données de configuration des tables et ne doit pas être modifié ou utilisé).

### Modification de la structure d'une table

Si alors qu'une table a déjà été construite, on change sa structure, le nom d'un champ ou son type, par exemple, ou alors qu'on ajoute deux trois champs, la table est vidée. En effet, le script ne peut pas deviner comment adapter la modification de la table. Cependant, pas de panique, une version de la table avant la modification est stockée dans le répertoire `Database/backups`, avec un identifiant unique. On peut donc ne pas perdre le contenu d'une table malgré une modification de sa structure.

### Suppression d'une table

Si une table est supprimée, son fichier `csv` est déplacé dans `Database/backups` lui aussi. On ne perd à priori jamais de table sans le désirer. Vous pouvez vider (ou supprimer) ce dossier sans aucun souci à tout moment. Si la table n'est pas supprimée de l'éditeur de script, un fichier de table (.csv) vierge sera recrée.

### Exemple de création de tables et de champs en image

![Un gros gif](http://biloucorp.com/BCW/Nuki/RME/exDB.gif)

### Accès aux champs

>Pour cette partie, une connaissance des `tableaux`/`hash` est fortemment conseillée ;)

C'est bien mignon de pouvoir faire des insertions, mais si l'on ne peut récupérer des informations d'une table, ça ne sert pas à grand chose :

##### Nombre d'enregistrement dans une table

Il est très facile de connaître le nombre d'enregistrements d'une table, il suffit d'utiliser la méthode `count` sur cette table. Par exemple, pour avoir le nombre de quêtes sauvées : `Quest.count`.

##### Accéder à un record en particulier

Pour cela, il suffit de faire : `Table[Sa clé primaire]`. Par exemple, `Quest[1]` renverra l'objet Quest `(1, "Tuer les slimes", "Il faut tuer 10 slimes", 100, 200)`. De même, pour accéder à un champ, il suffit de le faire suivre du champ. Si je veux le nom de la Quête 1, je n'ai qu'a faire `Quest[1].name`.

##### Itération sur une table

Il est possible d'effectuer une itération sur une table, au moyen de `Table.each{|pk, record| faite ce que vous voulez ici}`, par exemple, pour afficher le nom de toutes les quêtes via leur clé primaire, il suffit de faire :

```ruby
Quest.each do |pk, record|
	p "#{pk} -> #{record.name}"
end
```

L'itération sur une table fonctionne comme l'itération sur un Hash, ou l'index est la clé primaire du record.

##### Renvoyer tous les records

Il suffit d'utiliser `Table.all`, par exemple : `Quest.all` renvoie tous les objets quests.

### Cas particuliers dans le mode Dynamique

Comme il a été dit dans les sections précédentes, la base de données __dynamique__ permet, a contrario de la base de données __statique__ de tenir en compte les changements en cours de jeu. Il est donc possible de modifier les enregistrements. Ajouter/Supprimer/Editer des records. La procédure d'insertion est la même que pour la base de données statique. Mais elle peut être utilisée partout et sauvegarde les changements.

*    `Table.delete(Primary_key)` Supprimera de la table le record correspondant à la clé primaire passée en argument.
*    `Table.delete_if{|pk, record| prédicat}` Supprimera de la table tous les records correspondant au prédicat passé en argument.

Par exemple, pour supprimer toutes les quêtes (`Game_Quest` cette fois) dont l'or rapporté est supérieur à 10 :
`Game_Quest.delete_if{|pk, rec| Quest[rec.quest_id].gold > 10}` (Il s'agit d'une requête composée qui va interroger la table statique `Quest`).

Pour la modification des champs, il suffit d'accèder au champ et d'en modifier la valeur. Démonstration :

`Game_Quest[10].finished = true`, la quête dynamique dont l'ID est 10 aura l'attribut `finished` mis à `true`. Rien de bien compliqué.

### Mapping de la base de données standard

Histoire de faire profiter de la très agréable syntaxe du système de base de données à toutes les données RM, le script construit des tables (statiques) référentes à la base de données standard de RPG Maker. Elles sont préfixées de `VXACE_` et leur nom est en majuscule :

*    `VXACE_ACTOR`
*    `VXACE_CLASS`
*    `VXACE_SKILL`
*    `VXACE_ITEM`
*    `VXACE_WEAPON`
*    `VXACE_ARMOR`
*    `VXACE_ENEMY`
*    `VXACE_TROOP`
*    `VXACE_STATE`
*    `VXACE_ANIMATION`
*    `VXACE_TILESET`
*    `VXACE_MAP`

Toutes ces tables sont disponnibles et ont peut leur appliquer les mêmes fonctions qu'aux tables statiques. Pour connaître leur champ, il suffit de se rendre dans la documentation du module `RPG` de RPG Maker VX Ace. Leur type a été inféré intelligemment et donc les données sont typées (y compris les listes).

#### Spécification de la table VXACE_MAP

Cette table est un peu particulière car elle fusionne les informations de `MapInfo` et `Map`. Il est donc possible d'accéder aux champs des deux structures via un seul record. Par exemple, obtenir les notes d'une carte revient à faire : `VXACE_MAP[ID].note`.

### Tables internes

Il existe des tables internes, dont RME se sert. Par convention, elles commencent par un `i` majuscule. Par exemple `IColor` pour les couleurs enregistrées. Si par malheur vous en supprimez une, ce n'est pas grave, ces fichiers sont régénérés s'ils n'existent pas.

## Conclusion

Cet outil est assez compliqué à prendre en main pour un débutant, il est recommandé d'avoir une base en programmation (avec Ruby). Cependant, il peut faciliter la création de systèmes. Nous nous en servons, en interne pour plusieurs choses, comme par exemple l'outil pour afficher du texte à l'écran !