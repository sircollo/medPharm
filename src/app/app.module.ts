import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './aboutUs/about/about.component';
import { ContactComponent } from './contactUs/contact/contact.component';
import { ServicesPageComponent } from './our-services/services-page/services-page.component';
import { FooterComponent } from './footerPage/footer/footer.component';
import { SignupComponent } from './med-register/signup/signup.component';
import { DLoginComponent } from './doctor/d-login/d-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    AboutComponent,
    ContactComponent,
    ServicesPageComponent,
    FooterComponent,
    SignupComponent,
    DLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
