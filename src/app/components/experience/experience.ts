import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faMobileAlt, faLandmark, faStore, faBriefcase, faCheckCircle, faChartLine, faServer,
  faCode, faUsers, faRocket, faTrophy, faStar, faGraduationCap, faMapMarkerAlt, faGlobe,
  faDatabase, faUser, faArrowRight
} from '@fortawesome/free-solid-svg-icons';

import {
  faReact, faJava, faNodeJs, faAws, faDocker, faGooglePlay, faAngular, faJs, faPython
} from '@fortawesome/free-brands-svg-icons';

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  companyIconText: string;
  period: string;
  duration: string;
  description: string;
  technologies: { name: string; icon?: any; textIcon?: string }[];
  impact: string[];
  icon: any;
  colorClass: string;
  playStoreUrl?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent implements OnInit {

  experiences: ExperienceItem[] = [
    {
      id: 1,
      role: 'Desarrollador Full Stack / Mobile',
      company: 'NeoEval',
      companyIconText: 'NE',
      period: 'Oct 2025 - Dic 2025',
      duration: '3 meses',
      description: 'Desarrollo de aplicaciones móviles y web para la plataforma educativa NeoEval. Lidero el desarrollo del backend, despliegue en nube y mantenimiento de apps móviles.',
      technologies: [
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Cloud/Railway', icon: faServer },
        { name: 'Google Play', icon: faGooglePlay },
        { name: 'JWT', textIcon: 'JWT' }
      ],
      impact: [
        'App educativa completa en producción.',
        'Implementación de autenticación con JWT.',
        'Despliegue automatizado en Railway.',
        'Mantenimiento continuo en Google Play.'
      ],
      icon: faMobileAlt,
      colorClass: 'cyan',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gottidev.neoeval'
    },
    {
      id: 2,
      role: 'Desarrollador Full Stack',
      company: 'Muni. Challabamba',
      companyIconText: 'MC',
      period: 'Ago 2022 - Dic 2023',
      duration: '1 año 5 meses',
      description: 'Desarrollo de módulos core, integración de servicios y optimización de base de datos relacionales para sistemas de gestión interna.',
      technologies: [
        { name: 'Spring Boot', icon: faJava },
        { name: 'React', icon: faReact },
        { name: 'SQL', icon: faServer }
      ],
      impact: [
        '+40% mejora de rendimiento en procesos.',
        'Optimización de consultas SQL.',
        'Desarrollo de módulos modernos.',
        'Sistema operando en producción.'
      ],
      icon: faLandmark,
      colorClass: 'purple'
    },
    {
      id: 3,
      role: 'Dev Full Stack Freelance',
      company: 'Ediciones Tío Sam',
      companyIconText: 'TS',
      period: 'Feb 2021 - Jul 2022',
      duration: '1 año 6 meses',
      description: 'Desarrollo de plataforma de comercio electrónico B2C enfocada en buenas prácticas, UI/UX fluida y pasarela de pagos integrada.',
      technologies: [
        { name: 'React', icon: faReact },
        { name: 'Node.js', icon: faNodeJs },
        { name: 'AWS', icon: faAws }
      ],
      impact: [
        'Creación de un E-commerce completo.',
        'Implementación de pasarela de pagos.',
        'Incremento de conversión por UI/UX.',
        'Arquitectura en AWS.'
      ],
      icon: faStore,
      colorClass: 'cyan'
    }
  ];

  stats = [
    { value: '3+', label: 'Años de experiencia', icon: faBriefcase },
    { value: '15+', label: 'Proyectos completados', icon: faCode },
    { value: '5+', label: 'Equipos colaborados', icon: faUsers },
    { value: '10K+', label: 'Usuarios impactados', icon: faRocket }
  ];

  topTechs = [
    { icon: faJava, color: '#f89820' },
    { textIcon: 'Sp', color: '#6db33f' },
    { icon: faAngular, color: '#dd0031' },
    { icon: faReact, color: '#61dafb' },
    { icon: faNodeJs, color: '#68a063' },
    { icon: faJs, color: '#f7df1e' },
    { textIcon: 'TS', color: '#3178c6' },
    { icon: faDatabase, color: '#336791' },
    { icon: faAws, color: '#ff9900' },
    { icon: faDocker, color: '#2496ed' }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(
      faMobileAlt, faLandmark, faStore, faBriefcase, faCheckCircle, faChartLine, faServer, faCode, faUsers, faRocket, faTrophy, faStar, faGraduationCap, faMapMarkerAlt, faGlobe, faDatabase, faUser, faArrowRight,
      faReact, faJava, faNodeJs, faAws, faDocker, faGooglePlay, faAngular, faJs, faPython
    );
  }

  ngOnInit(): void {}

  openUrl(url?: string) {
    if (!url) return;
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      // Fallback if popup blocker intercepts or if running in restricted iframe
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = url;
      }
    } catch (e) {
      window.location.href = url;
    }
  }
}
