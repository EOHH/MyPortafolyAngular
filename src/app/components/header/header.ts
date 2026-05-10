import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ThemeService } from '../../services/theme.service';
import {
  faHome,
  faUser,
  faCode,
  faBriefcase,
  faDollarSign,
  faEnvelope,
  faBars,
  faTimes,
  faDownload,
  faSun,
  faMoon
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
  
  public themeService = inject(ThemeService);
  private faLibrary = inject(FaIconLibrary);

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
      faDownload,
      faSun,
      faMoon
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
