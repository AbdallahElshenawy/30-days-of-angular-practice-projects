import { Component } from '@angular/core';
import { DynamicFilterListComponent } from "./dynamic-filter-list/dynamic-filter-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ DynamicFilterListComponent],
  template: `
 <app-dynamic-filter-list></app-dynamic-filter-list>
  `,
  styles: [],
})
export class AppComponent {
  title = 'day-07-dynamic-filter-list';
}
