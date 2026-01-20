export type ExerciceCategory = 'Word' | 'Excel' | 'Outlook' | 'OneDrive' | 'OneNote' | 'PowerQuery';

export type ExerciceStatus = 'not_started' | 'in_progress' | 'completed';

export interface Exercice {
  id: string;
  category: ExerciceCategory;
  title: string;
  duration: string;
  objective: string;
  context: string;
  generalInstructions: string[];
  steps: {
    number: number;
    title: string;
    duration?: string;
    instructions: string[];
    tips?: string[];
  }[];
  deliverables: string[];
  reflectionQuestions?: string[];
  trainerScript?: string;
  files?: {
    name: string;
    path: string;
    type: 'download';
    trainerOnly?: boolean;
  }[];
}

export const exercices: Exercice[] = [
  {
    id: 'word-tableaux-01',
    category: 'Word',
    title: 'Maîtriser les tableaux dans Microsoft Word',
    duration: '45 minutes',
    objective: 'Cet exercice a pour but d\'évaluer la capacité de l\'apprenant à :\n• Créer et structurer un tableau dans Word\n• Mettre en forme un tableau de manière lisible et professionnelle\n• Utiliser les fonctionnalités avancées des tableaux\n• Adapter un tableau à un contexte professionnel réel\n\nÀ l\'issue de l\'exercice, le tableau devra être clair, cohérent et présentable dans un cadre professionnel.',
    context: 'Vous travaillez dans une entreprise et devez préparer un document de synthèse destiné à votre manager.\nCe document présente un planning de formation interne pour le premier trimestre.\n\nLe tableau fourni est volontairement brut et mal structuré.\nVotre mission est de le transformer en un tableau clair, lisible et professionnel.',
    generalInstructions: [
      'Travaillez uniquement avec Microsoft Word',
      'N\'utilisez ni Excel, ni copier-coller depuis un autre logiciel',
      'Toutes les modifications doivent être faites avec les outils de tableau Word',
      'Le résultat doit tenir sur une seule page'
    ],
    steps: [
      {
        number: 1,
        title: 'Création du tableau brut',
        duration: '10 min',
        instructions: [
          'Créez un tableau contenant 6 colonnes et 7 lignes (1 ligne d\'en-tête + 6 lignes de données)',
          'Renseignez le tableau avec les informations suivantes :',
          '',
          'Formation | Public | Durée (h) | Date | Formateur | Statut',
          'Word – Bases | Débutants | 6 | 15/01/2026 | I. Msellek | Prévu',
          'Excel – Intermédiaire | Employés | 9 | 22/01/2026 | C. Martin | Prévu',
          'PowerPoint – Avancé | Managers | 6 | 29/01/2026 | L. Bernard | Annulé',
          'Teams – Collaboration | Tous | 3 | 05/02/2026 | I. Msellek | Prévu',
          'Outlook – Organisation | Employés | 3 | 12/02/2026 | C. Martin | Prévu',
          'OneDrive – Gestion | Managers | 6 | 19/02/2026 | L. Bernard | À confirmer'
        ]
      },
      {
        number: 2,
        title: 'Mise en forme du tableau',
        duration: '15 min',
        instructions: [
          'En-tête :',
          '• Mettre la ligne d\'en-tête en gras',
          '• Centrer le texte verticalement',
          '• Appliquer une couleur de fond discrète',
          '• Ajuster la hauteur de la ligne si nécessaire',
          '',
          'Contenu :',
          '• Ajuster automatiquement la largeur des colonnes',
          '• Aligner :',
          '  - le texte à gauche pour les colonnes textuelles',
          '  - le contenu numérique au centre',
          '• Harmoniser la police et la taille du texte'
        ]
      },
      {
        number: 3,
        title: 'Structuration avancée',
        duration: '10 min',
        instructions: [
          'Effectuez les actions suivantes :',
          '• Fusionnez les cellules nécessaires si cela améliore la lisibilité',
          '• Appliquez une bordure extérieure plus visible que les bordures internes',
          '• Modifiez l\'orientation du texte de la colonne Durée (h) si pertinent',
          '• Vérifiez que le tableau ne dépasse pas la largeur de la page'
        ]
      },
      {
        number: 4,
        title: 'Mise en valeur de l\'information',
        duration: '5 min',
        instructions: [
          'Appliquez une mise en forme conditionnelle manuelle :',
          '• Ligne avec Statut = Annulé → texte ou fond distinct (sobre)',
          '• Ligne avec Statut = À confirmer → mise en valeur légère',
          '• Les formations prévues doivent rester neutres',
          '',
          '⚠️ L\'objectif n\'est pas de décorer, mais de guider la lecture.'
        ]
      },
      {
        number: 5,
        title: 'Vérification finale',
        duration: '5 min',
        instructions: [
          'Avant de rendre votre travail, vérifiez que :',
          '• Le tableau tient sur une page',
          '• Les titres sont lisibles',
          '• Les informations importantes sont immédiatement identifiables',
          '• Le tableau est compréhensible sans explication orale'
        ]
      }
    ],
    deliverables: [
      'Un document Word contenant :',
      '• Un tableau clair et structuré',
      '• Une mise en forme professionnelle',
      '• Aucune information manquante',
      '• Aucun bricolage visuel'
    ]
  },
  {
    id: 'word-mise-en-forme-01',
    category: 'Word',
    title: 'Mise en forme d\'un document avec styles',
    duration: '45 minutes',
    objective: 'À la fin de l\'exercice, l\'apprenant doit savoir :\n• télécharger et ouvrir un document Word brut\n• appliquer des styles Word pour structurer le document\n• utiliser les listes à puces et numérotées\n• créer une mise en forme professionnelle et cohérente',
    context: 'Vous recevez un document Word brut sans mise en forme. Votre mission est de le transformer en un document professionnel et structuré en utilisant les styles Word.',
    generalInstructions: [
      'Téléchargez le fichier "Exercice_1.docx" fourni',
      'Travaillez uniquement avec Microsoft Word',
      'Utilisez les styles Word plutôt que la mise en forme manuelle',
      'Le document doit être clair, structuré et professionnel'
    ],
    steps: [
      {
        number: 1,
        title: 'Télécharger et ouvrir le document',
        duration: '5 min',
        instructions: [
          'Téléchargez le fichier "Exercice_1.docx" depuis la section fichiers ci-dessous',
          'Ouvrez le document dans Microsoft Word',
          'Observez l\'état initial du document (texte brut sans mise en forme)'
        ]
      },
      {
        number: 2,
        title: 'Appliquer les styles de titre',
        duration: '15 min',
        instructions: [
          'Identifiez les titres principaux dans le document',
          'Appliquez le style "Titre 1" aux titres principaux',
          'Appliquez le style "Titre 2" aux sous-titres',
          'Appliquez le style "Titre 3" si nécessaire pour les sous-sections',
          '',
          '💡 Astuce : Utilisez les raccourcis clavier (Ctrl+Alt+1 pour Titre 1, etc.)'
        ]
      },
      {
        number: 3,
        title: 'Structurer avec des listes',
        duration: '15 min',
        instructions: [
          'Identifiez les éléments qui doivent être en liste',
          'Créez des listes à puces pour les éléments non ordonnés',
          'Créez des listes numérotées pour les étapes ou éléments ordonnés',
          'Ajustez l\'indentation si nécessaire',
          '',
          '💡 Astuce : Sélectionnez le texte puis utilisez les boutons de liste dans l\'onglet Accueil'
        ]
      },
      {
        number: 4,
        title: 'Mise en forme du texte',
        duration: '10 min',
        instructions: [
          'Mettez en évidence les mots-clés importants (gras ou italique)',
          'Vérifiez la cohérence des polices et tailles',
          'Ajustez les espacements entre les paragraphes si nécessaire',
          'Appliquez un style "Normal" cohérent au texte courant'
        ]
      }
    ],
    deliverables: [
      'Un document Word mis en forme avec :',
      '• Des styles de titre appliqués correctement',
      '• Des listes structurées (puces et numérotées)',
      '• Une mise en forme cohérente et professionnelle',
      '• Un document prêt à être partagé'
    ],
    reflectionQuestions: [],
    files: [
      {
        name: 'Exercice_1.docx',
        path: '/templates/Exercice_1.docx',
        type: 'download'
      },
      {
        name: 'Exercice_1_Correction.docx',
        path: '/templates/Exercice_1_Correction.docx',
        type: 'download',
        trainerOnly: true
      }
    ],
    trainerScript: '💡 Points clés à aborder :\n\n• L\'importance d\'utiliser les styles plutôt que la mise en forme manuelle\n• Comment identifier les niveaux de titre dans un texte brut\n• La différence entre listes à puces et listes numérotées\n• Les raccourcis clavier pour appliquer rapidement les styles\n• Comment créer une structure hiérarchique claire\n\n🎯 Objectif pédagogique :\nFaire comprendre que la mise en forme avec styles est plus efficace et professionnelle que la mise en forme manuelle, et permet de générer automatiquement une table des matières.'
  },
  {
    id: 'onedrive-coffre-01',
    category: 'OneDrive',
    title: 'OneDrive comme coffre personnel intelligent',
    duration: '30 minutes',
    objective: 'Comprendre ce qui est personnel, ce qui est partageable, et ce qui peut casser.',
    context: 'Tu travailles sur ton OneDrive personnel. Tu dois partager un document avec un collègue sans lui donner accès à tout ton OneDrive (erreur classique).',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Création de la structure',
        instructions: [
          'Dans OneDrive :',
          '• Crée un dossier nommé "Projet_Formation_365"',
          '• À l\'intérieur, crée :',
          '  - un fichier Word : Notes_perso.docx',
          '  - un fichier Excel : Planning.xlsx'
        ]
      },
      {
        number: 2,
        title: 'Partage ciblé',
        instructions: [
          'Partage uniquement Planning.xlsx avec une autre personne :',
          '• en lecture seule',
          '• Vérifie :',
          '  - que la personne n\'a pas accès au reste du dossier',
          '  - que toi, tu peux toujours modifier le fichier'
        ]
      }
    ],
    deliverables: [
      'Un dossier OneDrive avec structure organisée',
      'Un fichier partagé avec permissions correctes',
      'Compréhension de la différence entre partage de fichier et partage de dossier'
    ],
    reflectionQuestions: [
      'Pourquoi partager le fichier plutôt que le dossier ?',
      'Que se passe-t-il si tu partages le dossier par erreur ?',
      'Est-ce que OneDrive est vraiment "privé" par défaut ?'
    ],
    trainerScript: '🧨 Vérité dérangeante :\n\nBeaucoup de fuites de données viennent de gens qui pensent que "partager, ce n\'est pas grave".\n\n💡 Points clés à aborder :\n• La différence fondamentale entre partage de fichier et partage de dossier\n• Les risques de partage accidentel de dossiers entiers\n• La notion de "privé par défaut" dans OneDrive\n• Comment vérifier qui a accès à quoi\n• Les bonnes pratiques de sécurité\n\n🎯 Objectif pédagogique :\nFaire comprendre que le partage n\'est pas anodin et qu\'il faut être précis dans la gestion des permissions.'
  },
  {
    id: 'onedrive-collaboration-01',
    category: 'OneDrive',
    title: 'OneDrive comme outil de collaboration contrôlée',
    duration: '25 minutes',
    objective: 'Comprendre la différence entre lien, personnes, droits, et reprendre le contrôle.',
    context: 'Tu travailles à plusieurs sur un même document. Tu veux collaborer mais reprendre la main à la fin.',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Création et partage initial',
        instructions: [
          'Crée un document Word :',
          '• Compte_rendu_reunion.docx',
          '• Partage-le avec une personne en modification'
        ]
      },
      {
        number: 2,
        title: 'Test de collaboration',
        instructions: [
          'Demande à cette personne de :',
          '• écrire une phrase dans le document'
        ]
      },
      {
        number: 3,
        title: 'Reprendre le contrôle',
        instructions: [
          'Ensuite :',
          '• modifie les paramètres de partage pour repasser le document en lecture seule',
          '• Vérifie :',
          '  - que la personne ne peut plus écrire'
        ]
      }
    ],
    deliverables: [
      'Un document Word partagé et collaboré',
      'Compréhension de la gestion dynamique des permissions',
      'Maîtrise du passage de modification à lecture seule'
    ],
    reflectionQuestions: [
      'Quelle est la différence entre :',
      '  - partager à une personne',
      '  - partager via un lien',
      'Que se passe-t-il si le lien est transféré ?',
      'Qui est responsable si quelqu\'un modifie "par erreur" ?'
    ],
    trainerScript: '💣 Opinion tranchée :\n\nLe vrai pouvoir dans OneDrive, ce n\'est pas le stockage.\nC\'est la gestion des droits. Et personne ne la maîtrise vraiment.\n\n💡 Points clés à aborder :\n• La différence entre partage par personne vs partage par lien\n• Les risques de propagation d\'un lien partagé\n• La responsabilité dans la gestion des droits\n• Comment reprendre le contrôle d\'un document partagé\n• Les limites de OneDrive pour le travail d\'équipe\n\n🧠 Bonus formateur (si tu veux briller) :\n\nÀ la fin, pose cette question :\n"À partir de quand OneDrive n\'est plus le bon outil, et quand faut-il passer à SharePoint ?"\n\n(Spoiler : dès qu\'on parle d\'équipe, pas d\'individu.)\n\n🎯 Objectif pédagogique :\nFaire comprendre que la collaboration nécessite un contrôle actif des permissions, et que OneDrive a ses limites pour le travail d\'équipe.'
  },
  {
    id: 'onedrive-sync-01',
    category: 'OneDrive',
    title: 'OneDrive n\'est PAS un disque dur',
    duration: '35 minutes',
    objective: 'Comprendre la synchronisation, ses pièges, et pourquoi elle casse des carrières.',
    context: 'Tu travailles sur ton PC hors ligne et tu penses que OneDrive "s\'adaptera".',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Création et test hors ligne',
        instructions: [
          'Sur ton PC :',
          '• Crée un dossier synchronisé OneDrive : "Client_Audit_2026"',
          '• Coupe Internet',
          '• Modifie un fichier Word dans ce dossier',
          '• Rallume Internet',
          '• Observe l\'icône OneDrive : que se passe-t-il ?'
        ]
      },
      {
        number: 2,
        title: 'Test de conflit',
        instructions: [
          'Provoque volontairement un conflit :',
          '• ouvre le même fichier sur un autre appareil',
          '• modifie-le en parallèle',
          '• observe le comportement de OneDrive'
        ]
      }
    ],
    deliverables: [
      'Compréhension du mécanisme de synchronisation',
      'Expérience pratique des conflits de synchronisation',
      'Awareness des risques du travail hors ligne'
    ],
    reflectionQuestions: [
      'Où est la vérité du fichier ?',
      'Qui gagne en cas de conflit ?',
      'Peut-on perdre des données sans message d\'erreur clair ?'
    ],
    trainerScript: '🔥 Opinion clivante :\n\nLa synchro OneDrive est une arme. Entre de bonnes mains, c\'est puissant.\nEntre de mauvaises… c\'est une tronçonneuse.\n\n📋 Explication détaillée - Étape 1 : Création et test hors ligne\n\nTrès bonne question, MonSeigneur 👑\nEt tu mets le doigt sur le cœur du malentendu mondial sur OneDrive. Si ce n\'est pas clair, ce n\'est pas toi le problème, c\'est l\'outil.\n\nJe t\'explique pas à pas, puis je te dis ce que tu dois OBSERVER, et enfin ce que ça signifie vraiment.\n\n1️⃣ Ce que tu fais réellement (sans le savoir)\n\nQuand tu travailles dans un dossier synchronisé OneDrive, il y a deux réalités :\n\n🖥️ Une copie locale sur ton PC\n☁️ Une copie dans le cloud Microsoft\n\nQuand tu coupe Internet, tu travailles UNIQUEMENT sur la copie locale.\n\n👉 OneDrive ne bloque pas ton travail.\n👉 Il enregistre en silence, comme si tout allait bien.\n\nC\'est là que les gens se font piéger.\n\n2️⃣ Ce que tu dois voir pendant que Internet est coupé\n\nSur l\'icône OneDrive (près de l\'horloge Windows) :\n\n⚠️ soit une icône grise\n⚠️ soit un nuage barré\n⚠️ soit un message du type :\n  "Synchronisation interrompue"\n  "Connexion requise"\n\nMais attention, MonSeigneur :\n💣 Windows n\'affiche parfois RIEN de visible, surtout si la coupure est courte.\n\n👉 Et c\'est ça le piège.\n\n3️⃣ Ce qui se passe quand tu rallumes Internet (le moment clé)\n\nÀ cet instant précis, OneDrive :\n\n• Compare : ta version locale vs la version cloud\n• Se dit : "Ah, j\'ai des modifications en attente"\n• Lance la synchronisation\n\nTu peux alors observer :\n\n🔵 icône avec flèches circulaires → synchro en cours\n🟢 coche verte → tout est à jour\n🔴 point rouge → problème / conflit\n\n👉 Dans 80 % des cas, ça passe crème, et c\'est justement ça le danger.\n\n4️⃣ Le vrai test (que les formations ne font jamais)\n\nVoici ce qui devait te faire comprendre l\'exercice 👇\n\nVariante A – Travail hors ligne SEUL\n\n• Tu modifies le fichier hors ligne\n• Personne n\'y touche ailleurs\n\n➡️ Résultat :\n✅ La version locale écrase la version cloud\n✅ Tu ne vois rien d\'anormal\n❌ Tu crois que "OneDrive gère"\n\nIllusion totale.\n\nVariante B – Le vrai piège (à faire absolument)\n\nPC A :\n• coupe Internet\n• modifie le fichier Word\n\nPC B (ou téléphone) :\n• modifie le même fichier en ligne\n\nPC A :\n• rallume Internet\n\n💥 BOOM pédagogique\n\nOneDrive va :\n• soit créer un fichier en conflit\n• soit renommer un fichier : Document (Conflit – Ilyass-PC).docx\n• soit écraser silencieusement une version\n\n👉 Et là, tu comprends :\n"Ah… donc OneDrive n\'est pas magique."\n\n5️⃣ Ce que tu étais censé comprendre (le message caché)\n\n💣 Message clé de l\'exercice :\n\nOneDrive ne te prévient pas quand tu travailles hors ligne.\nIl te prévient après, quand c\'est parfois trop tard.\n\n🧠 Traduction pro :\n\n• OneDrive n\'est pas collaboratif par nature\n• Il est optimiste, pas sécurisé\n• Il suppose que l\'humain ne fera pas d\'erreur\n➡️ Hypothèse naïve\n\n6️⃣ Phrase que tu peux dire en formation (impact max 🎤)\n\n"Tant que vous êtes seuls sur un fichier, OneDrive est confortable.\nDès que vous êtes plusieurs, il devient dangereux."\n\nSilence garanti dans la salle.\n\n💡 Points clés à aborder :\n• Le mécanisme de synchronisation bidirectionnelle\n• Les risques du travail hors ligne\n• Comment gérer les conflits de synchronisation\n• Les fichiers en conflit et leur résolution\n• Pourquoi la synchronisation peut "casser des carrières"\n• La différence entre stockage local et cloud\n• Les indicateurs visuels de synchronisation (icônes)\n\n🎯 Objectif pédagogique :\nFaire comprendre que OneDrive n\'est pas un simple disque dur, mais un système de synchronisation complexe qui nécessite une compréhension de son fonctionnement pour éviter les pertes de données.'
  },
  {
    id: 'onedrive-liens-01',
    category: 'OneDrive',
    title: 'Liens de partage : l\'arme la plus dangereuse',
    duration: '30 minutes',
    objective: 'Maîtriser les liens, leur durée de vie, et leur traçabilité (ou absence).',
    context: 'Tu dois partager un fichier temporairement, puis t\'assurer qu\'il n\'existe plus nulle part.',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Création et partage avec lien',
        instructions: [
          'Crée un fichier Excel :',
          '• Salaires_Equipe.xlsx',
          '• Partage-le via un lien avec date d\'expiration'
        ]
      },
      {
        number: 2,
        title: 'Test d\'accès et révocation',
        instructions: [
          'Ouvre le lien depuis :',
          '• une navigation privée',
          '• Révoque le lien',
          '• Tente de rouvrir le lien'
        ]
      }
    ],
    deliverables: [
      'Compréhension des liens de partage',
      'Maîtrise de la gestion des dates d\'expiration',
      'Awareness des limites de la révocation'
    ],
    reflectionQuestions: [
      'Peut-on savoir si quelqu\'un a téléchargé le fichier ?',
      'Que devient un fichier téléchargé après révocation ?',
      'Qui porte la responsabilité légale ?'
    ],
    trainerScript: '💣 Vérité dérangeante :\n\nRévoquer un lien n\'efface jamais ce qui a été téléchargé.\n\n💡 Points clés à aborder :\n• La différence entre accès via lien et téléchargement\n• Les limites de la révocation de lien\n• L\'absence de traçabilité des téléchargements\n• La responsabilité légale dans le partage de données sensibles\n• Les bonnes pratiques pour le partage temporaire\n• Pourquoi un lien révoqué ne protège pas contre les copies déjà faites\n• L\'importance de la date d\'expiration\n\n🎯 Objectif pédagogique :\nFaire comprendre que les liens de partage sont puissants mais dangereux, et que la révocation n\'est pas une garantie de sécurité absolue.'
  },
  {
    id: 'onedrive-versions-01',
    category: 'OneDrive',
    title: 'Nettoyage, versioning et faux sentiment de sécurité',
    duration: '40 minutes',
    objective: 'Comprendre versions, corbeille, et ce qui est vraiment récupérable.',
    context: 'Un fichier critique a été modifié… trop tard.',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Création d\'historique',
        instructions: [
          'Sur un fichier Word :',
          '• fais 5 modifications',
          '• Accède à l\'historique des versions',
          '• Restaure une ancienne version'
        ]
      },
      {
        number: 2,
        title: 'Test de suppression et récupération',
        instructions: [
          'Supprime le fichier',
          '• Va dans la corbeille OneDrive',
          '• Vide la corbeille',
          '• Tente de récupérer le fichier'
        ]
      }
    ],
    deliverables: [
      'Compréhension du système de versions',
      'Maîtrise de la restauration de versions',
      'Awareness des limites de la corbeille OneDrive'
    ],
    reflectionQuestions: [
      'Combien de temps OneDrive garde-t-il les données ?',
      'Qui peut restaurer après suppression définitive ?',
      'Est-ce une vraie sauvegarde ?'
    ],
    trainerScript: '⚠️ Opinion tranchée :\n\nOneDrive n\'est PAS une sauvegarde.\nC\'est une tolérance à l\'erreur, nuance vitale.\n\n📋 Explication détaillée - Étape 1 : Historique des versions\n\n(ce qui est censé se passer)\n\n✅ Ce que tu fais\n\n• Tu modifies 5 fois le même fichier Word\n  (ajout d\'une phrase, suppression, correction, etc.)\n• Le fichier est stocké sur OneDrive\n\n👀 Ce que tu observes\n\nDans OneDrive (web ou Word) :\n• clic droit sur le fichier\n• Historique des versions\n\nTu vois :\n• une liste chronologique\n• avec : date / heure, auteur, taille du fichier\n\n👉 Chaque modification importante crée une version\n(et parfois plusieurs si Word autosave).\n\n🔁 Restauration\n\nQuand tu restaures une ancienne version :\n\n❌ le fichier n\'est pas remplacé définitivement\n✅ la version restaurée devient la nouvelle version courante\n\nLes versions plus récentes :\n• ne disparaissent PAS\n• restent dans l\'historique\n\n🧠 Conclusion attendue :\n\nL\'historique n\'est pas une machine à remonter le temps destructrice.\nC\'est une pile de versions empilées.\n\n📋 Explication détaillée - Étape 2 : Suppression & récupération\n\n(là où tout le monde se trompe)\n\n🗑️ Suppression du fichier\n\nQuand tu supprimes le fichier :\n\n❌ il n\'est PAS détruit\n✅ il va dans la corbeille OneDrive\n\n👉 Il disparaît de ton dossier, mais existe toujours côté Microsoft.\n\n🗑️ Vidage de la corbeille (moment clé)\n\nQuand tu vides la corbeille OneDrive :\n\n❌ le fichier n\'est plus visible\n❌ il n\'est plus récupérable par l\'utilisateur\n❌ l\'historique des versions disparaît avec lui\n\n👉 Pour l\'utilisateur standard :\n💀 le fichier est mort\n\n❓ Tentative de récupération\n\nRésultat attendu :\n\n❌ Impossible de récupérer le fichier soi-même\n❌ aucune option dans OneDrive\n❌ aucune magie cachée\n\n🧠 Conclusion clé :\n\nL\'historique des versions ne protège PAS contre une suppression définitive.\n\n💣 Le message pédagogique (le plus important)\n\nVoici LA phrase que l\'exercice doit graver dans la tête :\n\n"OneDrive protège contre les erreurs de modification,\npas contre les erreurs de suppression."\n\nEt encore plus brutal :\n\n"OneDrive n\'est pas une sauvegarde.\nC\'est une illusion de sécurité."\n\n🧠 Ce que tu dois faire dire aux apprenants\n\nÀ la fin, ils doivent être capables de dire :\n\n✅ "Je peux revenir en arrière si je modifie mal"\n❌ "Je ne suis pas protégé si je supprime définitivement"\n⚠️ "Si quelqu\'un vide la corbeille, c\'est fini pour moi"\n\n🎓 Bonus formateur (impact max)\n\nPose cette question :\n\n"Qui, dans votre entreprise, peut récupérer ce fichier après suppression définitive ?"\n\nRéponse attendue :\n• Admin Microsoft 365\n• Sauvegarde externe\n• Pas OneDrive\n\nSilence. Prise de conscience. 🧠\n\n💡 Points clés à aborder :\n• Le système de versioning dans OneDrive\n• La durée de conservation des versions\n• Les limites de la corbeille OneDrive\n• La différence entre corbeille et sauvegarde\n• Pourquoi OneDrive n\'est pas une solution de backup\n• Les stratégies de récupération possibles\n• Les délais de rétention des données\n• Quand utiliser OneDrive vs une vraie solution de sauvegarde\n\n🎯 Objectif pédagogique :\nFaire comprendre que OneDrive offre une tolérance à l\'erreur limitée, mais ne remplace pas une vraie stratégie de sauvegarde. Nuancer le sentiment de sécurité que peut donner OneDrive.'
  },
  {
    id: 'onedrive-partage-survie-01',
    category: 'OneDrive',
    title: 'Partage, collaboration et survie des données',
    duration: '60 minutes',
    objective: 'Comprendre :\n• la différence entre partage de fichiers et partage de dossiers\n• les risques de la co-édition sans cadre\n• et surtout : pourquoi une donnée ne doit jamais dépendre d\'une personne.',
    context: 'Cet exercice en 3 parties vous permettra de comprendre les enjeux du partage et la pérennité des données dans OneDrive.',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Mise en situation A – Partager des fichiers individuellement',
        instructions: [
          '📄 Scénario :',
          'Anatole a créé deux documents (une évaluation de maths et son corrigé).',
          'Il les déplace dans son OneDrive et partage chaque fichier individuellement avec Barnabé en lecture seule.',
          '',
          '🎯 Mission :',
          '• Identifiez qui est propriétaire des fichiers',
          '• Identifiez qui peut faire quoi',
          '• Identifiez sur quoi porte exactement le partage',
          '',
          'Actions à réaliser :',
          '1. Créez deux documents Word dans votre OneDrive',
          '2. Partagez chaque fichier individuellement avec mselleki98@gmail.com en lecture seule',
          '3. Vérifiez les permissions de chaque fichier',
          '4. Modifiez ensuite les droits pour autoriser la modification',
          '5. Testez la co-édition en temps réel'
        ]
      },
      {
        number: 2,
        title: 'Mise en situation B – Partager un dossier entier',
        instructions: [
          '📄 Scénario :',
          'Barnabé crée un dossier "Evaluations avec Anatole" dans son OneDrive.',
          'Il y place les documents de français et les documents de maths.',
          'Il partage le dossier entier avec Anatole en modification.',
          '',
          '🎯 Mission :',
          'Comparez le périmètre d\'accès avec la situation A.',
          '',
          'Actions à réaliser :',
          '1. Créez un dossier "Evaluations" dans votre OneDrive',
          '2. Placez-y plusieurs documents',
          '3. Partagez le dossier entier avec mselleki98@gmail.com en modification',
          '4. Testez la co-édition sur les documents du dossier',
          '5. Ajoutez un nouveau fichier dans le dossier et observez l\'accès'
        ]
      },
      {
        number: 3,
        title: 'Mise en situation C – Le départ de Barnabé',
        instructions: [
          '📄 Scénario :',
          'Barnabé part à la retraite.',
          '30 jours plus tard, son compte Office 365 est désactivé.',
          'Tous les documents partagés depuis son OneDrive disparaissent.',
          '',
          '🎯 Mission :',
          'Trouvez une solution pour que les documents survivent au départ de Barnabé.',
          '',
          '🔧 Contraintes :',
          '• Les documents doivent rester accessibles à Anatole',
          '• Même après la suppression du compte de Barnabé',
          '',
          'Actions à réaliser :',
          '1. Identifiez le problème : que se passe-t-il si le propriétaire part ?',
          '2. Déplacez le dossier vers le OneDrive d\'Anatole (mselleki98@gmail.com)',
          '3. Vérifiez que les permissions sont conservées',
          '4. Simulez la suppression du dossier côté Barnabé',
          '5. Vérifiez qu\'Anatole a toujours accès aux documents'
        ]
      }
    ],
    deliverables: [
      'Compréhension de la différence entre partage de fichier et partage de dossier',
      'Awareness des risques liés à la dépendance d\'une personne',
      'Solution mise en place pour la pérennité des données'
    ],
    reflectionQuestions: [
      'Situation A :',
      '• Qu\'est-ce que Barnabé peut voir exactement ?',
      '• Peut-il voir d\'autres fichiers du OneDrive d\'Anatole ?',
      '• Quel est le périmètre précis de l\'accès ?',
      '',
      'Situation B :',
      '• À quoi Anatole a-t-il accès exactement ?',
      '• Que se passera-t-il si Barnabé ajoute un nouveau fichier dans ce dossier demain ?',
      '• Quelle est la différence de risque entre A et B ?',
      '',
      'Situation C :',
      '• Où doivent vivre ces documents pour être durables ?',
      '• Qui doit en être propriétaire ?',
      '• Que se passe-t-il si on ne fait rien ?'
    ],
    trainerScript: '🧨 Messages clés de l\'exercice :\n\nSituation A :\n"Partager un fichier limite précisément le périmètre d\'accès."\n\nSituation B :\n"Partager un dossier donne accès à tout ce qu\'il contient aujourd\'hui et à tout ce qu\'il contiendra demain."\n\nSituation C (le plus important) :\n"Une donnée importante ne doit jamais vivre dans le OneDrive personnel de quelqu\'un."\n\n💡 Points clés à aborder :\n\nSituation A - Partage de fichiers :\n• Le périmètre d\'accès est limité au fichier uniquement\n• Le propriétaire garde le contrôle total\n• Les autres fichiers du OneDrive restent privés\n• Avantage : sécurité et contrôle précis\n• Inconvénient : gestion plus lourde si beaucoup de fichiers\n\nSituation B - Partage de dossier :\n• Le périmètre d\'accès s\'étend à tout le dossier\n• Les nouveaux fichiers ajoutés sont automatiquement partagés\n• Risque : exposition involontaire de fichiers futurs\n• Avantage : simplicité pour partager plusieurs fichiers\n• Inconvénient : moins de contrôle granulaire\n\nSituation C - Survie des données :\n• Le problème fondamental : dépendance à une personne\n• Quand le compte est désactivé, tout disparaît\n• Solution : déplacer vers OneDrive d\'une autre personne ou SharePoint\n• Principe : les données importantes doivent être indépendantes des individus\n• Alternative : utiliser SharePoint/Teams pour les données d\'équipe\n\n🎯 Objectif pédagogique global :\n\nFaire comprendre que :\n1. Le partage de fichier vs dossier a des implications différentes\n2. La co-édition nécessite un cadre et des règles\n3. Le point le plus critique : une donnée ne doit jamais dépendre d\'une personne\n4. OneDrive personnel n\'est pas adapté pour les données d\'équipe pérennes\n\n💣 Phrase finale à graver :\n\n"Une donnée importante ne doit jamais vivre dans le OneDrive personnel de quelqu\'un."\n\nCette phrase doit être répétée et comprise comme un principe fondamental de gestion des données.'
  },
  {
    id: 'onenote-structure-01',
    category: 'OneNote',
    title: 'Structurer un carnet OneNote professionnel',
    duration: '45 minutes',
    objective: 'À la fin de l\'exercice, l\'apprenant doit savoir :\n• créer une structure logique dans OneNote\n• utiliser correctement sections, pages et sous-pages\n• organiser l\'information sans tout mettre sur une seule page\n• comprendre la différence entre note brute et note exploitable',
    context: 'Vous venez d\'intégrer une entreprise.\nVous utilisez OneNote comme outil principal de prise de notes professionnelles (réunions, idées, suivi).\n\nVotre mission est de créer un carnet de travail structuré, prêt à être utilisé au quotidien.',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Créer le carnet',
        duration: '5 min',
        instructions: [
          'Créez un carnet nommé :',
          '• "Carnet de travail – Formation Microsoft 365"'
        ]
      },
      {
        number: 2,
        title: 'Créer les sections',
        duration: '10 min',
        instructions: [
          'Dans ce carnet, créez les sections suivantes :',
          '• Réunions',
          '• Projets',
          '• Idées & Notes',
          '• Formation',
          '• À faire',
          '',
          '⚠️ Aucune page pour l\'instant.'
        ]
      },
      {
        number: 3,
        title: 'Créer les pages et sous-pages',
        duration: '15 min',
        instructions: [
          'Section Réunions :',
          '• Réunion équipe – Janvier',
          '• Réunion équipe – Février',
          '• Réunion client – Projet Alpha',
          '',
          '👉 Transformez "Réunion client – Projet Alpha" en sous-page de "Réunion équipe – Février".',
          '',
          'Section Projets :',
          '• Projet Alpha',
          '• Projet Beta',
          '',
          'Dans Projet Alpha, ajoutez :',
          '• Objectifs',
          '• Avancement',
          '• Points de blocage',
          '',
          '👉 Faites-en des sous-pages.'
        ]
      },
      {
        number: 4,
        title: 'Contenu minimal structuré',
        duration: '10 min',
        instructions: [
          'Dans chaque page :',
          '• Ajoutez un titre clair',
          '• Insérez au moins :',
          '  - une liste à puces',
          '  - une phrase mise en évidence (gras ou surlignage léger)',
          '',
          '⚠️ Pas de copier-coller brut.',
          'L\'objectif est la lisibilité, pas la quantité.'
        ]
      },
      {
        number: 5,
        title: 'Vérification finale',
        duration: '5 min',
        instructions: [
          'Avant de rendre :',
          '• La structure est-elle compréhensible sans explication ?',
          '• Peut-on naviguer rapidement ?',
          '• Les pages sont-elles bien nommées ?'
        ]
      }
    ],
    deliverables: [
      'Un carnet OneNote :',
      '• structuré',
      '• hiérarchisé',
      '• prêt à être utilisé en contexte professionnel'
    ],
    reflectionQuestions: [],
    trainerScript: '🧠 Critère clé d\'évaluation :\n\n👉 Un bon carnet OneNote donne envie d\'être relu.\n\n💡 Points clés à aborder :\n• La différence entre sections, pages et sous-pages\n• L\'importance de la hiérarchie dans OneNote\n• Comment éviter les pages "fourre-tout"\n• La différence entre note brute et note exploitable\n• Les bonnes pratiques de nommage\n• L\'organisation visuelle pour faciliter la navigation\n\n🎯 Objectif pédagogique :\nFaire comprendre que OneNote n\'est pas un simple bloc-notes, mais un outil de structuration de l\'information qui nécessite une organisation réfléchie pour être efficace.'
  },
  {
    id: 'onenote-suivi-01',
    category: 'OneNote',
    title: 'OneNote comme outil de suivi et d\'action',
    duration: '45 minutes',
    objective: 'À la fin de l\'exercice, l\'apprenant doit savoir :\n• utiliser OneNote pour suivre des actions\n• transformer des notes en éléments exploitables\n• utiliser tags, dates et organisation visuelle',
    context: 'Vous utilisez OneNote pour suivre vos tâches et décisions au quotidien, en complément (ou à la place) d\'un outil de tâches classique.',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Créer une page de suivi',
        duration: '5 min',
        instructions: [
          'Dans une section de votre choix, créez une page intitulée :',
          '• "Suivi des actions – Semaine 1"'
        ]
      },
      {
        number: 2,
        title: 'Structurer la page',
        duration: '10 min',
        instructions: [
          'Sur cette page, créez 3 zones distinctes (titres ou séparations visuelles) :',
          '• Actions à faire',
          '• En attente / À clarifier',
          '• Terminé'
        ]
      },
      {
        number: 3,
        title: 'Ajouter des éléments',
        duration: '15 min',
        instructions: [
          'Ajoutez au minimum :',
          '',
          'Actions à faire :',
          '• Envoyer le compte rendu de réunion',
          '• Préparer la présentation projet',
          '• Contacter le client',
          '',
          '👉 Ajoutez :',
          '  - une case à cocher',
          '  - une date',
          '  - un tag (Important, À faire, Question…)',
          '',
          'En attente / À clarifier :',
          '• Validation du budget',
          '• Retour du manager',
          '',
          '👉 Utilisez un style visuel différent (italique ou couleur discrète).',
          '',
          'Terminé :',
          '• Réunion de lancement',
          '• Création du carnet OneNote',
          '',
          '👉 Cochez les tâches terminées.'
        ]
      },
      {
        number: 4,
        title: 'Mise en forme intelligente',
        duration: '10 min',
        instructions: [
          'Appliquez les règles suivantes :',
          '• Une seule couleur dominante maximum',
          '• Les actions importantes doivent se distinguer visuellement',
          '• Le texte doit rester lisible, sans surcharge'
        ]
      },
      {
        number: 5,
        title: 'Vérification finale',
        duration: '5 min',
        instructions: [
          'Posez-vous ces questions :',
          '• Est-ce que je comprends mes priorités en 5 secondes ?',
          '• Est-ce que je pourrais utiliser cette page demain matin ?',
          '• Est-ce que la page reste claire si j\'ajoute 10 lignes de plus ?'
        ]
      }
    ],
    deliverables: [
      'Une page OneNote :',
      '• exploitable immédiatement',
      '• claire',
      '• orientée action'
    ],
    reflectionQuestions: [],
    trainerScript: '🧠 Phrase pédagogique à retenir (à donner aux élèves) :\n\n"OneNote n\'est pas un bloc-notes.\nC\'est un espace de pensée."\n\n💡 Points clés à aborder :\n• L\'utilisation des tags pour catégoriser\n• L\'importance des dates pour le suivi\n• L\'organisation visuelle pour la rapidité de lecture\n• La différence entre note passive et note actionnable\n• Comment transformer des notes en éléments exploitables\n• Les bonnes pratiques de mise en forme (sans surcharge)\n• L\'utilisation des cases à cocher pour le suivi\n\n🎯 Objectif pédagogique :\nFaire comprendre que OneNote peut être un outil de suivi efficace s\'il est bien structuré, et qu\'il ne s\'agit pas simplement de prendre des notes, mais de créer un système de pensée organisé.'
  },
  {
    id: 'excel-structure-01',
    category: 'Excel',
    title: 'Structurer et fiabiliser des données',
    duration: '30-40 min',
    objective: 'Comprendre la différence entre donnée brute et donnée exploitable\nSavoir structurer un tableau Excel propre\nÉviter les erreurs classiques de saisie',
    context: 'Vous recevez un fichier Excel issu d\'une saisie manuelle.\nLes données sont utilisables, mais mal structurées.',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Saisie des données de départ',
        instructions: [
          'Saisissez ou importez les données suivantes :',
          '',
          'Nom | Prénom | Service | Salaire | Date embauche',
          'Martin | Claire | RH | 3200 | 12/03/2020',
          'Bernard | Luc | IT | 4100 | 01/07/2019',
          'Dupont | Alice | Finance | 3800 | 15/01/2021',
          'Martin | Paul | IT | 3900 | 2020-09-10',
          'Leroy | Sophie | RH | 3000 | 05/06/2018'
        ]
      },
      {
        number: 2,
        title: 'Transformation en Table Excel',
        instructions: [
          'Transformez cette plage en Table Excel',
          '• Sélectionnez la plage de données',
          '• Utilisez l\'onglet Insertion > Tableau',
          '• Cochez "Mon tableau comporte des en-têtes"'
        ]
      },
      {
        number: 3,
        title: 'Harmonisation des formats',
        instructions: [
          'Harmonisez les formats :',
          '• Salaires en format numérique cohérent',
          '• Dates en format date (unifier les formats différents)',
          '• Vérifiez que toutes les données sont cohérentes'
        ]
      },
      {
        number: 4,
        title: 'Ajout de calculs',
        instructions: [
          'Ajoutez une colonne "Ancienneté (années)" calculée',
          '• Utilisez une formule pour calculer l\'ancienneté',
          '• Triez les données par ancienneté décroissante'
        ]
      },
      {
        number: 5,
        title: 'Vérification finale',
        instructions: [
          'Vérifiez qu\'aucune information n\'est :',
          '• ambiguë',
          '• incohérente',
          '• mal formatée'
        ]
      }
    ],
    deliverables: [
      'Un tableau :',
      '• structuré',
      '• lisible',
      '• prêt à être utilisé dans un calcul ou un rapport'
    ],
    reflectionQuestions: [],
    trainerScript: '🧠 Ce que l\'exercice teste vraiment :\n\n👉 Discipline de structuration\n👉 Compréhension du rôle de la donnée\n\n💡 Points clés à aborder :\n• La différence entre donnée brute et donnée exploitable\n• L\'importance de la cohérence des formats\n• Les erreurs classiques de saisie (dates, nombres)\n• L\'utilisation des Tables Excel pour structurer\n• Comment harmoniser des formats différents\n• Les bonnes pratiques de structuration de données\n\n🎯 Objectif pédagogique :\nFaire comprendre que des données mal structurées sont inexploitables, et que la discipline de structuration est fondamentale avant toute analyse.'
  },
  {
    id: 'excel-analyse-01',
    category: 'Excel',
    title: 'Analyse et synthèse avec Excel',
    duration: '40-45 min',
    objective: 'Savoir répondre à des questions métier avec Excel\nUtiliser l\'agrégation et la synthèse\nComprendre la différence entre détail et vue globale',
    context: 'Votre manager souhaite une vue synthétique des salaires par service.\n\nVous disposez du tableau de l\'exercice 1.',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Création de la feuille d\'analyse',
        instructions: [
          'Créez une nouvelle feuille nommée "Analyse"',
          '• Assurez-vous d\'avoir les données de l\'exercice 1 disponibles'
        ]
      },
      {
        number: 2,
        title: 'Synthèse par service',
        instructions: [
          'Produisez une synthèse répondant aux questions suivantes :',
          '• Salaire moyen par service',
          '• Salaire minimum et maximum par service',
          '• Nombre d\'employés par service',
          '',
          'Présentez les résultats dans un tableau clair'
        ]
      },
      {
        number: 3,
        title: 'Visualisation',
        instructions: [
          'Ajoutez une visualisation simple :',
          '• Choisissez un graphique pertinent',
          '• Le graphique doit être sobre et clair',
          '• Il doit compléter le tableau de synthèse'
        ]
      },
      {
        number: 4,
        title: 'Vérification de clarté',
        instructions: [
          'Vérifiez que :',
          '• Le résultat est compréhensible sans regarder les données brutes',
          '• Les questions métier sont clairement répondues',
          '• La présentation est professionnelle'
        ]
      }
    ],
    deliverables: [
      'Une feuille d\'analyse claire',
      'Un tableau de synthèse',
      'Un graphique sobre'
    ],
    reflectionQuestions: [],
    trainerScript: '🧠 Ce que l\'exercice teste vraiment :\n\n👉 Capacité à poser une question\n👉 Capacité à y répondre proprement\n\n💡 Points clés à aborder :\n• Comment formuler des questions métier claires\n• L\'utilisation des fonctions d\'agrégation (MOYENNE, MIN, MAX, NB)\n• La différence entre données détaillées et vue synthétique\n• Le choix d\'un graphique adapté à la question\n• La présentation professionnelle des résultats\n• Comment rendre les résultats compréhensibles sans contexte\n\n🎯 Objectif pédagogique :\nFaire comprendre que Excel n\'est pas qu\'un outil de saisie, mais un outil d\'analyse qui permet de répondre à des questions métier concrètes.'
  },
  {
    id: 'excel-automatisation-01',
    category: 'Excel',
    title: 'Logique métier et automatisation légère',
    duration: '45 min',
    objective: 'Implémenter une logique métier\nRendre un fichier plus robuste\nRéduire les erreurs humaines',
    context: 'L\'entreprise souhaite identifier automatiquement les employés nécessitant une revue salariale.\n\nRègle métier :\n• Ancienneté ≥ 3 ans\n• Salaire < 3500 €\n→ Revue salariale requise',
    generalInstructions: [],
    steps: [
      {
        number: 1,
        title: 'Ajout de la colonne Revue salariale',
        instructions: [
          'Ajoutez une colonne "Revue salariale"',
          'Cette colonne doit afficher :',
          '• "Oui" si les conditions sont remplies',
          '• "Non" sinon',
          '',
          'Utilisez une formule conditionnelle (SI)'
        ]
      },
      {
        number: 2,
        title: 'Mise en forme conditionnelle',
        instructions: [
          'Appliquez une mise en forme conditionnelle :',
          '• "Oui" doit être visuellement identifiable (sobre)',
          '• Utilisez une couleur discrète mais visible'
        ]
      },
      {
        number: 3,
        title: 'Contrôles de validation',
        instructions: [
          'Ajoutez un contrôle pour éviter :',
          '• les salaires négatifs',
          '• les dates futures',
          '',
          'Utilisez la validation de données Excel'
        ]
      },
      {
        number: 4,
        title: 'Vérification de robustesse',
        instructions: [
          'Vérifiez que le fichier reste correct si :',
          '• une nouvelle ligne est ajoutée',
          '• les formules s\'adaptent automatiquement',
          '• les contrôles fonctionnent toujours'
        ]
      }
    ],
    deliverables: [
      'Un fichier :',
      '• robuste',
      '• lisible',
      '• prêt à être utilisé par quelqu\'un d\'autre'
    ],
    reflectionQuestions: [],
    trainerScript: '🧠 Ce que l\'exercice teste vraiment :\n\n👉 Compréhension de la logique conditionnelle\n👉 Capacité à anticiper l\'usage réel\n\n💡 Points clés à aborder :\n• L\'implémentation de règles métier dans Excel\n• L\'utilisation des formules conditionnelles (SI, ET)\n• La mise en forme conditionnelle pour la lisibilité\n• Les validations de données pour éviter les erreurs\n• Comment rendre un fichier robuste et réutilisable\n• L\'anticipation des erreurs humaines\n• La différence entre fichier "qui marche" et fichier "robuste"\n\n🎯 Objectif pédagogique :\nFaire comprendre que Excel peut implémenter de la logique métier et que la robustesse d\'un fichier dépend de l\'anticipation des erreurs et des usages réels.'
  },
  {
    id: 'excel-macro-01',
    category: 'Excel',
    title: 'Macro enregistrée simple',
    duration: '30 minutes',
    objective: 'Découvrir :\n• l\'enregistrement d\'une macro\n• l\'exécution\n• la lecture d\'un code très simple',
    context: 'Dans un tableau en A1:D?, crée une macro qui met en forme la ligne d\'en-tête.',
    generalInstructions: [
      'Activez l\'onglet Développeur dans Excel',
      'Utilisez l\'enregistrement de macro',
      'Ouvrez ensuite le code pour comprendre ce qui a été généré'
    ],
    steps: [
      {
        number: 1,
        title: 'Préparer le tableau',
        instructions: [
          'Créez un tableau dans la plage A1:D10 (ou plus)',
          'Remplissez la première ligne avec des en-têtes',
          'Ajoutez quelques lignes de données'
        ]
      },
      {
        number: 2,
        title: 'Enregistrer la macro',
        instructions: [
          'Cliquez sur Développeur > Enregistrer une macro',
          'Donnez-lui un nom (ex: "FormatEnTete")',
          'Effectuez les actions suivantes :',
          '• Sélectionnez la ligne 1',
          '• Mettez-la en gras',
          '• Appliquez un fond gris clair',
          '• Ajustez la largeur des colonnes (AutoFit)',
          'Arrêtez l\'enregistrement'
        ]
      },
      {
        number: 3,
        title: 'Lire le code généré',
        instructions: [
          'Ouvrez l\'éditeur VBA (Alt+F11)',
          'Trouvez votre macro dans les modules',
          'Identifiez les lignes qui correspondent à :',
          '• La sélection de la ligne 1',
          '• La mise en gras',
          '• Le fond gris clair',
          '• L\'ajustement des colonnes'
        ]
      },
      {
        number: 4,
        title: 'Tester la macro',
        instructions: [
          'Créez un nouveau tableau sur une autre feuille',
          'Exécutez votre macro',
          'Vérifiez que les actions sont reproduites'
        ]
      }
    ],
    deliverables: [
      'Une macro enregistrée fonctionnelle',
      'Compréhension du code VBA généré',
      'Capacité à identifier les actions dans le code'
    ],
    reflectionQuestions: [],
    trainerScript: '🧠 Ce que tu apprends :\n\n• Enregistrer une macro\n• Comprendre Rows("1:1"), AutoFit\n• Lien entre actions et code\n\n📋 Correction détaillée :\n\nCode attendu après enregistrement :\n\n```vba\nSub FormatEnTete()\n    Rows("1:1").Select\n    Selection.Font.Bold = True\n    Selection.Interior.Color = RGB(217, 217, 217)\n    Columns("A:D").Select\n    Selection.Columns.AutoFit\nEnd Sub\n```\n\n💡 Explication ligne par ligne :\n\n1. `Rows("1:1").Select`\n   → Sélectionne la ligne 1 entière\n   → "1:1" signifie ligne 1 de la colonne 1 à la dernière colonne\n\n2. `Selection.Font.Bold = True`\n   → Met en gras la sélection (la ligne 1)\n   → Font.Bold est une propriété booléenne\n\n3. `Selection.Interior.Color = RGB(217, 217, 217)`\n   → Applique un fond gris clair\n   → RGB(217, 217, 217) = gris clair\n   → Interior = intérieur de la cellule\n\n4. `Columns("A:D").Select`\n   → Sélectionne les colonnes A à D\n\n5. `Selection.Columns.AutoFit`\n   → Ajuste automatiquement la largeur des colonnes\n   → AutoFit = s\'adapter au contenu\n\n🎯 Points pédagogiques :\n\n• Montrer que l\'enregistrement génère du code "lisible"\n• Expliquer la syntaxe VBA de base (Select, Selection)\n• Faire comprendre que chaque action Excel = lignes de code\n• Introduire les notions de propriétés (Font.Bold, Interior.Color)\n• Montrer comment tester et déboguer une macro simple'
  },
  {
    id: 'excel-macro-02',
    category: 'Excel',
    title: 'Macro avec plage dynamique',
    duration: '40 minutes',
    objective: 'Ne plus écrire de plage en dur.\nDétecter automatiquement le tableau.',
    context: 'Écris une macro qui détecte automatiquement ton tableau à partir de A1 et le formate.',
    generalInstructions: [
      'Interdit d\'utiliser Range("A1:D10")',
      'Tu dois calculer la plage avec CurrentRegion ou lastRow / lastCol',
      'La macro doit fonctionner quelle que soit la taille du tableau'
    ],
    steps: [
      {
        number: 1,
        title: 'Créer un tableau de test',
        instructions: [
          'Créez un tableau dans A1 avec des données',
          'Le tableau peut avoir différentes tailles',
          'Testez avec 5 lignes, puis avec 20 lignes'
        ]
      },
      {
        number: 2,
        title: 'Détecter la plage dynamiquement',
        instructions: [
          'Option 1 : Utilisez CurrentRegion',
          '  → Range("A1").CurrentRegion',
          '',
          'Option 2 : Calculez lastRow et lastCol',
          '  → lastRow = Cells(Rows.Count, 1).End(xlUp).Row',
          '  → lastCol = Cells(1, Columns.Count).End(xlToLeft).Column',
          '  → Range(Cells(1, 1), Cells(lastRow, lastCol))'
        ]
      },
      {
        number: 3,
        title: 'Créer la macro',
        instructions: [
          'Écrivez une macro qui :',
          '• Détecte automatiquement le tableau à partir de A1',
          '• Met la ligne d\'en-tête en bleu',
          '• Met des bordures sur tout le tableau',
          '• Ajuste les colonnes',
          '',
          'Testez avec des tableaux de tailles différentes'
        ]
      }
    ],
    deliverables: [
      'Une macro avec détection dynamique de plage',
      'Code qui fonctionne quelle que soit la taille du tableau',
      'Compréhension de CurrentRegion ou lastRow/lastCol'
    ],
    reflectionQuestions: [],
    trainerScript: '💣 Opinion clivante :\n\n"Tant que tu codes des plages fixes, tu n\'automatises rien.\nTu scripts un scénario fragile."\n\n🧠 Ce que tu apprends :\n\n• Détection dynamique\n• Notion de plage variable (Range(ws.Cells...))\n• Robustesse minimale\n\n📋 Correction détaillée - Méthode 1 : CurrentRegion\n\n```vba\nSub FormatTableauDynamique()\n    Dim tbl As Range\n    \n    \' Détecte automatiquement le tableau à partir de A1\n    Set tbl = Range("A1").CurrentRegion\n    \n    \' Met l\'en-tête en bleu\n    tbl.Rows(1).Font.Color = RGB(0, 0, 255)\n    tbl.Rows(1).Font.Bold = True\n    \n    \' Met des bordures sur tout le tableau\n    tbl.Borders.LineStyle = xlContinuous\n    tbl.Borders.Weight = xlThin\n    \n    \' Ajuste les colonnes\n    tbl.Columns.AutoFit\nEnd Sub\n```\n\n💡 Explication :\n\n• `CurrentRegion` : détecte automatiquement la zone contiguë autour de A1\n• Fonctionne même si le tableau change de taille\n• Plus simple mais moins flexible que lastRow/lastCol\n\n📋 Correction détaillée - Méthode 2 : lastRow / lastCol\n\n```vba\nSub FormatTableauDynamiqueV2()\n    Dim lastRow As Long\n    Dim lastCol As Long\n    Dim tbl As Range\n    \n    \' Trouve la dernière ligne avec données dans la colonne A\n    lastRow = Cells(Rows.Count, 1).End(xlUp).Row\n    \n    \' Trouve la dernière colonne avec données dans la ligne 1\n    lastCol = Cells(1, Columns.Count).End(xlToLeft).Column\n    \n    \' Définit la plage du tableau\n    Set tbl = Range(Cells(1, 1), Cells(lastRow, lastCol))\n    \n    \' Met l\'en-tête en bleu\n    tbl.Rows(1).Font.Color = RGB(0, 0, 255)\n    tbl.Rows(1).Font.Bold = True\n    \n    \' Met des bordures\n    tbl.Borders.LineStyle = xlContinuous\n    tbl.Borders.Weight = xlThin\n    \n    \' Ajuste les colonnes\n    tbl.Columns.AutoFit\nEnd Sub\n```\n\n💡 Explication détaillée :\n\n1. `Cells(Rows.Count, 1).End(xlUp).Row`\n   → Va à la dernière ligne de la colonne A\n   → Remonte jusqu\'à trouver une cellule avec données\n   → Retourne le numéro de ligne\n\n2. `Cells(1, Columns.Count).End(xlToLeft).Column`\n   → Va à la dernière colonne de la ligne 1\n   → Va à gauche jusqu\'à trouver une cellule avec données\n   → Retourne le numéro de colonne\n\n3. `Range(Cells(1, 1), Cells(lastRow, lastCol))`\n   → Crée une plage de A1 jusqu\'à la dernière cellule\n   → S\'adapte automatiquement à la taille réelle\n\n🎯 Points pédagogiques :\n\n• Expliquer pourquoi les plages fixes sont fragiles\n• Montrer les deux méthodes de détection dynamique\n• Faire comprendre End(xlUp) et End(xlToLeft)\n• Insister sur la robustesse : la macro doit fonctionner avec n\'importe quelle taille\n• Comparer CurrentRegion vs lastRow/lastCol (avantages/inconvénients)'
  },
  {
    id: 'excel-macro-03',
    category: 'Excel',
    title: 'Macro avec bouton + message + contrôle',
    duration: '50 minutes',
    objective: 'Interaction avec l\'utilisateur + sécurisation.\nAjouter des contrôles d\'erreur.',
    context: 'Crée une macro sécurisée qui vérifie la présence d\'un tableau avant de le formater.',
    generalInstructions: [
      'Utiliser If ... Then ... Exit Sub',
      'Utiliser MsgBox au début et à la fin',
      'Ajouter un bouton sur la feuille',
      'Associer la macro au bouton'
    ],
    steps: [
      {
        number: 1,
        title: 'Créer la macro avec contrôles',
        instructions: [
          'Écrivez une macro qui :',
          '• Vérifie si A1 est vide',
          '• Si oui → affiche "Aucun tableau détecté" et stoppe',
          '• Sinon :',
          '  - détecte la plage dynamique',
          '  - met l\'en-tête en vert',
          '  - met un fond jaune clair sur le tableau',
          '  - ajoute des bordures intérieures',
          '  - affiche un message final avec la plage formatée'
        ]
      },
      {
        number: 2,
        title: 'Ajouter le bouton',
        instructions: [
          'Dans Excel, allez dans Développeur > Insérer > Bouton',
          'Dessinez le bouton sur la feuille',
          'Assignez votre macro au bouton',
          'Renommez le bouton (ex: "Formater le tableau")'
        ]
      },
      {
        number: 3,
        title: 'Tester les cas d\'erreur',
        instructions: [
          'Testez avec A1 vide → doit afficher le message d\'erreur',
          'Testez avec un tableau → doit formater et afficher le message de succès',
          'Vérifiez que le bouton fonctionne correctement'
        ]
      }
    ],
    deliverables: [
      'Une macro avec contrôles d\'erreur',
      'Un bouton fonctionnel sur la feuille',
      'Messages informatifs pour l\'utilisateur'
    ],
    reflectionQuestions: [],
    trainerScript: '💣 Opinion clivante :\n\n"Une macro sans contrôle d\'erreur est un piège à utilisateurs."\n\n🧠 Ce que tu apprends :\n\n• Tests conditionnels\n• Arrêt propre d\'une macro\n• Interaction utilisateur\n• Déploiement via bouton\n\n📋 Correction détaillée :\n\n```vba\nSub FormatTableauSecurise()\n    Dim tbl As Range\n    Dim lastRow As Long\n    Dim lastCol As Long\n    Dim plage As String\n    \n    \' Vérification : A1 est-il vide ?\n    If IsEmpty(Range("A1")) Then\n        MsgBox "Aucun tableau détecté", vbExclamation, "Erreur"\n        Exit Sub\n    End If\n    \n    \' Détection dynamique de la plage\n    lastRow = Cells(Rows.Count, 1).End(xlUp).Row\n    lastCol = Cells(1, Columns.Count).End(xlToLeft).Column\n    Set tbl = Range(Cells(1, 1), Cells(lastRow, lastCol))\n    \n    \' Formatage\n    tbl.Rows(1).Font.Color = RGB(0, 128, 0)  \' Vert\n    tbl.Rows(1).Font.Bold = True\n    tbl.Interior.Color = RGB(255, 255, 200)  \' Jaune clair\n    \n    \' Bordures intérieures uniquement\n    tbl.Borders(xlInsideHorizontal).LineStyle = xlContinuous\n    tbl.Borders(xlInsideVertical).LineStyle = xlContinuous\n    tbl.Borders(xlInsideHorizontal).Weight = xlThin\n    tbl.Borders(xlInsideVertical).Weight = xlThin\n    \n    \' Construire le message avec la plage\n    plage = "A1:" & Cells(lastRow, lastCol).Address(False, False)\n    \n    \' Message de succès\n    MsgBox "Tableau formaté: " & plage, vbInformation, "Succès"\nEnd Sub\n```\n\n💡 Explication ligne par ligne :\n\n1. `If IsEmpty(Range("A1")) Then`\n   → Vérifie si A1 est vide\n   → IsEmpty() détecte les cellules vraiment vides\n\n2. `MsgBox "Aucun tableau détecté", vbExclamation, "Erreur"`\n   → Affiche un message d\'erreur\n   → vbExclamation = icône d\'avertissement\n\n3. `Exit Sub`\n   → Arrête immédiatement la macro\n   → Important : ne pas continuer si erreur\n\n4. `tbl.Borders(xlInsideHorizontal)`\n   → Bordures intérieures horizontales uniquement\n   → xlInsideVertical pour les verticales\n   → Pas de bordures extérieures\n\n5. `Cells(lastRow, lastCol).Address(False, False)`\n   → Convertit la cellule en adresse texte (ex: "D12")\n   → False, False = format relatif sans $\n\n🎯 Points pédagogiques :\n\n• Insister sur l\'importance des contrôles d\'erreur\n• Expliquer Exit Sub vs End Sub\n• Montrer les différents types de MsgBox (vbInformation, vbExclamation)\n• Expliquer la différence entre bordures intérieures et extérieures\n• Montrer comment construire des messages dynamiques\n• Expliquer l\'assignation de macro à un bouton'
  },
  {
    id: 'excel-macro-04',
    category: 'Excel',
    title: 'Macro multi-feuilles',
    duration: '60 minutes',
    objective: 'Travailler sur plusieurs feuilles automatiquement.\nAutomatiser à l\'échelle du classeur.',
    context: 'Tu as 3 feuilles (Janvier, Février, Mars). Sur chacune, un tableau commence en A1. Écris une macro qui formate automatiquement tous les tableaux.',
    generalInstructions: [
      'Utiliser For Each ws In Worksheets',
      'Compter le nombre de feuilles traitées',
      'Un seul MsgBox final',
      'Ignorer les feuilles où A1 est vide'
    ],
    steps: [
      {
        number: 1,
        title: 'Préparer les feuilles',
        instructions: [
          'Créez 3 feuilles : Janvier, Février, Mars',
          'Sur chaque feuille, créez un tableau commençant en A1',
          'Les tableaux peuvent avoir des tailles différentes',
          'Laissez une feuille vide pour tester'
        ]
      },
      {
        number: 2,
        title: 'Créer la boucle sur les feuilles',
        instructions: [
          'Utilisez For Each ws In Worksheets',
          'Pour chaque feuille :',
          '• Vérifiez si A1 est vide → ignorer',
          '• Sinon : détecter le tableau et le formater',
          '• Compter les feuilles traitées'
        ]
      },
      {
        number: 3,
        title: 'Formatage uniforme',
        instructions: [
          'Pour chaque tableau trouvé :',
          '• Mettre l\'en-tête en gris foncé',
          '• Mettre des bordures',
          '• Ajuster les colonnes',
          '',
          'Le formatage doit être identique sur toutes les feuilles'
        ]
      },
      {
        number: 4,
        title: 'Message final',
        instructions: [
          'À la fin, affichez un message :',
          '"X feuilles traitées avec succès"',
          '',
          'X doit correspondre au nombre réel de feuilles formatées'
        ]
      }
    ],
    deliverables: [
      'Une macro qui traite toutes les feuilles automatiquement',
      'Comptage correct des feuilles traitées',
      'Message final informatif'
    ],
    reflectionQuestions: [],
    trainerScript: '💣 Opinion clivante :\n\n"Le vrai pouvoir des macros commence quand tu automatises des ensembles, pas des cellules."\n\n🧠 Ce que tu apprends :\n\n• Boucles sur objets\n• Automatisation à l\'échelle du classeur\n• Comptage\n• Logique de traitement batch\n\n📋 Correction détaillée :\n\n```vba\nSub FormatToutesLesFeuilles()\n    Dim ws As Worksheet\n    Dim tbl As Range\n    Dim lastRow As Long\n    Dim lastCol As Long\n    Dim compteur As Integer\n    \n    compteur = 0\n    \n    \' Parcourt toutes les feuilles\n    For Each ws In Worksheets\n        \' Vérifie si A1 est vide\n        If Not IsEmpty(ws.Range("A1")) Then\n            \' Détection dynamique sur cette feuille\n            lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row\n            lastCol = ws.Cells(1, ws.Columns.Count).End(xlToLeft).Column\n            Set tbl = ws.Range(ws.Cells(1, 1), ws.Cells(lastRow, lastCol))\n            \n            \' Formatage\n            tbl.Rows(1).Font.Color = RGB(64, 64, 64)  \' Gris foncé\n            tbl.Rows(1).Font.Bold = True\n            tbl.Borders.LineStyle = xlContinuous\n            tbl.Borders.Weight = xlThin\n            tbl.Columns.AutoFit\n            \n            \' Incrémente le compteur\n            compteur = compteur + 1\n        End If\n    Next ws\n    \n    \' Message final\n    MsgBox compteur & " feuilles traitées avec succès", vbInformation, "Résultat"\nEnd Sub\n```\n\n💡 Explication détaillée :\n\n1. `For Each ws In Worksheets`\n   → Parcourt toutes les feuilles du classeur\n   → ws = variable qui représente chaque feuille\n   → Worksheets = collection de toutes les feuilles\n\n2. `If Not IsEmpty(ws.Range("A1")) Then`\n   → Vérifie si A1 de cette feuille est vide\n   → Not = inverse la condition (si NON vide)\n   → ws.Range() = range sur la feuille spécifique\n\n3. `ws.Cells(ws.Rows.Count, 1)`\n   → Accède aux cellules de la feuille ws\n   → Important : toujours préfixer avec ws. pour cibler la bonne feuille\n\n4. `compteur = compteur + 1`\n   → Incrémente le compteur à chaque feuille traitée\n   → Permet de compter combien de feuilles ont été formatées\n\n5. `Next ws`\n   → Passe à la feuille suivante dans la boucle\n\n6. `MsgBox compteur & " feuilles traitées..."`\n   → Affiche le nombre de feuilles traitées\n   → & = concaténation de texte\n\n🎯 Points pédagogiques :\n\n• Expliquer la boucle For Each sur une collection\n• Insister sur l\'importance de préfixer avec ws.\n• Montrer comment compter dans une boucle\n• Expliquer pourquoi on ignore les feuilles vides\n• Comparer avec une macro qui ne traite qu\'une feuille\n• Montrer la puissance de l\'automatisation batch\n\n💡 Variante avancée (bonus) :\n\nPour traiter seulement certaines feuilles :\n\n```vba\nFor Each ws In Worksheets\n    If ws.Name Like "Janvier*" Or ws.Name Like "Février*" Then\n        \' Traiter seulement les feuilles qui commencent par Janvier ou Février\n    End If\nNext ws\n```'
  },
  {
    id: 'powerquery-nettoyage-01',
    category: 'PowerQuery',
    title: 'Nettoyage de base et typage',
    duration: '30 minutes',
    objective: '🎯 Compétence travaillée\n\n• Importer un fichier\n• Comprendre les types de données\n• Supprimer lignes vides et erreurs simples\n\n🧠 Ce que l\'apprenant doit comprendre\n\n• Rôle fondamental du typage\n• Différence entre :\n  - Remplacer les valeurs\n  - Remplacer les erreurs\n• Principe : corriger à la source, pas masquer après coup\n\n💣 Opinion clivante pédagogique :\n\nTant que les types ne sont pas propres, toute analyse est fausse.',
    context: 'Tu reçois un fichier avec les colonnes :\n• Nom\n• Prénom\n• Salaire (texte)\n• Date_embauche (formats mixtes)\n• Service\n\nProblèmes identifiés :\n• Salaire est en texte\n• Certaines dates sont invalides\n• Il y a au moins une ligne vide',
    generalInstructions: [
      'Travaillez dans Power Query (Excel → Données → Obtenir des données)',
      'Ne modifiez pas le fichier source directement',
      'Chaque étape doit être nommée clairement',
      'Vérifiez les types de données après chaque transformation'
    ],
    steps: [
      {
        number: 1,
        title: 'Importer le fichier',
        duration: '5 min',
        instructions: [
          'Ouvrez Excel',
          'Allez dans Données → Obtenir des données → Depuis un fichier → Depuis un texte/CSV',
          'Sélectionnez le fichier PowerQuery_Ex1_DonneesBrutes.csv',
          'Dans l\'aperçu, vérifiez que les colonnes sont détectées',
          'Cliquez sur Charger'
        ]
      },
      {
        number: 2,
        title: 'Supprimer les lignes vides',
        duration: '5 min',
        instructions: [
          'Dans l\'éditeur Power Query, sélectionnez toutes les colonnes',
          'Allez dans Accueil → Réduire les lignes → Supprimer les lignes vides',
          'Vérifiez que les lignes totalement vides ont disparu'
        ]
      },
      {
        number: 3,
        title: 'Convertir Salaire en nombre',
        duration: '5 min',
        instructions: [
          'Sélectionnez la colonne Salaire',
          'Cliquez sur le type de données (icône "ABC" ou "123")',
          'Choisissez Nombre entier ou Nombre décimal',
          'Si des erreurs apparaissent, utilisez Remplacer les erreurs → null',
          'Vérifiez que l\'icône de type est maintenant "123"'
        ]
      },
      {
        number: 4,
        title: 'Convertir Date_embauche en date',
        duration: '10 min',
        instructions: [
          'Sélectionnez la colonne Date_embauche',
          'Changez le type en Date',
          'Power Query va détecter automatiquement les formats valides',
          'Pour les dates invalides, utilisez Remplacer les erreurs → null',
          'Vérifiez que l\'icône de type est maintenant un calendrier',
          'Les dates valides doivent être au format cohérent'
        ]
      },
      {
        number: 5,
        title: 'Vérification finale',
        duration: '5 min',
        instructions: [
          'Parcourez toutes les colonnes',
          'Vérifiez qu\'il n\'y a plus aucune cellule "Erreur"',
          'Vérifiez les icônes de type :',
          '  • Salaire → 123',
          '  • Date_embauche → calendrier',
          'Chargez le résultat dans Excel'
        ]
      }
    ],
    deliverables: [
      'Un tableau sans lignes vides',
      'Colonne Salaire en type Nombre',
      'Colonne Date_embauche en type Date',
      'Toutes les erreurs remplacées par null',
      'Aucune cellule "Erreur" visible'
    ],
    reflectionQuestions: [
      'Pourquoi est-il important de corriger les types avant de faire des calculs ?',
      'Quelle est la différence entre "Remplacer les valeurs" et "Remplacer les erreurs" ?',
      'Que se passe-t-il si vous gardez Salaire en texte et essayez de faire une moyenne ?'
    ],
    files: [
      {
        name: 'PowerQuery_Ex1_DonneesBrutes.csv',
        path: '/templates/PowerQuery_Ex1_DonneesBrutes.csv',
        type: 'download'
      }
    ],
    trainerScript: '💣 Message pédagogique clé :\n\n"Tant que les types ne sont pas propres, toute analyse est fausse."\n\n🧠 Ce que l\'apprenant apprend :\n\n• Rôle fondamental du typage\n• Différence entre remplacer les valeurs et remplacer les erreurs\n• Principe : corriger à la source, pas masquer après coup\n\n📋 Correction détaillée étape par étape :\n\n**Étape 1 – Import**\n\n• Données → Obtenir des données → Depuis un fichier → Depuis un texte/CSV\n• Sélectionner PowerQuery_Ex1_DonneesBrutes.csv\n• Dans l\'aperçu, vérifier le délimiteur (virgule)\n• Encodage : UTF-8\n• Cliquer sur Charger\n\n**Étape 2 – Supprimer lignes vides**\n\n• Sélectionner toutes les colonnes (Ctrl+A ou clic sur en-tête)\n• Accueil → Réduire les lignes → Supprimer les lignes vides\n• ⚠️ Important : cette action supprime uniquement les lignes où TOUTES les colonnes sont vides\n• Vérifier que la ligne 7 (vide) a disparu\n\n**Étape 3 – Convertir Salaire en nombre**\n\n• Cliquer sur l\'icône "ABC" en haut de la colonne Salaire\n• Choisir "Nombre entier" ou "Nombre décimal"\n• Power Query va convertir :\n  - "3200" → 3200 ✓\n  - "abc" → Erreur ✗\n• Pour gérer l\'erreur :\n  - Clic droit sur la colonne → Remplacer les erreurs\n  - Valeur de remplacement : null\n• Résultat : toutes les valeurs textes invalides deviennent null\n• Vérifier l\'icône de type : doit être "123"\n\n**Étape 4 – Convertir Date_embauche en date**\n\n• Cliquer sur l\'icône de type de la colonne Date_embauche\n• Choisir "Date"\n• Power Query va détecter automatiquement :\n  - 12/03/2020 → 12/03/2020 ✓\n  - 2020-09-10 → 10/09/2020 ✓\n  - invalid-date → Erreur ✗\n  - (vide) → null\n• Pour les erreurs : Remplacer les erreurs → null\n• Vérifier l\'icône de type : doit être un calendrier 📅\n\n**Étape 5 – Vérification finale**\n\n• Parcourir toutes les colonnes\n• Vérifier qu\'il n\'y a plus aucune cellule "Erreur"\n• Vérifier les types :\n  - Nom, Prénom, Service → Texte (ABC)\n  - Salaire → Nombre (123)\n  - Date_embauche → Date (calendrier)\n• Charger dans Excel\n\n🎯 Points pédagogiques à aborder :\n\n1. **Pourquoi le typage est fondamental**\n   → Une moyenne sur du texte = erreur\n   → Un tri de dates en texte = faux ordre\n   → Un filtre sur des nombres en texte = ne fonctionne pas\n\n2. **Remplacer les valeurs vs Remplacer les erreurs**\n   → Remplacer les valeurs : remplace des valeurs spécifiques (ex: "N/A" → null)\n   → Remplacer les erreurs : remplace TOUTES les erreurs (ex: conversion impossible)\n   → ⚠️ Ne pas confondre : une erreur n\'est pas une valeur\n\n3. **Corriger à la source**\n   → Mieux vaut nettoyer dans Power Query que masquer dans Excel\n   → Les transformations sont reproductibles\n   → Si le fichier source change, le nettoyage se refait automatiquement\n\n💡 Erreurs fréquentes des apprenants :\n\n• Oublier de supprimer les lignes vides avant la conversion\n• Confondre "Remplacer les valeurs" et "Remplacer les erreurs"\n• Ne pas vérifier les types après conversion\n• Essayer de corriger manuellement dans Excel au lieu de Power Query\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi Salaire est-il en texte dans le fichier source ?" (souvent export depuis un système)\n• "Que se passerait-il si vous gardiez Salaire en texte et faisiez une moyenne ?" (erreur #VALEUR!)\n• "Pourquoi certaines dates sont-elles invalides ?" (formats mixtes, saisie manuelle)\n• "Quelle est la différence entre une cellule vide et une cellule avec null ?" (null = valeur manquante connue, vide = peut être accidentel)\n\n💣 Phrase d\'impact à dire :\n\n"Un fichier avec des types propres, c\'est comme une maison avec des fondations solides. Sans ça, tout s\'effondre au premier calcul."'
  },
  {
    id: 'powerquery-transformation-02',
    category: 'PowerQuery',
    title: 'Transformation logique + colonne métier',
    duration: '35 minutes',
    objective: '🎯 Compétence travaillée\n\n• Ajouter une colonne calculée\n• Utiliser une logique conditionnelle\n• Lire une étape M simple\n\n🧠 Ce que l\'apprenant apprend\n\n• Logique conditionnelle dans Power Query\n• Notion de règle métier encodée\n• Lecture du M généré\n\n💣 Opinion clivante :\n\nPower Query est un moteur de règles, pas un simple outil de nettoyage.',
    context: 'À partir d\'un tableau propre contenant :\n• Nom\n• Salaire (nombre)\n• Service\n\nTu dois créer une colonne Catégorie_salaire selon la règle métier :\n\n• Salaire < 2500 → "Bas"\n• 2500 ≤ Salaire < 3500 → "Moyen"\n• Salaire ≥ 3500 → "Élevé"',
    generalInstructions: [
      'Utilisez le fichier PowerQuery_Ex2_DonneesPropres.csv',
      'Travaillez dans Power Query',
      'Nommez proprement chaque étape',
      'Vérifiez la logique conditionnelle avant de charger'
    ],
    steps: [
      {
        number: 1,
        title: 'Importer le fichier propre',
        duration: '5 min',
        instructions: [
          'Ouvrez Excel',
          'Données → Obtenir des données → Depuis un fichier → Depuis un texte/CSV',
          'Sélectionnez PowerQuery_Ex2_DonneesPropres.csv',
          'Vérifiez que les types sont corrects (Salaire en nombre)',
          'Chargez dans l\'éditeur Power Query'
        ]
      },
      {
        number: 2,
        title: 'Ajouter une colonne personnalisée',
        duration: '10 min',
        instructions: [
          'Allez dans Ajouter une colonne → Colonne personnalisée',
          'Nom de la colonne : Catégorie_salaire',
          'Formule :',
          '= if [Salaire] < 2500 then "Bas"',
          '  else if [Salaire] < 3500 then "Moyen"',
          '  else "Élevé"',
          '⚠️ Attention à la syntaxe : if ... then ... else',
          'Cliquez sur OK'
        ]
      },
      {
        number: 3,
        title: 'Vérifier la logique',
        duration: '10 min',
        instructions: [
          'Parcourez les résultats',
          'Vérifiez que chaque salaire a la bonne catégorie :',
          '  • Salaire < 2500 → "Bas"',
          '  • 2500 ≤ Salaire < 3500 → "Moyen"',
          '  • Salaire ≥ 3500 → "Élevé"',
          'Si une catégorie est incorrecte, modifiez la formule'
        ]
      },
      {
        number: 4,
        title: 'Nommer l\'étape',
        duration: '5 min',
        instructions: [
          'Dans le volet Appliquer les étapes, trouvez l\'étape "Colonne personnalisée ajoutée"',
          'Renommez-la : "Ajout catégorie salaire"',
          'Un nom clair facilite la maintenance'
        ]
      },
      {
        number: 5,
        title: 'Charger le résultat',
        duration: '5 min',
        instructions: [
          'Vérifiez qu\'il n\'y a pas d\'erreurs',
          'Cliquez sur Fermer et charger',
          'Le tableau final doit contenir :',
          '  • Les colonnes originales',
          '  • La nouvelle colonne Catégorie_salaire',
          'Toutes les valeurs doivent être correctes'
        ]
      }
    ],
    deliverables: [
      'Une colonne Catégorie_salaire correctement remplie',
      'Formule conditionnelle sans erreur',
      'Étape clairement nommée',
      'Tableau final chargé dans Excel'
    ],
    reflectionQuestions: [
      'Pourquoi utiliser une formule conditionnelle plutôt que de créer la colonne manuellement ?',
      'Que se passe-t-il si vous modifiez la règle métier ? (ex: seuil à 3000 au lieu de 3500)',
      'Comment pourriez-vous ajouter une quatrième catégorie (ex: "Très élevé" pour Salaire ≥ 5000) ?'
    ],
    files: [
      {
        name: 'PowerQuery_Ex2_DonneesPropres.csv',
        path: '/templates/PowerQuery_Ex2_DonneesPropres.csv',
        type: 'download'
      }
    ],
    trainerScript: '💣 Message pédagogique clé :\n\n"Power Query est un moteur de règles, pas un simple outil de nettoyage."\n\n🧠 Ce que l\'apprenant apprend :\n\n• Logique conditionnelle dans Power Query\n• Notion de règle métier encodée\n• Lecture du M généré\n\n📋 Correction détaillée étape par étape :\n\n**Étape 1 – Import**\n\n• Données → Obtenir des données → Depuis un fichier → Depuis un texte/CSV\n• Sélectionner PowerQuery_Ex2_DonneesPropres.csv\n• Vérifier les types : Salaire doit être en nombre\n• Charger dans l\'éditeur Power Query\n\n**Étape 2 – Ajouter colonne personnalisée**\n\n• Ajouter une colonne → Colonne personnalisée\n• Nom : Catégorie_salaire\n• Formule M :\n\n```m\n= if [Salaire] < 2500 then "Bas"\n  else if [Salaire] < 3500 then "Moyen"\n  else "Élevé"\n```\n\n⚠️ **Syntaxe importante** :\n• `if` en minuscules\n• `then` obligatoire\n• `else` pour les cas suivants\n• Crochets `[]` pour référencer une colonne\n• Guillemets `""` pour les textes\n• Pas de point-virgule à la fin\n\n**Explication de la logique** :\n\n1. Si Salaire < 2500 → "Bas"\n2. Sinon, si Salaire < 3500 → "Moyen" (donc entre 2500 et 3499)\n3. Sinon → "Élevé" (donc ≥ 3500)\n\n**Vérification des résultats** :\n\n• 2800 → "Moyen" ✓ (2800 ≥ 2500 et < 3500)\n• 3200 → "Moyen" ✓\n• 3800 → "Élevé" ✓ (≥ 3500)\n• 4100 → "Élevé" ✓\n• 4500 → "Élevé" ✓\n\n**Étape 3 – Nommer l\'étape**\n\n• Dans le volet Appliquer les étapes (à droite)\n• Trouver "Colonne personnalisée ajoutée"\n• Clic droit → Renommer\n• Nouveau nom : "Ajout catégorie salaire"\n• ⚠️ Un nom clair facilite la maintenance future\n\n**Étape 4 – Vérification finale**\n\n• Parcourir toutes les lignes\n• Vérifier que chaque salaire a la bonne catégorie\n• Vérifier qu\'il n\'y a pas d\'erreurs\n• Charger dans Excel\n\n🎯 Points pédagogiques à aborder :\n\n1. **Pourquoi une formule plutôt que manuel ?**\n   → Reproductible si le fichier source change\n   → Règle métier encodée une seule fois\n   → Pas d\'erreur de saisie\n   → Facile à modifier si la règle change\n\n2. **Lecture du M généré**\n   → Power Query génère automatiquement du code M\n   → On peut le voir dans la barre de formule\n   → Comprendre le M permet de débugger\n   → Exemple : `Table.AddColumn(Source, "Catégorie_salaire", each if [Salaire] < 2500 then "Bas" else ...)`\n\n3. **Logique conditionnelle imbriquée**\n   → `if ... then ... else if ... then ... else`\n   → L\'ordre des conditions est important\n   → La première condition vraie gagne\n   → ⚠️ Ne pas inverser l\'ordre (ex: tester ≥ 3500 avant < 2500)\n\n💡 Erreurs fréquentes des apprenants :\n\n• Oublier `then` après `if`\n• Mettre des points-virgules à la fin\n• Utiliser `=` au lieu de `==` (M utilise `=` pour comparaison)\n• Oublier les guillemets autour des textes\n• Inverser l\'ordre des conditions\n• Ne pas nommer l\'étape\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi utiliser une formule plutôt que de créer la colonne manuellement dans Excel ?" (reproductibilité)\n• "Que se passerait-il si vous modifiez le fichier source et rechargez ?" (la colonne se recalcule automatiquement)\n• "Comment ajouteriez-vous une quatrième catégorie ?" (ajouter un `else if`)\n• "Pourquoi l\'ordre des conditions est-il important ?" (la première vraie gagne)\n\n💣 Variante avancée (bonus) :\n\nPour ajouter une catégorie "Très élevé" (≥ 5000) :\n\n```m\n= if [Salaire] < 2500 then "Bas"\n  else if [Salaire] < 3500 then "Moyen"\n  else if [Salaire] < 5000 then "Élevé"\n  else "Très élevé"\n```\n\n💣 Phrase d\'impact à dire :\n\n"Power Query transforme une règle métier en code. Une fois codée, la règle devient automatique, reproductible et auditable."'
  },
  {
    id: 'powerquery-fusion-03',
    category: 'PowerQuery',
    title: 'Fusion de deux tables',
    duration: '40 minutes',
    objective: '🎯 Compétence travaillée\n\n• Comprendre une jointure\n• Fusionner deux sources\n• Gérer les clés\n\n🧠 Ce que l\'apprenant apprend\n\n• Principe des clés\n• Différence entre :\n  - jointure gauche (Left outer)\n  - droite (Right outer)\n  - interne (Inner)\n• Risque des types incohérents\n\n💣 Opinion clivante :\n\nUn mauvais type sur une clé détruit une jointure sans prévenir.',
    context: 'Tu as deux fichiers :\n\n**Fichier 1 – Employés**\n• Matricule\n• Nom\n• Service\n\n**Fichier 2 – Salaires**\n• Matricule\n• Salaire\n\n**Objectif** :\nProduire une table finale avec : Matricule | Nom | Service | Salaire',
    generalInstructions: [
      'Importez les deux fichiers CSV',
      'Vérifiez que Matricule est du même type dans les deux tables',
      'Utilisez Fusionner des requêtes',
      'Choisissez le bon type de jointure',
      'Développez la colonne fusionnée'
    ],
    steps: [
      {
        number: 1,
        title: 'Importer les deux fichiers',
        duration: '10 min',
        instructions: [
          'Importez PowerQuery_Ex3_Employes.csv',
          'Importez PowerQuery_Ex3_Salaires.csv',
          'Vérifiez que chaque fichier est chargé comme une requête séparée',
          'Vérifiez les types de données de chaque colonne'
        ]
      },
      {
        number: 2,
        title: 'Vérifier les types des clés',
        duration: '5 min',
        instructions: [
          'Dans la requête Employés, vérifiez que Matricule est en texte',
          'Dans la requête Salaires, vérifiez que Matricule est en texte',
          '⚠️ Si les types sont différents, convertissez-les pour qu\'ils correspondent',
          'Les types doivent être identiques pour une jointure réussie'
        ]
      },
      {
        number: 3,
        title: 'Fusionner les requêtes',
        duration: '10 min',
        instructions: [
          'Sélectionnez la requête Employés',
          'Allez dans Accueil → Fusionner des requêtes',
          'Sélectionnez la requête Salaires dans la liste déroulante',
          'Sélectionnez la colonne Matricule dans les deux tables',
          'Type de jointure : Gauche (Left outer)',
          'Cliquez sur OK'
        ]
      },
      {
        number: 4,
        title: 'Développer la colonne fusionnée',
        duration: '5 min',
        instructions: [
          'Une nouvelle colonne "Salaires" apparaît',
          'Cliquez sur l\'icône de développement (flèche double) en haut de la colonne',
          'Décochez "Matricule" (déjà présent)',
          'Cochez "Salaire"',
          'Cliquez sur OK'
        ]
      },
      {
        number: 5,
        title: 'Vérification finale',
        duration: '10 min',
        instructions: [
          'Vérifiez que chaque employé a son salaire',
          'Vérifiez qu\'il n\'y a pas de doublons inattendus',
          'Vérifiez qu\'aucun salaire n\'est décalé (mauvais employé)',
          'Le tableau final doit contenir : Matricule | Nom | Service | Salaire',
          'Chargez le résultat dans Excel'
        ]
      }
    ],
    deliverables: [
      'Deux requêtes importées correctement',
      'Types de clés cohérents',
      'Jointure gauche réussie',
      'Colonne fusionnée développée',
      'Tableau final avec toutes les colonnes attendues'
    ],
    reflectionQuestions: [
      'Pourquoi est-il crucial que Matricule soit du même type dans les deux tables ?',
      'Quelle est la différence entre une jointure gauche, droite et interne ?',
      'Que se passerait-il si un employé n\'avait pas de salaire dans le fichier Salaires ?',
      'Que se passerait-il si un salaire n\'avait pas d\'employé correspondant ?'
    ],
    files: [
      {
        name: 'PowerQuery_Ex3_Employes.csv',
        path: '/templates/PowerQuery_Ex3_Employes.csv',
        type: 'download'
      },
      {
        name: 'PowerQuery_Ex3_Salaires.csv',
        path: '/templates/PowerQuery_Ex3_Salaires.csv',
        type: 'download'
      }
    ],
    trainerScript: '💣 Message pédagogique clé :\n\n"Un mauvais type sur une clé détruit une jointure sans prévenir."\n\n🧠 Ce que l\'apprenant apprend :\n\n• Principe des clés\n• Différence entre jointure gauche, droite et interne\n• Risque des types incohérents\n\n📋 Correction détaillée étape par étape :\n\n**Étape 1 – Importer les deux fichiers**\n\n• Données → Obtenir des données → Depuis un fichier → Depuis un texte/CSV\n• Importer PowerQuery_Ex3_Employes.csv\n  → Renommer la requête : "Employes"\n  → Colonnes : Matricule, Nom, Service\n• Importer PowerQuery_Ex3_Salaires.csv\n  → Renommer la requête : "Salaires"\n  → Colonnes : Matricule, Salaire\n• ⚠️ Important : chaque fichier devient une requête séparée\n• Vérifier que les deux requêtes apparaissent dans le volet gauche\n\n**Étape 2 – Vérifier les types des clés**\n\n• Dans la requête Employes :\n  → Vérifier que Matricule est en texte (icône ABC)\n  → Si ce n\'est pas le cas : changer le type → Texte\n• Dans la requête Salaires :\n  → Vérifier que Matricule est en texte (icône ABC)\n  → Si ce n\'est pas le cas : changer le type → Texte\n• ⚠️ **CRUCIAL** : Les deux colonnes Matricule doivent avoir le même type\n• Si un Matricule est "E001" (texte) et l\'autre 1 (nombre), la jointure échouera\n\n**Étape 3 – Fusionner les requêtes**\n\n• Sélectionner la requête "Employes" (table de gauche)\n• Accueil → Fusionner des requêtes\n• Dans la fenêtre de fusion :\n  → Table supérieure : Employes\n  → Table inférieure : Salaires\n  → Sélectionner la colonne Matricule dans les deux tables\n  → Type de jointure : **Gauche (Left outer)**\n  → ⚠️ Gauche = garde tous les employés, même sans salaire\n• Cliquer sur OK\n• Résultat : une nouvelle colonne "Salaires" apparaît (de type Table)\n\n**Explication des types de jointure** :\n\n• **Gauche (Left outer)** :\n  → Garde toutes les lignes de la table de gauche (Employes)\n  → Ajoute les colonnes de la table de droite (Salaires) si correspondance\n  → Si pas de correspondance → valeurs null\n  → ✅ Utilisé ici : on veut tous les employés\n\n• **Droite (Right outer)** :\n  → Garde toutes les lignes de la table de droite (Salaires)\n  → Ajoute les colonnes de la table de gauche (Employes) si correspondance\n  → Si pas de correspondance → valeurs null\n\n• **Interne (Inner)** :\n  → Garde uniquement les lignes avec correspondance dans les deux tables\n  → Si un employé n\'a pas de salaire → exclu\n  → Si un salaire n\'a pas d\'employé → exclu\n\n**Étape 4 – Développer la colonne fusionnée**\n\n• La colonne "Salaires" contient des tables (icône de table)\n• Cliquer sur l\'icône de développement (flèche double) en haut de la colonne\n• Dans la fenêtre :\n  → Décocher "Matricule" (déjà présent dans la table)\n  → Cocher "Salaire"\n  → Décocher "Utiliser le nom de colonne d\'origine comme préfixe"\n  → Cliquer sur OK\n• Résultat : la colonne "Salaires" disparaît, remplacée par "Salaire"\n\n**Étape 5 – Vérification finale**\n\n• Le tableau final doit contenir :\n  → Matricule | Nom | Service | Salaire\n• Vérifier que chaque employé a son salaire :\n  → E001 → 3200 ✓\n  → E002 → 4100 ✓\n  → E003 → 3800 ✓\n  → etc.\n• Vérifier qu\'il n\'y a pas de doublons\n• Vérifier qu\'aucun salaire n\'est décalé\n• Charger dans Excel\n\n🎯 Points pédagogiques à aborder :\n\n1. **Pourquoi les types doivent être identiques ?**\n   → Power Query compare les valeurs pour faire la jointure\n   → "E001" (texte) ≠ 1 (nombre)\n   → Même si visuellement similaires, types différents = pas de correspondance\n   → ⚠️ Erreur silencieuse : la jointure semble réussir mais ne trouve rien\n\n2. **Jointure gauche vs droite vs interne**\n   → Gauche : tous les employés, même sans salaire\n   → Droite : tous les salaires, même sans employé\n   → Interne : seulement les correspondances\n   → Le choix dépend du besoin métier\n\n3. **Clé primaire et clé étrangère**\n   → Matricule = clé primaire dans Employes (unique)\n   → Matricule = clé étrangère dans Salaires (référence)\n   → Une clé doit être unique dans la table principale\n   → ⚠️ Si un Matricule apparaît deux fois dans Employes → doublons dans le résultat\n\n💡 Erreurs fréquentes des apprenants :\n\n• Oublier de vérifier les types avant la fusion\n• Choisir le mauvais type de jointure\n• Oublier de développer la colonne fusionnée\n• Ne pas décocher "Matricule" lors du développement (doublon)\n• Ne pas vérifier que les salaires correspondent aux bons employés\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi Matricule doit-il être du même type dans les deux tables ?" (comparaison)\n• "Que se passerait-il si un employé n\'avait pas de salaire ?" (null avec jointure gauche)\n• "Que se passerait-il si un salaire n\'avait pas d\'employé correspondant ?" (exclu avec jointure gauche)\n• "Pourquoi choisir une jointure gauche plutôt qu\'interne ?" (garder tous les employés)\n\n💣 Scénario de test (bonus) :\n\nPour tester la jointure gauche :\n• Ajouter un employé E008 sans salaire dans le fichier Employes\n• Recharger la requête\n• Vérifier que E008 apparaît avec Salaire = null\n\nPour tester la jointure interne :\n• Changer le type de jointure en Interne\n• Vérifier que E008 disparaît (pas de correspondance)\n\n💣 Phrase d\'impact à dire :\n\n"Une jointure, c\'est comme un mariage : il faut que les clés correspondent, sinon ça ne matche pas. Et un mauvais type, c\'est comme un nom mal orthographié : ça ressemble, mais ça ne fonctionne pas."'
  }
];

export const categories: ExerciceCategory[] = ['Word', 'Excel', 'Outlook', 'OneDrive', 'OneNote', 'PowerQuery'];

export const getExercicesByCategory = (category: ExerciceCategory): Exercice[] => {
  return exercices.filter(ex => ex.category === category);
};

export const getExerciceById = (id: string): Exercice | undefined => {
  return exercices.find(ex => ex.id === id);
};
