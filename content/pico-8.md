---
title: "Portail de PICO-8"
description: "PICO-8 est une console imaginaire : une machine rétro virtuelle dans laquelle on peut aussi bien développer son jeu que jouer à ceux des autres."
onthispage: false
portail: pico-8
menu:
  general:
    name: "PICO-8"
    parent: "portails"
    weight: 3
---

![Bannière du portail PICO-8](/pico-8/banniere.png)

PICO-8 est une [console imaginaire]({{< ref "fantasy-consoles.md" >}}), ou fantasy console en anglais. C'est une machine virtuelle à l'allure rétro dans laquelle on peut aussi bien développer son jeu que jouer à ceux des autres. Il est très facile d'apprendre la création de jeux avec PICO-8, en raison de sa version simplifiée du langage Lua, mais aussi parce que le programme permet de tout faire en son sein : la programmation, le dessin, la musique et les sons.

Les jeux PICO-8 peuvent être exportés pour Windows, Mac, Linux, Raspberry Pi, ou bien dans une version web qui permet d'y jouer aussi bien sur ordinateur que sur smartphone.

## Installation

PICO-8 peut être acheté sur le [site officiel](https://www.lexaloffle.com/pico-8.php) pour 15$. Lorsqu'une mise à jour est disponible, vous pouvez vous connecter au site pour retélécharger le programme.

PICO-8 faisait également partie du [Bundle for Racial Justice and Equality](https://itch.io/b/520/bundle-for-racial-justice-and-equality) d'itch.io à l'occasion du mouvement Black Lives Matter. Beaucoup de monde avait acheté ce bundle, et si c'est votre cas, vous pourrez y retrouver une copie du logiciel.

### Premier démarrage

PICO-8 s'ouvre avec un écran noir dans lequel vous pouvez entrer des commandes. C'est ici que vous écrirez des commandes pour ouvrir et enregistrer des fichiers, exporter votre jeu, etc. Pour essayer quelques commandes, tapez `help` ou consultez notre [mémo]({{< ref "pico-8/memo.md">}}).

Pour commencer à créer, ouvrez l'éditeur avec Echap. Pour tester votre jeu, retournez à l'invite de commandes et tapez `run`, ou plus simplement, utilisez le raccourci clavier Ctrl+R.

### Configuration

Passez du plein écran au mode fenêtré avec Alt+Entrée.

Sur Windows, PICO-8 est installé dans `%appdata%/pico-8`. Dans le fichier `config.txt`, vous trouverez divers paramètres utiles comme la durée et la taille des GIF animés, le numéro de joueur de la première manette branchée, l'emplacement des jeux, etc. Modifiez ce fichier lorsque PICO-8 est fermé pour que les nouveaux réglages soient pris en compte.

## Ressources utiles

Pour découvrir PICO-8 tout en apprenant à programmer en Lua simplement, vous pouvez suivre notre formation gratuite en vidéo [sur Youtube](https://www.youtube.com/playlist?list=PLHKUrXMrDS5t3ibCCh412ZAy0slIv3jeE) ou à l'écrit [sur FaireDesJeux.fr](https://fairedesjeux.fr/pico-8/).

N'hésitez pas à regarder le [manuel](https://www.lexaloffle.com/pico-8.php?page=manual) lorsque que vous souhaitez en apprendre plus sur une fonction. Il est également disponible dans le dossier du logiciel. Vous devrez rechercher le bon mot-clé dans la page, ce qui n'est pas très pratique, mais vous y trouverez des explications simples et concises. Pour entrer dans le détail, vous pouvez également rechercher les commandes dans le [wiki anglais de la communauté](https://pico-8.fandom.com/wiki/Pico-8_Wikia). C'est un site très intéressant puisqu'il contient des exemples et des renseignements sur les fonctionnalités secrètes de PICO-8, qui ne sont pas documentées dans le manuel.
