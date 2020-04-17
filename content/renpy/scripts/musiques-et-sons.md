---
title: "Script Ren'Py - Musiques et sons"
portail: renpy
---

```python
label start:
    # Les musiques peuvent être placées dans le dossier game.

    play music "rock.opus"

    # Pour changer de musique, vous pouvez créer une transition
    # en fondu entre l'ancienne musique et la nouvelle.

    play music "piano.ogg" fadeout 1.0

    # Notez que stop music peut aussi prendre un fadeout.

    stop music

    # Les effets sonores ne se jouent qu'une fois,
    # contrairement aux musiques qui bouclent.

    play sound "victoire.ogg"
```