import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  myWorkRoutes=[{route:"Home",title:"Home",icon:""},
  {route:"About",title:"About",icon:""},
  {route:"Services",title:"Services",icon:""},
  {route:"Contact Us",title:"Contact Us",icon:""}]
  constructor() { }

  ngOnInit(): void {
  }

}
