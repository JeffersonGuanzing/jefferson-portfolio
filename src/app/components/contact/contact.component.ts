import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactItems = [
    { icon: 'phone', text: '+63 936 307 8990' },
    { icon: 'email', text: 'jefferson.b.guanzing@gmail.com' },
    { icon: 'link', text: 'linkedin.com/in/JeffersonGuanzing' },
    { icon: 'place', text: 'Quezon City, Philippines' }
  ];
}
