// src/app/components/services/services.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Importa los íconos sólidos y de marcas que usarás en esta sección
import {
  faLaptopCode,
  faMobileAlt,
  faDatabase,
  faCloud,
  faCogs,
  faChartLine,
  faHandshake,
  faBug,
  faTools,
  faCodeBranch,
  faServer,
  faGlobe,
  faLightbulb,
  faShieldAlt,
  faRocket
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
  faWordpress,
  faAws,
  faGoogle,
  faDocker
} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent implements OnInit {

  sectionHeader = {
    title: 'Mis Servicios',
    subtitle: 'Soluciones de Desarrollo de Software a tu Medida'
  };

  services = [
    {
      icon: faLaptopCode,
      title: 'Desarrollo Web Full-Stack',
      description: 'Creación de aplicaciones web robustas y escalables, desde el frontend hasta el backend. Experiencia con Angular, React, Node.js y bases de datos.',
      technologies: [
        { name: 'Angular', icon: faAngular },
        { name: 'React', icon: faReact },
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Python', icon: faPython },
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS3', icon: faCss3Alt },
        { name: 'JavaScript', icon: faJs },
        { name: 'SQL/NoSQL', icon: faDatabase }
      ]
    },
    {
      icon: faMobileAlt,
      title: 'Desarrollo de Aplicaciones Móviles',
      description: 'Diseño y desarrollo de aplicaciones nativas o híbridas para iOS y Android, garantizando rendimiento y una excelente experiencia de usuario.',
      technologies: [
        { name: 'React Native', icon: faReact },
        { name: 'Flutter', icon: faMobileAlt }, // Usamos mobile-alt como placeholder para Flutter
        { name: 'Java/Kotlin', icon: faJava }
      ]
    },
    {
      icon: faServer,
      title: 'Desarrollo Backend & APIs',
      description: 'Construcción de lógica de servidor, APIs RESTful y microservicios eficientes para potenciar tus aplicaciones.',
      technologies: [
        { name: 'Node.js (Express)', icon: faNodeJs },
        { name: 'Python (Django/Flask)', icon: faPython },
        { name: 'PHP (Laravel)', icon: faPhp },
        { name: 'SQL/NoSQL', icon: faDatabase }
      ]
    },
    {
      icon: faCloud,
      title: 'Servicios Cloud & DevOps',
      description: 'Implementación y gestión de soluciones en la nube, automatización de despliegues y optimización de infraestructura.',
      technologies: [
        { name: 'AWS', icon: faAws },
        { name: 'Google Cloud', icon: faGoogle },
        { name: 'Docker', icon: faDocker },
        { name: 'CI/CD', icon: faCodeBranch } // Usamos code-branch para CI/CD
      ]
    },
    {
      icon: faChartLine,
      title: 'Consultoría y Optimización',
      description: 'Análisis de rendimiento, optimización de código, mejora de la experiencia de usuario y asesoramiento en estrategias tecnológicas.',
      technologies: [
        { name: 'Auditoría de Código', icon: faBug },
        { name: 'UX/UI Review', icon: faLightbulb },
        { name: 'Estrategia Digital', icon: faHandshake }
      ]
    },
    {
      icon: faShieldAlt,
      title: 'Mantenimiento y Soporte',
      description: 'Soporte continuo, actualizaciones de seguridad, corrección de errores y mejoras para garantizar el funcionamiento óptimo de tus sistemas.',
      technologies: [
        { name: 'Actualizaciones', icon: faTools },
        { name: 'Monitoreo', icon: faChartLine },
        { name: 'Seguridad', icon: faShieldAlt }
      ]
    }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    // Añade todos los íconos que usarás en esta sección a la librería
    this.faLibrary.addIcons(
      faLaptopCode, faMobileAlt, faDatabase, faCloud, faCogs, faChartLine,
      faHandshake, faBug, faTools, faCodeBranch, faServer, faGlobe,
      faLightbulb, faShieldAlt, faRocket, // Íconos sólidos

      faAngular, faReact, faNodeJs, faPython, faHtml5, faCss3Alt,
      faJs, faJava, faPhp, faWordpress, faAws, faGoogle, faDocker // Íconos de marcas
    );
  }

  ngOnInit(): void {}
}
