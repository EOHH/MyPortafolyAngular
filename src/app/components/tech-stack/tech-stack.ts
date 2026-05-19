import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faServer, faDesktop, faMobileAlt, faDatabase, faWrench, faBolt,
  faLeaf, faCode, faWind, faFire, faPaperPlane, faLaptopCode,
  faRocket, faClock, faUsers, faShieldAlt, faCheckCircle, faUserCheck, faArrowRight, faCodeBranch
} from '@fortawesome/free-solid-svg-icons';

import {
  faJava, faNodeJs, faPhp, faAngular, faReact, faHtml5, faCss3Alt, faJs, 
  faApple, faAndroid, faGitAlt, faGithub, faDocker, faSwift
} from '@fortawesome/free-brands-svg-icons';

export interface TechItem {
  name: string;
  desc: string;
  icon?: any;
  textIcon?: string;
  colorClass: string;
}

export interface TechCategory {
  title: string;
  icon: any;
  items: TechItem[];
  halfWidth?: boolean;
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
export class TechStackComponent implements OnInit {

  categories: TechCategory[] = [
    {
      title: 'BACKEND',
      icon: faServer,
      items: [
        { name: 'Java', desc: 'Lenguaje robusto y escalable', icon: faJava, colorClass: 'c-java' },
        { name: 'Spring Boot', desc: 'Framework para aplicaciones Java', icon: faLeaf, colorClass: 'c-spring' },
        { name: 'Node.js', desc: 'Entorno de ejecución para JavaScript', icon: faNodeJs, colorClass: 'c-node' },
        { name: 'Express.js', desc: 'Framework web rápido para Node.js', textIcon: 'eX', colorClass: 'c-express' },
        { name: 'PHP', desc: 'Lenguaje del lado del servidor', icon: faPhp, colorClass: 'c-php' },
        { name: 'MySQL', desc: 'Base de datos relacional', icon: faDatabase, colorClass: 'c-mysql' },
        { name: 'PostgreSQL', desc: 'Base de datos relacional avanzada', icon: faDatabase, colorClass: 'c-postgres' },
        { name: 'SQL Server', desc: 'Sistema de gestión de bases de datos', icon: faDatabase, colorClass: 'c-sqlserver' }
      ]
    },
    {
      title: 'FRONTEND',
      icon: faDesktop,
      items: [
        { name: 'Angular', desc: 'Framework completo para aplicaciones web', icon: faAngular, colorClass: 'c-angular' },
        { name: 'React', desc: 'Librería para construir interfaces de usuario', icon: faReact, colorClass: 'c-react' },
        { name: 'HTML5', desc: 'Estructura semántica de alto nivel', icon: faHtml5, colorClass: 'c-html' },
        { name: 'CSS3', desc: 'Estilos modernos y diseño responsivo', icon: faCss3Alt, colorClass: 'c-css' },
        { name: 'JavaScript', desc: 'Lenguaje dinámico y versátil', icon: faJs, colorClass: 'c-js' },
        { name: 'TypeScript', desc: 'Superset de JavaScript con tipado estático', textIcon: 'TS', colorClass: 'c-ts' },
        { name: 'Tailwind CSS', desc: 'Framework CSS utilitario', icon: faWind, colorClass: 'c-tailwind' }
      ]
    },
    {
      title: 'MOBILE',
      icon: faMobileAlt,
      halfWidth: true,
      items: [
        { name: 'Flutter', desc: 'Framework para crear apps multiplataforma', icon: faMobileAlt, colorClass: 'c-flutter' },
        { name: 'Dart', desc: 'Lenguaje optimizado para Flutter', icon: faCode, colorClass: 'c-dart' },
        { name: 'Swift', desc: 'Lenguaje para desarrollo iOS y macOS', icon: faSwift, colorClass: 'c-swift' },
        { name: 'Kotlin', desc: 'Lenguaje para desarrollo Android moderno', icon: faAndroid, colorClass: 'c-kotlin' }
      ]
    },
    {
      title: 'BASES DE DATOS & BACKEND AS A SERVICE',
      icon: faCodeBranch, 
      halfWidth: true,
      items: [
        { name: 'MongoDB', desc: 'Base de datos NoSQL orientada a documentos', icon: faLeaf, colorClass: 'c-mongo' },
        { name: 'Supabase', desc: 'Backend as a Service open source', icon: faBolt, colorClass: 'c-supabase' },
        { name: 'Firebase', desc: 'Plataforma de desarrollo de Google', icon: faFire, colorClass: 'c-firebase' }
      ]
    },
    {
      title: 'HERRAMIENTAS & OTROS',
      icon: faWrench,
      items: [
        { name: 'Git', desc: 'Control de versiones distribuido', icon: faGitAlt, colorClass: 'c-git' },
        { name: 'GitHub', desc: 'Plataforma para alojar repositorios', icon: faGithub, colorClass: 'c-github' },
        { name: 'Docker', desc: 'Contenerización de aplicaciones', icon: faDocker, colorClass: 'c-docker' },
        { name: 'Postman', desc: 'Pruebas y desarrollo de APIs', icon: faRocket, colorClass: 'c-postman' },
        { name: 'Swagger', desc: 'Documentación de APIs', textIcon: '{}', colorClass: 'c-swagger' },
        { name: 'VS Code', desc: 'Editor de código potente y ligero', icon: faLaptopCode, colorClass: 'c-vscode' }
      ]
    }
  ];

  stats = [
    { value: '+20', label: 'Tecnologías dominadas', icon: faRocket, color: 'blue' },
    { value: '+3', label: 'Años de experiencia', icon: faClock, color: 'cyan' },
    { value: '+20', label: 'Proyectos completados', icon: faCode, color: 'purple' },
    { value: '100%', label: 'Comprometido con la calidad', icon: faUserCheck, color: 'purple-light' },
    { value: '', label: 'Soluciones Escalables, seguras y de alto impacto', icon: faShieldAlt, color: 'cyan-light' }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(
      faServer, faDesktop, faMobileAlt, faDatabase, faWrench, faBolt, faLeaf, faCode, faWind, faFire, faPaperPlane, faLaptopCode, faRocket, faClock, faUsers, faShieldAlt, faCheckCircle, faUserCheck, faArrowRight, faCodeBranch,
      faJava, faNodeJs, faPhp, faAngular, faReact, faHtml5, faCss3Alt, faJs, faApple, faAndroid, faGitAlt, faGithub, faDocker, faSwift
    );
  }

  ngOnInit(): void {}
}
