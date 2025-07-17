import { Component } from '@angular/core';
import { ALL_POSTS } from '../post.service'  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-component',
  imports: [ CommonModule ],
  templateUrl: './blog-component.html',
  styleUrl: './blog-component.css'
})
export class BlogComponent {
  POSTS = ALL_POSTS;
}
