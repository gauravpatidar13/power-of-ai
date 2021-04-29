import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
 
      $("#owl-example").owlCarousel({
        nav:true,
        items:3,
        center:true,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:2
          },
          1000:{
            items:3
          }
        }
      });
  
      $( ".owl-prev").html('<i style="margin-right:15px;margin-top:15px;font-size:14px;color:blue" class="fa fa-arrow-left"></i>');
      $( ".owl-next").html('<i style="margin-left:15px;margin-top:15px;font-size:14px;color:blue" class="fa fa-arrow-right"></i>');
    });
  }

}
