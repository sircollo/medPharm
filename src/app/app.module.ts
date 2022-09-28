import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './aboutUs/about/about.component';
import { ContactComponent } from './contactUs/contact/contact.component';
import { ServicesPageComponent } from './our-services/services-page/services-page.component';
import { FooterComponent } from './footerPage/footer/footer.component';
import { NurseComponent } from './nurse/nurse.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { NurseDashboardComponent } from './nurse-dashboard/nurse-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorsNursesComponent } from './doctors-nurses/doctors-nurses.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GreetingTimerPipe } from './greeting-timer.pipe';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { SignupComponent } from './med-register/signup/signup.component';
import { DLoginComponent } from './doctor/d-login/d-login.component';
import { MedpharmComponent } from './account/medpharm/medpharm.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    AboutComponent,
    ContactComponent,
    ServicesPageComponent,
    FooterComponent,
    NurseComponent,
    PatientLoginComponent,
    NurseDashboardComponent,
    PatientDashboardComponent,
    DoctorsNursesComponent,
    AdminDashboardComponent,
    GreetingTimerPipe,
    DoctorDashboardComponent,
    SignupComponent,
    DLoginComponent,
    MedpharmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
