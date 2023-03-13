import { Component } from '@angular/core';
import { crossFadeAnimation } from './animations';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    crossFadeAnimation
  ]
})
export class AppComponent {
  constructor(
    private titleService: Title,
    private router: Router,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const pageTitle = this.getPageTitle(this.router.url);
        this.titleService.setTitle(pageTitle);
      }
    });
  }

  private getPageTitle(url: string): string {
    if (url.includes('/artist/')) {
      const pathSegments = url.split('/');
      const nameIndex = pathSegments.indexOf('artist') + 1;
      const name = 'Artist - '+pathSegments[nameIndex].charAt(0).toUpperCase() + pathSegments[nameIndex].slice(1);
      return name ?? 'Artists';
    }
    switch (url) {
      case '/':
        return 'Jamport';
      case '/contact':
        return 'Contact';
      case '/story':
        return 'Our Story';
      case '/impressum':
        return 'Impressum';
      case '/privacy':
        return 'Privacy Policy';
      default:
        return 'Jamport';
    }
  }
}