import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { Spinkit } from 'ng-http-loader';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  spinnerStyle = Spinkit;
  form:any = {
    userId:null,
    password:null,
  }
  userName!: null;
  errorMessage = ''
  constructor(private authService:AuthService, private router:Router, private tokenStorage:TokenStorageService, private toastr:ToastrService){ }

  ngOnInit(): void {
  }
  onSubmit():void{
    const {userId, password} = this.form;
    this.authService.login(userId,password).subscribe(
      data => {
        console.log(data);
        console.log(data.data.roles)
        // alert(data.message);
        // this.toast.success({detail:"Success", summary:"data.message", duration:5000})
        this.toastr.success('Successfully logged in','Success');
        this.tokenStorage.saveToken(data.bearer)
        this.tokenStorage.saveUser(data);
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
      },err => {
          this.errorMessage = err.error.message;
          console.log(this.errorMessage)
          this.toastr.error('Login Error!', 'Invalid Credentials');
      }
    );

  }

}
