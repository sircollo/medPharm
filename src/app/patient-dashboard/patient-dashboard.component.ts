import { Component, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TokenStorageService } from '../services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  time = new Date();
  isLoggedIn = false;
  username?: string;
  userId:any
  errorMessage = ''
  reminders:any
  rows:any
  form: any = {
    remindFor:null,
    reminderType: null,
    reminderDays: null,    
    tasks:{}=[],
  }
tasks: any;
//   tasks:{} ={
//     todo: null,
//     todoTime: null,
// }
  
    
  constructor(private tokenStorage:TokenStorageService, private http:HttpClient, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      if(user){
        this.isLoggedIn = true;
      }
      this.username = user.data.userName;
      console.log(user.data.userId)
      // console.log(user)
      this.userId = user.data.userId
    } else {
      return;
    }
    this.getUserReminder()
  }
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    headerToolbar: {
      // left: 'prev,next today',
      // center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    }
  };
  logout(){
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
    window.location.reload();
  }
  postReminder(reminder:{remindFor:string, reminderType:number,reminderDays:number, tasks:object}){
    console.log(reminder)
    this.http.post("http://medpharm001-001-site1.htempurl.com/api/Reminder/CreateReminderAsync?userId=" + this.userId, reminder).subscribe((response=>{
      console.log(response)
    }));
  }
  getUserReminder(): void{
    this.http.get("http://medpharm001-001-site1.htempurl.com/api/Reminder/GetUserOnboardRemindersByUserIdAsync?userId=" + this.userId + "&PageNumber=1&PageSize=1").subscribe(response=>{
      console.log(response)
      this.reminders = response
      // this.rows = this.reminders.rows
      console.log(this.reminders.rows[0].remindFor)
    }, err => {
        this.toastr.error('Failed', 'Connection error');
    });
  }
}


