import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-notes-app';

  ngOnInit() {
    
  }
}
