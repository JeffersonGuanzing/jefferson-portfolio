import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Ticketing & Request Management System',
      description: 'A comprehensive backend system for managing enterprise-level requests with automated workflows and real-time monitoring.',
      image: 'assets/projects/ticketing.jpg', // Placeholder path
      tags: ['C#', '.NET Core', 'SQL Server', 'SignalR'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/ticketing-system'
    },
    {
      title: 'Centralized Communication Monitor',
      description: 'Real-time dashboard for monitoring system-wide messaging and communication flows across multiple microservices.',
      image: 'assets/projects/communication.jpg', // Placeholder path
      tags: ['Angular', 'Node.js', 'WebSockets', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/comm-monitor'
    },
    {
      title: 'Business Consultancy PWA',
      description: 'A production-ready Progressive Web App built for business consultancy services, handling daily active users with offline capabilities.',
      image: 'assets/projects/consultancy.jpg', // Placeholder path
      tags: ['Blazor', 'ASP.NET Core', 'Azure', 'Clean Architecture'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/consultancy-pwa'
    }
  ];
}
