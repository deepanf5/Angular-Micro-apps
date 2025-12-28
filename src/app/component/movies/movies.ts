import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
  host: { 'mfe-id': 'mfe4200' }
})
export class Movies {

  movie: any

  moviesList = [

    {
      id: 1,
      title: 'movie 1',
      poster: 'poster.jpg'
    },
    {
      id: 2,
      title: 'movie 2',
      poster: 'poster.jpg'
    },
    {
      id: 3,
      title: 'movie 3',
      poster: 'poster.jpg'
    },
    {
      id: 4,
      title: 'movie 4',
      poster: 'poster.jpg'
    },
    {
      id: 5,
      title: 'movie 5',
      poster: 'poster.jpg'
    },
    {
      id: 6,
      title: 'movie 6',
      poster: 'poster.jpg'
    },
    {
      id: 7,
      title: 'movie 7',
      poster: 'poster.jpg'
    },
    {
      id: 8,
      title: 'movie 8',
      poster: 'poster.jpg'
    }
  ]


  getMovie(Movie: any) {

    const event = new CustomEvent('MOVIE_SELECTED', {
      detail: { movie: Movie }
    });
    window.dispatchEvent(event);

  }

}
