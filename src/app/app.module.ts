import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IimageModelComponent } from './iimage-model/iimage-model.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PortofolioComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent,
    IimageModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
