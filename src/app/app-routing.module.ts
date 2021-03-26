import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavWithSubmenuComponent } from './sidenav-with-submenu/sidenav-with-submenu.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'fav',component:SidenavComponent},
  {path:'share',component:SidenavWithSubmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
