# Commencer avec l'interface de Game Maker Studio 2
Commençons maintenant à développer nos jeux en comprenant l'interface du logiciel.
D'abord, l'espace de travail sur lequel va se passer la création du jeu.

## L'espace de travail
Après s'être connecté et avoir créé votre projet, vous arrivez sur l'espace de travail qui est organisé en plusieurs espaces que vous pouvez voir ici :

![Description de l'espace de travail](https://i.imgur.com/mD1QRod.png)
Les différentes parties sont donc :
 - **Les boutons raccourcis**, ce sont les boutons pour retourner à l'accueil, créer un nouveau projet, sauvegarder, tester le projet, etc...
 - **Les ressources**, là vous pourrez gérer les ressources, accéder à ces dernières plus facilement pour également pouvoir les modifier.
 - **La sortie**, quand vous testerez votre projet, toutes les données de sorties seront transmises sur cet espace.
 - **L'espace de travail**, ou vous écrirez le code, modifierez les ressources, là ou le jeu est créé.

## Les sprites 
Un **sprite** est un élément graphique, capable de se déplacer à l'écran, il peut également être animé avec plusieurs images qui seront affichées les unes après les autres, ce sont des **frames**.
Pour créer un sprite, vous pouvez le créer en faisant clic droit dans les ressources comme ceci :

![Comment créer un sprite ?](https://i.imgur.com/LkjBbxu.png)

Vous arrivez alors dans l'espace de création de sprites ou vous pouvez soit dessiner des sprites directement en faisant *modifier l'image* soit importer des sprites depuis des fichiers en faisant *importer.*
Si la taille du sprite ne vous convient pas, vous pouvez redimensionner le sprite. Si vous voulez changer le masque de collision, c'est à dire le masque qui va dire si un événement est en collision avec le sprite.
Pour animer le sprite, vous pouvez ajouter des frames, et régler la vitesse d'animation du sprite.
Finalement, vous pouvez régler l'origine du sprite dans la partie Origine.

## Les objets
 Un **objet** peut contenir un certain nombre d'événements différents. Dans chaque événement, vous pouvez utiliser le code **GML** ou **D'n'D** pour définir les comportements de cet objet. Cependant, cet objet n'est pas placé dans le jeu, mais sert plutôt de modèle pour les instances placées dans des salles. Une **instance** est essentiellement une copie de l'objet placé dans la salle de votre jeu. Ainsi, vous créez ainsi un objet de mur, puis en placez 100 instances dans la salle pour créer votre monde de jeu.

Pour créer un objet, faites comme pour les sprites mais faites click droit sur la partie *Objets*.
Vous arrivez donc sur l'espace de création d'objets que vous pouvez voir ici :

![Création d'un objet](https://i.imgur.com/lWyWggo.png)

Vous pouvez alors choisir le sprite que vous voulez que l'objet aie.
Pour commencer à le définir, vous avez un certain nombres de types d’événement qui sont :

 - **Créer**, ce qui permet de créer les attributs de base de l’événement, si vous voulez utiliser des variables pour votre objet, il faudra définir leur valeur de base dans un évènement créer.
 - **Détruire**, ce qui permet de définir les actions qui vont se dérouler après que l'objet soit détruit.
 - **Nettoyer**, ce qui permet de définir les actions qui vont se dérouler après qu'un évènement ait détruit une instance dans la salle.
 - **Etape**, ce qui permet de définir les actions qui vont se dérouler en boucle dans l’événement.
 - **Alerte**, ce qui permet de définir les actions qui se dérouleront après un temps précisé lors de l'appel.
 - **Dessiner**, c'est  celui qui gère ce que vous voyez à l'écran en jeu.
 - **Souris**, ce qui permet de définir les actions qui vont se dérouler après un click choisi sur la souris.
 - **Touche enfoncée**, ce qui permet de définir les actions qui vont se dérouler pendant que l'on enfonce une touche choisie.
 - **Touche pressée**, ce qui permet de définir les actions qui vont se dérouler après avoir pressée une touche choisie.
 - **Touche relâchée**, ce qui permet de définir les actions qui vont se dérouler après avoir relâché une touche choisie.
 - **Geste**, ce qui permet de définir les actions qui vont se dérouler après avoir touché l'écran (*sur mobile*), ou cliqué et déplacé la souris à l'aide de plusieurs choix.
 - **Collision**, ce qui permet de définir les actions qui vont se dérouler après la collision avec un objet choisi.
 - **Autre**, ce sont les autres conditions, pour définir des actions après celles-ci.
 - **Asynchrone**, cet évènement n'est pas déclenché par défuaut avec Game Maker Studio 2 mais plutôt par la fin d'autres actions comme le chargement d'un serveur web.*
 
## Les tilesets
Les tilesets sont les ressources graphiques permettant de dessiner les niveaux de votre jeu.
Pour créer un tileset faites comme pour les sprites et les objets mais dans la partie tileset.
Vous arrivez dans l'espace de création de tileset que vous pouvez voir ci-dessous:
![Création d'un tileset](https://i.imgur.com/71cVdfR.png)

Créez un sprite ou vous mettez votre tileset et sélectionnez ici le sprite.
Vous pouvez découper le tileset et le personnaliser comme vous le souhaitez dans la partie droite de l'espace.

## L'éditeur de pièces
Créons à présent notre première pièce, vous devriez savoir comment faire maintenant.
Les pièces sont les niveaux de notre jeu.
![Éditeur de pièce](https://i.imgur.com/N4AK6Xv.png)
 
 Donc, vous pouvez choisir votre arrière plane en allant dans le calque *Background*.
 Vous pourrez à partir de ce calque importer le sprite de l'arrière plan de la scène.
 Dans le calque *instances*, vous pourrez glisser vos objets pour les placer dans la scène. 
 Pour placez votre tileset dans la pièce, créez un calque de tiles et sélectionnez le tileset avec lequel vous voulez dessiner avec.
 Vous pouvez créer autant de calques que vous voulez.
