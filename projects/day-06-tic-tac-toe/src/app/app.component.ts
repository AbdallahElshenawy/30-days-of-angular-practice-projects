import { Component } from '@angular/core';
import { TicTacToeComponent } from "./tic-tac-toe/tic-tac-toe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TicTacToeComponent],
  template: `
  <app-tic-tac-toe></app-tic-tac-toe>
  `,
  styles: [],
})
export class AppComponent {
  title = 'day-06-tic-tac-toe';
}
