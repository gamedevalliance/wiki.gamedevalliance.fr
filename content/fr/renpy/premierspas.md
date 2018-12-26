---
title: "Premiers pas avec Ren'Py"
description: "Téléchargez Ren'Py gratuitement et apprenez les bases du moteur pour créer votre première scène de visual novel."
portail: renpy
menu:
  renpy:
    name: "Premiers pas"
    parent: débuter
    weight: 1

---

Le but de ce tutoriel est de permettre à un débutant de prendre en main Ren'Py. Seules les bases du logiciel y sont abordées.

## Le lanceur Ren'Py

Avant de faire un jeu, vous devriez d'abord prendre le temps d'apprendre comment fonctionne le lanceur Ren'Py. Le lanceur vous permet de créer, de gérer et de lancer vos projets Ren'Py.

Pour commencer, vous voudrez sans doute [télécharger Ren'Py](https://renpy.org/latest.html).

Une fois le téléchargement terminé et l'archive extraite, vous pouvez ouvrir le dossier de Ren'Py.

- Sur Windows, ouvrez `renpy.exe` (peut s'afficher `renpy` si les extensions de fichier sont masquées).
- Sur Linux, ouvrez le fichier `renpy.sh`.
- Sur macOS, lancez-le via le fichier `renpy`.

Le lanceur Ren'Py devrait s'afficher. Dans les préférences, vous pouvez choisir la langue.

{{< figure src="/images/renpy/premierspas/launcher.png" alt="Interface de Ren'Py" caption="Le lanceur de Ren'Py" >}}

### Choisir et lancer un projet

Vous devriez d'abord regarder à quoi ressemble le jeu d'exemple _La Question_. Pour faire cela, choisissez « La Question » sur la gauche du lanceur, puis « Lancer le projet ».

Vous pouvez aussi essayer la démo de Ren'Py, qui explique des fonctionnalités du logiciel, en choisissant « Tutoriel » au lieu de « La Question ».

### Créer un nouveau projet 

Vous pouvez cliquer sur « Créer un nouveau projet » depuis le lanceur. Vous devrez alors choisir un dossier où le créer puis Ren'Py vous demandera de renseigner quelques informations. Laissez-vous guider, puis patientez pendant le chargement. Vous serez redirigé à l'accueil du lanceur avec votre nouveau projet sélectionné.

## Un jeu simple

Nous allons créer une petite conversation entre deux personnages. Depuis le lanceur, cliquez sur `script.rpy`. Ren'Py vous demandera dans quel éditeur de texte vous souhaitez ouvrir le fichier.

![Sélection de l'éditeur de texte](/images/renpy/premierspas/selectionediteur.png)

Ici, il n'est pas question de logiciels comme Word ou LibreOffice mais plutôt d'éditeurs de code pouvant servir à la programmation. Si vous n'en possédez pas, vous pouvez sélectionner Atom et vous laisser guider. Si vous souhaitez utiliser un autre éditeur, choisissez "System Editor" et votre système vous demandera quel programme associer aux fichiers `.rpy`.

Comme vous pouvez le voir, `script.rpy` contient déjà quelques lignes de texte. Essayez de les comprendre et vérifiez leur effet en lançant le projet depuis le lanceur. Les lignes commençant par un `#` sont des commentaires destinés à vous aider.

Nous allons créer notre jeu à partir de zéro. Effacez tout le contenu du fichier et entrez à la place :

```python
label start:
    "Je vais lui demander..."

    "Moi" "Hum... est-ce que..."
    "Moi" "Est-ce que tu accepterais de m'aider à faire un visual novel ?"
    
    "Silence."
    "Elle est stupéfaite, puis..."
    
    "Sylvie" "Bien sûr, mais c'est quoi un \"visual novel\" ?"
```

Sauvegardez le fichier et lancez le projet avec le lanceur. Remarquez comment, sans aucun travail supplémentaire de votre part, Ren'Py ajoute des menus pour charger et sauvegarder le jeu et changer des préférences.

Dans ce script, la première ligne est une instruction de label. Cette instruction est utilisée pour nommer un endroit dans le programme. Dans le cas présent, nous avons créé un label nommé `start`. Le label `start` est particulier : c'est la première chose qui est exécutée lorsque l'utilisateur clique sur « Démarrer le jeu » depuis le menu principal.

Les autres lignes sont des instructions de dialogue. La première est une chaîne de caractères entre guillemets. C'est utile pour la narration ou pour les pensées du personnage principal. La deuxième forme consiste en deux chaînes de caractères. C'est utile pour les dialogues, car la première chaîne est le nom du personnage et la seconde contient ce qu'il dit.

Au début de toutes les instructions de dialogue, il y a quatre espaces. On appelle cela l'indentation. Cela signifie qu'elles constituent un bloc de code pour l'instruction `label`. Dans Ren'Py, les blocs doivent être indentés par rapport aux lignes d'instructions auxquelles elles répondent et toutes les lignes d'un même bloc doivent être indentées de la même manière.

Lorsqu'un texte contient des guillemets doubles, ces caractères doivent être précédés d'une barre oblique inversée, ou backslash `\`. C'est le cas à la dernière ligne de notre exemple. Cela permet à Ren'Py de ne pas confondre ce guillemet avec celui qui termine la chaîne de caractères.

Si ce jeu simple ne va pas très loin, c'est un exemple qui montre combien il est facile d'obtenir un résultat jouable dans Ren'Py. Pour continuer à apprendre à utiliser Ren'Py, à ajouter des personnages, des images, des sons et des choix, nous vous invitons à lire notre [tutoriel pour les débutants]({{< ref "/renpy/debutant.md" >}}).

Vous pouvez également consulter le [script complet de La Question](http://www.renpy.org/doc/html/thequestion.html#thequestion). C'est un peu comme un équivalent de notre [Starter Pack]({{< ref "/rpgmaker/starterpack.md" >}}) pour RPG Maker, mais en très simple et pour Ren'Py.