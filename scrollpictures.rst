:tocdepth: 3

.. _scrollpictures:

Scroll Pictures, un script de Zeus81
================================

.. highlight:: ruby

.. figure:: http://img85.xooimage.com/files/3/2/3/0-34d49fa.gif
   :alt: Capture d'écran de RPG Maker XP
   :align: right

   De la poussière qui flotte.

Scroll Pictures est compatible avec :ref:`rpgmakerxp`, :ref:`VX <rpgmakervx>` et :ref:`VX Ace <rpgmakervxace>` et permet d'ajouter des effets visuels localisés pour enrichir les cartes. Il s'adresse aux amateurs des détails les plus fins.

Le script affiche des images qui bouclent à la manière des brouillards, mais uniquement au sein d'un masque avec une forme personnalisée. Pour cela on a besoin de la texture, et d'un masque en nuances de gris.

Obtenir
-------

* `Démo <https://drive.google.com/open?id=1Vrg02rYxrVUltGH0863y6OQZ1UAvWByo>`_ pour RPG Maker XP

Documentation
-------------

Placez le script sous les scripts de base, mais au-dessus de Main. Le fichier dll inclus dans la démo doit être placé dans le dossier du jeu, ou dans le sous-dossier System dans le cas d'un projet VX Ace.

.. figure:: http://img82.xooimage.com/files/8/d/a/1-34d4a03.gif
   :alt: Capture d'écran de RPG Maker XP
   :align: right

   De la fumée dans un couloir.

Paramètres de base
~~~~~~~~~~~~~~~~~~

Dans un évènement, on insère une ligne d'appel de script ::

    scroll_picture_mask

Toutes les commandes d'image qui suivent cette ligne seront considérées comme gérant le masque. On affiche donc l'image du masque et on choisit sa position.

Ensuite, pour configurer la texture, on insère l'appel de script ::

    scroll_picture_texture

Cette fois-ci, on affiche l'image de texture, mais les autres réglages auront un effet différent. La position X indiquera la vitesse de défilement en X, la position Y la vitesse de défilement en Y, et le zoom est celui de la texture qui est indépendant du zoom de l'image même. Les autres réglages ne sont pas utilisés.

Toutes les commandes liées aux images suivant directement ``scroll_picture_mask`` sont considérées comme paramétrant des masques. Pour configurer plusieurs masques, il suffit d'insérer plusieurs commandes Afficher à la suite. On peut également utiliser les commandes Déplacer, Effacer, etc. Idem pour ``scroll_picture_texture``.

Paramètres supplémentaires
~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    scroll_picture(id).z = valeur

``id`` est le numéro de l'image et ``valeur`` est la priorité de superposition. La valeur par défaut est 1000, ce qui correspond à Au dessus de tout, mais on peut mettre 1 pour que l'image soit juste au dessus du sol, ou un nombre négatif pour qu'elle apparaisse derrière la map.

::

    scroll_picture(id).map_anchor = valeur

``id`` est le numéro de l'image et ``valeur`` est le rapport entre la position de l'image et la map. La valeur par défaut est 1, ce qui signifie que l'image bouge avec la map. A 0, l'image n'est pas fixée à la map, à 2 l'image bouge deux fois plus vite que la map, et à 0.5 l'image bouge deux fois moins vite que la map.

Pour les scripteurs
~~~~~~~~~~~~~~~~~~~

Il existe d'autres possibilités avec la fonction ``GrayscaleMaskBlt`` qui ne sont pas exploitées dans ce script.

::

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

La fonction retourne également un message : 0 = pas d'erreur, 1 = zoom invalide, 2 = rect invalide.

Autres scripts d'effets visuels
-------------------------------

* :ref:`lights&shadows`
* :ref:`mapeffects`
* :ref:`fullscreen`
