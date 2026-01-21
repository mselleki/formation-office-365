export type EpisodeStatus = 'not_started' | 'in_progress' | 'completed';

export type Tool = 
  | 'OneDrive' 
  | 'Teams' 
  | 'Excel' 
  | 'Word' 
  | 'PowerPoint' 
  | 'Outlook' 
  | 'Forms'
  | 'IA'
  | 'Macros'
  | 'Python';

export interface Episode {
  id: number;
  title: string;
  context: string;
  tools: Tool[];
  estimatedDuration: string;
  objectives: string[];
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
  expectedResults: string[];
  commonErrors: {
    error: string;
    solution: string;
  }[];
  files?: {
    name: string;
    path: string;
    type: 'download' | 'copy';
  }[];
  hints?: string[];
  trainerNotes?: string;
}

export const episodes: Episode[] = [
  {
    id: 1,
    title: 'Création du QG du projet',
    context: 'Pour organiser efficacement le Rising Stars Tennis Day, nous devons créer un espace de travail centralisé où toutes les informations du projet seront stockées et accessibles à l\'équipe.',
    tools: ['OneDrive', 'Teams'],
    estimatedDuration: '30 min',
    objectives: [
      'Créer une structure de dossiers organisée dans OneDrive',
      'Configurer un espace Teams dédié au projet'
    ],
    steps: [
      {
        number: 1,
        title: 'Créer le dossier principal',
        description: 'Dans OneDrive, créez un nouveau dossier nommé "Rising_Stars_Tennis_Day". Organisez-le avec des sous-dossiers : "Documents", "Planning", "Communication", "Fichiers_finaux".'
      },
      {
        number: 2,
        title: 'Configurer les permissions OneDrive',
        description: 'Dans OneDrive, sélectionnez le dossier du projet. Cliquez sur "Partager". Pour simuler une équipe projet, partagez avec mselleki98@gmail.com en donnant les droits de modification. Pour simuler un intervenant externe, partagez avec ilyass.msellek@sysco.com en lecture seule. Envoyez les invitations.'
      },
      {
        number: 3,
        title: 'Créer l\'équipe Teams',
        description: 'Dans Microsoft Teams, créez une nouvelle équipe "Rising Stars Tennis Day". Ajoutez les canaux : Général, Coordination, Communication.'
      }
    ],
    expectedResults: [
      'Dossier OneDrive structuré avec sous-dossiers',
      'Équipe Teams créée avec canaux organisés',
      'Permissions configurées correctement'
    ],
    commonErrors: [
      {
        error: 'Dossier créé au mauvais endroit',
        solution: 'Assurez-vous de créer le dossier dans votre OneDrive principal (pas dans un sous-dossier temporaire). Vérifiez que vous êtes bien connecté à votre compte OneDrive.'
      },
      {
        error: 'Permissions trop restrictives ou trop ouvertes',
        solution: 'Rappelez-vous : mselleki98@gmail.com doit avoir les droits de modification (équipe projet), ilyass.msellek@sysco.com doit être en lecture seule (intervenant externe). Vérifiez les paramètres de partage avant de finaliser. Dans OneDrive personnel, vous pouvez partager avec des liens ou des personnes spécifiques.'
      }
    ],
    files: [
      {
        name: 'Structure_dossiers.txt',
        path: '/templates/structure_dossiers.txt',
        type: 'copy'
      }
    ],
    hints: [
      'Utilisez des noms de dossiers sans espaces pour éviter les problèmes de compatibilité',
      'Pensez à créer un modèle de structure réutilisable pour vos futurs projets'
    ],
    trainerNotes: 'Expliquer comment accéder à OneDrive (via onedrive.live.com ou l\'application). Montrer comment partager avec mselleki98@gmail.com (modification) et ilyass.msellek@sysco.com (lecture seule). Insister sur l\'importance de bien organiser les dossiers dès le départ. Préparer les deux comptes à l\'avance pour la démonstration.'
  },
  {
    id: 2,
    title: 'Collecte des inscriptions',
    context: 'Nous devons recueillir les inscriptions des participants et des jeunes joueurs. Microsoft Forms nous permettra de créer un formulaire professionnel et de collecter les données directement dans Excel.',
    tools: ['Forms', 'Excel'],
    estimatedDuration: '45 min',
    objectives: [
      'Créer un formulaire Forms avec validation',
      'Automatiser la collecte des données vers Excel'
    ],
    steps: [
      {
        number: 1,
        title: 'Créer le formulaire Forms',
        description: 'Dans Microsoft Forms, créez un nouveau formulaire "Inscriptions Rising Stars". Ajoutez les champs : Nom, Prénom, Email, Téléphone, Type (Joueur / Accompagnant), Date de naissance (pour les joueurs).'
      },
      {
        number: 2,
        title: 'Configurer les validations',
        description: 'Rendez l\'email obligatoire et validez le format. Limitez la date de naissance aux mineurs pour les joueurs. Ajoutez un message de confirmation personnalisé.'
      },
      {
        number: 3,
        title: 'Lier à Excel',
        description: 'Dans l\'onglet "Réponses", cliquez sur "Ouvrir dans Excel". Un classeur Excel sera créé automatiquement et se mettra à jour en temps réel avec les nouvelles réponses.'
      },
      {
        number: 4,
        title: 'Partager le formulaire',
        description: 'Générez le lien de partage et testez-le. Enregistrez le lien dans votre dossier projet pour le partager ultérieurement.'
      }
    ],
    expectedResults: [
      'Formulaire Forms fonctionnel avec validation',
      'Classeur Excel automatiquement mis à jour',
      'Lien de partage généré et testé'
    ],
    commonErrors: [
      {
        error: 'Les données n\'apparaissent pas dans Excel',
        solution: 'Vérifiez que vous avez bien cliqué sur "Ouvrir dans Excel" depuis l\'onglet Réponses. Le fichier doit être créé dans OneDrive. Si le problème persiste, actualisez la page Forms.'
      },
      {
        error: 'Format de date incorrect',
        solution: 'Dans Forms, utilisez le type de champ "Date" plutôt que "Texte". Excel reconnaîtra automatiquement le format.'
      }
    ],
    files: [
      {
        name: 'Modele_formulaire.txt',
        path: '/templates/modele_formulaire.txt',
        type: 'copy'
      }
    ],
    hints: [
      'Testez toujours votre formulaire avant de le partager',
      'Vous pouvez dupliquer le formulaire pour créer des variantes (ex: formulaire pour les accompagnants)'
    ],
    trainerNotes: 'Montrer comment personnaliser le thème du formulaire. Expliquer la différence entre formulaire et quiz dans Forms.'
  },
  {
    id: 3,
    title: 'Construction du planning',
    context: 'Avec les inscriptions collectées, nous devons construire un planning détaillé de l\'événement. Excel nous permettra d\'organiser les matchs, les horaires et les ressources nécessaires.',
    tools: ['Excel'],
    estimatedDuration: '60 min',
    objectives: [
      'Créer un planning structuré avec formules Excel',
      'Utiliser les formats conditionnels pour la lisibilité',
      'Créer des tableaux croisés dynamiques pour l\'analyse'
    ],
    steps: [
      {
        number: 1,
        title: 'Importer les données',
        description: 'Ouvrez le fichier Excel généré par Forms. Créez une nouvelle feuille "Planning". Importez les données des joueurs si nécessaire.'
      },
      {
        number: 2,
        title: 'Créer la structure du planning',
        description: 'Créez un tableau avec les colonnes : Heure, Court, Joueur 1, Joueur 2, Type de match, Durée estimée, Arbitre. Utilisez des formules pour calculer automatiquement les durées.'
      },
      {
        number: 3,
        title: 'Appliquer les formats conditionnels',
        description: 'Utilisez la mise en forme conditionnelle pour colorer les cellules selon le type de match (ex: vert pour les matchs principaux, bleu pour les démonstrations).'
      },
      {
        number: 4,
        title: 'Créer un tableau croisé dynamique',
        description: 'Créez un TCD pour analyser la répartition des matchs par court et par créneau horaire. Cela vous aidera à identifier les surcharges.'
      },
      {
        number: 5,
        title: 'Ajouter des validations de données',
        description: 'Utilisez la validation de données pour limiter les types de match dans une colonne (liste déroulante : Match principal, Démonstration, Entraînement).'
      }
    ],
    expectedResults: [
      'Planning Excel structuré avec formules',
      'Mise en forme conditionnelle appliquée',
      'Tableau croisé dynamique créé',
      'Validations de données en place'
    ],
    commonErrors: [
      {
        error: 'Les formules ne se mettent pas à jour',
        solution: 'Vérifiez que le calcul automatique est activé (Fichier > Options > Formules > Calcul automatique). Appuyez sur F9 pour forcer le recalcul.'
      },
      {
        error: 'Le format conditionnel ne s\'applique pas',
        solution: 'Vérifiez que vous avez bien sélectionné la plage de cellules avant d\'appliquer le format. Utilisez "Gérer les règles" pour vérifier vos règles.'
      }
    ],
    files: [
      {
        name: 'Base_Joueurs.xlsx',
        path: '/templates/Base_Joueurs.xlsx',
        type: 'download'
      },
      {
        name: 'Modele_planning.txt',
        path: '/templates/modele_planning.txt',
        type: 'copy'
      }
    ],
    hints: [
      'Utilisez des références absolues ($) pour les formules qui doivent rester fixes',
      'Protégez les cellules contenant des formules pour éviter les modifications accidentelles'
    ],
    trainerNotes: 'Insister sur l\'importance des formules pour automatiser les calculs. Montrer comment utiliser les noms de plages pour rendre les formules plus lisibles.'
  },
  {
    id: 4,
    title: 'Dossier officiel de l\'événement',
    context: 'Un dossier officiel professionnel doit être créé pour présenter l\'événement aux partenaires, sponsors et médias. Word nous permettra de créer un document structuré et mis en forme.',
    tools: ['Word'],
    estimatedDuration: '50 min',
    objectives: [
      'Créer un document Word structuré avec styles',
      'Utiliser les en-têtes et pieds de page',
      'Insérer des tableaux et images'
    ],
    steps: [
      {
        number: 1,
        title: 'Télécharger et importer le fichier texte',
        description: 'Téléchargez le fichier Dossier_Evenement.txt. Ouvrez Word et importez ce fichier texte (Fichier > Ouvrir > Sélectionnez le fichier .txt). Le contenu brut s\'affichera avec les titres numérotés (1., 1.1, 2., etc.).'
      },
      {
        number: 2,
        title: 'Créer et appliquer les styles de titre',
        description: 'Définissez les styles de titre (Titre 1, Titre 2, Titre 3) avec une mise en forme cohérente. Appliquez Titre 1 aux titres principaux (1., 2., 3., etc.), Titre 2 aux sous-titres (1.1, 1.2, etc.), et Titre 3 aux sous-sous-titres (1.1.1, etc.). Utilisez les styles pour structurer votre document.'
      },
      {
        number: 3,
        title: 'Configurer l\'en-tête et le pied de page',
        description: 'Insérez un en-tête avec le logo de l\'événement (ou le titre) et un pied de page avec la numérotation des pages. Utilisez "Première page différente" si nécessaire.'
      },
      {
        number: 4,
        title: 'Mettre en forme le contenu',
        description: 'Mettez en forme les paragraphes de contenu avec un style approprié. Vérifiez que tous les titres utilisent bien les styles Titre 1, 2, 3. Ajustez les espacements et la mise en forme générale.'
      },
      {
        number: 5,
        title: 'Insérer un tableau récapitulatif',
        description: 'Créez un tableau récapitulatif avec les informations clés : Date, Lieu, Nombre de participants, Horaires principaux. Mettez-le en forme professionnellement.'
      },
      {
        number: 6,
        title: 'Ajouter une table des matières',
        description: 'Insérez une table des matières automatique basée sur vos styles de titre. Mettez-la à jour si vous modifiez le document.'
      },
      {
        number: 7,
        title: 'Finaliser la mise en page',
        description: 'Vérifiez les sauts de page, les espacements, et la cohérence visuelle. Exportez en PDF pour le partage final.'
      }
    ],
    expectedResults: [
      'Document Word structuré avec styles',
      'En-tête et pied de page configurés',
      'Tableau récapitulatif inséré',
      'Table des matières générée',
      'Document exporté en PDF'
    ],
    commonErrors: [
      {
        error: 'Les styles ne s\'appliquent pas correctement',
        solution: 'Sélectionnez d\'abord le texte, puis appliquez le style. Si le problème persiste, modifiez le style directement (clic droit > Modifier) plutôt que de formater manuellement.'
      },
      {
        error: 'La table des matières est vide',
        solution: 'Vérifiez que vous avez bien utilisé les styles Titre 1, Titre 2, etc. La table des matières se base sur ces styles. Mettez-la à jour avec le bouton "Mettre à jour la table".'
      }
    ],
    files: [
      {
        name: 'Dossier_Evenement.txt',
        path: '/templates/Dossier_Evenement.txt',
        type: 'download'
      },
      {
        name: 'Contenu_dossier.txt',
        path: '/templates/contenu_dossier.txt',
        type: 'copy'
      }
    ],
    hints: [
      'Utilisez les raccourcis clavier pour appliquer rapidement les styles (Ctrl+Alt+1 pour Titre 1, etc.)',
      'Créez un modèle Word réutilisable pour vos futurs événements'
    ],
    trainerNotes: 'Montrer l\'importance des styles pour la cohérence et la génération automatique de la table des matières. Expliquer comment créer des modèles personnalisés.'
  },
  {
    id: 5,
    title: 'Partage et collaboration',
    context: 'L\'équipe doit pouvoir collaborer efficacement sur les documents. OneDrive et Teams nous permettent de gérer les droits d\'accès, les commentaires et le suivi des versions.',
    tools: ['OneDrive', 'Teams', 'Word', 'Excel'],
    estimatedDuration: '40 min',
    objectives: [
      'Configurer les permissions OneDrive',
      'Utiliser les commentaires pour la collaboration',
      'Gérer les versions de documents'
    ],
    steps: [
      {
        number: 1,
        title: 'Configurer les permissions OneDrive',
        description: 'Dans OneDrive, sélectionnez un document (par exemple le Dossier_Evenement.txt que vous aurez importé dans Word). Cliquez sur "Partager". Partagez avec mselleki98@gmail.com en donnant les droits de modification (simule l\'équipe projet). Partagez avec ilyass.msellek@sysco.com en lecture seule (simule un relecteur externe). Envoyez les invitations.'
      },
      {
        number: 2,
        title: 'Activer le suivi des modifications',
        description: 'Ouvrez un document Word depuis OneDrive (en ligne) avec le compte ayant les droits de modification (mselleki98@gmail.com). Activez le suivi des modifications (Révision > Suivi des modifications). Testez les modifications. Le compte en lecture seule (ilyass.msellek@sysco.com) pourra voir les modifications mais ne pourra pas modifier.'
      },
      {
        number: 3,
        title: 'Ajouter des commentaires',
        description: 'Sélectionnez un passage de texte et ajoutez un commentaire (Révision > Nouveau commentaire). Mentionnez un collègue avec @ pour l\'alerter. Répondez aux commentaires existants.'
      },
      {
        number: 4,
        title: 'Consulter l\'historique des versions',
        description: 'Dans OneDrive, faites un clic droit sur le document et sélectionnez "Version" ou "Historique" pour voir toutes les versions du document. Restaurez une version précédente si nécessaire.'
      },
      {
        number: 5,
        title: 'Utiliser la co-édition en temps réel',
        description: 'Ouvrez un document Excel depuis OneDrive avec le compte mselleki98@gmail.com (modification). Ouvrez le même document avec ilyass.msellek@sysco.com (lecture seule) dans un autre navigateur ou appareil. Observez les différences : le compte en modification peut éditer, le compte en lecture seule voit les modifications en temps réel mais ne peut pas modifier. Utilisez le chat Teams si disponible.'
      }
    ],
    expectedResults: [
      'Permissions OneDrive configurées',
      'Suivi des modifications activé et testé',
      'Commentaires ajoutés et résolus',
      'Historique des versions consulté',
      'Co-édition testée en temps réel'
    ],
    commonErrors: [
      {
        error: 'Les modifications ne sont pas visibles en temps réel',
        solution: 'Vérifiez que le document est bien ouvert depuis OneDrive en ligne (pas téléchargé localement). Assurez-vous que vous utilisez la version en ligne d\'Office.'
      },
      {
        error: 'Impossible de modifier le document',
        solution: 'Vérifiez vos permissions dans OneDrive. Si vous avez seulement la lecture, demandez au propriétaire du fichier de vous donner les droits de modification.'
      }
    ],
    hints: [
      'Utilisez @mention dans les commentaires pour alerter spécifiquement une personne',
      'Les versions sont automatiquement sauvegardées dans OneDrive, pas besoin de sauvegarder manuellement'
    ],
    trainerNotes: 'Expliquer la différence entre co-édition en ligne et édition hors ligne. Montrer comment gérer les conflits de modification. Avec OneDrive personnel, la co-édition fonctionne bien pour les besoins de base. Montrer comment vérifier l\'historique des versions dans OneDrive. Pour la démonstration, avoir les deux comptes (mselleki98@gmail.com et ilyass.msellek@sysco.com) ouverts simultanément pour montrer la différence entre modification et lecture seule.'
  },
  {
    id: 6,
    title: 'Réunion de coordination',
    context: 'Une réunion de coordination est nécessaire pour aligner toute l\'équipe. Teams nous permettra d\'organiser la réunion, de partager l\'écran et d\'envoyer les invitations via Outlook.',
    tools: ['Teams', 'Outlook'],
    estimatedDuration: '35 min',
    objectives: [
      'Créer et planifier une réunion Teams',
      'Partager l\'écran et des documents pendant la réunion',
      'Envoyer des invitations professionnelles via Outlook'
    ],
    steps: [
      {
        number: 1,
        title: 'Créer la réunion Teams',
        description: 'Dans Teams, allez dans Calendrier > Nouvelle réunion. Remplissez le titre "Coordination Rising Stars Tennis Day", la date, l\'heure et la durée. Ajoutez les participants.'
      },
      {
        number: 2,
        title: 'Ajouter l\'ordre du jour',
        description: 'Dans la description de la réunion, ajoutez un ordre du jour structuré : 1) Point sur les inscriptions, 2) Validation du planning, 3) Répartition des tâches.'
      },
      {
        number: 3,
        title: 'Joindre des documents',
        description: 'Dans la réunion Teams, joignez les documents pertinents : le planning Excel, le dossier Word. Les participants pourront les consulter avant et pendant la réunion.'
      },
      {
        number: 4,
        title: 'Envoyer l\'invitation via Outlook',
        description: 'Ouvrez Outlook. Créez un nouveau message. Utilisez le modèle d\'email professionnel pour inviter les participants avec le lien Teams et l\'ordre du jour.'
      },
      {
        number: 5,
        title: 'Tester le partage d\'écran',
        description: 'Lancez une réunion de test. Testez le partage d\'écran (Partager > Écran) et le partage d\'une application spécifique. Testez aussi le tableau blanc.'
      },
      {
        number: 6,
        title: 'Enregistrer la réunion (optionnel)',
        description: 'Si nécessaire, activez l\'enregistrement de la réunion. Informez les participants que la réunion sera enregistrée.'
      }
    ],
    expectedResults: [
      'Réunion Teams créée et planifiée',
      'Ordre du jour ajouté',
      'Documents joints à la réunion',
      'Invitations envoyées via Outlook',
      'Partage d\'écran testé',
      'Réunion enregistrée si nécessaire'
    ],
    commonErrors: [
      {
        error: 'Les participants ne reçoivent pas l\'invitation',
        solution: 'Vérifiez que vous avez bien envoyé l\'invitation depuis Teams ou Outlook. Vérifiez aussi que les adresses email sont correctes.'
      },
      {
        error: 'Problème de son ou vidéo',
        solution: 'Testez votre micro et caméra avant la réunion (Paramètres Teams > Périphériques). Vérifiez que vous avez autorisé l\'accès dans les paramètres Windows.'
      }
    ],
    files: [
      {
        name: 'Modele_email_invitation.txt',
        path: '/templates/modele_email_invitation.txt',
        type: 'copy'
      },
      {
        name: 'Ordre_du_jour.txt',
        path: '/templates/ordre_du_jour.txt',
        type: 'copy'
      }
    ],
    hints: [
      'Planifiez toujours la réunion avec 15 minutes de marge avant le début réel pour les tests techniques',
      'Utilisez le chat Teams pendant la réunion pour partager des liens ou notes supplémentaires'
    ],
    trainerNotes: 'Montrer comment utiliser les canaux Teams pour organiser les réunions récurrentes. Expliquer les bonnes pratiques pour les réunions hybrides.'
  },
  {
    id: 7,
    title: 'Automatisation avec macros Excel',
    context: 'Pour gagner du temps et éviter les erreurs, nous allons automatiser certaines tâches répétitives dans Excel avec des macros : mise en forme automatique et export PDF.',
    tools: ['Excel', 'Macros'],
    estimatedDuration: '70 min',
    objectives: [
      'Créer une macro simple pour la mise en forme',
      'Automatiser l\'export PDF',
      'Comprendre les bases de VBA'
    ],
    steps: [
      {
        number: 1,
        title: 'Activer l\'onglet Développeur',
        description: 'Dans Excel, allez dans Fichier > Options > Personnaliser le ruban. Cochez "Développeur" dans la liste des onglets. Cliquez sur OK.'
      },
      {
        number: 2,
        title: 'Enregistrer une macro simple',
        description: 'Sélectionnez une plage de cellules. Cliquez sur Développeur > Enregistrer une macro. Donnez-lui un nom (ex: "MiseEnFormePlanning"). Effectuez une mise en forme (couleur, police, bordures). Arrêtez l\'enregistrement.'
      },
      {
        number: 3,
        title: 'Exécuter la macro',
        description: 'Sélectionnez une autre plage et exécutez la macro (Développeur > Macros > Exécuter). Vérifiez que la mise en forme est appliquée.'
      },
      {
        number: 4,
        title: 'Créer une macro pour l\'export PDF',
        description: 'Ouvrez l\'éditeur VBA (Alt+F11). Créez un nouveau module. Écrivez une macro qui exporte la feuille active en PDF dans un dossier spécifique.'
      },
      {
        number: 5,
        title: 'Ajouter un bouton pour la macro',
        description: 'Dans Excel, insérez un bouton (Développeur > Insérer > Bouton). Assignez votre macro au bouton. Testez le bouton.'
      },
      {
        number: 6,
        title: 'Sécuriser le fichier',
        description: 'Enregistrez le fichier en format .xlsm (Excel avec macros). Configurez les paramètres de sécurité des macros (Fichier > Options > Centre de gestion de la confidentialité).'
      }
    ],
    expectedResults: [
      'Onglet Développeur activé',
      'Macro de mise en forme créée et testée',
      'Macro d\'export PDF créée',
      'Bouton d\'exécution ajouté',
      'Fichier enregistré en .xlsm'
    ],
    commonErrors: [
      {
        error: 'Les macros sont désactivées',
        solution: 'Allez dans Fichier > Options > Centre de gestion de la confidentialité > Paramètres des macros. Choisissez "Avertir pour toutes les macros" ou "Activer toutes les macros" (uniquement pour les fichiers de confiance).'
      },
      {
        error: 'La macro ne fonctionne pas sur une autre feuille',
        solution: 'Vérifiez que votre macro utilise des références relatives ou des plages nommées plutôt que des références absolues à une feuille spécifique.'
      }
    ],
    files: [
      {
        name: 'Macro_export_PDF.txt',
        path: '/templates/macro_export_PDF.txt',
        type: 'copy'
      },
      {
        name: 'Macro_mise_en_forme.txt',
        path: '/templates/macro_mise_en_forme.txt',
        type: 'copy'
      }
    ],
    hints: [
      'Commencez toujours par enregistrer une macro pour comprendre la syntaxe VBA, puis modifiez-la selon vos besoins',
      'Commentez votre code VBA pour faciliter la maintenance future'
    ],
    trainerNotes: 'Expliquer les risques de sécurité des macros. Montrer comment signer numériquement les macros pour les rendre plus sûres. Introduire les concepts de base de VBA.'
  },
  {
    id: 8,
    title: 'Mini brique Python',
    context: 'Pour analyser les données d\'inscription et générer des statistiques, nous allons utiliser Python. Cela nous permettra de traiter les données Excel/CSV et de générer des rapports propres.',
    tools: ['Python', 'Excel'],
    estimatedDuration: '60 min',
    objectives: [
      'Lire et traiter des fichiers Excel/CSV avec Python',
      'Calculer des statistiques simples',
      'Générer un fichier de sortie propre'
    ],
    steps: [
      {
        number: 1,
        title: 'Installer les bibliothèques nécessaires',
        description: 'Ouvrez un terminal. Installez pandas et openpyxl : pip install pandas openpyxl. Vérifiez l\'installation avec : python -c "import pandas; print(pandas.__version__)".'
      },
      {
        number: 2,
        title: 'Lire le fichier Excel',
        description: 'Créez un script Python. Importez pandas. Utilisez pd.read_excel() pour lire le fichier Base_Joueurs.xlsx. Affichez les premières lignes avec .head().'
      },
      {
        number: 3,
        title: 'Nettoyer les données',
        description: 'Vérifiez les valeurs manquantes avec .isna(). Supprimez les doublons avec .drop_duplicates(). Corrigez les formats de date si nécessaire.'
      },
      {
        number: 4,
        title: 'Calculer des statistiques',
        description: 'Calculez : nombre total d\'inscriptions, répartition par type (Joueur/Accompagnant), tranches d\'âge pour les joueurs. Utilisez .groupby() et .describe() pour les statistiques.'
      },
      {
        number: 5,
        title: 'Générer un rapport',
        description: 'Créez un DataFrame avec les statistiques calculées. Exportez-le dans un nouveau fichier Excel avec .to_excel() ou dans un CSV avec .to_csv().'
      },
      {
        number: 6,
        title: 'Ajouter des graphiques (optionnel)',
        description: 'Utilisez matplotlib pour créer un graphique en barres de la répartition par type. Sauvegardez le graphique en image.'
      }
    ],
    expectedResults: [
      'Bibliothèques Python installées',
      'Fichier Excel lu et affiché',
      'Données nettoyées (doublons supprimés, valeurs manquantes gérées)',
      'Statistiques calculées',
      'Rapport exporté en Excel/CSV',
      'Graphique généré (optionnel)'
    ],
    commonErrors: [
      {
        error: 'ModuleNotFoundError: No module named \'pandas\'',
        solution: 'Vérifiez que vous avez bien installé pandas avec pip. Si vous utilisez plusieurs versions de Python, utilisez python -m pip install pandas pour être sûr d\'installer dans la bonne version.'
      },
      {
        error: 'Erreur lors de la lecture du fichier Excel',
        solution: 'Vérifiez que le fichier n\'est pas ouvert dans Excel. Vérifiez aussi que openpyxl est installé (nécessaire pour lire les .xlsx).'
      }
    ],
    files: [
      {
        name: 'analyse_inscriptions.py',
        path: '/templates/analyse_inscriptions.py',
        type: 'copy'
      },
      {
        name: 'requirements.txt',
        path: '/templates/requirements.txt',
        type: 'copy'
      }
    ],
    hints: [
      'Utilisez des chemins relatifs pour vos fichiers pour faciliter le partage du script',
      'Ajoutez des print() pour suivre l\'exécution et déboguer si nécessaire'
    ],
    trainerNotes: 'Expliquer pourquoi Python peut être utile même dans un contexte Microsoft 365. Montrer comment intégrer Python avec Power Automate si nécessaire.'
  },
  {
    id: 9,
    title: 'IA comme copilote',
    context: 'L\'intelligence artificielle peut nous aider à rédiger, résumer et analyser. Nous allons utiliser Copilot (ou ChatGPT) pour améliorer nos communications et identifier les risques du projet.',
    tools: ['IA', 'Word', 'Outlook'],
    estimatedDuration: '50 min',
    objectives: [
      'Utiliser l\'IA pour réécrire et améliorer des emails',
      'Générer des résumés automatiques',
      'Créer une checklist de risques avec l\'IA'
    ],
    steps: [
      {
        number: 1,
        title: 'Réécrire un email avec Copilot',
        description: 'Dans Outlook, rédigez un brouillon d\'email pour inviter un partenaire. Utilisez Copilot (bouton Copilot dans Outlook) pour améliorer le ton, la clarté et le professionnalisme. Comparez les versions.'
      },
      {
        number: 2,
        title: 'Résumer un document long',
        description: 'Ouvrez le dossier de l\'événement dans Word. Utilisez Copilot pour générer un résumé exécutif. Vérifiez que les points clés sont bien capturés.'
      },
      {
        number: 3,
        title: 'Créer une checklist de risques',
        description: 'Dans Word ou un document texte, demandez à Copilot de créer une checklist des risques potentiels pour l\'organisation d\'un événement sportif. Organisez les risques par catégorie (logistique, communication, technique).'
      },
      {
        number: 4,
        title: 'Améliorer un texte existant',
        description: 'Sélectionnez un paragraphe de votre dossier. Utilisez Copilot pour le rendre plus concis, plus clair ou plus formel selon le besoin. Testez différentes instructions (ex: "rendre plus court", "rendre plus convivial").'
      },
      {
        number: 5,
        title: 'Générer des idées',
        description: 'Utilisez Copilot pour générer des idées de communication pour promouvoir l\'événement. Demandez-lui de créer des posts pour les réseaux sociaux ou des messages pour différents publics.'
      }
    ],
    expectedResults: [
      'Email amélioré avec Copilot',
      'Résumé exécutif généré',
      'Checklist de risques créée',
      'Texte amélioré selon les instructions',
      'Idées de communication générées'
    ],
    commonErrors: [
      {
        error: 'Copilot n\'est pas disponible',
        solution: 'Vérifiez que vous avez une licence Microsoft 365 incluant Copilot. Si ce n\'est pas le cas, vous pouvez utiliser ChatGPT ou d\'autres outils d\'IA en ligne en copiant-collant le texte.'
      },
      {
        error: 'Les résultats de l\'IA ne sont pas satisfaisants',
        solution: 'Affinez vos instructions. Soyez plus spécifique (ex: "réécris cet email de manière formelle et concise" plutôt que "améliore cet email"). Relisez et corrigez toujours les résultats de l\'IA.'
      }
    ],
    files: [
      {
        name: 'Checklist_risques.txt',
        path: '/templates/checklist_risques.txt',
        type: 'copy'
      },
      {
        name: 'Prompts_IA.txt',
        path: '/templates/prompts_IA.txt',
        type: 'copy'
      }
    ],
    hints: [
      'L\'IA est un outil d\'aide, pas un remplacement. Toujours relire et valider les résultats',
      'Plus vos instructions sont précises, meilleurs seront les résultats'
    ],
    trainerNotes: 'Discuter des limites et des bonnes pratiques d\'utilisation de l\'IA. Expliquer l\'importance de la validation humaine et de la protection des données.'
  },
  {
    id: 10,
    title: 'Checklist de livraison finale',
    context: 'Avant de finaliser le projet, nous devons nous assurer que tous les livrables sont prêts, organisés et accessibles. Cette étape permet de vérifier la complétude du projet.',
    tools: ['OneDrive', 'Excel', 'Word'],
    estimatedDuration: '30 min',
    objectives: [
      'Vérifier la complétude de tous les livrables',
      'Organiser les fichiers finaux',
      'Créer un document récapitulatif'
    ],
    steps: [
      {
        number: 1,
        title: 'Vérifier les fichiers Excel finaux',
        description: 'Ouvrez votre dossier projet. Vérifiez que tous les fichiers Excel sont à jour : Base_Joueurs.xlsx avec toutes les inscriptions, Planning.xlsx finalisé, Statistiques.xlsx généré.'
      },
      {
        number: 2,
        title: 'Vérifier les documents Word',
        description: 'Vérifiez que le Dossier_Evenement.txt a été importé dans Word, mis en forme avec les styles appropriés et exporté en PDF. Vérifiez aussi tous les autres documents Word du projet.'
      },
      {
        number: 3,
        title: 'Organiser les dossiers OneDrive',
        description: 'Dans OneDrive, vérifiez que tous les fichiers sont dans les bons dossiers. Vérifiez les permissions : mselleki98@gmail.com doit avoir les droits de modification, ilyass.msellek@sysco.com doit être en lecture seule. Créez un dossier "Livrables_Final" si nécessaire.'
      },
      {
        number: 4,
        title: 'Créer un document récapitulatif',
        description: 'Créez un document Word "Recapitulatif_Projet.docx" listant tous les livrables, leur emplacement, et les personnes responsables. Exportez-le en PDF.'
      },
      {
        number: 5,
        title: 'Vérifier les liens et partages',
        description: 'Testez tous les liens de partage (Forms, Teams, OneDrive). Vérifiez que mselleki98@gmail.com a bien les droits de modification et que ilyass.msellek@sysco.com a bien les droits de lecture seule. Corrigez les permissions si nécessaire.'
      },
      {
        number: 6,
        title: 'Faire une sauvegarde',
        description: 'Téléchargez une copie locale de tous les fichiers importants. Ou mieux, vérifiez que tout est bien sauvegardé dans OneDrive (sauvegarde automatique).'
      }
    ],
    expectedResults: [
      'Tous les fichiers Excel vérifiés et à jour',
      'Documents Word complets et exportés en PDF',
      'Dossiers OneDrive organisés',
      'Document récapitulatif créé',
      'Liens et partages testés',
      'Sauvegarde effectuée'
    ],
    commonErrors: [
      {
        error: 'Des fichiers manquent ou sont obsolètes',
        solution: 'Utilisez la fonction de recherche dans OneDrive pour trouver tous les fichiers du projet. Comparez les dates de modification pour identifier les versions les plus récentes.'
      },
      {
        error: 'Les permissions ne sont pas correctes',
        solution: 'Faites un audit des permissions : dans OneDrive, vérifiez les paramètres de partage de chaque fichier et dossier. Utilisez "Gérer l\'accès" pour voir qui a accès à quoi. Vérifiez que mselleki98@gmail.com a les droits de modification et que ilyass.msellek@sysco.com est en lecture seule.'
      }
    ],
    files: [
      {
        name: 'Checklist_livraison.txt',
        path: '/templates/checklist_livraison.txt',
        type: 'copy'
      },
      {
        name: 'Modele_recapitulatif.txt',
        path: '/templates/modele_recapitulatif.txt',
        type: 'copy'
      }
    ],
    hints: [
      'Créez un tableau de bord Excel pour suivre l\'avancement de tous les livrables',
      'Utilisez des noms de fichiers clairs et une structure de dossiers logique pour mieux organiser vos fichiers'
    ],
    trainerNotes: 'Insister sur l\'importance de la documentation et de l\'organisation pour la pérennité du projet. Montrer comment créer des modèles réutilisables pour les futurs projets.'
  }
];

export const allTools: Tool[] = [
  'OneDrive',
  'Teams',
  'Excel',
  'Word',
  'PowerPoint',
  'Outlook',
  'Forms',
  'IA',
  'Macros',
  'Python'
];
