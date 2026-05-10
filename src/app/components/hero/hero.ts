import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faEnvelope, faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
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
  title = 'Desarrollador Full Stack';
  specialization = 'Java (Spring Boot) | React | Node.js | Flutter';
  tagline = 'Construyendo experiencias digitales asombrosas y arquitecturas robustas desde cero.';

  profileImageUrl = 'assets/img/profile-hero.jpg'; 
  cvLink = 'assets/CV_EDILSON_HUAMAN_2026.pdf';

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
      faEnvelope,
      faArrowRight,
      faDownload
    );
  }

  ngOnInit(): void {}

  // Efecto magnético para el botón principal
  magneticMove(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    
    // Movimiento sutil basado en el centro del botón
    target.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }

  magneticLeave(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    // Restaurar a la posición original
    target.style.transform = 'translate(0px, 0px)';
  }
}