import { Component, input, OnInit } from '@angular/core';
import { EMPTY_POST, getPostById, Post } from '../post.service'  

@Component({
  selector: 'app-post-component',
  imports: [],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css'
})
export class PostComponent implements OnInit {
	id = input.required<string>();
	post: Post = EMPTY_POST;

	ngOnInit() {
		this.post = getPostById(this.id());
	}
}
