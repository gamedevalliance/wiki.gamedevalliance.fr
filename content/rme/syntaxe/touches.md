---
title: "Touches du clavier et souris dans RME"
portail: rme
menu:
  rme:
    name: "Clavier et souris"
    parent: syntaxe
    weight: 5
---

Certaines commandes de RME permettent de détecter l'appui d'une touche du clavier ou un clic de la souris, par exemple [key_press?(key)](http://rmex.github.io/RMEDoc/#key_press?). Lorsqu'une commande requiert un attribut `key`, on doit écrire un symbole faisant référence à une touche. Voici la liste des symboles possibles :

## Clavier

### Touches principales

```ruby
:enter, :space, :shift, :control, :alt,
:esc, :page_up, :page_down,
:left, :up, :right, :down,
:f1 .. :f24, 0 .. 9, :a .. :z,
```

### Touches supplémentaires

```ruby
:cancel, :backspace, :tab, :clear, :pause, :caps_lock, :hangul,
:junja, :final, :kanji, :convert, :nonconvert,
:accept, :modechange, :end, :home, :select, :print, :execute, :snapshot, :insert,
:delete, :help,  :lwindow, :rwindow, :apps, :sleep, :num_0 .. :num_9,
:multiply, :add, :separator, :substract, :decimal, :divide,
:num_lock, :scroll_lock, :lshift, :rshift, :lcontrol,
:rcontrol, :lmenu, :rmenu, :browser_back, :browser_forward,
:browser_refresh, :browser_stop, :browser_search, :browser_favorites,
:browser_home, :volume_mute, :volume_down, :volume_up, :media_next_track,
:media_prev_track, :media_stop, :media_play_pause, :launch_mail,
:launch_media_select, :launch_app1, :launch_app2,
:oem_1..:oem_8, :oem_plus, :oem_comma,:oem_minus, :oem_period, :oem_102
:process, :packet, :attn, :crsel, :exsel, :ereof,
:play, :zoom, :noname, :pa1, :oem_clear
```

### Touches virtuelles de RPG Maker

Ces touches représentent les touches virtuelles que RPG Maker propose notamment dans les conditions des évènements, parfois appelées touches RGSS. Elles se distinguent par leur écriture en majuscules et ne correspondent pas aux touches réelles du clavier. Pour plus de renseignements, consultez le [tableau des commandes du jeu]({{< ref "/rpgmaker/formats.md#commandes-du-jeu" >}}).

```ruby
:DOWN, :LEFT, :RIGHT, :UP,
:A, :B, :C, :X, :Y, :Z, :L, :R,
:SHIFT, :CTRL, :ALT, :F5..:F9
```

## Souris

```ruby
:mouse_left, :mouse_right, :mouse_center, :mouse_x1, :mouse_x2,
```