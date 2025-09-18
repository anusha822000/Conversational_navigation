import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],  // 👈 this is required
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css']
})
export class Chatbot {
  isOpen = false;
  userInput = '';
  messages = [
    { sender: 'bot', text: 'Hello! How can I help you?' }
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;
    this.messages.push({ sender: 'user', text: this.userInput });
    this.userInput = '';

    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: 'This is a bot reply!' });
    }, 500);
  }
}
