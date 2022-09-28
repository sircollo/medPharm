import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  username!:string
  users:any
  constructor(private tokenStorage: TokenStorageService, private http:HttpClient) { }

  ngOnInit(): void {
    const user = this.tokenStorage.getUser()
    this.username = user.data.userName
    // console.log(this.username)
    // console.log(user.data)
    this.getPatients()
  }
  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
  reloadPage(): void {
    window.location.reload();
  }
  getPatients(): void {
    this.http.get('http://medpharm001-001-site1.htempurl.com/api/User/GetUsers').subscribe((data) => {
      console.log(data)
      this.users = data
      this.users = this.users.data
      // console.log(this.users.roles)
    })
  }

}
