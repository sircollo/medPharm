import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contactUs/contact/contact.component';
import { AboutComponent } from './aboutUs/about/about.component';
import { NurseComponent } from './nurse/nurse.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { NurseDashboardComponent } from './nurse-dashboard/nurse-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'about', component: AboutComponent },
  {path: 'nurse', component: NurseComponent },
  {path: 'patient', component: PatientLoginComponent },
  {path: 'nurse-dashboard', component: NurseDashboardComponent },
  {path: 'patient-dashboard', component: PatientDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
