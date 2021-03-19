import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import {OwlModule} from 'ngx-owl-carousel';
import { CardsComponent } from './cards/cards.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurFeaturesComponent } from './our-features/our-features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurAdvisorsComponent } from './our-advisors/our-advisors.component';
import { TouchComponent } from './touch/touch.component';
import { BlogComponent } from './blog/blog.component';
import { FooterMainComponent } from './footer-main/footer-main.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderMainComponent,
    OwlCarouselComponent,
    CardsComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurFeaturesComponent,
    TestimonialsComponent,
    OurAdvisorsComponent,
    TouchComponent,
    BlogComponent,
    FooterMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
