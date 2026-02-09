import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-area',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-area.html',
  styleUrl: './contact-area.css',
})
export class ContactArea {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  contactForm: FormGroup;
  submitted = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    const formData = this.contactForm.value;
    const apiUrl = 'https://exytex-software-website-backend.vercel.app/mail2/contact-form';

    this.http.post(apiUrl, formData).subscribe({
      next: (response) => {
        console.log('Success!', response);
        alert('Message sent successfully!');
        this.contactForm.reset();
        this.submitted = false;
      },
      error: (error) => {
        console.error('Error!', error);
        alert('Failed to send message. Please try again later.');
      }
    });
  }
}
