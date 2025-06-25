# σ₂: System Patterns
*v1.0 | Created: 2024-12-28 | Updated: 2024-12-28*
*Π: DEVELOPMENT | Ω: RESEARCH*

## 🏛️ Architecture Overview
Application Next.js avec système de gestion de contenu headless (TinaCMS) et déploiement statique. Architecture basée sur des composants réutilisables et un système de blocs modulaires pour le contenu.

## 🧩 Component Architecture
```
├── components/
│   ├── blocks/           # Blocs de contenu modulaires
│   │   ├── hero.tsx      # Bannière principale
│   │   ├── events.tsx    # Liste d'événements
│   │   ├── testimonials.tsx # Témoignages
│   │   └── newsletter.tsx # Formulaire newsletter
│   ├── layout.tsx        # Layout principal
│   ├── header.tsx        # En-tête navigation
│   └── footer.tsx        # Pied de page
```

## 📁 Content Structure
```
├── content/
│   ├── pages/            # Pages statiques
│   ├── events/           # Événements/stages
│   ├── locations/        # Lieux des stages
│   └── global/           # Configuration globale
```

## 🔄 Data Flow
1. **Content Creation** → TinaCMS Admin Interface
2. **Content Storage** → Markdown files + frontmatter
3. **Build Process** → TinaCMS build + Next.js SSG
4. **Rendering** → Blocks renderer système

## 🎨 Design Patterns
- **Block System**: Contenu modulaire via blocks-renderer
- **Component Composition**: Réutilisation via props
- **Responsive Design**: Tailwind CSS utilities
- **SEO Strategy**: next-seo + metadata optimization

## 🔧 Technical Decisions
- **SSG over SSR**: Performance et SEO optimisés
- **Markdown-based CMS**: Simplicité et version control
- **Tailwind CSS**: Développement rapide et cohérence
- **TypeScript**: Type safety et DX améliorée 