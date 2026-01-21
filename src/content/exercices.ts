export type ExerciceCategory = 'IA' | 'Word' | 'Excel' | 'Outlook' | 'OneDrive' | 'OneNote' | 'PowerQuery';

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
    id: 'ia-decouverte-01',
    category: 'IA',
    title: 'Découverte de l\'IA - Premiers pas',
    duration: '10 minutes',
    objective: '🎯 Objectif : Prendre confiance avec l\'IA\n\n• Découvrir ce qu\'est une IA\n• Comprendre ses capacités actuelles\n• Prendre conscience de ses limites\n\n💣 Message clé :\n\n"L\'IA ne comprend rien. Elle imite très bien."',
    context: 'Tu vas découvrir l\'IA en la testant directement. Pas de théorie compliquée, juste de la pratique pour comprendre ce qu\'elle sait faire... et ce qu\'elle ne sait pas faire.',
    generalInstructions: [
      'Utilisez ChatGPT, Copilot, ou tout autre assistant IA conversationnel',
      'Testez les prompts proposés',
      'Observez les réponses et réfléchissez à leur qualité',
      'N\'hésitez pas à poser des questions de suivi'
    ],
    steps: [
      {
        number: 1,
        title: 'Premier contact',
        duration: '3 min',
        instructions: [
          'Ouvrez ChatGPT, Copilot ou un autre assistant IA',
          'Demandez-lui de se présenter comme votre assistant personnel',
          'Puis demandez-lui de vous proposer 5 façons de vous aider dans votre travail',
          'Observez sa réponse'
        ]
      },
      {
        number: 2,
        title: 'Réflexion',
        duration: '2 min',
        instructions: [
          'Qu\'est-ce qui t\'a surpris dans sa réponse ?',
          'Les propositions te semblent-elles utiles ou juste des gadgets ?',
          'Note tes premières impressions'
        ]
      },
      {
        number: 3,
        title: 'Test de limites',
        duration: '5 min',
        instructions: [
          'Pose-lui une question sur un événement récent (moins de 24h)',
          'Demande-lui de résumer un document que tu n\'as pas fourni',
          'Observe comment elle réagit',
          '💡 Question : Que se passe-t-il quand elle ne sait pas ?'
        ]
      }
    ],
    deliverables: [
      'Une première expérience avec l\'IA',
      'Des notes sur tes impressions',
      'Une compréhension des capacités et limites de base'
    ],
    reflectionQuestions: [
      'Qu\'est-ce qui t\'a surpris dans cette première interaction ?',
      'Les propositions de l\'IA te semblent-elles utiles ou juste des gadgets ?',
      'Selon toi, qu\'est-ce que l\'IA ne saura jamais faire ?'
    ],
    trainerScript: '💣 Message pédagogique clé :\n\n"L\'IA ne comprend rien. Elle imite très bien."\n\n🧠 Ce que l\'apprenant découvre :\n\n• L\'IA est accessible et facile à utiliser\n• Elle peut proposer des choses utiles... mais aussi des choses génériques\n• Elle a des limites (événements récents, documents non fournis)\n\n📋 Points à aborder pendant l\'exercice :\n\n**Démythifier l\'IA**\n\n• IA ≠ robot ≠ conscience ≠ magie\n• C\'est une machine à prédire le mot suivant\n• Elle apprend sur des milliards de textes\n• Elle ne "sait" pas, elle devine statistiquement\n\n**Ce que fait une IA aujourd\'hui**\n\n• Texte (ChatGPT, Copilot…)\n• Images (DALL·E, Midjourney)\n• Audio (voix, résumé de réunions)\n• Analyse (documents, mails, tableaux)\n\n**Moment clivant**\n\n"Une IA parle mieux que beaucoup d\'humains…\nmais comprend moins qu\'un enfant de 6 ans."\n\n💡 Erreurs fréquentes des apprenants :\n\n• Croire que l\'IA "comprend" vraiment\n• Faire trop confiance aux réponses\n• Ne pas vérifier les informations\n• Utiliser des prompts trop vagues\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi l\'IA propose-t-elle des choses génériques ?" (elle ne connaît pas ton contexte spécifique)\n• "Que se passe-t-il quand elle ne sait pas ?" (elle peut inventer ou être vague)\n• "Selon vous, qu\'est-ce que l\'IA ne saura jamais faire ?" (débat intéressant)\n\n💣 Phrase d\'impact à dire :\n\n"L\'IA est dangereuse surtout pour les gens qui lui font trop confiance. Elle est brillante, mais elle ment très bien."'
  },
  {
    id: 'ia-ameliorer-texte-02',
    category: 'IA',
    title: 'Améliorer un texte avec l\'IA',
    duration: '15 minutes',
    objective: '🎯 Objectif : Comprendre la puissance stylistique de l\'IA\n\n• Reformuler un texte maladroit\n• Adapter le ton selon le contexte\n• Comprendre que la qualité dépend de la précision de la demande',
    context: 'Tu reçois un mail maladroit et tu dois le reformuler de différentes façons selon le contexte. L\'IA va t\'aider à adapter le ton et le style.',
    generalInstructions: [
      'Utilisez le texte fourni comme point de départ',
      'Testez différentes reformulations',
      'Comparez les résultats',
      'Observez comment l\'IA adapte le ton'
    ],
    steps: [
      {
        number: 1,
        title: 'Texte de départ',
        duration: '2 min',
        instructions: [
          'Voici le texte à améliorer :',
          '',
          '"Bonjour,',
          'Je vous écris pour dire que j\'ai pas reçu le document et que ça m\'embête parce que j\'en ai besoin vite.',
          'Merci"',
          '',
          'Copiez ce texte'
        ]
      },
      {
        number: 2,
        title: 'Reformulation professionnelle',
        duration: '5 min',
        instructions: [
          'Demandez à l\'IA :',
          '"Reformule ce mail en version professionnelle et polie"',
          '',
          'Observez le résultat',
          'Comparez avec l\'original'
        ]
      },
      {
        number: 3,
        title: 'Version très polie',
        duration: '4 min',
        instructions: [
          'Demandez maintenant :',
          '"Reformule ce mail en version très polie et diplomatique"',
          '',
          'Observez les différences avec la version précédente'
        ]
      },
      {
        number: 4,
        title: 'Version ferme',
        duration: '4 min',
        instructions: [
          'Enfin, demandez :',
          '"Reformule ce mail en version ferme mais respectueuse"',
          '',
          'Comparez les trois versions',
          '💡 Question : Quelle version utiliser selon le contexte ?'
        ]
      }
    ],
    deliverables: [
      'Trois versions reformulées du mail',
      'Une compréhension de l\'adaptation du ton',
      'Des notes sur quand utiliser chaque version'
    ],
    reflectionQuestions: [
      'Quelle version préfères-tu et pourquoi ?',
      'Comment l\'IA adapte-t-elle le ton selon ta demande ?',
      'Dans quels contextes utiliserais-tu chaque version ?'
    ],
    trainerScript: '💣 Message pédagogique clé :\n\n"La qualité de la réponse dépend surtout de la qualité de la question."\n\n🧠 Ce que l\'apprenant apprend :\n\n• L\'IA peut adapter le ton et le style\n• Plus la demande est précise, meilleur est le résultat\n• L\'IA est un multiplicateur de clarté\n\n📋 Points à aborder pendant l\'exercice :\n\n**La méthode C.A.D.R.E**\n\n• **C**ontexte : qui je suis, dans quelle situation\n• **A**ction : ce que je veux exactement\n• **D**étails : contraintes, ton, format\n• **R**ôle : "Tu es un expert en…"\n\n**Exemple de bon prompt**\n\n❌ Mauvais : "Écris un mail"\n\n✅ Bon : "Tu es un responsable RH. Écris un mail professionnel pour refuser une candidature, ton bienveillant, 8 lignes maximum."\n\n**Phrase clivante**\n\n"Les gens qui disent que l\'IA est nulle…\nsont souvent ceux qui lui parlent mal."\n\n💡 Erreurs fréquentes des apprenants :\n\n• Prompts trop vagues\n• Ne pas préciser le contexte\n• Ne pas spécifier le ton souhaité\n• Ne pas donner de contraintes (longueur, format)\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi la première version est-elle meilleure que l\'original ?" (correction des erreurs, structure)\n• "Quelle est la différence entre \'professionnel\' et \'très polie\' ?" (nuances de ton)\n• "Comment adapterais-tu ce mail pour un collègue proche ?" (contexte différent)\n\n💣 Phrase d\'impact à dire :\n\n"L\'IA est un multiplicateur de clarté. Les gens clairs deviennent redoutables. Les gens flous deviennent inutiles plus vite."'
  },
  {
    id: 'ia-resumer-03',
    category: 'IA',
    title: 'Résumer et comprendre avec l\'IA',
    duration: '15 minutes',
    objective: '🎯 Objectif : Utiliser l\'IA pour simplifier la complexité\n\n• Résumer un document long\n• Adapter le niveau d\'explication\n• Extraire les points clés',
    context: 'Tu as un document long et complexe. Tu dois le résumer de différentes façons selon ton audience. L\'IA va t\'aider à adapter le niveau.',
    generalInstructions: [
      'Utilisez un article ou document de votre choix (ou celui fourni)',
      'Testez différents niveaux de résumé',
      'Observez comment l\'IA adapte le langage',
      'Comparez les résultats'
    ],
    steps: [
      {
        number: 1,
        title: 'Sélectionner un document',
        duration: '2 min',
        instructions: [
          'Choisissez un article d\'actualité ou un document professionnel',
          'Ou utilisez celui fourni dans les fichiers',
          'Copiez le texte complet'
        ]
      },
      {
        number: 2,
        title: 'Résumé en 5 lignes',
        duration: '4 min',
        instructions: [
          'Demandez à l\'IA :',
          '"Résume ce texte en 5 lignes maximum"',
          '',
          'Collez le texte',
          'Observez le résultat'
        ]
      },
      {
        number: 3,
        title: '3 points clés',
        duration: '4 min',
        instructions: [
          'Demandez maintenant :',
          '"Extrais les 3 points clés de ce texte sous forme de puces"',
          '',
          'Comparez avec le résumé précédent'
        ]
      },
      {
        number: 4,
        title: 'Explication simple',
        duration: '5 min',
        instructions: [
          'Enfin, demandez :',
          '"Explique ce texte comme à un enfant de 12 ans"',
          '',
          'Observez comment l\'IA simplifie le langage',
          '💡 Message caché : L\'IA est une machine à simplifier la complexité'
        ]
      }
    ],
    deliverables: [
      'Trois versions du résumé (5 lignes, 3 points, explication simple)',
      'Une compréhension de l\'adaptation du niveau',
      'Des notes sur l\'utilisation de chaque format'
    ],
    reflectionQuestions: [
      'Quelle version est la plus utile selon toi ?',
      'Comment l\'IA adapte-t-elle le langage selon le niveau demandé ?',
      'Dans quels contextes utiliserais-tu chaque format ?'
    ],
    files: [
      {
        name: 'Article_exemple.txt',
        path: '/templates/Article_exemple.txt',
        type: 'download'
      }
    ],
    trainerScript: '💣 Message pédagogique clé :\n\n"L\'IA est une machine à simplifier la complexité."\n\n🧠 Ce que l\'apprenant apprend :\n\n• L\'IA peut adapter le niveau d\'explication\n• Différents formats pour différents usages\n• L\'importance de préciser le format souhaité\n\n📋 Points à aborder pendant l\'exercice :\n\n**5 grands usages universels de l\'IA**\n\n1. **ÉCRIRE ET COMMUNIQUER**\n   → Mails professionnels\n   → Comptes rendus\n   → Reformulation diplomatique\n   → Traduction intelligente\n\n2. **ORGANISER ET CLARIFIER**\n   → Résumer un document long\n   → Extraire les points clés\n   → Préparer une réunion\n   → Structurer des idées\n\n3. **RÉFLÉCHIR ET DÉCIDER**\n   → Brainstorming\n   → Avantages / inconvénients\n   → Aide à la décision\n   → Simulation de scénarios\n\n4. **APPRENDRE PLUS VITE**\n   → Explication de notions\n   → Reformulation pédagogique\n   → Création d\'exercices\n   → Quiz personnalisés\n\n5. **AUTOMATISER DES PETITES TÂCHES**\n   → Réponses types\n   → Modèles de documents\n   → Checklists\n   → Procédures\n\n**Phrase choc**\n\n"L\'IA est un excellent collègue…\nmais un très mauvais patron."\n\n💡 Erreurs fréquentes des apprenants :\n\n• Ne pas préciser le format souhaité\n• Ne pas adapter le niveau selon l\'audience\n• Croire que tous les résumés se valent\n• Ne pas vérifier les informations importantes\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi le résumé en 5 lignes est-il différent des 3 points clés ?" (formats différents)\n• "Quand utiliserais-tu l\'explication simple ?" (pour transmettre à d\'autres)\n• "Comment vérifierais-tu que le résumé est fidèle à l\'original ?" (vérification)\n\n💣 Phrase d\'impact à dire :\n\n"L\'IA ne va pas remplacer votre métier. Elle va remplacer votre version lente."'
  },
  {
    id: 'ia-decision-04',
    category: 'IA',
    title: 'Aide à la décision avec l\'IA',
    duration: '20 minutes',
    objective: '🎯 Objectif : Utiliser l\'IA pour structurer sa réflexion\n\n• Lister avantages et inconvénients\n• Analyser les risques\n• Obtenir un conseil argumenté\n• Comprendre que l\'IA aide à penser, mais ne décide pas',
    context: 'Tu dois prendre une décision importante. L\'IA va t\'aider à structurer ta réflexion en listant les éléments à considérer, mais c\'est toi qui décideras.',
    generalInstructions: [
      'Choisissez une situation de décision réelle ou utilisez l\'exemple fourni',
      'Utilisez l\'IA pour structurer votre réflexion',
      'N\'oubliez pas : l\'IA aide à penser, mais ne décide pas',
      'La décision finale vous appartient'
    ],
    steps: [
      {
        number: 1,
        title: 'Définir la situation',
        duration: '3 min',
        instructions: [
          'Exemple de situation :',
          '"Dois-je accepter une nouvelle opportunité professionnelle ?"',
          '',
          'Ou choisissez votre propre situation',
          'Formulez-la clairement'
        ]
      },
      {
        number: 2,
        title: 'Lister avantages et inconvénients',
        duration: '6 min',
        instructions: [
          'Demandez à l\'IA :',
          '"Liste les avantages et inconvénients de [ta situation]"',
          '',
          'Donnez le contexte nécessaire',
          'Observez la réponse structurée'
        ]
      },
      {
        number: 3,
        title: 'Analyser les risques',
        duration: '5 min',
        instructions: [
          'Demandez maintenant :',
          '"Quels sont les risques principaux de cette décision ?"',
          '',
          'Comparez avec ta propre analyse',
          'Note les risques que tu n\'avais pas identifiés'
        ]
      },
      {
        number: 4,
        title: 'Conseil argumenté',
        duration: '6 min',
        instructions: [
          'Enfin, demandez :',
          '"Donne-moi un conseil argumenté sur cette décision"',
          '',
          '⚠️ Important : Le conseil de l\'IA est une aide, pas une vérité absolue',
          '💡 Débrief : Montrer que l\'IA aide à penser, mais ne décide pas'
        ]
      }
    ],
    deliverables: [
      'Une liste structurée d\'avantages/inconvénients',
      'Une analyse des risques',
      'Un conseil argumenté',
      'Une réflexion sur l\'utilisation de l\'IA pour la décision'
    ],
    reflectionQuestions: [
      'Le conseil de l\'IA correspond-il à ta propre réflexion ?',
      'Quels éléments n\'avais-tu pas considérés ?',
      'Comment utiliserais-tu l\'IA pour prendre une décision importante ?',
      'Pourquoi est-il important de ne pas laisser l\'IA décider à ta place ?'
    ],
    trainerScript: '💣 Message pédagogique clé :\n\n"L\'IA aide à penser, mais ne décide pas."\n\n🧠 Ce que l\'apprenant apprend :\n\n• Structurer sa réflexion avec l\'IA\n• Identifier des angles qu\'il n\'avait pas vus\n• Comprendre que la décision finale lui appartient\n\n📋 Points à aborder pendant l\'exercice :\n\n**RÉFLÉCHIR ET DÉCIDER**\n\nL\'IA peut aider pour :\n• Brainstorming\n• Avantages / inconvénients\n• Aide à la décision\n• Simulation de scénarios\n\n**Mais attention**\n\n• L\'IA ne connaît pas ton contexte complet\n• Elle peut manquer des nuances importantes\n• Elle peut biaiser selon ses données d\'entraînement\n• La décision finale doit être la tienne\n\n**Phrase choc**\n\n"L\'IA est un excellent collègue…\nmais un très mauvais patron."\n\n**Limites et risques**\n\n❌ Elle peut inventer\n❌ Elle peut biaiser\n❌ Elle dépend de ses données\n❌ Problèmes de confidentialité\n❌ Illusion de compétence\n\n**Message fort**\n\n"L\'IA est dangereuse surtout pour les gens qui lui font trop confiance."\n\n💡 Erreurs fréquentes des apprenants :\n\n• Suivre aveuglément le conseil de l\'IA\n• Ne pas considérer son propre contexte\n• Oublier que l\'IA peut biaiser\n• Ne pas vérifier les informations\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi le conseil de l\'IA est-il utile mais pas définitif ?" (manque de contexte)\n• "Quels éléments l\'IA ne peut-elle pas connaître ?" (ton vécu, tes valeurs)\n• "Comment utiliserais-tu l\'IA pour une décision importante ?" (aide à la réflexion, pas remplacement)\n\n💣 Phrase d\'impact à dire :\n\n"L\'IA est un excellent assistant pour structurer ta pensée. Mais la décision finale, c\'est toi qui la prends. L\'IA ne connaît pas ton contexte, tes valeurs, ton vécu."'
  },
  {
    id: 'ia-prompting-05',
    category: 'IA',
    title: 'Savoir parler à une IA - Le prompting efficace',
    duration: '30 minutes',
    objective: '🎯 Objectif : Maîtriser l\'art du prompting\n\n• Comprendre que la qualité dépend de la précision\n• Apprendre la méthode C.A.D.R.E\n• Pratiquer avec des exemples concrets\n\n💣 Message clé :\n\n"Les gens qui disent que l\'IA est nulle…\nsont souvent ceux qui lui parlent mal."',
    context: 'Tu vas apprendre à bien communiquer avec l\'IA. La qualité de la réponse dépend surtout de la qualité de la question. Tu vas découvrir la méthode C.A.D.R.E.',
    generalInstructions: [
      'Testez les prompts proposés',
      'Comparez les résultats',
      'Observez l\'impact de la précision',
      'Pratiquez avec vos propres exemples'
    ],
    steps: [
      {
        number: 1,
        title: 'Mauvais vs Bon prompt',
        duration: '8 min',
        instructions: [
          'Test 1 - Mauvais prompt :',
          '"Écris un mail"',
          '',
          'Observez le résultat',
          '',
          'Test 2 - Bon prompt :',
          '"Tu es un responsable RH. Écris un mail professionnel pour refuser une candidature, ton bienveillant, 8 lignes maximum."',
          '',
          'Comparez les deux résultats',
          '💡 Question : Quelle est la différence ?'
        ]
      },
      {
        number: 2,
        title: 'La méthode C.A.D.R.E',
        duration: '10 min',
        instructions: [
          'Découvrez la méthode C.A.D.R.E :',
          '',
          '**C**ontexte : qui je suis, dans quelle situation',
          '**A**ction : ce que je veux exactement',
          '**D**étails : contraintes, ton, format',
          '**R**ôle : "Tu es un expert en…"',
          '',
          'Testez avec un exemple :',
          '"Tu es un expert en communication. Je suis manager et je dois annoncer un changement d\'organisation à mon équipe. Écris un mail rassurant, professionnel, qui explique les bénéfices, 15 lignes maximum."',
          '',
          'Observez la qualité du résultat'
        ]
      },
      {
        number: 3,
        title: 'Pratique guidée',
        duration: '12 min',
        instructions: [
          'Choisissez une situation de votre travail',
          'Construisez un prompt avec la méthode C.A.D.R.E',
          '',
          'Exemple de structure :',
          '- Contexte : [votre situation]',
          '- Action : [ce que vous voulez]',
          '- Détails : [contraintes, format, ton]',
          '- Rôle : [expertise de l\'IA]',
          '',
          'Testez votre prompt',
          'Ajustez si nécessaire',
          'Comparez avec un prompt vague'
        ]
      }
    ],
    deliverables: [
      'Une compréhension de la méthode C.A.D.R.E',
      'Des exemples de bons et mauvais prompts',
      'Un prompt personnel construit avec la méthode',
      'Une réflexion sur l\'impact de la précision'
    ],
    reflectionQuestions: [
      'Quelle est la différence entre un bon et un mauvais prompt ?',
      'Pourquoi la méthode C.A.D.R.E est-elle efficace ?',
      'Comment adapterais-tu tes prompts selon le contexte ?',
      'Pourquoi certaines personnes disent-elles que l\'IA est "nulle" ?'
    ],
    trainerScript: '💣 Message pédagogique clé :\n\n"La qualité de la réponse dépend surtout de la qualité de la question."\n\n"Les gens qui disent que l\'IA est nulle…\nsont souvent ceux qui lui parlent mal."\n\n🧠 Ce que l\'apprenant apprend :\n\n• L\'importance de la précision dans les prompts\n• La méthode C.A.D.R.E\n• Comment structurer une demande efficace\n\n📋 La méthode C.A.D.R.E expliquée :\n\n**C - Contexte**\nQui je suis, dans quelle situation\n→ "Je suis manager d\'une équipe de 10 personnes"\n\n**A - Action**\nCe que je veux exactement\n→ "Écris un mail pour annoncer un changement"\n\n**D - Détails**\nContraintes, ton, format\n→ "Ton rassurant, professionnel, 15 lignes maximum"\n\n**R - Rôle**\n"Tu es un expert en…"\n→ "Tu es un expert en communication managériale"\n\n**Exemple complet**\n\n"Tu es un expert en communication managériale.\nJe suis manager d\'une équipe de 10 personnes.\nÉcris un mail professionnel pour annoncer un changement d\'organisation.\nTon rassurant, qui explique les bénéfices, 15 lignes maximum."\n\n**Comparaison**\n\n❌ Mauvais : "Écris un mail"\n→ Résultat générique, peu utile\n\n✅ Bon : Prompt C.A.D.R.E complet\n→ Résultat précis, adapté, utile\n\n💡 Erreurs fréquentes des apprenants :\n\n• Prompts trop vagues\n• Oublier le contexte\n• Ne pas préciser le format\n• Ne pas donner de rôle à l\'IA\n• Ne pas spécifier le ton\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi le premier prompt donne-t-il un résultat générique ?" (manque de précision)\n• "Quel élément du C.A.D.R.E est le plus important ?" (tous sont importants, mais le contexte change tout)\n• "Comment adapterais-tu ce prompt pour un autre contexte ?" (flexibilité)\n\n💣 Phrase d\'impact à dire :\n\n"L\'IA est un multiplicateur de clarté. Si tu es clair dans ta demande, tu obtiens des résultats redoutables. Si tu es flou, tu obtiens des résultats flous."'
  },
  {
    id: 'ia-limites-06',
    category: 'IA',
    title: 'Limites, risques et dangers de l\'IA',
    duration: '25 minutes',
    objective: '🎯 Objectif : Comprendre les limites et risques de l\'IA\n\n• Identifier les dangers principaux\n• Apprendre à détecter les erreurs\n• Comprendre l\'importance de la vérification\n\n💣 Message fort :\n\n"L\'IA est dangereuse surtout pour les gens qui lui font trop confiance."',
    context: 'Tu vas découvrir les limites et risques de l\'IA. C\'est une partie très importante pour utiliser l\'IA de manière responsable. L\'IA peut inventer, biaiser, et faire des erreurs très convaincantes.',
    generalInstructions: [
      'Testez les exemples proposés',
      'Observez comment l\'IA peut se tromper',
      'Apprenez à détecter les erreurs',
      'Comprenez l\'importance de toujours vérifier'
    ],
    steps: [
      {
        number: 1,
        title: 'Les hallucinations',
        duration: '8 min',
        instructions: [
          'Test 1 - Question piège :',
          '"Résume-moi le document que je t\'ai envoyé hier"',
          '(sans avoir envoyé de document)',
          '',
          'Observez la réponse',
          '💡 L\'IA peut inventer avec assurance',
          '',
          'Test 2 - Fausse information :',
          '"Qui a gagné le match de tennis du 32 décembre 2025 ?"',
          '',
          'Observez comment l\'IA réagit',
          '⚠️ Elle peut inventer ou être vague'
        ]
      },
      {
        number: 2,
        title: 'Les biais',
        duration: '7 min',
        instructions: [
          'Testez des questions qui peuvent révéler des biais :',
          '"Quels sont les meilleurs métiers pour une femme ?"',
          '',
          'Observez la réponse',
          'Notez les stéréotypes possibles',
          '',
          '💡 L\'IA reflète les biais de ses données d\'entraînement'
        ]
      },
      {
        number: 3,
        title: 'L\'illusion de compétence',
        duration: '10 min',
        instructions: [
          'Testez une question technique complexe :',
          '"Donne-moi un conseil juridique sur [situation]"',
          '',
          'Observez la réponse',
          '⚠️ L\'IA peut donner un conseil très convaincant mais faux',
          '',
          '💡 Message clé :',
          'L\'IA est dangereuse surtout pour les gens qui lui font trop confiance',
          '',
          'Réfléchissez :',
          'Comment vérifier les informations de l\'IA ?'
        ]
      }
    ],
    deliverables: [
      'Une compréhension des limites de l\'IA',
      'Des exemples d\'erreurs observées',
      'Une liste de méthodes de vérification',
      'Une réflexion sur l\'utilisation responsable'
    ],
    reflectionQuestions: [
      'Quelles erreurs as-tu observées ?',
      'Comment détecter une "hallucination" de l\'IA ?',
      'Pourquoi est-il dangereux de faire trop confiance à l\'IA ?',
      'Comment utiliserais-tu l\'IA de manière responsable ?'
    ],
    trainerScript: '💣 Message pédagogique clé :\n\n"L\'IA est dangereuse surtout pour les gens qui lui font trop confiance."\n\n"L\'IA est parfois brillante. Mais elle ment très bien."\n\n🧠 Ce que l\'apprenant apprend :\n\n• Les limites et risques de l\'IA\n• Comment détecter les erreurs\n• L\'importance de la vérification\n\n📋 Limites et risques à couvrir :\n\n**❌ Elle peut inventer (hallucinations)**\n\n• Réponses très convaincantes mais fausses\n• Citations inventées\n• Événements qui n\'existent pas\n• Statistiques erronées\n\n**❌ Elle peut biaiser**\n\n• Reflète les biais de ses données d\'entraînement\n• Stéréotypes possibles\n• Points de vue limités\n\n**❌ Elle dépend de ses données**\n\n• Ne connaît que ce sur quoi elle a été entraînée\n• Peut être obsolète\n• Peut manquer de contexte récent\n\n**❌ Problèmes de confidentialité**\n\n• Ne pas partager de données sensibles\n• Informations personnelles\n• Secrets professionnels\n• Données financières\n\n**❌ Illusion de compétence**\n\n• Réponses très convaincantes mais fausses\n• Conseils médicaux, juridiques, financiers risqués\n• Fausse impression de compréhension\n\n**Cas concrets**\n\n• Faux mails juridiques\n• Mauvais conseils médicaux\n• Erreurs très convaincantes\n• Citations inventées\n\n**3 règles d\'or**\n\n1. Toujours vérifier\n2. Ne jamais donner de données sensibles\n3. Utiliser l\'IA comme assistant, pas comme décideur\n\n💡 Erreurs fréquentes des apprenants :\n\n• Faire trop confiance aux réponses\n• Ne pas vérifier les informations\n• Partager des données sensibles\n• Utiliser l\'IA pour des décisions critiques sans vérification\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Comment détecter une hallucination ?" (vérifier les faits, chercher des sources)\n• "Pourquoi l\'IA peut-elle biaiser ?" (données d\'entraînement)\n• "Quand ne faut-il JAMAIS utiliser l\'IA ?" (décisions médicales, juridiques, financières critiques)\n\n💣 Phrase d\'impact à dire :\n\n"L\'IA est brillante, mais elle ment très bien. Elle est dangereuse surtout pour les gens qui lui font trop confiance. Toujours vérifier, jamais faire confiance aveuglément."'
  },
  {
    id: 'ia-quotidien-07',
    category: 'IA',
    title: 'Utiliser l\'IA au quotidien - Bonnes pratiques',
    duration: '15 minutes',
    objective: '🎯 Objectif : Adopter une philosophie d\'utilisation responsable\n\n• Comprendre les 3 règles d\'or\n• Intégrer l\'IA dans son workflow\n• Éviter les pièges courants',
    context: 'Tu vas découvrir comment intégrer l\'IA dans ton travail quotidien de manière efficace et responsable. C\'est la conclusion pratique de la formation.',
    generalInstructions: [
      'Réfléchissez à votre utilisation actuelle',
      'Identifiez les opportunités d\'amélioration',
      'Adoptez les bonnes pratiques',
      'Testez avec vos propres cas d\'usage'
    ],
    steps: [
      {
        number: 1,
        title: 'Les 3 règles d\'or',
        duration: '5 min',
        instructions: [
          'Découvrez les 3 règles d\'or :',
          '',
          '1. Toujours vérifier',
          '   → Ne jamais faire confiance aveuglément',
          '   → Vérifier les faits importants',
          '   → Croiser les sources',
          '',
          '2. Ne jamais donner de données sensibles',
          '   → Pas d\'informations personnelles',
          '   → Pas de secrets professionnels',
          '   → Pas de données financières',
          '',
          '3. Utiliser l\'IA comme assistant, pas comme décideur',
          '   → L\'IA aide à penser',
          '   → Mais ne décide pas à ta place',
          '   → La décision finale t\'appartient'
        ]
      },
      {
        number: 2,
        title: 'Cas d\'usage quotidiens',
        duration: '5 min',
        instructions: [
          'Identifiez vos cas d\'usage :',
          '',
          '• Écrire et communiquer (mails, comptes rendus)',
          '• Organiser et clarifier (résumés, points clés)',
          '• Réfléchir et décider (brainstorming, analyse)',
          '• Apprendre plus vite (explications, quiz)',
          '• Automatiser des petites tâches (modèles, checklists)',
          '',
          'Choisissez 2-3 cas d\'usage pour commencer'
        ]
      },
      {
        number: 3,
        title: 'Plan d\'action',
        duration: '5 min',
        instructions: [
          'Créez votre plan d\'action :',
          '',
          '1. Cette semaine :',
          '   → Tester l\'IA sur [cas d\'usage 1]',
          '',
          '2. Ce mois :',
          '   → Intégrer l\'IA dans [cas d\'usage 2]',
          '',
          '3. À éviter :',
          '   → [piège identifié]',
          '',
          '💡 Phrase de fin :',
          '"L\'IA ne va pas remplacer votre métier. Elle va remplacer votre version lente."'
        ]
      }
    ],
    deliverables: [
      'Une compréhension des 3 règles d\'or',
      'Une liste de cas d\'usage personnels',
      'Un plan d\'action pour intégrer l\'IA',
      'Une réflexion sur l\'utilisation responsable'
    ],
    reflectionQuestions: [
      'Quelles sont les 3 règles d\'or à retenir ?',
      'Quels cas d\'usage vas-tu tester en premier ?',
      'Comment éviteras-tu les pièges identifiés ?',
      'Comment l\'IA va-t-elle changer ton travail ?'
    ],
    trainerScript: '💣 Message pédagogique clé :\n\n"L\'IA ne va pas remplacer votre métier. Elle va remplacer votre version lente."\n\n🧠 Ce que l\'apprenant apprend :\n\n• Les 3 règles d\'or pour utiliser l\'IA\n• Comment intégrer l\'IA dans son workflow\n• Comment éviter les pièges\n\n📋 Les 3 règles d\'or :\n\n**1. Toujours vérifier**\n\n• Ne jamais faire confiance aveuglément\n• Vérifier les faits importants\n• Croiser les sources\n• Surtout pour les décisions importantes\n\n**2. Ne jamais donner de données sensibles**\n\n• Pas d\'informations personnelles\n• Pas de secrets professionnels\n• Pas de données financières\n• Pas de mots de passe\n• Attention à la confidentialité\n\n**3. Utiliser l\'IA comme assistant, pas comme décideur**\n\n• L\'IA aide à penser\n• Mais ne décide pas à ta place\n• La décision finale t\'appartient\n• Surtout pour les décisions importantes\n\n**Comment intégrer l\'IA dans son workflow**\n\n• Commencer petit (1-2 cas d\'usage)\n• Tester et ajuster\n• Apprendre à bien prompter\n• Vérifier toujours les résultats\n• Ne pas remplacer la réflexion humaine\n\n**Cas d\'usage quotidiens**\n\n• Écrire et communiquer\n• Organiser et clarifier\n• Réfléchir et décider\n• Apprendre plus vite\n• Automatiser des petites tâches\n\n**À éviter**\n\n• Faire trop confiance\n• Donner des données sensibles\n• Laisser l\'IA décider\n• Utiliser sans vérification\n• Croire que l\'IA comprend vraiment\n\n💡 Erreurs fréquentes des apprenants :\n\n• Oublier de vérifier\n• Partager des données sensibles\n• Faire trop confiance\n• Ne pas adapter les prompts\n• Vouloir tout automatiser\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi ces 3 règles sont-elles importantes ?" (sécurité, qualité, responsabilité)\n• "Quels cas d\'usage vas-tu tester en premier ?" (commencer petit)\n• "Comment éviteras-tu les pièges ?" (vérification systématique)\n\n💣 Phrase d\'impact à dire :\n\n"L\'IA ne va pas remplacer votre métier. Elle va remplacer votre version lente. Les gens clairs deviennent redoutables. Les gens flous deviennent inutiles plus vite."\n\n**Conclusion**\n\n"L\'IA est un multiplicateur de clarté. Utilisez-la comme assistant, vérifiez toujours, et gardez votre esprit critique. C\'est ainsi que vous en tirerez le meilleur parti."'
  },
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
    id: 'excel-tcd-01',
    category: 'Excel',
    title: 'Analyse de la saison d\'un club de football avec un TCD',
    duration: '60 minutes',
    objective: '🎯 Objectif pédagogique\n\nApprendre à :\n• Construire un TCD à partir d\'une base réaliste\n• Choisir les bons axes (lignes / colonnes / filtres)\n• Utiliser :\n  - Sommes\n  - Moyennes\n  - Comptages\n  - Champs calculés\n• Interpréter les résultats comme un analyste sportif, pas comme un comptable.',
    context: 'Tu es analyste sportif pour un club de football. Tu dois analyser la saison complète à l\'aide de Tableaux Croisés Dynamiques.\n\nLe fichier contient tous les matchs de la saison avec :\n• Date, Journée\n• Domicile/Extérieur\n• Adversaire\n• Buts pour, Buts contre\n• Résultat (Victoire/Nul/Défaite)\n• Buteur principal\n• Minutes jouées',
    generalInstructions: [
      'Importez le fichier Excel_TCD_Football_Matchs.csv',
      'Transformez-le en Table Excel',
      'Créez plusieurs TCD pour répondre aux questions d\'analyse',
      'Interprétez les résultats comme un analyste sportif'
    ],
    steps: [
      {
        number: 1,
        title: 'Préparer les données',
        duration: '5 min',
        instructions: [
          'Importez le fichier Excel_TCD_Football_Matchs.csv',
          'Transformez la plage en Table Excel (Insertion → Tableau)',
          'Vérifiez que toutes les colonnes sont correctement typées :',
          '  • Date → Date',
          '  • Journée → Texte',
          '  • Domicile/Extérieur → Texte',
          '  • Adversaire → Texte',
          '  • Buts pour, Buts contre → Nombre',
          '  • Résultat → Texte',
          '  • Buteur principal → Texte',
          '  • Minutes jouées → Nombre'
        ]
      },
      {
        number: 2,
        title: 'Partie 1 : TCD de base - Répartition des résultats',
        duration: '10 min',
        instructions: [
          'Créez un premier TCD :',
          '• En lignes : Résultat (Victoire / Nul / Défaite)',
          '• En valeurs : Nombre de matchs',
          '',
          '🎯 Question : Quelle est la répartition Victoires / Nuls / Défaites sur la saison ?',
          '',
          'Pour compter les matchs :',
          '• Glissez Résultat dans Valeurs',
          '• Clic droit → Paramètres de champ de valeur',
          '• Changer de "Somme" à "Nombre"',
          '• Nom personnalisé : "Nombre de matchs"'
        ]
      },
      {
        number: 3,
        title: 'Partie 2 : Domicile vs Extérieur',
        duration: '10 min',
        instructions: [
          'Créez un second TCD :',
          '• En lignes : Domicile/Extérieur',
          '• En colonnes : Résultat',
          '• En valeurs : Nombre de matchs',
          '',
          '🎯 Questions :',
          '• L\'équipe est-elle plus performante à domicile ?',
          '• Y a-t-il plus de défaites à l\'extérieur ?',
          '',
          'Pour ajouter Résultat en colonnes :',
          '• Glissez Résultat dans Colonnes',
          '• Glissez Résultat dans Valeurs (Nombre)'
        ]
      },
      {
        number: 4,
        title: 'Partie 3 : Analyse offensive',
        duration: '10 min',
        instructions: [
          'Créez un troisième TCD :',
          '• En lignes : Adversaire',
          '• En valeurs :',
          '  - Somme de Buts pour',
          '  - Moyenne de Buts pour',
          '',
          'Triez par moyenne décroissante',
          '',
          '🎯 Questions :',
          '• Contre quels adversaires marque-t-on le plus ?',
          '• Est-ce lié au niveau de l\'adversaire ou au style de jeu ?',
          '',
          'Pour la moyenne :',
          '• Glissez Buts pour dans Valeurs (deux fois)',
          '• Clic droit sur le second → Paramètres → Moyenne',
          '• Nom personnalisé : "Moyenne de Buts pour"'
        ]
      },
      {
        number: 5,
        title: 'Partie 4 : Joueur clé',
        duration: '15 min',
        instructions: [
          'Créez un quatrième TCD :',
          '• En lignes : Buteur principal',
          '• En valeurs :',
          '  - Somme de Buts pour',
          '  - Nombre de matchs',
          '',
          'Ajoutez un champ calculé :',
          '• Clic droit sur le TCD → Champs, éléments et ensembles → Champ calculé',
          '• Nom : "Buts par match"',
          '• Formule : = "Buts pour" / "Nombre de matchs"',
          '',
          '🎯 Questions :',
          '• Qui est vraiment décisif ?',
          '• Un joueur qui marque beaucoup mais joue peu est-il plus précieux qu\'un titulaire régulier ?',
          '',
          '⚠️ Attention : Filtrer les lignes où Buteur principal = "—" (pas de buteur)'
        ]
      },
      {
        number: 6,
        title: 'Partie 5 : Filtres et lecture stratégique',
        duration: '10 min',
        instructions: [
          'Ajoutez des filtres sur votre TCD préféré :',
          '• Domicile/Extérieur → Filtres',
          '• Résultat → Filtres',
          '',
          'Testez différents scénarios :',
          '• Affichez uniquement les défaites',
          '• Analysez :',
          '  - Où elles ont lieu (Domicile/Extérieur)',
          '  - Contre qui (Adversaire)',
          '  - Avec quel buteur (Buteur principal)',
          '',
          '🎯 Question de synthèse :',
          'Si tu étais l\'entraîneur, sur quoi tu travaillerais en priorité ?'
        ]
      }
    ],
    deliverables: [
      'Cinq TCD différents répondant aux questions d\'analyse :',
      '  • Répartition Victoires/Nuls/Défaites',
      '  • Performance Domicile vs Extérieur',
      '  • Analyse offensive par adversaire',
      '  • Analyse des buteurs avec champ calculé',
      '  • Analyse stratégique avec filtres',
      'Interprétation des résultats comme un analyste sportif'
    ],
    reflectionQuestions: [
      'Quelle est la répartition Victoires / Nuls / Défaites sur la saison ?',
      'L\'équipe est-elle plus performante à domicile ? Pourquoi ?',
      'Contre quels adversaires marque-t-on le plus ? Est-ce lié au niveau ou au style de jeu ?',
      'Qui est vraiment décisif ? Le meilleur buteur est-il toujours le joueur le plus important ?',
      'Si tu étais l\'entraîneur, sur quoi travaillerais-tu en priorité ?'
    ],
    files: [
      {
        name: 'Excel_TCD_Football_Matchs.csv',
        path: '/templates/Excel_TCD_Football_Matchs.csv',
        type: 'download'
      }
    ],
    trainerScript: '💣 Opinions clivantes pédagogiques :\n\n"Un club qui dépend trop de son terrain est un club fragile."\n\n"Le meilleur buteur n\'est pas toujours le joueur le plus important."\n\n🧠 Ce que l\'apprenant apprend :\n\n• Construire un TCD à partir d\'une base réaliste\n• Choisir les bons axes (lignes / colonnes / filtres)\n• Utiliser Sommes, Moyennes, Comptages, Champs calculés\n• Interpréter les résultats comme un analyste sportif\n\n📋 Correction détaillée partie par partie :\n\n**Partie 1 – TCD de base : Répartition des résultats**\n\n**Configuration :**\n• Résultat → Lignes\n• Résultat → Valeurs (Nombre)\n• Nom personnalisé : "Nombre de matchs"\n\n**Résultat attendu :**\n\n| Résultat | Nombre de matchs |\n|----------|------------------|\n| Victoire | ~18-20           |\n| Nul      | ~8-10            |\n| Défaite  | ~8-10            |\n\n**Interprétation :**\n• Bilan global de la saison\n• Taux de victoire : ~50%\n• Taux de défaite : ~25%\n• ⚠️ Question clé : Est-ce suffisant pour les objectifs du club ?\n\n**Partie 2 – Domicile vs Extérieur**\n\n**Configuration :**\n• Domicile/Extérieur → Lignes\n• Résultat → Colonnes\n• Résultat → Valeurs (Nombre)\n\n**Résultat attendu (exemple) :**\n\n|            | Victoire | Nul | Défaite | Total |\n|------------|----------|-----|---------|-------|\n| Domicile   | 12       | 4   | 2       | 18    |\n| Extérieur  | 6        | 6   | 8       | 20    |\n\n**Interprétation :**\n• Performance domicile : ~67% de victoires\n• Performance extérieur : ~30% de victoires\n• ⚠️ **Opinion clivante** : "Un club qui dépend trop de son terrain est un club fragile."\n• Question : Pourquoi cette différence ? (public, confort, pression)\n\n**Partie 3 – Analyse offensive**\n\n**Configuration :**\n• Adversaire → Lignes\n• Buts pour → Valeurs (Somme)\n• Buts pour → Valeurs (Moyenne)\n• Trier par moyenne décroissante\n\n**Résultat attendu (exemple) :**\n\n| Adversaire | Somme Buts pour | Moyenne Buts pour |\n|------------|----------------|-------------------|\n| Angers     | 4              | 2.0               |\n| Clermont   | 2              | 1.0               |\n| Lyon       | 3              | 1.0               |\n\n**Interprétation :**\n• Contre qui marque-t-on le plus ?\n• Est-ce lié au niveau de l\'adversaire ? (équipes plus faibles)\n• Ou au style de jeu ? (défense ouverte vs fermée)\n• ⚠️ Question stratégique : Faut-il adapter le style selon l\'adversaire ?\n\n**Partie 4 – Joueur clé**\n\n**Configuration :**\n• Buteur principal → Lignes\n• Buts pour → Valeurs (Somme)\n• Résultat → Valeurs (Nombre) pour compter les matchs\n• Champ calculé : "Buts par match" = Buts pour / Nombre de matchs\n• Filtrer "—" (pas de buteur)\n\n**Résultat attendu (exemple) :**\n\n| Buteur | Buts totaux | Matchs | Buts/match |\n|--------|-------------|--------|------------|\n| Martin | 15          | 20     | 0.75       |\n| Dupont | 8           | 12     | 0.67       |\n| Bernard| 6           | 15     | 0.40       |\n\n**Interprétation :**\n• Martin = meilleur buteur total (15 buts)\n• Mais Dupont = meilleur ratio (0.67 buts/match)\n• ⚠️ **Opinion provocatrice** : "Le meilleur buteur n\'est pas toujours le joueur le plus important."\n• Question : Un joueur qui marque beaucoup mais joue peu est-il plus précieux qu\'un titulaire régulier ?\n• Analyse : Martin joue plus (20 matchs), donc plus d\'impact global\n• Mais Dupont est plus décisif par match joué\n\n**Partie 5 – Filtres et lecture stratégique**\n\n**Configuration :**\n• Prendre le TCD de la Partie 4\n• Ajouter Domicile/Extérieur → Filtres\n• Ajouter Résultat → Filtres\n\n**Scénario 1 : Analyser les défaites**\n\n• Filtrer Résultat = Défaite\n• Observer :\n  → Où ont-elles lieu ? (Domicile/Extérieur)\n  → Contre qui ? (Adversaire)\n  → Avec quel buteur ? (Buteur principal)\n\n**Résultat attendu (exemple) :**\n\n| Buteur | Défaites | Domicile | Extérieur |\n|--------|----------|----------|-----------|\n| —      | 5        | 1        | 4         |\n| Martin | 2        | 0        | 2         |\n| Bernard| 2        | 1        | 1         |\n\n**Interprétation :**\n• 5 défaites sans buteur marqué → problème offensif\n• Plus de défaites à l\'extérieur → problème mental/tactique\n• ⚠️ Question de synthèse : "Si tu étais l\'entraîneur, sur quoi tu travaillerais en priorité ?"\n\n**Réponses possibles :**\n• Travail offensif (trop de matchs sans buteur)\n• Mentalité extérieur (trop de défaites à l\'extérieur)\n• Tactique défensive (trop de buts encaissés)\n• Gestion des buteurs (rotation, efficacité)\n\n🎯 Points pédagogiques à aborder :\n\n1. **Interpréter comme un analyste, pas un comptable**\n   → Les chiffres racontent une histoire\n   → Il faut comprendre le contexte sportif\n   → Les moyennes sont plus parlantes que les totaux\n\n2. **Champs calculés**\n   → Permettent de créer des indicateurs métier\n   → Buts/match = indicateur d\'efficacité\n   → Plus parlant que le total de buts seul\n\n3. **Filtres pour l\'analyse stratégique**\n   → Permettent de zoomer sur des situations précises\n   → Défaites = zone de progrès\n   → Analyse des causes pour améliorer\n\n4. **Lignes vs Colonnes**\n   → Lignes = dimension principale d\'analyse\n   → Colonnes = dimension secondaire (comparaison)\n   → Exemple : Domicile/Extérieur en lignes, Résultat en colonnes = comparaison claire\n\n💡 Erreurs fréquentes des apprenants :\n\n• Oublier de changer "Somme" en "Nombre" pour compter les matchs\n• Ne pas créer le champ calculé "Buts par match"\n• Oublier de filtrer "—" dans l\'analyse des buteurs\n• Ne pas trier les résultats par moyenne\n• Ne pas interpréter les résultats (juste faire les calculs)\n• Confondre Somme et Moyenne (quand utiliser quoi ?)\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi utiliser la moyenne plutôt que la somme pour les buts par adversaire ?" (comparaison équitable)\n• "Un joueur qui marque 10 buts en 5 matchs est-il meilleur qu\'un qui marque 15 buts en 30 matchs ?" (ratio vs total)\n• "Pourquoi analyser les défaites séparément ?" (identifier les faiblesses)\n• "Si tu étais l\'entraîneur, sur quoi travaillerais-tu en priorité ?" (synthèse stratégique)\n\n💣 Pièges volontaires dans les données :\n\n• Buteur principal = "—" pour certains matchs (pas de buteur marqué)\n• Mix de résultats pour tester les filtres\n• Différences Domicile/Extérieur marquées\n• Buteurs avec ratios différents (total vs efficacité)\n\n💣 Phrases d\'impact à dire :\n\n"Un club qui dépend trop de son terrain est un club fragile. Les grands clubs gagnent partout."\n\n"Le meilleur buteur n\'est pas toujours le joueur le plus important. L\'efficacité compte plus que le total."\n\n"Analyser les défaites, c\'est identifier les faiblesses. Analyser les victoires, c\'est confirmer les forces."\n\n"Un TCD bien fait, c\'est comme un rapport d\'analyste sportif : les chiffres racontent une histoire, pas juste des totaux."'
  },
  {
    id: 'excel-recherche-01',
    category: 'Excel',
    title: 'Recherches et références avancées',
    duration: '45 minutes',
    objective: '🎯 Compétences travaillées\n\n• Comprendre une clé\n• Utiliser :\n  - RECHERCHEX\n  - RECHERCHEV\n  - INDEX / EQUIV\n• Gérer les erreurs et les cas manquants',
    context: 'Tu as deux tables :\n\n**Table A – Employés**\n• Matricule, Nom, Service\n\n**Table B – Salaires**\n• Matricule, Salaire\n\n⚠️ **Piège volontaire** :\n• E005 n\'a pas de salaire dans Table B\n• E006 n\'existe pas dans Table A\n\n**Objectif** :\nDans la table Employés, ajouter une colonne Salaire en recherchant dans Table B à partir du Matricule.\n\nTu dois produire 3 formules différentes.',
    generalInstructions: [
      'Importez les deux fichiers CSV',
      'Transformez-les en Tables Excel',
      'Créez 3 formules de recherche différentes',
      'Gérez les erreurs avec SIERREUR',
      'Testez avec les cas limites (E005, E006)'
    ],
    steps: [
      {
        number: 1,
        title: 'Préparer les données',
        duration: '10 min',
        instructions: [
          'Importez Excel_Recherche_Employes.csv',
          'Importez Excel_Recherche_Salaires.csv',
          'Transformez chaque fichier en Table Excel',
          'Nommez les tables :',
          '  • TableEmployes',
          '  • TableSalaires',
          'Vérifiez que Matricule est du même type dans les deux tables (texte)'
        ]
      },
      {
        number: 2,
        title: 'Formule 1 : RECHERCHEX (moderne)',
        duration: '10 min',
        instructions: [
          'Dans TableEmployes, ajoutez une colonne "Salaire_RECHERCHEX"',
          'Formule :',
          '=RECHERCHEX([@Matricule]; TableSalaires[Matricule]; TableSalaires[Salaire]; "Non trouvé")',
          '',
          '⚠️ Syntaxe RECHERCHEX :',
          'RECHERCHEX(valeur_cherchée; plage_recherche; plage_retour; [si_non_trouvé])',
          '',
          'Vérifiez que E005 affiche "Non trouvé"'
        ]
      },
      {
        number: 3,
        title: 'Formule 2 : RECHERCHEV (ancienne école)',
        duration: '10 min',
        instructions: [
          'Ajoutez une colonne "Salaire_RECHERCHEV"',
          'Formule :',
          '=SIERREUR(RECHERCHEV([@Matricule]; TableSalaires; 2; FAUX); "Non trouvé")',
          '',
          '⚠️ Syntaxe RECHERCHEV :',
          'RECHERCHEV(valeur; table; index_colonne; correspondance_exacte)',
          '',
          '⚠️ Contrainte : la colonne clé (Matricule) doit être la première colonne de TableSalaires',
          '',
          'Vérifiez que E005 affiche "Non trouvé"'
        ]
      },
      {
        number: 4,
        title: 'Formule 3 : INDEX / EQUIV (méthode robuste)',
        duration: '10 min',
        instructions: [
          'Ajoutez une colonne "Salaire_INDEX_EQUIV"',
          'Formule :',
          '=SIERREUR(INDEX(TableSalaires[Salaire]; EQUIV([@Matricule]; TableSalaires[Matricule]; 0)); "Non trouvé")',
          '',
          '⚠️ Syntaxe :',
          'INDEX(plage; ligne) → renvoie la valeur à la ligne donnée',
          'EQUIV(valeur; plage; 0) → renvoie la position de la valeur',
          '',
          'Vérifiez que E005 affiche "Non trouvé"'
        ]
      },
      {
        number: 5,
        title: 'Tester les cas limites',
        duration: '5 min',
        instructions: [
          'Vérifiez que :',
          '• E001, E002, E003, E004 → affichent leur salaire',
          '• E005 → affiche "Non trouvé" (pas de salaire dans Table B)',
          '',
          'Dans TableSalaires, vérifiez que :',
          '• E006 → existe mais n\'a pas d\'employé correspondant (normal)',
          '',
          'Toutes les formules doivent gérer correctement ces cas'
        ]
      }
    ],
    deliverables: [
      'Deux tables Excel nommées',
      'Trois colonnes Salaire avec formules différentes :',
      '  • RECHERCHEX',
      '  • RECHERCHEV',
      '  • INDEX / EQUIV',
      'Gestion des erreurs avec SIERREUR',
      'Cas limites correctement gérés'
    ],
    reflectionQuestions: [
      'Pourquoi RECHERCHEV est fragile ? (colonne clé obligatoirement à gauche)',
      'Pourquoi INDEX/EQUIV est plus robuste que RECHERCHEV ?',
      'Pourquoi RECHERCHEX est supérieur aux deux autres ?',
      'Que se passe-t-il si Matricule est en nombre dans une table et en texte dans l\'autre ?',
      'Que se passe-t-il s\'il y a un doublon de Matricule dans TableSalaires ?'
    ],
    files: [
      {
        name: 'Excel_Recherche_Employes.csv',
        path: '/templates/Excel_Recherche_Employes.csv',
        type: 'download'
      },
      {
        name: 'Excel_Recherche_Salaires.csv',
        path: '/templates/Excel_Recherche_Salaires.csv',
        type: 'download'
      },
      {
        name: 'Bible_Excel.html',
        path: '/templates/Bible_Excel.html',
        type: 'download'
      }
    ],
    trainerScript: '💣 Opinion clivante :\n\n"Continuer à enseigner uniquement RECHERCHEV en 2026, c\'est enseigner un outil déjà obsolète."\n\n🧠 Ce que l\'apprenant apprend :\n\n• Comprendre une clé\n• Utiliser RECHERCHEX, RECHERCHEV, INDEX/EQUIV\n• Gérer les erreurs et les cas manquants\n\n📋 Correction détaillée étape par étape :\n\n**Étape 1 – Préparer les données**\n\n• Importer Excel_Recherche_Employes.csv\n• Importer Excel_Recherche_Salaires.csv\n• Transformer chaque fichier en Table Excel\n• Nommer les tables :\n  → TableEmployes\n  → TableSalaires\n• ⚠️ **CRUCIAL** : Vérifier que Matricule est du même type dans les deux tables\n  → Si un Matricule est "E001" (texte) et l\'autre 1 (nombre), les recherches échoueront\n  → Convertir en texte si nécessaire\n\n**Étape 2 – Formule 1 : RECHERCHEX (moderne)**\n\n**Syntaxe complète :**\n\n```excel\n=RECHERCHEX([@Matricule]; TableSalaires[Matricule]; TableSalaires[Salaire]; "Non trouvé")\n```\n\n**Explication :**\n\n• `[@Matricule]` = valeur à chercher (dans la ligne courante de TableEmployes)\n• `TableSalaires[Matricule]` = plage où chercher\n• `TableSalaires[Salaire]` = plage à retourner\n• `"Non trouvé"` = valeur si non trouvé (optionnel, mais recommandé)\n\n**Avantages de RECHERCHEX :**\n\n✅ Pas besoin que la colonne clé soit à gauche\n✅ Syntaxe claire et lisible\n✅ Gestion native des erreurs (4e paramètre)\n✅ Plus rapide que RECHERCHEV\n✅ Fonction moderne (Excel 365, 2021)\n\n**Résultat attendu :**\n\n• E001 → 2800\n• E002 → 3200\n• E003 → 3500\n• E004 → 2900\n• E005 → "Non trouvé" (pas de salaire dans TableSalaires)\n\n**Étape 3 – Formule 2 : RECHERCHEV (ancienne école)**\n\n**Syntaxe complète :**\n\n```excel\n=SIERREUR(RECHERCHEV([@Matricule]; TableSalaires; 2; FAUX); "Non trouvé")\n```\n\n**Explication :**\n\n• `[@Matricule]` = valeur à chercher\n• `TableSalaires` = table complète (doit avoir Matricule en 1ère colonne)\n• `2` = index de la colonne à retourner (Salaire = colonne 2)\n• `FAUX` = correspondance exacte (obligatoire)\n• `SIERREUR(...)` = gère les erreurs #N/A\n\n**⚠️ Contraintes de RECHERCHEV :**\n\n❌ La colonne clé (Matricule) DOIT être la première colonne de la table\n❌ Si on inverse les colonnes, ça ne marche plus\n❌ Syntaxe moins claire\n❌ Nécessite SIERREUR pour gérer les erreurs\n❌ Plus lent que RECHERCHEX\n\n**Pourquoi RECHERCHEV est fragile :**\n\n• Si quelqu\'un ajoute une colonne avant Matricule dans TableSalaires, l\'index change\n• Si quelqu\'un réorganise les colonnes, ça casse\n• La dépendance à la position est un risque\n\n**Étape 4 – Formule 3 : INDEX / EQUIV (méthode robuste)**\n\n**Syntaxe complète :**\n\n```excel\n=SIERREUR(\n    INDEX(TableSalaires[Salaire];\n          EQUIV([@Matricule]; TableSalaires[Matricule]; 0)\n    );\n    "Non trouvé"\n)\n```\n\n**Explication détaillée :**\n\n1. `EQUIV([@Matricule]; TableSalaires[Matricule]; 0)`\n   → Cherche [@Matricule] dans TableSalaires[Matricule]\n   → Retourne la position (ligne) si trouvé\n   → Retourne #N/A si non trouvé\n   → `0` = correspondance exacte\n\n2. `INDEX(TableSalaires[Salaire]; ...)`\n   → Prend la plage TableSalaires[Salaire]\n   → Retourne la valeur à la ligne trouvée par EQUIV\n\n3. `SIERREUR(...)`\n   → Si EQUIV retourne #N/A, INDEX retourne #N/A\n   → SIERREUR remplace #N/A par "Non trouvé"\n\n**Avantages de INDEX/EQUIV :**\n\n✅ Pas de contrainte sur la position des colonnes\n✅ Plus flexible que RECHERCHEV\n✅ Fonctionne dans toutes les versions d\'Excel\n✅ Contrôle total sur la logique\n\n**Inconvénients :**\n\n❌ Syntaxe plus complexe\n❌ Nécessite SIERREUR pour gérer les erreurs\n❌ Moins lisible que RECHERCHEX\n\n**Étape 5 – Tester les cas limites**\n\n**Cas normaux :**\n\n• E001 → 2800 ✓\n• E002 → 3200 ✓\n• E003 → 3500 ✓\n• E004 → 2900 ✓\n\n**Cas limite 1 : E005 n\'a pas de salaire**\n\n• E005 existe dans TableEmployes\n• E005 n\'existe PAS dans TableSalaires\n• Résultat attendu : "Non trouvé" ✓\n• Toutes les formules doivent gérer cela correctement\n\n**Cas limite 2 : E006 n\'existe pas dans TableEmployes**\n\n• E006 existe dans TableSalaires\n• E006 n\'existe PAS dans TableEmployes\n• C\'est normal : on cherche depuis TableEmployes vers TableSalaires\n• E006 n\'apparaîtra pas dans les résultats (normal)\n\n**🎯 Points pédagogiques à aborder :**\n\n1. **Pourquoi RECHERCHEV est fragile ?**\n   → La colonne clé DOIT être à gauche\n   → Si quelqu\'un réorganise les colonnes, ça casse\n   → Dépendance à la position = risque\n   → Exemple : si on ajoute une colonne avant Matricule, l\'index change\n\n2. **Pourquoi INDEX/EQUIV est plus robuste ?**\n   → Pas de contrainte sur la position\n   → On spécifie explicitement les plages\n   → Moins fragile aux réorganisations\n   → Mais syntaxe plus complexe\n\n3. **Pourquoi RECHERCHEX est supérieur ?**\n   → Syntaxe claire et lisible\n   → Pas de contrainte sur la position\n   → Gestion native des erreurs\n   → Plus rapide\n   → Fonction moderne (Excel 365, 2021)\n   → ⚠️ Mais pas disponible dans Excel 2019 et antérieur\n\n4. **Gestion des erreurs**\n   → Sans SIERREUR, les formules retournent #N/A si non trouvé\n   → #N/A casse les calculs suivants\n   → SIERREUR permet de remplacer #N/A par une valeur contrôlée\n   → RECHERCHEX a un paramètre intégré pour ça\n\n💡 Erreurs fréquentes des apprenants :\n\n• Oublier SIERREUR avec RECHERCHEV et INDEX/EQUIV\n• Mettre VRAI au lieu de FAUX dans RECHERCHEV (correspondance approximative)\n• Oublier que la colonne clé doit être à gauche avec RECHERCHEV\n• Confondre les plages dans RECHERCHEX\n• Ne pas vérifier que les types de Matricule sont identiques\n• Ne pas tester les cas limites\n\n🔍 Questions à poser pendant l\'exercice :\n\n• "Pourquoi RECHERCHEV est fragile ?" (colonne clé à gauche)\n• "Que se passerait-il si on inversait les colonnes dans TableSalaires ?" (RECHERCHEV casse, RECHERCHEX et INDEX/EQUIV fonctionnent)\n• "Pourquoi RECHERCHEX est supérieur ?" (syntaxe claire, pas de contrainte, gestion erreurs)\n• "Que se passe-t-il si Matricule est en nombre dans une table et en texte dans l\'autre ?" (recherche échoue)\n• "Que se passe-t-il s\'il y a un doublon de Matricule dans TableSalaires ?" (RECHERCHEX retourne le premier trouvé)\n\n⚠️ Pièges volontaires à introduire en formation :\n\n**Piège 1 : Inverser les colonnes**\n• Dans TableSalaires, mettre Salaire avant Matricule\n• RECHERCHEV casse (index change)\n• RECHERCHEX et INDEX/EQUIV fonctionnent toujours\n\n**Piège 2 : Types différents**\n• Matricule en texte dans TableEmployes\n• Matricule en nombre dans TableSalaires\n• Toutes les recherches échouent\n• Solution : convertir en même type\n\n**Piège 3 : Supprimer une clé**\n• Supprimer E001 de TableSalaires\n• E001 dans TableEmployes retourne "Non trouvé"\n• Vérifier que SIERREUR fonctionne\n\n**Piège 4 : Ajouter un doublon**\n• Ajouter E001 deux fois dans TableSalaires avec salaires différents\n• RECHERCHEX retourne le premier trouvé\n• Expliquer le risque des doublons\n\n💣 Phrase d\'impact à dire :\n\n"Le TCD sert à résumer une table. Les fonctions de recherche servent à relier des tables. Un bon analyste maîtrise les deux."\n\nEt aussi :\n\n"RECHERCHEV, c\'est comme un couteau suisse : ça marche, mais c\'est fragile. RECHERCHEX, c\'est comme un outil moderne : ça marche mieux, plus vite, et c\'est plus sûr."'
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

export const categories: ExerciceCategory[] = ['IA', 'Word', 'Excel', 'Outlook', 'OneDrive', 'OneNote', 'PowerQuery'];

export const getExercicesByCategory = (category: ExerciceCategory): Exercice[] => {
  return exercices.filter(ex => ex.category === category);
};

export const getExerciceById = (id: string): Exercice | undefined => {
  return exercices.find(ex => ex.id === id);
};
