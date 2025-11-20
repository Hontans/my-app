# Cahier des charges - Refonte du Portfolio avec React et React-Bits

## 📋 Contexte du projet

Refonte du portfolio personnel existant (Hontans.github.io) en utilisant Next.js, React et les composants React-Bits, en conservant la structure fonctionnelle mais pas le design.

---

## 🎯 Objectifs

- Recréer la structure et les fonctionnalités du site existant
- Utiliser des composants React-Bits pour les animations et effets
- Moderniser l'architecture avec Next.js et TypeScript
- Améliorer les performances et la maintenabilité

---

## 📐 Structure du site

### 1. **Header / Navigation**
- Logo/Nom : "Sylvain HONTANS"
- Menu de navigation avec 4 sections :
  - Parcours Professionnel
  - Projets
  - Référentiel des compétences
  - Veille technologique
- Menu hamburger responsive pour mobile
- Navigation active avec indication visuelle de la section courante

### 2. **Section : Parcours Professionnel** (Page d'accueil)

**Contenu :**
- Titre principal : "Salut, je suis Sylvain Hontans"
- Sous-titre animé : "Parcours Professionnel"
- Texte de présentation :
  > "Je m'appelle HONTANS Sylvain, j'ai 18 ans et je suis titulaire d'un Bac PRO Systèmes Numériques option RISC (Réseaux Informatiques et Systèmes Communicants). Actuellement, je poursuis mes études en seconde année de BTS Services Informatiques aux Organisations (SIO) avec la spécialité SLAM (Solutions Logicielles et Applications Métiers)."
- Deux boutons d'action :
  - "Me contacter" (ouvre une modal de contact)
  - "CV" (téléchargement PDF)
- Liens vers réseaux sociaux (footer fixe) :
  - GitHub
  - Flipboard
  - LinkedIn

**Fonctionnalités :**
- Animation de texte typing/dactylographie pour le sous-titre
- Modal de contact avec formulaire (email + message)
- Effet de particules en arrière-plan

### 3. **Section : Projets**

**Liste des projets à afficher :**

#### Projet 1 : Maison des ligues
- **Description :** Site web développé pour la Maison des Ligues. Présentation détaillée des différentes ligues sportives.
- **Technologies :** HTML, CSS, GitHub Pages
- **Liens :**
  - GitHub : https://github.com/FastAze/maison-de-ligue
  - Site : https://fastaze.github.io/maison-de-ligue

#### Projet 2 : AppFaq
- **Description :** Application web développée pour la Maison des Ligues. Système de gestion et d'organisation pour les ligues sportives avec interface d'administration.
- **Technologies :** HTML, CSS, PHP, Infinityfree
- **Liens :**
  - GitHub : https://github.com/FastAze/M2L
  - Site : https://appfaq.page.gd/

#### Projet 3 : Eco
- **Description :** Site web e-commerce développé dans le cadre d'un stage à Maser Engineering. Boutique en ligne complète avec gestion des produits, panier d'achat, gestion des informations utilisateur, adresses et moyens de paiement.
- **Technologies :** Vue.js, Quasar, Node.js
- **Liens :**
  - GitHub : https://github.com/Hontans/eco
  - Rapport de stage : SylvainHontansRapportStage.pdf

#### Projet 4 : Portfolio Personnel
- **Description :** Mon portfolio personnel hébergé sur GitHub Pages. Site web responsive présentant mon parcours, mes compétences et mes projets avec ma veille technologique.
- **Technologies :** HTML, CSS, JavaScript, GitHub Pages
- **Liens :**
  - GitHub : https://github.com/Hontans/Hontans.github.io

**Structure :**
- Cards/cartes pour chaque projet
- Chaque carte contient : titre, description, technologies, liens externes

### 4. **Section : Référentiel des compétences**

**Titre :** Référentiel des compétences du Bloc n° 1

#### Sous-section A : Grille de compétences (6 cartes interactives)

**Compétence 1 : Gérer le patrimoine informatique**
- Recenser et identifier les ressources numériques
- Exploiter des référentiels, normes et standards adoptés par le prestataire informatique
- Mettre en place et vérifier les niveaux d'habilitation associés à un service
- Vérifier les conditions de la continuité d'un service informatique
- Gérer des sauvegardes
- Vérifier le respect des règles d'utilisation des ressources numériques

**Compétence 2 : Répondre aux incidents et aux demandes d'assistance et d'évolution**
- Collecter, suivre et orienter des demandes
- Traiter des demandes concernant les services réseau et système, applicatifs
- Traiter des demandes concernant les applications

**Compétence 3 : Développer la présence en ligne de l'organisation**
- Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques
- Référencer les services en ligne de l'organisation et mesurer leur visibilité
- Participer à l'évolution d'un site Web exploitant les données de l'organisation

**Compétence 4 : Travailler en mode projet**
- Analyser les objectifs et les modalités d'organisation d'un projet
- Planifier les activités
- Évaluer les indicateurs de suivi d'un projet et analyser les écarts

**Compétence 5 : Mettre à disposition des utilisateurs un service informatique**
- Réaliser les tests d'intégration et d'acceptation d'un service
- Déployer un service
- Accompagner les utilisateurs dans la mise en place d'un service

**Compétence 6 : Organiser son développement professionnel**
- Mettre en place son environnement d'apprentissage personnel
- Mettre en œuvre des outils et stratégies de veille informationnelle
- Gérer son identité professionnelle
- Développer son projet professionnel

**Interaction :**
- Cartes cliquables/hover qui révèlent les détails au survol
- Animation de retournement ou overlay au passage de la souris

#### Sous-section B : Tableau des compétences

**Structure du tableau :**
- Colonnes : 
  - Activités
  - Les 6 compétences (1 colonne par compétence)
- Lignes groupées :
  - **Réalisation en cours de formation**
  - **Réalisations en milieu professionnel en cours de première année**

**Données du tableau :**

| Activités | C1 | C2 | C3 | C4 | C5 | C6 |
|-----------|----|----|----|----|----|----|
| **Réalisation en cours de formation** |
| Développement de la "Maison des ligues" | | | ✓ | ✓ | ✓ | |
| Développement de "AppFaq" | ✓ | | ✓ | ✓ | ✓ | |
| GLPI | ✓ | | | | | |
| LinkedIn | | | | | | ✓ |
| Portfolio | | | | | ✓ | ✓ |
| **Réalisations en milieu professionnel** |
| Développement de "Eco" | ✓ | ✓ | | ✓ | | |

**Fonctionnalités :**
- Cases cliquables pour ouvrir des preuves (images ou liens)
- Tableau responsive avec scroll horizontal sur mobile

### 5. **Section : Veille technologique**

**Contenu :**

**Bloc 1 : Définition et thèmes**
- **Titre :** Définition et thèmes de ma veille
- **Texte :** La veille technologique consiste à surveiller les évolutions et innovations dans un domaine spécifique pour rester informé des dernières tendances.
- **Mes thèmes :** Développement web (Vue.js, React) et développement Logicielles (C#/.NET, C++, Java)

**Bloc 2 : Flipboard**
- **Titre :** C'est quoi Flipboard ?
- **Texte :** Flipboard est un site web qui permet d'organiser et de partager des articles, actualités et informations sous forme de magazines numériques personnalisés. C'est un outil idéal pour structurer et diffuser sa veille technologique de manière visuelle et accessible.

**Lien externe :**
- Bouton "Consulter ma veille sur Flipboard"
- URL : https://flipboard.com/@sylvainhontans/veille-technologique-sis54gi1z

---

## 🎨 Fonctionnalités UX/UI à implémenter

### Animations et effets
- ✅ Animation de typing/dactylographie pour les titres
- ✅ Effet de particules en arrière-plan (particles.js → équivalent React)
- ✅ Animations d'apparition au scroll (fade in, slide in)
- ✅ Cartes avec effet hover/overlay
- ✅ Transitions fluides entre sections
- ✅ Menu drawer mobile avec overlay

### Composants interactifs
- Modal de contact avec formulaire
- Modal d'affichage d'images (pour les preuves)
- Navigation avec indicateur de section active
- Boutons avec effets hover
- Liens externes avec animations

### Responsive design
- Navigation desktop : menu horizontal
- Navigation mobile : menu hamburger + drawer
- Layout adaptatif pour tablettes et mobiles
- Tableau de compétences scrollable horizontalement sur mobile

---

## 🔧 Technologies et composants à utiliser

### Stack technique
- **Framework :** Next.js (déjà en place)
- **Langage :** TypeScript
- **Styling :** Tailwind CSS
- **Composants UI :** React-Bits (shadcn déjà installé)

### Composants React-Bits suggérés
- `GradualBlur` : pour les transitions entre sections
- Animations de texte pour le typing effect
- Composants de card pour les projets et compétences
- Modal/Dialog pour le formulaire de contact
- Navigation responsive avec drawer
- Particle effects ou équivalent

---

## 📊 Données dynamiques

### Fichiers de configuration suggérés
- `/data/profile.json` : informations personnelles
- `/data/projects.json` : liste des projets
- `/data/competences.json` : référentiel de compétences
- `/data/activities.json` : tableau d'activités/compétences
- `/data/social-links.json` : liens réseaux sociaux

---

## 🚀 Priorisation des développements

### Phase 1 : Structure de base
1. Configuration du routing Next.js
2. Création de la navigation responsive
3. Layout principal avec sections

### Phase 2 : Contenu statique
1. Section Parcours Professionnel
2. Section Projets
3. Section Veille technologique

### Phase 3 : Composants interactifs
1. Modal de contact
2. Cartes de compétences avec interactions
3. Tableau de compétences avec modal d'images

### Phase 4 : Animations et effets
1. Effets de particules
2. Animations de typing
3. Animations au scroll
4. Transitions entre sections

### Phase 5 : Optimisation
1. Performance et SEO
2. Responsive design final
3. Tests cross-browser

---

## 📝 Notes importantes

- **Pas de reproduction du design** : créer un nouveau design moderne avec React-Bits
- **Conservation de la structure** : toutes les sections et fonctionnalités doivent être présentes
- **Contenu identique** : conserver tous les textes, liens et informations du site original
- **Amélioration UX** : profiter de React pour améliorer les interactions
- **Performance** : optimiser le chargement et les animations

---

## 🎯 Résultat attendu

Un portfolio moderne et performant en Next.js/React qui :
- Reprend toute la structure et le contenu du site original
- Utilise des composants React-Bits pour les animations
- Offre une meilleure expérience utilisateur
- Est maintenable et évolutif
- Conserve toutes les fonctionnalités (navigation, modals, animations, etc.)
