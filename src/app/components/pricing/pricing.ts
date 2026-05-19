import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faCheckCircle, faRocket, faCode, faArrowRight, faShieldAlt, faLock, faBolt, faCloud, faHeadset, faStar
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class PricingComponent implements OnInit {

  sectionHeader = {
    tag: 'PLANES FLEXIBLES',
    title: 'Soluciones a medida para',
    titleHighlight: 'cada necesidad',
    subtitle: 'Elige el plan que mejor se adapte a tu proyecto.\nCalidad, rendimiento y escalabilidad garantizados.'
  };

  pricingPlans: {
    name: string,
    price: string,
    period: string,
    description: string,
    icon: IconProp,
    features: { text: string }[],
    isRecommended: boolean,
    badgeText?: string,
    buttonText: string
  }[] = [
    {
      name: 'BÁSICO',
      price: '299',
      period: 'Desde',
      description: 'Ideal para <span class="highlight-cyan">proyectos simples</span>',
      icon: ['fas', 'rocket'],
      features: [
        { text: 'Landing Page / Sitio Web' },
        { text: 'Diseño responsivo' },
        { text: 'Hasta 5 secciones' },
        { text: 'Formulario de contacto' },
        { text: 'Entrega en 7 días' }
      ],
      isRecommended: false,
      buttonText: 'Solicitar este plan'
    },
    {
      name: 'PROFESIONAL',
      price: '799',
      period: 'Desde',
      description: 'Para <span class="highlight-purple">aplicaciones web</span> completas',
      icon: ['fas', 'code'],
      features: [
        { text: 'Aplicación Full Stack' },
        { text: 'Frontend + Backend' },
        { text: 'Base de datos incluida' },
        { text: 'Autenticación segura (JWT)' },
        { text: 'Hasta 3 integraciones externas' },
        { text: 'Entrega en 21 días' },
        { text: 'Soporte post-entrega (15 días)' }
      ],
      isRecommended: true,
      badgeText: 'MÁS POPULAR',
      buttonText: 'Solicitar este plan'
    },
    {
      name: 'AVANZADO',
      price: '1499',
      period: 'Desde',
      description: 'Para sistemas <span class="highlight-cyan">empresariales</span>',
      icon: ['fas', 'rocket'],
      features: [
        { text: 'Sistema completo a medida' },
        { text: 'Arquitectura escalable' },
        { text: 'Cloud Deployment (AWS / GCP)' },
        { text: 'CI/CD y DevOps' },
        { text: 'Integraciones ilimitadas' },
        { text: 'Soporte premium (30 días)' },
        { text: 'Entrega en 30+ días' }
      ],
      isRecommended: false,
      buttonText: 'Solicitar este plan'
    }
  ];

  valueProps: { icon: IconProp, title: string, desc: string }[] = [
    { icon: ['fas', 'shield-alt'], title: 'Código limpio', desc: 'Buenas prácticas y mantenible' },
    { icon: ['fas', 'lock'], title: 'Seguridad', desc: 'Autenticación y datos protegidos' },
    { icon: ['fas', 'bolt'], title: 'Rendimiento', desc: 'Apps rápidas y optimizadas' },
    { icon: ['fas', 'cloud'], title: 'Escalabilidad', desc: 'Soluciones que crecen contigo' },
    { icon: ['fas', 'headset'], title: 'Soporte', desc: 'Acompañamiento dedicado' }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(
      faCheckCircle, faRocket, faCode, faArrowRight, faShieldAlt, faLock, faBolt, faCloud, faHeadset, faStar
    );
  }

  ngOnInit(): void {}
}
