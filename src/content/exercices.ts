export type ExerciceCategory = 'Word' | 'Excel' | 'Outlook' | 'OneDrive' | 'OneNote';

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
  }
];

export const categories: ExerciceCategory[] = ['Word', 'Excel', 'Outlook', 'OneDrive', 'OneNote'];

export const getExercicesByCategory = (category: ExerciceCategory): Exercice[] => {
  return exercices.filter(ex => ex.category === category);
};

export const getExerciceById = (id: string): Exercice | undefined => {
  return exercices.find(ex => ex.id === id);
};
