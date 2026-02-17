/* ========================= MENU HAMBURGER ========================= */

function toggleMenu(event) {
  const hamburgerMenu = event.currentTarget.closest('.hamburger-menu');
  if (!hamburgerMenu) return;

  const menu = hamburgerMenu.querySelector('.menu-links');
  const icon = hamburgerMenu.querySelector('.hamburger-icon');

  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// ============= DONNÉES DES PROJETS ============= 
// Centralisation des données pour faciliter la maintenance
const projectsData = {
  1: {
    title: "Site web pour le BUT MMI",
    type: "code",
    description: "Plateforme d'information conçue pour valoriser la formation BUT MMI auprès des futurs étudiants.",
    technologies: ["HTML", "CSS", "PHP"],
    client: "IUT de Cergy-Pontoise (Département MMI)",
    problem: "Manque de visibilité de la formation auprès des bacheliers.",
    solution: "Interface structurée par compétences avec intégration de contenus dynamiques en PHP.",
    skills: [
      "Intégration à partir d'une maquette définie",
      "Intégration d'un formulaire de contact",
      "Gestion de projet et deadlines"
    ],
    github: "https://github.com/YosraMesbahi/site-statique-mmi.git",
    demo: "https://mesbahi.alwaysdata.net/Semestre-1%20/SAE-105/SITE-WEB-BUT-MMI/index.php"
  },
  2: {
    title: "Création d'un CRUD",
    type: "code",
    description: "Application permettant la gestion sécurisée de données via un système CRUD complet.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    client: "IUT de Cergy-Pontoise (Département MMI)",
    problem: "Besoin de gérer des données sans outils complexes.",
    solution: "Système CRUD complet avec validation de formulaires et sécurisation par requêtes préparées.",
    skills: [
      "Conception de bases de données",
      "Opérations CRUD",
    ],
    github: "https://github.com/YosraMesbahi/site-bdd.git",
    demo: "https://glowcom.alwaysdata.net/SAE-203/DanYellow-cours-main-integration/code/index.php"
  },
    3: {
    title: "Campagne visuelle fictive pour M&M's",
    type: "design",
    description: "Création de supports de communication visuelle pour le lancement d'un nouveau produit fictif M&M's.",
    technologies: ["Photoshop", "Illustrator"],
    client: "Projet Académique (IUT)",
    problem: "Promouvoir un nouveau produit en respectant l'identité visuelle forte de la marque M&M's.",
    solution: "Conception de visuels publicitaires (post Instagram, affiche) mettant en avant le produit.",
    skills: [
      "Composition et mise en page publicitaire",
      "Respect d'une charte graphique",
      "Préparation de fichiers pour le web et le print"
    ],
    github: null,
    demo: "https://www.figma.com/deck/M2cFJlEq5mxr84OBunuQbn"
  },
  4: {
    title: "Dynamisation d'un site web",
    type: "code",
    description: "Transformation d'un site statique en plateforme dynamique via un système de templates PHP.",
    technologies: ["HTML", "PHP"],
    client: "IUT de Cergy-Pontoise (Département MMI)",
    problem: "Maintenance fastidieuse d'un site statique avec duplication de code.",
    solution: "Templates PHP réutilisables avec composants séparés pour faciliter les mises à jour.",
    skills: [
      "Refactorisation HTML vers PHP",
      "Création de templates réutilisables",
      "Optimisation du code",
    ],
    github: "https://github.com/YosraMesbahi/dynamisation-tableau-php.git",
    demo: "https://mesbahi.alwaysdata.net/Semestre-3/Atelier-php/Mamba/index.php"
  },
  5: {
    title: "Maquettes de site sur Figma",
    type: "design",
    description: "Maquettes haute-fidélité pour une agence immobilière.",
    technologies: ["Figma"],
    client: "Agence Immobilière fictive",
    problem: "Besoin d'une interface moderne pour la recherche de biens immobiliers.",
    solution: "Système de design cohérent avec prototypage interactif complet.",
    skills: [
      "Identification des parcours client à partir d'enquêtes de terrain",
      "Modélisation d'un système d'information : arborescence",
      "Conception de croquis et de dessins de réflexion",
      "Conception des maquettes high-fidelity",
      "Prototypage interactif",
    ],
    github: null,
    demo: "https://www.figma.com/proto/SJqtcCVsUBsuKLdMjAa2Cw/Maquette---Agence-immobili%C3%A8re?node-id=1-269&p=f&t=fbaZdKtS0w81hRjO-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=1%3A269"
  },
  6: {
    title: "Visualisation de données",
    type: "code",
    description: "Interface interactive pour présenter des données de manière intuitive.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    client: "IUT de Cergy-Pontoise (Département MMI)",
    problem: "Difficulté d'interpréter de grandes quantités de données brutes.",
    solution: "Graphiques dynamiques et tableaux de bord interactifs avec traitement PHP/MySQL.",
    skills: [
      "Traitement de données",
      "Visualisations interactives",
      "Développement front-end moderne",
      "Intégration de bibliothèques JS",
      "Optimisation des performances"
    ],
    github: "https://github.com/YosraMesbahi/SAE303",
    demo: "https://yosramesbahi.github.io/SAE303/"
  },
  7: {
    title: "CRUD gestion d'adhérents",
    type: "code",
    description: "Application back-office complète pour la gestion administrative des membres d'un club associatif.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    client: "Club sportif fictif",
    problem: "Gestion manuelle chronophage ",
    solution: "Interface d'administration centralisée et sécurisée par authentification",
    skills: [
      "Architecture BDD relationnelle",
      "CRUD complet (Créer, Lire, Modifier, Supprimer)",
      "Sécurisation des mots de passe",
      "Gestion authentification et sessions",
    ],
    github: "https://github.com/YosraMesbahi/gestion-adherents-club.git",
    demo: "https://mesbahi.alwaysdata.net/backoffice-crud/src/login.php"
  },
  8: {
    title: "Charte graphique webdocumentaire",
    type: "design",
    description: "Conception complète de l'identité visuelle et de l'interface utilisateur pour un webdocumentaire interactif.",
    technologies: ["Figma"],
    client: "Projet Académique (IUT de Cergy-Pontoise)",
    problem: "Définir une ambiance visuelle qui serve la narration tout en garantissant une navigation intuitive.",
    solution: "Création d'un système de design (Design System) incluant typographies, palettes de couleurs et composants d'interface sur Figma.",
    skills: [
      "Création d'une identité visuelle cohérente",
      "Conception d'UI (Interface Utilisateur)",
      "Élaboration d'un Design System",
      "Prototypage de parcours interactifs"
    ],
    github: null,
    demo: "https://www.figma.com/deck/QznXvMtJNn0erGR7Gnhqfn/Untitled?node-id=0-40&t=kODxSVaHwzMubOuu-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" 
  },
  9: {
    title: "Stratégie de communication",
    type: "design",
    description: "Élaboration d'une stratégie de communication complète pour promouvoir la diffusion d'un webdocumentaire sur le métier de copywriter.",
    technologies: ["Figma"],
    client: "Projet Académique (IUT de Cergy-Pontoise)",
    problem: "Concevoir une stratégie cohérente pour toucher efficacement une cible sur un support précis.",
    solution: "Définition d'une stratégie incluant analyse de cible, planning éditorial et création de contenus adaptée à la plateforme LinkedIn.",
    skills: [
      "Analyse de cible",
      "Définition d'axes de communication",
      "Planning éditorial",
      "Création de contenus adaptés",
    ],
    github: null,
    demo: "https://www.figma.com/deck/uC9xyIZBj1md3bf8xFEur3"
  },
  10: {
    title: "Programme festival BD « Formule Bédé 10 »",
    type: "design",
    description: "Conception d'un livret de 42 pages au format A5 pour le festival de bande dessinée « Formule Bédé 10 » organisé par la structure culturelle fictive DixSept, du 27 au 29 septembre 2024.",
    technologies: ["InDesign", "Illustrator", "Photoshop"],
    client: "Structure culturelle fictive DixSept (Projet Académique – IUT de Cergy-Pontoise)",
    problem: "Rendre la communication du festival plus lisible et dynamique en réenchantant l'identité graphique de la structure, tout en documentant et informant sur la programmation de l'événement.",
    solution: "Création d'un livret print offset A5 de 42 pages (couverture 300g, intérieur 120g, relié piqué à cheval) intégrant chemin de fer, gabarit, foliotage, habillage texte–visuels et une typographie cohérente adaptée à la ligne éditoriale du commanditaire.",
    skills: [
      "Conception d'un chemin de fer et d'un gabarit de mise en page",
      "Mise en page éditoriale print (InDesign)",
      "Création et retouche de visuels (Illustrator, Photoshop)",
      "Optimisation des médias pour l'impression offset (CMJN, fond perdu, traits de coupe)",
      "Gestion typographique et règles typographiques",
      "Assemblage et livraison d'un dossier natif complet (.IND, .IDML, Links, Fonts)"
    ],
    github: null,
    demo: null
  },
  11: {
    title: "Infographie BUT MMI",
    type: "design",
    description: "Création d'une infographie print personnelle présentant la formation BUT Métiers du Multimédia et de l'Internet (MMI) : structure, débouchés et parcours de spécialisation.",
    technologies: ["Illustrator"],
    client: "Projet personnel",
    problem: "Synthétiser de façon claire et visuelle les informations clés de la formation BUT MMI pour un public de futurs étudiants.",
    solution: "Composition d'une infographie structurée en 4 points clés avec une hiérarchie visuelle forte, une palette cohérente (jaune, rose, blanc) et une typographie lisible adaptée au format print.",
    skills: [
      "Conception graphique et mise en page print",
      "Hiérarchie visuelle et structuration de l'information",
      "Maîtrise d'Adobe Illustrator",
      "Choix typographiques et colorimétrie",
      "Synthèse et vulgarisation de contenu"
    ],
    github: null,
    demo: "https://mesbahi.alwaysdata.net/MMI.png"
  },
  12: {
    title: "Gestion d'une newsletter",
    type: "design",
    description: "Conception d'une stratégie éditoriale complète et rédaction d'une newsletter post-évènement à destination des étudiants ambassadeurs de la JPO IUT Cergy-Pontoise 2026.",
    technologies: ["Figma"],
    client: "Projet personnel",
    problem: "Maintenir le lien avec les étudiants ambassadeurs après la Journée Portes Ouvertes du 7 février 2026, les remercier pour leur engagement et les fidéliser pour les éditions à venir.",
    solution: "Élaboration d'une stratégie éditoriale complète, rédaction de deux articles structurés et conception d'un footer CTA avec appels à l'action multicanaux.",
    skills: [
      "Définition d'une stratégie et d'une ligne éditoriale",
      "Analyse de cible et définition des objectifs de communication",
      "Rédaction d'articles de communication interne",
      "Gestion de l'information digitale",
      "Conception de calls-to-action et de parcours de fidélisation",
    ],
    github: null,
    demo: "https://www.figma.com/deck/HuF2S1gsYd6mkhH64yTohE"
  },
  13: {
    title: "Motion design — Festival des Talents 2025",
    type: "design",
    description: "Pastille de communication post-événementielle réalisée en motion design à l'occasion du Festival des Talents 2025. Animation conçue pour être diffusée sur les réseaux sociaux afin de prolonger la visibilité de l'événement.",
    technologies: ["After Effects"],
    client: "Festival des Talents 2025",
    problem: "Assurer la communication post-événementielle du Festival des Talents 2025 et prolonger son impact sur les réseaux sociaux.",
    solution: "Création d'une pastille animée en motion design, rythmée et identitaire, optimisée pour une diffusion digitale.",
    skills: [
      "Conception et animation motion design",
      "Storyboard et direction artistique",
      "Montage et export pour réseaux sociaux",
      "Communication post-événementielle"
    ],
    github: null,
    demo: "https://mesbahi.alwaysdata.net/MESBAHI-Pastille-2.mp4",
  }
};
/* ========================= MODALE PROJETS ========================= */

class ProjectModal {
  constructor() {
    this.modal = document.getElementById('modal-container');
    this.closeBtn = this.modal.querySelector('.modal-close');
    this.backdrop = this.modal.querySelector('.modal-backdrop');
    this.lastFocusedElement = null;

    this.initEvents();
  }

  initEvents() {
    this.closeBtn.addEventListener('click', () => this.close());
    this.backdrop.addEventListener('click', () => this.close());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    this.lastFocusedElement = document.activeElement;

    // Remplir les données de base
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-description').textContent = data.description;
    document.getElementById('modal-client').textContent = data.client;
    document.getElementById('modal-problem').textContent = data.problem;
    document.getElementById('modal-solution').textContent = data.solution;

    // Technologies
    const techContainer = document.getElementById('modal-tech-badges');
    techContainer.innerHTML = data.technologies
      .map(tech => `<span class="tech-badge">${tech}</span>`)
      .join('');

    // Compétences
    const skillsList = document.getElementById('modal-skills-list');
    skillsList.innerHTML = data.skills
      .map(skill => `<li>${skill}</li>`)
      .join('');

    // ✅ GESTION INTELLIGENTE DES BOUTONS
    const buttonsContainer = document.querySelector('.modal-buttons');

    // CAS 1 : Projet de type "design" (maquettes Figma)
    if (data.type === 'design') {
      if (data.demo) {
        buttonsContainer.innerHTML = `
        <a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-color-1" style="width: 100%;">
          Voir le visuel
        </a>
      `;
      } else {
        buttonsContainer.innerHTML = `
        <p style="text-align: center; color: var(--color-text); margin: 0;">
          <em>Maquette en cours de finalisation</em>
        </p>
      `;
      }
    }
    // CAS 2 : Projet sans liens (en développement)
    else if (!data.github && !data.demo) {
      buttonsContainer.innerHTML = `
      <p style="text-align: center; color: var(--color-text); margin: 0;">
        <em>Projet en cours de développement - Disponible prochainement</em>
      </p>
    `;
    }
    // CAS 3 : Projet de code avec liens
    else {
      buttonsContainer.innerHTML = `
      <a id="modal-github" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-color-2">GitHub</a>
      <a id="modal-demo" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-color-1">Live Demo</a>
    `;

      const githubBtn = document.getElementById('modal-github');
      const demoBtn = document.getElementById('modal-demo');

      // Afficher/cacher selon disponibilité
      if (data.github) {
        githubBtn.href = data.github;
        githubBtn.style.display = 'inline-flex';
      } else {
        githubBtn.style.display = 'none';
      }

      if (data.demo) {
        demoBtn.href = data.demo;
        demoBtn.style.display = 'inline-flex';
      } else {
        demoBtn.style.display = 'none';
      }
    }

    // Vidéo (motion design)
    const existingVideo = document.getElementById('modal-video-wrapper');
    if (existingVideo) existingVideo.remove();

    if (data.video) {
      const videoWrapper = document.createElement('div');
      videoWrapper.id = 'modal-video-wrapper';
      videoWrapper.style.cssText = 'margin: 1rem 0; text-align: center;';
      videoWrapper.innerHTML = `
        <video controls style="max-width:100%; border-radius: 0.75rem; max-height: 260px;">
          <source src="${data.video}" type="video/mp4">
        </video>`;
      const descEl = document.getElementById('modal-description');
      descEl.parentNode.insertBefore(videoWrapper, descEl.nextSibling);
    }

    // Afficher la modale
    this.modal.classList.add('active');
    document.body.classList.add('modal-open');
    this.closeBtn.focus();
  }

  close() {
    this.modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    if (this.lastFocusedElement) this.lastFocusedElement.focus();
  }
}

/* ========================= CHARGEMENT DE LA MODALE ========================= */

async function loadModalAndInit() {
  const placeholder = document.getElementById('modal-placeholder');
  if (!placeholder) return;

  try {
    const response = await fetch('modale.html');
    if (!response.ok) throw new Error('Erreur de chargement de la modale');

    const html = await response.text();
    placeholder.innerHTML = html;

    const projectModal = new ProjectModal();

    document.querySelectorAll('.btn-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project-id');
        projectModal.open(projectId);
      });
    });
  } catch (error) {
    console.error('Erreur lors du chargement de la modale:', error);
  }
}

/* ========================= INITIALISATION GLOBALE ========================= */

document.addEventListener('DOMContentLoaded', () => {

  // Menu hamburger
  document.querySelectorAll('.hamburger-icon').forEach(icon => {
    icon.addEventListener('click', toggleMenu);
  });

  document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      const hamburgerMenu = link.closest('.hamburger-menu');
      if (!hamburgerMenu) return;

      hamburgerMenu.querySelector('.menu-links').classList.remove('open');
      hamburgerMenu.querySelector('.hamburger-icon').classList.remove('open');
    });
  });

  // Modales projets
  loadModalAndInit();

  // Bouton CV
  const cvBtn = document.querySelector('[data-action="download-cv"]');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      window.open('./assets/CV-MESBAHI.pdf', '_blank');
    });
  }

  // Gestion des icônes réseaux sociaux
  document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const social = icon.getAttribute('data-social');

      if (social === 'linkedin') {
        window.open('https://www.linkedin.com/in/yosra-mesbahi/', '_blank', 'noopener,noreferrer');
      } else if (social === 'github') {
        window.open('https://github.com/YosraMesbahi', '_blank', 'noopener,noreferrer');
      }
    });
  });

  // Gestion du bouton "Voir tous mes projets"
  const voirProjetsBtn = document.querySelector('[data-action="voir-projets"]');
  if (voirProjetsBtn) {
    voirProjetsBtn.addEventListener('click', () => {
      window.location.href = './projets.html';
    });
  }
});