---
title: "Ajouter un dossier au Path sur Windows"
description: "Pour utiliser un programme depuis le terminal de votre système, vous devez ajouter son dossier au Path. Suivez ce guide pour le faire en quelques clics."
---

Ajouter un dossier au Path permet d'utiliser les programmes qu'il contient dans le terminal.

Dans les images d'exemple, l'objectif est d'utiliser `butler.exe` dans le terminal, ce qui requiert d'ajouter au Path le dossier qui le contient :

```
C:\Users\UTILISATEUR\AppData\Roaming\itch\bin
```

Si vous venez sur cette page pour utiliser `hugo.exe` comme expliqué dans [l'installation de l'Encylopédie]({{< ref "/contribuer/installer.md" >}}), le dossier pourrait être :

```
C:\Hugo\bin
```

Adaptez donc l'exemple à votre propre cas.

## Sur Windows 10

Ouvrez les Paramètres système avancés, puis cliquez sur Variables d'environnement.

![Variables d'environnement dans les paramètres système](/contribuer/path/variablesdenvironnement.png)

Dans l'espace Variables système, sélectionnez la ligne Path et cliquez sur Modifier.

![Sélection de la variable système Path](/contribuer/path/modifierpath.png)

Dans une nouvelle ligne, renseignez le dossier dans lequel se trouve le programme que vous souhaitez ajouter..

![Nouveau dossier dans le Path](/contribuer/path/ajouterbutler.png)

Votre programme est maintenant disponible dans l'invite de commandes ! Recherchez `cmd` pour y accéder rapidement.

![Taper cmd dans la recherche Windows](/contribuer/path/ouvrircmd.png)
