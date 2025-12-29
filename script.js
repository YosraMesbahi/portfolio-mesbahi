function toggleMenu(){
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
    technologies: ["HTML", "CSS", "PHP"],
    skills: [
      "Conception d'interfaces web responsive",
      "Intégration de contenu dynamique avec PHP",
      "Respect des standards web et de l'accessibilité",
      "Gestion de projet et respect des délais"
    ],
    github: "https://github.com/YosraMesbahi/SAE-105.git",
    demo: "https://mesbahi.alwaysdata.net/Semestre-1%20/SAE-105/SITE-WEB-BUT-MMI/index.php",
    image: "./assets/Projet-1.png"
  },
  2: {
    title: "Création d'un CRUD",
    description: "Développement d'une application web complète avec système CRUD (Create, Read, Update, Delete). Ce projet m'a permis de maîtriser la manipulation de bases de données et la création d'interfaces d'administration robustes et sécurisées.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    skills: [
      "Conception et gestion de bases de données relationnelles",
      "Développement d'opérations CRUD complètes",
      "Sécurisation des formulaires et des requêtes SQL",
      "Architecture MVC et séparation des préoccupations"
    ],
    github: "https://github.com/YosraMesbahi/SAE-203.git",
    demo: "https://glowcom.alwaysdata.net/SAE-203/DanYellow-cours-main-integration/code/index.php",
    image: "./assets/Projet-2.png"
  },
  3: {
    title: "Dynamisation d'un site web",
    description: "Transformation d'un site statique en site dynamique. J'ai implémenté un système de templates et de gestion de contenu pour faciliter la maintenance et l'évolutivité du site. Ce projet m'a permis de comprendre l'importance de la modularité dans le développement web.",
    technologies: ["HTML", "PHP"],
    skills: [
      "Refactorisation de code HTML vers PHP",
      "Création de systèmes de templates réutilisables",
      "Optimisation du code et des performances",
      "Documentation technique du projet"
    ],
    github: "https://github.com/YosraMesbahi/Mamba.git",
    demo: "https://mesbahi.alwaysdata.net/Semestre-3/Atelier-php/Mamba/index.php",
    image: "./assets/Projet-3.png"
  },
  4: {
    title: "Site wordpress Simaya",
    description: "Conception et développement d'un site vitrine sur WordPress avec Elementor. Création d'une identité visuelle cohérente et d'une expérience utilisateur optimale pour ce projet client. J'ai travaillé sur l'ensemble du processus, de la maquette à la mise en ligne.",
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
    image: "./assets/Projet-4.png",
    status: "en-cours"
  }
  // Ajoutez les autres projets ici
};

// ============= CLASSE MODAL ============= 
class Modal {
  constructor() {
    this.modal = document.getElementById('modal-container');
    this.modalBox = this.modal.querySelector('.modal-box');
    this.backdrop = this.modal.querySelector('.modal-backdrop');
    this.closeBtn = this.modal.querySelector('.modal-close');
    
    // Éléments de contenu
    this.elements = {
      image: document.getElementById('modal-image'),
      title: document.getElementById('modal-title'),
      description: document.getElementById('modal-description'),
      techBadges: document.getElementById('modal-tech-badges'),
      skillsList: document.getElementById('modal-skills-list'),
      github: document.getElementById('modal-github'),
      demo: document.getElementById('modal-demo')
    };
    
    // État
    this.isOpen = false;
    this.currentProjectId = null;
    this.focusableElements = [];
    this.lastFocusedElement = null;
    
    // Initialisation
    this.init();
  }
  
  init() {
    // Événements de fermeture
    this.closeBtn.addEventListener('click', () => this.close());
    this.backdrop.addEventListener('click', () => this.close());
    
    // Fermeture avec ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
    
    // Navigation clavier (Tab trap)
    this.modal.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && this.isOpen) {
        this.handleTabKey(e);
      }
    });
    
    // Calculer la largeur de scrollbar pour éviter le jump
    this.calculateScrollbarWidth();
    
    // Événements sur tous les boutons "En savoir plus"
    this.attachButtonEvents();
  }
  
  attachButtonEvents() {
    const buttons = document.querySelectorAll('.open-modal');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = button.dataset.projectId;
        this.open(projectId);
      });
    });
  }
  
  open(projectId) {
    const project = projectsData[projectId];
    
    if (!project) {
      console.error(`Projet ${projectId} introuvable`);
      return;
    }
    
    // Sauvegarder l'élément actuellement focus
    this.lastFocusedElement = document.activeElement;
    
    // Remplir le contenu
    this.populateContent(project);
    
    // Afficher la modale
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    
    // Définir le focus sur le premier élément focusable
    this.setInitialFocus();
    
    // Mettre à jour l'état
    this.isOpen = true;
    this.currentProjectId = projectId;
    
    // Annoncer l'ouverture aux lecteurs d'écran
    this.announceToScreenReader(`Modale ouverte : ${project.title}`);
  }
  
  close() {
    // Masquer la modale
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    
    // Restaurer le focus
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus();
    }
    
    // Mettre à jour l'état
    this.isOpen = false;
    this.currentProjectId = null;
    
    // Annoncer la fermeture
    this.announceToScreenReader('Modale fermée');
  }
  
  populateContent(project) {
    // Image
    this.elements.image.src = project.image;
    this.elements.image.alt = `Capture d'écran du projet ${project.title}`;
    
    // Titre
    this.elements.title.textContent = project.title;
    
    // Description
    this.elements.description.textContent = project.description;
    
    // Technologies (badges)
    this.elements.techBadges.innerHTML = project.technologies
      .map(tech => `<span class="tech-badge">${tech}</span>`)
      .join('');
    
    // Compétences (liste)
    this.elements.skillsList.innerHTML = project.skills
      .map(skill => `<li>${skill}</li>`)
      .join('');
    
    // Boutons GitHub et Demo
    const buttonsContainer = this.elements.github.parentElement;
    
    if (project.status === 'en-cours') {
      buttonsContainer.innerHTML = `
        <p style="text-align: center; color: var(--color-text); margin: 0;">
          <em>Projet en cours de finalisation</em>
        </p>
      `;
    } else if (!project.github && !project.demo) {
      buttonsContainer.innerHTML = `
        <p style="text-align: center; color: var(--color-text); margin: 0;">
          <em>Projet en cours de développement - Disponible prochainement</em>
        </p>
      `;
    } else {
      // Afficher les boutons normalement
      if (project.github) {
        this.elements.github.href = project.github;
        this.elements.github.style.display = 'inline-block';
      } else {
        this.elements.github.style.display = 'none';
      }
      
      if (project.demo) {
        this.elements.demo.href = project.demo;
        this.elements.demo.style.display = 'inline-block';
      } else {
        this.elements.demo.style.display = 'none';
      }
    }
  }
  
  // ===== ACCESSIBILITÉ =====
  
  setInitialFocus() {
    // Récupérer tous les éléments focusables
    this.focusableElements = this.modalBox.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (this.focusableElements.length > 0) {
      // Focus sur le bouton fermer
      this.closeBtn.focus();
    }
  }
  
  handleTabKey(e) {
    const firstElement = this.focusableElements[0];
    const lastElement = this.focusableElements[this.focusableElements.length - 1];
    
    // Shift + Tab sur le premier élément : aller au dernier
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    }
    // Tab sur le dernier élément : aller au premier
    else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
  
  announceToScreenReader(message) {
    // Créer une région live pour les annonces
    let announcer = document.getElementById('modal-announcer');
    if (!announcer) {
      announcer = document.createElement('div');
      announcer.id = 'modal-announcer';
      announcer.setAttribute('role', 'status');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.style.position = 'absolute';
      announcer.style.left = '-10000px';
      announcer.style.width = '1px';
      announcer.style.height = '1px';
      announcer.style.overflow = 'hidden';
      document.body.appendChild(announcer);
    }
    
    announcer.textContent = message;
    
    // Nettoyer après 1 seconde
    setTimeout(() => {
      announcer.textContent = '';
    }, 1000);
  }
  
  calculateScrollbarWidth() {
    // Calculer la largeur de la scrollbar pour éviter le jump
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  }
}

// ============= INITIALISATION ============= 
document.addEventListener('DOMContentLoaded', () => {
  // Initialiser le système de modales
  const modalSystem = new Modal();
  
  console.log('✅ Système de modales initialisé');
});