import { Link } from 'react-router-dom'

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
