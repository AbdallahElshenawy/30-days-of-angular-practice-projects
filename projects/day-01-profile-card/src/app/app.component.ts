import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule],
  template: `
    <div class="profile-card">
      <h2>Profile Card</h2>

      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Age:</strong> {{ age }}</p>
      <p><strong>Description:</strong> {{ description }}</p>

      <h3>Update Profile</h3>
      <input type="text" [(ngModel)]="name" placeholder="Enter new name" />
      <input type="number" [(ngModel)]="age" placeholder="Enter new age" />
      <input type="text" [(ngModel)]="description" placeholder="Enter new description" />
    </div>
  `,
  styles: [`
    .profile-card {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 10px;
      background-color: #f9f9f9;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    h2 {
      text-align: center;
      font-size: 24px;
      margin-bottom: 15px;
    }

    p {
      font-size: 17px;
    }

    input {
      width: 90%;
      padding: 10px;
      margin: 5px 0 10px 0;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  `],
})
export class AppComponent {
  name = 'Abdallah Elshenawy';
  age = 27;
  description = 'A software engineer learning angular.';
}
