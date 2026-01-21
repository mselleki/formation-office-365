import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Données des joueurs
const data = [
  ['Nom', 'Prénom', 'Email', 'Téléphone', 'Type', 'Date de naissance', 'Niveau de jeu'],
  ['Martin', 'Claire', 'claire.martin@email.com', '0612345678', 'Joueur', new Date('2010-05-15'), 'Intermédiaire'],
  ['Bernard', 'Luc', 'luc.bernard@email.com', '0623456789', 'Joueur', new Date('2009-08-22'), 'Débutant'],
  ['Dupont', 'Alice', 'alice.dupont@email.com', '0634567890', 'Joueur', new Date('2011-03-10'), 'Avancé'],
  ['Leroy', 'Sophie', 'sophie.leroy@email.com', '0645678901', 'Joueur', new Date('2010-11-05'), 'Intermédiaire'],
  ['Moreau', 'Pierre', 'pierre.moreau@email.com', '0656789012', 'Accompagnant', '', ''],
  ['Petit', 'Marie', 'marie.petit@email.com', '0667890123', 'Joueur', new Date('2009-12-18'), 'Débutant'],
  ['Dubois', 'Jean', 'jean.dubois@email.com', '0678901234', 'Accompagnant', '', ''],
  ['Simon', 'Emma', 'emma.simon@email.com', '0689012345', 'Joueur', new Date('2010-07-30'), 'Intermédiaire'],
  ['Michel', 'Thomas', 'thomas.michel@email.com', '0690123456', 'Joueur', new Date('2011-01-14'), 'Avancé'],
  ['Garcia', 'Lucas', 'lucas.garcia@email.com', '0601234567', 'Joueur', new Date('2010-09-25'), 'Débutant']
];

// Créer un workbook
const wb = XLSX.utils.book_new();

// Créer une feuille avec les données
const ws = XLSX.utils.aoa_to_sheet(data);

// Définir la largeur des colonnes
ws['!cols'] = [
  { wch: 12 }, // Nom
  { wch: 12 }, // Prénom
  { wch: 25 }, // Email
  { wch: 12 }, // Téléphone
  { wch: 12 }, // Type
  { wch: 15 }, // Date de naissance
  { wch: 12 }  // Niveau de jeu
];

// Ajouter la feuille au workbook
XLSX.utils.book_append_sheet(wb, ws, 'Joueurs');

// Écrire le fichier
const outputPath = path.join(__dirname, '../public/templates/Base_Joueurs.xlsx');
XLSX.writeFile(wb, outputPath);

console.log('Fichier Base_Joueurs.xlsx créé avec succès !');