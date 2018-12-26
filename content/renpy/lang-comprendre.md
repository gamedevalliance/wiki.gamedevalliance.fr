---
title: "Comprendre le langage Ren'Py"
description: "Avant de vous apprendre le langage Ren'Py, nous allons déjà décrire la structure d'un script Ren'Py et comprendre comment il fonctionne."
portail: renpy
menu:
  renpy:
    name: "Aide-mémoire"
    parent: progresser
    weight: 2

---

# Comprendre le langage Ren'Py

Avant de vous apprendre le langage Ren'Py, nous allons déjà décrire la structure d'un script Ren'Py et comprendre comment il fonctionne. Dans ce tutoriel vous allez apprendre ce qu'est le script d'un jeu Ren'Py, comme il  est divisé en fichiers, composés de blocs, eux mêmes composés de lignes logiques constituées d'instructions. Nous allons également voir la syntaxe de ses instructions.

## Fichiers

Le script d'un jeu Ren'Py est composé de tous les fichiers présents dans le répertoire du jeu qui se termine par l'extension .rpy. Ren'Py examinera chacun de ces fichiers (dans l'ordre Unicode) et utilisera le contenu de ces fichiers comme étant le script du jeu.

En règle générale, il n'y a pas de différence entre un script divisé en plusieurs fichiers et un script composé d'un seul gros fichier. Ren'Py peut passé d'un fichier à un autre en utilisant les sauts ou les labels. Au delà des goûts personnels, cela dépend aussi de la taille de votre projet : Plusieurs petits fichiers de quelques lignes pour un projet modeste serait une perte de temps et une source d'erreurs. A contrario diviser un énorme projet en plusieurs petits fichiers peut vous permettre de ne pas vous perdre dans des centaines de lignes de codes et permettre une meilleure vue d'ensemble.

Pour accélérer le temps de chargement, Ren'Py compilera les fichiers .rpy en fichiers .rpyc lors du démarrage. Lorsqu'un fichier .rpy est modifié, le fichier .rpyc est mis à jour au démarrage de Ren'Py. Toutefois, si un fichier .rpyc existe sans un fichier .rpy correspondant, le fichier .rpyc sera quand même utilisé. Cela peut entraîner des problèmes si un fichier .rpy est supprimé sans supprimer le fichier .rpyc !

Les noms de fichiers doivent commencer par une lettre ou un chiffre qui ne soit pas "00", ces fichiers étant ceux de base du logiciel. Évitez également, comme dans tout les moteurs anglophones, d'utiliser des accents dans les noms de fichiers.

### Dossier principal

Le dossier principal ("Base Directory" en anglais) est le dossier contenant tous les fichiers du jeu. Des fichiers tels que les fichiers README doivent être placés dans le dossier principal, à partir duquel ils seront distribués.

Ce dossier principal est créé dans le dossier Ren'Py et porte le nom de votre jeu. Par exemple, si votre dossier Ren'Py s'appelle renpy-6.11.2 et que votre jeu s'appelle "HelloWorld", votre dossier principal sera renpy-6.11.2 / HelloWorld.

### Dossier de votre jeu

Le dossier de votre jeu est (presque toujours) un répertoire nommé "game" situé dans le dossier principal. Par exemple, si votre dossier principal est renpy-6.11.2 / HelloWorld, le dossier de votre jeu sera renpy-6.11.2 / HelloWorld / game.

Toutefois, Ren'Py effectue une recherche dans les dossier dans l'ordre suivant:

* Le nom de l'exécutable, sans le suffixe. Par exemple, si l'exécutable s'appelle moonlight.exe, un dossier nommé moonlight sera recherché dans le dossier principal.
*  Le nom de l'exécutable, sans le suffixe et avec un préfixe se terminant par _ enlevé. Par exemple, si l'exécutable est moonlight_en.exe, Ren'Py recherchera un dossier nommé en.
* Les dossiers "game", "data" et "launcher", dans cet ordre.

Cependant, le lanceur ne reconnaîtra correctement que les répertoires "game" et "data".

Le dossier de votre jeu contient tous les fichiers utilisés par votre jeu. Il, y compris tous les sous-dossiers, est analysé pour les fichiers .rpy et .rpyc, et ceux-ci sont combinés pour former le script de jeu. Il est scanné pour les fichiers d’archive .rpa, et ceux-ci sont automatiquement utilisés par le jeu. Enfin, lorsque le jeu cherche un fichier à charger, celui-ci est chargé par rapport au répertoire du jeu. (Mais notez que config.searchpath peut changer ça)

## Commentaires

Un fichier de script Ren'Py peut contenir des commentaires. Un commentaire commence par un signe dièse ('#') et se termine à la fin de la ligne contenant le commentaire.

```
# Ceci est un commentaire.
show black # Ceci est un commentaire, mais le show black ne l'est pas.

"# Ceci n'est pas un commentaire, vu qu'il est contenu dans un texte."
```

Ren'Py ignore les commentaires, le script continu comme s'ils n'étaient pas là. Ceux-ci vous permettent donc de vous laisser des mémos qui vous permettront de vous souvenir quels parties du script font quoi, de vous organiser, surtout si vous travaillez en équipe ou que votre projet s’étale dans le temps !

## Lignes logiques

Un fichier de script est divisé en *lignes logiques*. Une ligne logique commence au début d'une ligne du fichier et se termine à la fin d'une ligne, sauf si:

- Le dernier caractère de la ligne est un *backslash* (**\\**).
- La ligne contient un caractère de parenthèse ouverte (Tel que **(**, **}** ou **[** ) qui n'a pas été fermé (par **)**, **}** ou **]**, respectivement).
- La fin de la ligne se produit pendant une chaîne.

Une fois qu'une ligne logique se termine, la ligne logique suivante commence au début de la ligne suivante.

La plupart des instructions dans le langage Ren'Py consistent en une seule ligne logique, tandis que certaines se composent de plusieurs lignes.

```
"Ceci est une ligne logique"

"Puisque cette ligne contient une chaîne, elle continue
 même quand la ligne se termine. "

$ a = ["En raison de la parenthèse, cette ligne aussi",
        "s'étend sur plus d'une ligne." ]
```

Les lignes logiques vides sont ignorées, comme les commentaires.

## Indentation et Blocs

*Indentation* est le nom que nous donnons à l'espace au début de chaque ligne logique utilisée pour aligner les instructions Ren'Py. Dans Ren'Py, l'indentation ne doit comporter que des espaces.

L'indentation est utilisée pour regrouper des instructions en *blocs*. Un bloc est un groupe de lignes et souvent un groupe d'instructions. Les règles pour diviser un fichier en blocs sont les suivantes:

- Un bloc est ouvert au début d'un fichier.
- Un nouveau bloc est démarré chaque fois qu'une ligne logique est en retrait au-delà de la ligne logique précédente.
- Toute les lignes à l'intérieur d'un bloc doivent avoir la même indentation.
- Un bloc se termine lorsqu'une ligne logique est rencontrée avec moins d'indentation que les lignes du bloc.

L'indentation est très importante et peut être à l'origine d'erreurs lorsqu'elle est incorrecte. Également, l'utilisation de l'indentation permet de rendre plus lisible le script sans le surcharger de commentaires.

```
"Cette instruction, ainsi que l'instruction if qui suit, fait partie d'un bloc."

if True:

    "Mais cette déclaration fait partie d'un nouveau bloc."

    "Cela fait également partie de ce nouveau bloc."

"Mais ici on est de nouveau sur le bloc initial."
```

## Déclarations

Les déclarations Ren'Py sont constituées de quelques éléments de base.

- *Mot-clé*

  Un mot-clé est un mot qui doit littéralement apparaître dans le script du jeu. Les mots-clés sont utilisés pour introduire des déclarations et des propriétés. Les noms commençant par un simple trait de soulignement (_) sont réservés pour un usage interne à Ren'Py, sauf indication contraire. Lorsqu'un nom commence par __ mais ne se termine pas par __, il est remplacé par une version de ce nom spécifique au fichier.

- *Nom*

  Un nom commence par une lettre ou un trait de soulignement, suivi de zéro ou plusieurs lettres, chiffres et traits de soulignement. (Note: les caractères Unicode compris entre U+00a0 et U+fffd sont considérés comme des lettres)

- *Nom d'image*

  Un nom d'image est constitué d'un ou de plusieurs composants, séparés par des espaces. Le premier composant du nom de l'image s'appelle la *balise image*. Les deuxième et dernier composants du nom sont les *attributs d'image*. Un composant image est constitué d'une chaîne de lettres, de chiffres et de traits de soulignement. Par exemple, prenez l’image nommée `mary beach night happy`. La balise de l'image est `mary`, tandis que les attributs de l'image sont `plage`, `nuit` et `heureux`.

- *Chaîne*

  Une chaîne commence par un caractère de guillemet (un de **"**, **'** ou **\`** ), contient une séquence de caractères et se termine par le même caractère de guillemet. La barre oblique inversée (\\) est utilisée pour remplacer les guillemets, les caractères spéciaux tels que **%** ( écrit sous la forme \\% ), **[** (écrit sous la forme \\[ ) et **{** (écrit sous la forme \\{ ). Il est également utilisé pour inclure les nouvelles lignes à l'aide de la séquence \n. Dans une chaîne Ren'Py, les espaces consécutifs sont compressés en un seul caractère d’espace, à moins qu’un espace ne soit précédé d’une barre oblique inversée. `"Attention, si vous devez utilisez un caractère de guillement  dans une chaine, comme dans - c\'est beau - , utilisez un backslash."`

- *Expression simple*

  Une expression simple est une expression Python, utilisée pour inclure Python dans certaines parties du script Ren'Py. Une expression simple commence par : Un nom + Une chaine + Un numéro + Toute expression Python, entre parenthèses. Par exemple, `3`,` (3 + 4) `,` foo.bar` et `foo (42)` sont toutes des expressions simples. Mais `3 + 4` ne l'est pas, car l'expression se termine à la fin d'une chaîne.

- *Liste At*

  Une liste at est une liste d'expressions simples, séparées par des virgules.

- *Expression Python*

  Une expression Python est une expression Python arbitraire, qui peut ne pas inclure de deux points. Celles-ci sont utilisées pour exprimer les conditions dans les instructions if et while.

## Syntaxe des instructions

La plupart des instructions Ren'Py partagent une syntaxe commune. À l'exception de l'instruction say, ils commencent par un mot clé qui introduit l'instruction. Ce mot-clé est suivi d'un paramètre, si l'instruction en prend un.

Le paramètre est ensuite suivi par une ou plusieurs propriétés. Les propriétés peuvent être fournies dans n'importe quel ordre, à condition que chaque propriété ne soit fournie qu'une seule fois. Une propriété commence par un mot clé. Pour la plupart des propriétés, le nom de la propriété est suivi de l'un des éléments de syntaxe donnés ci-dessus.

Si l'instruction prend un bloc, la ligne se termine par deux points (:). Sinon, la ligne se termine simplement.