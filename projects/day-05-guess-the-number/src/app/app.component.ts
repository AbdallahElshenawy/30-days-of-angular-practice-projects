import { Component } from '@angular/core';
import { GuessTheNumberComponent } from "./guess-the-number/guess-the-number.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ GuessTheNumberComponent],
  template: `
<app-guess-the-number></app-guess-the-number>
  `,
  styles: [],
})
export class AppComponent {
  title = 'day-05-guess-the-number';
}
