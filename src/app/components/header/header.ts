import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { inject } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';


import {
  faHome,
  faUser,
  faCode,
  faBriefcase,
  faDollarSign,
  faEnvelope,
  faBars,
  faTimes,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css'] // ✅ IMPORTANTE: debe estar en plural y ser un array
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isScrolled = false;
  private faLibrary = inject(FaIconLibrary); // ✅ inyección directa

  constructor() {
    this.faLibrary.addIcons(
      faHome,
      faUser,
      faCode,
      faBriefcase,
      faDollarSign,
      faEnvelope,
      faBars,
      faTimes,
      faDownload
    );
  }

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}
