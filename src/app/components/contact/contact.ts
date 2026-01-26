// src/app/components/contact/contact.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel en el formulario
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Importa los íconos sólidos y de marcas que usarás en esta sección
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faPaperPlane, // Para el botón de enviar
  faUser, // Para el campo de nombre
  faTag // Para el campo de asunto
} from '@fortawesome/free-solid-svg-icons';

import {
  faLinkedinIn,
  faGithub,
  faWhatsapp // Para enlace de WhatsApp
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Importa FormsModule aquí
    FontAwesomeModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {

  sectionHeader = {
    title: 'Contacto',
    subtitle: 'Hablemos de tu próximo proyecto'
  };

  contactInfo = {
    location: 'Challabamba, Cusco, Perú',
    phone: '+51 975 991 831',
    email: 'edilsonhuaman44@gmail.com',
    whatsappLink: 'https://wa.me/51975991831' // Enlace directo a WhatsApp
  };

  socialLinks = [
    { icon: faGithub, url: 'https://github.com/EOHH', name: 'GitHub' },
    { icon: faLinkedinIn, url: 'https://linkedin.com/in/edilson-oswaldo-huaman-huanca-a25600363', name: 'LinkedIn' },
    { icon: faWhatsapp, url: 'https://wa.me/51975991831', name: 'WhatsApp' },
  ];

  // Modelo para el formulario de contacto
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    // Añade todos los íconos que usarás en esta sección a la librería
    this.faLibrary.addIcons(
      faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane, faUser, faTag,
      faLinkedinIn, faGithub, faWhatsapp
    );
  }

  ngOnInit(): void {}

  // Función para manejar el envío del formulario
  onSubmit() {
    // Aquí iría la lógica para enviar el formulario.
    // En un proyecto real, esto implicaría hacer una solicitud HTTP a un backend
    // (ej. un servicio de correo electrónico, una API de contacto).
    console.log('Formulario enviado:', this.contactForm);

    // Por ahora, solo mostraremos una alerta simple (en un entorno real, usarías un modal)
    alert('¡Mensaje enviado! Te responderé pronto.');

    // Opcional: Resetear el formulario después del envío
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
