---
title: "Labels et labels locaux"
onthispage: false
---

Les labels et les labels locaux fonctionnent exactement comme les variables et les variables locales, à la différence qu'ils sont identifiés par un texte. L'ID est un symbole, c'est-à-dire un mot commençant par `:`, comme `:truc`, `:chevre`, `:point_de_vie`.

```ruby
L[:symbol]      # Accès au label :symbol
L[:symbol] = 10 # Donne la valeur 10 au label
SL[:symbol]     # Accès au label local :symbol
SL[map, evenement, :symbol] # Pour un accès complet
```