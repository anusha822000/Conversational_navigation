import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Chatbot } from './chatbot/chatbot';
import { Sidebar } from './sidebar/sidebar';
import { PageComponent } from './page/page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Chatbot, Sidebar],
  templateUrl: './app.html',   // ✅ make sure this file exists
  styleUrls: ['./app.css']
})
export class App {
  constructor(private router: Router) {}

  openFacility() {
    this.router.navigate(['/facility']);
  }

}
