<h1>Module 323 - E1 - Programmer de manière fonctionnelle</h1>

**Durée :** 3h

# Introduction

<img src="res/Mobilus.png" style="height:128;float:left; border:1px solid black; margin-right:1em;">

**La société de location de véhicules `Mobilus` vous mandate.**

Elle vous mets à disposition toutes les données des locations de véhicules réalisées en 2024. Ces données émanent d'une base MongoDB (ce qui explique la très agréable répétition de certains champs).

Comme à l'accoutumée, vous recevez et disposez des données directement dans le fichier [e1-data.js](/src/e1-data.js).

La mission est de les aider pour la réalisation d'une page web dynamique sur le futur site de `Mobilus` dans laquelle des informations devront être affichées, mais ils ne savent pas comment faire. Ils comptent sur vous pour définir les requêtes fonctionnelles nécessaires afin de répondre aux différentes demandes spécifiques ci-dessous.

>[!CAUTION]
>Il est clairement attendu de votre part que vous manipuliez ces données **de manière fonctionnelle**, en respect des enseignements reçus, afin de filtrer, réduire, ... ces données comme souhaité.
>
>⚠️ De manière générale : évitez les boucles `foreach()` ‼️

# Transformations à réaliser

- [Rapport A01 - La somme des km parcourus pour les véhicule de type "Moyenne"](#rapport-a01---la-somme-des-km-parcourus-pour-les-véhicule-de-type-moyenne)
- [Rapport A02 - Les types de véhicules de Mobilus, sans doublons et triés par nom](#rapport-a02---les-types-de-véhicules-de-mobilus-sans-doublons-et-triés-par-nom)
- [Rapport A03 - Les véhicules de Mobilus, regroupés par type et triés](#rapport-a03---les-véhicules-de-mobilus-regroupés-par-type-et-triés)
- [Rapport A04 - Liste des clients du plus jeune au plus ancien, puis par nom\_prenom](#rapport-a04---liste-des-clients-du-plus-jeune-au-plus-ancien-puis-par-nom_prenom)
- [Rapport A05 - Le résultat (CA total, jours, km, nbre locations) sur l'ensemble de la période](#rapport-a05---le-résultat-ca-total-jours-km-nbre-locations-sur-lensemble-de-la-période)
- [Rapport A06 - Résultat des véhicules sur la période, triés par ca](#rapport-a06---résultat-des-véhicules-sur-la-période-triés-par-ca)
- [Rapport A07 - Pour un client spécifique fourni (id) la liste triée de ses locations de plus de 12 jours](#rapport-a07---pour-un-client-spécifique-fourni-id-la-liste-triée-de-ses-locations-de-plus-de-12-jours)
- [Rapport A08 - La liste des incidents survenus, triés par date](#rapport-a08---la-liste-des-incidents-survenus-triés-par-date)
- [Rapport A09 - TOP 5 des nos meilleurs clients](#rapport-a09---top-5-des-nos-meilleurs-clients)
- [Rapport A10 - Âge moyen des conducteur des véhicules accidentés](#rapport-a10---âge-moyen-des-conducteur-des-véhicules-accidentés)
- [Rapport A11 - Le CA réalisé mois par mois](#rapport-a11---le-ca-réalisé-mois-par-mois)
- [Rapport A12 - Pour les véhicule de type "Petite citadine" et de nom "Kia Picanto", le plus petit, plus grand et moyenne des km parcourus](#rapport-a12---pour-les-véhicule-de-type-petite-citadine-et-de-nom-kia-picanto-le-plus-petit-plus-grand-et-moyenne-des-km-parcourus)

## Rapport A01 - La somme des km parcourus pour les véhicule de type "Moyenne"

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
181656
```

## Rapport A02 - Les types de véhicules de Mobilus, sans doublons et triés par nom

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
[
   "Familiale",
   "Grande",
   "Moyenne",
   "Petite citadine"
]
```

## Rapport A03 - Les véhicules de Mobilus, regroupés par type et triés

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
{
   "Grande": [
      "BMW 520d [IDV-38EAEE], à 248 Frs/jour et 0.7 Frs/km",
      "Mercedes-Benz C-Klasse [IDV-39EC0D], à 256 Frs/jour et 0.7 Frs/km",
      "Mercedes-Benz E-Klasse T-Modell 4x4 [IDV-1AAEA0], à 280 Frs/jour et 0.8 Frs/km",
      "Volvo XC60 [IDV-16B127], à 236 Frs/jour et 0.7 Frs/km"
   ],
   "Moyenne": [
      "Ford Kuga [IDV-2887F6], à 208 Frs/jour et 0.35 Frs/km",
      "Mazda 3 [IDV-10322C], à 200 Frs/jour et 0.35 Frs/km",
      "Nissan Juke [IDV-162820], à 196 Frs/jour et 0.35 Frs/km",
      "Opel Astra [IDV-2EC303], à 208 Frs/jour et 0.35 Frs/km",
      "Seat Ateca [IDV-15E125], à 204 Frs/jour et 0.35 Frs/km",
      "Volvo XC40 [IDV-326ED3], à 212 Frs/jour et 0.35 Frs/km"
   ],
   "Familiale": [
      "Mercedes-Benz Vito Tourer 4x4 [IDV-250E8B], à 336 Frs/jour et 0.55 Frs/km",
      "Peugeot 308 SW [IDV-2A341E], à 280 Frs/jour et 0.55 Frs/km",
      "Renault Espace [IDV-0AD75A], à 288 Frs/jour et 0.55 Frs/km"
   ],
   "Petite citadine": [
      "Ford Ka [IDV-1BB637], à 152 Frs/jour et 0.25 Frs/km",
      "Kia Picanto [IDV-21B869], à 152 Frs/jour et 0.25 Frs/km",
      "Kia Picanto [IDV-66AH71], à 152 Frs/jour et 0.25 Frs/km",
      "Seat Ibiza [IDV-30349B], à 176 Frs/jour et 0.25 Frs/km"
   ]
}
```

## Rapport A04 - Liste des clients du plus jeune au plus ancien, puis par nom_prenom

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
[
   {
      "nom_prenom": "NISSENS Remy",
      "date_naissance": "04.05.1961"
   },
   {
      "nom_prenom": "TERNET Alain",
      "date_naissance": "13.02.1964"
   },
   {
      "nom_prenom": "HARONI Mac",
      "date_naissance": "23.03.1967"
   },
   {
      "nom_prenom": "TERRIEUR Alex",
      "date_naissance": "06.03.1972"
   },
   {
      "nom_prenom": "RIQUE Théo",
      "date_naissance": "04.07.1978"
   },
   {
      "nom_prenom": "FRIEDLI Paul",
      "date_naissance": "15.05.1985"
   },
   {
      "nom_prenom": "D'ŒUF John",
      "date_naissance": "10.07.1986"
   },
   {
      "nom_prenom": "TERRIEUR Alain",
      "date_naissance": "09.12.1990"
   },
   {
      "nom_prenom": "TARISTE Guy",
      "date_naissance": "23.07.1994"
   },
   {
      "nom_prenom": "GALLEY Philippe",
      "date_naissance": "14.08.1994"
   },
   {
      "nom_prenom": "CÉLÈRE Jack",
      "date_naissance": "10.05.1998"
   },
   {
      "nom_prenom": "FICE Eddy",
      "date_naissance": "25.02.2000"
   },
   {
      "nom_prenom": "VOYANTE Claire",
      "date_naissance": "09.05.2005"
   }
]
```

## Rapport A05 - Le résultat (CA total, jours, km, nbre locations) sur l'ensemble de la période

>[!TIP]
>Pour calculer le coût d'une location, il faut tout simplement ajouter deux éléments :
>
>- son coût d'usure = le nombre de km effectués par cette location multiplié par le prix/km du véhicule loué.
>- son coût temporel = la durée en jours de cette location multipliée par le prix/jour du véhicule loué.

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
{
   "ca": 1454531.8999999983,
   "locations": 666,
   "jours": 5436,
   "km": 487186
}
```

## Rapport A06 - Résultat des véhicules sur la période, triés par ca

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
[
   {
      "vehicule_id": "IDV-2A341E",
      "vehicule_type": "Familiale",
      "vehicule_nom": "Peugeot 308 SW",
      "vehicule_prix_par_jour": 280,
      "vehicule_prix_par_km": 0.55,
      "ca": 134672.99999999994,
      "locations": 49,
      "jours": 407,
      "km": 37660
   },
   {
      "vehicule_id": "IDV-250E8B",
      "vehicule_type": "Familiale",
      "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
      "vehicule_prix_par_jour": 336,
      "vehicule_prix_par_km": 0.55,
      "ca": 131665.55,
      "locations": 37,
      "jours": 342,
      "km": 30461
   },
   {
      "vehicule_id": "IDV-38EAEE",
      "vehicule_type": "Grande",
      "vehicule_nom": "BMW 520d",
      "vehicule_prix_par_jour": 248,
      "vehicule_prix_par_km": 0.7,
      "ca": 118115.29999999997,
      "locations": 48,
      "jours": 382,
      "km": 33399
   },
   {
      "vehicule_id": "IDV-39EC0D",
      "vehicule_type": "Grande",
      "vehicule_nom": "Mercedes-Benz C-Klasse",
      "vehicule_prix_par_jour": 256,
      "vehicule_prix_par_km": 0.7,
      "ca": 110496.3,
      "locations": 40,
      "jours": 340,
      "km": 33509
   },
   {
      "vehicule_id": "IDV-0AD75A",
      "vehicule_type": "Familiale",
      "vehicule_nom": "Renault Espace",
      "vehicule_prix_par_jour": 288,
      "vehicule_prix_par_km": 0.55,
      "ca": 110124.69999999998,
      "locations": 42,
      "jours": 328,
      "km": 28474
   },
   {
      "vehicule_id": "IDV-16B127",
      "vehicule_type": "Grande",
      "vehicule_nom": "Volvo XC60",
      "vehicule_prix_par_jour": 236,
      "vehicule_prix_par_km": 0.7,
      "ca": 95577.9,
      "locations": 39,
      "jours": 321,
      "km": 28317
   },
   {
      "vehicule_id": "IDV-2EC303",
      "vehicule_type": "Moyenne",
      "vehicule_nom": "Opel Astra",
      "vehicule_prix_par_jour": 208,
      "vehicule_prix_par_km": 0.35,
      "ca": 92367.4,
      "locations": 48,
      "jours": 388,
      "km": 33324
   },
   {
      "vehicule_id": "IDV-1AAEA0",
      "vehicule_type": "Grande",
      "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
      "vehicule_prix_par_jour": 280,
      "vehicule_prix_par_km": 0.8,
      "ca": 88336.79999999999,
      "locations": 29,
      "jours": 247,
      "km": 23971
   },
   {
      "vehicule_id": "IDV-2887F6",
      "vehicule_type": "Moyenne",
      "vehicule_nom": "Ford Kuga",
      "vehicule_prix_par_jour": 208,
      "vehicule_prix_par_km": 0.35,
      "ca": 85563.85,
      "locations": 42,
      "jours": 354,
      "km": 34091
   },
   {
      "vehicule_id": "IDV-10322C",
      "vehicule_type": "Moyenne",
      "vehicule_nom": "Mazda 3",
      "vehicule_prix_par_jour": 200,
      "vehicule_prix_par_km": 0.35,
      "ca": 81764.59999999999,
      "locations": 47,
      "jours": 355,
      "km": 30756
   },
   {
      "vehicule_id": "IDV-15E125",
      "vehicule_type": "Moyenne",
      "vehicule_nom": "Seat Ateca",
      "vehicule_prix_par_jour": 204,
      "vehicule_prix_par_km": 0.35,
      "ca": 81400.95000000001,
      "locations": 42,
      "jours": 342,
      "km": 33237
   },
   {
      "vehicule_id": "IDV-162820",
      "vehicule_type": "Moyenne",
      "vehicule_nom": "Nissan Juke",
      "vehicule_prix_par_jour": 196,
      "vehicule_prix_par_km": 0.35,
      "ca": 72318.74999999999,
      "locations": 40,
      "jours": 320,
      "km": 27425
   },
   {
      "vehicule_id": "IDV-1BB637",
      "vehicule_type": "Petite citadine",
      "vehicule_nom": "Ford Ka",
      "vehicule_prix_par_jour": 152,
      "vehicule_prix_par_km": 0.25,
      "ca": 66072.75,
      "locations": 46,
      "jours": 383,
      "km": 31427
   },
   {
      "vehicule_id": "IDV-326ED3",
      "vehicule_type": "Moyenne",
      "vehicule_nom": "Volvo XC40",
      "vehicule_prix_par_jour": 212,
      "vehicule_prix_par_km": 0.35,
      "ca": 64804.05000000001,
      "locations": 37,
      "jours": 268,
      "km": 22823
   },
   {
      "vehicule_id": "IDV-30349B",
      "vehicule_type": "Petite citadine",
      "vehicule_nom": "Seat Ibiza",
      "vehicule_prix_par_jour": 176,
      "vehicule_prix_par_km": 0.25,
      "ca": 53962.75,
      "locations": 34,
      "jours": 271,
      "km": 25067
   },
   {
      "vehicule_id": "IDV-21B869",
      "vehicule_type": "Petite citadine",
      "vehicule_nom": "Kia Picanto",
      "vehicule_prix_par_jour": 152,
      "vehicule_prix_par_km": 0.25,
      "ca": 48600.25,
      "locations": 31,
      "jours": 282,
      "km": 22945
   },
   {
      "vehicule_id": "IDV-66AH71",
      "vehicule_type": "Petite citadine",
      "vehicule_nom": "Kia Picanto",
      "vehicule_prix_par_jour": 152,
      "vehicule_prix_par_km": 0.25,
      "ca": 18687,
      "locations": 15,
      "jours": 106,
      "km": 10300
   }
]
```

## Rapport A07 - Pour un client spécifique fourni (id) la liste triée de ses locations de plus de 12 jours

Le client à utiliser est `IDC-32CE80`, à mettre dans une constante.  
La durée souhaitée des location (>`12` jours) doit également être mise dans une constante.

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
[
   {
      "date": "28.01.2024",
      "jours": 14,
      "km": 1596,
      "vehicule_id": "IDV-15E125",
      "vehicule_nom": "Seat Ateca"
   },
   {
      "date": "27.02.2024",
      "jours": 14,
      "km": 700,
      "vehicule_id": "IDV-162820",
      "vehicule_nom": "Nissan Juke"
   },
   {
      "date": "02.04.2024",
      "jours": 13,
      "km": 1313,
      "vehicule_id": "IDV-15E125",
      "vehicule_nom": "Seat Ateca"
   },
   {
      "date": "16.04.2024",
      "jours": 14,
      "km": 546,
      "vehicule_id": "IDV-0AD75A",
      "vehicule_nom": "Renault Espace"
   },
   {
      "date": "25.04.2024",
      "jours": 14,
      "km": 1960,
      "vehicule_id": "IDV-1AAEA0",
      "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4"
   },
   {
      "date": "16.05.2024",
      "jours": 14,
      "km": 882,
      "vehicule_id": "IDV-15E125",
      "vehicule_nom": "Seat Ateca"
   },
   {
      "date": "10.06.2024",
      "jours": 14,
      "km": 1792,
      "vehicule_id": "IDV-1AAEA0",
      "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4"
   },
   {
      "date": "22.06.2024",
      "jours": 13,
      "km": 754,
      "vehicule_id": "IDV-10322C",
      "vehicule_nom": "Mazda 3"
   },
   {
      "date": "12.08.2024",
      "jours": 14,
      "km": 448,
      "vehicule_id": "IDV-326ED3",
      "vehicule_nom": "Volvo XC40"
   },
   {
      "date": "20.08.2024",
      "jours": 13,
      "km": 1703,
      "vehicule_id": "IDV-38EAEE",
      "vehicule_nom": "BMW 520d"
   },
   {
      "date": "06.09.2024",
      "jours": 13,
      "km": 1911,
      "vehicule_id": "IDV-2A341E",
      "vehicule_nom": "Peugeot 308 SW"
   },
   {
      "date": "27.09.2024",
      "jours": 15,
      "km": 2070,
      "vehicule_id": "IDV-2A341E",
      "vehicule_nom": "Peugeot 308 SW"
   },
   {
      "date": "04.11.2024",
      "jours": 14,
      "km": 658,
      "vehicule_id": "IDV-10322C",
      "vehicule_nom": "Mazda 3"
   }
]
```

## Rapport A08 - La liste des incidents survenus, triés par date

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
[
   {
      "date": "07.01.2024",
      "incident": "Griffure porte avant-droite; Retroviseur gauche cassé;",
      "vehicule": "Peugeot 308 SW [IDV-2A341E]",
      "client": "CÉLÈRE Jack"
   },
   {
      "date": "01.03.2024",
      "incident": "Déchirure/coupure du siège conducteur en cuir",
      "vehicule": "Volvo XC40 [IDV-326ED3]",
      "client": "CÉLÈRE Jack"
   },
   {
      "date": "22.04.2024",
      "incident": "La roue de secours a disparu !",
      "vehicule": "Seat Ateca [IDV-15E125]",
      "client": "CÉLÈRE Jack"
   },
   {
      "date": "08.06.2024",
      "incident": "Jantes côté gauche marquées",
      "vehicule": "Nissan Juke [IDV-162820]",
      "client": "CÉLÈRE Jack"
   },
   {
      "date": "15.06.2024",
      "incident": "La 2ème clé fournie n'a pas été rendue",
      "vehicule": "Mazda 3 [IDV-10322C]",
      "client": "VOYANTE Claire"
   },
   {
      "date": "24.07.2024",
      "incident": "Véhicule rendu sans le plein d'essence; Reste 1/2; Rempli 40L",
      "vehicule": "Mercedes-Benz C-Klasse [IDV-39EC0D]",
      "client": "CÉLÈRE Jack"
   },
   {
      "date": "29.07.2024",
      "incident": "Griffure porte avant-gauche",
      "vehicule": "Volvo XC60 [IDV-16B127]",
      "client": "VOYANTE Claire"
   },
   {
      "date": "10.08.2024",
      "incident": "Jantes côté gauche griffées",
      "vehicule": "Mazda 3 [IDV-10322C]",
      "client": "VOYANTE Claire"
   },
   {
      "date": "11.08.2024",
      "incident": "Véhicule rendu sans le plein d'essence; Reste 3/4; Rempli 12L",
      "vehicule": "Nissan Juke [IDV-162820]",
      "client": "VOYANTE Claire"
   },
   {
      "date": "21.08.2024",
      "incident": "Véhicule rendu sans le plein d'essence; Vide;; Rempli 43L",
      "vehicule": "Ford Ka [IDV-1BB637]",
      "client": "CÉLÈRE Jack"
   },
   {
      "date": "28.09.2024",
      "incident": "Véhicule non fumeur; Cendres retrouvées dans cendrier",
      "vehicule": "Mercedes-Benz C-Klasse [IDV-39EC0D]",
      "client": "VOYANTE Claire"
   },
   {
      "date": "28.10.2024",
      "incident": "Véhicule rendu sans le plein d'essence; Reste 1/3; Rempli 20L",
      "vehicule": "Seat Ibiza [IDV-30349B]",
      "client": "VOYANTE Claire"
   },
   {
      "date": "26.11.2024",
      "incident": "Véhicule rendu sans le plein d'essence; Reste 1/4; Rempli 30L",
      "vehicule": "Kia Picanto [IDV-66AH71]",
      "client": "CÉLÈRE Jack"
   },
   {
      "date": "10.12.2024",
      "incident": "Dégât de la moquette avec cigarette",
      "vehicule": "Peugeot 308 SW [IDV-2A341E]",
      "client": "VOYANTE Claire"
   },
   {
      "date": "23.12.2024",
      "incident": "Accident; Avant-gauche défoncé; Jugé coupable; Réparations (4830); Pleine franchise (1000)",
      "vehicule": "Volvo XC60 [IDV-16B127]",
      "client": "VOYANTE Claire"
   },
   {
      "date": "26.12.2024",
      "incident": "Pare-choc avant légèrement enfoncé; Plaque avant perdue",
      "vehicule": "Renault Espace [IDV-0AD75A]",
      "client": "CÉLÈRE Jack"
   }
]
```

## Rapport A09 - TOP 5 des nos meilleurs clients

Le TOP (nbre des meilleurs clients à retourner) à utiliser doit être mis dans une constante.  

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
[
   {
      "nom_prenom": "VOYANTE Claire",
      "date_naissance": "09.05.2005",
      "age_str": "20 ans, 1 mois, 15 jours",
      "locations_nbre": 59,
      "locations_jours": 524,
      "locations_km": 48922,
      "locations_ca": 146266
   },
   {
      "nom_prenom": "NISSENS Remy",
      "date_naissance": "04.05.1961",
      "age_str": "64 ans, 1 mois, 20 jours",
      "locations_nbre": 59,
      "locations_jours": 509,
      "locations_km": 47758,
      "locations_ca": 143704.5
   },
   {
      "nom_prenom": "GALLEY Philippe",
      "date_naissance": "14.08.1994",
      "age_str": "30 ans, 10 mois, 10 jours",
      "locations_nbre": 56,
      "locations_jours": 466,
      "locations_km": 44874,
      "locations_ca": 130518.55
   },
   {
      "nom_prenom": "TERNET Alain",
      "date_naissance": "13.02.1964",
      "age_str": "61 ans, 4 mois, 11 jours",
      "locations_nbre": 57,
      "locations_jours": 454,
      "locations_km": 37845,
      "locations_ca": 116167.89999999998
   },
   {
      "nom_prenom": "D'ŒUF John",
      "date_naissance": "10.07.1986",
      "age_str": "38 ans, 11 mois, 14 jours",
      "locations_nbre": 58,
      "locations_jours": 448,
      "locations_km": 38951,
      "locations_ca": 116103.64999999995
   }
]
```

## Rapport A10 - Âge moyen des conducteur des véhicules accidentés

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
[
   {
      "vehicule": "Kia Picanto [IDV-66AH71]",
      "moyenne_age": 27
   },
   {
      "vehicule": "Seat Ateca [IDV-15E125]",
      "moyenne_age": 27
   },
   {
      "vehicule": "Volvo XC40 [IDV-326ED3]",
      "moyenne_age": 27
   },
   {
      "vehicule": "Ford Ka [IDV-1BB637]",
      "moyenne_age": 27
   },
   {
      "vehicule": "Renault Espace [IDV-0AD75A]",
      "moyenne_age": 27
   },
   {
      "vehicule": "Peugeot 308 SW [IDV-2A341E]",
      "moyenne_age": 23.5
   },
   {
      "vehicule": "Nissan Juke [IDV-162820]",
      "moyenne_age": 23.5
   },
   {
      "vehicule": "Mercedes-Benz C-Klasse [IDV-39EC0D]",
      "moyenne_age": 23.5
   },
   {
      "vehicule": "Volvo XC60 [IDV-16B127]",
      "moyenne_age": 20
   },
   {
      "vehicule": "Seat Ibiza [IDV-30349B]",
      "moyenne_age": 20
   },
   {
      "vehicule": "Mazda 3 [IDV-10322C]",
      "moyenne_age": 20
   }
]
```

## Rapport A11 - Le CA réalisé mois par mois

Il faut arrondir à deux chiffres après la virgule ces totaux. Ce tableau de 12 cases contient les CA pour les mois de janvier [0] à décembre [11].

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
[
   "123030.75",
   "152227.90",
   "77779.45",
   "142657.90",
   "101076.35",
   "111331.55",
   "111744.45",
   "147579.90",
   "131631.10",
   "110942.55",
   "112886.85",
   "131643.15"
]
```

## Rapport A12 - Pour les véhicule de type "Petite citadine" et de nom "Kia Picanto", le plus petit, plus grand et moyenne des km parcourus

Le type `Petite citadine` et le nom `Kia Picanto` à utiliser doivent être mis dans une constante.  

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
[
   {
      "vehicule_id": "IDV-21B869",
      "km_min": 137,
      "km_max": 1500,
      "km_moy": "740.16"
   },
   {
      "vehicule_id": "IDV-66AH71",
      "km_min": 49,
      "km_max": 2205,
      "km_moy": "686.67"
   }
]
```

--------

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" style="margin-left:-20px;">
