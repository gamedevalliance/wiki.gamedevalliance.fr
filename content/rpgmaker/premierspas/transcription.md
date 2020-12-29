---
title: "Premiers pas sur RPG Maker - retranscription"
portail: rpgmaker
---

Dans cette section, vous allez apprendre à réaliser un petit décor dans lequel le joueur se balade, puis il rencontrera des bandits et engagera un combat. Les captures d'écran sont réalisées sur RPG Maker VX Ace mais la procédure à suivre est similaire pour toutes les versions de RPG Maker.

Créez un nouveau projet et une carte vierge s'affichera. En mode dessin, vous pouvez utiliser les cases (ou *tiles*) du panneau de gauche (le *tileset*) pour dessiner sur votre carte.

{{< figure src="/rpgmaker/premierspas/modedessin.png" caption="De gauche à droite : le mode dessin, le mode des évènements, et le mode des régions." >}}

Appuyez sur le bouton *play* pour tester le jeu. Vous pouvez déplacer le personnage à condition que votre carte contienne un sol praticable, et ouvrir le menu avec Echap. Il contient toutes les options nécessaires à un RPG basique : les objets, l'équipement, etc.

### Propriétés de la carte et mapping

Nous allons dessiner une carte avec un chemin qui mène au repaire des bandits. Vous verrez que votre tileset actuel, sur la gauche, comprend assez peu d'options. C'est normal : par défaut, le tileset « Carte du monde » est sélectionné. Pour changer de tileset, cliquez-droit sur le nom de la carte, en bas à gauche de l'éditeur, et ouvrez les propriétés.

{{< figure src="/rpgmaker/premierspas/proprietescarte.png" caption="Propriétés de la carte." >}}

Ici, vous pouvez changer le nom de la carte, sa taille ainsi que son tileset. Nous utiliserons le tileset d'extérieur. Si vous le souhaitez, vous pouvez explorer les autres paramètres, notamment la musique (le BGM), l'image de fond (le panorama) ou les ennemis rencontrés aléatoirement.

Le tileset d'extérieur vous offre bien plus de possibilités pour créer votre carte. Si vous ne savez pas par où commencer, prenez un moment pour imaginer le parcours et les obstacles que devra traverser le joueur. Quel est l'objectif de votre carte, quelles émotions doit-on y ressentir ? Lorsque c'est clair pour vous, dessinez des chemins rapidement pour obtenir le squelette de la carte puis ajoutez des détails jusqu'à être satisfait·e.

{{< figure src="/rpgmaker/premierspas/mapping.png" caption="Dessinez le squelette de votre carte, testez-la en jeu et affinez progressivement." >}}

### Un premier évènement

Nous avons pour le moment un simple décor avec lequel nous ne pouvons pas interagir. Pour ajouter des éléments dynamiques à votre jeu, vous devez créer des évènements.

{{< figure src="/rpgmaker/premierspas/demopanneau.png" caption="Ce que nous allons créer dans cette partie." >}}

Pour commencer, nous allons créer un panneau avec lequel on pourra interagir avec la touche d'action, qui est Entrée ou Espace, pour afficher un texte. Passez en mode d'édition des évènements et double-cliquez sur une case. L'éditeur d'évènement s'affiche.

{{< figure src="/rpgmaker/premierspas/modeevents.png" caption="Le mode d'édition des évènements." >}}

Donnez un nom à votre évènement et une apparence de panneau, que vous trouverez dans Tileset B. Il est aussi important de sélectionner la priorité « Même niveau que le héros ». Sinon, en testant le jeu, vous vous rendrez compte que vous pouvez marcher sur le panneau, considéré comme étant sous le héros.

Double-cliquez dans l'espace vide des commandes et une fenêtre s'affichera, répertoriant toutes les commandes que contient RPG Maker. N'hésitez pas à l'explorer pour prendre la mesure des possibilités. Nous avons ici besoin de la première commande, [Afficher un message]({{< ref "evenements.md#afficher-un-message" >}}). Ecrivez une petite indication.

{{< figure src="/rpgmaker/premierspas/eventpanneau.png" caption="L'évènement de panneau terminé." >}}

Vous savez désormais créer un évènement simple avec lequel on interagit. C'est comme cela que l'on crée des PNJ avec qui discuter par exemple !

*La retranscription de la vidéo n'est pas terminée. La suite de la vidéo commence à 14:08 et aborde les cinématiques et la création d'un premier combat.*
