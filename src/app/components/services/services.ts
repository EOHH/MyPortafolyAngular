import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faCode, faDesktop, faMobileAlt, faDatabase, faCloud, faRocket,
  faCheckCircle, faArrowRight, faBriefcase, faCube
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent implements OnInit {

  sectionHeader = {
    tag: 'ÁREAS DE ESPECIALIZACIÓN',
    titleStart: 'Áreas de ',
    titleHighlight: 'especialización',
    subtitle: 'Enfoque estratégico y técnico para crear soluciones digitales de alto impacto.'
  };

  services = [
    {
      id: '01',
      icon: faCode,
      colorClass: 'cyan',
      title: 'Desarrollo Backend',
      description: 'Construcción de APIs robustas, seguras y escalables con alto rendimiento.',
      features: [
        'APIs RESTful & GraphQL',
        'Microservicios',
        'Arquitectura Hexagonal',
        'Autenticación y Autorización',
        'Integración de servicios'
      ]
    },
    {
      id: '02',
      icon: faDesktop,
      colorClass: 'purple',
      title: 'Desarrollo Frontend',
      description: 'Interfaces modernas, responsivas y centradas en la mejor experiencia.',
      features: [
        'Angular & React',
        'TypeScript',
        'UI/UX Moderno',
        'Estado y Gestión de Datos',
        'Consumo de APIs'
      ]
    },
    {
      id: '03',
      icon: faMobileAlt,
      colorClass: 'blue',
      title: 'Desarrollo Mobile',
      description: 'Aplicaciones móviles multiplataforma y nativas con excelente rendimiento.',
      features: [
        'Flutter & Dart',
        'Swift (iOS)',
        'Kotlin (Android)',
        'Consumo de APIs',
        'Almacenamiento Local'
      ]
    },
    {
      id: '04',
      icon: faDatabase,
      colorClass: 'magenta',
      title: 'Bases de Datos',
      description: 'Diseño, optimización y administración de bases de datos eficientes.',
      features: [
        'MySQL',
        'PostgreSQL',
        'SQL Server',
        'MongoDB',
        'Modelado de Datos'
      ]
    },
    {
      id: '05',
      icon: faCloud,
      colorClass: 'green',
      title: 'Cloud & DevOps',
      description: 'Despliegue, automatización y gestión de infraestructura en la nube.',
      features: [
        'Docker',
        'CI/CD (GitHub Actions)',
        'Firebase',
        'Supabase',
        'AWS (Básico)'
      ]
    },
    {
      id: '06',
      icon: faRocket,
      colorClass: 'orange',
      title: 'Calidad & Buenas Prácticas',
      description: 'Código limpio, pruebas y metodologías ágiles para entregar valor constante.',
      features: [
        'Clean Code',
        'Pruebas Unitarias',
        'Documentación',
        'Patrones de Diseño',
        'Metodologías Ágiles'
      ]
    }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(
      faCode, faDesktop, faMobileAlt, faDatabase, faCloud, faRocket,
      faCheckCircle, faArrowRight, faBriefcase, faCube
    );
  }

  ngOnInit(): void {}
}
