import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-medpharm',
  templateUrl: './medpharm.component.html',
  styleUrls: ['./medpharm.component.css']
})
export class MedpharmComponent implements OnInit {
  form: any = {
    firstName:null,
    lastName: null,
    email: null,
    userName: null,
    address: null,
    phoneNumber: null,
    password: null,
    password1: null,
    gender:null,
  }
  // gender: any = [1, 2]
  roleNames: any = [["Staff"], ["Patient"]]
  errorMessage = ''
  spinnerStyle = Spinkit;
  constructor(private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(formData: { firstName:string,lastName:string,userName:string,email:string,address:string,phoneNumber:number,password:number,roleNames:string,gender:number}){
    this.http.post("http://fmkdev-001-site1.dtempurl.com/api/User/create",formData).subscribe((data) => {
      console.log(data)
      alert("Registration Successfull")
      this.router.navigate(["/login"]).then(() => {
        window.location.reload();
      });
    },err => {
      this.errorMessage = err.error.message;
      alert(this.errorMessage)
  })
  }
}
