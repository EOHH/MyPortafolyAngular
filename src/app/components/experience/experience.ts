import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faMobileAlt, faLandmark, faStore, faBriefcase, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  icon: any;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;

  experiences: ExperienceItem[] = [
    {
      id: 1,
      role: 'Desarrollador Full Stack / Mobile Developer',
      company: 'NeoEval',
      period: '2023 - Presente',
      description: 'Lideré la creación y despliegue de soluciones tecnológicas integrales para el sector educativo.',
      highlights: [
        'Desarrollo de App educativa completa (mobile y web).',
        'Implementación de backend robusto con autenticación segura (JWT).',
        'Despliegue de servicios en Railway.',
        'Publicación exitosa de aplicaciones en Google Play.'
      ],
      icon: faMobileAlt
    },
    {
      id: 2,
      role: 'Desarrollador Full Stack',
      company: 'Municipalidad Distrital de Challabamba',
      period: '2022 - 2023',
      description: 'Responsable de la digitalización y optimización de los procesos internos municipales.',
      highlights: [
        'Desarrollo de módulos utilizando Spring Boot y React.',
        'Más del +40% de mejora en rendimiento de sistemas críticos.',
        'Optimización avanzada de consultas SQL.',
        'Mejora sustancial en la experiencia de usuario (UX/UI) de los empleados.'
      ],
      icon: faLandmark
    },
    {
      id: 3,
      role: 'Desarrollador Full Stack Freelance',
      company: 'Ediciones Tio Sam',
      period: '2021 - 2022',
      description: 'Diseño e implementación de plataformas de comercio electrónico desde cero.',
      highlights: [
        'Desarrollo de E-commerce interactivo y escalable.',
        'Integración de sistemas de autenticación y autorización.',
        'Gestión de base de datos de productos y pedidos.',
        'Diseño responsivo para maximizar ventas en dispositivos móviles.'
      ],
      icon: faStore
    }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(faMobileAlt, faLandmark, faStore, faBriefcase, faCheckCircle);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Opcionalmente puedes dejar de observar una vez que es visible
          // observer.unobserve(entry.target);
        }
      });
    }, options);

    this.timelineItems.forEach(item => {
      observer.observe(item.nativeElement);
    });
  }
}
