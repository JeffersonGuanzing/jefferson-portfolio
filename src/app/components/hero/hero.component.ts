import { Component, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  roles = ["Backend Developer", ".NET Core Engineer", "API Architect", "Clean Code Advocate"];
  currentRole = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;

  ngOnInit() {
    this.type();
  }

  type() {
    const fullText = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.currentRole.set(fullText.substring(0, this.charIndex - 1));
      this.charIndex--;
      this.typingSpeed = 50;
    } else {
      this.currentRole.set(fullText.substring(0, this.charIndex + 1));
      this.charIndex++;
      this.typingSpeed = 100;
    }

    if (!this.isDeleting && this.charIndex === fullText.length) {
      this.isDeleting = true;
      this.typingSpeed = 2000; // Pause at end
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.typingSpeed = 500;
    }

    setTimeout(() => this.type(), this.typingSpeed);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
