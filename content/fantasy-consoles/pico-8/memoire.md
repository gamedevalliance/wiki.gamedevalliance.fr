---
title: "La mémoire"
portail: fantasy-consoles
menu:
  fantasy-consoles:
    parent: pico8
    weight: 2
---

Cette page détaille la structure de la mémoire de PICO-8 et différentes adresses que l'on peut modifier en cours de jeu pour réaliser des effets uniques. Pour mieux comprendre ce qu'est une adresse mémoire, le binaire et l'hexadécimal, consultez la section "[Manipuler la mémoire](https://fairedesjeux.fr/pico-8/techniques-avancees/manipuler-la-memoire/)" du cours sur PICO-8.

## Anatomie de la mémoire

### La ROM

Ce que le manuel de PICO-8 désigne par ROM n'est autre que la cartouche du jeu, qui est recopiée dans la RAM au lancement. Il est possible de recharger une partie précise de la cartouche (et même d'une autre cartouche) en cours de jeu avec la fonction `reload()`, mais aussi d'écrire dans la ROM avec `cstore()`. Cependant, le code ne peut être manipulé de la même façon, car il est protégé et stocké dans la [RAM de Lua](#la-ram-de-lua).

### La RAM de base

La RAM de base est composée de 32 Kio de mémoire adressable. Les cartouches de PICO-8 sont agencées de la même façon que la RAM de l'adresse 0x0 à 0x4300. Ce sont donc les mêmes adresses entre la ROM et la RAM pour les sprites, la map, les flags, les musiques et les sons, ce qui est très pratique pour mieux s'y retrouver quand on veut recopier des données de l'une vers l'autre.

{{< figure src="/images/fantasy-consoles/pico-8/memoire/schema.png" alt="Schéma représentant les différents secteurs de la RAM de PICO-8." caption="Un carré équivaut à 128 octets." >}}

#### Sprites et map

La spritesheet est stockée dans la mémoire comme une grande image de 128×128 pixels. Comme les pixels peuvent avoir 16 couleurs différentes, ils ont chacun besoin de 4 bits pour être représentés ; chaque octet contient donc 2 pixels. Pour rappel, la moitié basse de la spritesheet partage le même espace dans la mémoire que la moitié basse de la map.

La map fait au total 128×64 cases, chacune étant codée dans un octet puisqu'elles doivent stocker l'ID du sprite, qui peut aller de 0 à 255. La map utilise donc autant d'espace que la spritesheet, c'est-à-dire 8192 octets, mais la deuxième moitié se trouve dans l'espace partagé.

#### Flags

Chaque sprite a 8 flags qui peuvent être activés ou désactivés. Cela fait un bit par flag et donc un octet par sprite. Les sprites flags occupent au total 256 octets de la mémoire.

#### Musique et sons

Un jeu peut contenir 64 partitions musicales utilisant chacune 4 octets, tandis que les 64 sons utilisent 68 octets chacun.

Chaque note d'un son est codée sur 16 bits, avec dans l'ordre :

- 1 bit qui active ou désactive les instruments personnalisés
- 3 bits pour l'effet (0 – 7)
- 3 bits pour le volume (0 – 7)
- 3 bits pour l'instrument (0 – 7)
- 6 bits pour la fréquence (0 – 63)

Chacune de ces valeurs peut être changée en temps réel en pokant la bonne adresse. Dans le cas d'un jeu de voiture, il serait possible d'obtenir un bruit de moteur dynamique en changeant la fréquence du son.

#### Espace libre

Les octets allant de l'adresse 0x4300 à 0x5dff n'ont aucune utilité particulière. Cela fait 6911 octets de mémoire que utilisables comme bon vous semble en cours de jeu.

Vous pourriez y copier une partie de l'écran pour créer une photo à réutiliser plus tard dans le jeu, ou encore utiliser `reload()` pour copier les données d'une autre cartouche dans cette région, et ainsi garder en mémoire une map ou des sprites supplémentaires.

#### Données persistantes

Cette région de 256 octets concerne le fichier de sauvegarde de votre jeu. En utilisant `cartdata("mon_super_jeu")`, vous créez un fichier de sauvegarde contenant 64 chiffres sur l'ordinateur du joueur ou de la joueuse. Vous pouvez ensuite utiliser les commandes simplifiées `dget()` et `dset()` pour accéder à la sauvegarde, ou bien peek et poke la mémoire directement pour davantage de contrôle. Quelque soit la méthode choisie, le fichier de sauvegarde sera automatiquement enregistré.

#### Draw state et hardware

Le draw state désigne un ensemble de variables qui dicte le comportement des fonctions de dessin. C'est dans cette région que sont sauvegardées la dernière couleur utilisée, la position de la caméra, la région de `clip()`, les modifications de la palette et du fill pattern... On peut poker quelques-unes de ces adresses pour produire des effets intéressants (voir [Adresses utiles](#adresses-utiles)). Similairement, quelques adresses concernent l'état du hardware. On y trouve l'état des boutons de chaque joueur, le délai et l'intervalle de `btnp()`, etc.

#### Ports GPIO

Un connecteur GPIO permet à une machine de communiquer avec d'autres circuits électroniques. Ils sont notamment présents sur les Raspberry Pi et les PocketCHIP. Vous pourriez envoyer un signal pour allumer une LED ou encore lire le signal entrant pour connaître l'état d'un interrupteur.

{{< youtube aAdSbrCt5Mg >}}

Envoyer ou recevoir un signal d'un port GPIO se fait en accédant directement à sa valeur dans la mémoire. Les adresses précises sont listées dans la section GPIO du manuel de PICO-8. Chaque octet représentant un port, on peut y envoyer une information sur 8 bits, autrement dit un chiffre jusqu'à 255. De plus, on peut y accéder en JavaScript dans le cas d'un jeu navigateur avec le tableau global `pico8_gpio`. Ainsi, un jeu PICO-8 peut communiquer avec une page web.

#### L'écran

C'est dans ce dernier espace de la mémoire qu'écrivent les fonctions de dessin telles que `spr()`, et comme ce serait le cas avec une vraie machine, l'écran est "branché" à la mémoire et en récupère le contenu pour l'afficher.

### La RAM de Lua

Cet espace limité à 2 Mio contient le code du programme compilé ainsi que les variables en cours de jeu. Elle est entièrement séparée de la RAM de base et il est impossible d'y accéder avec `peek()` et `poke()`. Il est uniquement possible de connaître la quantité de mémoire actuellement occupée avec `stat(0)`, qui renvoie le nombre d'octets utilisés.

Les 2 Mio disponibles peuvent sembler énormes en comparaison des 32 Kio de la RAM de base, et il est vrai que cela laisse une grande marge de manœuvre. Le nombre de variables dans un jeu sera rarement un problème.

## Adresses utiles

*Section en cours de rédaction.*
