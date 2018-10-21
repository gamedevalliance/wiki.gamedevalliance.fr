---
title: "Les évènements"
description: "Les évènements sont les personnages et les cinématiques de votre jeu. Découvrez toutes les commandes des évènements et ajoutez des éléments de gameplay à votre jeu."
portail: rpgmaker
menu:
  rpgmaker:
    name: "Vue d'ensemble"
    parent: events
    weight: 1
---

Un évènement peut avoir une apparence, se déplacer, et exécuter des commandes pour faire évoluer le jeu. Il se place sur une case de la carte, sur la couche d'évènements.

## Déclenchement

Le déclencheur permet de spécifier à quel moment du jeu s'exécutent les commandes de l'évènement.

![Menu déroulant des déclencheurs d'évènement](/images/rpgmaker/evenements/declencheur.png)

- **Touche action :** Exécute les commandes une fois, lorsque le joueur appuie sur la touche action devant ou sur l'évènement.
- **Contact avec le héros :** En plus de l'effet de **Touche action**, les commandes s'exécutent également si le joueur entre en contact à l'aide des touches de déplacement.
- **Contact avec l'évènement :** En plus de l'effet de **Contact avec le héros**, se déclenche quand le héros et l'évènement entrent en contact par n'importe quel moyen. Par exemple, si l'évènement poursuit le héros qui se fait rattraper à son insu.
- **Automatique :** Dès lors que la transition d'arrivée sur la carte est terminée, les commandes s'écutent en boucle, indéfiniment. Tant qu'un évènement automatique est actif, le joueur est bloqué, ce qui est utile pour les cinématiques.
- **Processus parallèle :** Dès l'arrivée sur la carte, les commandes s'exécutent en boucle, indéfiniment. Comme son nom l'indique, l'évènement ne bloque pas le joueur pendant son exécution. Plusieurs processus parallèles peuvent être actifs en même temps.

## Pages et conditions d'activation

Un évènement peut contenir plusieurs pages, chacune ayant ses propres paramètres et commandes. Le jeu tentera toujours d'activer la page la plus à droite possible, sauf dans les évènements des groupes de combat, où la page la plus à gauche possible est activée.

![Pages d'évènement et conditions d'activation](/images/rpgmaker/evenements/pages.png)

Les conditions dans le coin supérieur gauche d'une page doivent être remplies pour que la page soit active. Ainsi, il est possible de naviguer entre les pages, en spécifiant des conditions que l'on remplira progressivement au cours du jeu.

## Liste des commandes

La plupart des commandes sont explicites, et peuvent être comprises en expérimentant rapidement. Certaines proposent néanmoins des fonctionnalités complexes qu'il n'est pas évident de déceler au premier abord.

### Afficher un message

Permet d'écrire les dialogues du jeu. En laissant votre curseur un instant sur le champ de texte, une info-bulle apparait contenant la liste des codes disponibles, permettant d'afficher des valeurs dynamiques dans le message comme le montant d'argent possédé.

* `\V[n]` Valeur de la variable numéro `n`.
* `\N[n]` Personnage en `n` position dans la base de données.
* `\P[n]` Nom du personnage en `n` position dans le groupe.
* `\G` Nom de la monnaie.
* `\C[n]` Affiche la suite du texte dans la couleur numéro `n`.
* `\I[n]` Icône numéro `n`.
* `\{` Affiche la suite du texte en plus grand.
* `\{` Affiche la suite du texte en plus petit.
* `\\` Affiche le caractère `\`.
* `\$` Affiche la fenêtre de l'argent du groupe.
* `\.` Arrête le défilement du texte pendant 1⁄4 de seconde.
* `\|` Arrête le défilement du texte pendant une seconde.
* `\!` Attend l'appui de la touche Action pour faire défiler la suite du texte.
* `\>` Affiche d'un bloc la suite de la ligne.
* `\<` Reprend le défilement normal du texte.
* `\^` Ferme la fenêtre sans attendre l'appui de la touche Action.

### Modifier un interrupteur

Permet d'activer et désactiver un [interrupteur]({{< ref "interrupteurs.md" >}}), ou une plage d'interrupteurs.

### Modifier un interrupteur local

Permet d'activer et désactiver un [interrupteur local]({{< ref "interrupteurs.md#interrupteurs-locaux" >}}) de l'évènement exécutant la commande.

### Modifier une variable

Modifie la valeur d'une [variable]({{< ref "variables.md" >}}) ou d'une plage de variables. Il est possible de leur attribuer une nouvelle valeur, prédéterminée ou tirée des données du jeu, et d'effectuer des opérations mathématiques.

Une variable peut contenir d'autres types de valeur. Par exemple, pour stocker un texte, entrez le script `"Mon texte"`. Notez que les commandes d'évènement de RPG Maker ne peuvent évaluer que les nombres entiers. Pour manipuler des variables d'un autre type, vous devrez utiliser des [appels de script]({{< ref "#appel-de-script" >}}).

### Commentaire

Vous permet d'ajouter des indications ignorées par le jeu, pour vous repérer dans un code complexe ou travailler en groupe.

### Condition

Une condition permet de détecter si quelque chose est vrai, auquel cas les commandes situées à l'intérieur de la branche conditionnelle s'exécuteront. Si la condition est fausse, la branche **Sinon** est exécutée. Cette branche est facultative et peut être affichée en cochant la case adéquate dans la fenêtre des conditions.

On utilise les conditions pour vérifier qu'un interrupteur est activé, qu'une variable a atteint une certaine valeur, que le chronomètre est arrivé à zéro, que le joueur appuie sur une touche, et tout un tas d'autres choses. Il est possible d'imbriquer plusieurs conditions pour réaliser des vérifications complexes.

{{< figure src="/images/rpgmaker/evenements/conditions.png" alt="Commandes d'évènement" caption="Deux conditions imbriquées." >}}

Parfois, vous aurez besoin de vérifier une donnée indisponible dans la fenêtre des conditions. Dans ce cas, utilisez la commande **Gestion des variables** pour rendre la variable de votre choix égale à la donnée du jeu souhaitée. Ensuite, réalisez une condition sur cette variable. Pour les cas les plus complexes, il est également possible de vérifier si une ligne de script renvoie vrai ou faux.

### Créer une boucle

Lorsque le système parcourt un évènement et entre dans une boucle, il y restera bloqué jusqu'à ce qu'on lui donne l'ordre d'en sortir. Cela signifie que lorsque le système atteint la fin de la boucle, il retourne au début, et exécute ainsi le contenu de la boucle à l'infini.

Créer une boucle dont il est impossible de sortir bloquera le jeu, à moins qu'elle soit exécutée dans un processus parallèle.

### Sortir de la boucle

Lorsque le système atteint cette commande, il quitte la boucle en cours, et exécute les commandes situées après **Fin de la boucle**.

Il est également possible de quitter une boucle en [plaçant une étiquette]({{< ref "#placer-une-etiquette" >}}) après la boucle, et en utilisant la commande [Aller à l'étiquette]({{< ref "#aller-a-l-etiquette" >}}) lorsque vous souhaitez en sortir.

### Effacer cet évènement

L'évènement est temporairement supprimé tant que vous restez sur la carte. Si vous quittez la carte puis y retournez, l'évènement sera présent à nouveau.

### Placer une étiquette

Nommez votre étiquette comme il vous plait. Vous pourrez demander au système d'y revenir instantanément avec [Aller à l'étiquette]({{< ref "#alleretiquette" >}}).

### Aller à l'étiquette

Lorsque le système atteint cette commande, il se positionnera à l'étiquette désignée, et continuera à parcourir l'évènement depuis ce nouvel emplacement. Vous pouvez utiliser les étiquettes pour mettre en place des boucles et d'autres logiques complexes.

### Déplacer un évènement

Contrairement à ce que l'on pourrait penser, cette commande n'est pas seulement utilisée pour déplacer l'évènement ciblé, mais aussi pour modifier ses propriétés. C'est donc par cette commande que vous changerez l'apparence ou la priorité d'affichage de vos évènements.

Pour plus de simplicité et de flexibilité, il est possible d'ajouter des sons à sa trajectoire, ou de modifier un interrupteur. Pour répondre aux besoins les plus avancés, il est également possible d'exécuter des commandes de script, et ainsi d'influer sur des aspects du jeu qui ne sont pas proposés par les boutons.

### Préparer la transition

Cette commande, disponible uniquement dans [RPG Maker XP]({{< ref "/rpgmaker/serie.md#rpg-maker-xp" >}}), fige l'écran jusqu'à l'exécution de la commande [Exécuter la transition]({{< ref "#executer-la-transition" >}}). Seul le rafraîchissement de l'affichage est désactivé, mais la logique du jeu s'exécute toujours pendant ce temps. Cela vous permet de préparer un changement de carte, un déplacement de caméra, un changement de ton d'écran, ou tout autre effet, avant de l'afficher de façon élégante par une transition.

### Exécuter la transition

Cette commande, disponible uniquement dans [RPG Maker XP]({{< ref "/rpgmaker/serie.md#rpg-maker-xp" >}}), rétablit le rafraîchissement de l'écran, qui aura été désactivé au préalable par la commande [Préparer la transition]({{< ref "#executer-la-transition" >}}). La transition est personnalisable et permet de réaliser des mises en scène originales.

### Appel de script

Cette commande permet d'entrer un texte qui sera évalué dans le langage de script du logiciel. C'est utile pour accéder à des données du jeu habituellement inaccessibles, et pour utiliser les scripts que vous avez installés. Plus d'informations dans le [catalogue des appels de script]({{< ref "/rpgmaker/scripts/appels.md" >}}).
