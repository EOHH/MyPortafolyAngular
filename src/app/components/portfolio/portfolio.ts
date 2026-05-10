// src/app/components/portfolio/portfolio.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faLink,
  faCode,
  faLaptopCode,
  faMobileAlt,
  faDatabase,
  faCloud,
  faUsers,
  faPaw,
  faStore,
  faExchangeAlt,
  faBuilding,
  faTools,
  faChartLine,
  faShieldAlt,
  faComments
} from '@fortawesome/free-solid-svg-icons';

import {
  faAngular,
  faReact,
  faNodeJs,
  faPython,
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faPhp,
  faAws,
  faGoogle,
  faDocker,
  faWordpress,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioComponent implements OnInit {

  sectionHeader = {
    title: 'Mis Proyectos',
    subtitle: 'Una muestra de mi trabajo y soluciones innovadoras'
  };

  filters = ['Todos', 'Spring Boot', 'React', 'Node.js', 'Flutter'];
  activeFilter = 'Todos';

  projects = [
    {
      id: 'figuritas-express',
      image: 'https://placehold.co/600x400/FF6347/FFFFFF?text=Figuritas+Express',
      title: 'Figuritas Express',
      date: 'Enero 2024 - Marzo 2024',
      description: 'Sistema integral para el comercio seguro de figuritas de anime y coleccionables, optimizando transacciones y gestión de inventario.',
      technologies: [
        { name: 'React', icon: faReact },
        { name: 'Spring Boot', icon: faJava },
        { name: 'Node.js', icon: faNodeJs },
        { name: 'AWS', icon: faAws }
      ],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 'tectrade-ecommerce',
      image: 'https://placehold.co/600x400/1a1a2e/FFFFFF?text=TecTrade+Ecommerce',
      title: 'TecTrade: Tienda Online',
      date: 'Abril 2024 - Junio 2024',
      description: 'Plataforma de comercio electrónico con catálogo de productos, carrito de compras, pasarela de pago y panel de administración.',
      technologies: [
        { name: 'React', icon: faReact },
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Docker', icon: faDocker },
        { name: 'JWT', icon: faShieldAlt }
      ],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 'abrazo-peludo',
      image: 'https://placehold.co/600x400/FF8C69/FFFFFF?text=Abrazo+Peludo',
      title: 'Abrazo Peludo',
      date: 'Julio 2023 - Septiembre 2023',
      description: 'Aplicación móvil multiplataforma para facilitar la adopción de mascotas, conectando refugios con adoptantes.',
      technologies: [
        { name: 'Flutter', icon: faMobileAlt },
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Firebase', icon: faCloud }
      ],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 'rrhh-system',
      image: 'https://placehold.co/600x400/3a3a5a/FFFFFF?text=Sistema+RRHH',
      title: 'Sistema de Gestión RRHH',
      date: 'Octubre 2023 - Diciembre 2023',
      description: 'Desarrollo de un sistema interno para la oficina de Recursos Humanos, optimizando la gestión de pagos en planillas y administración de personal.',
      technologies: [
        { name: 'Spring Boot', icon: faJava },
        { name: 'Angular', icon: faAngular },
        { name: 'MySQL', icon: faDatabase }
      ],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(
      faLink, faCode, faLaptopCode, faMobileAlt, faDatabase,
      faCloud, faUsers, faPaw, faStore, faExchangeAlt, faBuilding,
      faTools, faChartLine, faShieldAlt, faComments,
      faAngular, faReact, faNodeJs, faPython, faHtml5, faCss3Alt,
      faJs, faJava, faPhp, faAws, faGoogle, faDocker, faWordpress, faGithub
    );
  }

  ngOnInit(): void {}

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  get filteredProjects() {
    if (this.activeFilter === 'Todos') {
      return this.projects;
    }
    return this.projects.filter(project => 
      project.technologies.some(tech => tech.name === this.activeFilter)
    );
  }
}
