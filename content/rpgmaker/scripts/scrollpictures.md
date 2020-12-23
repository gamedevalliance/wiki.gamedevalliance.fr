---
title: "Scroll Pictures, un script de Zeus81"
description: "Scroll Pictures est un script compatible avec RPG Maker XP, VX et VX Ace et permet d'ajouter des effets visuels détaillés sur vos maps."
portail: rpgmaker
---

{{< video class="align-right" src="/videos/rpgmaker/scripts/scrollpictures/poussiere.mp4" caption="La poussière flotte dans la lumière de la fenêtre." >}}

Scroll Pictures est compatible avec [RPG Maker XP]({{< ref "/rpgmaker/serie.md#rpg-maker-xp" >}}), [VX]({{< ref "/rpgmaker/serie.md#rpg-maker-vx-" >}}) et [VX Ace]({{< ref "/rpgmaker/serie.md#rpg-maker-vx-ace" >}}) et permet d'ajouter des effets visuels localisés pour enrichir les cartes. Il s'adresse aux amateurs des détails les plus fins.

Le script affiche des images qui bouclent à la manière des brouillards mais uniquement au sein d'un masque avec une forme personnalisée. Pour cela, on a besoin de la texture et d'un masque en nuances de gris.

## Obtenir

- [Lien direct](https://pastebin.com/raw/XNUemDpR) vers le script
- [Démo](https://drive.google.com/open?id=1Vrg02rYxrVUltGH0863y6OQZ1UAvWByo) pour RPG Maker XP

## Documentation

Placez le script sous les scripts de base mais au-dessus de *Main*. Le fichier dll inclus dans la démo doit être placé dans le dossier du jeu ou dans le sous-dossier *System* dans le cas d'un projet VX Ace.

{{< video src="/videos/rpgmaker/scripts/scrollpictures/fumee.mp4" alt="Capture d'écran de RPG Maker XP" caption="De la fumée dans un couloir." >}}

### Paramètres de base

Dans un évènement, on insère une ligne d'appel de script :

```ruby
scroll_picture_mask
```

Toutes les commandes d'image qui suivent cette ligne seront considérées comme paramétrant des masques. On affiche donc l'image du masque et on choisit sa position. Pour créer plusieurs masques, il suffit d'afficher plusieurs images avec des ID différents. On peut également utiliser les commandes Déplacer et Effacer.

Ensuite, pour configurer la texture, on insère l'appel de script :

```ruby
scroll_picture_texture
```

Cette fois-ci, on affiche la ou les images de texture mais les réglages auront un effet différent. La position X indiquera la vitesse de défilement en X, la position Y la vitesse de défilement en Y et le zoom est celui de la texture qui est indépendant du zoom de l'image même. Les autres réglages ne sont pas utilisés. Chaque texture correspond à un masque : si l'ID de votre image de masque est 1, l'ID de votre image de texture doit être 1 aussi.

### Paramètres supplémentaires

```ruby
scroll_picture(id).z = valeur
```

`id` est le numéro de l'image et `valeur` est la priorité de superposition. La valeur par défaut est 1000, ce qui correspond à Au dessus de tout, mais on peut mettre 1 pour que l'image soit juste au dessus du sol ou un nombre négatif pour qu'elle apparaisse derrière la map.

```ruby
scroll_picture(id).map_anchor = valeur
```

`id` est le numéro de l'image et `valeur` est le rapport entre la position de l'image et la map. La valeur par défaut est 1, ce qui signifie que l'image bouge avec la map. A 0 l'image n'est pas fixée à la map, à 2 l'image bouge deux fois plus vite que la map et à 0.5 l'image bouge deux fois moins vite que la map.

### Pour les scripteurs

Il existe d'autres possibilités avec la fonction `GrayscaleMaskBlt` qui ne sont pas exploitées dans ce script.

```ruby
GrayscaleMaskBlt .call(
bitmap.__id__<<1,       # Le bitmap dans lequel on veut dessiner
bitmap_rect.__id__<<1,  # Rect de la zone à remplir, si c'est tout le bitmap on peut mettre 0
mask.__id__<<1,         # (Facultatif) Bitmap d'un masque en niveau de gris à appliquer au remplissage, si la taille du masque est différente de celle du bitmap il est automatiquement étiré
mask_rect.__id__<<1,    # Rect de la zone du masque qu'on désire utiliser, si c'est tout le bitmap on peut mettre 0
texture.__id__<<1,      # Bitmap de la texture à dessiner
texture_rect.__id__<<1, # Rect du morceau de texture à dessiner, si c'est tout le bitmap on peut mettre 0
texture_ox,     # Le décalage en pixels de la texture sur x
texture_oy,     # Le décalage en pixels de la texture sur y
texture_zoom_x, # L'étirement de la texture sur x, défaut 100, ne peut pas être égal à 0, si négatif la texture est inversée sur x
texture_zoom_y  # L'étirement de la texture sur y, défaut 100, ne peut pas être égal à 0, si négatif la texture est inversée sur y
)
```

La fonction retourne également un message : 0 = pas d'erreur, 1 = zoom invalide, 2 = rect invalide.
