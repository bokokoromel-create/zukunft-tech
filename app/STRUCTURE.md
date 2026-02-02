# Structure des composants — Zukunft Tech

## Arborescence de la page d'accueil

```
Page (app/page.tsx)
├── Header          → Navigation principale (ancres)
├── main
│   ├── HeroSection      → #hero (ancrage optionnel)
│   ├── ServicesSection  → #services
│   ├── ValueSection     → #valeur
│   ├── PacksSection     → #packs
│   ├── ContactSection   → #contact
│   └── Footer           → Liens nav + légal
```

## Sections et IDs (navigation)

| Section           | Composant        | ID        | scroll-mt |
|-------------------|------------------|-----------|-----------|
| Hero              | HeroSection      | (aucun)   | —         |
| Services          | ServicesSection  | `services` | 20        |
| Valeur ajoutée    | ValueSection     | `valeur`  | 20        |
| Packs             | PacksSection     | `packs`   | 20        |
| Contact           | ContactSection   | `contact` | 20        |

La config centralisée des liens de navigation est dans `app/config/navigation.ts` (utilisée par Header et Footer).

## Contenu par section

- **Hero** : Titre accrocheur (transformation digitale & sécurité), CTA vers packs, CTA services.
- **Services** : 3 colonnes — Développement & Design ; Réseau & Cybersécurité ; Services Complémentaires.
- **Valeur ajoutée** : 4 piliers — Outils adaptés, Sécurité garantie, Réduction des coûts, Compétitivité.
- **Packs** : 3 offres — Start-up, Entreprise (recommandé), Premium.
- **Contact** : Formulaire (Nom/Société, Email, Message).
- **Footer** : Marque, navigation (Services, Packs, Contact), légal, copyright.

## Navigation fluide

- **Smooth scroll** : `scroll-behavior: smooth` sur `html` (globals.css) pour un défilement doux vers les ancres.
- **Offset** : Chaque section ciblée a `scroll-mt-20` pour compenser le header fixe (constante `SCROLL_OFFSET` dans `config/navigation.ts`).
- **Liens** : Header et Footer utilisent `NAV_SECTIONS` ; les ancres `#services`, `#packs`, `#contact` pointent vers les sections correspondantes.
