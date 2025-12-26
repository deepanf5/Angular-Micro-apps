import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:() => import('./component/movies/movies').then(c => c.Movies)
    }
];
