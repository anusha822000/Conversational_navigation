import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.html',
  styleUrl: './page.css'
})
export class Page implements OnInit {
  currentRoute = '';
  pageTitle = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Combine all path segments to show the current route
    this.route.url.subscribe(segments => {
      this.currentRoute = segments.map(s => s.path).join('/');
      // Use last segment as a page title (capitalize first letter)
      if (segments.length > 0) {
        this.pageTitle =
          segments[segments.length - 1].path.charAt(0).toUpperCase() +
          segments[segments.length - 1].path.slice(1);
      }
    });
  }
}
