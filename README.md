# Clan Spéléo des Troglodytes

Site web du Clan Spéléo des Troglodytes, un club de spéléologie et de canyonisme basé à Lyon. Le site présente les activités du club, les comptes-rendus de sorties, et permet aux visiteurs de découvrir la spéléologie et le canyonisme.

## 🏔️ À propos du site

Ce site présente :

- **Les activités** : spéléologie et canyonisme avec galeries photos
- **Les sorties** : comptes-rendus détaillés des explorations avec système de tags
- **Le club** : présentation de l'association et de ses membres
- **Contact** : formulaire pour nous rejoindre ou poser des questions

## 🛠️ Technologies utilisées

- **Framework** : [Next.js](https://nextjs.org) avec App Router
- **Language** : TypeScript
- **Style** : [Tailwind CSS](https://tailwindcss.com)
- **UI** : Headless UI pour les composants interactifs
- **Email** : Nodemailer pour le formulaire de contact
- **Images** : Next.js Image avec optimisation automatique

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- Yarn

### Installation et lancement

```bash
# Cloner le repository
git clone https://github.com/mathieutu/troglos-public.git
cd troglos-public

# Installer les dépendances
yarn install

# Générer les données et lancer le serveur de développement
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

## 📁 Structure du projet

```
src/
├── app/              # Pages Next.js (App Router)
│   ├── (activites)/  # Page d'accueil et activités
│   ├── club/         # Présentation du club
│   ├── contact/      # Formulaire de contact
│   ├── sorties/      # Comptes-rendus de sorties
│   └── ...
├── components/       # Composants réutilisables
├── data/            # Données des sorties (JSON)
├── assets/          # Images et ressources
└── utils/           # Utilitaires
```

## 📦 Données

Les comptes-rendus de sorties sont générés automatiquement via le script `fetchData.ts` qui écrit des fichiers JSON stockés dans `src/data/trips/`.
Ils sont récupérés via l'API de https://app.troglos.fr et formatés pour être affichés dans les pages de sorties.
Il faut donc redeployer le site après chaque publication de compte rendu.

## 🚀 Déploiement

Le site est déployé sur [Vercel](https://vercel.com), mais peut être déployé sur n'importe quelle plateforme supportant Next.js.

```bash
yarn build && yarn start
```

## 📄 Licence

Ce projet est sous licence [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/#). Voir le fichier [LICENSE](LICENSE.md) pour plus de détails.
