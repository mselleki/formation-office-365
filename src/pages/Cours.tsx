import { Link } from 'react-router-dom'

const oneDriveCourseSections = [
  {
    title: '1) Objectifs pédagogiques',
    items: [
      'Comprendre la différence entre stockage local, synchronisation et cloud.',
      'Construire une arborescence projet claire, durable et partageable.',
      'Partager des fichiers/dossiers avec le bon niveau de droits selon les rôles.',
      'Gérer les conflits de synchronisation, les versions et les suppressions accidentelles.',
      'Mettre en place des règles simples de gouvernance documentaire.'
    ]
  },
  {
    title: '2) Prérequis et cadre de travail',
    items: [
      'Compte Microsoft 365 actif (OneDrive entreprise).',
      'Client OneDrive installé et connecté sur le poste.',
      'Explorateur de fichiers accessible et synchronisation opérationnelle.',
      'Un jeu de documents de test (Word, Excel, PDF) pour les manipulations.'
    ]
  },
  {
    title: '3) Fondamentaux OneDrive (théorie utile)',
    items: [
      'OneDrive n’est pas un simple disque en ligne : c’est un espace personnel synchronisé.',
      'Deux copies coexistent : une copie locale (poste) et une copie cloud (Microsoft 365).',
      'La synchronisation pousse/reçoit les changements selon l’état réseau.',
      'L’historique des versions permet de restaurer un état antérieur sans perdre la traçabilité.',
      'Corbeille locale et corbeille OneDrive ne jouent pas le même rôle.'
    ]
  },
  {
    title: '4) Arborescence recommandée (standard équipe)',
    items: [
      'Créer une structure stable : 00_Admin, 01_Entrants, 02_Travail, 03_Livrables, 99_Archives.',
      'Limiter la profondeur inutile des dossiers (lecture rapide et maintenance).',
      'Adopter un format de nommage : AAAA-MM-JJ_Type_Sujet_Version.',
      'Éviter les noms ambigus : utiliser un vocabulaire métier commun.',
      'Ne jamais stocker les pièces critiques uniquement dans un poste non synchronisé.'
    ]
  },
  {
    title: '5) Partage et droits (cas pratiques)',
    items: [
      'Partage fichier : périmètre limité, contrôle précis, idéal pour des validations ponctuelles.',
      'Partage dossier : plus simple, mais expose aussi les futurs fichiers ajoutés.',
      'Droit Lecture vs Modification : choisir le minimum nécessaire.',
      'Lien interne organisation vs lien externe : respecter la politique de sécurité.',
      'Toujours vérifier "Qui a accès ?" après chaque partage sensible.'
    ]
  },
  {
    title: '6) Synchronisation et gestion des incidents',
    items: [
      'Icônes clés : nuage (cloud), coche verte (local synchronisé), flèches (sync en cours).',
      'Conflits fréquents : même fichier modifié en parallèle, réseau instable, renommages concurrents.',
      'Réflexe formateur : suspendre la sync, isoler le fichier, comparer, fusionner, relancer.',
      'En cas de suppression : vérifier corbeille OneDrive puis restauration de version si besoin.',
      'Avant intervention lourde : créer un point de contrôle (copie datée) pour rollback rapide.'
    ]
  },
  {
    title: '7) Déroulé de séance formateur (90 min)',
    items: [
      '15 min : cadrage (ce que OneDrive fait, ce qu’il ne fait pas, erreurs classiques).',
      '20 min : démonstration guidée (arborescence + règles de nommage + partage).',
      '20 min : atelier apprenants (création d’un espace projet et partage contrôlé).',
      '20 min : incident simulé (offline, conflit de version, restauration).',
      '15 min : débrief + checklist de bonnes pratiques + évaluation rapide.'
    ]
  },
  {
    title: '8) Atelier pratique pas à pas',
    items: [
      'Créer le dossier "RisingStars_2026" avec sous-dossiers normalisés.',
      'Déposer 3 fichiers (brief.docx, budget.xlsx, planning.xlsx).',
      'Partager le dossier "03_Livrables" en lecture à un profil "Direction".',
      'Partager "02_Travail" en modification à un profil "Equipe projet".',
      'Modifier un fichier hors ligne, reconnecter, observer la reprise de synchronisation.',
      'Restaurer une version antérieure sur un fichier volontairement dégradé.'
    ]
  },
  {
    title: '9) Erreurs fréquentes et contre-mesures',
    items: [
      'Erreur : partager trop large par défaut. Contre-mesure : principe du moindre privilège.',
      'Erreur : noms de fichiers non standard. Contre-mesure : convention écrite et contrôlée.',
      'Erreur : travailler en local hors zone OneDrive. Contre-mesure : dossiers projet imposés.',
      'Erreur : ignorer les alertes sync. Contre-mesure : routine de vérification quotidienne.',
      'Erreur : confondre sauvegarde et synchronisation. Contre-mesure : expliquer la nuance explicitement.'
    ]
  },
  {
    title: '10) Critères d’évaluation (validation apprenant)',
    items: [
      'Arborescence cohérente, lisible, et conforme au standard proposé.',
      'Partages configurés correctement selon 2 profils différents.',
      'Gestion autonome d’une restauration de version.',
      'Capacité à expliquer clairement la différence sync / sauvegarde.',
      'Respect de la convention de nommage sur les livrables.'
    ]
  }
]

const wordCourseSections = [
  {
    title: '1) Objectifs pédagogiques',
    items: [
      'Structurer un document long avec les styles Word (Titre 1, Titre 2, Normal).',
      'Construire une mise en forme professionnelle cohérente et réutilisable.',
      'Travailler en collaboration avec commentaires et suivi des modifications.',
      'Produire des courriers personnalisés via publipostage.',
      'Livrer une version finale propre, contrôlée et prête à diffusion.'
    ]
  },
  {
    title: '2) Prérequis et environnement',
    items: [
      'Word Microsoft 365 à jour sur le poste.',
      'Un document brut de départ (à reformater).',
      'Une source Excel de contacts pour le publipostage.',
      'Une convention de charte minimale (police, tailles, titres, couleurs).'
    ]
  },
  {
    title: '3) Fondamentaux Word à maîtriser',
    items: [
      'Les styles pilotent la structure : éviter la mise en forme manuelle répétée.',
      'Le volet navigation dépend des niveaux de titres correctement appliqués.',
      'Les sections, en-têtes/pieds et sauts de page structurent les documents longs.',
      'La cohérence visuelle augmente la lisibilité et réduit les erreurs.',
      'Un modèle Word (.dotx) accélère toute la production documentaire.'
    ]
  },
  {
    title: '4) Méthode de production documentaire',
    items: [
      'Étape 1 : nettoyer le document brut (espaces, retours à la ligne, incohérences).',
      'Étape 2 : appliquer les styles de titre et de paragraphe.',
      'Étape 3 : intégrer tableaux/listes avec format homogène.',
      'Étape 4 : ajouter en-tête, pied de page, numérotation et métadonnées utiles.',
      'Étape 5 : contrôle final (orthographe, cohérence, lisibilité, export PDF).'
    ]
  },
  {
    title: '5) Collaboration et révision',
    items: [
      'Activer le suivi des modifications pour toute relecture collective.',
      'Utiliser des commentaires actionnables (précis, contextuels, orientés décision).',
      'Accepter/refuser les modifications une par une avec justification si nécessaire.',
      'Éviter les validations globales sans relecture de fond.',
      'Nettoyer les marques de révision avant diffusion finale.'
    ]
  },
  {
    title: '6) Publipostage (workflow complet)',
    items: [
      'Créer la lettre type avec zones variables (Nom, Date, Créneau, Référence).',
      'Connecter la source Excel et valider les en-têtes de colonnes.',
      'Insérer les champs de fusion au bon endroit, avec ponctuation correcte.',
      'Prévisualiser plusieurs enregistrements pour détecter les anomalies.',
      'Générer le document final puis exporter en PDF.'
    ]
  },
  {
    title: '7) Déroulé de séance formateur (90 min)',
    items: [
      '15 min : cadrage (qualité documentaire, erreurs classiques, attentes de livrable).',
      '25 min : démonstration guidée (styles, structure, navigation, contrôle visuel).',
      '20 min : atelier apprenants (reformatage d’un document brut).',
      '20 min : séquence révision + commentaires + résolution de retours.',
      '10 min : mini-publipostage et débrief final.'
    ]
  },
  {
    title: '8) Atelier pratique pas à pas',
    items: [
      'Créer un compte-rendu type (titre, sous-titres, sections Décisions/Actions/Risques).',
      'Appliquer une charte simple via styles (pas de mise en forme manuelle répétée).',
      'Insérer un tableau d’actions avec colonnes Responsable / Échéance / Statut.',
      'Simuler une revue par un pair avec 3 commentaires pertinents.',
      'Finaliser le document et produire une version PDF propre.'
    ]
  },
  {
    title: '9) Erreurs fréquentes et contre-mesures',
    items: [
      'Erreur : "tout faire à la main". Contre-mesure : styles obligatoires dès le départ.',
      'Erreur : document visuellement joli mais non structuré. Contre-mesure : contrôle du volet navigation.',
      'Erreur : commentaires vagues. Contre-mesure : format "problème + proposition".',
      'Erreur : publier avec marques visibles. Contre-mesure : checklist de diffusion finale.',
      'Erreur : publipostage sans prévisualisation. Contre-mesure : contrôle de 3 cas minimum.'
    ]
  },
  {
    title: '10) Critères d’évaluation (validation apprenant)',
    items: [
      'Structure du document claire et cohérente via styles.',
      'Charte visuelle respectée sur l’ensemble des sections.',
      'Révision maîtrisée (commentaires utiles + décisions justifiées).',
      'Publipostage fonctionnel avec données correctement injectées.',
      'Livrable final propre (sans marques, sans incohérences, prêt à diffuser).'
    ]
  }
]

const excelCourseSections = [
  {
    title: '1) Objectifs pédagogiques',
    items: [
      'Construire un tableau Excel propre, lisible et maintenable.',
      'Maîtriser les formules essentielles pour l’analyse opérationnelle.',
      'Sécuriser la qualité des données (types, contrôles, détection d’anomalies).',
      'Synthétiser efficacement via tableaux croisés dynamiques et indicateurs.',
      'Produire un livrable exploitable pour pilotage et décision.'
    ]
  },
  {
    title: '2) Prérequis et environnement',
    items: [
      'Excel Microsoft 365 à jour.',
      'Jeu de données réaliste (inscriptions, budget, planning, ventes ou RH).',
      'Notions de base : cellule, plage, table, tri/filtre.',
      'Objectif métier explicite (ce que le tableau doit permettre de décider).'
    ]
  },
  {
    title: '3) Fondamentaux Excel à maîtriser',
    items: [
      'Un bon tableau commence par des en-têtes clairs et des types cohérents.',
      'Transformer la plage en Table Excel (Ctrl+T) pour robustesse et évolutivité.',
      'Séparer données brutes, calculs et restitution pour éviter la confusion.',
      'Éviter les fusions de cellules dans les zones de données.',
      'Documenter les hypothèses et règles de calcul importantes.'
    ]
  },
  {
    title: '4) Formules essentielles (noyau de compétence)',
    items: [
      'Agrégation : SOMME, MOYENNE, NB, NBVAL.',
      'Logique : SI, SI.CONDITIONS (ou SI imbriqués selon besoin).',
      'Comptage conditionnel : NB.SI, NB.SI.ENS.',
      'Recherche : RECHERCHEV ou XLOOKUP (RECHERCHEX) selon version.',
      'Sécurisation : SIERREUR pour gérer les cas non trouvés.'
    ]
  },
  {
    title: '5) Qualité des données et contrôles',
    items: [
      'Uniformiser les formats (dates, devises, pourcentages, texte).',
      'Utiliser la validation des données (listes, bornes, contraintes).',
      'Détecter doublons et valeurs aberrantes via mise en forme conditionnelle.',
      'Tracer les cellules dépendantes pour déboguer les formules.',
      'Contrôler systématiquement les totaux (checks de cohérence).'
    ]
  },
  {
    title: '6) Analyse et restitution (pilotage)',
    items: [
      'Créer un tableau croisé dynamique à partir d’une Table propre.',
      'Construire des indicateurs simples : volume, coût moyen, taux, écarts.',
      'Ajouter segments/filtres pour analyse interactive.',
      'Produire une vue synthèse lisible (1 page, message clair, actionnable).',
      'Éviter les dashboards surchargés : priorité à la décision.'
    ]
  },
  {
    title: '7) Déroulé de séance formateur (120 min)',
    items: [
      '20 min : cadrage (structure de données, erreurs fréquentes, standard attendu).',
      '30 min : démonstration guidée (table propre + formules clés + contrôles).',
      '30 min : atelier apprenants (construction d’un mini tableau de pilotage).',
      '25 min : TCD + indicateurs + restitution.',
      '15 min : revue qualité, corrections et validation finale.'
    ]
  },
  {
    title: '8) Atelier pratique pas à pas',
    items: [
      'Importer un fichier brut et nettoyer les colonnes (types, libellés, vides).',
      'Créer une Table Excel structurée et nommée.',
      'Ajouter colonnes calculées (montant, statut, catégorie).',
      'Appliquer 2 contrôles : doublons et valeurs hors seuil.',
      'Créer un TCD de synthèse puis une vue de restitution concise.'
    ]
  },
  {
    title: '9) Erreurs fréquentes et contre-mesures',
    items: [
      'Erreur : mélanger données et présentation. Contre-mesure : séparer zones source/calcul/synthèse.',
      'Erreur : références instables. Contre-mesure : utiliser Table Excel et références structurées.',
      'Erreur : copier-coller de formules sans vérification. Contre-mesure : checks de cohérence systématiques.',
      'Erreur : TCD construit sur une source sale. Contre-mesure : nettoyage et types avant analyse.',
      'Erreur : indicateurs non actionnables. Contre-mesure : définir la décision visée avant calcul.'
    ]
  },
  {
    title: '10) Critères d’évaluation (validation apprenant)',
    items: [
      'Table source propre, cohérente et correctement typée.',
      'Formules exactes et compréhensibles.',
      'Contrôles qualité présents et pertinents.',
      'TCD fiable et interprétation correcte des résultats.',
      'Livrable final clair, exploitable et orienté décision.'
    ]
  }
]

const outlookCourseSections = [
  {
    title: '1) Objectifs pédagogiques',
    items: [
      'Structurer la boîte de réception pour réduire la surcharge cognitive.',
      'Mettre en place des règles simples de tri, priorisation et suivi.',
      'Améliorer la qualité des e-mails d’action (clairs, courts, actionnables).',
      'Piloter les engagements via drapeaux, catégories, tâches et rappels.',
      'Animer une coordination d’équipe plus fluide avec calendrier et réunions.'
    ]
  },
  {
    title: '2) Prérequis et environnement',
    items: [
      'Compte Microsoft 365 avec Outlook desktop ou web.',
      'Boîte mail de test avec un volume réaliste de messages.',
      'Accès calendrier + gestion invitations/réunions.',
      'Règles de communication d’équipe (objet, délais, escalade).'
    ]
  },
  {
    title: '3) Fondamentaux Outlook à maîtriser',
    items: [
      'Inbox zéro n’est pas un objectif absolu, la maîtrise du flux oui.',
      'Différencier urgent, important, délégable et informationnel.',
      'Une bonne convention d’objet facilite tri et recherche.',
      'Le calendrier est un outil de pilotage, pas seulement d’agenda.',
      'Un message utile doit contenir : contexte, action attendue, échéance.'
    ]
  },
  {
    title: '4) Méthode de gestion de boîte mail',
    items: [
      'Créer 4 zones : À traiter, En attente, Référence, Archives.',
      'Appliquer des catégories visuelles (client, projet, priorité).',
      'Configurer 3 à 5 règles maximum pour éviter la complexité.',
      'Planifier des créneaux dédiés de traitement e-mails.',
      'Traiter selon la règle 2 minutes : faire, planifier, déléguer ou classer.'
    ]
  },
  {
    title: '5) Réunions et calendrier',
    items: [
      'Créer des invitations avec ordre du jour et objectif explicite.',
      'Limiter les participants au strict utile pour gagner en efficacité.',
      'Définir des créneaux cohérents avec focus time et disponibilités.',
      'Transformer la réunion en actions datées (qui fait quoi, quand).',
      'Envoyer un compte-rendu court avec décisions et prochaines étapes.'
    ]
  },
  {
    title: '6) Suivi des actions et engagements',
    items: [
      'Utiliser drapeaux et rappels pour les e-mails critiques.',
      'Transformer un e-mail en tâche pour éviter l’oubli.',
      'Créer une revue quotidienne de 10 minutes des éléments en attente.',
      'Éviter les relances sans contexte : rappeler la demande initiale + échéance.',
      'Tracer les engagements pour fiabiliser la coordination inter-équipes.'
    ]
  },
  {
    title: '7) Déroulé de séance formateur (60 min)',
    items: [
      '10 min : cadrage (sur-information, priorisation, bonnes pratiques).',
      '15 min : démonstration guidée (règles, catégories, drapeaux, recherche).',
      '15 min : atelier apprenants (nettoyage et structuration de boîte).',
      '10 min : simulation réunion + invitation bien construite.',
      '10 min : débrief avec checklist opérationnelle.'
    ]
  },
  {
    title: '8) Atelier pratique pas à pas',
    items: [
      'Créer les dossiers/catégories de base.',
      'Configurer 3 règles (tri automatique par projet, info, notifications).',
      'Qualifier 20 e-mails entrants avec action explicite.',
      'Planifier une réunion avec ordre du jour et objectifs clairs.',
      'Clôturer par une liste d’actions avec échéances.'
    ]
  },
  {
    title: '9) Erreurs fréquentes et contre-mesures',
    items: [
      'Erreur : traiter les mails en continu. Contre-mesure : créneaux dédiés.',
      'Erreur : objets vagues. Contre-mesure : format standardisé d’objet.',
      'Erreur : trop de règles. Contre-mesure : garder un set minimal robuste.',
      'Erreur : réunion sans objectif. Contre-mesure : agenda + livrable attendu.',
      'Erreur : relances non tracées. Contre-mesure : tâches/rappels systématiques.'
    ]
  },
  {
    title: '10) Critères d’évaluation (validation apprenant)',
    items: [
      'Boîte structurée et maintenable.',
      'Règles/catégories pertinentes et compréhensibles.',
      'E-mails d’action clairs et exploitables.',
      'Réunion planifiée avec objectif, agenda et sortie attendue.',
      'Suivi des engagements fiable (drapeaux/tâches/rappels).'
    ]
  }
]

const oneNoteCourseSections = [
  {
    title: '1) Objectifs pédagogiques',
    items: [
      'Structurer OneNote pour capturer et retrouver l’information utile.',
      'Transformer les notes en actions concrètes et suivables.',
      'Standardiser les comptes-rendus pour améliorer la continuité équipe.',
      'Capitaliser décisions, risques et apprentissages dans une base durable.',
      'Faire de OneNote un cockpit opérationnel de réunion et de projet.'
    ]
  },
  {
    title: '2) Prérequis et environnement',
    items: [
      'OneNote Microsoft 365 synchronisé (desktop ou web).',
      'Un notebook dédié au projet/formation.',
      'Structure de base : sections, pages, sous-pages.',
      'Règles communes de nommage des pages et sections.'
    ]
  },
  {
    title: '3) Fondamentaux OneNote à maîtriser',
    items: [
      'Une note utile doit être contextuelle, datée et actionnable.',
      'Sections = thèmes, pages = événements, sous-pages = détails.',
      'Les tags servent à piloter (actions, questions, risques, décisions).',
      'Le moteur de recherche OneNote est puissant si la structure est propre.',
      'Sans standard de saisie, la connaissance devient introuvable.'
    ]
  },
  {
    title: '4) Modèle de prise de notes opérationnel',
    items: [
      'En-tête standard : date, participants, objectif de la session.',
      'Bloc Décisions : ce qui est acté et par qui.',
      'Bloc Actions : responsable, échéance, statut.',
      'Bloc Risques/Points d’attention : impact, mitigation.',
      'Bloc Questions ouvertes : sujets à arbitrer.'
    ]
  },
  {
    title: '5) Organisation et capitalisation',
    items: [
      'Créer une section par périmètre (pilotage, opérationnel, ateliers, incidents).',
      'Créer des pages datées et normalisées (AAAA-MM-JJ_Titre).',
      'Taguer systématiquement actions et décisions.',
      'Éviter la dispersion en centralisant les comptes-rendus.',
      'Revoir hebdomadairement les pages actives et archiver le reste.'
    ]
  },
  {
    title: '6) Suivi de projet avec OneNote',
    items: [
      'Utiliser une page maître “Tableau de suivi” avec liens vers pages clés.',
      'Lister les actions en retard et les priorités de la semaine.',
      'Conserver l’historique des décisions pour éviter les redites.',
      'Préparer les réunions à partir des points non clos.',
      'Boucler chaque réunion par un plan d’action concret.'
    ]
  },
  {
    title: '7) Déroulé de séance formateur (60 min)',
    items: [
      '10 min : cadrage (prise de notes utile vs notes “parking”).',
      '15 min : démonstration modèle de page (décisions/actions/risques).',
      '15 min : atelier apprenants (création notebook + page standard).',
      '10 min : simulation réunion + prise de notes en direct.',
      '10 min : débrief (qualité de note, exploitabilité, suivi).'
    ]
  },
  {
    title: '8) Atelier pratique pas à pas',
    items: [
      'Créer un notebook “Rising Stars - Pilotage”.',
      'Ajouter sections : Réunions, Actions, Risques, Décisions.',
      'Renseigner une page de réunion complète avec tags.',
      'Extraire 5 actions avec responsables et dates.',
      'Construire une page synthèse hebdomadaire des points critiques.'
    ]
  },
  {
    title: '9) Erreurs fréquentes et contre-mesures',
    items: [
      'Erreur : notes non datées. Contre-mesure : convention de titre obligatoire.',
      'Erreur : notes sans action. Contre-mesure : bloc Actions systématique.',
      'Erreur : tags incohérents. Contre-mesure : taxonomie minimale commune.',
      'Erreur : aucune revue. Contre-mesure : rituel hebdo de nettoyage/suivi.',
      'Erreur : duplication des infos. Contre-mesure : page de référence unique.'
    ]
  },
  {
    title: '10) Critères d’évaluation (validation apprenant)',
    items: [
      'Notebook structuré et cohérent.',
      'Pages exploitables avec décisions et actions claires.',
      'Usage pertinent des tags pour pilotage.',
      'Capacité à retrouver rapidement une information clé.',
      'Suivi d’actions opérationnel et maintenable.'
    ]
  }
]

const modules = [
  {
    title: 'OneDrive - Gestion documentaire',
    duration: '1h30',
    goals: [
      'Structurer un espace de travail (projet, livrables, archives, ressources).',
      'Partager avec le bon niveau de droits (lecture, modification, périmètre).',
      'Comprendre la synchronisation locale/cloud et éviter les conflits.',
      'Exploiter l’historique des versions pour sécuriser les modifications.'
    ],
    outcomes: [
      'Arborescence projet claire et reproductible.',
      'Convention de nommage appliquée.',
      'Partages configurés proprement par cible.'
    ]
  },
  {
    title: 'Word - Documents professionnels',
    duration: '1h30',
    goals: [
      'Utiliser les styles (Titre 1, Titre 2, Normal) pour une structure robuste.',
      'Créer des modèles réutilisables pour homogénéiser la production.',
      'Mettre en place la révision (commentaires, suivi des modifications).',
      'Réaliser un publipostage simple à partir d’une source Excel.'
    ],
    outcomes: [
      'Modèle Word prêt à l’emploi.',
      'Document relu/corrigé avec workflow de validation.',
      'Courriers personnalisés générés via publipostage.'
    ]
  },
  {
    title: 'Excel - Pilotage opérationnel',
    duration: '2h00',
    goals: [
      'Construire des tableaux propres avec types cohérents.',
      'Maîtriser les formules clés (SOMME, SI, NB.SI, RECHERCHEV/XLOOKUP).',
      'Utiliser la mise en forme conditionnelle pour détecter les anomalies.',
      'Créer des tableaux croisés dynamiques pour synthèse et décision.'
    ],
    outcomes: [
      'Tableau fiable et lisible.',
      'Indicateurs métier exploitables.',
      'Synthèse dynamique prête pour reporting.'
    ]
  },
  {
    title: 'Outlook - Coordination',
    duration: '1h00',
    goals: [
      'Organiser la boîte mail (règles, catégories, priorisation).',
      'Planifier des réunions avec ordre du jour et participants pertinents.',
      'Suivre les actions via drapeaux, rappels et tâches.',
      'Améliorer la qualité des mails d’action.'
    ],
    outcomes: [
      'Boîte mail structurée.',
      'Rituels de suivi plus fluides.',
      'Traçabilité des engagements.'
    ]
  },
  {
    title: 'OneNote - Capitalisation',
    duration: '1h00',
    goals: [
      'Organiser les notes par sections/pages.',
      'Transformer les notes en actions datées.',
      'Utiliser les tags pour retrouver rapidement les informations critiques.',
      'Centraliser décisions, risques et points de suivi.'
    ],
    outcomes: [
      'Notebook projet structuré.',
      'Suivi actionnable des réunions.',
      'Base de connaissance consultable.'
    ]
  },
  {
    title: 'Power Query - Automatisation des données',
    duration: '1h30',
    goals: [
      'Importer des sources hétérogènes avec des types fiables.',
      'Appliquer des transformations reproductibles.',
      'Fusionner des tables avec des clés maîtrisées.',
      'Documenter les étapes pour auditabilité et maintenance.'
    ],
    outcomes: [
      'Flux de préparation de données stable.',
      'Réduction des manipulations manuelles.',
      'Processus prêt à être rejoué.'
    ]
  },
  {
    title: 'IA - Productivité responsable',
    duration: '1h00',
    goals: [
      'Rédiger des prompts efficaces (contexte, action, contraintes, format).',
      'Accélérer la rédaction, la synthèse et la reformulation.',
      'Vérifier systématiquement les sorties avant diffusion.',
      'Respecter les règles de confidentialité.'
    ],
    outcomes: [
      'Prompts réutilisables par cas d’usage.',
      'Gains de temps sur les tâches récurrentes.',
      'Usage cadré et fiable en contexte pro.'
    ]
  }
]

export default function Cours() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Cours</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le parcours est conçu pour construire des compétences directement applicables sur un contexte métier réel :
          organiser, produire, analyser et collaborer efficacement avec Microsoft 365.
        </p>
        <div className="text-sm text-gray-600">
          Ordre recommandé : OneDrive → Word → Excel → Outlook → OneNote → Power Query → IA
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-cyan-200">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Cours complet OneDrive</h2>
          <span className="text-xs font-semibold bg-cyan-100 text-cyan-900 px-3 py-1 rounded-full">
            Module détaillé
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ce module couvre l’intégralité du parcours OneDrive attendu en formation : compréhension des mécanismes,
          méthodes opérationnelles, atelier guidé, gestion des incidents et critères d’évaluation.
        </p>

        <div className="space-y-5">
          {oneDriveCourseSections.map((section) => (
            <section key={section.title} className="p-5 bg-cyan-50/40 rounded-lg border border-cyan-100">
              <h3 className="text-lg font-semibold text-cyan-900 mb-3">{section.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1.5">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-blue-200">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Cours complet Word</h2>
          <span className="text-xs font-semibold bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
            Module détaillé
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ce module couvre le cycle complet de production documentaire avec Word : structuration, mise en forme,
          collaboration, publipostage, contrôle qualité et livraison finale.
        </p>

        <div className="space-y-5">
          {wordCourseSections.map((section) => (
            <section key={section.title} className="p-5 bg-blue-50/40 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">{section.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1.5">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-green-200">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Cours complet Excel</h2>
          <span className="text-xs font-semibold bg-green-100 text-green-900 px-3 py-1 rounded-full">
            Module détaillé
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ce module couvre Excel de bout en bout : structuration des données, formules clés, contrôles qualité,
          analyse par tableau croisé dynamique et restitution orientée décision.
        </p>

        <div className="space-y-5">
          {excelCourseSections.map((section) => (
            <section key={section.title} className="p-5 bg-green-50/40 rounded-lg border border-green-100">
              <h3 className="text-lg font-semibold text-green-900 mb-3">{section.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1.5">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-purple-200">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Cours complet Outlook</h2>
          <span className="text-xs font-semibold bg-purple-100 text-purple-900 px-3 py-1 rounded-full">
            Module détaillé
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ce module couvre Outlook en entier : organisation de boîte, règles de tri, qualité de communication,
          pilotage par calendrier et suivi des engagements.
        </p>

        <div className="space-y-5">
          {outlookCourseSections.map((section) => (
            <section key={section.title} className="p-5 bg-purple-50/40 rounded-lg border border-purple-100">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">{section.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1.5">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-pink-200">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Cours complet OneNote</h2>
          <span className="text-xs font-semibold bg-pink-100 text-pink-900 px-3 py-1 rounded-full">
            Module détaillé
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ce module couvre OneNote en entier : structuration des notes, standard de comptes-rendus,
          transformation en actions suivables et capitalisation de la connaissance projet.
        </p>

        <div className="space-y-5">
          {oneNoteCourseSections.map((section) => (
            <section key={section.title} className="p-5 bg-pink-50/40 rounded-lg border border-pink-100">
              <h3 className="text-lg font-semibold text-pink-900 mb-3">{section.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1.5">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {modules.map((module) => (
          <section key={module.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="text-xl font-semibold text-gray-900">{module.title}</h2>
              <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {module.duration}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-gray-800 mb-2">Objectifs</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              {module.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-gray-800 mb-2">Livrables attendus</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {module.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Passer à la pratique</h2>
        <p className="text-gray-700 mb-4">
          Une fois le cours parcouru, enchaînez avec les exercices pour valider chaque compétence en situation.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/exercices"
            className="px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
          >
            Ouvrir les exercices
          </Link>
          <Link
            to="/episodes"
            className="px-6 py-2 bg-accent text-white rounded-md font-medium hover:bg-accent-dark transition-colors"
          >
            Ouvrir le projet fil rouge
          </Link>
        </div>
      </div>
    </div>
  )
}
