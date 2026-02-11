import { Component } from '@angular/core';
import { FeadbackFormComponent } from "./feadback-form/feadback-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FeadbackFormComponent],
  template: `
  <app-feadback-form></app-feadback-form>
  `,
  styles: [],
})
export class AppComponent {
  title = 'day-13-feedback-form-template';
}
