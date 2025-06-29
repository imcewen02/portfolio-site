import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-post-component',
  imports: [],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css'
})
export class PostComponent {
	id = input.required<string>();
}
