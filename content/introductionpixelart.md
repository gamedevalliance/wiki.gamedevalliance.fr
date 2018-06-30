---
title: "Introduction au pixel art"
description: "Traduction du tutoriel So You Want To Be A Pixel Artist de Tsugomo publié en 2001"
menu:
  docs:
    name: "Introduction au pixel art"  
    parent: "graphisme"      
    weight: 1           
---

## Avant propos

Cette introduction au pixel art est la traduction française de [« So you want to be a pixel artist ? »](http://www.yarrninja.com/pixeltutorial/index.html]), un célèbre tutoriel anglais écrit par Tsugumo en 2001.

Mais pourquoi traduire un tutoriel aussi vieux ? D'une part car il s'agit d'un article purement théorique, ne parlant ni de logiciels ni de RPG Maker, mais de concepts et de techniques intemporelles qui restent encore aujourd'hui des bases solides et indispensables, et d'autre part car il s'agit d'un véritable monument historique : cet article serait le premier à utiliser le terme « pixel art », vraisemblablement inventé par Tsugumo ! 

Pour toutes ces raisons, nous sommes fier·es de vous présenter sur RMA la première traduction Française de ce tutoriel, en espérant ainsi sauvegarder encore quelques années les précieux enseignements qu'il contient.

## Le tout-puissant tile d'herbe

Hé oui, le fameux tile d'herbe... Il est souvent le premier tile réalisé car, sauf exceptions, tout le monde a besoin d'herbe dans un univers de RPG ! De plus, il s'agit d'une bonne entrée en matière et d'un bon moyen de s’échauffer, alors allons-y :
 
![](http://www.yarrninja.com/pixeltutorial/1.gif)
Les quatre méthodes principales pour faire un tile d'herbe.

Il existe d'autres méthodes mais celles-ci sont les plus populaires. Je n'ai volontairement pas mis la méthode consistant à ne faire qu'un simple carré vert : si beaucoup de développeurs s'en contentent, un carré vert ne ressemble pas à de l'herbe. Bien sûr, un joueur ou une joueuse se baladant au milieu d'arbres et de fleurs comprendra intuitivement que ce vert représente de l'herbe. Mais est-ce que cela ressemble à de l'herbe ? Objectivement non, cela ressemble à du carrelage vert, une bâche verte, de la peinture verte ou à un développeur qui a la flemme...

On retrouve le même problème sur les deux premières méthodes représentées : il s'agit objectivement d'herbe avec quelques tâches dessus. Ces méthodes ont en commun de produire des tiles ennuyeusement *plats*, contrairement à la quatrième méthode par exemple. Or l'herbe est composée de milliers de petites tiges vertes poussant aléatoirement vers le ciel... L'herbe c'est tout sauf plat, alors pourquoi les tiles le seraient ?

La quatrième méthode consiste à dessiner chaque brin d'herbe en alternant les couleurs, plus ou moins foncées. Cela peut paraître ennuyeux mais la technique est de le faire sans trop y penser, en faisant juste quelques traits au hasard de 4 pixels maximum. Vous pouvez tricher en réalisant seulement quelques brins pour les recopier partout sur le tile, puis en sélectionnant un nouveau morceau et le recopiant encore, pour donner une apparence aléatoire. J'utilise cette technique car elle permet d'avoir plus de contrôle sur l'apparence de l'herbe, tout en étant plus rapide.

La troisième méthode, consistant à pulvériser aléatoirement des pixels, peut paraître plus rapide, mais dans la pratique on obtient rarement un résultat correct du premier coup, et on finit par répéter l'opération en boucle !

La quatrième technique permet également de faire facilement des hautes herbes, en dessinant de longs brins pour donner une impression de hauteur. Enfin, petite astuce, basculer le tile à 90° donnera des herbes aplaties, écrasées par des passants par exemple, et je pense que l'idée de pouvoir changer complètement la perception d'un tile rien qu'en le retournant est à garder à l'esprit !
 
Vous pouvez utiliser la technique que vous souhaitez, et il en existe encore pleins d'autres... Mais souvenez-vous que le résultat ne doit ni paraître plat, ni être trop similaire à d'autres terrains :

![](http://www.yarrninja.com/pixeltutorial/2.gif)

Jamais, au grand jamais, vous ne devriez faire ça ! Hormis le fait que c'est vraiment moche, reprendre le même motif et varier les couleurs est trop répétitif. Imaginez-vous à l'époque où les consoles ne faisaient pas défiler les maps pixel par pixel mais tile par tile. Se déplacer dans un tel paysage se résumerait à voir les mêmes tiles changer de couleur de temps en temps ! Sans différences de texture, cela devient vite ennuyeux et les yeux ont du mal à se concentrer sur autre chose que ce pattern répété en boucle... Et comment se repérer quand toute la map se ressemble ?

## Effacer visuellement la grille

Une deuxième explication peut être avancée concernant la mocheté incroyable de cet exemple... la grille est bien trop évidente !

![](http://www.yarrninja.com/pixeltutorial/4.gif)

Beaucoup de jeux laissent voir cette grille qui crie en permanence aux joueurs et joueuses : « Tu n'es pas dans le vrai monde, tu es au milieu de tiles d'un jeu vidéo. » Même s'il est vrai que la grille est présente, nous souhaitons donner l'illusion qu'elle n'existe pas... Effacer visuellement la grille est en fait un des plus grands accomplissements que vous pouvez réaliser en temps que pixel artiste.

![](http://www.yarrninja.com/pixeltutorial/3.gif)

Alber Odyssey à gauche, Final Fantasy 3 au milieu et à droite.

Ces jeux parviennent très bien à casser la grille. Essayez de vous la représenter mentalement, de voir où les tiles commencent et se terminent... Pas facile n'est ce pas ? Bien sûr, certains endroits sont simples, comme le toit marron de la première image, le tapis de la seconde ou les grilles de la dernière... mais tout de même !

Revenons à notre carré d'herbe. Parfois, un tile qui semble parfait peut très mal rendre une fois répété sur la grille.

![](http://www.yarrninja.com/pixeltutorial/5.gif)

Sur la première image à gauche, voyez-vous ce que je voulais dire ? Le tile de la troisième méthode, aux pixels pulvérisés aléatoirement, ne brise pas du tout la grille. Vous pouvez voir très facilement où commencent et se terminent les cases... Pour vous aider à repérer ce qui ne va pas, j'ai encerclé la zone qui semble être la pire. Une grosse tâche sombre se répète et révèle la grille, donnant un aspect artificiel. En modifiant quelques pixels, j'ai obtenu l'image du centre, moins pire mais apportant un nouveau problème : une sorte de ligne horizontale qui se répète. Ce n'est pas une vraie ligne, mais plutôt l'alignement de suffisamment de pixels d'une même couleur pour que notre œil imagine automatiquement une ligne... C'est perturbant pour le regard !

Cela nous amène au dernier exemple. En ajoutant à la ligne des pixels plus sombres et en homogénéisant la répartition des teintes, j'ai réussi à obtenir une texture d'herbe beaucoup plus convaincante. A moins d'être chanceux ou d'avoir beaucoup de temps à perdre, vous ne parviendrez jamais à réellement effacer la grille. Tout l'art réside dans la capacité à trouver un juste milieu entre l'aspect aléatoire de l'herbe et l’absence de pattern révélateur. Dans la troisième image, il subsiste de subtiles lignes claires révélant la grille, que l'on pourrait tenter de corriger avec des pixels plus foncés, mais la réalité est que le résultat est déjà très bien, et beaucoup plus agréable à regarder !

Souvent les développeurs et développeuses se disent simplement « J'ai des points verts aléatoires dans mon tile, c'est donc de l'herbe et je peux en mettre partout sur ma map, passons au prochain tile maintenant ! » mais ça ne fonctionne pas visuellement... Pour savoir si un tile est bon, il faut vérifier ce à quoi il ressemblera sur une map. Il existe des outils sur beaucoup de logiciels reproduisant une texture sur une large surface, sinon vous pouvez tout simplement créer une map basique dans votre jeu pour y tester vos nouveaux tiles. 

Il n'existe malheureusement pas de meilleure technique que celle de tester votre tile et de l'améliorer jusqu'à ce que le résultat vous convienne !
  
##  L'outil du diable : le dégradé

Désolé, mais l'outil dégradé est une création de Satan. « Quoi ? Mais comment vais-je donc faire mes ombres sans lui ? L'outil dégradé est le meilleur outil de tout les temps ! » Ok, je vais préciser ma pensée. L'outil dégradé *peut* être bien utilisé... Cependant la plupart des gens ne comprennent pas à quoi il sert et l'utilisent en permanence.

![](http://www.yarrninja.com/pixeltutorial/6.gif)

Sincèrement, est ce que cela ressemble vraiment à une montagne ? Qui est faite de rochers, de pierres, de falaises... Pas vraiment, on dirait plutôt une sorte de bout de carton sur laquelle quelqu'un aurait tester un marqueur brun.

Le principal problème réside dans l'utilisation de l'outil dégradé à outrance, ce qui donne des tuyaux parfaitement ronds, des montagnes toutes brillantes, des briques complètement lisses... Or regardez autour de vous, combien d'objets sont assez lisses pour avoir un dégradé aussi régulier ? Vos murs ont probablement des petites entailles et des égratignures, la peinture de votre chaise a peut-être légèrement pelé... A moins de faire un jeu dans un univers futuriste, où les objets sont neufs, les murs n'ont jamais été touchés et les sols ont été nettoyés par des robots maniaques, vous n'avez probablement pas besoin d’utiliser l'outil dégradé. Et je vais vous le prouver avec trois exemples, en utilisant les objets que j'ai mentionnés.

![](http://www.yarrninja.com/pixeltutorial/7.gif)
Trois éléments remplis avec l'outil dégradé.

Avec un peu d'imagination on reconnaît un tuyau, une montagne et un mur de briques... Mais tous semblent faits d'un plastique brillant ! Si c'est l'effet recherché, l'outil dégradé est fait pour vous, mais s'il s'agit d'un décor avec un peu de vécu, vous préfèrerez réaliser des textures pixel par pixel :  

![](http://www.yarrninja.com/pixeltutorial/8.gif)

Le tuyau est plus intéressant à regarder : on garde l'aspect rond, en moins lisse et plus texturé. La montage quant à elle est beaucoup mieux, grâce à des effets d'ombres utilisant les mêmes couleurs que l'outil dégradé, qui retranscrivent les différents rochers et pics. Enfin, le mur de briques semble plus réaliste, taspect plus granuleux et rugueux qui correspond au matériau.

Est-ce pour cela que je déteste autant l'outil dégradé ? Eh bien pas seulement. Voyez-vous, ce ne sont pas tellement les tiles individuels qui sont ratés avec l'outil dégradé... C'est quand en les réunissant sur une map que cela devient réellement moche !

![](http://www.yarrninja.com/pixeltutorial/9.gif)
Cabane forestière avec des tiles en dégradé.

Maintenant reprenons la même map avec des textures faites à la main.

![](http://www.yarrninja.com/pixeltutorial/10.gif)

Les textures de la seconde méthode sont plus intéressantes : le bois ressemble réellement à du bois, les arbres semblent avoir des feuilles et les briques grises, aussi moches soient-elles, ressemblent vraiment à de la pierre. Bon, la map reste moche, mais on parle ici seulement de texture, pas encore de composition.

## Casser la monotonie 
  
Interro surprise ! Lequel de ces deux murs est le plus intéressant visuellement ?

![](http://www.yarrninja.com/pixeltutorial/11.gif)

Vos yeux ont dû naturellement être intéressés par le second mur et pour cause : il est *intéressant*. Il n'est pas monotone comme le premier, ce n'est pas la même brique encore et encore... Pourtant le second a été fait avec un seul tile, mais avec trois variations comportant des petits craquelures. Très peu d’efforts en somme, pour un résultat tout de suite plus agréable.

![](http://www.yarrninja.com/pixeltutorial/12.gif)
Le tile de brique et ses trois variations.

Si vous n'êtes toujours pas convaincu, imaginez être un joueur ou une joueuse, marchant à travers la map, suivant le mur d'un grand château... La map faisant quelques dizaines de tiles, vous êtes parti pour observer ce mur pendant 30 bonnes secondes... Lequel des deux murs préférez-vous avoir à regarder ?

Les variations témoignent à la fois d'un château avec du vécu et du soin apporté à vos graphismes. Souvenez-vous qu'un joueur qui s'ennuie pendant les moments moins intenses de votre jeu sera d'une humeur plus désintéressé quand il arrivera aux moments plus importants, alors gardez-le en éveil avec des décors intéressants ! Cela vous demandera quelques tiles en plus, mais votre jeu les mérite !

## Dithering et contraste 
  
Oh mon dieu qu'est-ce que c'est que cette horreur ? C'est Final Fantasy 1.

![](http://www.yarrninja.com/pixeltutorial/32.gif)

« Ce tutoriel était censé m'apprendre à faire du bon pixel art... Alors pourquoi étudier des jeux datant de la NES ? Ils utilisent seulement 16 couleurs en plus, non ? » Exactement, et c'est là que se trouve tout l'intérêt. A l'époque, les consoles n'avaient pas de palettes dépassant les 256 couleurs, on ne pouvait donc pas faire les fameux dégradés que l'on a vu plus haut... Et c'est en cela que les vieux jeux sont intéressants à étudier : ils regorgent d'astuces que d'ingénieux et d'ingénieuses graphistes ont inventé pour rendre leurs tiles lisibles malgré cette contrainte. 
  
Regardons d'un peu plus près ce Final Fantasy 1.

![](http://www.yarrninja.com/pixeltutorial/36.gif)

Le premier tile est celui du sol. Comme vous pouvez le voir, il ne parvient pas à effacer la grille, mais il faut dire que ce n'était pas une priorité à l'époque... Les développeurs et développeuses ne cherchait pas encore à rendre leurs jeux beaux mais compréhensibles. Or en voyant ce tile sur la map, vous savez qu'il s'agit d'un sol et qu'il est fait de pierres ; pourtant il n'utilise que deux couleurs !

« Mais si l'on n'a que deux couleurs, on peut uniquement faire les contours de rochers puis l'intérieur. Comment faire des effets d'ombrage ? » Bienvenue dans le monde merveilleux du dithering ! Le dithering est l'action de réaliser des patterns de pixels de différentes couleurs pour donner une nouvelle teinte... Utilisé principalement aux commencements du jeu vidéo, le dithering reste une technique très utile quand vous êtes limités en nombre de couleurs.
  
Avant de voir comment réaliser du dithering, regardons le reste des tiles de FF1. Le second tile représente des briques plus claires, et utilise une troisième couleur : le blanc. Il est beaucoup plus clair que le troisième, qui utilise les pixels noirs pour représenter plus d'ombre, et représente la lumière avec des pixels gris plutôt que des pixels blancs.

Notez comment ces briques, avec seulement 2 ou 3 couleurs, parviennent à rendre des textures et des effets de lumière plus intéressants que l'outil dégradé ! Les briques ne semblent pas lisses mais usées par le temps et rugueuses.

Passons maintenant au dithering.

![](http://www.yarrninja.com/pixeltutorial/37.gif)

Ceci est un exemple de ce qui se fait de plus simple en matière de dithering. Si vous vous éloignez un peu de votre écran, vous diriez qu'il y a 3 teintes sur cette image. Pourtant elle n'utilise que des pixels blancs et noirs, mais un pattern en damier mixant les deux couleurs donne un gris. Ce n'est pas un magnifique gris, mais c'est du gris.

En l’occurrence le tile est très grossier, mais plus la résolution est grande, plus les pixels seront petits et donc plus l'effet sera réussi. Regardons comment nous pouvons nous en servir sur nos tiles :

![](http://www.yarrninja.com/pixeltutorial/38.gif)

Nous retrouvons notre premier mur dit « briques en plastique » toujours aussi moche et brillant. Mais cette fois-ci, nous allons tenter d'adoucir le dégradé en utilisant le dithering entre chaque transition de couleurs... Ce qui nous amène au second mur, beaucoup plus agréable à regarder car il fait disparaître le dégradé grossier.

Nous pouvons faire encore mieux ! Si le dithering permet de créer de jolies ombres, il peut également nous aider à créer des textures intéressantes. Ainsi, en rajoutant deux teintes, nous parvenons à la fois à créer un aspect beaucoup plus rugueux et à camoufler encore plus le dégradé !

Pourtant les trois murs sont tous faits de quatre tiles composés de 16 pixels sur 16 pixels... Chaque brique ne fait que 7 pixels de haut ! Mais grâce au dithering, nous avons réussi à y apporter une texture et de meilleures ombres.

Jetons un œil à une image issue de Crystalis, un jeu plutôt disgracieux, mais qui illustre bien l'utilisation du dithering.

![](http://www.yarrninja.com/pixeltutorial/40.gif)

Notez comment la monotonie du sol est brisée par de la poussière, des brindilles... Dommage que le mur n'ait pas profité du même soin ; quelques fissures ou détails y auraient été bienvenus.

![](http://www.yarrninja.com/pixeltutorial/41.gif)
  
Sur les côtés de la carte, vous pouvez voir du dithering, tout d'abord allant du noir au orange, puis du orange au pêche. Sur les rochers, les transitions entre le noir et l'orange ne sont pas parfaites mais utilisent légèrement du dithering pour donner un aspect rugueux aux rochers.

Plus les rochers sont proches du sol, moins ils utilisent du pêche et plus ils semblent sombres. Ainsi, pour rendre des effets d'ombre, il leur suffit d'utiliser les trois couleurs intelligemment.

<!-- Fin de la correction par Aurélien -->

Tentons d'en apprendre un peu plus sur comment faire des ombres, j'ai réalisé rapidement un sol de cave pour l'occasion :
![](http://www.yarrninja.com/pixeltutorial/42.gif)

Je veux que cette cave semble vielle et sombre, effrayante donc... Pour l'instant ce n'est pas encore ça, c'est encore trop plat... Il y a quelques choses qui ne va pas. Mais quoi ?

La logique veut que si je prend un vert (en l’occurrence un vert aqua mais tout le monde s'en fiche) et que je le décline en trois teintes et que j'utilise la plus foncée comme fond mon sol aura l'air plus sombre. Malheuresement cela ne fonctionne pas parfaitement...

A l'époque des palettes limités, on utilisait davantage le noir. "Oui mais maintenant j'ai 1 milliards de couleurs, alors pourquoi j'utiliserais le noir ?" et bien car le noir est une couleur clé. Le noir permet de faire ressortir et d'attirer l’œil sur les couleurs qu'il entoure... Si vous n'en abusez pas, le noir peut être un super outil pour créer du volume ou pour faire ressortir des éléments.

En supprimant la teinte la plus claire et en utilisant plus que mes deux teintes de vert les plus sombres, tout en utilisant du noir comme fond, voilà ce que j'obtiens :
![](http://www.yarrninja.com/pixeltutorial/43.gif)

La nous avons un sol sombre, effrayant et avec de vrais volumes. Le noir permet réellement de séparer visuellement les rochers, d'améliorer le contraste général de la texture tout en assombrissant le tout.

Maintenant regardons pourquoi j'ai choisis de supprimer le vert clair de mon sol :
![](http://www.yarrninja.com/pixeltutorial/44.gif)

Bienvenu dans le monde merveilleux du contraste, amusez vous bien !   

Dans la première version nous avons le fameux "Je n'ai pas lu ce tutoriel, je suis la logique évidente selon laquelle 3 teintes de vert et un fond noir rendront forcément bien". Le problème de cette logique c'est qu'elle ne prend pas en compte que nous parlons d'un sol, à savoir quelques choses qui ne doit pas attirer l'oeil autant qu'un mur ou qu'un personnage.  En utilisant des teintes allant du vert clair au noir, la première créé un contraste élevé que nous ne retrouvons pas dans la seconde version qui n'utilisent que 3 teintes.
 
"Arrrg... Y a du vert partout... Et... Est-ce un personnage au millieu de ces rochers ?" Si votre joueur ou votre joueuse pense ça vous avez échoué. Un joueur ne devrait pas avoir à penser au sol, et encore moins à chercher son personnage au millieu de celui-ci. Et c'est le principal problème d'utiliser des hauts contrastes, le tile peut être joli et avoir du volume, mais il ne fonctionnera pas comme sol dans un jeu vidéo.

Sur la seconde version le vert médian n'est qu'à peine plus clair que le noir constituant le fond. Le résultat est bien plus simple à comprendre pour l'oeil ! Vous pouvez repérer facilement le personnage et vous pouvez toujours comprendre que le sol est un sol rocailleux avec du volume.

L'idée à garder en tête est que le joueur ou la joueuse ne devrait jamais avoir à plisser les yeux... Si un joueur arrivant sur une carte à besoin de plisser les yeux pour comprendre où se trouve son personnage, il ne sera plus impliqué dans le jeu et vous aurez détruit l'effet que vous veniez de créer avec une super histoire et des tiles effaçant la grille.

Quand on fait du pixel art l'important est de voir le résultat, de voir ce que le tile donne réellement. Et non d'écouter sa logique et de réfléchir à quoi le tile *devrait* ressembler dans la réalité... Car souvent ça ne marche juste pas.

 Mais continuons notre analyse avec quelques choses d'encore plus basique que la NES :
![](http://www.yarrninja.com/pixeltutorial/33.gif)
La gameboy. Une merveilleuse console limitant la palette de couleur à 4 nuances de gris, ça c'est de la restriction !  

J'ai un immense respect pour les artistes qui ont travaillés sur ces consoles... Regardez ce screen : on reconnaît parfaitement des remparts, de l'herbe au centre, et puis le monstre tigre et le personnage se détache bien des décors, on peut même voir que notre personnage porte une armure et un bouclier, l'herbe est également très mieux que des petits points sur un carré blannc grâce à des traits de tailles variés... Le tout fait avec seulement quatre nuances de gris (Noir, gris foncé, gris clair, blanc) et avec un minimum de pixel !

Bon bien sûr les tiles manquent de texture, la château semble comme neuf et on regrettera le manque de variation ou de fissures sur les murs... mais ne soyez pas si difficile.

Ce qui nous intéresse niveau contraste, c'est de voir que malgré le peu de couleur, les graphistes ont veillé à ce que les personnages ce détachent du reste du décors. Les tiles autour de la scène sont très clairs et contrastés alors que les personnages sont plus sombres et moins contrastés.
![](http://www.yarrninja.com/pixeltutorial/34.gif)

Une autre scène incroyable issus de la Gameboy, pour peu que l'on se rappelle à nouveau qu'elle n'est constitué que des 4 couleurs.
 
Il manque à la rigueur une animation en bas de la cascade pour simuler l'écume qu'une chute d'eau produit... mais tout de même : On retrouve une belle gestion des ombres à l'arrières de la cascade, la chute d'eau présente une superbe utilisation du dithering, les abres sont très jolis...

Niveau contraste on remarquera que les pixels noirs ne sont quasiment jamais utilisés ormis pour les ombres fortes et les contours des personnages. En résulte une scène très clair où les contours de la zone jouable et les personnages se repère très facilement.
