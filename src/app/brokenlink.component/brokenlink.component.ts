import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Chatbot } from '../chatbot/chatbot';// adjust path if needed

@Component({
  selector: 'app-brokenlink',
  templateUrl: './brokenlink.component.html',
  styleUrls: ['./brokenlink.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,       // for routerLink and router-outlet
    MatToolbarModule,   // for <mat-toolbar>
    MatButtonModule,    // for <button mat-button>
    Chatbot    // for <app-chatbot>
  ]
})
export class BrokenlinkComponent { }
