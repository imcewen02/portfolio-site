import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { BlogComponent } from './blog-component/blog-component';
import { PostComponent } from './post-component/post-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: PostComponent },
    { path: '**', redirectTo: '' },
];