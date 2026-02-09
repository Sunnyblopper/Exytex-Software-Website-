import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-slide',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './side-slide.html',
  styleUrl: './side-slide.css',
})
export class SideSlide {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  isOpen = false;
  sideForm: FormGroup;
  submitted = false;

  constructor() {
    this.sideForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      position: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  onSubmit() {
    this.submitted = true;

    if (this.sideForm.invalid) {
      return;
    }

    const formData = this.sideForm.value;
    const apiUrl = 'https://exytex-software-website-backend.vercel.app/mail2/job-form';

    this.http.post(apiUrl, formData).subscribe({
      next: (response) => {
        console.log('Success!', response);
        alert('Job application sent successfully!');
        this.sideForm.reset();
        this.submitted = false;
        this.close();
      },
      error: (error) => {
        console.error('Error!', error);
        alert('Failed to send application. Please try again later.');
      }
    });
  }
}
