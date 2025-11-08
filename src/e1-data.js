
const jsonData = {
    "etablissement": "Mobilus AG",
    "periode": "Année 2024",
    "locations": [
        {
            "location": {
                "location_date": "02.07.2024",
                "location_jours": 12,
                "location_km": 1500,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "11.04.2024",
                "location_jours": 11,
                "location_km": 891,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "19.05.2024",
                "location_jours": 2,
                "location_km": 206,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "18.11.2024",
                "location_jours": 10,
                "location_km": 1340,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "20.07.2024",
                "location_jours": 4,
                "location_km": 256,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "09.06.2024",
                "location_jours": 11,
                "location_km": 902,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "19.09.2024",
                "location_jours": 9,
                "location_km": 792,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "24.02.2024",
                "location_jours": 14,
                "location_km": 798,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "04.09.2024",
                "location_jours": 6,
                "location_km": 708,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "01.09.2024",
                "location_jours": 5,
                "location_km": 645,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "11.09.2024",
                "location_jours": 15,
                "location_km": 1395,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "08.06.2024",
                "location_jours": 2,
                "location_km": 230,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "27.07.2024",
                "location_jours": 14,
                "location_km": 2100,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "05.06.2024",
                "location_jours": 12,
                "location_km": 648,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "13.03.2024",
                "location_jours": 8,
                "location_km": 248,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "14.04.2024",
                "location_jours": 8,
                "location_km": 1160,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "04.10.2024",
                "location_jours": 14,
                "location_km": 1428,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "08.10.2024",
                "location_jours": 11,
                "location_km": 781,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "10.02.2024",
                "location_jours": 13,
                "location_km": 1430,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "23.07.2024",
                "location_jours": 4,
                "location_km": 476,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "17.11.2024",
                "location_jours": 13,
                "location_km": 611,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "09.12.2024",
                "location_jours": 5,
                "location_km": 215,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "18.06.2024",
                "location_jours": 10,
                "location_km": 610,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "31.03.2024",
                "location_jours": 6,
                "location_km": 534,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "18.05.2024",
                "location_jours": 8,
                "location_km": 536,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "17.11.2024",
                "location_jours": 5,
                "location_km": 685,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "03.11.2024",
                "location_jours": 2,
                "location_km": 262,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "20.05.2024",
                "location_jours": 6,
                "location_km": 768,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "28.08.2024",
                "location_jours": 11,
                "location_km": 1441,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "27.02.2024",
                "location_jours": 1,
                "location_km": 80,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "01.04.2024",
                "location_jours": 2,
                "location_km": 254,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "08.09.2024",
                "location_jours": 2,
                "location_km": 92,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "23.12.2024",
                "location_jours": 8,
                "location_km": 984,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "20.02.2024",
                "location_jours": 2,
                "location_km": 274,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "28.03.2024",
                "location_jours": 2,
                "location_km": 130,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "30.08.2024",
                "location_jours": 1,
                "location_km": 140,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "28.11.2024",
                "location_jours": 4,
                "location_km": 436,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "13.12.2024",
                "location_jours": 1,
                "location_km": 107,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "28.02.2024",
                "location_jours": 13,
                "location_km": 1443,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "20.02.2024",
                "location_jours": 3,
                "location_km": 291,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "13.10.2024",
                "location_jours": 15,
                "location_km": 885,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "12.08.2024",
                "location_jours": 14,
                "location_km": 448,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "18.08.2024",
                "location_jours": 8,
                "location_km": 416,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "13.09.2024",
                "location_jours": 9,
                "location_km": 828,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "19.11.2024",
                "location_jours": 4,
                "location_km": 424,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "20.04.2024",
                "location_jours": 7,
                "location_km": 889,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "01.06.2024",
                "location_jours": 6,
                "location_km": 546,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "29.08.2024",
                "location_jours": 11,
                "location_km": 968,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "28.03.2024",
                "location_jours": 13,
                "location_km": 1053,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "19.02.2024",
                "location_jours": 8,
                "location_km": 648,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "21.12.2024",
                "location_jours": 8,
                "location_km": 528,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "09.02.2024",
                "location_jours": 6,
                "location_km": 660,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "10.05.2024",
                "location_jours": 9,
                "location_km": 432,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "11.01.2024",
                "location_jours": 6,
                "location_km": 870,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "29.07.2024",
                "location_jours": 5,
                "location_km": 520,
                "has_incident": true,
                "incident_details": "Griffure porte avant-gauche"
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "09.08.2024",
                "location_jours": 14,
                "location_km": 644,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "14.11.2024",
                "location_jours": 6,
                "location_km": 522,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "30.05.2024",
                "location_jours": 6,
                "location_km": 384,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "30.05.2024",
                "location_jours": 14,
                "location_km": 1148,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "01.02.2024",
                "location_jours": 7,
                "location_km": 931,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "03.03.2024",
                "location_jours": 3,
                "location_km": 123,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "23.12.2024",
                "location_jours": 11,
                "location_km": 1364,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "23.09.2024",
                "location_jours": 1,
                "location_km": 137,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "19.11.2024",
                "location_jours": 13,
                "location_km": 494,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "13.03.2024",
                "location_jours": 7,
                "location_km": 868,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "22.12.2024",
                "location_jours": 2,
                "location_km": 176,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "19.06.2024",
                "location_jours": 3,
                "location_km": 363,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "26.10.2024",
                "location_jours": 13,
                "location_km": 793,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "18.05.2024",
                "location_jours": 11,
                "location_km": 1408,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "09.04.2024",
                "location_jours": 2,
                "location_km": 180,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "24.02.2024",
                "location_jours": 2,
                "location_km": 66,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "21.12.2024",
                "location_jours": 12,
                "location_km": 1596,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "27.11.2024",
                "location_jours": 10,
                "location_km": 1270,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "18.11.2024",
                "location_jours": 9,
                "location_km": 720,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "22.06.2024",
                "location_jours": 11,
                "location_km": 1078,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "02.10.2024",
                "location_jours": 4,
                "location_km": 388,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "28.10.2024",
                "location_jours": 8,
                "location_km": 240,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "16.06.2024",
                "location_jours": 5,
                "location_km": 565,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "14.07.2024",
                "location_jours": 11,
                "location_km": 605,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "05.02.2024",
                "location_jours": 6,
                "location_km": 648,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "20.05.2024",
                "location_jours": 12,
                "location_km": 1632,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "24.12.2024",
                "location_jours": 7,
                "location_km": 770,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "15.09.2024",
                "location_jours": 10,
                "location_km": 770,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "28.11.2024",
                "location_jours": 8,
                "location_km": 704,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "10.12.2024",
                "location_jours": 11,
                "location_km": 880,
                "has_incident": true,
                "incident_details": "Dégât de la moquette avec cigarette"
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "23.02.2024",
                "location_jours": 11,
                "location_km": 902,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "08.06.2024",
                "location_jours": 12,
                "location_km": 1620,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "28.08.2024",
                "location_jours": 7,
                "location_km": 217,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "21.04.2024",
                "location_jours": 10,
                "location_km": 710,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "08.06.2024",
                "location_jours": 15,
                "location_km": 1350,
                "has_incident": true,
                "incident_details": "Jantes côté gauche marquées"
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "02.12.2024",
                "location_jours": 12,
                "location_km": 660,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "02.01.2024",
                "location_jours": 6,
                "location_km": 576,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "06.04.2024",
                "location_jours": 3,
                "location_km": 387,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "24.08.2024",
                "location_jours": 5,
                "location_km": 655,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "19.07.2024",
                "location_jours": 9,
                "location_km": 1233,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "05.02.2024",
                "location_jours": 1,
                "location_km": 105,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "16.01.2024",
                "location_jours": 15,
                "location_km": 465,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "20.09.2024",
                "location_jours": 14,
                "location_km": 1610,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "06.09.2024",
                "location_jours": 12,
                "location_km": 1464,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "19.03.2024",
                "location_jours": 4,
                "location_km": 528,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "06.09.2024",
                "location_jours": 6,
                "location_km": 450,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "01.09.2024",
                "location_jours": 4,
                "location_km": 212,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "20.07.2024",
                "location_jours": 2,
                "location_km": 270,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "04.04.2024",
                "location_jours": 7,
                "location_km": 532,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "19.10.2024",
                "location_jours": 1,
                "location_km": 46,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "06.08.2024",
                "location_jours": 14,
                "location_km": 602,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "07.09.2024",
                "location_jours": 6,
                "location_km": 276,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "25.02.2024",
                "location_jours": 12,
                "location_km": 984,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "10.09.2024",
                "location_jours": 5,
                "location_km": 560,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "06.11.2024",
                "location_jours": 3,
                "location_km": 393,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "31.08.2024",
                "location_jours": 12,
                "location_km": 1224,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "25.08.2024",
                "location_jours": 11,
                "location_km": 1628,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "09.12.2024",
                "location_jours": 15,
                "location_km": 810,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "11.05.2024",
                "location_jours": 7,
                "location_km": 938,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "26.02.2024",
                "location_jours": 13,
                "location_km": 1469,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "02.01.2024",
                "location_jours": 10,
                "location_km": 1110,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "24.05.2024",
                "location_jours": 10,
                "location_km": 1290,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "19.09.2024",
                "location_jours": 12,
                "location_km": 1752,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "23.12.2024",
                "location_jours": 7,
                "location_km": 504,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "09.01.2024",
                "location_jours": 2,
                "location_km": 266,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "26.04.2024",
                "location_jours": 8,
                "location_km": 592,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "16.01.2024",
                "location_jours": 11,
                "location_km": 935,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "25.11.2024",
                "location_jours": 8,
                "location_km": 504,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "20.04.2024",
                "location_jours": 14,
                "location_km": 616,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "14.08.2024",
                "location_jours": 6,
                "location_km": 804,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "28.07.2024",
                "location_jours": 12,
                "location_km": 360,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "12.07.2024",
                "location_jours": 4,
                "location_km": 388,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "26.09.2024",
                "location_jours": 4,
                "location_km": 244,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "06.09.2024",
                "location_jours": 2,
                "location_km": 192,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "20.02.2024",
                "location_jours": 8,
                "location_km": 816,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "13.10.2024",
                "location_jours": 11,
                "location_km": 627,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "07.06.2024",
                "location_jours": 3,
                "location_km": 258,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "03.09.2024",
                "location_jours": 5,
                "location_km": 450,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "19.09.2024",
                "location_jours": 2,
                "location_km": 232,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "01.01.2024",
                "location_jours": 15,
                "location_km": 990,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "28.10.2024",
                "location_jours": 5,
                "location_km": 735,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "06.07.2024",
                "location_jours": 11,
                "location_km": 781,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "26.04.2024",
                "location_jours": 6,
                "location_km": 708,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "16.08.2024",
                "location_jours": 9,
                "location_km": 1314,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "02.07.2024",
                "location_jours": 5,
                "location_km": 485,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "29.06.2024",
                "location_jours": 3,
                "location_km": 441,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "08.01.2024",
                "location_jours": 10,
                "location_km": 1420,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "09.07.2024",
                "location_jours": 4,
                "location_km": 436,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "23.12.2024",
                "location_jours": 9,
                "location_km": 1269,
                "has_incident": true,
                "incident_details": "Accident; Avant-gauche défoncé; Jugé coupable; Réparations (4830); Pleine franchise (1000)"
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "05.05.2024",
                "location_jours": 2,
                "location_km": 236,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "23.01.2024",
                "location_jours": 3,
                "location_km": 336,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "29.11.2024",
                "location_jours": 2,
                "location_km": 288,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "13.11.2024",
                "location_jours": 11,
                "location_km": 847,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "02.04.2024",
                "location_jours": 10,
                "location_km": 1500,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "05.04.2024",
                "location_jours": 13,
                "location_km": 1274,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "23.08.2024",
                "location_jours": 13,
                "location_km": 572,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "13.12.2024",
                "location_jours": 15,
                "location_km": 1410,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "07.07.2024",
                "location_jours": 12,
                "location_km": 528,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "23.09.2024",
                "location_jours": 8,
                "location_km": 624,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "25.03.2024",
                "location_jours": 11,
                "location_km": 880,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "10.05.2024",
                "location_jours": 6,
                "location_km": 648,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "26.11.2024",
                "location_jours": 2,
                "location_km": 154,
                "has_incident": true,
                "incident_details": "Véhicule rendu sans le plein d'essence; Reste 1/4; Rempli 30L"
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "04.11.2024",
                "location_jours": 3,
                "location_km": 345,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "04.06.2024",
                "location_jours": 8,
                "location_km": 480,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "08.07.2024",
                "location_jours": 2,
                "location_km": 278,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "01.04.2024",
                "location_jours": 12,
                "location_km": 1344,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "26.11.2024",
                "location_jours": 13,
                "location_km": 455,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "15.10.2024",
                "location_jours": 9,
                "location_km": 342,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "21.06.2024",
                "location_jours": 6,
                "location_km": 708,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "16.05.2024",
                "location_jours": 14,
                "location_km": 882,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "22.01.2024",
                "location_jours": 8,
                "location_km": 1184,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "12.01.2024",
                "location_jours": 13,
                "location_km": 884,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "29.09.2024",
                "location_jours": 15,
                "location_km": 2085,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "21.11.2024",
                "location_jours": 6,
                "location_km": 378,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "08.12.2024",
                "location_jours": 2,
                "location_km": 162,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "23.03.2024",
                "location_jours": 8,
                "location_km": 400,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "07.08.2024",
                "location_jours": 7,
                "location_km": 273,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "11.04.2024",
                "location_jours": 2,
                "location_km": 190,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "03.08.2024",
                "location_jours": 5,
                "location_km": 555,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "05.02.2024",
                "location_jours": 10,
                "location_km": 990,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "07.07.2024",
                "location_jours": 6,
                "location_km": 306,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "28.10.2024",
                "location_jours": 12,
                "location_km": 912,
                "has_incident": true,
                "incident_details": "Véhicule rendu sans le plein d'essence; Reste 1/3; Rempli 20L"
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "10.03.2024",
                "location_jours": 8,
                "location_km": 408,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "14.11.2024",
                "location_jours": 2,
                "location_km": 268,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "15.05.2024",
                "location_jours": 10,
                "location_km": 1140,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "01.11.2024",
                "location_jours": 10,
                "location_km": 1380,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "18.12.2024",
                "location_jours": 9,
                "location_km": 1179,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "12.12.2024",
                "location_jours": 7,
                "location_km": 455,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "01.05.2024",
                "location_jours": 5,
                "location_km": 580,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "07.10.2024",
                "location_jours": 10,
                "location_km": 1260,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "23.01.2024",
                "location_jours": 14,
                "location_km": 1890,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "13.08.2024",
                "location_jours": 11,
                "location_km": 1298,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "23.06.2024",
                "location_jours": 5,
                "location_km": 705,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "25.07.2024",
                "location_jours": 10,
                "location_km": 800,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "16.09.2024",
                "location_jours": 6,
                "location_km": 420,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "25.09.2024",
                "location_jours": 15,
                "location_km": 1080,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "05.05.2024",
                "location_jours": 11,
                "location_km": 1496,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "16.08.2024",
                "location_jours": 12,
                "location_km": 1140,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "07.12.2024",
                "location_jours": 11,
                "location_km": 517,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "17.02.2024",
                "location_jours": 8,
                "location_km": 1000,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "10.04.2024",
                "location_jours": 8,
                "location_km": 1200,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "23.02.2024",
                "location_jours": 3,
                "location_km": 213,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "24.12.2024",
                "location_jours": 7,
                "location_km": 805,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "25.07.2024",
                "location_jours": 6,
                "location_km": 834,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "19.08.2024",
                "location_jours": 13,
                "location_km": 1950,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "19.02.2024",
                "location_jours": 13,
                "location_km": 1846,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "17.12.2024",
                "location_jours": 9,
                "location_km": 1260,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "24.01.2024",
                "location_jours": 7,
                "location_km": 637,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "27.05.2024",
                "location_jours": 9,
                "location_km": 1143,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "01.04.2024",
                "location_jours": 1,
                "location_km": 59,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "04.04.2024",
                "location_jours": 2,
                "location_km": 156,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "05.06.2024",
                "location_jours": 13,
                "location_km": 1300,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "06.05.2024",
                "location_jours": 5,
                "location_km": 490,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "13.04.2024",
                "location_jours": 4,
                "location_km": 532,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "26.03.2024",
                "location_jours": 6,
                "location_km": 522,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "08.12.2024",
                "location_jours": 9,
                "location_km": 954,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "26.11.2024",
                "location_jours": 12,
                "location_km": 696,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "06.09.2024",
                "location_jours": 13,
                "location_km": 1911,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "20.06.2024",
                "location_jours": 9,
                "location_km": 576,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "17.10.2024",
                "location_jours": 7,
                "location_km": 427,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "19.04.2024",
                "location_jours": 13,
                "location_km": 637,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "12.02.2024",
                "location_jours": 14,
                "location_km": 1960,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "22.05.2024",
                "location_jours": 14,
                "location_km": 1148,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "11.10.2024",
                "location_jours": 4,
                "location_km": 336,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "12.02.2024",
                "location_jours": 5,
                "location_km": 500,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "25.03.2024",
                "location_jours": 9,
                "location_km": 1035,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "08.04.2024",
                "location_jours": 15,
                "location_km": 945,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "29.12.2024",
                "location_jours": 4,
                "location_km": 520,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "11.01.2024",
                "location_jours": 13,
                "location_km": 728,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "10.10.2024",
                "location_jours": 4,
                "location_km": 452,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "25.10.2024",
                "location_jours": 2,
                "location_km": 114,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "18.01.2024",
                "location_jours": 3,
                "location_km": 333,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "15.11.2024",
                "location_jours": 8,
                "location_km": 1120,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "26.04.2024",
                "location_jours": 1,
                "location_km": 94,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "06.03.2024",
                "location_jours": 10,
                "location_km": 370,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "24.10.2024",
                "location_jours": 8,
                "location_km": 424,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "23.11.2024",
                "location_jours": 9,
                "location_km": 540,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "15.01.2024",
                "location_jours": 5,
                "location_km": 250,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "16.11.2024",
                "location_jours": 6,
                "location_km": 414,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "09.11.2024",
                "location_jours": 12,
                "location_km": 684,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "26.04.2024",
                "location_jours": 7,
                "location_km": 861,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "03.07.2024",
                "location_jours": 5,
                "location_km": 430,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "04.02.2024",
                "location_jours": 10,
                "location_km": 1120,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "25.04.2024",
                "location_jours": 12,
                "location_km": 912,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "28.11.2024",
                "location_jours": 5,
                "location_km": 520,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "18.12.2024",
                "location_jours": 14,
                "location_km": 1358,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "31.03.2024",
                "location_jours": 3,
                "location_km": 207,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "15.07.2024",
                "location_jours": 9,
                "location_km": 1278,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "07.01.2024",
                "location_jours": 7,
                "location_km": 434,
                "has_incident": true,
                "incident_details": "Griffure porte avant-droite; Retroviseur gauche cassé;"
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "22.11.2024",
                "location_jours": 9,
                "location_km": 504,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "11.05.2024",
                "location_jours": 9,
                "location_km": 333,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "10.11.2024",
                "location_jours": 2,
                "location_km": 164,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "15.06.2024",
                "location_jours": 4,
                "location_km": 240,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "13.06.2024",
                "location_jours": 1,
                "location_km": 133,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "13.05.2024",
                "location_jours": 3,
                "location_km": 426,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "09.05.2024",
                "location_jours": 10,
                "location_km": 1270,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "21.08.2024",
                "location_jours": 5,
                "location_km": 420,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "31.07.2024",
                "location_jours": 9,
                "location_km": 963,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "26.06.2024",
                "location_jours": 8,
                "location_km": 912,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "03.12.2024",
                "location_jours": 6,
                "location_km": 432,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "20.11.2024",
                "location_jours": 10,
                "location_km": 940,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "31.03.2024",
                "location_jours": 2,
                "location_km": 260,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "01.10.2024",
                "location_jours": 6,
                "location_km": 888,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "24.12.2024",
                "location_jours": 1,
                "location_km": 125,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "25.02.2024",
                "location_jours": 12,
                "location_km": 1104,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "21.08.2024",
                "location_jours": 10,
                "location_km": 1170,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "18.02.2024",
                "location_jours": 2,
                "location_km": 216,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "08.04.2024",
                "location_jours": 3,
                "location_km": 135,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "12.04.2024",
                "location_jours": 7,
                "location_km": 756,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "24.04.2024",
                "location_jours": 10,
                "location_km": 490,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "26.08.2024",
                "location_jours": 12,
                "location_km": 408,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "29.06.2024",
                "location_jours": 3,
                "location_km": 339,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "13.07.2024",
                "location_jours": 7,
                "location_km": 567,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "11.06.2024",
                "location_jours": 5,
                "location_km": 720,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "12.08.2024",
                "location_jours": 8,
                "location_km": 720,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "16.04.2024",
                "location_jours": 10,
                "location_km": 1000,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "15.05.2024",
                "location_jours": 7,
                "location_km": 294,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "22.01.2024",
                "location_jours": 11,
                "location_km": 1309,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "02.02.2024",
                "location_jours": 2,
                "location_km": 148,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "12.03.2024",
                "location_jours": 14,
                "location_km": 1344,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "17.07.2024",
                "location_jours": 7,
                "location_km": 686,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "05.08.2024",
                "location_jours": 3,
                "location_km": 261,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "11.06.2024",
                "location_jours": 2,
                "location_km": 74,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "05.11.2024",
                "location_jours": 3,
                "location_km": 123,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "31.08.2024",
                "location_jours": 2,
                "location_km": 118,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "07.02.2024",
                "location_jours": 14,
                "location_km": 1064,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "05.08.2024",
                "location_jours": 10,
                "location_km": 1420,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "15.02.2024",
                "location_jours": 11,
                "location_km": 825,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "14.04.2024",
                "location_jours": 4,
                "location_km": 256,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "13.02.2024",
                "location_jours": 5,
                "location_km": 685,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "17.05.2024",
                "location_jours": 9,
                "location_km": 1305,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "06.01.2024",
                "location_jours": 11,
                "location_km": 726,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "28.01.2024",
                "location_jours": 14,
                "location_km": 1596,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "03.11.2024",
                "location_jours": 4,
                "location_km": 492,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "04.08.2024",
                "location_jours": 4,
                "location_km": 316,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "24.07.2024",
                "location_jours": 8,
                "location_km": 1096,
                "has_incident": true,
                "incident_details": "Véhicule rendu sans le plein d'essence; Reste 1/2; Rempli 40L"
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "13.09.2024",
                "location_jours": 1,
                "location_km": 149,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "24.04.2024",
                "location_jours": 4,
                "location_km": 328,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "19.10.2024",
                "location_jours": 14,
                "location_km": 1666,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "03.12.2024",
                "location_jours": 6,
                "location_km": 762,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "02.04.2024",
                "location_jours": 11,
                "location_km": 1232,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "28.09.2024",
                "location_jours": 14,
                "location_km": 910,
                "has_incident": true,
                "incident_details": "Véhicule non fumeur; Cendres retrouvées dans cendrier"
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "27.07.2024",
                "location_jours": 10,
                "location_km": 1480,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "28.06.2024",
                "location_jours": 7,
                "location_km": 462,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "26.12.2024",
                "location_jours": 14,
                "location_km": 1484,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "27.03.2024",
                "location_jours": 11,
                "location_km": 1012,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "03.02.2024",
                "location_jours": 13,
                "location_km": 1235,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "06.03.2024",
                "location_jours": 7,
                "location_km": 588,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "05.06.2024",
                "location_jours": 9,
                "location_km": 1107,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "13.06.2024",
                "location_jours": 13,
                "location_km": 390,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "08.08.2024",
                "location_jours": 13,
                "location_km": 1768,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "05.08.2024",
                "location_jours": 12,
                "location_km": 648,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "11.09.2024",
                "location_jours": 9,
                "location_km": 1341,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "25.02.2024",
                "location_jours": 8,
                "location_km": 800,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "10.06.2024",
                "location_jours": 14,
                "location_km": 1792,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "12.08.2024",
                "location_jours": 15,
                "location_km": 1020,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "08.12.2024",
                "location_jours": 4,
                "location_km": 404,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "10.02.2024",
                "location_jours": 5,
                "location_km": 270,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "05.12.2024",
                "location_jours": 4,
                "location_km": 188,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "28.01.2024",
                "location_jours": 8,
                "location_km": 456,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "12.02.2024",
                "location_jours": 9,
                "location_km": 1152,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "08.05.2024",
                "location_jours": 2,
                "location_km": 292,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "21.07.2024",
                "location_jours": 1,
                "location_km": 124,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "08.04.2024",
                "location_jours": 15,
                "location_km": 450,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "19.05.2024",
                "location_jours": 6,
                "location_km": 816,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "11.02.2024",
                "location_jours": 11,
                "location_km": 1375,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "15.01.2024",
                "location_jours": 12,
                "location_km": 828,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "27.04.2024",
                "location_jours": 9,
                "location_km": 981,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "20.03.2024",
                "location_jours": 14,
                "location_km": 1498,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "13.06.2024",
                "location_jours": 7,
                "location_km": 658,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "15.07.2024",
                "location_jours": 7,
                "location_km": 1008,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "05.01.2024",
                "location_jours": 7,
                "location_km": 630,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "23.05.2024",
                "location_jours": 4,
                "location_km": 400,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "28.10.2024",
                "location_jours": 5,
                "location_km": 640,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "20.09.2024",
                "location_jours": 9,
                "location_km": 1116,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "17.09.2024",
                "location_jours": 7,
                "location_km": 840,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "24.10.2024",
                "location_jours": 4,
                "location_km": 388,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "24.05.2024",
                "location_jours": 9,
                "location_km": 1233,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "15.01.2024",
                "location_jours": 14,
                "location_km": 574,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "09.09.2024",
                "location_jours": 14,
                "location_km": 1190,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "04.02.2024",
                "location_jours": 13,
                "location_km": 546,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "26.02.2024",
                "location_jours": 13,
                "location_km": 1794,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "23.06.2024",
                "location_jours": 8,
                "location_km": 1112,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "22.12.2024",
                "location_jours": 14,
                "location_km": 1456,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "12.04.2024",
                "location_jours": 12,
                "location_km": 540,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "04.07.2024",
                "location_jours": 12,
                "location_km": 1452,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "27.02.2024",
                "location_jours": 14,
                "location_km": 700,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "16.12.2024",
                "location_jours": 11,
                "location_km": 814,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "21.03.2024",
                "location_jours": 4,
                "location_km": 132,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "15.04.2024",
                "location_jours": 11,
                "location_km": 715,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "07.03.2024",
                "location_jours": 4,
                "location_km": 372,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "21.08.2024",
                "location_jours": 4,
                "location_km": 324,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "12.08.2024",
                "location_jours": 11,
                "location_km": 1342,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "02.02.2024",
                "location_jours": 8,
                "location_km": 1040,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "21.02.2024",
                "location_jours": 4,
                "location_km": 184,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "08.12.2024",
                "location_jours": 3,
                "location_km": 279,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "11.02.2024",
                "location_jours": 14,
                "location_km": 1918,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "21.08.2024",
                "location_jours": 12,
                "location_km": 1632,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "25.07.2024",
                "location_jours": 12,
                "location_km": 924,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "06.04.2024",
                "location_jours": 10,
                "location_km": 1460,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "27.07.2024",
                "location_jours": 4,
                "location_km": 420,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "19.10.2024",
                "location_jours": 13,
                "location_km": 1508,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "21.11.2024",
                "location_jours": 14,
                "location_km": 532,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "20.08.2024",
                "location_jours": 10,
                "location_km": 800,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "06.09.2024",
                "location_jours": 3,
                "location_km": 369,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "10.08.2024",
                "location_jours": 7,
                "location_km": 987,
                "has_incident": true,
                "incident_details": "Jantes côté gauche griffées"
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "25.11.2024",
                "location_jours": 15,
                "location_km": 2205,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "12.08.2024",
                "location_jours": 11,
                "location_km": 1133,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "02.03.2024",
                "location_jours": 13,
                "location_km": 1183,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "22.08.2024",
                "location_jours": 4,
                "location_km": 548,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "07.07.2024",
                "location_jours": 7,
                "location_km": 665,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "22.04.2024",
                "location_jours": 11,
                "location_km": 1232,
                "has_incident": true,
                "incident_details": "La roue de secours a disparu !"
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "01.03.2024",
                "location_jours": 4,
                "location_km": 216,
                "has_incident": true,
                "incident_details": "Déchirure/coupure du siège conducteur en cuir"
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "21.07.2024",
                "location_jours": 10,
                "location_km": 820,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "09.12.2024",
                "location_jours": 4,
                "location_km": 588,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "25.02.2024",
                "location_jours": 11,
                "location_km": 682,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "07.02.2024",
                "location_jours": 11,
                "location_km": 1056,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "05.10.2024",
                "location_jours": 6,
                "location_km": 798,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "06.01.2024",
                "location_jours": 15,
                "location_km": 675,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "23.12.2024",
                "location_jours": 10,
                "location_km": 1080,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "29.07.2024",
                "location_jours": 5,
                "location_km": 500,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "11.09.2024",
                "location_jours": 11,
                "location_km": 770,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "27.09.2024",
                "location_jours": 14,
                "location_km": 1456,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "09.10.2024",
                "location_jours": 10,
                "location_km": 320,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "02.07.2024",
                "location_jours": 11,
                "location_km": 528,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "08.10.2024",
                "location_jours": 10,
                "location_km": 1030,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "11.07.2024",
                "location_jours": 7,
                "location_km": 560,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "11.01.2024",
                "location_jours": 3,
                "location_km": 429,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "14.07.2024",
                "location_jours": 1,
                "location_km": 49,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-66AH71",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "02.09.2024",
                "location_jours": 9,
                "location_km": 1125,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "21.09.2024",
                "location_jours": 9,
                "location_km": 594,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "15.01.2024",
                "location_jours": 6,
                "location_km": 582,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "21.09.2024",
                "location_jours": 3,
                "location_km": 306,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "05.12.2024",
                "location_jours": 6,
                "location_km": 606,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "29.08.2024",
                "location_jours": 12,
                "location_km": 1296,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "16.05.2024",
                "location_jours": 7,
                "location_km": 1043,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "17.09.2024",
                "location_jours": 12,
                "location_km": 696,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "28.02.2024",
                "location_jours": 1,
                "location_km": 127,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "20.09.2024",
                "location_jours": 11,
                "location_km": 935,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "09.04.2024",
                "location_jours": 3,
                "location_km": 225,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "24.03.2024",
                "location_jours": 15,
                "location_km": 960,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "05.06.2024",
                "location_jours": 10,
                "location_km": 1290,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "14.07.2024",
                "location_jours": 11,
                "location_km": 1232,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "17.02.2024",
                "location_jours": 3,
                "location_km": 153,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "18.04.2024",
                "location_jours": 6,
                "location_km": 750,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "20.08.2024",
                "location_jours": 13,
                "location_km": 1703,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "17.01.2024",
                "location_jours": 9,
                "location_km": 432,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "29.09.2024",
                "location_jours": 13,
                "location_km": 1547,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "21.04.2024",
                "location_jours": 7,
                "location_km": 322,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "21.06.2024",
                "location_jours": 6,
                "location_km": 582,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "29.04.2024",
                "location_jours": 3,
                "location_km": 441,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "23.10.2024",
                "location_jours": 3,
                "location_km": 165,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "18.02.2024",
                "location_jours": 2,
                "location_km": 234,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "02.12.2024",
                "location_jours": 6,
                "location_km": 336,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "15.01.2024",
                "location_jours": 2,
                "location_km": 88,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "21.07.2024",
                "location_jours": 10,
                "location_km": 540,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "14.11.2024",
                "location_jours": 9,
                "location_km": 396,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "24.09.2024",
                "location_jours": 11,
                "location_km": 847,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "18.12.2024",
                "location_jours": 13,
                "location_km": 1898,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "08.12.2024",
                "location_jours": 11,
                "location_km": 1144,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "01.09.2024",
                "location_jours": 9,
                "location_km": 468,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "27.10.2024",
                "location_jours": 6,
                "location_km": 456,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "18.01.2024",
                "location_jours": 3,
                "location_km": 426,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "06.03.2024",
                "location_jours": 8,
                "location_km": 664,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "11.03.2024",
                "location_jours": 10,
                "location_km": 1130,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "11.06.2024",
                "location_jours": 12,
                "location_km": 960,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "03.11.2024",
                "location_jours": 11,
                "location_km": 638,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "01.04.2024",
                "location_jours": 15,
                "location_km": 1755,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "25.04.2024",
                "location_jours": 3,
                "location_km": 444,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "13.12.2024",
                "location_jours": 15,
                "location_km": 720,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "14.11.2024",
                "location_jours": 7,
                "location_km": 791,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "17.05.2024",
                "location_jours": 6,
                "location_km": 720,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "30.01.2024",
                "location_jours": 6,
                "location_km": 390,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "24.02.2024",
                "location_jours": 14,
                "location_km": 700,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "02.04.2024",
                "location_jours": 13,
                "location_km": 1313,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "19.11.2024",
                "location_jours": 9,
                "location_km": 1098,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "22.02.2024",
                "location_jours": 6,
                "location_km": 306,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "16.11.2024",
                "location_jours": 3,
                "location_km": 369,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "06.06.2024",
                "location_jours": 15,
                "location_km": 705,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "22.01.2024",
                "location_jours": 15,
                "location_km": 585,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "28.11.2024",
                "location_jours": 6,
                "location_km": 594,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "12.02.2024",
                "location_jours": 13,
                "location_km": 689,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "04.02.2024",
                "location_jours": 4,
                "location_km": 264,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "28.02.2024",
                "location_jours": 12,
                "location_km": 816,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "06.01.2024",
                "location_jours": 12,
                "location_km": 1020,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "28.02.2024",
                "location_jours": 4,
                "location_km": 376,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "17.01.2024",
                "location_jours": 8,
                "location_km": 296,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "05.12.2024",
                "location_jours": 3,
                "location_km": 96,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "19.12.2024",
                "location_jours": 5,
                "location_km": 685,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "23.11.2024",
                "location_jours": 15,
                "location_km": 1230,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "23.12.2024",
                "location_jours": 3,
                "location_km": 396,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "06.08.2024",
                "location_jours": 15,
                "location_km": 930,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "11.02.2024",
                "location_jours": 9,
                "location_km": 927,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "30.08.2024",
                "location_jours": 1,
                "location_km": 77,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "21.08.2024",
                "location_jours": 3,
                "location_km": 150,
                "has_incident": true,
                "incident_details": "Véhicule rendu sans le plein d'essence; Vide;; Rempli 43L"
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "07.02.2024",
                "location_jours": 5,
                "location_km": 220,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "22.05.2024",
                "location_jours": 7,
                "location_km": 749,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "27.10.2024",
                "location_jours": 2,
                "location_km": 198,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "19.12.2024",
                "location_jours": 9,
                "location_km": 936,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "01.04.2024",
                "location_jours": 10,
                "location_km": 1170,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "11.04.2024",
                "location_jours": 6,
                "location_km": 492,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "31.05.2024",
                "location_jours": 6,
                "location_km": 204,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "04.08.2024",
                "location_jours": 12,
                "location_km": 480,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "28.02.2024",
                "location_jours": 5,
                "location_km": 385,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "12.10.2024",
                "location_jours": 13,
                "location_km": 715,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "28.12.2024",
                "location_jours": 6,
                "location_km": 714,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "07.05.2024",
                "location_jours": 8,
                "location_km": 656,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "22.06.2024",
                "location_jours": 7,
                "location_km": 539,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "25.06.2024",
                "location_jours": 7,
                "location_km": 245,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "22.03.2024",
                "location_jours": 15,
                "location_km": 645,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "16.12.2024",
                "location_jours": 15,
                "location_km": 1290,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "28.12.2024",
                "location_jours": 14,
                "location_km": 1414,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "20.08.2024",
                "location_jours": 4,
                "location_km": 196,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "19.01.2024",
                "location_jours": 9,
                "location_km": 279,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "18.02.2024",
                "location_jours": 4,
                "location_km": 336,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "27.04.2024",
                "location_jours": 7,
                "location_km": 497,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "14.01.2024",
                "location_jours": 4,
                "location_km": 352,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "29.07.2024",
                "location_jours": 14,
                "location_km": 1554,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "20.08.2024",
                "location_jours": 15,
                "location_km": 1815,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "09.02.2024",
                "location_jours": 8,
                "location_km": 240,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "30.11.2024",
                "location_jours": 3,
                "location_km": 120,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "17.10.2024",
                "location_jours": 15,
                "location_km": 1245,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "20.08.2024",
                "location_jours": 6,
                "location_km": 234,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "20.02.2024",
                "location_jours": 2,
                "location_km": 260,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "28.02.2024",
                "location_jours": 5,
                "location_km": 425,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "04.09.2024",
                "location_jours": 10,
                "location_km": 670,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "25.05.2024",
                "location_jours": 11,
                "location_km": 704,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "14.06.2024",
                "location_jours": 6,
                "location_km": 318,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "20.12.2024",
                "location_jours": 7,
                "location_km": 546,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "23.06.2024",
                "location_jours": 9,
                "location_km": 1089,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "15.01.2024",
                "location_jours": 14,
                "location_km": 434,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "17.10.2024",
                "location_jours": 11,
                "location_km": 990,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "27.10.2024",
                "location_jours": 8,
                "location_km": 432,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "29.04.2024",
                "location_jours": 12,
                "location_km": 420,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "21.01.2024",
                "location_jours": 7,
                "location_km": 546,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "14.07.2024",
                "location_jours": 5,
                "location_km": 395,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "27.08.2024",
                "location_jours": 11,
                "location_km": 759,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "16.11.2024",
                "location_jours": 5,
                "location_km": 380,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "31.07.2024",
                "location_jours": 1,
                "location_km": 135,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "04.11.2024",
                "location_jours": 14,
                "location_km": 658,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "19.06.2024",
                "location_jours": 12,
                "location_km": 900,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "03.05.2024",
                "location_jours": 6,
                "location_km": 864,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "30.10.2024",
                "location_jours": 7,
                "location_km": 371,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "30.10.2024",
                "location_jours": 10,
                "location_km": 1000,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "08.10.2024",
                "location_jours": 10,
                "location_km": 750,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "29.12.2024",
                "location_jours": 6,
                "location_km": 696,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "03.08.2024",
                "location_jours": 13,
                "location_km": 1040,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "29.08.2024",
                "location_jours": 14,
                "location_km": 1568,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "27.04.2024",
                "location_jours": 1,
                "location_km": 75,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "26.12.2024",
                "location_jours": 11,
                "location_km": 1573,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "15.05.2024",
                "location_jours": 14,
                "location_km": 434,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "15.06.2024",
                "location_jours": 9,
                "location_km": 1233,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "04.10.2024",
                "location_jours": 14,
                "location_km": 1932,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "12.11.2024",
                "location_jours": 10,
                "location_km": 400,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "08.08.2024",
                "location_jours": 7,
                "location_km": 777,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "11.01.2024",
                "location_jours": 15,
                "location_km": 1440,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "17.09.2024",
                "location_jours": 8,
                "location_km": 1160,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "01.12.2024",
                "location_jours": 7,
                "location_km": 973,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "08.01.2024",
                "location_jours": 1,
                "location_km": 98,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "13.06.2024",
                "location_jours": 14,
                "location_km": 1932,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "26.07.2024",
                "location_jours": 9,
                "location_km": 1071,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "16.07.2024",
                "location_jours": 6,
                "location_km": 594,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "22.12.2024",
                "location_jours": 11,
                "location_km": 418,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "16.12.2024",
                "location_jours": 9,
                "location_km": 1035,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "25.10.2024",
                "location_jours": 13,
                "location_km": 1183,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "24.03.2024",
                "location_jours": 2,
                "location_km": 116,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "27.09.2024",
                "location_jours": 7,
                "location_km": 973,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "06.02.2024",
                "location_jours": 7,
                "location_km": 322,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "31.01.2024",
                "location_jours": 3,
                "location_km": 267,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "17.01.2024",
                "location_jours": 9,
                "location_km": 1089,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "05.03.2024",
                "location_jours": 13,
                "location_km": 1430,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "13.12.2024",
                "location_jours": 3,
                "location_km": 90,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "12.10.2024",
                "location_jours": 10,
                "location_km": 1470,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "13.09.2024",
                "location_jours": 1,
                "location_km": 74,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "02.04.2024",
                "location_jours": 6,
                "location_km": 816,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "16.09.2024",
                "location_jours": 13,
                "location_km": 1833,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "16.02.2024",
                "location_jours": 4,
                "location_km": 248,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "04.02.2024",
                "location_jours": 4,
                "location_km": 556,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "14.09.2024",
                "location_jours": 14,
                "location_km": 1022,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "06.02.2024",
                "location_jours": 9,
                "location_km": 1017,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "30.11.2024",
                "location_jours": 10,
                "location_km": 550,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "06.01.2024",
                "location_jours": 11,
                "location_km": 605,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "25.09.2024",
                "location_jours": 4,
                "location_km": 528,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "29.05.2024",
                "location_jours": 5,
                "location_km": 370,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "16.04.2024",
                "location_jours": 12,
                "location_km": 408,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "12.07.2024",
                "location_jours": 12,
                "location_km": 1476,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "04.02.2024",
                "location_jours": 5,
                "location_km": 275,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "15.02.2024",
                "location_jours": 15,
                "location_km": 885,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "13.03.2024",
                "location_jours": 7,
                "location_km": 784,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "05.10.2024",
                "location_jours": 4,
                "location_km": 284,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "22.06.2024",
                "location_jours": 13,
                "location_km": 754,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "20.10.2024",
                "location_jours": 7,
                "location_km": 819,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "10.10.2024",
                "location_jours": 13,
                "location_km": 1417,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "22.03.2024",
                "location_jours": 15,
                "location_km": 615,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "11.07.2024",
                "location_jours": 10,
                "location_km": 1090,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "04.07.2024",
                "location_jours": 10,
                "location_km": 410,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "14.09.2024",
                "location_jours": 6,
                "location_km": 504,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "15.11.2024",
                "location_jours": 5,
                "location_km": 685,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "02.04.2024",
                "location_jours": 13,
                "location_km": 1703,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "05.08.2024",
                "location_jours": 11,
                "location_km": 1507,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "25.09.2024",
                "location_jours": 15,
                "location_km": 630,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "22.09.2024",
                "location_jours": 4,
                "location_km": 160,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "24.03.2024",
                "location_jours": 8,
                "location_km": 1104,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "19.04.2024",
                "location_jours": 7,
                "location_km": 777,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "08.02.2024",
                "location_jours": 7,
                "location_km": 560,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "29.02.2024",
                "location_jours": 5,
                "location_km": 220,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "18.08.2024",
                "location_jours": 15,
                "location_km": 690,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "19.08.2024",
                "location_jours": 11,
                "location_km": 737,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "14.04.2024",
                "location_jours": 10,
                "location_km": 700,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "29.11.2024",
                "location_jours": 1,
                "location_km": 68,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "25.04.2024",
                "location_jours": 14,
                "location_km": 1960,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "13.07.2024",
                "location_jours": 11,
                "location_km": 1606,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "16.08.2024",
                "location_jours": 4,
                "location_km": 456,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "07.11.2024",
                "location_jours": 11,
                "location_km": 847,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "27.04.2024",
                "location_jours": 14,
                "location_km": 966,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "29.01.2024",
                "location_jours": 1,
                "location_km": 60,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "16.07.2024",
                "location_jours": 7,
                "location_km": 987,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "12.10.2024",
                "location_jours": 2,
                "location_km": 150,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "26.05.2024",
                "location_jours": 10,
                "location_km": 1070,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "04.06.2024",
                "location_jours": 14,
                "location_km": 644,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "28.11.2024",
                "location_jours": 12,
                "location_km": 1560,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "09.11.2024",
                "location_jours": 15,
                "location_km": 1515,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "07.01.2024",
                "location_jours": 9,
                "location_km": 1008,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "02.04.2024",
                "location_jours": 3,
                "location_km": 351,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "29.10.2024",
                "location_jours": 12,
                "location_km": 816,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "16.10.2024",
                "location_jours": 11,
                "location_km": 1111,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "10.12.2024",
                "location_jours": 2,
                "location_km": 290,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "07.05.2024",
                "location_jours": 11,
                "location_km": 594,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "09.08.2024",
                "location_jours": 12,
                "location_km": 1200,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "05.07.2024",
                "location_jours": 6,
                "location_km": 648,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "28.05.2024",
                "location_jours": 8,
                "location_km": 408,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "18.02.2024",
                "location_jours": 13,
                "location_km": 1456,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "28.03.2024",
                "location_jours": 2,
                "location_km": 116,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "27.09.2024",
                "location_jours": 15,
                "location_km": 2070,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "27.01.2024",
                "location_jours": 8,
                "location_km": 672,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "10.04.2024",
                "location_jours": 13,
                "location_km": 1885,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "08.05.2024",
                "location_jours": 5,
                "location_km": 665,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "29.02.2024",
                "location_jours": 1,
                "location_km": 98,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "04.08.2024",
                "location_jours": 4,
                "location_km": 424,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "17.02.2024",
                "location_jours": 6,
                "location_km": 738,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "10.01.2024",
                "location_jours": 5,
                "location_km": 330,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "10.01.2024",
                "location_jours": 9,
                "location_km": 279,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "01.04.2024",
                "location_jours": 1,
                "location_km": 60,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "03.10.2024",
                "location_jours": 2,
                "location_km": 232,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "12.10.2024",
                "location_jours": 7,
                "location_km": 924,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "07.11.2024",
                "location_jours": 5,
                "location_km": 660,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "25.01.2024",
                "location_jours": 5,
                "location_km": 350,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "26.12.2024",
                "location_jours": 4,
                "location_km": 148,
                "has_incident": true,
                "incident_details": "Pare-choc avant légèrement enfoncé; Plaque avant perdue"
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "30.09.2024",
                "location_jours": 4,
                "location_km": 224,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "03.07.2024",
                "location_jours": 6,
                "location_km": 756,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "01.05.2024",
                "location_jours": 11,
                "location_km": 341,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "28.05.2024",
                "location_jours": 3,
                "location_km": 441,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "03.03.2024",
                "location_jours": 7,
                "location_km": 392,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "25.09.2024",
                "location_jours": 2,
                "location_km": 66,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "31.07.2024",
                "location_jours": 8,
                "location_km": 864,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "17.02.2024",
                "location_jours": 8,
                "location_km": 816,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "05.07.2024",
                "location_jours": 5,
                "location_km": 255,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "19.10.2024",
                "location_jours": 5,
                "location_km": 190,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "05.10.2024",
                "location_jours": 12,
                "location_km": 744,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "16.03.2024",
                "location_jours": 8,
                "location_km": 296,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-254B6A",
                "client_nom": "Terrieur",
                "client_prenom": "Alex",
                "client_date_naissance": "06.03.1972",
                "client_age_ans": 53,
                "client_age_str": "53 ans, 3 mois, 18 jours"
            }
        },
        {
            "location": {
                "location_date": "24.04.2024",
                "location_jours": 2,
                "location_km": 170,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "16.01.2024",
                "location_jours": 6,
                "location_km": 414,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "21.08.2024",
                "location_jours": 3,
                "location_km": 156,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "23.04.2024",
                "location_jours": 15,
                "location_km": 2010,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-326ED3",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Volvo XC40",
                "vehicule_prix_par_jour": 212,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "03.11.2024",
                "location_jours": 5,
                "location_km": 710,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "18.09.2024",
                "location_jours": 12,
                "location_km": 1224,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "04.09.2024",
                "location_jours": 2,
                "location_km": 164,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "10.11.2024",
                "location_jours": 7,
                "location_km": 497,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "11.06.2024",
                "location_jours": 13,
                "location_km": 1248,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "19.09.2024",
                "location_jours": 10,
                "location_km": 1170,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "27.05.2024",
                "location_jours": 3,
                "location_km": 357,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2AE6C2",
                "client_nom": "Haroni",
                "client_prenom": "Mac",
                "client_date_naissance": "23.03.1967",
                "client_age_ans": 58,
                "client_age_str": "58 ans, 3 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "12.05.2024",
                "location_jours": 10,
                "location_km": 980,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "01.01.2024",
                "location_jours": 10,
                "location_km": 340,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "13.02.2024",
                "location_jours": 3,
                "location_km": 120,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "19.09.2024",
                "location_jours": 3,
                "location_km": 432,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "10.03.2024",
                "location_jours": 9,
                "location_km": 711,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "11.08.2024",
                "location_jours": 4,
                "location_km": 208,
                "has_incident": true,
                "incident_details": "Véhicule rendu sans le plein d'essence; Reste 3/4; Rempli 12L"
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "21.03.2024",
                "location_jours": 15,
                "location_km": 975,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "01.05.2024",
                "location_jours": 8,
                "location_km": 416,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "15.06.2024",
                "location_jours": 2,
                "location_km": 108,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-0CAA84",
                "client_nom": "d'Œuf",
                "client_prenom": "John",
                "client_date_naissance": "10.07.1986",
                "client_age_ans": 38,
                "client_age_str": "38 ans, 11 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "24.01.2024",
                "location_jours": 8,
                "location_km": 1104,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "10.06.2024",
                "location_jours": 11,
                "location_km": 1034,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "08.04.2024",
                "location_jours": 15,
                "location_km": 450,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "06.04.2024",
                "location_jours": 14,
                "location_km": 658,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "14.10.2024",
                "location_jours": 8,
                "location_km": 568,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32BECD",
                "client_nom": "Tariste",
                "client_prenom": "Guy",
                "client_date_naissance": "23.07.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 11 mois, 1 jours"
            }
        },
        {
            "location": {
                "location_date": "30.12.2024",
                "location_jours": 10,
                "location_km": 790,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "10.03.2024",
                "location_jours": 5,
                "location_km": 345,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "29.05.2024",
                "location_jours": 7,
                "location_km": 308,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "10.06.2024",
                "location_jours": 15,
                "location_km": 645,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "06.12.2024",
                "location_jours": 11,
                "location_km": 352,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-16B127",
                "vehicule_type": "Grande",
                "vehicule_nom": "Volvo XC60",
                "vehicule_prix_par_jour": 236,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "27.08.2024",
                "location_jours": 7,
                "location_km": 784,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "20.06.2024",
                "location_jours": 4,
                "location_km": 404,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "17.10.2024",
                "location_jours": 14,
                "location_km": 448,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "07.03.2024",
                "location_jours": 8,
                "location_km": 792,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1BB637",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Ford Ka",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-22AC60",
                "client_nom": "Ternet",
                "client_prenom": "Alain",
                "client_date_naissance": "13.02.1964",
                "client_age_ans": 61,
                "client_age_str": "61 ans, 4 mois, 11 jours"
            }
        },
        {
            "location": {
                "location_date": "12.10.2024",
                "location_jours": 5,
                "location_km": 460,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-162820",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Nissan Juke",
                "vehicule_prix_par_jour": 196,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-3B744D",
                "client_nom": "Friedli",
                "client_prenom": "Paul",
                "client_date_naissance": "15.05.1985",
                "client_age_ans": 40,
                "client_age_str": "40 ans, 1 mois, 9 jours"
            }
        },
        {
            "location": {
                "location_date": "13.12.2024",
                "location_jours": 2,
                "location_km": 164,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "01.02.2024",
                "location_jours": 9,
                "location_km": 369,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-1B7400",
                "client_nom": "Rique",
                "client_prenom": "Théo",
                "client_date_naissance": "04.07.1978",
                "client_age_ans": 46,
                "client_age_str": "46 ans, 11 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "06.03.2024",
                "location_jours": 12,
                "location_km": 1632,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-30349B",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Seat Ibiza",
                "vehicule_prix_par_jour": 176,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "07.12.2024",
                "location_jours": 5,
                "location_km": 570,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-39EC0D",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz C-Klasse",
                "vehicule_prix_par_jour": 256,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-376874",
                "client_nom": "Célère",
                "client_prenom": "Jack",
                "client_date_naissance": "10.05.1998",
                "client_age_ans": 27,
                "client_age_str": "27 ans, 1 mois, 14 jours"
            }
        },
        {
            "location": {
                "location_date": "16.04.2024",
                "location_jours": 14,
                "location_km": 546,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-0AD75A",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Renault Espace",
                "vehicule_prix_par_jour": 288,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "03.02.2024",
                "location_jours": 8,
                "location_km": 352,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-15E125",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Seat Ateca",
                "vehicule_prix_par_jour": 204,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-322DCB",
                "client_nom": "Fice",
                "client_prenom": "Eddy",
                "client_date_naissance": "25.02.2000",
                "client_age_ans": 25,
                "client_age_str": "25 ans, 3 mois, 30 jours"
            }
        },
        {
            "location": {
                "location_date": "17.08.2024",
                "location_jours": 5,
                "location_km": 555,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "16.01.2024",
                "location_jours": 8,
                "location_km": 256,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "14.09.2024",
                "location_jours": 15,
                "location_km": 780,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2887F6",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Ford Kuga",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        },
        {
            "location": {
                "location_date": "26.05.2024",
                "location_jours": 12,
                "location_km": 1356,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2EC303",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Opel Astra",
                "vehicule_prix_par_jour": 208,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-2A0D22",
                "client_nom": "Terrieur",
                "client_prenom": "Alain",
                "client_date_naissance": "09.12.1990",
                "client_age_ans": 34,
                "client_age_str": "34 ans, 6 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "19.11.2024",
                "location_jours": 9,
                "location_km": 1062,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-21B869",
                "vehicule_type": "Petite citadine",
                "vehicule_nom": "Kia Picanto",
                "vehicule_prix_par_jour": 152,
                "vehicule_prix_par_km": 0.25
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "02.10.2024",
                "location_jours": 6,
                "location_km": 810,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-2A341E",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Peugeot 308 SW",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-32CE80",
                "client_nom": "Galley",
                "client_prenom": "Philippe",
                "client_date_naissance": "14.08.1994",
                "client_age_ans": 30,
                "client_age_str": "30 ans, 10 mois, 10 jours"
            }
        },
        {
            "location": {
                "location_date": "17.03.2024",
                "location_jours": 5,
                "location_km": 740,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-1AAEA0",
                "vehicule_type": "Grande",
                "vehicule_nom": "Mercedes-Benz E-Klasse T-Modell 4x4",
                "vehicule_prix_par_jour": 280,
                "vehicule_prix_par_km": 0.8
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "15.06.2024",
                "location_jours": 6,
                "location_km": 732,
                "has_incident": true,
                "incident_details": "La 2ème clé fournie n'a pas été rendue"
            },
            "vehicule": {
                "vehicule_id": "IDV-10322C",
                "vehicule_type": "Moyenne",
                "vehicule_nom": "Mazda 3",
                "vehicule_prix_par_jour": 200,
                "vehicule_prix_par_km": 0.35
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "22.05.2024",
                "location_jours": 13,
                "location_km": 1326,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-38EAEE",
                "vehicule_type": "Grande",
                "vehicule_nom": "BMW 520d",
                "vehicule_prix_par_jour": 248,
                "vehicule_prix_par_km": 0.7
            },
            "client": {
                "client_id": "IDC-37DBC4",
                "client_nom": "Voyante",
                "client_prenom": "Claire",
                "client_date_naissance": "09.05.2005",
                "client_age_ans": 20,
                "client_age_str": "20 ans, 1 mois, 15 jours"
            }
        },
        {
            "location": {
                "location_date": "29.01.2024",
                "location_jours": 14,
                "location_km": 1792,
                "has_incident": false,
                "incident_details": null
            },
            "vehicule": {
                "vehicule_id": "IDV-250E8B",
                "vehicule_type": "Familiale",
                "vehicule_nom": "Mercedes-Benz Vito Tourer 4x4",
                "vehicule_prix_par_jour": 336,
                "vehicule_prix_par_km": 0.55
            },
            "client": {
                "client_id": "IDC-2FE7C9",
                "client_nom": "Nissens",
                "client_prenom": "Remy",
                "client_date_naissance": "04.05.1961",
                "client_age_ans": 64,
                "client_age_str": "64 ans, 1 mois, 20 jours"
            }
        }
    ]
};
