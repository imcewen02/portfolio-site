import { Component } from '@angular/core';
import { LATEST_POST } from '../posts'  

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent { 
	LATEST_POST = LATEST_POST;
}