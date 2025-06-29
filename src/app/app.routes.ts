import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { BlogComponent } from './blog-component/blog-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent }
];