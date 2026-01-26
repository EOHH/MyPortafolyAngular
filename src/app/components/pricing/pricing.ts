// src/app/components/pricing/pricing.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Importa los íconos sólidos que usarás en esta sección
import {
  faCheck,
  faTimes,
  faStar, // Para el plan recomendado
  faEnvelope, // Para el botón de contacto
  faRocket, // Para planes más avanzados
  faCode, // Para desarrollo
  faHeadset // Para soporte
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class PricingComponent implements OnInit {

  sectionHeader = {
    title: 'Mis Planes de Servicio',
    subtitle: 'Encuentra la solución perfecta para tu proyecto'
  };

  pricingPlans = [
    {
      name: 'Plan Básico',
      price: '$500',
      period: 'por proyecto pequeño',
      features: [
        { text: 'Diseño Web Básico (1-3 páginas)', icon: faCheck, available: true },
        { text: 'Diseño Responsivo', icon: faCheck, available: true },
        { text: 'Integración de Contenido', icon: faCheck, available: true },
        { text: 'Soporte Básico (1 mes)', icon: faCheck, available: true },
        { text: 'Optimización SEO Básica', icon: faTimes, available: false },
        { text: 'Integración de Base de Datos', icon: faTimes, available: false },
        { text: 'Funcionalidades Personalizadas', icon: faTimes, available: false },
      ],
      isRecommended: false,
      buttonText: 'Solicitar Presupuesto',
      buttonLink: '#contact'
    },
    {
      name: 'Plan Estándar',
      price: '$1500',
      period: 'por proyecto mediano',
      features: [
        { text: 'Diseño Web Avanzado (hasta 10 páginas)', icon: faCheck, available: true },
        { text: 'Diseño Responsivo Premium', icon: faCheck, available: true },
        { text: 'Integración de Contenido Dinámico', icon: faCheck, available: true },
        { text: 'Soporte Estándar (3 meses)', icon: faCheck, available: true },
        { text: 'Optimización SEO Avanzada', icon: faCheck, available: true },
        { text: 'Integración de Base de Datos (MySQL/SQL Server)', icon: faCheck, available: true },
        { text: 'Panel de Administración Básico', icon: faCheck, available: true },
        { text: 'Funcionalidades Personalizadas', icon: faTimes, available: false },
      ],
      isRecommended: true, // Este es el plan recomendado
      buttonText: '¡Empezar Ahora!',
      buttonLink: '#contact'
    },
    {
      name: 'Plan Premium',
      price: 'Personalizado',
      period: 'por proyecto grande',
      features: [
        { text: 'Desarrollo Web/App a Medida', icon: faCheck, available: true },
        { text: 'Diseño UI/UX Personalizado', icon: faCheck, available: true },
        { text: 'Integración de APIs Complejas', icon: faCheck, available: true },
        { text: 'Soporte Prioritario (6 meses)', icon: faCheck, available: true },
        { text: 'Optimización SEO Completa', icon: faCheck, available: true },
        { text: 'Base de Datos Escalable (MySQL/SQL Server/NoSQL)', icon: faCheck, available: true },
        { text: 'Panel de Administración Avanzado', icon: faCheck, available: true },
        { text: 'Desarrollo de Funcionalidades Únicas', icon: faCheck, available: true },
      ],
      isRecommended: false,
      buttonText: 'Contactar para Presupuesto',
      buttonLink: '#contact'
    }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    // Añade todos los íconos que usarás en esta sección a la librería
    this.faLibrary.addIcons(
      faCheck, faTimes, faStar, faEnvelope, faRocket, faCode, faHeadset
    );
  }

  ngOnInit(): void {}
}
