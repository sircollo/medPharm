import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseComponent } from './nurse/nurse.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { NurseDashboardComponent } from './nurse-dashboard/nurse-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './aboutUs/about/about.component';
import { ContactComponent } from './contactUs/contact/contact.component';
import { ServicesPageComponent } from './our-services/services-page/services-page.component';
import { FooterComponent } from './footerPage/footer/footer.component';
import { SignupComponent } from './med-register/signup/signup.component';
import { DLoginComponent } from './doctor/d-login/d-login.component';
import { MedpharmComponent } from './account/medpharm/medpharm.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
const routes: Routes = [
  {path: 'nurse', component: NurseComponent },
  {path: 'login', component: PatientLoginComponent },
  {path: 'nurse-dashboard', component: NurseDashboardComponent },
  {path: 'patient-dashboard', component: PatientDashboardComponent },
  { path: '', component: LandingPageComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "services", component: ServicesPageComponent },
  { path: "footer", component: FooterComponent },
  // { path: "register", component: SignupComponent },
  // { path: "d-login", component: DLoginComponent },
  { path: "medpharm", component: MedpharmComponent },
  { path: "doctor-dashboard", component:DoctorDashboardComponent},
  { path: "admin-dashboard", component:AdminDashboardComponent},


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ PatientLoginComponent ]