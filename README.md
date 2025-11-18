# GSBDoctor

Documentation principale du projet GSBDoctor (application Angular légère pour afficher et rechercher des médecins).

## Aperçu

GSBDoctor est une petite application Angular qui charge une liste de médecins depuis `assets/doctors.json` et les affiche via un composant `DoctorCard`. La page principale `DoctorsPage` propose un champ de recherche qui filtre la liste en direct (par nom, spécialité, email ou adresse).

## Stack technique

- Framework: Angular (version utilisée dans le projet)
- Langage: TypeScript
- Bundler / CLI: Angular CLI
- Tests: configuration basique (`ng test` / Karma) — voir `package.json`

## Fonctions principales

- Charger la liste des médecins depuis `assets/doctors.json` (via `DoctorsService`).
- Afficher chaque médecin avec le composant `app-doctor-card`.
- Champ de recherche réactif qui filtre par nom, spécialité, email et adresse.

## Prérequis

- Node.js (LTS recommandé) et `npm`.

## Installation et exécution (développement)

Ouvrez PowerShell (ou un terminal) à la racine du projet puis :

```powershell
npm install
npm start
```

La commande `npm start` démarre le serveur de développement (tâche configurée dans `package.json`). Ouvrez `http://localhost:4200/` pour voir l'application.

## Tests

Pour lancer les tests unitaires :

```powershell
npm test
```

## Structure du projet (rapide)

Principal dossier de travail : `src/`

- `src/app/pages/doctors-page/` : page listant les médecins (`doctors-page.ts`, `doctors-page.html`, `doctors-page.css`).
- `src/app/components/doctor-card/` : composant réutilisable pour afficher un médecin.
- `src/app/services/doctors.service.ts` : service pour charger et convertir les données.
- `src/app/types/` : interfaces TypeScript (`Doctor`, `Medecin`).
- `src/assets/doctors.json` : fichier de données local utilisé en développement.

Une documentation plus détaillée est fournie dans le répertoire `docs/`.

## Développement et bonnes pratiques

- Les composants sont en mode standalone Angular (importés directement dans le composant qui les utilise).
- Le code utilise des signaux (`signal`, `computed`, `toSignal`) pour la réactivité.
- Respectez le style TypeScript déjà présent : évitez les changements de style massifs.

## Recherche (fonctionnalité)

La page des médecins propose un champ de recherche : tapez un nom, une spécialité, un email ou une adresse et la liste se filtre en temps réel. Le filtrage est insensible à la casse et combine prénom + nom pour la recherche sur nom complet.

## Ajouter/modifier des médecins

- Modifiez `src/assets/doctors.json` pour ajouter ou éditer des entrées (respectez le format utilisé).
- Le service `DoctorsService` convertit les objets `Medecin` du JSON en `Doctor` via le helper `convert-medecin-to-doctor`.

## Contribution

1. Créez une branche feature/issue
2. Faites vos changements et tests locaux
3. Ouvrez une Pull Request décrivant vos changements

## Fichiers de documentation

- `docs/structure.md` : arborescence et description rapide des dossiers.
- `docs/development.md` : instructions détaillées pour le développement local.
- `docs/api.md` : description des services, composants et types.
- `docs/usage.md` : exemples d'utilisation et notes sur la recherche.

## Licence

Ajoutez ici la licence de votre projet si nécessaire (ex : `MIT`).
