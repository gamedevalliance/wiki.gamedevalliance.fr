---
title: "Le tout-puissant tile d'herbe"
description: "Dessinez les décors de votre jeu vidéo, en commençant par un premier tile d'herbe, jusqu'à vous familiariser avec les textures, l'ombrage et le dithering."
portail: graphisme
onthispage: false
menu:
  graphisme:
    parent: cours
    weight: 2
---

Hé oui, le fameux tile d'herbe... Il est souvent le premier tile réalisé car, sauf exceptions, tout le monde a besoin d'herbe dans un univers de RPG ! De plus, il s'agit d'une bonne entrée en matière et d'un bon moyen de s’échauffer, alors allons-y. Voyons différentes manières de dessiner de l'herbe.

{{< figure src="/images/pixelart/bases/herbe1.png" caption="Un simple carré vert avec des points plus clairs." >}}
<p>
{{< figure src="/images/pixelart/bases/herbe2.png" caption="Le même carré avec des lignes plus larges et quelques-unes plus sombres pour la profondeur." >}}
<p>
{{< figure src="/images/pixelart/bases/herbe3.png" caption="Trois teintes pulvérisées alétoirement, puis une sélection 16×16." >}}
<p>
{{< figure src="/images/pixelart/bases/herbe4.png" caption="Accumulation de brins avec les trois teintes pour obtenir un effet de direction." >}}

Il existe d'autres méthodes mais celles-ci sont les plus populaires. Je n'ai volontairement pas mis la méthode consistant à ne faire qu'un simple carré vert : si beaucoup de développeurs s'en contentent, un carré vert ne ressemble pas à de l'herbe. Bien sûr, un joueur ou une joueuse se baladant au milieu d'arbres et de fleurs comprendra intuitivement que ce vert représente de l'herbe. Mais est-ce que cela ressemble à de l'herbe ? Objectivement non, cela ressemble à du carrelage vert, une bâche verte, de la peinture verte ou à un développeur qui a la flemme...

On retrouve le même problème sur les deux premières méthodes représentées : il s'agit objectivement d'herbe avec quelques tâches dessus. Ces méthodes ont en commun de produire des tiles ennuyeusement *plats*, contrairement à la quatrième méthode par exemple. Or l'herbe est composée de milliers de petites tiges vertes poussant aléatoirement vers le ciel... L'herbe c'est tout sauf plat, alors pourquoi les tiles le seraient ?

La quatrième méthode consiste à dessiner chaque brin d'herbe en alternant les couleurs, plus ou moins foncées. Cela peut paraître ennuyeux mais la technique est de le faire sans trop y penser, en faisant juste quelques traits au hasard de 4 pixels maximum. Vous pouvez tricher en réalisant seulement quelques brins pour les recopier partout sur le tile, puis en sélectionnant un nouveau morceau et le recopiant encore, pour donner une apparence aléatoire. J'utilise cette technique car elle permet d'avoir plus de contrôle sur l'apparence de l'herbe, tout en étant plus rapide.

La troisième méthode, consistant à pulvériser aléatoirement des pixels, peut paraître plus rapide, mais dans la pratique on obtient rarement un résultat correct du premier coup, et on finit par répéter l'opération en boucle !

La quatrième technique permet également de faire facilement des hautes herbes, en dessinant de longs brins pour donner une impression de hauteur. Enfin, petite astuce, basculer le tile à 90° donnera des herbes aplaties, écrasées par des passants par exemple, et je pense que l'idée de pouvoir changer complètement la perception d'un tile rien qu'en le retournant est à garder à l'esprit !

Vous pouvez utiliser la technique que vous souhaitez, et il en existe encore pleins d'autres... Mais souvenez-vous que le résultat ne doit ni paraître plat, ni être trop similaire à d'autres terrains :

{{< figure src="/images/pixelart/bases/herbe2.png" caption="Ok, j'ai mon tile d'herbe…" >}}
<p>
{{< figure src="/images/pixelart/bases/terre.png" caption="Et maintenant c'est un tile de terre !" >}}
<p>
{{< figure src="/images/pixelart/bases/eau.png" caption="Et de l'eau ! Ha ha ha !" >}}
<p>
{{< figure src="/images/pixelart/bases/sable.png" caption="Et voilà le désert ! Je suis un GÉNIE !" >}}

![](/images/pixelart/bases/mauvaiseidee.png)

Jamais, au grand jamais, vous ne devriez faire ça ! Hormis le fait que c'est vraiment moche, reprendre le même motif et varier les couleurs est trop répétitif. Imaginez-vous à l'époque où les consoles ne faisaient pas défiler les maps pixel par pixel mais tile par tile. Se déplacer dans un tel paysage se résumerait à voir les mêmes tiles changer de couleur de temps en temps ! Sans différences de texture, cela devient vite ennuyeux et les yeux ont du mal à se concentrer sur autre chose que ce pattern répété en boucle... Et comment se repérer quand toute la map se ressemble ?

{{< next "graphisme/devenir-pixel-artiste/effacer-la-grille.md" >}}