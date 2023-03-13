import { Component } from '@angular/core';
import { crossFadeAnimation } from './animations';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const pageTitle = this.getPageTitle(this.router.url);
        this.titleService.setTitle(pageTitle);
      }
    });
  }

  private  getPageTitle(url: string): string {
    if(url.includes('/artist/')){
      const name = this.route.snapshot.paramMap.get('name');
        return name ? name : 'Artists';
    }
    switch (url) {
      case '/':
        return 'Jamport';
        case '/artists':
          if (url.includes('/artist/')) {
            const pathSegments = url.split('/');
            const nameIndex = pathSegments.indexOf('artist') + 1;
            const name = pathSegments[nameIndex];
            return name ? name : 'Artists';
          } else {
            return 'Artists';
          }
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