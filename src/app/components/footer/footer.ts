import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faArrowUp, faEnvelope, faHome, faUser, faCode, faBriefcase, faFolderOpen,
  faLaptopCode, faServer, faDesktop, faMobileAlt, faCloud, faPhone, faMapMarkerAlt, faArrowRight, faPaperPlane, faQuoteLeft, faQuoteRight
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent implements OnInit {
  currentYear: number;

  developerInfo = {
    name: 'Edilson',
    lastName: 'dev',
    role: 'Desarrollador Full Stack apasionado por construir aplicaciones escalables, seguras y de alto rendimiento que generan impacto real en los negocios.'
  };

  navLinks: { icon: IconProp, url: string, name: string }[] = [
    { icon: ['fas', 'home'], url: '#home', name: 'Inicio' },
    { icon: ['fas', 'user'], url: '#about', name: 'Sobre mí' },
    { icon: ['fas', 'code'], url: '#tech', name: 'Tech' },
    { icon: ['fas', 'briefcase'], url: '#experience', name: 'Experiencia' },
    { icon: ['fas', 'folder-open'], url: '#portfolio', name: 'Proyectos' },
    { icon: ['fas', 'envelope'], url: '#contact', name: 'Contacto' }
  ];

  serviceLinks: { icon: IconProp, name: string }[] = [
    { icon: ['fas', 'laptop-code'], name: 'Desarrollo Full Stack' },
    { icon: ['fas', 'server'], name: 'Desarrollo Backend' },
    { icon: ['fas', 'desktop'], name: 'Desarrollo Frontend' },
    { icon: ['fas', 'mobile-alt'], name: 'Desarrollo Mobile' },
    { icon: ['fas', 'cloud'], name: 'Cloud & DevOps' }
  ];

  contactInfo: { icon: IconProp, text: string }[] = [
    { icon: ['fas', 'envelope'], text: 'edilsonhuaman44@gmail.com' },
    { icon: ['fas', 'phone'], text: '+51 975 991 831' },
    { icon: ['fas', 'map-marker-alt'], text: 'San Martin de Porres, Lima, Perú' }
  ];

  socialLinks: { icon: IconProp, url: string, name: string }[] = [
    { icon: ['fab', 'github'], url: 'https://github.com/EOHH', name: 'GitHub' },
    { icon: ['fab', 'linkedin-in'], url: 'https://linkedin.com/in/edilson-oswaldo-huaman-huanca', name: 'LinkedIn' },
    { icon: ['fas', 'envelope'], url: 'mailto:edilsonhuaman44@gmail.com', name: 'Email' },
    { icon: ['fas', 'paper-plane'], url: '#contact', name: 'Mensaje' }
  ];

  isScrolled: boolean = false;

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.currentYear = new Date().getFullYear();

    this.faLibrary.addIcons(
      faArrowUp, faEnvelope, faGithub, faLinkedinIn, faHome, faUser, faCode, faBriefcase, faFolderOpen,
      faLaptopCode, faServer, faDesktop, faMobileAlt, faCloud, faPhone, faMapMarkerAlt, faArrowRight, faPaperPlane, faQuoteLeft, faQuoteRight
    );
  }

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}