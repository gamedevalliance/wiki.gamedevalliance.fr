.. meta::
   :description: Ajoutez vos propres graphismes et musiques à vos jeux RPG Maker. Suivez notre guide pour importer vos fichiers dans le bon format.

Gestion et format des ressources
================================

RPG Maker permet d'ajouter des propres ressources (ou *assets*) graphiques et audio à son jeu. Cela est possible en les important depuis le gestionnaire de ressources dans l'éditeur, ou tout simplement en ajoutant les fichiers dans le dossier du projet. Cette section répertorie les différents formats à respecter pour chaque logiciel.

Format des fichiers audio
-------------------------

Dans RPG Maker, les fichiers audio sont classés dans quatre catégories.

* **BGM :** Musiques jouées en boucle.
* **BGS :** Ambiances sonores jouées en boucle, comme le bruit de la pluie ou d'une cascade.
* **ME :** Courts effets musicaux et jingles, lors d'une victoire ou d'une nuit à l'auberge.
* **SE :** Effets sonores.

RPG Maker MV
~~~~~~~~~~~~

Les fichiers se trouvent dans le dossier ``audio`` de votre projet, et doivent être au format Ogg Vorbis (``.ogg``) et AAC (``.m4a``). Dans le cas d'un export pour Windows ou macOS, seul le format Ogg Vorbis est requis. Pour un export web, Android ou iOS, il est nécessaire d'inclure chaque fichier dans les deux formats.

RPG Maker VX Ace
~~~~~~~~~~~~~~~~

Les fichiers doivent être placés dans le dossier ``Audio`` du projet. RPG Maker VX Ace supporte les formats MIDI, Ogg, MP3, WMA et WAVE. Des informations intégrées aux fichiers peuvent donner des instructions sur la façon de boucler la musique en jeu. Une fois qu'un MIDI arrive à la fin, il est relancé à l'emplacement contenant la valeur de contrôle 111, si elle existe. Dans le cas d'un Ogg, les commentaires ``LOOPSTART`` et ``LOOPLENGTH`` permettent de définir le début et la durée de la boucle.

Commandes du jeu
----------------

De :ref:`rpgmakerxp` à :ref:`rpgmakervxace`, les touches que l'on détecte via les évènements sont en réalité des symboles. Ce que nous appellerons les touches RGSS ne correspondent pas directement à des touches réelles du clavier. Sur :ref:`rpgmakermv`, la dénomination des touches a changé.

+------------+-------------+--------------------+
| Touche MV  | Touche RGSS | Clavier            |
+============+=============+====================+
| Directions | Directions  | Flèches, Pavé num. |
+------------+-------------+--------------------+
| Shift      | A           | Shift              |
+------------+-------------+--------------------+
| Annuler    | B           | Echap, Num 0, X    |
+------------+-------------+--------------------+
| OK         | C           | Espace, Entrée, Z  |
+------------+-------------+--------------------+
|            | X           | A                  |
|            +-------------+--------------------+
|            | Y           | S                  |
|            +-------------+--------------------+
|            | Z           | D                  |
+------------+-------------+--------------------+
| Page préc. | L           | Q, Haut de page    |
+------------+-------------+--------------------+
| Page suiv. | R           | W, Bas de page     |
+------------+-------------+--------------------+

Il est possible d'accéder directement aux touches réelles du clavier avec différents scripts, dont :ref:`RME <rme>`.

+------------------+-----------------+
| RPG Maker VX Ace | Fonction        |
+==================+=================+
| ``Alt + Entrée`` | Plein écran     |
+------------------+-----------------+
| ``Ctrl``\*       | Mode fantôme    |
+------------------+-----------------+
| ``F1``           | Paramètres      |
+------------------+-----------------+
| ``F2``           | Compteur de FPS |
+------------------+-----------------+
| ``F9``\*         | Ecran de debug  |
+------------------+-----------------+
| ``F12``          | Réinitialiser   |
+------------------+-----------------+

+--------------+-------------------+
| RPG Maker MV | Fonction          |
+==============+===================+
| ``Ctrl``\*   | Mode fantôme      |
+--------------+-------------------+
| ``F2``       | Compteur de FPS   |
+--------------+-------------------+
| ``F3``       | Ratio d'affichage |
+--------------+-------------------+
| ``F4``       | Plein écran       |
+--------------+-------------------+
| ``F5``       | Réinitialiser     |
+--------------+-------------------+
| ``F8``\*     | Console           |
+--------------+-------------------+
| ``F9``\*     | Ecran de debug    |
+--------------+-------------------+

\* Uniquement en testant le jeu depuis l'éditeur.

Le mode fantôme permet de traverser les murs et d'ignorer les combats aléatoires en maintenant ``Ctrl``.
