---
title: "Comprendre le langage Ren'Py"
description: "Avant d'apprendre le langage de Ren'Py, commençons par décrire la structure d'un script Ren'Py et comprendre comment il fonctionne."
portail: renpy
menu:
  renpy:
    name: "Comprendre le langage"
    parent: progresser
    weight: 2
---

Avant de réellement apprendre le langage, nous allons décrire la structure d'un script Ren'Py et comprendre son fonctionnement. Dans cette section, vous verrez comment diviser votre script en blocs et y écrire des instructions.

## Fichiers

Tous les fichiers `.rpy` présents dans le répertoire du jeu composent le script. Ren'Py examinera chacun de ces fichiers dans l'ordre Unicode.

En règle générale, il n'y a aucune différence entre un script divisé en plusieurs petits fichiers et un script composé d'un seul gros fichier. Ren'Py peut passer d'un fichier à un autre en utilisant les sauts et les labels. Au-delà des goûts personnels, cela dépend aussi de la taille de votre projet : plusieurs petits fichiers de quelques lignes pour un projet modeste serait une perte de temps et une source d'erreurs. A contrario, diviser un énorme projet en plusieurs fichiers peut vous aider à vous repérer et permettre une meilleure vue d'ensemble.

Pour accélérer le temps de chargement, Ren'Py compilera les fichiers `.rpy` en fichiers `.rpyc` lors du démarrage. Lorsqu'un fichier `.rpy` est modifié, le fichier `.rpyc` est mis à jour au démarrage de Ren'Py. Toutefois, si un fichier `.rpyc` existe sans un fichier `.rpy` correspondant, le fichier `.rpyc` sera quand même utilisé. Cela peut entraîner des problèmes si un fichier `.rpy` est supprimé sans supprimer le fichier `.rpyc` !

Les noms de fichiers doivent commencer par une lettre ou un chiffre qui ne soit pas `00`, ces fichiers étant ceux de base du logiciel. Évitez également, comme dans tous les moteurs anglophones, d'utiliser des accents dans les noms de fichiers.

### Dossier principal

Le dossier principal ("Base Directory" en anglais) contient tous les fichiers du jeu. Des fichiers tels que le README doivent être placés dans le dossier principal à partir duquel ils seront distribués.

Ce dossier principal est créé dans le dossier Ren'Py et porte le nom de votre jeu. Par exemple, si votre jeu s'appelle "HelloWorld", votre dossier principal sera `renpy-x.xx/HelloWorld`.

### Dossier du jeu

Le dossier de votre jeu est presque toujours un répertoire nommé `game` situé dans le dossier principal. Par exemple, si votre dossier principal est `renpy-x.xx/HelloWorld`, le dossier de votre jeu sera `renpy-x.xx/HelloWorld/game`.

Toutefois, il est possible d'appeler autrement le dossier du jeu. Ren'Py effectue une recherche dans les dossiers dans l'ordre suivant :

* Le nom de l'exécutable, sans le suffixe. Par exemple, si l'exécutable s'appelle `moonlight.exe`, un dossier nommé `moonlight` sera recherché dans le dossier principal.
* Le nom de l'exécutable, sans le préfixe se terminant par `_`. Par exemple, si l'exécutable est `moonlight_en.exe`, Ren'Py recherchera un dossier nommé `en`.
* Les dossiers `game`, `data` et `launcher`, dans cet ordre.

Notez que le lanceur ne reconnaîtra correctement que les répertoires `game` et `data`.

Le dossier du jeu contient tous les fichiers utilisés par votre jeu. Avec tous ses sous-dossiers, il est analysé pour combiner les fichiers `.rpy` et `.rpyc` et ainsi former le script de jeu. Il est également scanné pour les fichiers d'archive `.rpa` et ceux-ci sont automatiquement utilisés par le jeu. Enfin, lorsque le jeu cherche un fichier à charger, il le fait par rapport au répertoire du jeu (mais `config.searchpath` peut changer cela).

## Commentaires

Un fichier de script Ren'Py peut contenir des commentaires. Un commentaire commence par un signe dièse `#` et se termine à la fin de la ligne.

```python
# Ceci est un commentaire.
show black # Ceci est un commentaire, mais le show black ne l'est pas.
"# Ceci n'est pas un commentaire, parce qu'il est contenu dans un texte."
```

Ren'Py ignore les commentaires : le script continue comme s'ils n'étaient pas là. Ceux-ci vous permettent donc d'écrire des mémos pour vous souvenir de ce que fait votre script et vous organiser. C'est essentiel si vous travaillez en équipe ou si votre projet s'étale dans le temps !

## Lignes logiques

Un fichier de script est divisé en *lignes logiques*. Une ligne logique commence au début d'une ligne et se termine à la fin de la ligne, sauf si :

- Le dernier caractère de la ligne est un *backslash* `\`.
- La ligne contient une parenthèse ouverte telle que `(`, `{` ou `[`, qui n'a pas été fermée par `)`, `}` ou `]` respectivement.
- La fin de la ligne se produit pendant une chaîne.

Une fois qu'une ligne logique se termine, la ligne logique suivante commence au début de la ligne suivante.

La plupart des instructions dans le langage Ren'Py consistent en une seule ligne logique tandis que certaines se composent de plusieurs lignes.

```python
"Ceci est une ligne logique"

"Puisque cette ligne contient une chaîne, elle continue
 même quand la ligne se termine."

$ a = ["En raison de la parenthèse, cette ligne aussi",
       "s'étend sur plus d'une ligne."]
```

Les lignes logiques vides sont ignorées, comme les commentaires.

## Indentation et blocs

*Indentation* est le nom que nous donnons au décalage au début de chaque ligne logique utilisée pour aligner les instructions Ren'Py. Dans Ren'Py, l'indentation ne doit comporter que des espaces.

L'indentation est utilisée pour regrouper des instructions en *blocs*. Un bloc est un groupe de lignes et souvent un groupe d'instructions. Les règles pour diviser un fichier en blocs sont les suivantes :

- Un bloc est ouvert au début d'un fichier.
- Un nouveau bloc est démarré chaque fois qu'une ligne logique est en retrait au-delà de la ligne précédente.
- Toutes les lignes à l'intérieur d'un bloc doivent avoir la même indentation.
- Un bloc se termine lorsqu'une ligne logique est rencontrée avec moins d'indentation que les lignes du bloc.

L'indentation est très importante et peut être à l'origine d'erreurs lorsqu'elle est incorrecte. Également, l'utilisation de l'indentation permet de rendre plus lisible le script sans le surcharger de commentaires.

```python
"Cette instruction ainsi que l'instruction if qui suit font partie d'un bloc."

if True:

    "Mais cette déclaration fait partie d'un nouveau bloc."

    "Cela fait également partie de ce nouveau bloc."

"Mais ici on est de nouveau sur le bloc initial."
```

## Déclarations

Les déclarations Ren'Py sont constituées de quelques éléments de base.

### Mot clé

Un mot clé introduit une déclaration et des propriétés. Les noms commençant par `_` sont réservés par Ren'Py, sauf indication contraire. Lorsqu'un nom commence par `__` mais ne se termine pas par `__`, il est remplacé par une version de ce nom spécifique au fichier.

### Nom

Un nom peut contenir des lettres, des chiffres et des `_`, mais ne doit pas commencer par un chiffre. Ici, les caractères Unicode compris entre `U+00a0` et `U+fffd` sont considérés comme des lettres.

### Nom d'image

Un nom d'image est constitué d'un ou de plusieurs composants, séparés par des espaces. Par exemple : `marie plage nuit heureuse`. Le premier composant est le *tag d'image*. Les composants suivants sont les *attributs d'image*. Un composant d'image peut contenir des lettres, des chiffres et des `_`.

### Chaîne

Une chaîne est entourée de guillemets `"`, `'` ou `` ` `` et contient une séquence de caractères.

Le backslash `\` permet d'échapper les guillemets ainsi que d'autres caractères spéciaux tels que `%`, `[` et `{`, à écrire `\%`, `\[` et `\{`. Un retour à la ligne s'écrit `\n`.

```python
'Une chaîne peut contenir son délimiteur si on l\'échappe.'
```

Dans une chaîne Ren'Py, les espaces consécutifs sont compressés en un seul espace, à moins qu'un espace ne soit précédé d'un backslash.

### Expression simple

Une expression simple est utilisée pour inclure du Python dans des parties du script Ren'Py. Une expression simple commence par :

- Un nom
- Une chaîne
- Un chiffre
- Toute expression Python, entre parenthèses.

Cela peut être suivi d'un point puis d'un nom, ou encore d'une expression Python entre parenthèses.

Par exemple, `3`,` (3 + 4) `,` foo.bar` et `foo(42)` sont des expressions simples, mais `3 + 4` ne l'est pas.

### Liste at

Une *liste at* est une liste d'expressions simples, séparées par des virgules.

### Expression Python

Une expression Python est une expression Python arbitraire qui peut ne pas inclure de deux points. Elles sont utilisées pour exprimer les conditions dans les instructions `if` et `while`.

## Syntaxe des instructions

La plupart des instructions Ren'Py partagent une syntaxe commune. À l'exception de l'instruction `say`, elles commencent par un mot clé, éventuellement suivi d'un paramètre.

Le paramètre est ensuite suivi par une ou plusieurs propriétés. Les propriétés commencent par un mot clé et peuvent être fournies dans n'importe quel ordre, à condition que chaque propriété ne soit fournie qu'une seule fois. Pour la plupart des propriétés, leur nom est suivi de l'un des éléments de syntaxe donnés ci-dessus.

Si l'instruction prend un bloc, la ligne se termine par deux points `:`. Sinon, la ligne se termine simplement.
