# Cahier des Charges - Portfolio Sylvain Hontans (React + Next.js)

## 📋 Vue d'ensemble du projet
Refonte complète du portfolio personnel en utilisant React, Next.js 15, TypeScript et shadcn/ui. Le projet actuel est en HTML/CSS/JavaScript vanilla et doit être migré vers une architecture moderne basée sur des composants.

---

## 🎨 Structure de l'application

### Header / Navigation
**Composant**: `Navbar`

**Contenu textuel**:
- Logo: "Sylvain **HONTANS**" (avec "HONTANS" en gradient)
- Liens de navigation:
  - Parcours Professionnel
  - Projets
  - Référentiel des compétences
  - Veille technologique

**Fonctionnalités**:
- Navigation responsive avec menu hamburger pour mobile
- Menu drawer pour mobile avec overlay
- Navigation entre sections avec classe active
- Smooth scroll ou navigation par sections

---

### Section Home (Parcours Professionnel)
**Composant**: `HeroSection`

**Contenu textuel**:
```
Titre principal: "Salut, je suis Sylvain Hontans"
Sous-titre animé: "Parcours Professionnel"

Texte de présentation:
"Je m'appelle HONTANS Sylvain, j'ai 18 ans et je suis titulaire d'un Bac PRO Systèmes Numériques option RISC (Réseaux Informatiques et Systèmes Communicants). Actuellement, je poursuis mes études en seconde année de BTS Services Informatiques aux Organisations (SIO) avec la spécialité SLAM (Solutions Logicielles et Applications Métiers)."
```

**Éléments interactifs**:
- Bouton "Me contacter" (ouvre une modal)
- Bouton "CV" (lien vers CV_SH.pdf)
- Liens sociaux:
  - GitHub: https://github.com/Hontans
  - Flipboard: https://flipboard.com/@sylvainhontans/veille-technologique-sis54gi1y
  - LinkedIn: https://www.linkedin.com/in/sylvain-hontans-0aa645345/

**Effets**:
- Animation de typing sur le sous-titre
- Particules en arrière-plan (particles.js)
- Home-imgHover effect

---

### Modal de Contact
**Composant**: `ContactModal`

**Contenu textuel**:
```
Titre: "Me contacter"

Formulaire:
- Label: "Votre email :"
- Input type email requis
- Label: "Message :"
- Textarea (5 lignes) requis
- Bouton: "Envoyer"
```

**Fonctionnalités**:
- Intégration EmailJS pour l'envoi
- Validation des champs
- Fermeture par bouton X ou clic sur overlay

---

### Section Projets
**Composant**: `ProjectsSection`

**Contenu textuel**:
```
Titre: "Mes Projets"

Projet 1: Maison des ligues
Description: "Site web développé pour la Maison des Ligues. Présentation détaillée des différentes ligues sportives."
Technologies: HTML, CSS, GitHub Pages
Liens:
- GitHub: https://github.com/FastAze/maison-de-ligue
- Site: https://fastaze.github.io/maison-de-ligue

Projet 2: AppFaq
Description: "Application web développée pour la Maison des Ligues. Système de gestion et d'organisation pour les ligues sportives avec interface d'administration."
Technologies: HTML, CSS, PHP, Infinityfree
Liens:
- GitHub: https://github.com/FastAze/M2L
- Site: https://appfaq.page.gd/

Projet 3: Eco
Description: "Site web e-commerce développé dans le cadre d'un stage à Maser Engineering. Boutique en ligne complète avec gestion des produits, panier d'achat, gestion des informations utilisateur, adresses et moyens de paiement."
Technologies: Vue.js, Quasar, Node.js
Liens:
- GitHub: https://github.com/Hontans/eco
- Rapport de stage: SylvainHontansRapportStage.pdf

Projet 4: Portfolio Personnel
Description: "Mon portfolio personnel hébergé sur GitHub Pages. Site web responsive présentant mon parcours, mes compétences et mes projets avec ma veille technologique."
Technologies: HTML, CSS, JavaScript, GitHub Pages
Liens:
- GitHub: https://github.com/Hontans/Hontans.github.io
```

**Composant enfant**: `ProjectCard`
- Titre du projet
- Description
- Technologies utilisées
- Liens vers GitHub/Site

---

### Section Référentiel des Compétences
**Composant**: `CompetencesSection`

**Contenu textuel**:
```
Titre: "Référentiel des compétences du Bloc n° 1"

Compétences (6 cartes):

Compétence 1: Gérer le patrimoine informatique
- Recenser et identifier les ressources numériques
- Exploiter des référentiels, normes et standards adoptés par le prestataire informatique
- Mettre en place et vérifier les niveaux d'habilitation associés à un service
- Vérifier les conditions de la continuité d'un service informatique
- Gérer des sauvegardes
- Vérifier le respect des règles d'utilisation des ressources numériques

Compétence 2: Répondre aux incidents et aux demandes d'assistance et d'évolution
- Collecter, suivre et orienter des demandes
- Traiter des demandes concernant les services réseau et système, applicatifs
- Traiter des demandes concernant les applications

Compétence 3: Développer la présence en ligne de l'organisation
- Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques
- Référencer les services en ligne de l'organisation et mesurer leur visibilité
- Participer à l'évolution d'un site Web exploitant les données de l'organisation

Compétence 4: Travailler en mode projet
- Analyser les objectifs et les modalités d'organisation d'un projet
- Planifier les activités
- Évaluer les indicateurs de suivi d'un projet et analyser les écarts

Compétence 5: Mettre à disposition des utilisateurs un service informatique
- Réaliser les tests d'intégration et d'acceptation d'un service
- Déployer un service
- Accompagner les utilisateurs dans la mise en place d'un service

Compétence 6: Organiser son développement professionnel
- Mettre en place son environnement d'apprentissage personnel
- Mettre en œuvre des outils et stratégies de veille informationnelle
- Gérer son identité professionnelle
- Développer son projet professionnel
```

**Composant enfant**: `CompetenceCard`
- Numéro de compétence
- Titre de la compétence
- Liste des sous-compétences
- Effet hover avec overlay

---

### Tableau des Compétences
**Composant**: `CompetencesTable`

**Contenu textuel**:
```
Titre: "Mes Compétences BTS SIO SLAM"

En-têtes de colonnes:
- Activités
- Gérer le patrimoine informatique
- Répondre aux incidents et aux demandes d'assistance et d'évolution
- Développer la présence en ligne de l'organisation
- Travailler en mode projet
- Mettre à disposition des utilisateurs un service informatique
- Organiser son développement professionnel

Section: "Réalisation en cours de formation"

Activité 1: Développement de la "Maison des ligues" site web pour présenter les différentes ligues sportives.
Compétences: C3, C4, C5
Liens: Site, GitHub, GitHub Pages

Activité 2: Développement de "AppFaq" site web de foires aux questions sur la maison des ligues.
Compétences: C1, C3, C4, C5
Liens: Image preuve, Site, Trello, Image preuve

Activité 3: GLPI
Compétences: C1
Lien: PDF preuve

Activité 4: LinkedIn
Compétences: C6
Lien: LinkedIn profile

Activité 5: Portfolio
Compétences: C5, C6
Lien: GitHub Pages

Section: "Réalisations en milieu professionnel en cours de première année"

Activité 6: Développement de "Eco" site web boutique e-commerce dans le cadre d'un stage à Maser Ingénierie
Compétences: C1, C2, C4
Liens: Image preuve, Commits GitHub, GitHub
```

**Fonctionnalités**:
- Tableau responsive
- Cases cliquables (✓) qui ouvrent des liens ou des modals d'images
- Modal d'affichage d'images pour les preuves

---

### Section Veille Technologique
**Composant**: `VeilleSection`

**Contenu textuel**:
```
Titre: "Veille Technologique"

Bloc 1: Définition et thèmes de ma veille
Contenu: "La veille technologique consiste à surveiller les évolutions et innovations dans un domaine spécifique pour rester informé des dernières tendances."
Mes thèmes: Développement web (Vue.js, React) et développement Logicielles (C#/.NET, C++, Java)

Bloc 2: C'est quoi Flipboard ?
Contenu: "Flipboard est un site web qui permet d'organiser et de partager des articles, actualités et informations sous forme de magazines numériques personnalisés. C'est un outil idéal pour structurer et diffuser sa veille technologique de manière visuelle et accessible."

Lien: Consulter ma veille sur Flipboard
URL: https://flipboard.com/@sylvainhontans/veille-technologique-sis54gi1z?from=share&utm_source=flipboard&utm_medium=curator_share
```

---

## 🎯 Composants React à créer

### Composants de base (shadcn/ui)
- `Button` - Pour tous les boutons CTA
- `Card` - Pour les cartes de projets et compétences
- `Dialog` (Modal) - Pour la modal de contact et les images
- `Table` - Pour le tableau des compétences
- `Sheet` (Drawer) - Pour le menu mobile
- `Form` - Pour le formulaire de contact
- `Input` - Pour les champs de formulaire
- `Textarea` - Pour le message du formulaire

### Composants personnalisés

#### Navigation
- `Navbar.tsx` - Barre de navigation principale
- `MobileMenu.tsx` - Menu hamburger et drawer

#### Sections
- `HeroSection.tsx` - Section d'accueil
- `ProjectsSection.tsx` - Section projets
- `CompetencesSection.tsx` - Section compétences
- `VeilleSection.tsx` - Section veille technologique

#### Sous-composants
- `ProjectCard.tsx` - Carte individuelle de projet
- `CompetenceCard.tsx` - Carte de compétence avec overlay
- `CompetencesTable.tsx` - Tableau des compétences
- `ContactModal.tsx` - Modal de contact
- `ImageModal.tsx` - Modal d'affichage d'images
- `SocialLinks.tsx` - Liens sociaux
- `ParticlesBackground.tsx` - Arrière-plan animé
- `TypingAnimation.tsx` - Animation de texte

---

## 🎨 Styles et animations

### Animations requises
1. **Typing Animation**: Effet machine à écrire sur les titres
2. **Particles Background**: Particules animées en arrière-plan
3. **Hover Effects**: Effets au survol des cartes
4. **Fade In**: Apparition progressive des sections
5. **Gradient Text**: Texte avec dégradé de couleurs
6. **Card Overlay**: Overlay qui apparaît au survol des cartes de compétences

### Palette de couleurs (à extraire du style.css)
- Couleur principale gradient: violet/bleu
- Couleur des particules: #928DAB
- Texte: blanc/gris clair sur fond sombre

---

## 📦 Technologies à utiliser

### Stack technique
- **Framework**: Next.js 15.5.6 avec Turbopack
- **Language**: TypeScript 5
- **UI Library**: shadcn/ui avec Tailwind CSS 4
- **Animations**: 
  - Framer Motion (pour les animations complexes)
  - tw-animate-css (pour animations CSS)
  - react-particles ou similar (pour l'effet particules)
- **Formulaire**: EmailJS pour l'envoi d'emails
- **Icons**: Lucide React (déjà installé)

### Packages déjà installés
- next: 15.5.6
- react: 19.1.0
- tailwindcss: 4
- lucide-react: 0.554.0
- class-variance-authority
- clsx
- tailwind-merge
- three (pour effets 3D si nécessaire)

---

## 📁 Structure de fichiers proposée

```
app/
  ├── layout.tsx (Layout principal)
  ├── page.tsx (Page d'accueil avec toutes les sections)
  ├── globals.css (Styles globaux)
  └── api/
      └── contact/
          └── route.ts (API route pour EmailJS)

components/
  ├── layout/
  │   ├── Navbar.tsx
  │   ├── MobileMenu.tsx
  │   └── Footer.tsx (si nécessaire)
  ├── sections/
  │   ├── HeroSection.tsx
  │   ├── ProjectsSection.tsx
  │   ├── CompetencesSection.tsx
  │   └── VeilleSection.tsx
  ├── ui/ (shadcn components)
  │   ├── button.tsx
  │   ├── card.tsx
  │   ├── dialog.tsx
  │   ├── sheet.tsx
  │   ├── table.tsx
  │   ├── input.tsx
  │   ├── textarea.tsx
  │   └── form.tsx
  ├── ProjectCard.tsx
  ├── CompetenceCard.tsx
  ├── CompetencesTable.tsx
  ├── ContactModal.tsx
  ├── ImageModal.tsx
  ├── SocialLinks.tsx
  ├── ParticlesBackground.tsx
  ├── TypingAnimation.tsx
  └── GradientText.tsx

lib/
  ├── utils.ts (déjà existant)
  └── constants.ts (données statiques: projets, compétences, etc.)

public/
  ├── CV_SH.pdf
  ├── icone.png
  ├── SylvainHontansRapportStage.pdf
  └── preuves/
      ├── image.png
      ├── image4.png
      ├── image6.png
      └── Hontans_sylvain_AP Gestion Parc 2024-2025.pdf
```

---

## 🚀 Plan de développement

### Phase 1: Setup et structure
1. ✅ Initialisation Next.js + TypeScript
2. ✅ Installation shadcn/ui
3. ⬜ Créer la structure de fichiers
4. ⬜ Extraire les données dans constants.ts

### Phase 2: Composants de base
1. ⬜ Créer les composants shadcn nécessaires
2. ⬜ Développer Navbar et MobileMenu
3. ⬜ Développer ParticlesBackground
4. ⬜ Développer TypingAnimation

### Phase 3: Sections principales
1. ⬜ HeroSection avec présentation
2. ⬜ ProjectsSection avec ProjectCard
3. ⬜ CompetencesSection avec CompetenceCard
4. ⬜ VeilleSection

### Phase 4: Fonctionnalités avancées
1. ⬜ ContactModal avec EmailJS
2. ⬜ ImageModal pour les preuves
3. ⬜ CompetencesTable interactif
4. ⬜ Navigation smooth entre sections

### Phase 5: Finitions
1. ⬜ Responsive design
2. ⬜ Animations et transitions
3. ⬜ Optimisation des performances
4. ⬜ SEO (metadata, sitemap)
5. ⬜ Tests et déploiement

---

## 📝 Notes importantes

### Données à externaliser
Toutes les données textuelles doivent être stockées dans `lib/constants.ts` pour faciliter les mises à jour:
- Informations personnelles
- Liste des projets
- Liste des compétences
- Activités et preuves
- Liens sociaux

### Accessibilité
- Tous les boutons doivent avoir des aria-labels
- Navigation au clavier
- Contrast ratios respectés
- Images avec alt texts

### Performance
- Images optimisées (Next.js Image component)
- Lazy loading des sections
- Code splitting
- Bundle size optimization

---

## 🔗 Liens et ressources

### Liens externes à maintenir
- GitHub: https://github.com/Hontans
- LinkedIn: https://www.linkedin.com/in/sylvain-hontans-0aa645345/
- Flipboard: https://flipboard.com/@sylvainhontans/veille-technologique-sis54gi1y
- Projets GitHub (voir section projets)

### Fichiers à migrer
- CV_SH.pdf
- SylvainHontansRapportStage.pdf
- Images de preuves (dossier preuves/)
- icone.png (favicon)

---

## ✅ Critères de validation

Le projet sera considéré comme terminé quand:
- ✅ Toutes les sections sont fonctionnelles
- ✅ Navigation fluide entre les sections
- ✅ Formulaire de contact opérationnel
- ✅ Responsive sur mobile, tablette et desktop
- ✅ Animations et effets visuels identiques ou améliorés
- ✅ Performance optimale (Lighthouse score > 90)
- ✅ Accessibilité respectée (WCAG 2.1)
- ✅ Compatible avec les navigateurs modernes
