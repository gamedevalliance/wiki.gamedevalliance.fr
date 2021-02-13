---
title: "Scripts et plugins"
description: "Téléchargez des scripts pour ajouter de nouvelles fonctionnalités à vos jeux RPG Maker sans savoir programmer. Donnez un souffle nouveau à vos jeux grâce aux scripts RME, Fullscreen++, ORMS et bien d'autres !"
portail: rpgmaker
aliases:
    - /rpgmaker/scripts/installer/
    - /rpgmaker/scripts/appels/
    - /rpgmaker/scripts/appels/mv
    - /rpgmaker/scripts/appels/vxace
    - /rpgmaker/scripts/appels/xp
---

De nombreux programmeurs écrivent des scripts pour les publier en accès libre sur Internet. C'est un moyen simple et rapide d'ajouter des fonctionnalités avancées à vos jeux sans savoir programmer.

## Installer un script

### RPG Maker MV

Les scripts sont écrits en JavaScript et partagés sous forme de plugins. Ce sont des fichiers à télécharger au format js.

Ouvrez le dossier de votre jeu. Naviguez jusqu'au dossier `js/plugins` puis copiez-y le fichier js.

Retournez dans RPG Maker MV et cliquez sur l'icône de pièce de puzzle pour ouvrir le gestionnaire de plugins. Double-cliquez sur un espace vide puis choisissez votre plugin dans le menu déroulant. Ajustez les options s'il y en a puis sauvegardez vos changements.

#### En cas de problème

Si un plugin de fonctionne pas, avant de tenter de comprendre le problème ou de demander de l'aide, assurez-vous :

1. D'avoir la dernière version de RPG Maker MV.
2. De mettre à jour votre projet : dans le dossier `NewData` du logiciel, récupérez les fichiers `index.html`, `package.json` et `js/rpg_xxxx.js`. Copiez-les dans votre projet pour remplacer les anciennes versions.
3. D'avoir la dernière version du plugin en question.
4. De le placer dans le bon ordre dans votre liste s'il dépend d'autres plugins.
5. D'essayer dans une nouvelle partie (pas d'ancienne sauvegarde ou de test de combat depuis la BDD).

### RPG Maker VX Ace et antérieur

La plupart du temps, les scripts ne sont pas compatibles d'une version de RPG Maker à l'autre. Assurez-vous que le script désiré soit écrit pour votre version.

Les scripts sont écrits en Ruby. Il n'est pas nécessaire de télécharger un fichier : il suffit de copier-coller le code.

{{< figure src="/rpgmaker/scripts/installer/bouton.png" alt="Icône de l'éditeur de script" caption="L'éditeur de script peut aussi être ouvert avec F11." >}}

Sélectionnez le contenu du script et copiez-le. Retournez dans RPG Maker et ouvrez l'éditeur de script. La liste sur la gauche représente tous les scripts de votre jeu et vous pouvez constater qu'il en existe déjà beaucoup : ce sont les systèmes de base qu'il ne faut pas supprimer.

{{< figure src="/rpgmaker/scripts/installer/inserer.png" alt="Insérer un script dans RPG Maker VX Ace" caption="Création d'un emplacement dans Materials." >}}

La plupart des scripts que vous trouverez sur Internet doivent être copiés *au-dessus* du script Main mais *en-dessous* de tous les autres scripts de base. Sur RPG Maker VX Ace, une catégorie Materials est présente pour vous aider à choisir un emplacement. Cliquez-droit sur l'emplacement désiré puis choisissez Insérer. Vous pouvez alors nommer votre script comme bon vous semble et copier son contenu dans le grand champ de texte à droite.

Les écritures en vert sont des commentaires, ignorés par le programme car destinés uniquement aux humains. Les programmeurs s'en servent généralement pour expliquer le fonctionnement de leurs scripts. Lisez attentivement les commentaires si vous ne savez pas comment utiliser un script.

## Liste des scripts

Cette section recense des scripts de qualité et populaires au sein de la communauté francophone. Ils sont accompagnés d'un manuel clair et ne nécessitent pas de connaissances en programmation pour être utilisés.

<div id="scripts-flex-container">
    <section>
      <a href="{{< ref "/content/rme.md" >}}"><img src="/rpgmaker/scripts/rme.png" alt=""></a>
    </section>
    <section>
      <a href="{{< ref "fullscreen++.md" >}}"><img src="/rpgmaker/scripts/fullscreen.png" alt=""></a>
    </section>
    <section>
      <a href="{{< ref "orms.md" >}}"><img src="/rpgmaker/scripts/orms.png" alt=""></a>
    </section>
    <section>
      <a href="{{< ref "zeuslightsandshadows.md" >}}"><img src="/rpgmaker/scripts/zeuslightsandshadows.png" alt=""></a>
    </section>
    <section>
      <a href="{{< ref "mapeffects.md" >}}"><img src="/rpgmaker/scripts/mapeffects.png" alt=""></a>
    </section>
    <section>
      <a href="{{< ref "amsultimate.md" >}}"><img src="/rpgmaker/scripts/amsultimate.png" alt=""></a>
    </section>
    <section>
      <a href="{{< ref "scrollpictures.md" >}}"><img src="/rpgmaker/scripts/scrollpictures.png" alt=""></a>
    </section>
</div>

## Catalogue des appels de script

Les morceaux de code de ce catalogue s'utilisent en les écrivant dans un [appel de script]({{< ref "rpgmaker/vue-d-ensemble.md#appel-de-script" >}}). La plupart d'entre eux sont des équivalents des commandes normales de RPG Maker. Utiliser des appels de script plutôt que les boutons traditionnels nous permet d'entièrement personnaliser la commande en définissant tous les arguments par une variable.

### RPG Maker MV


#### Conditions

```js
if (condition) {
  // commandes
} else {
  // commandes
}
```

#### Boucles

{{< figure src="https://i.imgur.com/A5r4zWE.png" alt="Boucle simple" caption="Boucle simple et infinie." >}}

Une boucle dans RPG Maker se joue en boucle indéfiniment, à moins d'utiliser une commande pour en sortir. La boucle seule peut se traduire ainsi :

```js
while(true) {
  // commandes
}
```

En évènement, nous devons créer une condition et sortir de la boucle si elle est validée. Voici un exemple de boucle où un nombre est incrémenté de 0 à 9 avant de sortir de la boucle.

```js
var i = 0;
while(true) {
  if (i > 9) {
    break;
  }
  // commandes
  i++;
}
```

Pour plus d'élégance, nous pouvons insérer le contenu de la condition directement dans `while()`. Plus besoin de `break;` pour sortir de la boucle, car la condition dans `while()` est vérifiée à chaque tour.

```js
var i = 0;
while (i < 10) {
  // commandes
  i++;
}
```

Cependant, le meilleur moyen de réaliser une boucle de ce type reste d'utiliser une boucle for. Plus besoin de gérer la variable `i` en dehors de la boucle !

```js
for(var i = 0; i < 10; i++) {
  // commandes
}
```

#### Arrêter l'exécution des évènements

```js
$gameInterpreter._index = $gameInterpreter._list.length;
```

#### Appeler un évènement

```js
$gameMap.event(EventID, EventPage).start();
```

`EventPage` peut être omis s'il n'est pas nécessaire d'appeler une page spécifique.

#### Vérifier l'existence de sauvegardes

```js
DataManager.isAnySavefileExists()
```

#### Effacer une sauvegarde

```js
StorageManager.remove(index);
```

#### Quitter le jeu

```js
SceneManager.exit();
```

### RPG Maker VX Ace

Dans cette liste, nous partons du principe que le script [RME]({{< ref "/content/rme.md" >}}) est installé. Il permet de raccourcir certaines commandes, ce qui les rend plus claires et faciles à utiliser.

Les appels de script sont listés dans un ordre rappelant celui de la fenêtre des commandes de RPG Maker.

#### Afficher un message

Documentation de [message()](http://rmex.github.io/RMEDoc/#message).

#### Afficher un choix

Documentation de [choice()](http://rmex.github.io/RMEDoc/#choice).

#### Demander un nombre

[textfield_int_show()](http://rmex.github.io/RMEDoc/#textfield_int_show) affiche un champ de texte à l'endroit de votre choix, permettant de saisir des nombres entiers.

#### Modifier un interrupteur

`id` est le numéro de l'interrupteur dans RPG Maker. En Ruby, `true` signifie « vrai » et `false` signifie « faux ». On choisit l'un ou l'autre pour rendre l'interrupteur égal à ON ou OFF.

```ruby
S[id] = true
```

#### Modifier un interrupteur local

Les interrupteurs locaux fonctionnent comme les interrupteurs globaux, si ce n'est qu'ils sont référencés par trois ID : une carte, un évènement et un numéro de variable.

```ruby
SS[map, event, id] = true
```

On peut omettre `map` et `event` pour indiquer « sur la carte actuelle » et « dans l'évènement actuel ». Les deux écritures suivantes sont donc possibles :

```ruby
SS[event, id] = true
SS[id] = true
```

#### Modifier une variable

`id` est le numéro de la variable dans RPG Maker. `value` est sa nouvelle valeur, qui peut être un nombre entier ou bien un autre type de valeur : texte, tableau, etc.

```ruby
V[id] = value
```

#### Modifier une variable locale

Les variables locales sont introduites par RME. Tout comme les interrupteurs locaux <appeldescriptinterrupteurlocal>, elles sont référencées par trois ID dont les deux premiers peuvent être omis selon le contexte.

```ruby
SV[map, event, id] = value
```

#### Condition

En ruby, « si » se traduit par `if` et « sinon » par `else`.

```ruby
if # élément à vérifier
  # commandes
else
  # commandes
end
```

On peut écrire « sinon, si » avec `elsif` et ainsi imbriquer des conditions facilement.

```ruby
if # élément à vérifier
  # commandes
elsif # élément à vérifier si faux
  # commandes
elsif # élément à vérifier si faux
  # commandes
else
  # commandes
end
```

#### Appeler un évènement commun

```ruby
call_common_event(id)
```

#### Attendre

```ruby
wait(frames)
```

#### Modifier l'argent

`gold` renvoie l'argent possédé.

`gain_gold(x)` fait gagner `x` pièces à l'équipe.

`lose_gold(x)` fait perdre `x` pièces à l'équipe.

`monster_give_gold(id)` renvoie l'or donné par un ennemi référencé par son `id`.

#### Téléportation

```ruby
player_teleport(map_id, x, y, direction, fondu)
```

`direction` est facultatif et vaut 2, 4, 6 ou 8.

`fade_type` est facultatif et vaut 0 par défaut pour un fondu au noir. 1 est un fondu au blanc et 2 est une transition instantanée.

#### Effets météorologiques

```ruby
$game_map.screen.change_weather(type, power, transition)
```

`type` vaut `:none`, `:rain`, `:storm`, ou `:snow`.

`power` est l'intensité de l'effet.

`transition` est une durée en frames.

Par défaut, les effets météorologiques assombrissent l'écran. Il est possible de désactiver et de réactiver cet effet.

```ruby
disable_weather_dimness
enable_weather_dimness
```

Voici un exemple dans lequel l'intensité de la pluie varie aléatoirement entre 3 et 9. `rand(7)` produit un nombre entre 0 et 6 auquel on ajoute 3.

```ruby
$game_map.screen.change_weather(:rain, 3 + rand(7), 120)
```

#### Gestion de la musique (BGM)

```ruby
bgm_play(name, volume, pitch)
```

`volume` et `pitch` sont facultatifs et valent 100 par défaut. Ces paramètres peuvent être changés plus tard avec les commandes `bgm_volume(volume)` et `bgm_pitch(pitch)`.

La musique en cours peut être mémorisée avec `save_bgm` puis être reprise avec `replay_bgm`.

La musique peut être arrêtée soudainement :

```ruby
bgm_stop
```

Ou bien s'effacer en fondu :

```ruby
bgm_fade(secondes)
```

La durée du fondu peut également être précisée en frames :

```ruby
bgm_fade(frames, true)
```

#### Gestion de l'ambiance sonore (BGS)

Les commandes sont les mêmes que précédemment en changeant simplement `bgm` par `bgs`, à l'exception des commandes `save_bgm` et `replay_bgm` qui n'ont pas d'équivalent.

Enfin, notez qu'il est possible d'arrêter en fondu le BGM et le BGS en une seule commande :

```ruby
sound_fade(secondes)
sound_fade(frames, true)
```

#### Ouvrir le menu de chargement

```ruby
call_load_screen
```

#### Retourner à l'écran titre

```ruby
call_title_screen
```

#### Quitter le jeu

```ruby
rm_kill
```

### RPG Maker XP

#### Modifier un interrupteur

`id` est le numéro de l'interrupteur dans RPG Maker. En Ruby, `true` signifie « vrai » et `false` signifie « faux ». On choisit l'un ou l'autre pour rendre l'interrupteur égal à ON ou OFF.

```ruby
$game_switches[id] = true/false
```

#### Modifier un interrupteur local

Les interrupteurs locaux fonctionnent comme les interrupteurs globaux, si ce n'est qu'ils sont référencés par trois ID : une carte, un évènement et une lettre.

```ruby
$game_self_switches = {[map, event, "letter"] => true/false}
$game_map.need_refresh = true
```

La dernière ligne permet au joueur de voir immédiatement les conséquences du changement. Si elle est omise, l'interrupteur local sera bien modifié mais il faudra quitter la carte et y revenir pour voir les conséquences. Voici un exemple d'utilisation :

```ruby
$game_self_switches = {[2, 4, "A"] => true}
$game_self_switches = {[1, 3, "B"] => false}
$game_map.need_refresh = true
```

#### Modifier une variable

`id` est le numéro de la variable dans RPG Maker. `value` est sa nouvelle valeur, qui peut être un nombre entier ou bien un autre type de valeur : texte, tableau, etc.

```ruby
$game_variables[id] = value
```
