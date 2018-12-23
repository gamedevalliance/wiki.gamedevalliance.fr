---
title: "La base de données étendue"
---

Une des choses les plus limitées de RPG Maker est la base de données. En effet, on ne peut pas créer de nouveaux champs ni de nouvelles tables. On ne peut qu'ajouter des enregistrements dans les structures déjà prévues. RME implémente un système de base de données extensible à souhait.

## Un peu de terminologie

Pour être sur la même longueur d'onde, voici un résumé du vocabulaire que l'on utilisera dans cette section.

- Une **table** est une structure de données dotée de caractéristiques.
- Un **champ** est une caractéristique d'une table.
- Un **enregistrement** est une entrée dans la base de données.
- Une **clé primaire** est un champ qui sert à identifier l'enregistrement. C'est souvent un numéro.
- Un **type** est un domaine de restriction d'une table.

A titre d'exemple, voici à quoi correspondent ces mots dans la base de données de RPG Maker :

![bddRM](http://biloucorp.com/BCW/Nuki/RME/db.png)

Nous pouvons désormais mettre des mots plus précis sur la limite de RPG Maker : alors que l'on peut ajouter autant d'enregistrements que l'on veut, on ne peut pas altérer la structure d'une table.

## Deux nouvelles bases de données

Deux bases de données ont été ajoutées à RME. La première est un complément de la base de données native, elle permet de décrire des données statiques, qui ne changeront pas en cours de jeu. La seconde est une base de données dynamique, qui est vide au départ, se remplit au cours du jeu, et est mémorisée lors des sauvegardes.

Typiquement, la base de données statique permet de décrire des nouvelles structures de données et la base de données dynamique des inventaires. La procédure de création de table est presque identique pour les deux bases de données.

## Création d'une table

Les champs de la base de données sont typés. Cela veut dire qu'à l'exécution du jeu, la base de données vérifie leur validité (dans la mesure du possible).

En général, la création d'une table se fait dans l'éditeur de script. Vous pouvez créer un champ de script libre en dessous de RME dans lequel vous écrirez vos tables. La description d'une table est structurée ainsi :

```ruby
class NomDeLaTable < TypeDeLaTable
  pk type :champ_cle_primaire
  type :un_autre_champ
  type :un_autre_champ
end
```

`type` est à remplacer par le type désiré. Par exemple, pour décrire une quête dans la base de données statique, on pourrait proposer ce schéma :

```ruby
class Quest < Static::Table
    pk integer :id
    string :name
    string :description
    integer :gold
    integer :exp
end
```

La clé primaire, signalée par `pk`, correspond à l'index d'un enregistrement. Elle doit toujours être définie et être unique à cet enregistrement. On peut s'en servir pour référencer l'enregistrement depuis une autre table.

Créons par exemple une table dynamique, pour marquer la quête comme terminée en cours de jeu :

```ruby
class Game_Quest < Dynamic::Table
    pk integer :quest_id
    boolean :finished
end
```

Ici, la clé primaire serait l'ID de la quête représentée dans la table statique.

Chaque champ doit impérativement être typé pour qu'à chaque insertion, il y ait une conversion dans le bon type (si possible).

## Survol des types possibles

Les types sont une petite coquetterie (mise en place par éthique et morale !) permettant plus de fiabilité dans la réalisation d'une base de données. Avant de se lancer dans la création d'une table, il est donc nécssaire de bien réfléchir à son système de type !

Nom | Description | Autres noms
--- | --- | ---
`integer` | Nombre entier. | `int` `natural` `fixnum`
`float` | Nombre à virgule. | `double` `real` `numeric`
`string` | Texte. | `text` `raw`
`boolean` | Booléen (`true` ou `false`). | `bool` `switch`
`poly` | Donnée RGSS/Ruby quelconque. | `polymorphic` `script` `rgss`

### Types issus du RGSS

Les types du RGSS sont un peu particuliers, car ils stockent juste l'ID d'un élément de la base de données originale. Lorsqu'on les appelle, ils donnent l'objet Ruby s'y référant. C'est un outil pratique pour faire des relations avec la base de données de RPG Maker de manière propre.

Nom | Description
--- | ---
`actor` | Héros
`class` | Classe de personnage
`item` | Objet
`weapon` | Arme
`armor` | Armure
`enemy` | Ennemi
`troop` | Groupe d'ennemis
`state` | Etat
`animation` | Animation
`tileset` | Tileset
`mapinfo` | Infos de la carte
`map` | Carte

Ces types permettent de faciliter l'accès à des données statiques de RPG Maker. Ils ne peuvent pas être utilisés comme des clés primaires.

### Les listes

Il arrive parfois qu'un champ doive être une liste de données. Il existe pour cela un constructeur de type qui prend une liste.

```ruby
list :type, :nom
list :integer, :family_members_ids # Exemple
```

Il est possible d'imbriquer les listes, pour faire des listes de listes de listes d'entiers par exemple. Mais si vous ne souhaitez pas vous embêter avec de la déduction de type, vous pouvez utiliser le type polymorphe.

## Connaitre le schéma d'une table

En jeu, il est possible de connaître le schéma d'une table, sans devoir le lire dans l'éditeur de script. Il suffit d'écrire `Nom_de_la_table.schema`.

## Insertion dans la base de données dynamique

Les insertions dans la base de données dynamique peuvent être effectuées dans un script ou un appel de script.

```ruby
Nom_de_la_table.insert(valeur_du_champ1, champ2, etc)
```

Notez qu'aucun champ ne peut être ommis.

## Fonctionnement de la base de données statique

Lancer le jeu depuis l'éditeur génèrera les fichiers de la base de données dans le dossier `Database/tables` créé à la racine du projet. Une table statique est un fichier `csv`, donc modifiable via Excel ou l'éditeur de code de votre choix. Chaque ligne correspond à un nouvel enregistrement. L'exécution depuis l'éditeur crée aussi un fichier `Data/StaticDB.rvdata2` qui comprend une version compilée de la base de données statique. De ce fait, lorsque le jeu est fini, le répertoire `Database` peut être supprimé.

(Le répertoire `backups` va être présenté dans la section suivante, le répertoire `views`, lui, contient des données de configuration des tables et ne doit pas être modifié ou utilisé).

### Modification d'une table

Si on change la structure d'une table, en ajoutant un nouveau champ par exemple, alors que le fichier `csv` avait déjà été construit, la table est vidée. En effet, le script ne peut pas deviner comment adapter la modification de la table.

Cependant, pas de panique ! Une version de la table avant la modification est stockée dans le répertoire `Database/backups`, avec un identifiant unique. On peut donc retrouver le contenu d'une table malgré une modification de sa structure.

### Suppression d'une table

Si une table est supprimée, son fichier `csv` est là aussi déplacé dans `Database/backups`. Normalement, on ne perd jamais de table sans le désirer.

### Accès aux champs

Maintenant que vous savez renseigner des enregistrements dans une table, nous allons voir comment récupérer leurs données en jeu. Pour cette partie, une connaissance des tableaux est préférable, mais pas obligatoire.

On peut connaitre le nombre d'enregistrements d'une table avec la méthode `count`. Par exemple, pour obtenir le nombre de quêtes enregistrées : `Quest.count`. Pour renvoyer tous

Pour accéder à un enregistrement en particulier, on écrit `Table[clé primaire]`. Par exemple, `Quest[1]` pourra renvoyer l'objet Quest suivant :

```ruby
(1, "Tuer les slimes", "Il faut tuer 10 slimes", 100, 200)
```

Pour récupérer un champ précis uniquement, il suffit d'ajouter son nom à la suite. Pour obtenir le nom de la quête 1, on écrit `Quest[1].name`.

On peut aussi obtenir tous les objets Quest d'un coup avec `Quest.all`.

#### Itération sur une table

Il est possible d'effectuer une itération sur une table, en suivant ce modèle :

```ruby
Table.each{|pk, record| vos commandes ici}
```

Voici un exemple affichant le nom de toutes les quêtes via leur clé primaire :

```ruby
Quest.each do |pk, record|
	p "#{pk} -> #{record.name}"
end
```

L'itération sur une table fonctionne comme l'itération sur un tableau, où l'index est la clé primaire `pk` de l'enregistrement `record`.

## Cas particuliers du mode dynamique

Rappelons que la base de données dynamique peut être modifiée au cours du jeu. Il est possible d'ajouter, de modifier et de supprimer des enregistrements. La procédure d'insertion est la même que pour la base de données statique, mais elle peut être utilisée partout et sauvegarde les changements.

Pour modifier un champ, il suffit d'accéder au champ et de lui attribuer une nouvelle valeur.

```ruby
Game_Quest[10].finished = true
```

`Table.delete(pk)` supprime l'enregistrement correspondant à la clé primaire donnée.

`Table.delete_if{|pk, record| prédicat}` supprime tous les enregistrements correspondant au prédicat. Par exemple, pour supprimer toutes les quêtes dans `Game_Quest` dont l'or rapporté est supérieur à 10 :

```ruby
Game_Quest.delete_if{|pk, rec| Quest[rec.quest_id].gold > 10}
```

Il s'agit d'une requête composée qui va interroger la table statique `Quest`.

## Mapping de la base de données standard

Afin de profiter de cette agréable syntaxe pour la base de données standard de RPG Maker, RME construit plusieurs tables statiques préfixées de `VXACE_`.

- `VXACE_ACTOR`
- `VXACE_CLASS`
- `VXACE_SKILL`
- `VXACE_ITEM`
- `VXACE_WEAPON`
- `VXACE_ARMOR`
- `VXACE_ENEMY`
- `VXACE_TROOP`
- `VXACE_STATE`
- `VXACE_ANIMATION`
- `VXACE_TILESET`
- `VXACE_MAP`

On peut appliquer à ces tables les mêmes fonctions qu'aux tables statiques. Pour connaitre leurs champs, rendez-vous dans la documentation du module `RPG` de RPG Maker VX Ace. Les données sont typées, y compris les listes.

La table `VXACE_MAP` est un peu particulière car elle fusionne les informations de `MapInfo` et `Map`. Il est donc possible d'accéder aux champs des deux structures via un seul enregistrement. Par exemple, obtenir les notes d'une carte revient à écrire : `VXACE_MAP[ID].note`.

### Tables internes

Il existe des tables internes utilisées par RME. Elles commencent par un `I`, par exemple `IColor` pour les profils de couleur. Si par mégarde vous en supprimez une, ce n'est pas grave : ces fichiers sont régénérés s'ils n'existent pas.

## Conclusion

Cet outil peut être assez compliqué à prendre en main pour un débutant. Il est recommandé d'avoir une base en programmation avec Ruby. Cependant, il peut faciliter la création de systèmes. L'équipe RME s'en sert en interne pour plusieurs choses, notamment l'afficheur de textes !