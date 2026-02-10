import { Component } from '@angular/core';
import { JokeComponent } from "./joke/joke.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ JokeComponent],
  template: `
    <app-joke></app-joke>
  `,
  styles: [],
})
export class AppComponent {
  title = 'day-10-random-joke-generator';
}
