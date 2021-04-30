import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OwlModule} from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AnnotationsComponent } from './annotations/annotations.component';
import { GlobeComponent } from './globe/globe.component';
import { DiagnosesComponent } from './diagnoses/diagnoses.component';
import { SaveTimeComponent } from './save-time/save-time.component';
import { ReviewComponent } from './review/review.component';
import { DetailsComponent } from './details/details.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { Footer1Component } from './footer1/footer1.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnnotationsComponent,
    GlobeComponent,
    DiagnosesComponent,
    SaveTimeComponent,
    ReviewComponent,
    DetailsComponent,
    GetInTouchComponent,
    DisclaimerComponent,
    Footer1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
