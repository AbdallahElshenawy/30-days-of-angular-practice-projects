import { Component } from '@angular/core';
import { ClockComponent } from "./clock/clock.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockComponent],
  template: `
   <app-clock></app-clock>
  `,
  styles: [],
})
export class AppComponent {
  title = 'day-12-analog-clock';
}
