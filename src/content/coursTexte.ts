/**
 * Cours rédigés en entier (phrases et paragraphes) pour la page Cours.
 * Chaque module expose des sections avec un titre et des paragraphes de texte continu.
 */
export interface SectionTexte {
  title: string
  paragraphs: string[]
}

export const oneDriveFull: SectionTexte[] = [
  {
    title: 'Introduction à OneDrive',
    paragraphs: [
      'OneDrive est bien plus qu’un simple disque en ligne : c’est un espace personnel synchronisé avec le cloud Microsoft 365. À la fin de ce module, vous saurez organiser vos dossiers projet, partager des fichiers avec les bons droits, et gérer les incidents de synchronisation sans perdre vos données.',
      'L’objectif est de vous faire comprendre la différence entre stockage local, synchronisation et cloud. Vous construirez une arborescence claire et durable, vous partagerez des fichiers ou dossiers selon les rôles (lecture, modification), et vous saurez gérer les conflits, les versions et les suppressions accidentelles. Enfin, vous mettrez en place des règles simples de gouvernance documentaire au quotidien.'
    ]
  },
  {
    title: 'Prérequis et cadre de travail',
    paragraphs: [
      'Pour suivre ce cours dans de bonnes conditions, vous devez disposer d’un compte Microsoft 365 actif avec OneDrive entreprise. Le client OneDrive doit être installé et connecté sur votre poste, et l’explorateur de fichiers doit afficher vos dossiers synchronisés. Prévoyez un petit jeu de documents de test (Word, Excel, PDF) pour réaliser les manipulations sans risque.'
    ]
  },
  {
    title: 'Fondamentaux : ce que fait vraiment OneDrive',
    paragraphs: [
      'OneDrive maintient deux copies de vos fichiers : une sur votre poste (dans un dossier synchronisé) et une dans le cloud Microsoft 365. Dès que vous modifiez un fichier, la synchronisation envoie les changements vers le cloud et, inversement, les modifications faites en ligne ou sur un autre appareil sont rapatriées sur votre machine. Tant que vous travaillez dans un dossier synchronisé, vous travaillez donc toujours sur la copie locale ; le cloud sert de miroir et de secours.',
      'L’historique des versions est un atout majeur : pour chaque fichier, OneDrive conserve des versions antérieures. En cas d’erreur ou de mauvaise manipulation, vous pouvez restaurer un état précédent sans tout perdre. En revanche, la corbeille locale de Windows et la corbeille OneDrive (accessible sur le web) ne jouent pas le même rôle : une suppression en local peut encore être récupérable côté OneDrive pendant un temps limité.'
    ]
  },
  {
    title: 'Arborescence recommandée pour un projet',
    paragraphs: [
      'Une structure de dossiers stable et lisible facilite le travail d’équipe et la maintenance. Nous recommandons un standard simple : 00_Admin (règles, conventions), 01_Entrants (données reçues), 02_Travail (fichiers en cours), 03_Livrables (versions validées à livrer), 99_Archives (clôturé). Limitez la profondeur des dossiers : trop de niveaux rend la lecture et la sauvegarde mentale difficiles.',
      'Adoptez une convention de nommage pour les fichiers, par exemple AAAA-MM-JJ_Type_Sujet_Version (ex. 2026-03-15_Brief_RisingStars_v2.docx). Utilisez un vocabulaire métier commun pour éviter les ambiguïtés. Enfin, règle d’or : ne stockez jamais les pièces critiques uniquement sur un poste non synchronisé ; tout ce qui compte pour le projet doit vivre dans OneDrive (ou un espace d’équipe type SharePoint) pour être accessible et versionné.'
    ]
  },
  {
    title: 'Partage et droits : fichier ou dossier, lecture ou modification',
    paragraphs: [
      'Partager un fichier donne un accès limité à ce fichier uniquement : c’est idéal pour une validation ponctuelle ou un envoi ciblé. Partager un dossier donne accès à tout son contenu actuel et à tout ce qui y sera ajouté plus tard : plus pratique pour un travail d’équipe, mais il faut être conscient que les futurs fichiers seront aussi visibles par les personnes invitées.',
      'Choisissez toujours le niveau de droit minimum nécessaire : lecture seule si la personne ne doit que consulter, modification si elle doit éditer. Respectez la politique de votre organisation pour les liens internes (collègues) et les liens externes (partenaires, clients). Après chaque partage sensible, prenez l’habitude de vérifier « Qui a accès ? » dans les paramètres du fichier ou du dossier.'
    ]
  },
  {
    title: 'Synchronisation et gestion des incidents',
    paragraphs: [
      'Dans l’explorateur Windows, les icônes OneDrive vous renseignent sur l’état des fichiers : nuage seul (fichier uniquement en ligne), coche verte (synchronisé localement), flèches (synchronisation en cours). Les conflits apparaissent quand le même fichier est modifié en parallèle sur deux postes ou quand le réseau est instable. Dans ce cas, OneDrive peut créer une copie « en conflit » ; ne supprimez pas brutalement : comparez les versions, fusionnez si besoin, puis reprenez la synchronisation.',
      'En cas de suppression accidentelle, vérifiez d’abord la corbeille OneDrive sur le web ; vous pouvez souvent restaurer le fichier ou le dossier. Pour les modifications malencontreuses, utilisez l’historique des versions du fichier (clic droit sur le fichier, Historique des versions) et restaurez l’état souhaité. Avant toute grosse manipulation (déplacement en masse, renommage), créez un point de contrôle : par exemple une copie datée du dossier critique, pour pouvoir revenir en arrière proprement.'
    ]
  },
  {
    title: 'Atelier pratique : mettre en place un espace projet',
    paragraphs: [
      'Appliquez concrètement ce que vous venez d’apprendre. Créez un dossier « RisingStars_2026 » à la racine de votre OneDrive, puis les sous-dossiers 01_Entrants, 02_Travail, 03_Livrables, 99_Archives. Déposez-y trois fichiers de test (par exemple brief.docx, budget.xlsx, planning.xlsx). Partagez le dossier 03_Livrables en lecture seule à une personne (ou un compte test) jouant le rôle « Direction », et le dossier 02_Travail en modification à une personne « Équipe projet ». Vérifiez que les droits correspondent bien à ce que vous souhaitez.',
      'Ensuite, simulez un travail hors ligne : coupez le réseau (ou déconnectez OneDrive), modifiez un fichier, puis reconnectez. Observez la reprise de la synchronisation et l’apparition éventuelle d’un conflit si vous aviez aussi modifié le fichier ailleurs. Enfin, ouvrez un fichier, dégradez-le volontairement, puis utilisez l’historique des versions pour restaurer une version antérieure. À l’issue de cet atelier, vous aurez mis en pratique arborescence, partage, sync et restauration.'
    ]
  },
  {
    title: 'Erreurs fréquentes et bonnes pratiques',
    paragraphs: [
      'Partager trop large par défaut expose des fichiers à des personnes qui n’en ont pas besoin : appliquez le principe du moindre privilège. Des noms de fichiers incohérents rendent la recherche et l’archivage difficiles : définissez une convention écrite et tenez-vous-y. Travailler dans un dossier hors OneDrive (Bureau, Documents non synchronisés) fait perdre les bénéfices du cloud : imposez-vous (ou à votre équipe) que les dossiers projet soient toujours sous OneDrive.',
      'Ignorer les alertes de synchronisation (icône d’avertissement dans la zone de notification) peut laisser des conflits non résolus : prenez l’habitude de vérifier chaque jour que tout est à jour. Enfin, ne confondez pas synchronisation et sauvegarde : OneDrive synchronise et versionne, mais en cas de suppression définitive ou de ransomware, une vraie politique de sauvegarde (retenue, restauration) reste nécessaire ; expliquez cette nuance clairement en formation.'
    ]
  },
  {
    title: 'Critères pour valider que vous maîtrisez OneDrive',
    paragraphs: [
      'À l’issue du module, vous devez être capable de créer une arborescence cohérente et lisible, conforme au standard proposé (Admin, Entrants, Travail, Livrables, Archives). Vous devez configurer correctement des partages pour au moins deux profils différents (par exemple lecture pour la direction, modification pour l’équipe). Vous devez gérer de façon autonome une restauration de version sur un fichier. Vous devez pouvoir expliquer clairement à un collègue la différence entre synchronisation et sauvegarde. Enfin, vos livrables doivent respecter la convention de nommage définie (date, type, sujet, version).'
    ]
  }
]

export const wordFull: SectionTexte[] = [
  {
    title: 'Introduction à la production documentaire avec Word',
    paragraphs: [
      'Ce module vous permet de structurer des documents longs, de travailler en collaboration avec commentaires et suivi des modifications, et de produire des courriers personnalisés via le publipostage. L’objectif est de livrer des documents professionnels cohérents, contrôlés et prêts à diffusion.',
      'Vous apprendrez à utiliser les styles Word (Titre 1, Titre 2, Normal) pour une structure robuste plutôt que de tout formater à la main. Vous construirez une mise en forme réutilisable et vous mettrez en place un workflow de révision (commentaires, suivi des modifications, validation). Enfin, vous réaliserez un publipostage simple à partir d’une source Excel pour générer des courriers personnalisés.'
    ]
  },
  {
    title: 'Prérequis et environnement',
    paragraphs: [
      'Vous devez disposer de Word Microsoft 365 à jour sur votre poste. Prévoyez un document brut de départ à reformater (par exemple un compte-rendu sans structure), une source Excel avec des contacts pour le publipostage (colonnes Nom, Date, Créneau, etc.), et une convention de charte minimale : police, tailles de titres, couleurs éventuelles. Ces éléments vous permettront de suivre les démonstrations et les ateliers sans perdre de temps.'
    ]
  },
  {
    title: 'Fondamentaux : les styles pilotent la structure',
    paragraphs: [
      'Les styles Word ne servent pas qu’à « faire joli » : ils définissent la structure logique du document. Un titre en Titre 1, un sous-titre en Titre 2, le corps en Normal. Une fois ces styles appliqués, le volet de navigation affiche automatiquement un plan du document et vous permet de sauter d’une section à l’autre. Si vous formatez tout à la main (gras, taille, police), vous obtiendrez peut-être un rendu visuel correct à l’écran, mais le document restera incohérent et difficile à maintenir : un simple changement de charte deviendra un cauchemar.',
      'Les sections, les en-têtes et pieds de page, ainsi que les sauts de page structurent les documents longs (rapports, comptes-rendus). Un modèle Word au format .dotx permet de figer une charte et une structure types : chaque nouveau document part alors sur de bonnes bases et toute l’équipe produit des livrables homogènes.'
    ]
  },
  {
    title: 'Méthode de production en cinq étapes',
    paragraphs: [
      'Première étape : nettoyer le document brut. Supprimez les espaces en trop, les retours à la ligne inutiles, les incohérences de ponctuation ou de casse. Deuxième étape : appliquer les styles de titre et de paragraphe partout, sans exception. Troisième étape : intégrer les tableaux et listes avec un format homogène (même style de tableau, mêmes puces). Quatrième étape : ajouter en-tête, pied de page, numérotation des pages et métadonnées utiles (titre du document, auteur, date). Cinquième étape : contrôle final. Relisez pour l’orthographe, la cohérence des titres, la lisibilité, puis exportez en PDF si la diffusion le requiert.',
      'Cette méthode évite de mélanger « mise en forme au feeling » et structure ; elle rend le document maintenable et professionnel.'
    ]
  },
  {
    title: 'Collaboration et révision',
    paragraphs: [
      'Pour toute relecture collective, activez le suivi des modifications. Chaque ajout, suppression ou reformulation sera alors marquée et attribuée à un relecteur. Utilisez les commentaires pour poser des questions ou proposer des changements : soyez précis et actionnables (par exemple « Reformuler cette phrase ainsi : … » plutôt que « c’est pas clair »).',
      'Traitez les modifications une par une : acceptez ce qui améliore le texte, refusez ce qui dégrade le fond ou la forme, et justifiez par un commentaire si un refus est important. Évitez les validations globales « tout accepter » sans relecture : des erreurs peuvent s’introduire. Avant diffusion finale, nettoyez toutes les marques de révision et les commentaires résolus pour livrer un document propre.'
    ]
  },
  {
    title: 'Publipostage : courriers personnalisés à partir d’Excel',
    paragraphs: [
      'Le publipostage permet de générer des courriers en série à partir d’une lettre type et d’une source de données (souvent Excel). Vous rédigez une seule fois la lettre en plaçant des champs de fusion là où doivent apparaître le nom, la date, le créneau, etc. Vous connectez la source Excel, vous validez que les en-têtes de colonnes correspondent bien aux champs utilisés, puis vous insérez chaque champ au bon endroit dans le texte, en veillant à la ponctuation et aux espaces.',
      'Avant de lancer la génération, prévisualisez plusieurs enregistrements pour détecter les anomalies (noms trop longs, dates mal formatées, champs vides). Une fois le résultat correct, générez le document final ou exportez directement en PDF pour envoi.'
    ]
  },
  {
    title: 'Atelier pratique : un compte-rendu structuré et révisé',
    paragraphs: [
      'Créez un compte-rendu type avec un titre principal, des sous-titres (Décisions, Actions, Risques), et appliquez une charte simple uniquement via les styles, sans mise en forme manuelle répétée. Insérez un tableau d’actions avec les colonnes Responsable, Échéance, Statut. Simulez une revue par un pair : ajoutez au moins trois commentaires pertinents et utilisez le suivi des modifications pour proposer des corrections. Enfin, finalisez le document (accepter/refuser, nettoyer les marques) et produisez une version PDF propre. Vous aurez ainsi mis en pratique structure, collaboration et livraison.'
    ]
  },
  {
    title: 'Erreurs fréquentes et bonnes pratiques',
    paragraphs: [
      'Tout faire à la main (gras, taille, police) au lieu d’utiliser les styles rend le document ingérable : imposez-vous les styles dès le départ. Un document peut sembler joli à l’écran mais être non structuré : vérifiez le volet de navigation ; s’il est vide ou incohérent, la structure est mauvaise. Des commentaires vagues (« à revoir », « pas bon ») ne aident pas : adoptez le format « problème + proposition » pour que l’auteur sache quoi faire.',
      'Publier un document avec des marques de révision ou des commentaires encore visibles est une erreur courante : établissez une checklist de diffusion finale (marques supprimées, cohérence, PDF généré). En publipostage, lancer la fusion sans prévisualiser peut produire des courriers avec des champs vides ou des erreurs de mise en page : contrôlez au moins trois enregistrements avant de générer l’ensemble.'
    ]
  },
  {
    title: 'Critères pour valider que vous maîtrisez Word',
    paragraphs: [
      'À l’issue du module, votre document doit avoir une structure claire et cohérente entièrement pilotée par les styles. La charte visuelle doit être respectée sur l’ensemble des sections. La révision doit être maîtrisée : commentaires utiles, décisions d’acceptation ou de refus justifiées. Le publipostage doit être fonctionnel avec des données correctement injectées depuis Excel. Le livrable final doit être propre : sans marques de révision, sans incohérences, prêt à diffuser (y compris en PDF).'
    ]
  }
]

export const excelFull: SectionTexte[] = [
  {
    title: 'Introduction à Excel pour le pilotage opérationnel',
    paragraphs: [
      'Ce module vous apprend à construire des tableaux Excel propres, lisibles et maintenables, à maîtriser les formules essentielles pour l’analyse opérationnelle, et à sécuriser la qualité des données. Vous saurez aussi synthétiser efficacement avec les tableaux croisés dynamiques et produire un livrable exploitable pour le pilotage et la décision.',
      'Un bon tableau n’est pas seulement « rempli » : il a des en-têtes clairs, des types de données cohérents (dates, nombres, texte), et une structure qui permet d’ajouter des lignes sans tout casser. L’objectif est de passer de la simple saisie à une vraie construction de données puis à une restitution orientée action.'
    ]
  },
  {
    title: 'Prérequis et environnement',
    paragraphs: [
      'Vous devez disposer d’Excel Microsoft 365 à jour. Prévoyez un jeu de données réaliste : inscriptions à un événement, budget, planning, ventes ou données RH, selon votre contexte. Les notions de base (cellule, plage, tableau, tri et filtre) sont supposées connues. Il est important d’avoir en tête un objectif métier clair : ce que le tableau doit permettre de décider ou de suivre. Sans cette question, on construit souvent des fichiers surchargés et peu actionnables.'
    ]
  },
  {
    title: 'Fondamentaux : structure et qualité des données',
    paragraphs: [
      'Un bon tableau commence par une première ligne d’en-têtes explicites et un type de donnée cohérent par colonne (pas de mélange de dates et de texte dans la même colonne). Dès que vos données forment un bloc régulier, transformez la plage en Table Excel (Ctrl+T) : les formules s’étendent automatiquement aux nouvelles lignes, les filtres sont intégrés, et les références restent stables.',
      'Séparez mentalement (et si possible physiquement) les zones : données brutes, zone de calculs, zone de restitution ou de synthèse. Évitez les fusions de cellules dans les zones de données : elles compliquent les formules et les tableaux croisés. Enfin, documentez les hypothèses et les règles de calcul importantes (en commentaire ou sur une feuille dédiée) pour que quelqu’un d’autre puisse reprendre le fichier.'
    ]
  },
  {
    title: 'Formules essentielles à maîtriser',
    paragraphs: [
      'Pour l’agrégation, vous utiliserez SOMME, MOYENNE, NB, NBVAL. Pour la logique conditionnelle, SI et éventuellement SI.CONDITIONS (ou des SI imbriqués) permettent de dériver des statuts, des catégories ou des messages. Les comptages conditionnels passent par NB.SI et NB.SI.ENS (plusieurs critères). Pour retrouver une valeur dans une table à partir d’une clé, RECHERCHEV ou XLOOKUP (RECHERCHEX selon la version) sont incontournables ; pensez à entourer ces formules avec SIERREUR pour gérer les cas où la valeur n’est pas trouvée et éviter les #N/A inélégants.',
      'Ces formules constituent le noyau de compétence pour la plupart des tableaux de pilotage : une fois maîtrisées, vous pourrez construire des tableaux évolutifs et auditable.'
    ]
  },
  {
    title: 'Qualité des données et contrôles',
    paragraphs: [
      'Uniformisez les formats : dates au même format, devises cohérentes, pourcentages et texte nettoyés. Utilisez la validation des données pour limiter les saisies (liste de choix, bornes min-max, contraintes) et réduire les erreurs. La mise en forme conditionnelle permet de détecter visuellement les doublons ou les valeurs aberrantes (hors seuil). Pour déboguer, utilisez les outils de traçage des cellules dépendantes : vous verrez quelles cellules alimentent une formule et vous repérerez plus vite les incohérences. Enfin, établissez des contrôles de cohérence : par exemple un total qui doit rester égal à la somme des lignes ; si ce n’est pas le cas, une alerte ou un message doit apparaître.'
    ]
  },
  {
    title: 'Analyse et restitution : tableaux croisés et indicateurs',
    paragraphs: [
      'Le tableau croisé dynamique (TCD) se construit à partir d’une Table Excel propre : vous choisissez les champs en lignes, colonnes et valeurs, et vous obtenez une synthèse sans écrire de formules. C’est l’outil idéal pour résumer des volumes, des coûts, des taux, ou des écarts. Construisez des indicateurs simples et actionnables : volume, coût moyen, taux de réalisation, écart à l’objectif. Ajoutez des segments (slicers) ou des filtres pour permettre une analyse interactive par période, par responsable ou par catégorie.',
      'La restitution doit rester lisible : une vue synthèse sur une page, un message clair (par exemple « 3 dossiers en retard »), et des couleurs ou des graphiques au service de la décision. Évitez les tableaux de bord surchargés où l’on ne sait plus quoi regarder en premier.'
    ]
  },
  {
    title: 'Atelier pratique : de la source au pilotage',
    paragraphs: [
      'Importez un fichier brut (CSV ou Excel) et nettoyez les colonnes : types corrects, libellés clairs, suppression des lignes vides inutiles. Créez une Table Excel structurée et nommée. Ajoutez des colonnes calculées (par exemple montant = quantité × prix, statut dérivé par une formule SI, catégorie par RECHERCHEV). Appliquez au moins deux contrôles : détection des doublons et repérage des valeurs hors seuil (mise en forme conditionnelle ou formule). Puis créez un tableau croisé dynamique de synthèse et une vue de restitution en quelques lignes ou un petit graphique. À l’issue de cet atelier, vous aurez parcouru tout le cycle : source, calculs, qualité, analyse, restitution.'
    ]
  },
  {
    title: 'Erreurs fréquentes et bonnes pratiques',
    paragraphs: [
      'Mélanger données brutes et mise en forme de présentation dans la même zone crée la confusion : séparez clairement zone source, zone de calcul et zone de synthèse. Des références de cellules instables (sans Table, sans noms) rendent les formules fragiles dès qu’on insère des lignes ou des colonnes : utilisez les références structurées des Tables. Copier-coller des formules sans vérifier les totaux ou les cas limites est une source d’erreurs : mettez en place des checks de cohérence systématiques.',
      'Construire un TCD sur une source sale (types incohérents, libellés multiples pour la même chose) donne des résultats faux ou illisibles : nettoyez et normalisez avant d’analyser. Enfin, des indicateurs non actionnables (trop nombreux, pas liés à une décision) ne servent à rien : avant d’ajouter une formule ou un TCD, demandez-vous « quelle décision cela permet-il de prendre ? ».'
    ]
  },
  {
    title: 'Critères pour valider que vous maîtrisez Excel',
    paragraphs: [
      'À l’issue du module, la table source doit être propre, cohérente et correctement typée. Les formules doivent être exactes et compréhensibles (nommage, commentaires si besoin). Des contrôles de qualité doivent être en place et pertinents (validation, détection d’anomalies). Le TCD doit être fiable et vous devez être capable d’interpréter correctement les résultats et d’en tirer une conclusion. Le livrable final (feuille de synthèse ou rapport) doit être clair, exploitable et orienté décision.'
    ]
  }
]

export const outlookFull: SectionTexte[] = [
  {
    title: 'Introduction à Outlook pour la coordination',
    paragraphs: [
      'Ce module vous aide à structurer votre boîte de réception pour réduire la surcharge cognitive, à mettre en place des règles simples de tri et de priorisation, et à améliorer la qualité de vos e-mails d’action. Vous apprendrez aussi à piloter vos engagements via drapeaux, catégories, tâches et rappels, et à animer la coordination d’équipe avec le calendrier et les réunions.',
      'L’objectif n’est pas d’atteindre « zéro mail » à tout prix, mais de maîtriser le flux : savoir ce qui est urgent, important, délégable ou purement informationnel, et traiter chaque message de façon appropriée.'
    ]
  },
  {
    title: 'Prérequis et environnement',
    paragraphs: [
      'Vous devez disposer d’un compte Microsoft 365 avec Outlook (desktop ou web). Une boîte mail avec un volume réaliste de messages permettra de pratiquer le tri et les règles. L’accès au calendrier et à la gestion des invitations et réunions est nécessaire. Enfin, des règles de communication d’équipe (format des objets, délais de réponse, escalade) rendront la formation directement applicable.'
    ]
  },
  {
    title: 'Fondamentaux : maîtriser le flux plutôt que subir',
    paragraphs: [
      'Différenciez l’urgent (délai court), l’important (impact fort), le délégable (à transmettre) et l’informationnel (à classer ou à lire plus tard). Une bonne convention d’objet (par exemple [Projet] Sujet – Action attendue) facilite le tri manuel et les règles automatiques. Le calendrier n’est pas qu’un agenda : c’est un outil de pilotage des priorités et du temps de l’équipe.',
      'Un message utile contient au minimum : le contexte (pourquoi j’écris), l’action attendue (ce que je demande), et si possible une échéance. Sans cela, le destinataire doit deviner ou relancer, ce qui fait perdre du temps à tout le monde.'
    ]
  },
  {
    title: 'Méthode de gestion de la boîte mail',
    paragraphs: [
      'Organisez votre boîte en zones claires : par exemple À traiter, En attente (réponse d’un tiers), Référence (à conserver), Archives (clos). Utilisez des catégories visuelles (couleurs) pour marquer par projet, par client ou par priorité. Configurez trois à cinq règles maximum pour le tri automatique (par expéditeur, par mot-clé dans l’objet, par destinataire) ; trop de règles deviennent ingérables et imprévisibles.',
      'Planifiez des créneaux dédiés au traitement des e-mails plutôt que de réagir en continu : vous garderez plus de temps pour le travail en profondeur. Appliquez la règle des deux minutes : si une action prend moins de deux minutes, faites-la tout de suite ; sinon, planifiez-la (tâche, rappel), déléguez-la ou classez-la pour traitement ultérieur.'
    ]
  },
  {
    title: 'Réunions et calendrier',
    paragraphs: [
      'Créez des invitations avec un ordre du jour explicite et un objectif clair (décision à prendre, information à partager, point d’avancement). Limitez les participants au strict nécessaire pour garder les réunions efficaces. Définissez des créneaux cohérents avec les plages de focus et les disponibilités des participants. À l’issue de la réunion, transformez les échanges en actions datées : qui fait quoi, pour quand. Envoyez un compte-rendu court avec les décisions prises et les prochaines étapes pour que tout le monde ait la même compréhension.'
    ]
  },
  {
    title: 'Suivi des actions et engagements',
    paragraphs: [
      'Utilisez les drapeaux et rappels pour les e-mails qui demandent une action ou une réponse à date. Transformez un e-mail en tâche Outlook pour ne pas l’oublier et pour le retrouver dans la liste des tâches. Instaurez une revue quotidienne courte (par exemple dix minutes) des éléments en attente et des tâches à échéance du jour. Lors des relances, rappelez toujours la demande initiale et l’échéance pour éviter les quiproquos. En traçant ainsi les engagements, vous rendez la coordination entre équipes plus fiable et vous évitez les « je croyais que c’était toi qui devais le faire ».'
    ]
  },
  {
    title: 'Atelier pratique et bonnes pratiques',
    paragraphs: [
      'En atelier, créez les dossiers ou catégories de base, configurez au moins trois règles de tri automatique (par exemple par projet, par type d’info, par notification). Qualifiez une vingtaine d’e-mails entrants en leur assignant une action explicite (traiter, planifier, déléguer, classer). Planifiez une réunion test avec ordre du jour et objectifs clairs, puis rédigez la liste d’actions qui en découle avec des échéances. Les erreurs fréquentes à éviter : traiter les mails en continu (préférez des créneaux dédiés), utiliser des objets vagues (adoptez un format standard), créer trop de règles (gardez un set minimal et robuste), organiser des réunions sans objectif (toujours agenda + livrable attendu), et ne pas tracer les relances (utilisez tâches et rappels).'
    ]
  },
  {
    title: 'Critères pour valider que vous maîtrisez Outlook',
    paragraphs: [
      'À l’issue du module, votre boîte doit être structurée et maintenable. Les règles et catégories doivent être pertinentes et compréhensibles par un collègue. Vos e-mails d’action doivent être clairs et exploitables (contexte, action, échéance). Vous devez avoir planifié au moins une réunion avec un objectif, un ordre du jour et une sortie attendue (décisions ou actions). Le suivi des engagements doit être fiable : drapeaux, tâches ou rappels utilisés de façon cohérente.'
    ]
  }
]

export const oneNoteFull: SectionTexte[] = [
  {
    title: 'Introduction à OneNote pour la capitalisation',
    paragraphs: [
      'Ce module vous apprend à structurer OneNote pour capturer et retrouver l’information utile, à transformer les notes en actions concrètes et suivables, et à standardiser les comptes-rendus pour améliorer la continuité de l’équipe. Vous capitaliserez les décisions, les risques et les apprentissages dans une base durable et vous ferez de OneNote un véritable cockpit opérationnel pour les réunions et le projet.',
      'Une note utile n’est pas un fourre-tout : elle est contextuelle, datée et actionnable. Sans standard de saisie, la connaissance devient introuvable ; avec une structure simple et des habitudes partagées, OneNote devient un atout majeur pour le pilotage.'
    ]
  },
  {
    title: 'Prérequis et environnement',
    paragraphs: [
      'Vous devez disposer de OneNote Microsoft 365, synchronisé (application de bureau ou OneNote sur le web). Créez un notebook dédié au projet ou à la formation. Familiarisez-vous avec la structure de base : un notebook contient des sections, chaque section contient des pages, et une page peut avoir des sous-pages. Définissez des règles communes de nommage pour les pages et les sections (par exemple AAAA-MM-JJ pour les dates, vocabulaire métier partagé).'
    ]
  },
  {
    title: 'Fondamentaux : structure et usage des tags',
    paragraphs: [
      'Les sections correspondent à des thèmes (Pilotage, Opérationnel, Réunions, Risques). Les pages correspondent à des événements ou des livrables (une réunion, un compte-rendu, un point de suivi). Les sous-pages permettent de détailler sans tout mettre sur une seule page. Les tags OneNote (À faire, Question, Décision, Important, etc.) servent à piloter : vous pouvez ensuite filtrer par tag pour retrouver toutes les actions ou toutes les décisions.',
      'Le moteur de recherche OneNote est puissant : il indexe le texte dans toutes les pages du notebook. Si la structure et le nommage sont propres, vous retrouverez rapidement une information clé. Sans standard, vous accumulerez des notes que plus personne ne consulte.'
    ]
  },
  {
    title: 'Modèle de prise de notes opérationnel',
    paragraphs: [
      'Adoptez un en-tête standard pour chaque page de réunion ou de point : date, participants, objectif de la session. Ensuite, structurez le contenu en blocs clairs. Le bloc Décisions recense ce qui a été acté et par qui. Le bloc Actions liste les tâches avec responsable, échéance et statut. Le bloc Risques ou Points d’attention recense ce qui peut impacter le projet et les mesures de mitigation. Le bloc Questions ouvertes liste les sujets à arbitrer ou à retravailler.',
      'Ce modèle transforme une réunion en livrable exploitable : au lieu de feuilles volantes ou de notes éparses, l’équipe dispose d’une trace structurée et actionnable.'
    ]
  },
  {
    title: 'Organisation et capitalisation',
    paragraphs: [
      'Créez une section par périmètre logique : par exemple Pilotage, Opérationnel, Ateliers, Incidents. Créez des pages datées et normalisées (format AAAA-MM-JJ_Titre) pour faciliter le tri et la recherche. Taguez systématiquement les actions et les décisions pour pouvoir les retrouver via le résumé des balises. Évitez la dispersion : centralisez les comptes-rendus dans un même notebook ou des sections dédiées plutôt que d’éparpiller sur plusieurs carnets. Revoyez hebdomadairement les pages actives, clôturez ce qui est terminé et archivez ou déplacez le reste pour garder une vue lisible.'
    ]
  },
  {
    title: 'Suivi de projet avec OneNote',
    paragraphs: [
      'Utilisez une page maître « Tableau de suivi » ou « Synthèse » avec des liens vers les pages clés (dernier compte-rendu, liste des actions en cours, risques ouverts). Listez les actions en retard et les priorités de la semaine pour que chaque réunion de suivi parte sur des bases claires. Conservez l’historique des décisions pour éviter les redites et les contradictions. Préparez chaque réunion en relisant les points non clos et les actions en attente. Bouclez chaque réunion par un plan d’action concret : qui fait quoi, pour quand, avec mise à jour des pages et des tags correspondants.'
    ]
  },
  {
    title: 'Atelier pratique et bonnes pratiques',
    paragraphs: [
      'En atelier, créez un notebook « Rising Stars - Pilotage » (ou équivalent). Ajoutez les sections Réunions, Actions, Risques, Décisions. Renseignez une page de réunion complète en utilisant le modèle (décisions, actions, risques, questions) et en appliquant les tags. Extraire au moins cinq actions avec responsable et date. Construisez une page synthèse hebdomadaire listant les points critiques et les prochaines étapes.',
      'Erreurs à éviter : notes non datées (adoptez une convention de titre obligatoire), notes sans bloc d’actions (toujours une section Actions), tags incohérents (définissez une taxonomie minimale commune), aucune revue régulière (rituel hebdo de nettoyage et de suivi), duplication des informations (une page de référence unique par thème).'
    ]
  },
  {
    title: 'Critères pour valider que vous maîtrisez OneNote',
    paragraphs: [
      'À l’issue du module, le notebook doit être structuré et cohérent. Les pages doivent être exploitables : décisions et actions clairement identifiées. L’usage des tags doit être pertinent pour le pilotage (filtrage par action, par décision). Vous devez être capable de retrouver rapidement une information clé (décision, action, risque) grâce à la structure et à la recherche. Le suivi d’actions doit être opérationnel et maintenable : les responsables et les échéances sont à jour et la synthèse est lisible.'
    ]
  }
]
