import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './aboutUs/about/about.component';
import { ContactComponent } from './contactUs/contact/contact.component';
import { ServicesPageComponent } from './our-services/services-page/services-page.component';
import { FooterComponent } from './footerPage/footer/footer.component';
import { SignupComponent } from './med-register/signup/signup.component';
import { DLoginComponent } from './doctor/d-login/d-login.component';
import { MedpharmComponent } from './account/medpharm/medpharm.component';
const routes: Routes = [
  // { path: '', component: LandingPageComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "services", component: ServicesPageComponent },
  { path: "footer", component: FooterComponent },
  { path: "register", component: SignupComponent },
  { path: "d-login", component: DLoginComponent },
  { path: "medpharm", component: MedpharmComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
