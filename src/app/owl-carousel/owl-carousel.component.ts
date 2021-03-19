import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.css']
})
export class OwlCarouselComponent implements OnInit {
  title = 'owlcarouselinAngular';  
  images = ['../assets/images/carousel-1.jpg', '../assets/images/carousel-2.jpg', '../assets/images/carousel-3.jpg'];  
  
  SlideOptions = { items: 1, dots: false, nav: false };  
  CarouselOptions = { items: 1, dots: false, nav: false };  
  constructor() { }

  ngOnInit(): void {
    $('.btn1').click(function() {
      alert('you clicke me')
      console.log('hey')
  })
  }

}
