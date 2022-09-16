import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetingTimer'
})
export class GreetingTimerPipe implements PipeTransform {

  transform(dateTime: Date): string {
    const utcHours = dateTime.getUTCHours();
    const utcMins = dateTime.getUTCMinutes();

    if(utcHours >= 12){
console.log(utcHours)
      return "Good Evening";
    }
    return "Good Morning";
  }

}
