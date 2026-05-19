import { Component, AfterViewInit, inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { ServicesComponent } from './components/services/services';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { PricingComponent } from './components/pricing/pricing';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { TechStackComponent } from './components/tech-stack/tech-stack';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FontAwesomeModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ServicesComponent,
    PortfolioComponent,
    PricingComponent,
    ContactComponent,
    TechStackComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Opcional: observer.unobserve(entry.target); si solo queremos que se anime una vez
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      // Seleccionar elementos clave para animar al hacer scroll
      const elementsToAnimate = document.querySelectorAll(`
        .section-header, 
        .about-text-content, 
        .about-image-content, 
        .category-card, 
        .project-card, 
        .pricing-card, 
        .service-item, 
        .focus-item, 
        .contact-wrapper,
        .value-props-banner,
        .header-row,
        .portfolio-toolbar,
        .portfolio-cta
      `);

      elementsToAnimate.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
      });
    }
  }
  showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.showBackToTop = window.scrollY > 500;
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
