import { Component } from '@angular/core';
import { PostListComponent } from "./components/post-list/post-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent],
  template: `
   <app-post-list></app-post-list>
  `,
  styles: [],
})
export class AppComponent {
  title = 'day-11-infinite-scroll';
}
