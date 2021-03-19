import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  images = ['', '', '','','','','',''];  
  
  SlideOptions1 = { items: 3, dots: false, nav: false };  
  CarouselOptions = { items: 3, dots: false, nav: false }; 
  constructor() { }

  ngOnInit(): void {
  }

}
