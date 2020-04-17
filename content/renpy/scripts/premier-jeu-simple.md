---
title: "Script Ren'Py - Premier jeu simple"
portail: renpy
---

```python
# Les lignes commençant par un dièse sont des commentaires.
# Les commentaires ne sont pas lus par Ren'Py, et peuvent
# servir à vous repérer dans votre script.

# Déclarer les personnages au début de script permet de ne
# pas écrire leur nom complet à chaque dialogue, et de leur
# donner une couleur.

define m = Character("Marvin", color="#ffc8c8")
define a = Character("Astride", color="#c8c8ff")

# Début du jeu

label start:
    "Il était une fois..."

    scene ecole   # Le décor est à placer dans le dossier img.
    with dissolve # Cette ligne optionnelle affiche le décor avec un fondu.

    m "J'aimerais tant créer un visual novel..."

    show astride  # Le personnage est à placer dans le dossier img.
    with dissolve # On peut l'afficher en fondu aussi !

    a "Je peux t'aider si tu veux !"
    a "Quel genre d'histoire souhaites-tu raconter ?"

    # Voici comment créer un choix.
    menu:
        m "Je veux créer..."  # Le texte qui s'affiche en bas de l'écran
        "Un jeu d'horreur !": # Une proposition de choix
            jump horreur      # jump permet de sauter à un autre endroit du script !
        "Une histoire d'amour.":
            jump amour

# On peut créer ses propres labels pour y sauter.
label horreur:
    a "Bonne idée ! Ren'Py est tout à fait adapté
       pour raconter des histoires terrifiantes."
    a "Affichons un décor plus sombre..."

    scene maison hantee
    with fade

    show astride
    with dissolve

    a "Lorsque tu changes de scène, les personnages
       disparaissent, donc tu dois les réafficher !"
    jump fin_du_jeu

label amour:
    a "Ah, les histoires romantiques ! C'est un classique du visual novel."
    jump fin_du_jeu # Cette ligne est correcte, mais elle est facultative, car
                    # Ren'Py continue à lire le script dans l'ordre après la fin d'un label.
                    # Les jumps servent à forcer un ordre de lecture différent !

label fin_du_jeu:
    a "Tu sais maintenant afficher des dialogues, des images et des choix !"
    a "Petite astuce en passant : tu peux faire partir un personnage sans changer de scène."

    hide astride

    a "Dans les scripts suivants, je t'apprendrai d'autres fonctions de Ren'Py."

    scene black
    with dissolve # Affiche un écran noir en fondu
    return # Revient à l'écran titre
```