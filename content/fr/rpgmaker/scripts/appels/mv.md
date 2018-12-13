---
title: "Appels de script pour RPG Maker MV"
description: "Découvrez notre liste de commandes de scripts pour personnaliser votre jeu RPG Maker MV. Ajoutez de nouvelles commandes puissantes à vos évènements."
tocmaxdepth: 1
portail: rpgmaker
---

Les commandes d'évènement de RPG Maker MV sont désormais réplicables avec [πco]({{< ref "pico.md" >}}) en installant le plugin `pico-mv.js`. Cette méthode étant beaucoup plus simple et sûre, notre liste n'a plus lieu d'être. Nous vous invitons à consulter la [liste des commandes](https://grrim.github.io/picocorico/doc.html#/) de πco pour trouver ce que vous recherchez.

N'oubliez pas : si le caractère `π` est trop ennuyeux à écrire sur votre clavier, vous pouvez utiliser `Pico` à la place de `π`.

## Interrupteurs et variables

Pour des renseignements sur l'utilisation des interrupteurs et variables, consultez [les explications]({{< ref "pico.md#raccourcis-syntaxiques" >}}) de `pico-core.js`.

## Conditions

```js
if (condition) {
  // commandes
} else {
  // commandes
}
```

## Boucles

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

## Quelques autres commandes

### Arrêter l'exécution des évènements

```js
$gameInterpreter._index = $gameInterpreter._list.length;
```

### Appeler un évènement

```js
$gameMap.event(EventID, EventPage).start();
```

`EventPage` peut être omis s'il n'est pas nécessaire d'appeler une page spécifique.

### Vérifier l'existence de sauvegardes

```js
DataManager.isAnySavefileExists()
```

### Effacer une sauvegarde

```js
StorageManager.remove(index);
```

### Quitter le jeu

```js
SceneManager.exit();
```
