---
title: "Script d'exemple : Les variables"
portail: renpy
menu:
  renpy:
    parent: scripts
    name: "Les variables"
    weight: 4
---

```python
define a = Character("Astride", color="#c8c8ff")
define r = Character("Rémi", color="#c8ffc8")
define m = Character("Marvin", color="#ffc8c8")

label start:
    a "Les variables permettent de stocker des informations
       dont vous aurez besoin plus tard dans la partie."
    a "Il y a plusieurs types de variables, qui peuvent contenir différents
       types de valeurs. Pour commencer simplement, voici un exemple avec le
       booléen, qui peut contenir True ou False, c'est-à-dire Vrai ou Faux."

    $ AimeLeChocolat = False # Avec le signe = on donne une valeur à la variable.

    a "D'abord, je crée ma variable avec sa valeur par défaut."

    menu:
        r "Vous aimez le chocolat ?"
        "Oh oui !":
            $ AimeLeChocolat = True
            r "C'est super, moi aussi j'adore ça !"
        "Beurk, non !":
            r "Non, sérieusement ?"

    a "Et voilà ! Selon le choix du joueur, la variable vaudra True ou False.
       La variable sera sauvegardée tout au long de la partie."

label anniversaire_de_marvin:
    r "Joyeux anniversaire ! Tu peux ouvrir ton cadeau."

    if AimeLeChocolat == True: # Avec le signe == on vérifie la valeur de la variable.
        r "Je sais que tu aimes les chocolats, alors je t'en ai acheté !"
    else: # else veut dire Sinon. C'est ce qu'il se passe si la condition est fausse.
        r "Je ne savais pas trop quoi t'offrir. Alors voici un vélo !"
        m "Comment ça, un vélo ???"

    a "Et voilà ! Vous savez stocker un booléen et le réutiliser plus tard.
       Passons maintenant à quelque chose d'encore plus intéressant : les
       variables qui contiennent des nombres."

label jeu_de_gestion:
    a "Comme tout à l'heure, on commence par créer
       nos variables avec leurs valeurs par défaut."

    $ points_force = 0
    $ points_fatigue = 0

    a "L'avantage des nombres, c'est qu'on peut les manipuler de plein
    de façons ! Ici, on va faire des additions et des soustractions."

    menu:
        m "Voilà une belle journée qui s'annonce ! Que faire ?"
        "Faire du sport":
            $ points_force += 5 # Le signe += ajoute 5 à la valeur existante.
            $ points_fatigue += 10
            m "Ça fait du bien de s'entraîner, mais je suis un peu fatigué."
        "Se reposer":
            $ points_fatigue -= 20 # Le signe -= retire 20 à la valeur existante.
            m "Ce canapé est sacrément confortable !"

    a "Vous avez vu, c'est tout simple. Maintenant, on
       va utiliser ces variables dans des conditions."

    if points_fatigue >= 50: # Si la fatigue est supérieure ou égale à 50...
        m "Je devrais prendre des vacances, moi."
    elif points_fatigue < 10: # Sinon, si la fatigue est strictement inférieure à 10...
        m "Je pète le feu !"
    else: # Si on atteint cette ligne, la fatigue est entre 10 et 49 inclus.
        m "Tout est normal."

    a "Les variables peuvent aussi vous permettre
       de débloquer de nouveaux choix de dialogue !"

    menu:
        m "Que faire aujourd'hui ?"
        "Faire du sport" if points_fatigue < 30:
            m "Comme je ne suis pas trop fatigué, je peux faire du sport !"
        "Se reposer":
            m "Dormir, c'est bien aussi."

label magasin:
    a "Voici le dernier exemple de ce chapitre. Je vais vous
       montrer comment stocker un texte dans une variable."

    menu:
        "Vendeur" "Qu'est-ce qu'il vous faut ?"
        "Acheter du chocolat":
            $ cadeau = "chocolat"
        "Acheter du reblochon":
            $ cadeau = "reblochon"

label anniversaire_de_remi
    m "Tu peux ouvrir ton cadeau !"

    if cadeau == "chocolat":
        r "Oh, Marvin, c'est merveilleux ! Je suis tellement ému !"
    if cadeau == "reblochon":
        r "..."
        r "Es-tu sûr que nous sommes amis, Marvin ?"

    a "Pauvre Rémi ! J'espère que le joueur fera le bon choix. En tout cas,
       vous connaissez maintenant le principe des variables ! Cet outil
       peut être manipulé de nombreuses façons pour créer des résultats
       originaux. Vous découvrirez toutes ses possibilités peu à peu !"
```