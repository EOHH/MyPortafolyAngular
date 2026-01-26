import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent implements OnInit {

  name = 'Edilson Huaman';
  title = 'Desarrollador de Software Full-Stack';
  tagline = 'Transformo ideas en soluciones digitales eficientes, con código limpio, enfoque modular y experiencia sólida en diseño y desarrollo de interfaces intuitivas.';

  // **NUEVO**: URL de tu imagen de perfil para el Hero
  profileImageUrl = 'assets/img/profile-hero.jpg'; // Asegúrate de tener esta imagen en src/assets/

  socialLinks = [
    { icon: faGithub, url: 'https://github.com/EOHH', name: 'GitHub' },
    { icon: faLinkedinIn, url: 'https://linkedin.com/in/edilson-oswaldo-huaman-huanca-a25600363', name: 'LinkedIn' },
    { icon: faEnvelope, url: 'mailto:edilsonhuaman44@gmail.com', name: 'Email' },
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(
      faGithub,
      faLinkedinIn,
      faEnvelope
    );
  }

  ngOnInit(): void {}

  viewProjects() {
    console.log('Ver Proyectos clicado');
    // window.location.href = '#portfolio'; // Descomentar para scroll a la sección
  }

  downloadCV() {
    console.log('Descargar CV clicado');
    // El 'download' en el HTML ya maneja la descarga
  }
}