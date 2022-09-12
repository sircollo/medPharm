import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contactUs/contact/contact.component';
import { AboutComponent } from './aboutUs/about/about.component';
import { NurseComponent } from './nurse/nurse.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'about', component: AboutComponent },
  {path: '/nurse', component: AboutComponent },
  {path: '/patient', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
