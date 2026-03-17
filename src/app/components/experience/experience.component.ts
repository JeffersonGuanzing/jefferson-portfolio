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
      company: 'SBC Simplified Business Consultancy',
      role: 'L2 Junior Software Developer',
      period: 'Sep 2024 – Dec 2024',
      location: 'Quezon City, National Capital Region, Philippines',
      achievements: [
        'Specialized in creating robust and scalable software solutions using C#, Blazor, and .NET Framework with MVC architecture',
        'Developed Progressive Web Applications (PWAs) and leveraged MudBlazor for intuitive and responsive UI components',
        'Contributed to client presentations and project management, ensuring alignment with business objectives and timely delivery',
        'Developed notable projects including a subscription-based business management system, a franchising solution, and an e-commerce platform'
      ]
    },
    {
      company: 'SBC Simplified Business Consultancy',
      role: 'Junior Developer',
      period: 'Nov 2023 – Sep 2024',
      location: 'Quezon City, National Capital Region, Philippines',
      achievements: [
        'Designed and developed efficient full-stack solutions using C#, Blazor, and the .NET Framework',
        'Delivered a production PWA built on Blazor & .NET Core on Microsoft Azure',
        'Implemented JWT authentication & RBAC following Clean Architecture and MVVM patterns',
        'Built RESTful APIs and EF Core data models, reducing integration defects',
        'Integrated SignalR for real-time push notifications'
      ]
    }
  ];
}
