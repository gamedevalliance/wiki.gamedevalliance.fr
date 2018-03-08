# Questions fréquentes posées sur le Discord RPG Maker Alliance

## Mapping

### Sur la gauche, je n'ai pas beaucoup de choix de décors pour dessiner ma carte.**

Le panneau à gauche est votre tileset. Par défaut, le tileset sélectionné sert à dessiner des cartes du monde, c'est pourquoi vous n'avez pas tous les décors. En bas à gauche de RPG Maker, sur le nom de votre carte, faites un **clic droit** puis **Propriétés**, et changez de tileset.

## Evènements

### J'ai créé une cinématique, mais elle se joue en boucle indéfiniment.**

Si votre évènement a comme déclenchement **Exécution automatique** ou **Processus parallèle**, il se jouera en boucle indéfiniment. Pour l'arrêter, utilisez la commande **Effacer cet évènement** à la fin l'évènement. Cependant, vous remarquerez qu'en quittant la carte puis y retournant, l'évènement réapparaît et rejoue la cinématique.

En effet, **la commande Effacer cet évènement n'a pas un effet permanent.**

Voici une méthode alternative avec un effet permanent. A la fin de votre évènement, **activez l'interrupteur local A** (parfois appelé interrupteur auto). Ensuite, créez une nouvelle page dans votre évènement, que vous laisserez vide. En haut à gauche de la fenêtre se trouve un espace **Conditions**. Ce sont les conditions requises pour que votre page 2 soit activée. Cochez **Interrupteur local A**. Ainsi, une fois votre cinématique terminée, votre évènement sera bloqué indéfiniment dans une page 2 qui n'exécute rien. Votre problème est réglé !
