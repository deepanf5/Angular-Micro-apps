import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Movies } from './component/movies/movies';

@Component({
  selector: 'app-root',
  imports: [Movies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MovieList');
}
