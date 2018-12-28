---
title: "ORMS: Old RPG Maker Style"
description: "ORMS permet de réaliser un jeu rétro comme dans RPG Maker 2003 mais avec RPG Maker VX Ace, afin de créer des jeux pixellisés tout en profitant de la puissance de VX Ace."
portail: rpgmaker
aliases:
    - /scripts/orms/
---

{{< figure class="align-right" src="/images/rpgmaker/scripts/orms/donsadventures.png" alt="Screenshot de Don's Adventures 2" caption="Don's Adventures 2 recréé dans VX Ace avec ORMS." >}}

ORMS permet de réaliser un jeu à l'apparence de [RPG Maker 2003]({{< ref "/rpgmaker/serie.md#rpg-maker-2003" >}}) sur [RPG Maker VX Ace]({{< ref "/rpgmaker/serie.md#rpg-maker-vx-ace" >}}). De nombreuses options sont configurables, ce qui rend le script très versatile.

ORMS propose de remplacer les polices d'écriture traditionnelles par une image bitmap, afin d'utiliser des polices pixellisées comme celle de RPG Maker 2003. L'affichage des boîtes de dialogue et des choix est également remanié pour imiter l'ancien moteur. 

L'intérêt d'ORMS est d'allier le charme pixellisé des jeux RPG Maker 2003 au potentiel incomparable de RPG Maker VX Ace afin d'obtenir le meilleur des deux mondes.

## Installation

ORMS tient en un script et deux images. Depuis la page de la [dernière version](https://github.com/RMEx/orms/releases), récupérez `orms.rb` puis copiez son contenu dans `Materials`, de préférence après vos autres scripts. Placez `Font.png` et `Font_color.png` dans le dossier `Graphics/System` de votre projet.

## Configuration

Choisissez les options que vous souhaitez utiliser ou désactiver au début du script, dans le module `ORMS_CONFIG`. La description officielle en anglais des paramètres est disponible dans le [manuel d'origine](https://github.com/RMEx/orms/blob/master/README.md).

### Image de police d'écriture

Option | Description | Par défaut
--- | --- | ---
**BITMAP_FONT** | Affiche les textes avec les images `Font` and `Font_color` | `true`
**FONT_WIDTH<br>FONT HEIGHT** | Taille d'un caractère dans l'image | `6` × `14`
**DOUBLE_FONT_SIZE** | Double la taille de l'image de police | `true`
**LINE_HEIGHT** | Change la hauteur de ligne | `32`
**PADDING** | Change la marge des messages et des fenêtres de combat | `16`
**SHADOW** | Affiche l'ombre avec la dernière couleur de `Font_color` | `true`
**REWRITE_ALL_TEXTS** | Réécrit `Bitmap.draw_text` instead of `Window_Base.draw_text` | `true`

{{< figure src="/images/rpgmaker/scripts/orms/menubitmapfont.png" alt="Capture d'écran de RPG Maker VX Ace" caption="Menu par défaut de VX Ace avec BITMAP_FONT" >}}

### Options des fenêtres

Option | Description | Par défaut
--- | --- | ---
**OPAQUE_BOX** | Fenêtres opaques | `false`
**STOP_CURSOR_BLINKING** | Arrête le clignotement du rectangle de sélection | `true`
**OLDSCHOOL_CHOICE_LIST** | Affichage des choix comme dans RPG Maker 2003 | `true`

{{< figure src="/images/rpgmaker/scripts/orms/oldschoolchoices.png" alt="Comparatif des deux méthodes d'affichage des choix" caption="A gauche, la fenêtre des choix de VX Ace. A droite, les choix intégrés au message de 2003." >}}

### Options de l'écran

Option | Description | Par défaut
--- | --- | ---
**OLD_RESOLUTION** | Résolution de 640×480 (pour imiter 320×240 de RM2003) | `false`
**TOGGLE_FULLSCREEN** | Le raccourci (`:F3..:F11`) pour passer en plein-écran comme sur RM2003. Ecrire `0` pour ne pas le définir. | `:F4`
**TOGGLE_WINDOW_MODE** | Le raccourci (`:F3..:F11`) pour passer à une petite fenêtre ×1 comme sur RM2003. Ecrire `0` pour ne pas le définir. | `:F5`
**PIXELATE_SCREEN** | Cette option peut ralentir le jeu mais essaie de s'optimiser avec une méthode de frame skipping. L'option active un nouveau compteur affichant les FPS réels (F2), considérant le frame skipping. | `false`
**PIXELATION_SHORTCUT** | Le raccourci (`:F3..:F11`) pour activer la pixellisation en jeu. Ecrire `0` pour ne pas le définir. N'oubliez pas d'expliquer la commande au joueur ! Une alternative est d'utiliser `Orms.set(:pixelate_screen, `false`)`. | `:F6`

**TOGGLE_FULLSCREEN** et **TOGGLE_WINDOW_MODE** redéfinissent les raccourcis de [Fullscreen++]({{< ref "fullscreen++.md" >}}). Si vous l'utilisez, placez Fullscreen++ juste avant ORMS.

### Options des ressources

Activez ces options pour utiliser directement des ressources de RPG Maker 2000 et 2003 sans avoir besoin de les adapter !

Option | Description | Par défaut
--- | --- | ---
**USE_OLD_RM_BACKDROP** | `Graphics/Battlebacks1-2` agrandis par 2 | `false`
**USE_OLD_RM_MONSTER** | `Graphics/Battlers` agrandis par 2 | `false`
**USE_OLD_RM_PANORAMA** | `Graphics/Parallaxes` agrandis par 2 | `false`
**USE_OLD_RM_PICTURE** | `Graphics/Pictures` agrandis par 2 | `false`
**USE_OLD_RM_TITLE** | `Graphics/Titles1-2` agrandis par 2 | `false`
**USE_OLD_RM_CHARSET** | `Graphics/Characters` agrandis par 2 | `false`
**BACKDROP_ALIGN_TOP** | `Graphics/Battlebacks1-2` alignés en haut au lieu d'au centre pour les fonds de RPG Maker 2000 | `false`
**KILL_CHARSET_SHIFT_Y** | Fait comme si tous les personnages avaient un `!` au début de leur nom | `false`
**OLD_CHARSET_DIRECTION** | Les personnages de VX Ace ont l'ordre "BAS, GAUCHE, DROITE, HAUT" mais dans 2003, c'était "HAUT, DROITE, BAS, GAUCHE." Cette option vous permet d'utiliser l'ancien format ! | `false`

### Désactiver les nouvelles fonctionnalités

Option | Description | Par défaut
--- | --- | ---
**DEACTIVATE_DASH** | Désactive le dash en appuyant sur Shift | `false`

## Commandes en jeu

Méthode | Description
--- | ---
`Orms.set(feature, false)` | Change une des options en jeu !<br>Exemple : `Orms.set(:bitmap_font, false)`
`Orms.deactivate` | Désactive toutes les options
`Orms.activate` | Active toutes les options
