import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
  host: { 'mfe-id': 'mfe4200' }
})
export class Movies implements OnInit {
moviesList:any


  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get("https://moviesbaseapi.onrender.com/api/movies/").subscribe(
      {
        next:(res:any) => {
          this.moviesList = res
        },
        error(err) {
          console.error(err)
        }
      }
    )

  }


  getMovie(Movie: any) {

    const event = new CustomEvent('MOVIE_SELECTED', {
      detail: { movie: Movie }
    });
    window.dispatchEvent(event);

  }

}
