import { Link } from 'react-router-dom'

export default function ExcelBible() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <Link
          to="/exercices"
          className="text-accent hover:underline text-sm"
        >
          ← Retour à la liste des exercices
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          📚 Bible Excel
        </h1>
        <p className="text-gray-600 text-lg">
          Référence complète des formules Excel utiles
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Logique, erreurs, tests */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            1) Logique, erreurs, tests
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SI</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> renvoie un résultat différent selon qu'une condition est vraie ou fausse.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">SI(condition, valeur_si_vrai, valeur_si_faux)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel évalue la condition logique puis renvoie soit la valeur prévue pour le cas vrai soit celle prévue pour le cas faux.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SI.CONDITIONS</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> gère plusieurs conditions successives sans imbriquer plusieurs SI.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">SI.CONDITIONS(condition1, valeur1, condition2, valeur2, …)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel teste les conditions dans l'ordre et renvoie la valeur associée à la première condition vraie.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ET</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> vérifie que toutes les conditions sont vraies simultanément.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">ET(condition1, condition2, …)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel renvoie VRAI uniquement si toutes les conditions logiques fournies sont vraies.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">OU</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> vérifie qu'au moins une condition est vraie.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">OU(condition1, condition2, …)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel renvoie VRAI dès qu'une des conditions logiques est vraie.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">NON</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> inverse un résultat logique.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">NON(condition)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel renvoie FAUX si la condition est vraie et VRAI si elle est fausse.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">XOU</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> renvoie VRAI si une seule condition est vraie, mais pas plusieurs.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">XOU(condition1, condition2, …)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel compte le nombre de conditions vraies et renvoie VRAI uniquement si ce nombre est impair.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SIERREUR</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> remplace toute erreur par une valeur contrôlée.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">SIERREUR(valeur, valeur_si_erreur)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel tente d'évaluer la valeur et renvoie la valeur de remplacement si une erreur survient.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ESTVIDE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> teste si une cellule est totalement vide.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">ESTVIDE(cellule)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel vérifie l'absence totale de contenu dans la cellule ciblée.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ESTNUM</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> vérifie si une cellule contient un nombre.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">ESTNUM(valeur)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel analyse le type de donnée et renvoie VRAI si la valeur est numérique.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ESTTEXTE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> vérifie si une cellule contient du texte.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">ESTTEXTE(valeur)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel teste si la valeur est stockée comme texte.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ESTERREUR</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> détecte toute erreur Excel.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">ESTERREUR(valeur)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel renvoie VRAI si la valeur correspond à une erreur (#DIV/0!, #N/A, etc.).</p>
            </div>
          </div>
        </div>

        {/* Section 2: Recherche & référence */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            2) Recherche & référence
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">RECHERCHEX</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> recherche une valeur et renvoie une correspondance dans une autre plage.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">RECHERCHEX(valeur_cherchée, plage_recherche, plage_retour, [si_non_trouvé])</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel cherche la valeur dans la plage de recherche et renvoie la valeur correspondante de la plage de retour.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">FILTRE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> extrait dynamiquement des lignes ou colonnes selon une condition.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">FILTRE(plage, condition, [valeur_si_vide])</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel conserve uniquement les éléments de la plage qui respectent la condition logique.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">TRIER</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> trie dynamiquement des données.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">TRIER(plage, [index_tri], [ordre])</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel trie la plage selon une colonne donnée et un ordre croissant ou décroissant.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">TRIERPAR</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> trie une plage selon une autre plage.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">TRIERPAR(plage, plage_tri, [ordre])</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel utilise une plage externe comme clé de tri.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">UNIQUE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> extrait les valeurs distinctes d'une plage.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">UNIQUE(plage)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel élimine automatiquement les doublons dans la plage fournie.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">CHOISIRCOLS</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> sélectionne certaines colonnes d'une plage.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">CHOISIRCOLS(plage, index_colonne1, index_colonne2, …)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel reconstruit une nouvelle plage à partir des colonnes sélectionnées.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">CHOISIRLIGNES</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> sélectionne certaines lignes d'une plage.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">CHOISIRLIGNES(plage, index_ligne1, index_ligne2, …)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel extrait uniquement les lignes spécifiées.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">LET</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> rend les formules lisibles et plus performantes.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">LET(nom1, valeur1, nom2, valeur2, calcul_final)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel stocke des résultats intermédiaires sous forme de variables utilisées dans le calcul final.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">INDEX</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> renvoie une valeur à une position précise.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">INDEX(plage, numero_ligne, [numero_colonne])</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel accède directement à l'intersection ligne/colonne demandée.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">EQUIV</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> renvoie la position d'une valeur dans une plage.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">EQUIV(valeur, plage, type)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel cherche la valeur et renvoie son rang dans la plage.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">RECHERCHEV</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> recherche verticale dans un tableau.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">RECHERCHEV(valeur, table, index_colonne, correspondance)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel cherche la valeur dans la première colonne puis renvoie la valeur de la colonne demandée.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Agrégation & statistiques */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            3) Agrégation & statistiques
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SOMME</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> additionne des valeurs numériques.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">SOMME(plage)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel additionne toutes les valeurs numériques de la plage.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SOMME.SI.ENS</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> additionne selon plusieurs critères.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">SOMME.SI.ENS(plage_somme, plage_critère1, critère1, …)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel additionne uniquement les valeurs dont toutes les conditions sont respectées.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">NB.SI.ENS</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> compte les lignes répondant à plusieurs critères.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">NB.SI.ENS(plage_critère1, critère1, …)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel incrémente le compteur lorsque toutes les conditions sont vraies.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">MOYENNE.SI.ENS</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> calcule une moyenne conditionnelle multiple.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">MOYENNE.SI.ENS(plage_moyenne, plage_critère1, critère1, …)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel calcule la moyenne uniquement sur les valeurs répondant à tous les critères.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AGREGAT</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> réalise des calculs robustes sur des données imparfaites.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">AGREGAT(numero_fonction, options, plage)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel applique une fonction (somme, moyenne, etc.) en ignorant erreurs et lignes masquées selon les options.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Dates & temps */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            4) Dates & temps
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">DATE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> construit une date valide Excel.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">DATE(année, mois, jour)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel assemble les composantes pour produire une date exploitable.</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">FIN.MOIS</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> renvoie le dernier jour d'un mois.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">FIN.MOIS(date, décalage_mois)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel se projette dans le mois cible puis renvoie sa date de fin.</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">NB.JOURS.OUVRES.INTL</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> calcule des jours ouvrés personnalisés.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">NB.JOURS.OUVRES.INTL(date_début, date_fin, week_end, [jours_fériés])</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel compte les jours travaillés en excluant week-ends et jours fériés.</p>
            </div>
          </div>
        </div>

        {/* Section 5: Texte */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            5) Texte
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SUBSTITUE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> remplace un texte par un autre.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">SUBSTITUE(texte, ancien, nouveau)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel remplace toutes les occurrences du texte ciblé.</p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SUPPRESPACE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> nettoie les espaces inutiles.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">SUPPRESPACE(texte)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel supprime les espaces superflus en début, fin et doublons internes.</p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">JOINDRE.TEXTE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> concatène une plage avec un séparateur.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">JOINDRE.TEXTE(séparateur, ignorer_vide, plage)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel assemble les textes en insérant le séparateur entre chaque valeur.</p>
            </div>
          </div>
        </div>

        {/* Section 7: Tableaux dynamiques */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            7) Tableaux dynamiques
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SEQUENCE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> génère une suite numérique dynamique.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">SEQUENCE(lignes, [colonnes], [début], [pas])</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel crée automatiquement une série numérique structurée.</p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">LAMBDA</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> crée une fonction personnalisée sans VBA.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">LAMBDA(paramètre1, paramètre2, calcul)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel transforme une formule en fonction réutilisable.</p>
            </div>
          </div>
        </div>

        {/* Section 8: Conversions & formats */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            8) Conversions & formats
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">NUMBERVALUE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> convertit un nombre texte en nombre réel.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">NUMBERVALUE(texte, séparateur_décimal, séparateur_millier)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel interprète correctement les séparateurs pour produire un nombre exploitable.</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">TEXTE</h3>
              <p className="text-gray-600 mb-2"><strong>Rôle :</strong> transforme une valeur en texte formaté.</p>
              <p className="text-gray-700 font-mono bg-gray-50 p-2 rounded mb-2">TEXTE(valeur, format)</p>
              <p className="text-gray-600"><strong>Explication :</strong> Excel applique un format d'affichage tout en conservant la valeur d'origine.</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-yellow-900 mb-4">
            Conclusion tranchée
          </h2>
          <p className="text-yellow-800 text-lg leading-relaxed">
            MonSeigneur, savoir utiliser Excel c'est bien,<br />
            savoir expliquer le patron d'une fonction, c'est le niveau au-dessus.<br />
            À partir d'ici, tu peux enseigner, auditer, ou démonter n'importe quel fichier bancal sans lever la voix.
          </p>
        </div>
      </div>
    </div>
  )
}
