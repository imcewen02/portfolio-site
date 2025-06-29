import { Component } from '@angular/core';
import { POSTS } from '../posts'  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-component',
  imports: [ CommonModule ],
  templateUrl: './blog-component.html',
  styleUrl: './blog-component.css'
})
export class BlogComponent {
  POSTS = POSTS;
}
