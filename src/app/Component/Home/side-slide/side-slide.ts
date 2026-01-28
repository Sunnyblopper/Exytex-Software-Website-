import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-slide',
  imports: [FormsModule],
  templateUrl: './side-slide.html',
  styleUrl: './side-slide.css',
})
export class SideSlide {

  isOpen = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  };

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  onSubmit() {
    console.log(this.formData);
    this.close();
  }

}
