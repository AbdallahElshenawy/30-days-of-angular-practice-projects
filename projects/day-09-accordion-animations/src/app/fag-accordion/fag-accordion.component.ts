import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fag-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fag-accordion.component.html',
  styleUrl: './fag-accordion.component.scss'
})
export class FagAccordionComponent {
openedIndex :number | null = null;
  faqs = [

    {

      question: 'What is Angular?',

      answer:

        'Angular is a platform for building mobile and desktop web applications.',

    },

    {

      question: 'What is a component in Angular?',

      answer:

        'A component controls a patch of the screen called a view. Components are the main building block of Angular applications.',

    },

    {

      question: 'What are Angular directives?',

      answer:

        'Directives are instructions in the DOM. Angular directives allow you to attach behavior to elements in the DOM.',

    },

  ];

  toggleFAQ (index: number){
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
