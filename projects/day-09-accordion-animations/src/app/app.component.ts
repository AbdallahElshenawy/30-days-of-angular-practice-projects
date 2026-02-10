import { Component } from '@angular/core';
import { FagAccordionComponent } from "./fag-accordion/fag-accordion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FagAccordionComponent],
  template: `
  <app-fag-accordion></app-fag-accordion>
  `,
  styles: [],
})
export class AppComponent {
  title = 'day-09-accordion-animations';
}
