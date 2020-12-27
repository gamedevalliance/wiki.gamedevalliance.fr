---
title: "Mémo des commandes"
portail: fantasy-consoles
menu:
  fantasy-consoles:
    parent: pico8
    weight: 3
---

N'hésitez pas à {{< editpage "modifier cette page" >}} pour ajouter d'autres éléments. Vous trouverez toutes les commandes et des explications détaillées dans le [manuel de PICO-8](https://www.lexaloffle.com/pico-8.php?page=manual). Il peut également être utile de consulter le [manuel de Lua](http://www.lua.org/).

## Commandes

```s
help
load nom
save nom
save nom.p8.png
run
splore
```

### Navigation

```s
ls         # liste du dossier actuel
cd nom     # changer de dossier
cd ..      # remonter d'un dossier
cd /       # retourner à la racine du disque virtuel de PICO-8
mkdir nom  # créer un dossier
folder     # ouvrir le dossier dans l'explorateur
```

## Variables

```lua
annee = 1920
local personnage = {nom = "jean", age = "30"}
annee += personnage.age
```

## Opérateurs

```lua
+   -   *   /   ^   %   =
+=  -=  *=  /=  ^=  %=
<   >   <=  >=  ~=  ==
and or  not
```

## Fonctions

```lua
function addition(a,b)
 return a + b
end
```

## Conditions

```lua
if int < 30 then
 ...
else
 ...
end
```

## Touches

- `btn(0)` renvoie `true` si la touche est actuellement appuyée.
- `btnp(0)` renvoie `true` si la touche vient d'être appuyée, puis se répète au bout de 15 frames et toutes les 4 frames. Utile pour naviguer dans un menu.

- 0, 1, 2, 3 / Shift + L, R, U, D : gauche, droite, haut, bas.
- 4, 5 / Shift + O, X : bouton O, bouton X.
