import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  form:any = {
    userId:null,
    password:null,
  }
  userName!: null;
  constructor(private authService:AuthService, private router:Router){ }

  ngOnInit(): void {
  }
  onSubmit():void{
    const {userId, password} = this.form;
    this.authService.login(userId,password).subscribe(
      data => {
        console.log(data);
        console.log(data.data.roles)
        if ( data.data.roles[0] === "Admin"){
          this.router.navigate(["/admin-dashboard"]).then(() => {
              window.location.reload();
            });
        }
        else if( data.data.roles[0] === "Patient" ){
          this.router.navigate(["/patient-dashboard"]).then(() => {
            window.location.reload();
          });
        } 
        else if( data.data.roles[0] === "Staff" ){
          this.router.navigate(["/nurse-dashboard"]).then(() => {
            window.location.reload();
          });
        } 
      }
    )

  }

}
