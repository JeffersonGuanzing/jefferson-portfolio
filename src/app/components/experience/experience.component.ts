import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'TimeFree Innovations Inc.',
      role: 'Mid-Level Backend Developer',
      period: '2025–Present',
      location: 'Makati, Metro Manila',
      achievements: [
        'Engineered the backend of a Ticketing & Request Management System with automated workflows',
        'Built a Centralized Communication Monitoring Platform for real-time system-wide messaging',
        'Designed normalized DB schemas and REST endpoints with sub-100ms response times',
        'Participated in sprint planning, code reviews, and technical documentation'
      ]
    },
    {
      company: 'Simplified Business Consultancy',
      role: 'Junior Developer',
      period: '2023–2024',
      location: 'Commonwealth, Quezon City',
      achievements: [
        'Delivered a production PWA built on Blazor & .NET Core on Microsoft Azure (~500 daily active users)',
        'Implemented JWT authentication & RBAC following Clean Architecture and MVVM patterns',
        'Built RESTful APIs and EF Core data models, reducing integration defects',
        'Integrated SignalR for real-time push notifications',
        'Managed end-to-end delivery via GitHub and Notion'
      ]
    }
  ];
}
