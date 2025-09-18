import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Chatbot } from './chatbot/chatbot';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Chatbot,Sidebar],
  templateUrl: './app.html',   // ✅ make sure this file exists
  styleUrls: ['./app.css']
})
export class App {}
