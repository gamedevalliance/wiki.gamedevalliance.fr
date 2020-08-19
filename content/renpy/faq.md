---
title: "Questions fréquentes sur Ren'Py"
description: "Vous débutez sur Ren'Py ? Nous pouvons sûrement vous aider. Voici les réponses à toutes les questions que peuvent se poser les débutants et débutantes."
portail: renpy
menu:
  renpy:
    parent: "general"
    name: "Questions fréquentes"
    weight: 1
---

Cette page recense diverses questions que se posent régulièrement les débutants et débutantes sur notre [serveur Discord](https://discord.gg/RrBppaj). Si vous ne trouvez pas l'information dont vous avez besoin, n'hésitez pas à nous demander de l'aide.

*Cette section est une ébauche. Vous pouvez {{< editpage "modifier cette page" >}} ou nous envoyer vos suggestions.*

### Mon image ne s'affiche pas

Si une silhouette grise s'affiche à la place de votre personnage, ou que votre fond ne s'affiche pas correctement, vous avez peut-être mis une majuscule dans votre commande. Si votre image s'appelle `Astride.png`, vous pourriez être tenté·e d'écrire :

```python
show Astride
```

Mais en réalité, il faut écrire :

```python
show astride
```

Et ce, même si le fichier d'origine contient des majuscules ! Comme précisé dans la [documentation](https://www.renpy.org/doc/html/displaying_images.html#images-directory), pour produire les noms finaux des images, Ren'Py prend tous les fichiers présents dans le dossier `images` (ainsi que tous ses éventuels sous-dossiers), retire l'extension `.png` ou `.jpg` et transforme le reste en minuscules.
