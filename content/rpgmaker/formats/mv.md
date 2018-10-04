---
title: "Format des images dans RPG Maker MV"
description: "Ajoutez vos propres graphismes et musiques à vos jeux RPG Maker. Suivez notre guide pour importer vos fichiers dans le bon format."
portail: rpgmaker
---

*Section incomplète. Si vous possédez des informations, {{< editpage "modifiez cette page" >}} ou contactez-nous.*

## Tilesets

[RPG Maker MV]({{< ref "/rpgmaker/serie.md#rpg-maker-mv" >}}) utilise le même format que [RPG Maker VX Ace]({{< ref "/rpgmaker/serie.md#rpg-maker-vx-ace" >}}), mais avec des tiles de 48 pixels de côté. Bien qu'à l'utilisation, le logiciel donne l'impression qu'il n'y a que deux couches, en réalité il y a cinq couches, gérées automatiquement par le logiciel.

Les deux premières couches sont les plus basses, sont réservées à l'onglet A. Les deux dernières sont les plus hautes et sont réservées aux onglets B, C, D et E. Entre les couches basses et les couches hautes se trouve la couche d'ombre.

### Fonctionnement des couches basses

Les sets A1, A3, A4 et A5 sont liés à la première couche. La moitié gauche du set A2 est liée à la première couche, tandis que la moitié droite est liée à la deuxième couche.

En mode « Type de zone », la deuxième couche peut se combiner à n'importe quel tile de la première couche.

En mode « Type de monde », placer un tile de la deuxième couche sur un tile de la deuxième ou quatrième colonne du set A2, remplace automatiquement la première couche par le tile de la première ou troisième colonne du set A2.

### Fonctionnement des couches hautes

Le premier tile est placé sur la quatrième couche. Poser un nouveau tile par-dessus le place sur la cinquième couche.

Lorsqu'on ajoute un troisième tile :

- Le tile qui se trouvait sur la quatrième couche disparait ;
- Le tile qui se trouvait sur la cinquième couche passe à la quatrième couche ;
- Le nouveau tile est placé sur la cinquième couche.

Pour effacer facilement la quatrième et la cinquième couche, il faut recouvrir la case avec un tile spécial, situé en haut à gauche de l'onglet B.

La combinaison de tiles passables et de tiles impassables sur les couches hautes cause un bug graphique indétectable dans l'éditeur, mais qui se révèle en jeu. Un tile avec le symbole ☆ s'affichera toujours au-dessus, qu'il soit sur la quatrième ou la cinquième couche. La passabilité de la case dépend alors du tile sur l'autre couche. Ainsi, une combinaison ◯ et ☆ sera passable, tandis qu'une combinaison ╳ et ☆ sera bloquante, et ce peu importe l'ordre de la combinaison.

## Sideview Battlers

Ces images représentent un personnage de l'équipe dans les combats en vue de côté. Chaque image fait 64 pixels de côté. Une planche en contient 9×6, pour une taille totale de 576×384 pixels.

Trois images alignées forment une animation. Voici la correspondance des poses, de haut en bas puis de gauche à droite :

1.  Pas en avant
2.  En attente
3.  En attente (magie)
4.  Défense
5.  Subit des dégâts
6.  Esquive
7.  Thrust (Poussée)
8.  Swing (Balancier)
9.  Missile (Missile)
10. Compétence physique
11. Compétence magique
12. Objet
13. S'échappe
14. Victorieux
15. PV bas
16. Altération d'état néfaste
17. Endormi
18. Mort

Les animations jouées en boucle sont répétées dans l'ordre 1-2-3-2, tandis que les animations jouées une fois, comme celle de dégâts, suivent l'ordre 1-2-3.

## Images système

- **Balloon :** bulles d'émotion. L'espace transparent en bas de l'image peut être complété pour créer des bulles personnalisées.
- **ButtonSet :** affiché sur les appareils tactiles pour éditer les champs de nombres, par exemple lors de l'achat d'objets.
- **Damage :** chiffres de l'affichage des dégâts en combat.
- **GameOver :** image de game over.
- **Loading :** affiché pendant les chargements. Très utile pour les jeux sur navigateur aux chargements plus lent.
- **IconSet :** icônes des objets, armes, compétences, etc.
- **Shadow1 :** ombre affichée en utilisant un avion.
- **Shadow2 :** ombre des membres de l'équipe dans les combats en vue de côté.
- **States :** état des alliés dans les combats en vue de côté.
- **Weapons :** armes affichées lors de l'attaque d'un membre de l'équipe dans les combats en vue de côté. Weapons1 et Weapons2 contiennent 12 images prédéfinies. Weapons3 est destiné à la personnalisation.
- **Window :** éléments composant les fenêtres.
