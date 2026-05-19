import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faUser, faCode, faBullseye, faBrain, faUsers, 
  faGraduationCap, faBriefcase, faPaperPlane, faRocket,
  faStar, faQuoteLeft, faDatabase, faMobileAlt, faFire,
  faMapMarkerAlt, faLanguage, faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import {
  faAngular, faReact, faNodeJs, faJava, faAws, faDocker, faGitAlt,
  faHtml5, faCss3Alt, faJs, faGithub, faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent implements OnInit {
  
  focusAreas = [
    { icon: faCode, title: 'Código limpio', description: 'Escribo código limpio, mantenible y escalable.' },
    { icon: faBullseye, title: 'Enfoque en valor', description: 'Construyo soluciones que generan impacto real.' },
    { icon: faBrain, title: 'Aprendizaje constante', description: 'Siempre explorando nuevas tecnologías y mejores prácticas.' },
    { icon: faUsers, title: 'Trabajo en equipo', description: 'Me adapto, comunico y colaboro para lograr grandes resultados.' }
  ];

  timeline = [
    { year: '2020', title: 'Inicio de mi camino', desc: 'Comencé mis estudios en Ingeniería de Sistemas y descubrí mi pasión por el desarrollo de software.', icon: faGraduationCap, color: 'purple' },
    { year: '2021 - 2022', title: 'Primeras experiencias', desc: 'Trabajé en proyectos reales, mejorando mis habilidades en backend y aprendiendo nuevas tecnologías.', icon: faBriefcase, color: 'cyan' },
    { year: '2023 - Actualidad', title: 'Construyendo soluciones', desc: 'Desarrollo aplicaciones escalables y de alto rendimiento para empresas y clientes de diferentes industrias.', icon: faPaperPlane, color: 'purple-light' }
  ];

  techBackend = [
    { name: 'Java', icon: faJava, color: '#f89820' },
    { name: 'Spring Boot', icon: faJava, color: '#6db33f' },
    { name: 'Node.js', icon: faNodeJs, color: '#68a063' },
    { name: 'MySQL', icon: faDatabase, color: '#00758f' },
    { name: 'PostgreSQL', icon: faDatabase, color: '#336791' }
  ];

  techFrontend = [
    { name: 'React', icon: faReact, color: '#61dafb' },
    { name: 'Angular', icon: faAngular, color: '#dd0031' },
    { name: 'HTML5', icon: faHtml5, color: '#e34f26' },
    { name: 'CSS3', icon: faCss3Alt, color: '#1572b6' },
    { name: 'JavaScript', icon: faJs, color: '#f7df1e' }
  ];

  techMobile = [
    { name: 'Flutter', icon: faMobileAlt, color: '#02569b' },
    { name: 'Dart', icon: faCode, color: '#00b4ab' },
    { name: 'Firebase', icon: faFire, color: '#ffca28' },
    { name: 'Git', icon: faGitAlt, color: '#f34f29' },
    { name: 'Docker', icon: faDocker, color: '#2496ed' }
  ];

  stats = [
    { value: '10+', label: 'Proyectos completados', icon: faCode, color: 'purple' },
    { value: '100%', label: 'Comprometido con la calidad', icon: faRocket, color: 'cyan' },
    { value: '3+', label: 'Años de experiencia', icon: faUsers, color: 'purple-light' },
    { value: '20K+', label: 'Usuarios impactados', icon: faStar, color: 'orange' }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(
      faUser, faCode, faBullseye, faBrain, faUsers, faGraduationCap, faBriefcase, faPaperPlane, faRocket, faStar, faQuoteLeft, faDatabase, faMobileAlt, faFire, faMapMarkerAlt, faLanguage, faEnvelope,
      faAngular, faReact, faNodeJs, faJava, faAws, faDocker, faGitAlt, faHtml5, faCss3Alt, faJs, faGithub, faLinkedinIn
    );
  }

  ngOnInit(): void {}
}
