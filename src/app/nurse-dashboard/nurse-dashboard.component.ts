import { Component, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';

defineFullCalendarElement();
@Component({
  selector: 'app-nurse-dashboard',
  templateUrl: './nurse-dashboard.component.html',
  styleUrls: ['./nurse-dashboard.component.css']
})
export class NurseDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
