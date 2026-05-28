import { Component, HostListener, OnInit, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
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
  faMoon,
  faFolder,
  faTags
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  menuOpen = false;
  isScrolled = false;
  activeSection = 'hero';
  
  public themeService = inject(ThemeService);
  private faLibrary = inject(FaIconLibrary);
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    this.faLibrary.addIcons(
      faHome, faUser, faCode, faBriefcase, faDollarSign, faEnvelope,
      faBars, faTimes, faDownload, faSun, faMoon, faFolder, faTags
    );
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollSpy();
    }
  }

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

  private setupScrollSpy(): void {
    const sections = document.querySelectorAll('section[id], header[id]');
    
    const observer = new IntersectionObserver((entries) => {
      let activeId = '';
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeId = entry.target.id;
        }
      });
      if (activeId && this.activeSection !== activeId) {
        this.activeSection = activeId;
        this.cdr.detectChanges(); // <-- Trigger change detection explicitly for Zoneless!
      }
    }, { threshold: 0.3, rootMargin: '-100px 0px -100px 0px' });

    sections.forEach(section => {
      observer.observe(section);
    });
  }
}
