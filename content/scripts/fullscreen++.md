---
title: "Fullscreen++, un script de Zeus81"
description: "Fullscreen++ apporte un nouveau mode plein écran plus intelligent utilisant toute la surface de l'écran, sur RPG Maker VX et VX Ace. Installez ce script pour améliorer la qualité visuelle de votre jeu."
---

Le mode plein écran de [RPG Maker VX]({{< ref "rpgmaker.md#rpg-maker-vx" >}}) et [VX Ace]({{< ref "rpgmaker.md#rpg-maker-vx-ace" >}}) est connu pour produire des bandes noires ainsi qu'un flou relativement disgracieux.

Fullscreen++ apporte un nouveau mode plein écran plus intelligent utilisant toute la surface de l'écran. De plus, il est possible de changer le ratio d'affichage en jeu, et les paramètres choisis sont sauvegardés dans le fichier `Game.ini`.

Ce script est un atout essentiel afin de rendre son jeu plus crédible aux yeux du grand public, d'une part pour son plein écran plus esthétique, et d'autre part pour ses commandes permettant de réaliser des menus de personnalisation en jeu.

## Obtenir

- [Lien direct](http://pastebin.com/raw/kc1hzBek) vers le script
- [Documentation](http://pastebin.com/raw/1TQfMnVJ) originale

## Documentation

Alt+Entrée utilise toujours l'ancien mode plein écran. Pour utiliser le nouveau mode, appuyez sur F5. Appuyez sur F6 pour changer le ratio d'écran, que ce soit en mode plein écran ou fenêtré. Les ratios des deux modes sont indépendants.

L'ancien mode plein écran est toujours présent, mais peut être désactivé en écrivant `true` au lieu de `false` à la ligne 9. Cependant cela désactivera aussi Alt+F4, et si on appuie sur Alt+Entrée en même temps ou presque, on peut gruger la protection.

### Configuration par défaut

Le script sauvegarde automatiquement la dernière configuration utilisée dans le fichier `Game.ini` du dossier du jeu. Avant de partager votre jeu, n'oubliez pas d'y écrire la configuration que vous souhaitez par défaut, la première fois qu'on lance votre jeu.

```ruby
[Fullscreen++]
Fullscreen=0      # 0 = fenêtré, 1 = plein écran
FullscreenRatio=0 # 0 = tout l'écran, 1 et + = ratio personnalisé
WindowedRatio=1   # 0 = tout l'écran, 1 et + = ratio personnalisé
```

### Liste rapide des fonctions

```ruby
Graphics.fullscreen?          # pour savoir si on est en mode plein écran ou pas.
Graphics.vx_fullscreen?       # pour savoir si on est en mode plein écran classique.
Graphics.fullscreen_mode      # passe en mode plein écran.
Graphics.vx_fullscreen_mode   # passe en mode plein écran classique.
Graphics.windowed_mode        # passe en mode fenêtré.
Graphics.toggle_fullscreen    # passe d'un mode à l'autre.
Graphics.toggle_vx_fullscreen # passe d'un mode à l'autre avec le plein écran classique.
Graphics.toggle_ratio         # passe d'un ratio à l'autre.
Graphics.ratio                # donne le ratio actuel.
Graphics.ratio = n            # règle le ratio avec un nombre.
```
