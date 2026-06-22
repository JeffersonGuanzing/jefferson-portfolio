import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillGroups = [
    {
      name: 'Languages',
      skills: ['C#', 'JavaScript', 'Java', 'PHP', 'C', 'Bash', 'Lua']
    },
    {
      name: 'Frameworks & Libraries',
      skills: ['Angular', 'Blazor', '.NET Core', 'Entity Framework Core', 'ASP.NET MVC', 'SignalR', 'Node.js', 'React', 'Tailwind CSS', 'jQuery']
    },
    {
      name: 'Architecture & Patterns',
      skills: ['Clean Architecture', 'MVVM', 'RESTful API Design', 'GraphQL', 'JWT Auth', 'Real-Time Systems']
    },
    {
      name: 'Databases',
      skills: ['MS SQL Server', 'MySQL', 'SQLite']
    },
    {
      name: 'Cloud & DevOps',
      skills: ['Microsoft Azure', 'Azure DevOps', 'GitHub Actions (CI/CD)', 'Git', 'GitHub']
    },
    {
      name: 'Tools',
      skills: ['Postman', 'Figma', 'Notion']
    },
    {
      name: 'AI / LLM',
      skills: ['AI/LLM Integration', 'Cloud Platforms']
    }
  ];
}
