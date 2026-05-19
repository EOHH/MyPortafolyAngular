import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { faEnvelope, faArrowRight, faDownload, faCloud, faMobileAlt, faArrowUp, faMouse } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faJava, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

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

  profileImageUrl = 'assets/img/profile-hero.jpg'; 
  cvLink = 'assets/pdf/CV_Edilson_Huaman_2026.pdf';
  githubLink = 'https://github.com/EOHH';

  techIcons: { icon: IconProp, name: string }[] = [
    { icon: ['fab', 'java'], name: 'Java (Spring Boot)' },
    { icon: ['fab', 'react'], name: 'React' },
    { icon: ['fab', 'node-js'], name: 'Node.js' },
    { icon: ['fas', 'cloud'], name: 'Cloud' },
    { icon: ['fas', 'mobile-alt'], name: 'Flutter' },
  ];

  floatingIcons: { icon: IconProp, class: string, color: string }[] = [
    { icon: ['fab', 'node-js'], class: 'float-icon-1', color: '#68a063' },
    { icon: ['fab', 'react'], class: 'float-icon-2', color: '#61dafb' },
    { icon: ['fab', 'java'], class: 'float-icon-3', color: '#f89820' },
    { icon: ['fas', 'mobile-alt'], class: 'float-icon-4', color: '#54c5f8' },
  ];

  private faLibrary = inject(FaIconLibrary);

  constructor() {
    this.faLibrary.addIcons(
      faGithub, faLinkedinIn, faEnvelope, faArrowRight, faDownload, 
      faCloud, faMobileAlt, faJava, faReact, faNodeJs, faArrowUp, faMouse
    );
  }

  ngOnInit(): void {}
}