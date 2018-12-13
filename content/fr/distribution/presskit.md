---
title: "Réaliser un kit de presse"
description: "Vous avez terminé votre jeu, et cherchez un moyen de le faire connaître au grand public ? Découvrez nos conseils pour toucher les joueurs à travers les magasins libres les plus en vogue."
portail: distribution
menu:
  distribution:
    name: "Kit de presse"
    parent: distribution
    weight: 5
---

Un kit de presse contient des informations facilitant l'écriture d'articles sur votre jeu : des images de haute qualité, votre logo, des informations sur le jeu et vos coordonnées. Il est facilement accessible depuis votre site officiel.

Ces informations sont peut-être déjà présentes sur votre site, c'est pourquoi un kit de presse n'est pas obligatoire. Cependant, c'est une pratique très courante afin d'améliorer les échanges avec les rédacteurs. Vous pouvez réaliser cette page vous-même, ou utiliser presskit() qui produira une page dans un format standard et lisible.

### Installer presskit()

Obtenez presskit() depuis le [site officiel](http://dopresskit.com/). L'archive contient un fichier `install.php`.

Ouvrez le FTP de votre site, et créez un dossier nommé `presskit` (ou autre nom de votre choix). Copiez-y le fichier `install.php`, puis ouvrez-le dans votre navigateur. La page devrait afficher ceci.

{{< figure src="/images/distribution/presskit/installation.png" caption="Installation de presskit()" >}}

### Renseigner les informations

Cliquez sur Let's do this! pour afficher une liste d'actions à réaliser avant de pouvoir afficher votre kit presse.

{{< figure src="/images/distribution/presskit/instructions.png" caption="Instructions de presskit()" >}}

Sur votre FTP, votre dossier `presskit` contient désormais plusieurs fichiers. Commencez par ajouter des images dans le dossier prévu à cet effet, puis éditez `_data.xml` dans l'éditeur de texte de votre choix. Le bloc-notes peut faire l'affaire, mais l'expérience sera plus agréable sur un éditeur de code.

Après avoir exécuté toutes les instructions, accédez à nouveau au dossier depuis votre navigateur : votre kit de presse est disponible.
