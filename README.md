# ZUKUNFT TECH

> Digital & Cybersécurité B2B — Brazzaville, Congo

Site vitrine et API backend pour **Zukunft Tech**, entreprise spécialisée dans le développement web, les applications mobiles, l'infrastructure réseau et la cybersécurité.

## Stack technique

| Couche | Technologies |
|--------|-------------|
| Frontend | Next.js 16, React 19, Tailwind CSS 4, Framer Motion |
| Backend API | Express 5, Prisma 7, PostgreSQL |
| Emails | Resend |
| Validation | Zod |
| Typage | TypeScript 5 |

## Structure du projet

```
Zukunft-web/
├── app/                    # Application Next.js (App Router)
│   ├── api/contact/        # Route API formulaire de contact
│   ├── components/         # Composants React (Hero, Services, Portfolio…)
│   └── lib/contact/        # Logique d'envoi d'email (Resend + Zod)
├── prisma/
│   ├── schema.prisma       # Schéma de la base de données
│   └── migrations/         # Migrations PostgreSQL
├── zukunft-api/            # API REST Express
│   ├── server.js           # Point d'entrée (port 4000)
│   ├── routes/clients.js   # CRUD clients
│   ├── lib/prisma.js       # Instance Prisma Client
│   └── data/clients.json   # Données de test (JSON)
└── prisma.config.ts        # Configuration Prisma 7
```

## Prérequis

- **Node.js** ≥ 20
- **PostgreSQL** ≥ 15
- Un compte [Resend](https://resend.com) (gratuit, 100 emails/jour)

## Installation

```bash
# 1. Cloner le projet
git clone https://github.com/bokokoromel-create/zukunft-tech.git
cd zukunft-tech

# 2. Installer les dépendances
npm install
cd zukunft-api && npm install && cd ..

# 3. Configurer les variables d'environnement
cp .env.example .env
```

Renseigner les valeurs dans `.env` :

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/zukunft_db"
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO_EMAIL=votre@email.com
```

```bash
# 4. Créer la base de données et appliquer les migrations
npx prisma migrate dev

# 5. Générer le client Prisma
npx prisma generate
```

## Lancement

```bash
# Frontend (port 3000)
npm run dev

# API Express (port 4000) — dans un second terminal
cd zukunft-api
node server.js
```

| Service | URL |
|---------|-----|
| Site web | http://localhost:3000 |
| API REST | http://localhost:4000 |

## API REST — Endpoints

| Méthode | Route | Description |
|---------|-------|-------------|
| `GET` | `/clients` | Liste des clients (filtres : `?status=`, `?sector=`) |
| `GET` | `/clients/:id` | Détail d'un client |
| `POST` | `/clients` | Créer un client |
| `PUT` | `/clients/:id` | Modifier un client |
| `DELETE` | `/clients/:id` | Supprimer un client |

**Exemple POST :**

```json
{
  "company": "Nom de l'entreprise",
  "contact": "Nom du référent",
  "email": "email@exemple.com",
  "phone": "+242 000 000 000",
  "sector": "Finance",
  "services": ["Site web", "Cybersécurité"]
}
```

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement Next.js |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Linter ESLint |
| `npx prisma studio` | Interface visuelle de la BDD |

## Déploiement

Le frontend se déploie sur [Vercel](https://vercel.com). L'API Express nécessite un hébergement Node.js séparé (Railway, Render, VPS…).

Variables d'environnement à configurer en production :
- `DATABASE_URL`
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `RESEND_FROM_EMAIL` (requiert un domaine vérifié sur Resend)

## Licence

Projet privé — © Zukunft Tech, Brazzaville.
