document.addEventListener("DOMContentLoaded", () => {

  // this the site data Object
  
 const siteData = [
   {
     id: "place_darmes",
     name: "Place Darmes",
     serial: 1,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_1",
     name: "Villa intendance",
     serial: 1,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_2",
     name: "Intendance",
     serial: 2,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_3",
     name: "Abri économat",
     serial: 3,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_4",
     name: "Salle de sport",
     serial: 4,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_5",
     name: "Hangar économat",
     serial: 5,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_6",
     name: "Carbet économat/groupe électrogène",
     serial: 6,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_7",
     name: "Logement cadres",
     serial: 7,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_8",
     name: "Logement cadres",
     serial: 8,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_9",
     name: "Logement cadres",
     serial: 9,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_10",
     name: "Logement cadres",
     serial: 10,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_12",
     name: "Sanitaire de la formation CFP",
     serial: 12,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_15",
     name: "Villa",
     serial: 16,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   }, // Note: No 15 in text, using 16 as closest match
   {
     id: "i_16",
     name: "Villa",
     serial: 16,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_18",
     name: "BCC",
     serial: 18,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_19",
     name: "Garage BCC",
     serial: 19,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_20",
     name: "Ecole maternelle",
     serial: 20,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_21",
     name: "Préau école maternelle",
     serial: 21,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_23",
     name: "Transformateur chandel",
     serial: 23,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_24",
     name: "Salle d’honneur",
     serial: 24,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_28",
     name: "Logement MDR",
     serial: 28,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_29",
     name: "Semaine compagnie et salle de cours",
     serial: 29,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_31",
     name: "Logement MDR",
     serial: 31,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_32",
     name: "Logement MDR",
     serial: 32,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_33",
     name: "Logement MDR",
     serial: 33,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_34",
     name: "Sanitaires",
     serial: 34,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_35",
     name: "Logement MDR",
     serial: 35,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_36",
     name: "Logement MDR",
     serial: 36,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_37",
     name: "Sanitaires",
     serial: 37,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_38",
     name: "Station d’épuration",
     serial: 38,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_39",
     name: "Logement MDR",
     serial: 39,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_40",
     name: "Atelier maçonnerie",
     serial: 40,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_41",
     name: "Atelier Électricité",
     serial: 41,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_42",
     name: "Atelier Charpente Bois",
     serial: 42,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_43",
     name: "Gymnase",
     serial: 43,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_44",
     name: "Atelier plomberie",
     serial: 44,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_45",
     name: "Atelier Peinture",
     serial: 45,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_47",
     name: "Atelier Maçonnerie",
     serial: 47,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_48",
     name: "Atelier carreleur",
     serial: 48,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_49",
     name: "Atelier machines outils menuiserie",
     serial: 49,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_50",
     name: "Atelier menuiserie",
     serial: 50,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_51",
     name: "Casernement",
     serial: 51,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_52",
     name: "Magasin CFP + Casernement",
     serial: 52,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_53",
     name: "Stockage gaz",
     serial: 53,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_54",
     name: "Atelier Mécanique auto",
     serial: 54,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_55",
     name: "Atelier AGA",
     serial: 55,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_56",
     name: "Atelier menuiserie",
     serial: 56,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_57",
     name: "Atelier TP",
     serial: 57,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_58",
     name: "Atelier Affutage",
     serial: 58,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_59",
     name: "NTI",
     serial: 59,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_60",
     name: "Déchèterie",
     serial: 60,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_61",
     name: "Hangar NTI",
     serial: 61,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_62",
     name: "Station de distribution de carburant",
     serial: 62,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_63",
     name: "Abri véhicules",
     serial: 63,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_64",
     name: "Aire de lavage",
     serial: 64,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_65",
     name: "Atelier transport",
     serial: 65,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_66",
     name: "PC 1°CFP",
     serial: 66,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_67",
     name: "Service général",
     serial: 67,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_68",
     name: "PC CFPL1",
     serial: 68,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_70",
     name: "Serre",
     serial: 70,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_71",
     name: "SMGAAT",
     serial: 71,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_74",
     name: "Ordinaire",
     serial: 74,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_75",
     name: "Mortuorium",
     serial: 75,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_76",
     name: "Local poubelle ordinaire",
     serial: 76,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_77",
     name: "Carbet du foyer",
     serial: 77,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_78",
     name: "Foyer",
     serial: 78,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_79",
     name: "Enclos gaz ordinaire",
     serial: 79,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_80",
     name: "Salle de cours",
     serial: 80,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_82",
     name: "Transfo DIRISI (FAG)",
     serial: 82,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_83",
     name: "Salle de cours",
     serial: 83,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_84",
     name: "Transformateur de la scierie et PC EM",
     serial: 84,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_86",
     name: "PC EM",
     serial: 86,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_87",
     name: "DTI + Vaguemestre",
     serial: 87,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_88",
     name: "Scierie",
     serial: 88,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_89",
     name: "Magasin scierie (Démoli)",
     serial: 89,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_90",
     name: "Station de traitement d’eau (Démoli)",
     serial: 90,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_91",
     name: "Château d’eau",
     serial: 91,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_92",
     name: "Réserve d’eau brute",
     serial: 92,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_93",
     name: "Abris bus ordinaire",
     serial: 93,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_94",
     name: "Logement cadres",
     serial: 94,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_95",
     name: "Logement cadres",
     serial: 95,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_96",
     name: "Logement cadres",
     serial: 96,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_97",
     name: "Carbet piscine",
     serial: 97,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_99",
     name: "Annexe piscine",
     serial: 99,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_100",
     name: "Mess Hôtel",
     serial: 100,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_101",
     name: "Mess cuisine",
     serial: 101,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_102",
     name: "Carbet chef de corps",
     serial: 102,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_103",
     name: "Grand carbet",
     serial: 103,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_104",
     name: "Court de tennis",
     serial: 104,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_105",
     name: "Logement cadres",
     serial: 105,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_106",
     name: "Logement cadres",
     serial: 106,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_107",
     name: "Logement cadres",
     serial: 107,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_108",
     name: "Annexe infirmerie",
     serial: 108,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_109",
     name: "Halle garderie (secourisme formation)",
     serial: 109,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_110",
     name: "Infirmerie",
     serial: 110,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_111",
     name: "Logement cadres",
     serial: 111,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_112",
     name: "Logement cadres",
     serial: 112,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_113",
     name: "Logement cadres",
     serial: 113,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_114",
     name: "Logement cadres",
     serial: 114,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_115",
     name: "Logement cadres",
     serial: 115,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_116",
     name: "Logement cadres",
     serial: 116,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_117",
     name: "Logement cadres",
     serial: 117,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_118",
     name: "Logement cadres",
     serial: 118,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_119",
     name: "Chapelle",
     serial: 119,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_120",
     name: "Chalet Bois",
     serial: 120,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_121",
     name: "Garage logement cadres",
     serial: 121,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_122",
     name: "Terrain de basket",
     serial: 122,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_123",
     name: "Terrain de hand",
     serial: 123,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_124",
     name: "Terrain de volley",
     serial: 124,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_125",
     name: "Poste de sécurité PSA",
     serial: 125,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_126",
     name: "Club nautique",
     serial: 126,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_127",
     name: "Transformateur Piscine",
     serial: 127,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_128",
     name: "Pas de tir",
     serial: 128,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_130",
     name: "Bibliothèque",
     serial: 130,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_131",
     name: "Abris bus POL LAPEYRE",
     serial: 131,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_134",
     name: "Stade et piste",
     serial: 134,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_136",
     name: "Atelier TP",
     serial: 136,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_138",
     name: "Carbet stagiaire",
     serial: 138,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_139",
     name: "Carbet stagiaire",
     serial: 139,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_140",
     name: "Carbet stagiaire",
     serial: 140,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_141",
     name: "Carbet stagiaire",
     serial: 141,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_142",
     name: "Villa Pagodes n°1 (FAG)",
     serial: 142,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_143",
     name: "Villa Pagodes n°2 (FAG)",
     serial: 143,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_144",
     name: "Villa Pagodes n°3 (FAG)",
     serial: 144,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_145",
     name: "Villa Pagodes n°4 (FAG)",
     serial: 145,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_146",
     name: "Villa Pagodes n°5 (FAG)",
     serial: 146,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_147",
     name: "Villa Pagodes n°6 (FAG)",
     serial: 147,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_148",
     name: "Villa Pagodes n°7 (FAG)",
     serial: 148,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_149",
     name: "Villa Pagodes n°8 (FAG)",
     serial: 149,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_150",
     name: "Villa Pagodes n°9 (FAG)",
     serial: 150,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_151",
     name: "Villa Pagodes n°10 (FAG)",
     serial: 151,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_152",
     name: "Villa Pagodes n°11 (FAG)",
     serial: 152,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_153",
     name: "Villa Pagodes n°12 (FAG)",
     serial: 153,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_154",
     name: "Villa Pagodes n°13",
     serial: 154,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_155",
     name: "Villa Pagodes n°15",
     serial: 155,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_156",
     name: "Villa Pagodes n°17",
     serial: 156,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i157",
     name: "Villa Pagodes n°19",
     serial: 157,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   }, // Note: "i157" in your array, not "i_157"
   {
     id: "i_158",
     name: "Villa Pagodes n°21",
     serial: 158,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_159",
     name: "Villa Pagodes n°23",
     serial: 159,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_160",
     name: "Réserve incendie Pagodes",
     serial: 160,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_161",
     name: "BCC 10 places",
     serial: 161,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_162",
     name: "CIE",
     serial: 162,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_163",
     name: "Abri à PSA",
     serial: 164,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_164",
     name: "Abri à PSA",
     serial: 164,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_165",
     name: "Aire de jeux des Pagodes",
     serial: 165,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_166",
     name: "Aire de jeux de la piscine",
     serial: 166,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_167",
     name: "Abri poubelles 1 de la cité Marchand",
     serial: 167,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_168",
     name: "Garage du logt. Cadres 115",
     serial: 168,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_169",
     name: "Garage du logt. Cadres 113",
     serial: 169,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_171",
     name: "Abri de l’infirmerie",
     serial: 171,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_173",
     name: "Cimetière des bagnards",
     serial: 173,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_174",
     name: "Bâtiment stockage formation",
     serial: 174,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_175",
     name: "Abri poubelles de la cité Pol Lapeyre",
     serial: 175,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_176",
     name: "Garage de la villa du chef de corps",
     serial: 176,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_177",
     name: "Garage D du logt cadres 096",
     serial: 177,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_178",
     name: "Garage D du logt cadres 096",
     serial: 178,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_179",
     name: "Local stockage casernement",
     serial: 179,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_180",
     name: "Piscine de la villa du chef de corps",
     serial: 180,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_181",
     name: "Abri poubelles de la zone hébergement des stagiaires",
     serial: 181,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_202",
     name: "Logement FMI",
     serial: 202,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_203",
     name: "Logement FMI",
     serial: 203,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_208",
     name: "Logement FMI",
     serial: 208,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_213",
     name: "Poste de sécurité",
     serial: 213,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_220",
     name: "Carbet FMI",
     serial: 220,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_221",
     name: "Carbet FMI",
     serial: 221,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_222",
     name: "Carbet FMI",
     serial: 222,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_223",
     name: "Sanitaire",
     serial: 223,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_224",
     name: "Locaux de stockage",
     serial: 224,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_225",
     name: "Bâtiment FMI",
     serial: 225,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_237",
     name: "Aire aménagée",
     serial: 237,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_238",
     name: "PC CFP 3",
     serial: 238,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "i_239",
     name: "Carbet VT/VS",
     serial: 239,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
   {
     id: "rip",
     name: "Cimetière des Relégués de St-Jean du Maroni",
     serial: 239,
     folder_link:
       "https://drive.google.com/drive/folders/1rWKDTIc7C8sC1XVLoyPqnIRMkIbcvE3i?usp=sharing",
   },
 ];
 
 const lotId = [
   "i_60",

   "i_88",
   "i_89",

   "i_84",
   "i_83",

   "i_86",
   "i_87",

   "hta",

   "i_178",
   "i_177",
   "i_95",
   "i_94",
   "i_173",
   "i_90",
   "i_91",
   "i_127",
   "i_166",
   "i_237",
   "i_102",
   "i_168",
   "i_100",
   "i_104",
   "i_105",
   "i_167",
   "i_106",
   "i_107",
   "i_101",
   "i_99",
   "i_97",
   "i_103",
   "i_92",

   "i_96",
   "i_80",
   "i_162",
   "i_61",
   "i_59",
   "i_57",
   "i_174",
   "i_179",
   "i_53",
   "i_49",
   "i_41",
   "i_39",
   "i_141",
   "i_140",
   "i_38",
   "i_139",
   "i_7",
   "i_9",
   "i_131",
   "i_175",
   "i_164",
   "i_125",
   "i_128",
   "i_8",
   "i_10",
   "i_34",
   "i_138",
   "i_6",

   "i_5",
   "i_2",
   "i_1",
   "i_3",
   "i_143",
   "i_142",
   "i_145",
   "i_144",
   "i_147",
   "i_146",
   "i_149",
   "i_148",
   "i_151",
   "i_150",
   "i_153",
   "i_152",
   "i_165",
   "i_159",
   "i_158",
   "i157",
   "i_155",
   "i_156",
   "i_154",
   "i_4",
   "i_44",
   "i_12",
   "i_45",
   "i_66",
   "i_65",
   "i_62",
   "i_64",
   "i_63",
   "i_122",
   "i_123",
   "i_78",

   "i_77",
   "i_124",
   "i_68",
   "i_79",
   "i_70",

   "fag_2",
   "i_21",
   "i_20",
   "i_93",
   "i_76",
   "i_79-2",
   "i_74",
   "i_71",
   "fag",
   "i_82",
   "i_67",

   "i_23",
   "i_181",
   "i_24",
   "i_238",
   "i_29",
   "i_239",
   "i_37",
   "i_36",
   "i_35",
   "i_32",
   "i_31",
   "i_28",
   "i_3-2",
   "i_33",
   "i_45-2",
   "i_43",
   "i_42",
   "i_40",
   "i_47",
   "i_48",
   "i_50",
   "i_52",
   "i_51",
   "i_56",

   "i_55",
   "i_58",
   "i_136",
   "i_54",

   "i_208",
   "i_213",
   "i_221",
   "i_222",
   "i_220",
   "i_202",
   "i_225",
   "i_224",
   "i_223",
   "i_203",
   "i_121",
   "i_170",

   "i_110",
   "i_110-2",
   "i_111",
   "i_112",
   "i_176",
   "i_180",
   "i_19",
   "i_75",
   "i_18",
   "i_161",

   "i_15",

   "i_16",
   "i_109",
   "i_108",

   "i_171",
   "i_130",
   "i_113",
   "i_114",
   "i_169",
   "i_120",
   "i_117",

   "i_216",

   "i_118",
   "i_116",
   "i_115",

   "i_119",

   "i_126",

   "place_darmes",
   "i_160",
   "i_134",
   "hele_station",
   "rip",
 ];

const ikrsvg = document.getElementById("ikr_svg");
const tooltip = document.getElementById("tooltip");
const detailPopup = document.getElementById("ikr_rv_detail");
const svgContainer = document.querySelector(".child_container");
let currentScale = 1.8;
let panning = false;
let startX, startY, translateX = 0, translateY = 0;
let mouseMoved = false; // Track if mouse moved during mousedown
let startXClick, startYClick; // Track initial click position
let lastTap = 0;

console.log(document.getElementById("i_134"));

// Function to get all child node IDs
function getAllChildNodeIds(svgElement) {
  const childNodeIds = [];

  // Iterate through all child elements of the SVG
  for (const childElement of svgElement.children) {
    // Check if the child element has an ID attribute
    if (childElement.id) {
      childNodeIds.push(childElement.id);
    }

    // Recursively process child elements
    childNodeIds.push(...getAllChildNodeIds(childElement));
  }

  return childNodeIds;
}

console.log(getAllChildNodeIds(ikrsvg));

const scaleToTranslation = {
  1.2: { maxTranslateX: -151, maxTranslateY: -98 },
  1.4: { maxTranslateX: -302, maxTranslateY: -189.75 },
  1.6: { maxTranslateX: -453, maxTranslateY: -287 },
  1.8: { maxTranslateX: -603, maxTranslateY: -383 },
  2.0: { maxTranslateX: -803, maxTranslateY: -483 },
};

// Function to position the popup dynamically
function updatePopupPosition(target) {
  if (detailPopup.style.display !== "block") return; // Only update if visible

  const targetBBox = target.getBoundingClientRect();
  const containerBBox = svgContainer.getBoundingClientRect();
  const popupBBox = detailPopup.getBoundingClientRect();

  const offset = 10;

  const relativeLeft = targetBBox.left - containerBBox.left;
  const relativeTop = targetBBox.top - containerBBox.top;
  const relativeRight = containerBBox.right - targetBBox.right;
  const relativeBottom = containerBBox.bottom - targetBBox.bottom;

  let popupX = targetBBox.left + targetBBox.width / 2 - containerBBox.left;
  let popupY = targetBBox.top - offset - popupBBox.height - containerBBox.top;
  let position = "top";

  if (
    relativeTop < popupBBox.height + offset &&
    relativeBottom > popupBBox.height + offset
  ) {
    popupY = targetBBox.bottom + offset - containerBBox.top;
    position = "bottom";
  } else if (
    relativeBottom < popupBBox.height + offset &&
    relativeTop > popupBBox.height + offset
  ) {
    popupY = targetBBox.top - offset - popupBBox.height - containerBBox.top;
    position = "top";
  }

  if (
    relativeRight < popupBBox.width / 2 + offset &&
    relativeLeft > popupBBox.width / 2 + offset
  ) {
    popupX = targetBBox.left - offset - popupBBox.width - containerBBox.left;
    position = position === "top" ? "top-left" : "bottom-left";
  } else if (
    relativeLeft < popupBBox.width / 2 + offset &&
    relativeRight > popupBBox.width / 2 + offset
  ) {
    popupX = targetBBox.right + offset - containerBBox.left;
    position = position === "top" ? "top-right" : "bottom-right";
  }

  if (position === "top" || position === "bottom") {
    popupX -= popupBBox.width / 2;
  }

  popupX = Math.max(0, Math.min(popupX, containerBBox.width - popupBBox.width));
  popupY = Math.max(0, Math.min(popupY, containerBBox.height - popupBBox.height));

  detailPopup.style.left = `${popupX}px`;
  detailPopup.style.top = `${popupY}px`;
  console.log(`Popup Position Updated: ${position}, X: ${popupX}, Y: ${popupY}`);
}

function ikrZoom(ikrsvg) {
  let step = 0.2;

  const zoomControls = document.createElement("div");
  zoomControls.className = "zoom-controls";
  zoomControls.innerHTML = `
    <button id="zoom_in">+</button>
    <button id="zoom_out">-</button>
    <button id="reset">Reset</button>
  `;
  ikrsvg.parentElement.appendChild(zoomControls);

  function applyTransform() {
    const maxTranslateX = (ikrsvg.clientWidth * (currentScale - 1)) / 2;
    const maxTranslateY = (ikrsvg.clientHeight * (currentScale - 1)) / 2;

    translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
    translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));

    ikrsvg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
  }

  document.getElementById("zoom_in").addEventListener("click", () => {
    currentScale = Math.min(currentScale + step, 3.6);
    applyTransform();
  });

  document.getElementById("zoom_out").addEventListener("click", () => {
    currentScale = Math.max(currentScale - step, 1);
    applyTransform();
  });

  document.getElementById("reset").addEventListener("click", () => {
    currentScale = 1;
    translateX = 0;
    translateY = 0;
    applyTransform();
  });

  function startPan(e) {
    panning = true;
    mouseMoved = false; // Reset mouse movement tracking
    const event = e.touches ? e.touches[0] : e;
    startX = event.clientX - translateX;
    startY = event.clientY - translateY;
    startXClick = event.clientX; // Store click start position
    startYClick = event.clientY;
    ikrsvg.style.cursor = "pointer";
    e.preventDefault();
  }

  function movePan(e) {
    if (!panning) return;
    const event = e.touches ? e.touches[0] : e;
    translateX = event.clientX - startX;
    translateY = event.clientY - startY;

    // Check if mouse moved significantly (e.g., more than 5 pixels)
    const deltaX = Math.abs(event.clientX - startXClick);
    const deltaY = Math.abs(event.clientY - startYClick);
    if (deltaX > 5 || deltaY > 5) {
      mouseMoved = true; // Mark as moved if threshold exceeded
    }

    applyTransform();
    e.preventDefault();
  }

  function endPan() {
    panning = false;
    ikrsvg.style.cursor = "pointer";
  }

  ikrsvg.addEventListener("mousedown", startPan);
  window.addEventListener("mousemove", movePan);
  window.addEventListener("mouseup", endPan);

  ikrsvg.addEventListener("touchstart", startPan);
  window.addEventListener("touchmove", movePan);
  window.addEventListener("touchend", endPan);
}

lotId.forEach((plot) => {
  const plotElement = ikrsvg.getElementById(`${plot}`);
  let timeout;

  plotElement.addEventListener("mousemove", (ev) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const target = ev.target;
      if (target.matches("circle, rect, path, polygon")) {
        const targetBBox = target.getBoundingClientRect();
        const containerBBox = svgContainer.getBoundingClientRect();
        const tooltipBBox = tooltip.getBoundingClientRect();

        const offset = 10;

        let tooltipX = targetBBox.left + targetBBox.width / 2 - containerBBox.left;
        let tooltipY = targetBBox.top - offset - tooltipBBox.height - containerBBox.top;
        let position = "top";

        if (targetBBox.top < tooltipBBox.height + offset) {
          tooltipY = targetBBox.bottom + offset - containerBBox.top;
          position = "bottom";
        }

        tooltipX = Math.max(0, Math.min(tooltipX, containerBBox.width - tooltipBBox.width));
        tooltipY = Math.max(0, Math.min(tooltipY, containerBBox.height - tooltipBBox.height));

        siteData.forEach((item) => {
          if (target.id === item.id) {
            if (item.id == "place_darmes") {
              plotId.innerHTML = "" + item.name;
            } else if (item.id == "rip") {
              plotId.style.display = "none";
            } else {
              plotId.innerHTML = "Batiment " + item.serial;
            }
            detail_des.innerHTML = `${item.name}`;
          }
        });

        tooltip.style.left = `${tooltipX}px`;
        tooltip.style.top = `${tooltipY}px`;
        tooltip.style.display = "block";
      }
    }, 10);
  });

  plotElement.addEventListener("mouseout", () => {
    clearTimeout(timeout);
    tooltip.style.display = "none";
  });

  plotElement.addEventListener("click", (ev) => {
    // Only trigger click if mouse didn't move significantly
    if (!mouseMoved && !panning) {
      ev.stopPropagation();
      const target = ev.target;

      siteData.forEach((item) => {
        if (target.id == item.id) {
          openViewer(item.id); // Open the viewer only on a valid click
        }
      });

      updatePopupPosition(target);
    }
  });
});

function openViewer(id) {
  window.open(`viewer.html?id=${id}`, '_blank');
}

// Hide popup when clicking outside
window.addEventListener("click", (ev) => {
  const isLotClicked = lotId.some((lot) => {
    const lotElement = document.getElementById(lot.replace(/\s+/g, "_"));
    return lotElement && lotElement.contains(ev.target);
  });

  if (!detailPopup.contains(ev.target) && !isLotClicked) {
    console.log("Hiding popup");
    detailPopup.style.opacity = "0";
  }
});

// Ensure SVG fills the screen without overflow
ikrsvg.style.width = "100%";
ikrsvg.style.height = "100%";
ikrsvg.style.overflow = "hidden";

ikrZoom(ikrsvg);
 // domcontent load
});
