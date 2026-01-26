// src/app/components/about/about.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Importa los íconos sólidos que usarás en esta sección
import {
  faUser,
  faCode,
  faLightbulb,
  faHandshake,
  faAward,
  faGraduationCap,
  faBriefcase,
  faCheckCircle,
  faLaptopCode,
  faFileAlt,
  faFolderOpen,
  faTasks,
  faCalendarAlt,
  faEnvelopeOpenText,
  faComments,
  faUsers,
  faTools,
  faKeyboard,
  faChartLine,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent implements OnInit {

  // Información personal y profesional
  aboutMe = {
    title: 'Sobre Mí',
    subtitle: 'Conoce mi trayectoria y lo que me impulsa',
    introduction: `Soy Edilson Huaman, un apasionado Diseñador y Desarrollador de Software Full-Stack con una sólida formación en TECSUP y experiencia en la creación de soluciones digitales eficientes. Mi enfoque se centra en transformar ideas en productos funcionales, con un código limpio y una experiencia de usuario intuitiva.`,
    philosophy: `Me destaco por mi capacidad para liderar proyectos y mi compromiso con la mejora continua. Mi objetivo es aportar valor a través de la tecnología, optimizando procesos y generando resultados tangibles.`,
    profileImage: 'assets/img/about-profile.jpg' // Asegúrate de tener una imagen para esta sección
  };

  // Logros destacados
  achievements = [
    {
      icon: faAward,
      title: 'Mejor Proyecto de Desarrollo de Software (2023)',
      description: 'Galardonado en TECSUP por un proyecto innovador.',
    },
    {
      icon: faChartLine,
      title: 'Incremento de Retención de Usuarios',
      description: 'Lideré el desarrollo de una aplicación web que incrementó la retención de usuarios en un 20%.',
    },
    {
      icon: faCheckCircle,
      title: 'Mejora en Procesos Internos',
      description: 'Reconocimiento por actualización y depuración de base de datos en Editorial Santillana, generando informes más precisos y ágiles.',
    },
  ];

  // Habilidades técnicas (puedes ajustar el porcentaje o el nivel)
  technicalSkills = [
    { name: 'Diseño y Desarrollo de Software', level: 90, icon: faLaptopCode },
    { name: 'Gestión de Archivos Digitales (Git)', level: 85, icon: faFolderOpen },
    { name: 'Bases de Datos', level: 80, icon: faDatabase },
    { name: 'Herramientas Ofimáticas (MS Office, Google Workspace)', level: 95, icon: faFileAlt },
    { name: 'CRM Básico', level: 70, icon: faTools },
  ];

  // Habilidades blandas
  softSkills = [
    { name: 'Comunicación Efectiva', icon: faComments },
    { name: 'Trabajo en Equipo', icon: faUsers },
    { name: 'Organización y Gestión', icon: faTasks },
    { name: 'Resolución de Problemas', icon: faLightbulb },
    { name: 'Digitación Rápida y Precisa', icon: faKeyboard }
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    // Añade todos los íconos que usarás en esta sección a la librería
    this.faLibrary.addIcons(
      faUser, faCode, faLightbulb, faHandshake, faAward, faGraduationCap,
      faBriefcase, faCheckCircle, faLaptopCode, faFileAlt, faFolderOpen,
      faTasks, faCalendarAlt, faEnvelopeOpenText, faComments, faUsers,
      faTools, faKeyboard, faChartLine, faDatabase
    );
  }

  ngOnInit(): void {}
}
