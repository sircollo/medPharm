import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  username!:string
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenStorage.getUser()
    this.username = user.data.userName
    console.log(this.username)
  }
  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
  reloadPage(): void {
    window.location.reload();
  }

}
