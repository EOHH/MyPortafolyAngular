// src/app/components/portfolio/portfolio.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Importa los íconos sólidos que usarás para los proyectos (ej. enlaces, tecnologías)
import {
  faLink,
  faCode, // Para Vite, Spring Boot, Laravel
  faLaptopCode,
  faMobileAlt,
  faDatabase, // Para MySQL, SQL Server
  faCloud,
  faUsers,
  faPaw, // Para Abrazo Peludo
  faStore, // Para TecTrade
  faExchangeAlt, // Para Figuritas Express
  faBuilding, // Para RRHH
  faTools,
  faChartLine,
  faShieldAlt,
  faComments // Para NLP
} from '@fortawesome/free-solid-svg-icons';

// Importa los íconos de marcas
import {
  faAngular,
  faReact,
  faNodeJs,
  faPython,
  faHtml5,
  faCss3Alt,
  faJs,
  faJava, // Para Spring Boot
  faPhp, // Para Laravel
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

  projects = [
    {
      id: 'figuritas-express',
      image: 'https://placehold.co/600x400/FF6347/FFFFFF?text=Figuritas+Express', // Placeholder
      title: 'Figuritas Express',
      date: 'Enero 2024 - Marzo 2024', // Fecha agregada
      description: 'Sistema integral para el comercio seguro de figuritas de anime y coleccionables, optimizando transacciones y gestión de inventario.',
      technologies: [
        { name: 'React', icon: faReact },
        { name: 'Spring Boot', icon: faJava }, // Usamos faJava para Spring Boot (Java)
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Vite', icon: faCode }, // Icono de código para Vite
        { name: 'MySQL', icon: faDatabase },
        { name: 'SQL Server', icon: faDatabase }
      ],
      liveLink: '#', // Reemplazar con enlace real
      githubLink: '#' // Reemplazar con enlace real
    },
    {
      id: 'tectrade-ecommerce',
      image: 'https://placehold.co/600x400/1a1a2e/FFFFFF?text=TecTrade+Ecommerce', // Placeholder
      title: 'TecTrade: Tienda Online',
      date: 'Abril 2024 - Junio 2024', // Fecha agregada
      description: 'Plataforma de comercio electrónico con catálogo de productos, carrito de compras, pasarela de pago y panel de administración.',
      technologies: [
        { name: 'React', icon: faReact },
        { name: 'Spring Boot', icon: faJava }, // Usamos faJava para Spring Boot (Java)
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Vite', icon: faCode }, // Icono de código para Vite
        { name: 'MySQL', icon: faDatabase },
        { name: 'SQL Server', icon: faDatabase }
      ],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 'abrazo-peludo',
      image: 'https://placehold.co/600x400/FF8C69/FFFFFF?text=Abrazo+Peludo', // Placeholder
      title: 'Abrazo Peludo',
      date: 'Julio 2023 - Septiembre 2023', // Fecha agregada
      description: 'Aplicación para facilitar la adopción de mascotas, conectando refugios con potenciales adoptantes y gestionando procesos.',
      technologies: [
        { name: 'Laravel', icon: faPhp }, // Usamos faPhp para Laravel (PHP)
        { name: 'MySQL', icon: faDatabase },
        { name: 'SQL Server', icon: faDatabase },
        { name: 'Mobile-first', icon: faMobileAlt }
      ],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 'rrhh-system',
      image: 'https://placehold.co/600x400/3a3a5a/FFFFFF?text=Sistema+RRHH', // Placeholder
      title: 'Sistema de Gestión RRHH',
      date: 'Octubre 2023 - Diciembre 2023', // Fecha agregada
      description: 'Desarrollo de un sistema interno para la oficina de Recursos Humanos, optimizando la gestión de pagos en planillas y administración de personal.',
      technologies: [
        { name: 'Java', icon: faJava },
        { name: 'Spring Boot', icon: faJava },
        { name: 'MySQL', icon: faDatabase },
        { name: 'SQL Server', icon: faDatabase },
        { name: 'Seguridad', icon: faShieldAlt }
      ],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 'iot-dashboard', // Proyecto inventado
      image: 'https://placehold.co/600x400/FF6347/FFFFFF?text=IoT+Dashboard', // Placeholder
      title: 'Dashboard de Monitoreo IoT',
      date: 'Noviembre 2024 - Diciembre 2024', // Fecha inventada
      description: 'Panel de control en tiempo real para visualizar datos de sensores IoT y gestionar dispositivos conectados.',
      technologies: [
        { name: 'React', icon: faReact },
        { name: 'Node.js', icon: faNodeJs },
        { name: 'MQTT', icon: faLink },
        { name: 'Data Viz', icon: faChartLine }
      ],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 'ai-chatbot', // Proyecto inventado
      image: 'https://placehold.co/600x400/1a1a2e/FFFFFF?text=AI+Chatbot', // Placeholder
      title: 'Asistente Virtual con IA',
      date: 'Enero 2025 - Febrero 2025', // Fecha inventada
      description: 'Implementación de un chatbot inteligente para atención al cliente y soporte automatizado, utilizando procesamiento de lenguaje natural.',
      technologies: [
        { name: 'Python', icon: faPython },
        { name: 'TensorFlow', icon: faCode },
        { name: 'NLP', icon: faComments },
        { name: 'REST API', icon: faLink }
      ],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    // Añade todos los íconos que usarás en esta sección a la librería
    this.faLibrary.addIcons(
      faLink, faCode, faLaptopCode, faMobileAlt, faDatabase,
      faCloud, faUsers, faPaw, faStore, faExchangeAlt, faBuilding,
      faTools, faChartLine, faShieldAlt, faComments,

      faAngular, faReact, faNodeJs, faPython, faHtml5, faCss3Alt,
      faJs, faJava, faPhp, faAws, faGoogle, faDocker, faWordpress, faGithub
    );
  }

  ngOnInit(): void {}
}
