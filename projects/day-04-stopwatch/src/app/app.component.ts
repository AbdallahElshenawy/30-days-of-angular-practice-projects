import { Component } from '@angular/core';
import { StopwatchComponent } from "./stopwatch/stopwatch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ StopwatchComponent],
  template: `
   <app-stopwatch></app-stopwatch>
  `,
  styles: [],
})
export class AppComponent {
  title = 'day-04-stopwatch';
}
