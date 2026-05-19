import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faMapMarkerAlt,
  faEnvelope,
  faPaperPlane,
  faCheck,
  faPhone,
  faArrowRight,
  faCommentDots,
  faQuoteLeft,
  faUser,
  faFileAlt,
  faPen,
  faLock
} from '@fortawesome/free-solid-svg-icons';

import {
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  isSuccess = false;

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(
      faMapMarkerAlt, faEnvelope, faPaperPlane, faCheck,
      faLinkedinIn, faGithub, faPhone, faArrowRight, faCommentDots,
      faQuoteLeft, faUser, faFileAlt, faPen, faLock
    );
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.isSubmitting = true;
    
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSuccess = true;
      form.resetForm();

      setTimeout(() => {
        this.isSuccess = false;
      }, 5000);
    }, 1500);
  }
}
