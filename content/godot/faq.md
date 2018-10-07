Cet article est la traduction de la foire aux questions officielle de Godot. Il permet de faire le tour du propriétaire et de comprendre ce qu'est Godot, qu'est ce qui est possible de faire avec ou non et comment l'utiliser.

## Que puis-je faire avec Godot ? Combien coûte-t-il ? Quels sont les termes de la licence ?

Godot est un [logiciel libre et à code source ouvert (open source)](https://fr.wikipedia.org/wiki/Free/Libre_Open_Source_Software) disponible sous licence [MIT, approuvée par l’OSI](https://opensource.org/licenses/MIT). Cela veut dire qu’il est à la fois libre et gratuit.

En bref :

- Vous pouvez télécharger et utiliser Godot pour tout usage, qu’il soit personnel, libre, commercial ou autre;
- Vous pouvez modifier, distribuer, redistribuer, et remixer Godot comme bon vous semble, pour n'importe quelle raison, que ce soit de manière personel, libre, commercial ou autre.

Tout le contenu de cette présente documentation est publiée sous la licence Creative Commons Attribution 3.0 ([CC-BY 3.0](https://creativecommons.org/licenses/by/3.0/)) , au nom de « Juan Linietsky, Ariel Manzur and the Godot Engine community. »

Les logos et icônes sont généralement sous la même licence Creative  Commons. Notez que certaines bibliothèques de tiers incluses avec le  code source de Godot peuvent avoir des licences différentes.

Pour tous les détails, voir [COPYRIGHT.txt](https://github.com/godotengine/godot/blob/master/COPYRIGHT.txt) ainsi que [LICENSE.txt](https://github.com/godotengine/godot/blob/master/LICENSE.txt) et [LOGO_LICENSE.txt](https://github.com/godotengine/godot/blob/master/LOGO_LICENSE.md) qui se trouvent dans le dépôt de Godot.

Voyez aussi [la page de la licence sur le site de Godot](https://godotengine.org/license).

## Quelles plateformes sont supportées par Godot ?

**Pour l’éditeur:**

- Windows
- Mac OS X
- X11 (Linux, *BSD)

**Pour exporter vos jeux:**

- Windows (et UWP)
- Mac OS X
- X11 (Linux, *BSD)
- Android
- iOS
- Web

Les formats binaires 32 et 64 bits sont supportés quand appropriés. Le format 64 bits est utilisé par défaut.

Certains utilisateurs ont aussi reporté avoir compilé et utilisé  Godot avec succès sur des systèmes basés sur l’architecture ARM avec  Linux, tels que le Raspberry Pi.

De plus, certaines personnes travaillent pour permettre à Godot de  fonctionner sur certaines consoles. Cependant, aucun ajout de ce type  n’est pour l’instant inclus dans les scripts de compilation ou modèles  d’exportation par défaut.

Pour plus d’informations à ce sujet, voir les sections sur [l’export de projet](http://docs.godotengine.org/fr/latest/getting_started/workflow/export/index.html#toc-learn-workflow-export) et la [compilation de Godot](http://docs.godotengine.org/fr/latest/development/compiling/index.html#toc-devel-compiling) par vous-même.

## Quels langages de programmation sont supportés par Godot ?

Le langage officiel de Godot est le GDScript, le Visual Scripting, C# et le C++. 

Si vous débutez avec Godot ou avec la programmation de jeux vidéo, GDScript est le langage recommandé puisqu’il est natif dans Godot. Bien que les langages de script soient moins performants que ceux bas-niveau à terme, GDScript est un moyen rapide, facile d’utilisation et puissant pour le développement de jeux vidéo, notamment pour obtenir un prototype viable, et réduire les temps de développement.

Notez que le support du C# est relativement nouveau dont vous pourriez rencontrer quelques problèmes durant le dévellopement de votre jeu. Heuresement la comnunauté de Godot travaille d'arrache pied pour corriger chaque nouveau problème signalé, mais comme il s'agit d'un projet open-source nous vous recommandons de d'abord tenter de corriger les bugs vous même. Commencez par chercher dans les [open issues](https://github.com/godotengine/godot/issues) si d'autres personnes ont recontrés le même problème que vous.

As for new languages, support is possible via third parties using the GDNative / NativeScript / PluginScript facilities. (See question about plugins below.) Work is currently underway, for example, on unofficial bindings for Godot to [Python](https://github.com/touilleMan/godot-python) and [Nim](https://github.com/pragmagic/godot-nim).

## Qu’est-ce que le GDScript et pourquoi devrais-je l’utiliser ?

GDScript is Godot’s integrated scripting language. It was built from the ground up to maximize Godot’s potential in the least amount of code, affording both novice and expert developers alike to capitalize on Godot’s strengths as fast as possible. If you’ve ever written anything in a language like Python before then you’ll feel right at home. For examples, history, and a complete overview of the power GDScript offers you, check out the [GDScript scripting guide](http://docs.godotengine.org/fr/latest/about/gdscript_basics).

There are several reasons to use GDScript–especially when you are prototyping, in alpha/beta stages of your project, or are not creating the next AAA title–but the most salient reason is the overall **reduction of complexity.**

The original intent of creating a tightly integrated, custom scripting language for Godot was two-fold: first, it reduces the amount of time necessary to get up and running with Godot, giving developers a rapid way of exposing themselves to the engine with a focus on productivity; second, it reduces the overall burden of maintenance, attenuates the dimensionality of issues, and allows the developers of the engine to focus on squashing bugs and improving features related to the engine core–rather than spending a lot of time trying to get a small set of incremental features working across a large set of languages.

Since Godot is an open-source project, it was imperative from the start to prioritize a more integrated and seamless experience over attracting additional users by supporting more familiar programming languages–especially when supporting those more familiar languages would result in a worse experience. We understand if you would rather use another language in Godot (see list of supported options above). That being said, if you haven’t given GDScript a try, try it for **three days**. Just like Godot, once you see how powerful it is and rapid your development becomes, we think GDScript will grow on you.

Vous trouverez plus d’informations sur la façon de se familiariser  avec GDScript ou les langages à typage dynamique dans le tutoriel [GDScript : Une introduction aux langages dynamiques](http://docs.godotengine.org/fr/latest/getting_started/scripting/gdscript/gdscript_advanced.html#doc-gdscript-more-efficiently).

## Qu’est-ce qui a motivé la création de GDScript ?

Les principales raisons de la création d’un langage de script personnalisé pour Godot étaient :

1. Pas de bon support des threads dans la plupart des VMs de scripts,  et Godot utilise des threads (Lua, Python, Squirrel, JS, AS, etc.).
2. Poor class-extending support in most script VMs, and adapting to the way Godot works is highly inefficient (Lua, Python, JS).
3. Many existing languages have horrible interfaces for binding to C++, resulting in large amount of code, bugs, bottlenecks, and general inefficiency (Lua, Python, Squirrel, JS, etc.) We wanted to focus on a great engine, not a great amount of integrations.
4. Pas de types vectoriels natifs (vector3, matrix4, etc.), ce qui  réduit considérablement les performances lors de l’utilisation de types  personnalisés (Lua, Python, Squirrel, JS, AS, etc.).
5. Le ramasse-miette entraîne des délais ou une utilisation inutilement importante de la mémoire (Lua, Python, JS, AS, etc.).
6. Difficulté d’intégration avec l’éditeur de code pour compléter le  code, éditer en direct, etc. Ceci est très bien supporté par le  GDScript.

GDScript a été conçu pour réduire les problèmes ci-dessus et plus encore.

## Quels types de formats de modèles 3D sont pris en charge par Godot ?

Godot supporte Collada via l’exporteur [OpenCollada](https://github.com/KhronosGroup/OpenCOLLADA/wiki/OpenCOLLADA-Tools) (Maya, 3DSMax).

Si vous utilisez Blender, jetez un coup d’œil à notre propre [Better Collada Exporter](https://godotengine.org/download).

À partir de Godot 3.0, glTF est pris en charge.

FBX SDK has a [restrictive license](https://www.blender.org/bf/Autodesk_FBX_License.rtf), that is incompatible with the [open license](https://opensource.org/licenses/MIT) provided by Godot. That being said, FBX support could still be provided by third parties as a plugin. (See Plugins question above.)

## Est-ce que [Insérer un SDK fermé tel que PhysX, GameWorks, etc.] sera un jour, supporté dans Godot ?

The aim of Godot is to create a free and open-source MIT-licensed engine that is modular and extendable. There are no plans for the core engine development community to support any third-party, closed-source/proprietary SDKs, as integrating with these would go against Godot’s ethos.

That said, because Godot is open-source and modular, nothing prevents you or anyone else interested in adding those libraries as a module and shipping your game with them–as either open- or closed-source.

Pour voir comment la prise en charge de votre kit de développement de  choix pourrait encore être fournis, regardez la question des plugins  ci-dessus.

If you know of a third-party SDK that is not supported by Godot but that offers free and open-source integration, consider starting the integration work yourself. Godot is not owned by one person; it belongs to the community, and it grows along with ambitious community contributors like you.

## Comment créer des ressources pour gérer plusieurs résolutions et rapports d’aspect ?

Cette question revient souvent et c’est probablement à cause du  malentendu créé par Apple lorsqu’ils ont doublé la résolution de leurs  appareils. Cela a fait croire aux gens que le fait d’avoir les mêmes  ressources dans des résolutions différentes était une bonne idée, et  beaucoup ont continué dans cette voie. À l’origine, cela fonctionnait et  seulement pour les appareils Apple, mais ensuite plusieurs appareils  Android et Apple avec des résolutions et des rapports d’aspect  différents ont été créés, avec une très large gamme de tailles et de  DPIs.

The most common and proper way to achieve this is to, instead, use a single base resolution for the game and only handle different screen aspect ratios. This is mostly needed for 2D, as in 3D it’s just a matter of Camera XFov or YFov.

1. Choisissez une seule résolution de base pour votre jeu. Même s’il y a  des appareils qui vont jusqu’à 2K et des appareils qui descendent  jusqu’à 400p, la mise à l’échelle matérielle habituelle de votre  appareil s’en chargera avec un coût négligeable sur les performances.  Les choix les plus courants sont proches de 1080p (1920x1080) ou de 720p  (1280x720). Gardez à l’esprit que plus la résolution est élevée, plus  vos ressources seront volumineuses, plus elles prendront de mémoire et  plus le temps de chargement sera long.
2. Utilisez les options d’étirement dans Godot, l’étirement 2D avec  maintien de l’aspect fonctionne le mieux. Consultez le tutoriel [Multiple resolutions](http://docs.godotengine.org/fr/latest/tutorials/viewports/multiple_resolutions.html#doc-multiple-resolutions) sur la façon d’y parvenir.
3. Déterminez une résolution minimale et décidez ensuite si vous  souhaitez que votre jeu s’étire verticalement ou horizontalement pour  différents rapports d’aspect, ou s’il y a une résolution minimale et que  vous souhaitez que des barres noires apparaissent à la place. Ceci est  également expliqué dans l’étape précédente.
4. Pour les interfaces utilisateur, utilisez l”ancrage  pour déterminer où les contrôles doivent rester et se déplacer. Si l’UI  est plus complexe, songez à vous renseigner sur les conteneurs.

Et c’est tout ! Votre jeu devrait fonctionner en plusieurs résolutions.

Si vous souhaitez également faire fonctionner votre jeu sur des  appareils anciens avec de petits écrans (moins de 300 pixels de  largeur), vous pouvez utiliser l’option d’exportation pour réduire les  images, et définir l’utilisation de ce build pour certaines tailles  d’écran dans l’App Store ou Google Play.

## How can I extend Godot?

For extending Godot, like creating Godot Editor plugins or adding support for additional languages, take a look at [EditorPlugins](http://docs.godotengine.org/fr/latest/tutorials/plugins/editor/making_plugins.html#doc-making-plugins) and tool scripts.

Voir aussi les posts du blog officiel sur ces sujets :

- [A look at the GDNative architecture](https://godotengine.org/article/look-gdnative-architecture)
- [GDNative is here!](https://godotengine.org/article/dlscript-here)

You can also take a look at the GDScript implementation, the Godot modules, as well as the [unofficial Python support](https://github.com/touilleMan/godot-python) for Godot. This would be a good starting point to see how another third-party library integrates with Godot.

## I would like to contribute! How can I get started?

Awesome! As an open-source project, Godot thrives off of the innovation and ambition of developers like you.

The first place to get started is in the [issues](https://github.com/godotengine/godot/issues). Find an issue that resonates with you, then proceed to the [How to Contribute](https://github.com/godotengine/godot/blob/master/CONTRIBUTING.md#contributing-pull-requests) guide to learn how to fork, modify, and submit a Pull Request (PR) with your changes.

## J’ai une super idée pour Godot. Comment puis-je la partager ?

It might be tempting to want to bring ideas to Godot, like ones that result in massive core changes, some sort of mimicry of what another game engine does, or alternative workflows that you’d like built into the editor. These are great and we are thankful to have such motivated people want to contribute, but Godot’s focus is and always will be the core functionality as outlined in the [Roadmap](https://github.com/godotengine/godot-roadmap/blob/master/ROADMAP.md), [squashing bugs and addressing issues](https://github.com/godotengine/godot/issues), and conversations between Godot community members.

Most developers in the Godot community will be more interested to learn about things like:

- Votre expérience lors de l’utilisation du logiciel et les problèmes  que vous rencontrez (nous nous soucions de cela bien plus que des idées  sur la façon de l’améliorer).
- Les fonctionnalités que vous aimeriez voir mises en œuvre parce que vous en avez besoin pour votre projet.
- The concepts that were difficult to understand while learning the software.
- Les parties de votre flux de travail que vous aimeriez voir optimisées.
- Parts where you missed clear tutorials or where the documentation wasn’t clear.

Please don’t feel like your ideas for Godot are unwelcome. Instead, try to reformulate them as a problem first, so developers and the community have a functional foundation to ground your ideas on.

A good way to approach sharing your ideas and problems with the community is as a set of user stories. Explain what you are trying to do, what behavior you expect to happen, and then what behavior actually happened. Framing problems and ideas this way will help the whole community stay focused on improving developer experiences as a whole.

Bonus points for bringing screenshots, concrete numbers, test cases, or example projects (if applicable).

## Comment puis-je soutenir le développement de Godot ou y contribuer ?

Voir [Ways to contribute](http://docs.godotengine.org/fr/latest/community/contributing/ways_to_contribute.html#doc-ways-to-contribute).

## Qui travaille sur Godot ? Comment puis-je vous contacter ?

Voir la page correspondante sur le [site web de Godot](https://godotengine.org/contact).