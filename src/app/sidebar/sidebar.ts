import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // needed for *ngIf, *ngFor
import { RouterModule } from '@angular/router'; // needed for [routerLink]
import { MenuItem } from '../models/menu.model';
import { MENU_DATA } from '../menu-data';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-sidebar',
  standalone: true, // or remove if using NgModule
  imports: [CommonModule, RouterModule,MatListModule,MatIconModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  menu: MenuItem[] = MENU_DATA;

  constructor(private router: Router) {} // inject Router

  toggle(id: string) {
    const item = this.findItem(this.menu, id);
    if (item) item.expanded = !item.expanded;
  }

  isExpanded(id: string): boolean {
    const item = this.findItem(this.menu, id);
    return item?.expanded || false;
  }

  // ✅ Add this navigate method
  navigate(route?: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  private findItem(menu: MenuItem[], id: string): MenuItem | undefined {
    for (const item of menu) {
      if (item.id === id) return item;
      if (item.children) {
        const child = this.findItem(item.children, id);
        if (child) return child;
      }
    }
    return undefined;
  }
}
