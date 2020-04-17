---
title: "Utiliser butler"
description: "itch.io est un magasin ouvert à tous les créateurs, axé sur les jeux indépendants. Tout le monde peut devenir vendeur, concevoir ses pages et publier son contenu."
portail: distribution
menu:
  distribution:
    parent: itch.io
    weight: 5
---

butler est un petit outil qui s'utilise en ligne de commande et permet de mettre ses jeux en ligne efficacement sur itch.io. butler détecte automatiquement les fichiers modifiés depuis la dernière mise à jour, et envoie uniquement ces différences. Ainsi, les utilisateurs de [l'application itch](https://itch.io/app) téléchargeront un patch optimisé, tout comme sur Steam.

## Télécharger butler

Le moyen le plus simple d'obtenir butler est d'installer [l'application itch](https://itch.io/app), qui l'inclut et le met à jour à chaque lancement. Sur Windows, butler se trouve par défaut dans le dossier `%APPDATA%\itch\bin`, ou en version longue :

```
C:\Users\UTILISATEUR\AppData\Roaming\itch\bin
```

Le chemin est `~/.config/itch/bin` sur Linux et `~/Library/Application Support/itch/bin` sur macOS.

> **Note :** Vous pouvez également [télécharger butler manuellement](https://fasterthanlime.itch.io/butler), mais il ne se mettra pas à jour automatiquement.

## Installer butler

### Sur Windows 10

Il ne se passera rien si vous ouvrez directement `butler.exe` car il doit être utilisé depuis l'invite de commandes (aussi appelé terminal). Pour cela, vous devez l'ajouter à votre Path.

Ajouter un dossier au Path permet d'utiliser les programmes qu'il contient dans le terminal. Nous allons donc ajouter le dossier qui contient `butler.exe`, qui pour rappel devrait ressembler à :

```
C:\Users\UTILISATEUR\AppData\Roaming\itch\bin
```

Ouvrez les Paramètres système avancés, puis cliquez sur Variables d'environnement.

![Variables d'environnement dans les paramètres système](/images/contribuer/path/variablesdenvironnement.png)

Dans la section Variables système, sélectionnez la ligne Path et cliquez sur Modifier.

![Sélection de la variable système Path](/images/contribuer/path/modifierpath.png)

Dans une nouvelle ligne, renseignez le dossier dans lequel se trouve `butler.exe`.

![Nouveau dossier dans le Path](/images/contribuer/path/ajouterbutler.png)

Le programme est maintenant disponible dans l'invite de commandes ! Recherchez `cmd` pour y accéder rapidement.

![Taper cmd dans la recherche Windows](/images/contribuer/path/ouvrircmd.png)

### Sur Linux

Pour utiliser la version de butler incluse avec l'application itch, il suffit d'ajouter cette ligne au fichier `~/.bashrc` (`~` étant votre répertoire personnel) :

```bash
export PATH="$PATH:$HOME/.config/itch/apps/butler"
```

Si vous préférez télécharger butler manuellement, référez-vous à la [documentation](https://itch.io/docs/butler/installing.html).

### Sur macOS

Le procédé est similaire à Linux. Pour utiliser la version de butler incluse avec l'application itch, ajoutez cette ligne au fichier `~/.bash_profile`. Si ce fichier n'existe pas, vous pouvez le créer.

```bash
export PATH="$PATH:$HOME/Library/Application Support/itch/apps/butler"
```

## Se connecter

Vous êtes maintenant dans le terminal. La première fois que vous utiliserez butler, il vous demandera de vous connecter. Vous pouvez le faire directement en écrivant `butler login` puis en validant avec Entrée. Il suffit ensuite de suivre les instructions. Et voilà, butler est configuré !

Si vous souhaitez changer de compte, vous pouvez vous déconnecter à tout moment avec `butler logout`.

## Mettre en ligne un dossier

C'est l'unique commande que vous aurez besoin d'utiliser désormais ! Elle est structurée ainsi :

```
butler push dossier utilisateur/jeu:branche
```

`dossier` est le chemin du dossier que vous souhaitez envoyer. Cela peut aussi être un fichier zip mais ce n'est pas conseillé : cela ne ferait que ralentir le processus, car butler compresse lui-même le dossier.

`utilisateur/jeu` est le projet que vous mettez en ligne. Vous pouvez retrouver votre adresse d'utilisateur et de jeu dans l'URL. Par exemple : `gamedevalliance/starterpack` pour https://gamedevalliance.itch.io/starterpack

`branche` est l'emplacement du fichier que vous envoyez. Vous êtes perplexe ? Laissez-moi vous expliquer.

Imaginons que vous souhaitez proposer aux joueurs le choix de télécharger une version stable ou une version beta, et ce depuis la même page de jeu. Il vous faut utiliser deux branches, que vous pouvez appeler `stable` et `beta`. Vous pourriez aussi utiliser les branches pour donner le choix entre une démo gratuite et le jeu complet payant, ou encore pour proposer une version différente par système d'exploitation.

{{< figure src="/images/distribution/itch.io/branches.png" caption="Avec les branches, on peut proposer plusieurs téléchargements sur la même page." >}}

Le nom d'une branche a un sens. S'il contient `win` ou `windows`, le fichier sera automatiquement marqué comme fonctionnant sur Windows. De la même façon, on écrit `linux` pour Linux, `mac` ou `osx` pour Mac, et `android` pour une application Android. Une branche peut être marquée comme fonctionnant pour plusieurs plateformes, par exemple `win-mac-linux-beta`

{{< figure src="/images/distribution/itch.io/nombranche.png" caption="Le nom de la branche contient `win`, donc Windows est coché automatiquement." >}}

Vous pouvez aussi changer manuellement les plateformes supportées par une branche depuis la page **Edit game**. Marquer un jeu web doit toujours être fait depuis cette page.

Par défaut, itch.io génère un numéro de version qui augmente à chaque mise à jour et pour chaque branche. Pour utiliser un numéro de version personnalisé, ajoutez `--userversion` à la fin de la commande.

Pour récapituler, voici des exemples de commandes valides pour envoyer son jeu :

```
butler push C:\Users\Aurelien\Jeux\starterpack rpgmakeralliance/starterpack:vxace-fr --userversion 1.2.0
butler push C:\Users\Aurelien\Jeux\ZombieHS aureliendossantos/zombiehealthservice:win-postjam
```

Le premier push prendra un peu de temps, puisque toutes les données doivent être envoyées. Si vous faites un deuxième push ensuite, vous verrez qu'il sera presque instantané, car rien n'a changé !

La plupart du temps, seule une petite partie des données changera entre les pushes, ce qui vous permettra d'utiliser très peu de bande passante et de proposer des patchs légers aux joueurs.

## Mettre à jour butler

butler est automatiquement mis à jour au lancement de l'application itch. Mais si vous n'utilisez pas cette dernière, butler vous notifiera lui-même des mises à jour disponibles.

![Une mise à jour est disponible](/images/distribution/itch.io/butlerupdate.png)

Pensez alors à utiliser la commande `butler update` et l'opération sera terminée en un instant !

{{< end "/content/distribution.md" >}}