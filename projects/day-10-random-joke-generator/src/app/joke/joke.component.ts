import { Component } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})
export class JokeComponent {
  jokeSetup: string = '';
  jokePunchline: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private jokeService : JokeService){}
  fetchJoke(){
    this.isLoading = true;
    this.errorMessage ='';
    this.jokeService.getRandomJoke( ).subscribe({
      next:(joke)=>{
        this.jokeSetup = joke.setup;
        this.jokePunchline = joke.punchline;
        this.isLoading = false;
      },
      error: () =>{
        this.errorMessage ="failed to fetch  joke, try again later";
        this.isLoading = false;
        this.jokeSetup ='';
        this.jokePunchline = '';
      },
    })
  }
}
