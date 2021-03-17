import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { JealComponent } from './jeal/jeal.component';
import { EnimComponent } from './enim/enim.component';
import { MagnaComponent } from './magna/magna.component';
import { JustoComponent } from './justo/justo.component';
import { AuctorComponent } from './auctor/auctor.component';
import { TellusComponent } from './tellus/tellus.component';
import { OdioComponent } from './odio/odio.component';
import { SislafComponent } from './sislaf/sislaf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderMainComponent,
    HeaderBottomComponent,
    JealComponent,
    EnimComponent,
    MagnaComponent,
    JustoComponent,
    AuctorComponent,
    TellusComponent,
    OdioComponent,
    SislafComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
