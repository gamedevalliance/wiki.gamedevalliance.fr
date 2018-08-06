---
title: "Travailler en équipe sur RPG Maker"
description: "Suivez ce guide pour développer un jeu à plusieurs sur RPG Maker. Découvrez comment utiliser un logiciel de gestion de versions pour partager les données de votre projet en toute sécurité."
---

RPG Maker n'inclut pas de fonctionnalité pour travailler à plusieurs confortablement. Il est possible de partager son projet sur un cloud tel que Dropbox ou Google Drive, mais ces services ne sont pas pensés pour le développement, et peuvent écraser des fichiers sans offrir un contrôle suffisant.

Il est plus intéressant d'utiliser un logiciel de gestion de versions, ce qui permet notamment de fusionner deux changements d'un même fichier. Cette méthode est particulièrement intéressante pour les projets MV, puisque les données sont stockées dans un format lisible par ces programmes. Travailler sur un projet VX Ace ou antérieur est plus difficile, et demande une bonne compréhension du logiciel pour éviter les erreurs.

## Synchroniser un projet avec GitHub

GitHub est un service en ligne rendant la gestion de versions très simple. Chaque projet peut avoir ses propres paramètres d'accès, un espace de gestion de tâches, de suivi des bugs, et un wiki. Si le logiciel Git s'utilise traditionnellement en lignes de commande, il est possible de télécharger le logiciel GitHub Desktop qui offre une interface claire pour les débutants.

Notez que GitHub ne permet pas aux comptes gratuits de créer des projets confidentiels. Des alternatives l'autorisent, comme Gitlab et Bitbucket.

### Paramétrer un projet

Ouvrez un [compte GitHub](https://github.com/join). Téléchargez [GitHub Desktop](https://desktop.github.com/) et connectez-vous à votre compte. Créez un nouveau [dépôt]({{< ref "glossaire.md#scm" >}}) (*New repository*) pointant vers le dossier que vous souhaitez synchroniser. Par exemple, si le chemin du dossier est `C:\projets\mon-jeu`, alors votre dépôt doit être paramétré ainsi :

![Choix du chemin local et du nom du dépôt](/images/rpgmaker/collaborer/parametres.png)

Confirmez la publication du dépôt.

![Publish repository](/images/rpgmaker/collaborer/publishrepository.png)

Ouvrez le dépôt sur GitHub.com, pour accéder aux paramètres et ajouter des collaborateurs. Ils pourront télécharger le projet avec GitHub Desktop.

![Open repository in Desktop](/images/rpgmaker/collaborer/openindesktop.png)

GitHub Desktop recherche régulièrement les mises à jour. Vous pouvez les rechercher manuellement en cliquant sur *Fetch origin*.

![Fetch origin](/images/rpgmaker/collaborer/fetchorigin.png)

Le bouton peut se transformer pour indiquer des changements à télécharger ou à envoyer. Les mises à jour ne sont pas automatiques : il faut toujours cliquer pour lancer l'opération.

### Envoyer des changements

Editez le projet dans RPG Maker et enregistrez. GitHub Desktop affichera la liste des fichiers qui ont été modifiés. Pour rétablir l'état initial d'un fichier, cliquez-droit dessus, et utilisez *Discard changes*. Pour annuler tous les changements, utilisez *Discard all changes*.

![Discard file changes](/images/rpgmaker/collaborer/discardchanges.png)

Assurez-vous de ne garder que les changements qui vous paraissent nécessaires, afin d'éviter tout conflit avec les changements de vos collaborateurs.

Il est maintenant temps d'enregistrer tous ces changements dans un [commit]({{< ref "glossaire.md#scm" >}}). Un commit est un ensemble de changements, à la manière d'un patch. Nommez votre commit en résumant les améliorations qu'il contient, et ajoutez une description de plusieurs lignes si besoin.

![Création d'un commit](/images/rpgmaker/collaborer/commit.png)

Pour le moment, le commit est uniquement enregistré localement, et peut encore être annulé. Mettez le commit en ligne pour que vos collaborateurs puissent le récupérer.

![Push origin](/images/rpgmaker/collaborer/pushorigin.png)

Et voilà ! L'historique des commits peut être consulté sur GitHub Desktop et le site web. Ainsi, vous pouvez toujours revenir en arrière en cas d'erreur.

![Historique des commits](/images/rpgmaker/collaborer/historique.png)

## Gérer les données de RPG Maker

{{< figure class="align-right" src="/images/rpgmaker/collaborer/data.png" alt="Liste des fichiers dans le dossier Data" caption="Dossier Data sur VX Ace." >}}

En éditant les maps ou la base de données, vous modifiez les fichiers dans le dossier Data du projet. Prenez le temps d'examiner et de comprendre la liste des fichiers.

- Chaque onglet de la base de données est stocké dans un fichier séparé. Le fichier System contient également le nom des variables et des interrupteurs affiché dans l'éditeur.
- Sur VX Ace et antérieur, tous les scripts sont sauvegardés dans un même fichier. Avec MV, ils sont enregistrés séparément dans un autre dossier.
- Chaque map est stockée dans un fichier, ce qui inclut ses évènements.
- MapInfos contient l'arborescence des maps affichée en bas à gauche de l'éditeur. Si une map n'est pas référencée dans MapInfos, vous ne pourrez pas y accéder depuis l'éditeur.

Comprendre ce dossier vous permet de déterminer quels fichiers envoyer à vos collaborateurs pour partager votre avancement.

{{< figure src="/images/rpgmaker/collaborer/mapinfos.png" alt="Liste des cartes du projet" caption="L'arborescence des cartes est enregistrée dans MapInfos." >}}

### Problèmes avec la création de cartes

Prenons comme exemple un projet partagé par deux personnes, contenant déjà Map001, et dans lequel les deux personnes souhaitent créer une nouvelle map chacune.

Si chaque personne clique sur *Créer une nouvelle carte*, elle ajoutera Map002 à sa copie du projet, et MapInfos sera modifié pour ajouter Map002 à l'arborescence. C'est un problème car les deux copies du projet ne pourront pas être facilement fusionnées : les deux fichiers Map002 entreront en conflit.

Pour éviter ce problème, une personne doit se déclarer gestionnaire du projet, et créer des maps vierges en avance. Dans cet exemple, il faut créer 2 maps vides et sauvegarder. Vous aurez créé les fichiers Map002 et Map003, et modifié le fichier MapInfos. Partagez ces changements à l'autre personne : vous serez ainsi certain que les deux maps seront toujours présentes dans l'arborescence. Chacun pourra travailler sur sa map, et vous n'aurez plus qu'à vous envoyer les changements de Map002 et Map003 à l'avenir.

### Problèmes sur VX Ace et antérieur

Sur RPG Maker VX Ace et antérieur, les données du jeu sont sauvegardées dans un format crypté : rxdata, rvdata, ou rvdata2. Cela empêche de consulter les changements et de les fusionner avec GitHub ou un autre système de gestion de versions, contrairement au format lisible de RPG Maker MV.

Faites attention : à chaque fois que vous cliquez sur Sauvegarder dans le logiciel, il peut réécrire des fichiers Data pour les rendre égaux à l'état actuel de RPG Maker. Même si vous n'avez fait que mapper, certains fichiers de la base de données pourraient être réécrits.

Dans une utilisation normale, ce n'est pas gênant et vous ne perdez aucune donnée. Cependant, dans le cadre d'une collaboration, vous devrez faire attention à quels fichiers sont remplacés pour garder les progrès de tout le monde. C'est pourquoi les systèmes automatiques tels que Dropbox ou Google Drive peuvent être dangereux, et qu'il est préférable d'utiliser des systèmes offrant plus de contrôle. GitHub Desktop, par exemple, vous donne une liste des fichiers réécrits, et vous permet de rétablir leur état initial.

Pour écrire des scripts à plusieurs sur RPG Maker VX Ace, utilisez [scripts-externalizer](https://github.com/RMEx/buildozer) pour exporter chaque script dans un fichier indépendant, lisible par un logiciel de gestion de versions.
