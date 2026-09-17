# TaskFlow

Petite application de gestion de tâches construite en Vue 3, pour démontrer
concrètement plusieurs pratiques front-end : BEM, SCSS, tests unitaires (Jest)
et optimisation de performance.

## Lancer le projet

```bash
npm install
npm run dev       # démarre le serveur de dev (Vite)
npm run test      # exécute les tests Jest
npm run build     # build de production
```

## Ce que ce projet démontre (et comment en parler en entretien)

### 1. BEM (Block Element Modifier)
Voir `src/components/TaskCard.vue`. Les classes suivent strictement la
convention `bloc__element--modificateur` :
- Bloc : `.task-card`
- Éléments : `.task-card__title`, `.task-card__badge`, `.task-card__icon`
- Modificateurs : `.task-card--urgent`, `.task-card__badge--done`

Ça évite les conflits de spécificité CSS et rend chaque composant lisible
indépendamment du reste de la feuille de style.

### 2. SCSS structuré
- `src/styles/_variables.scss` : tokens de design (couleurs, espacements,
  typographie, breakpoints) centralisés.
- `src/styles/_mixins.scss` : mixins réutilisés dans plusieurs composants
  (`card-surface`, `truncate`, `focus-ring`, `respond-above`).
- Chaque composant importe ces tokens automatiquement via `vite.config.js`
  (`additionalData`), donc pas de duplication de valeurs magiques.

### 3. Tests unitaires (Jest + Vue Test Utils)
Voir `src/__tests__/TaskCard.spec.js` : rendu du composant, vérification des
classes BEM appliquées conditionnellement, et vérification des événements
émis (`toggle`).

### 4. Tests d'API (Postman)
Voir `postman/TaskFlow-API.postman_collection.json` : vérifie le code de
statut, la forme de la réponse et la présence des champs attendus sur
l'endpoint consommé par l'app (`src/api/tasksApi.js`).

### 5. Optimisation / performance
- **Code splitting par route** (`src/router/index.js`) : la page
  `/stats` est chargée avec un `import()` dynamique, donc son code n'est
  téléchargé qu'à la navigation, pas au chargement initial.
- **Debounce sur la recherche** (`src/utils/debounce.js`,
  `SearchBar.vue`) : évite de refiltrer la liste à chaque frappe clavier.
- **`v-memo` sur la liste** (`TaskList.vue`) : évite de re-rendre une carte
  de tâche si son titre et son statut n'ont pas changé.
- **`loading="lazy"`** sur les images des cartes.

## Pistes d'évolution
- Ajouter la persistance des tâches (localStorage ou vraie API).
- Ajouter un mode sombre en s'appuyant sur les tokens SCSS existants.
- Mesurer le gain réel du code splitting avec Lighthouse.
