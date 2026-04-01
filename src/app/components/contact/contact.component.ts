import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  isSubmitting = false;

  contactItems = [
    { icon: 'phone', text: '+63 936 307 8990', url: 'tel:+639363078990' },
    { icon: 'email', text: 'jefferson.b.guanzing@gmail.com', url: 'mailto:jefferson.b.guanzing@gmail.com' },
    { icon: 'link', text: 'https://www.linkedin.com/in/jefferson-guanzing/', url: 'https://www.linkedin.com/in/jefferson-guanzing/' },
    { icon: 'place', text: 'Quezon City, Philippines' }
  ];

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;

      this.http.post('https://formspree.io/f/maqlygrj', formData).subscribe({
        next: () => {
          this.snackBar.open('Message sent successfully!', 'Close', { duration: 5000 });
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error('Error sending message:', err);
          this.snackBar.open('Failed to send message. Please try again later.', 'Close', { duration: 5000 });
          this.isSubmitting = false;
        }
      });
    }
  }
}
