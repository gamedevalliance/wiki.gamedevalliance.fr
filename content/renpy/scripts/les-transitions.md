---
title: "Script d'exemple : Les transitions"
portail: renpy
---

```python
define a = Character("Astride", color="#c8c8ff")

label start:
    a "On peut facilement afficher un décor avec un fondu."

    scene ecole
    with dissolve

    a "Pareil pour les personnages !"

    show astride
    with dissolve

    a "C'est un fondu simple, mais il en existe d'autres."
    a "Le fondu suivant passe par du noir, ce qui est
       sympathique pour changer de décor."

    scene prairie
    with fade

    a "Vous pouvez afficher deux éléments l'un après l'autre,
       avec deux fondus séparés..."

    scene ecole
    with dissolve
    show astride
    with dissolve

    a "Ou les deux en même temps, dans le même fondu !"

    scene ecole
    show astride
    with dissolve

    a "Enfin, si vous voulez afficher le premier élément
       instantanément, puis le deuxième avec un fondu, écrivez :"

    scene prairie
    with None
    show astride
    with dissolve

# Toutes les transitions par défaut sont listées dans la doc :
# https://www.renpy.org/doc/html/transitions.html
```