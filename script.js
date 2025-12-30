function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ============= DONNÉES DES PROJETS ============= 
// Centralisation des données pour faciliter la maintenance
const projectsData = {
  1: {
    title: "Site web pour le BUT MMI",
    description: "Ce projet universitaire m'a permis de réaliser un site web complet pour présenter la formation BUT MMI. J'ai développé toute l'interface en respectant les contraintes du cahier des charges, en mettant l'accent sur l'ergonomie et l'accessibilité.",
    learnings: "Ce projet m'a permis de découvrir l'importance de la planification en amont. J'ai appris à structurer mon code de manière logique, à respecter les standards du web, et surtout à gérer mon temps efficacement pour livrer un projet complet dans les délais. La collaboration avec mes pairs m'a également enseigné l'importance de la communication dans un projet technique.",
    technologies: ["HTML", "CSS", "PHP"],
    skills: [
      "Conception d'interfaces web responsive",
      "Intégration de contenu dynamique avec PHP",
      "Respect des standards web et de l'accessibilité",
      "Gestion de projet et respect des délais"
    ],
    github: "https://github.com/YosraMesbahi/SAE-105.git",
    demo: "https://mesbahi.alwaysdata.net/Semestre-1%20/SAE-105/SITE-WEB-BUT-MMI/index.php"
  },
  2: {
    title: "Création d'un CRUD",
    description: "Développement d'une application web complète avec système CRUD (Create, Read, Update, Delete). Ce projet m'a permis de maîtriser la manipulation de bases de données et la création d'interfaces d'administration robustes et sécurisées.",
    learnings: "Ce projet a été un véritable tournant dans ma compréhension du développement back-end. J'ai appris à concevoir une base de données relationnelle cohérente, à sécuriser mes requêtes SQL contre les injections, et à structurer mon code selon l'architecture MVC. Les difficultés rencontrées lors du débogage m'ont enseigné la patience et l'importance des tests.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    skills: [
      "Conception et gestion de bases de données relationnelles",
      "Développement d'opérations CRUD complètes",
      "Sécurisation des formulaires et des requêtes SQL",
      "Architecture MVC et séparation des préoccupations"
    ],
    github: "https://github.com/YosraMesbahi/SAE-203.git",
    demo: "https://glowcom.alwaysdata.net/SAE-203/DanYellow-cours-main-integration/code/index.php"
  },
  3: {
    title: "Dynamisation d'un site web",
    description: "Transformation d'un site statique en site dynamique. J'ai implémenté un système de templates et de gestion de contenu pour faciliter la maintenance et l'évolutivité du site. Ce projet m'a permis de comprendre l'importance de la modularité dans le développement web.",
    learnings: "La refactorisation de code existant m'a appris à lire et comprendre du code que je n'avais pas écrit. J'ai découvert les avantages de la programmation modulaire et l'importance de créer des composants réutilisables. Ce projet m'a également sensibilisé à la notion de dette technique et à l'importance de documenter son code.",
    technologies: ["HTML", "PHP"],
    skills: [
      "Refactorisation de code HTML vers PHP",
      "Création de systèmes de templates réutilisables",
      "Optimisation du code et des performances",
      "Documentation technique du projet"
    ],
    github: "https://github.com/YosraMesbahi/Mamba.git",
    demo: "https://mesbahi.alwaysdata.net/Semestre-3/Atelier-php/Mamba/index.php"
  },
  4: {
    title: "Site wordpress Simaya",
    description: "Conception et développement d'un site vitrine sur WordPress avec Elementor. Création d'une identité visuelle cohérente et d'une expérience utilisateur optimale pour ce projet client. J'ai travaillé sur l'ensemble du processus, de la maquette à la mise en ligne.",
    learnings: "Travailler avec un vrai client m'a appris l'importance de l'écoute active et de la gestion des attentes. J'ai développé mes compétences en communication pour traduire des besoins non-techniques en solutions concrètes. Ce projet m'a également enseigné à être plus flexible et à gérer les retours et modifications tout en gardant une vision cohérente du projet.",
    technologies: ["WordPress", "Elementor"],
    skills: [
      "Maîtrise de WordPress et de son écosystème",
      "Customisation avancée avec Elementor",
      "Optimisation SEO et performances",
      "Responsive design et tests multi-navigateurs",
      "Relation client et gestion des demandes"
    ],
    github: null,
    demo: null,
    status: "en-cours"
  },
  5: {
    title: "Visualisation de données",
    description: "Projet en cours de développement axé sur la visualisation interactive de données. Utilisation de bibliothèques JavaScript modernes pour créer des graphiques et tableaux de bord dynamiques permettant d'analyser et de présenter des données complexes de manière claire et intuitive.",
    learnings: "Ce projet me permet d'explorer l'intersection entre design et développement. J'apprends à transformer des données brutes en récits visuels compréhensibles, à choisir les bonnes représentations graphiques selon le message à faire passer, et à optimiser les performances pour gérer de gros volumes de données.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    skills: [
      "Manipulation et traitement de données",
      "Création de visualisations interactives",
      "Développement front-end moderne",
      "Intégration de bibliothèques JavaScript",
      "Optimisation des performances avec de gros volumes de données"
    ],
    github: null,
    demo: null
  },
  6: {
    title: "Maquettes de site sur Figma",
    description: "Collection de maquettes web réalisées sur Figma dans le cadre de projets universitaires et personnels. Focus sur l'UX/UI design et les tendances actuelles du web design. Ces maquettes reflètent ma démarche créative et ma capacité à conceptualiser des interfaces modernes et ergonomiques.",
    learnings: "Le design m'a appris à penser 'utilisateur d'abord'. J'ai développé ma sensibilité aux détails visuels, à la hiérarchie de l'information et à l'importance de la cohérence dans une interface. Les tests utilisateurs m'ont montré que mes intuitions ne sont pas toujours justes et qu'il faut savoir remettre en question ses choix pour créer de meilleures expériences.",
    technologies: ["Figma"],
    skills: [
      "Design d'interfaces utilisateur modernes",
      "Prototypage interactif",
      "Conception responsive mobile-first",
      "Création de systèmes de design cohérents",
      "Tests utilisateurs et itérations"
    ],
    github: null,
    demo: null
  }
};



// ============= CLASSE DE GESTION DE LA MODALE ============= 
class ProjectModal {
  constructor() {
    // Les éléments sont récupérés ici, APRES l'injection du HTML
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

    // Remplissage des données
    document.getElementById('modal-image').src = `./assets/project-${projectId}.png`;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-description').textContent = data.description;
    document.getElementById('modal-learnings').textContent = data.learnings;
    document.getElementById('modal-github').href = data.github;
    document.getElementById('modal-demo').href = data.demo;

    // Badges technologies
    const techContainer = document.getElementById('modal-tech-badges');
    techContainer.innerHTML = data.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('');

    // Liste des compétences
    const skillsList = document.getElementById('modal-skills-list');
    skillsList.innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join('');

    // Affichage
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      this.closeBtn.focus();
    }, 100);
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    if (this.lastFocusedElement) this.lastFocusedElement.focus();
  }
}

// ============= FONCTION D'INJECTION (FETCH) ============= 
async function loadModalAndInit() {
    try {
        const placeholder = document.getElementById('modal-placeholder');
        if (!placeholder) return; // Sécurité si l'élément n'existe pas sur une page

        const response = await fetch('modale.html');
        const html = await response.text();
        placeholder.innerHTML = html;

        // Une fois le HTML présent, on initialise la classe
        const projectModal = new ProjectModal();

        // On lie les boutons de détails à la modale
        const detailButtons = document.querySelectorAll('.btn-detail');
        detailButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // On récupère l'ID du projet (soit via data-id, soit via l'index)
                const projectId = btn.getAttribute('data-project-id') || 1;
                projectModal.open(projectId);
            });
        });

    } catch (error) {
        console.error("Erreur de chargement de la modale :", error);
    }
}

// ============= INITIALISATION GLOBALE ============= 
document.addEventListener('DOMContentLoaded', () => {
  loadModalAndInit();
});