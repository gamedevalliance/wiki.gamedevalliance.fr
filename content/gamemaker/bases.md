# Les bases du GML
Le GML est le langage utilisé dans Game Maker Studio 2. Il est requis de comprendre ce langage pour pouvoir créer son jeu avec le mode GML du logiciel.

## Ecrire du GML dans Game Maker 
Il y a 2 endroits ou vous pouvez écrire du **GML** dans **Game Maker**, qui sont :
 -  Les **scripts**, qui sont en quelque sorte des événements *Etape*, mais qui peuvent être appelés quand on le souhaite. 
 - Les **événements**, qui sont le moyen courant de définir les caractéristiques des objets, vous pouvez aller voir les différents types d'évènements [ici](#).

Pour déclarer une commande, en GML vous devez écrire votre commande et ajouter un point virgule à la fin de la ligne comme ceci :

    déclaration;
    déclaration;
   
   Pour écrire un commentaire (une ligne qui ne sera pas lue par le logiciel), vous pouvez mettre 2 slashs au début de la ligne comme ceci :
   

    //Ceci est un commentaire
    //Ceci est un deuxième commentaire

## Les opérateurs
Les **opérateurs** sont les signes permettant de modifier des valeurs, les voici :

 - **=**, assigner une valeur
 - **+**, ajouter une valeur (*utiliser **+=** pour ajouter la valeur à la variable*)
 - **-**, soustraire une valeur (*utiliser **-=** pour soustraire la valeur à la variable*)
 - **\***, multiplier une valeur (*utiliser **\***= pour multiplier la valeur à la variable*)
 - **div**, diviser une valeur
 - **mod**, récupérer le modulo d'une valeur (le reste d'une division)
 - **%**, récuperer le pourcentage d'une valeur

## Les conditions
Les **conditions** permettent de ne réaliser une action que si une donnée est vérifiée.
On utilise le ``if``pour en créer une, on met la condition entre parenthèses et l'action entre crochets, comme ceci :
```javascript
if (ma_Condition) {
	mon_action
}
```
 pour faire un *sinon*, vous pouvez utiliser le ``else``, et pour faire un *sinon si*, vous pouvez utilser un ``else if``.
 Voici un exemple :
 ```javascript
 if (age < 18) {
	acces = false;
else {
	acces = true;
}
 ```
 
 ## Les tableaux
 Un **tableau** est un ensemble indexé de données. Les tableaux sont utilisés pour groupe et l'index une série de valeurs .
 Pour créer un tableau et le stocker dans la variable monTableau vous pouvez faire comme ceci :

    monTableau = array_create(Taille);

   Remplacez Taille par un nombre entier signifiant le nombre de données que contient le tableau.
   Pour modifier une donnée, vous pouvez modifier la variable en indiquant entre crochets l'index de la données, en commençant à partir de 0.
   Par exemple si je veux créer un tableau de 3 données, et les donner une valeur à chacune je peux faire ceci :
   
 ```javascript
Coordonnees = array_create(3);
Coordonnees[0] = "Bernard";
Coordonnees[1] = "3 rue du Boulevard";
Coordonnees[2] = 19;
```

Pour donner un nom à nos indexs, on a qu'à remplacer l'index par des mots, reprenons le même exemple :

 ```javascript
Coordonnees = array_create(3);
Coordonnees[prenom] = "Bernard";
Coordonnees[adresse] = "3 rue du Boulevard";
Coordonnees[age] = 19;
```

## Les fonctions
Une **fonction** désigne en programmation un « sous-programme » permettant d'effectuer des opérations répétitives. Au lieu d'écrire le code complet autant de fois que nécessaire, on crée une fonction que l’on appellera pour l'exécuter, ce qui peut aussi alléger le code, le rendre plus lisible.

 Dans Game Maker Studio, beaucoup sont déjà crées pour permettre d'avoir un plus grand contrôle sur le jeu, elles sont toutes définies dans la [documentation](https://docs2.yoyogames.com).

Pour appeller une fonction, comme dans beaucoup dans langages la syntaxe à adapter est la suivante :
```javascript
ma_fonction();
ma_deuxieme_fonction(1, 2);
```
