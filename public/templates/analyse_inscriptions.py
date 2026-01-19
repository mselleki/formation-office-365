"""
Script Python pour analyser les inscriptions du Rising Stars Tennis Day
"""

import pandas as pd
from datetime import datetime

# Lire le fichier Excel
print("Lecture du fichier Excel...")
df = pd.read_excel('Base_Joueurs.xlsx')

# Afficher les premières lignes
print("\nPremières lignes du fichier :")
print(df.head())

# Nettoyer les données
print("\nNettoyage des données...")
# Supprimer les doublons
df = df.drop_duplicates()
print(f"Nombre d'inscriptions après suppression des doublons : {len(df)}")

# Vérifier les valeurs manquantes
print("\nValeurs manquantes par colonne :")
print(df.isna().sum())

# Calculer des statistiques
print("\n=== STATISTIQUES ===")
print(f"Nombre total d'inscriptions : {len(df)}")

if 'Type' in df.columns:
    print("\nRépartition par type :")
    print(df['Type'].value_counts())

if 'Date de naissance' in df.columns:
    # Calculer les âges (approximatif)
    df['Date de naissance'] = pd.to_datetime(df['Date de naissance'], errors='coerce')
    today = datetime.now()
    df['Age'] = (today - df['Date de naissance']).dt.days // 365
    print("\nStatistiques d'âge :")
    print(df['Age'].describe())

# Créer un rapport
print("\nGénération du rapport...")
rapport = pd.DataFrame({
    'Métrique': ['Total inscriptions', 'Inscriptions uniques'],
    'Valeur': [len(df), len(df.drop_duplicates())]
})

# Exporter le rapport
rapport.to_excel('Statistiques.xlsx', index=False)
print("Rapport exporté dans Statistiques.xlsx")

print("\nAnalyse terminée !")
