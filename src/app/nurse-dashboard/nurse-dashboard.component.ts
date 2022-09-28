import { Component, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TokenStorageService } from '../services/token-storage.service';
defineFullCalendarElement();
@Component({
  selector: 'app-nurse-dashboard',
  templateUrl: './nurse-dashboard.component.html',
  styleUrls: ['./nurse-dashboard.component.css']
})
export class NurseDashboardComponent implements OnInit {
  time = new Date();
  username!:any;
  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenStorage.getUser();
    this.username = user.data.userName
    console.log(user)
  }
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    headerToolbar: {
      // left: 'prev,next today',
      // center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    }
  };

}
