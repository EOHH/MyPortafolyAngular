import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faArrowUp,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faGithub, // Importa GitHub
  faLinkedinIn // Importa LinkedIn
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent implements OnInit {
  currentYear: number;
  isScrolled: boolean = false;

  galleryImages = [
    { src: 'assets/footer-gallery/img1.jpg', alt: 'Galería 1', link: 'https://instagram.com/tu-usuario' },
    { src: 'assets/footer-gallery/img2.jpg', alt: 'Galería 2', link: 'https://instagram.com/tu-usuario' },
    { src: 'assets/footer-gallery/img3.jpg', alt: 'Galería 3', link: 'https://instagram.com/tu-usuario' },
    { src: 'assets/footer-gallery/img4.jpg', alt: 'Galería 4', link: 'https://instagram.com/tu-usuario' },
    { src: 'assets/footer-gallery/img5.jpg', alt: 'Galería 5', link: 'https://instagram.com/tu-usuario' },
  ];

  contactInfo = [
    { icon: faEnvelope, text: 'edilsonhuaman44@gmail.com', type: 'email', link: 'edilsonhuaman44@gmail.com' },
    { icon: faPhoneAlt, text: '+51 975 991 831', type: 'phone', link: 'tel:+51975991831' },
    { icon: faInstagram, text: '@edilson_pzk', type: 'instagram', link: 'https://www.instagram.com/edilson_pzk/' },
    { icon: faTwitter, text: '@GottiDev', type: 'twitter', link: 'https://twitter.com/antoniolealbalba' },
    { icon: faGithub, text: 'GOTTIDEV', type: 'github', link: 'https://github.com/EOHH' }, // ¡GitHub agregado!
    { icon: faLinkedinIn, text: 'Edilson Oswaldo Huaman Huanca', type: 'linkedin', link: 'https://www.linkedin.com/in/edilson-oswaldo-huaman-huanca-a25600363/' }, // ¡LinkedIn agregado!
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.currentYear = new Date().getFullYear();

    this.faLibrary.addIcons(
      faArrowUp,
      faEnvelope,
      faPhoneAlt,
      faMapMarkerAlt,
      faInstagram,
      faFacebookF,
      faTwitter,
      faGithub, // Asegúrate de que estén aquí en la adición de íconos
      faLinkedinIn
    );
  }

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}