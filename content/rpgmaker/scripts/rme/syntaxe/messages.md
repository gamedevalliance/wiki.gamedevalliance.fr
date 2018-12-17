---
title: "Affichage dans les messages"
onthispage: false
---

Sur RPG Maker, les variables étaient déjà affichables dans les messages avec `\V[id]`. Avec RME, il est aussi possible d'afficher les labels, les labels locaux et évidemment les variables locales. Pour ce faire, il suffit de précéder leur appel par `\`, comme pour les variables normales.

```ruby
Afficher_message "Hey, la variable locale n°5 de l'événement n°2
                  de la map n°1 est égale à \SV[1,2,5], sans déconner !
                  Même que le label :salut vaut : \L[:salut] !"
```

Comme dans un appel de script, vous pouvez spécifier partiellement les arguments pour les éléments locaux.