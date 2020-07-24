# Dragon Slayer - Enoncé

Il faut tuer le dragon ou se faire tuer !

L'utilisateur saisit le niveau de difficulté, l'arme et l'armure 
puis le combat à mort commence...

Le vainqueur voit sa photo s'afficher en HTML :-)

## Détails

-   Ce programme est un récapitulatif général de ce qui a été vu jusqu'à présent.
-   Tout le jeu va se dérouler dans la console du navigateur web.
-   Il est important d'organiser le code en petites fonctions afin de mieux 
    comprendre le déroulement du jeu.

## Règles de gestion

Propriétés de l'objet game à initialiser :

-   round (valeur de départ : 0)
-   nom du chevalier (via prompt)
-   nom du dragon (via prompt)
-   niveau de difficulté (via prompt - forcer une valeur comprise entre 1 et 3)

-   points de vie de départ du chevalier
-   points de vie de départ du dragon

## Modalités

| NIVEAU    |
| --------- |
| 1 - 2 - 3 |

**DRAGON**
| Lvl | Lvl.1 | Lvl.2 | Lvl.3 |
| --- | ------- | ------- | ------- |
| Pdv | 150-200 | 200-250 | 200-250 |
| Dmg | 25-30 | 15-20 | 5-10 |

**CHEVALIER**
| Lvl | Lvl.1 | Lvl.2 | Lvl.3 |
| --- | ----- | ------- | ------ |
| Pdv |200-250|200-250|150-200|
| Dmg | 10-20 | 30-40 | 30-40 |

---

### Options (V2)

> Type d'épée (via prompt - forcer une valeur comprise entre 1 et 3)

_Ratio épée (dépend du type d'épée choisi, influencera les dommages portés au dragon)_
| 1 | 2 | 3 |
| ------ | ---- | --------- |
| Mousse | Bois | Excalibur |
| 0.5 | 1 | 2 |

> Type d'armure (via prompt - forcer une valeur comprise entre 1 et 3)

_Ratio armure (dépend du type d'armure choisi, influencera les dommages portés au chevalier)_
| 1 | 2 | 3 |
| ------ | ----- | ------- |
| Carton | Acier | Magique |
| 1 | 1.25 | 2 |

**Aides calcul**

_Pour obtenir le dommage final_

-   si le chevalier attaque le dragon, dommage final = dommage de base x ratio épée
-   si le dragon attaque le chevalier, dommage final = dommage de base / ratio armure

## Logique (algo) exécuté à chaque combat

**Etape 1** : _définir quel personnage attaque l'autre_

Définir pour chaque personnage une vitesse de frappe (aléatoire compris entre 0 et 10).
Le personnage le plus rapide (la plus grande vitesse) frappe l'autre.
(si égalité, le chevalier a l'avantage)

**Etape 2** : _définir les dommages causés_

On commence par définir un "dommage de base" qui est un aléatoire dont les bornes 
min et max dépendent du niveau et du personnage qui attaque l'autre
