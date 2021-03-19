import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  images = ['../assets/images/blog-1.jpg', '../assets/images/blog-2.jpg', '../assets/images/blog-3.jpg','../assets/images/blog-4.jpg'];  
  
  SlideOptions2 = { items: 2, dots: false, nav: false };  
  CarouselOptions = { items: 2, dots: false, nav: false }; 
  constructor() { }

  ngOnInit(): void {
  }

}
