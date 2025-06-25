# σ₃: Technical Context
*v1.1 | Created: 2025-01-28 | Updated: 2025-01-28*
*Π: DEVELOPMENT | Ω: EXECUTE*

## 🛠️ Technology Stack

### 🖥️ Frontend
- **Framework**: Next.js 14.2.5 (SSG/SSR)
- **UI Library**: React 18.2.0 + TypeScript 4.7.2
- **Styling**: Tailwind CSS 3.0.24 + custom design system
- **CMS**: TinaCMS 2.5.0 (headless, git-based)
- **Animations**: Framer Motion 12.19.1 ⭐ **NOUVEAU**
- **Components**: Headless UI (Popover, Transition)
- **Icons**: Heroicons (outline + solid)

### 🎨 Design System
- **Colors**: 
  - Primary: `#3C6676` (blue)
  - Secondary: `#E8F0F3` (light blue)
  - Interaction: `#FF922D` (orange)
- **Typography**: Custom font stack
- **Animations**: Physics-based avec Framer Motion

### 📦 Bundling & Build
- **Node**: 20.18.0 (Volta)
- **Package Manager**: Yarn
- **Build**: Next.js static export
- **PostCSS**: autoprefixer + import
- **Bundle Size**: 
  - Core: ~200kb
  - + Framer Motion: ~55kb
  - Total: ~255kb (acceptable pour l'UX)

### 🔧 Development Tools
- **TypeScript**: 4.7.2 (strict mode)
- **ESLint**: 7 + Next.js config
- **Git**: Version control
- **IDE**: Cursor + CursorRIPER framework

### 🚀 Deployment
- **Platform**: Vercel (recommended) ou Netlify
- **Build Command**: `yarn build && next export`
- **Output**: Static site (SSG)
- **Performance**: Optimisé pour Core Web Vitals

### 📊 Performance Considerations
- **Critical**: Menu mobile UX critique résolu
- **Bundle**: Framer Motion justifié par animations premium
- **SEO**: SSG + Next SEO pour référencement optimal
- **Accessibility**: Headless UI + semantic HTML

## 🔗 Key Dependencies

### Production
```json
{
  "next": "14.2.5",
  "react": "18.2.0", 
  "tinacms": "^2.5.0",
  "framer-motion": "12.19.1",
  "tailwindcss": "^3.0.24",
  "@headlessui/react": "^1.x",
  "@heroicons/react": "^1.x"
}
```

### Development
```json
{
  "typescript": "4.7.2",
  "eslint": "7",
  "@tinacms/cli": "^1.6.12"
}
```

## 🎯 Optimization Status
- ✅ **Animation Library**: Migration vers Framer Motion complétée
- ✅ **Mobile UX**: Menu plein écran fonctionnel
- ✅ **Performance**: Bundle optimisé (<300kb total)
- 🔄 **Monitoring**: Performance impact à surveiller
- 📋 **Next**: Possibles optimisations micro-interactions

## 📚 Key Dependencies
```json
{
  "core": [
    "next@14.2.5",
    "react@18.2.0", 
    "typescript@4.7.2"
  ],
  "cms": [
    "tinacms@2.5.0",
    "@tinacms/cli@1.6.12",
    "@tinacms/auth@1.0.8"
  ],
  "styling": [
    "tailwindcss@3.0.24",
    "@tailwindcss/typography@0.5.2",
    "@tailwindcss/forms@0.5.3",
    "styled-components@5.3.5"
  ],
  "integrations": [
    "next-tinacms-cloudinary@12",
    "next-seo@6.6.0",
    "swiper@8.4.2",
    "email-validator@2.0.4"
  ]
}
```

## ⚙️ Environment Setup
- **Node Version**: 20.18.0 (Volta managed)
- **Development**: `yarn dev` (TinaCMS + Next.js dev server)
- **Build**: `yarn build` (TinaCMS build + Next.js build)
- **Production**: `yarn start` (Production server)

## 🔌 External Services
- **Images**: Cloudinary (CDN et optimisation)
- **Newsletter**: Mailchimp (intégration via API)
- **Hosting**: Déploiement statique (Vercel/Netlify compatible)

## 📁 Configuration Files
```
├── next.config.js        # Configuration Next.js
├── tailwind.config.js    # Configuration Tailwind
├── postcss.config.js     # Configuration PostCSS
├── tsconfig.json         # Configuration TypeScript
└── tina/
    ├── config.ts         # Configuration TinaCMS
    └── queries/          # Requêtes GraphQL TinaCMS
```

## 🌐 Development Workflow
1. **Local Development**: TinaCMS admin + Next.js dev server
2. **Content Editing**: Interface TinaCMS en local
3. **Build Process**: Génération statique via SSG
4. **Deployment**: Upload des fichiers statiques

## 🔒 Security & Performance
- **Static Generation**: Sécurité maximale (pas de serveur)
- **Image Optimization**: Cloudinary CDN
- **Bundle Optimization**: Next.js automatic splitting
- **SEO**: Meta tags optimisés via next-seo 