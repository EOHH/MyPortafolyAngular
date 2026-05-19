import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faLink, faCode, faLaptopCode, faMobileAlt, faDatabase, faCloud, faUsers, 
  faBuilding, faTools, faChartLine, faShieldAlt, faCheckCircle, faExternalLinkAlt, 
  faShoppingCart, faArrowRight, faPaperPlane, faUniversity, faCubes, faRocket, faLayerGroup, faDesktop, faThLarge, faList
} from '@fortawesome/free-solid-svg-icons';

import {
  faAngular, faReact, faNodeJs, faPython, faHtml5, faCss3Alt, faJs, faJava, 
  faPhp, faAws, faDocker, faGithub, faGooglePlay
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioComponent implements OnInit {

  sectionHeader = {
    tag: 'MI TRABAJO',
    title: 'Proyectos que',
    titleHighlight: 'generan impacto',
    subtitle: 'Cada proyecto representa un desafío superado, soluciones escalables y <span class="highlight-cyan">valor real</span> para los usuarios.'
  };

  stats = [
    { icon: ['fas', 'cubes'] as IconProp, value: '10+', label: 'Proyectos completados' },
    { icon: ['fas', 'rocket'] as IconProp, value: '100%', label: 'Proyectos en producción' },
    { icon: ['fas', 'users'] as IconProp, value: '3+', label: 'Años de experiencia' },
    { icon: ['fas', 'code'] as IconProp, value: '20K+', label: 'Usuarios impactados' }
  ];

  filters = [
    { id: 'Todos', label: 'Todos', icon: ['fas', 'layer-group'] as IconProp },
    { id: 'Full Stack', label: 'Full Stack', icon: ['fas', 'database'] as IconProp },
    { id: 'Backend', label: 'Backend', icon: ['fas', 'server'] as IconProp },
    { id: 'Frontend', label: 'Frontend', icon: ['fas', 'desktop'] as IconProp },
    { id: 'Mobile', label: 'Mobile', icon: ['fas', 'mobile-alt'] as IconProp },
    { id: 'Cloud', label: 'Cloud', icon: ['fas', 'cloud'] as IconProp }
  ];
  activeFilter = 'Todos';

  projects = [
    {
      id: 'neoeval',
      image: 'https://placehold.co/800x500/1e293b/ffffff?text=NeoEval+App',
      title: 'NeoEval',
      badge: '⭐ DESTACADO',
      icon: ['fas', 'university'] as IconProp,
      description: 'Aplicación educativa completa para evaluaciones académicas. App publicada en Google Play.',
      categories: ['Mobile', 'Backend', 'Full Stack'],
      technologies: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL', 'Railway'],
      buttons: [
        { label: 'Ver detalles', link: '#', style: 'outline', iconRight: ['fas', 'arrow-right'] as IconProp },
        { label: 'Ver en Google Play', link: '#', style: 'outline', iconLeft: ['fab', 'google-play'] as IconProp, iconRight: ['fas', 'external-link-alt'] as IconProp }
      ]
    },
    {
      id: 'muni-challabamba',
      image: 'https://placehold.co/800x500/0f172a/ffffff?text=Sistema+Municipal',
      title: 'Sistema Municipal',
      icon: ['fas', 'university'] as IconProp,
      description: 'Sistema institucional para la Municipalidad Distrital de Challabamba con <span class="highlight-cyan">+40% de mejora en rendimiento</span>.',
      categories: ['Frontend', 'Backend', 'Full Stack'],
      technologies: ['Spring Boot', 'React', 'MySQL', 'JWT', 'Nginx'],
      buttons: [
        { label: 'Ver detalles', link: '#', style: 'outline', iconRight: ['fas', 'arrow-right'] as IconProp },
        { label: 'Ver código', link: '#', style: 'outline', iconLeft: ['fab', 'github'] as IconProp, iconRight: ['fas', 'external-link-alt'] as IconProp }
      ]
    },
    {
      id: 'tiosam',
      image: 'https://placehold.co/800x500/2d3748/ffffff?text=E-commerce',
      title: 'Ediciones Tío Sam',
      icon: ['fas', 'shopping-cart'] as IconProp,
      description: 'E-commerce completo con gestión de productos, usuarios y pedidos en tiempo real.',
      categories: ['Frontend', 'Backend', 'Full Stack'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      buttons: [
        { label: 'Ver detalles', link: '#', style: 'outline', iconRight: ['fas', 'arrow-right'] as IconProp },
        { label: 'Ver código', link: '#', style: 'outline', iconLeft: ['fab', 'github'] as IconProp, iconRight: ['fas', 'external-link-alt'] as IconProp }
      ]
    }
  ];

  cta = {
    icon: ['fas', 'code'] as IconProp,
    title: '¿Tienes una idea en mente?',
    desc: 'Conversemos sobre tu proyecto y hagámoslo realidad.',
    buttonText: 'Hablemos de tu proyecto',
    buttonLink: '#contact'
  };

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(
      faLink, faCode, faLaptopCode, faMobileAlt, faDatabase, faCloud, faUsers, 
      faBuilding, faTools, faChartLine, faShieldAlt, faCheckCircle, faExternalLinkAlt, 
      faShoppingCart, faArrowRight, faPaperPlane, faUniversity, faCubes, faRocket, faLayerGroup, faDesktop, faThLarge, faList,
      faAngular, faReact, faNodeJs, faPython, faHtml5, faCss3Alt, faJs, faJava, 
      faPhp, faAws, faDocker, faGithub, faGooglePlay
    );
  }

  ngOnInit(): void {}

  setFilter(filterId: string) {
    this.activeFilter = filterId;
  }

  get filteredProjects() {
    if (this.activeFilter === 'Todos') {
      return this.projects;
    }
    return this.projects.filter(project => 
      project.categories.includes(this.activeFilter)
    );
  }
}
