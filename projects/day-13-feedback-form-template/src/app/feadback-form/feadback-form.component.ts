import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feadback-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './feadback-form.component.html',
  styleUrl: './feadback-form.component.scss'
})
export class FeadbackFormComponent {
  feedback = {
    name: '',
    email: '',
    feedback: '',
  };
  submitted = false;

  onSubmit(form: any) {
    if (!form.valid) return;
    console.log('Form Submitted!', this.feedback);
    this.submitted = true;
  }
}
