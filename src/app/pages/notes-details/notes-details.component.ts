import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-notes-details',
  standalone: true,
  imports: [],
  templateUrl: './notes-details.component.html',
  styleUrl: './notes-details.component.scss'
})
export class NotesDetailsComponent {
  actualInnerWidth = document.body.clientWidth;     // El. width minus scrollbar width
  actualInnerWidth2 = document.body.scrollWidth;

  constructor() {

    console.log(`actualInnerWidth ${this.actualInnerWidth} actualInnerWidth2 ${this.actualInnerWidth2}`)
    $(".container-full").width(this.actualInnerWidth)
  }
}
