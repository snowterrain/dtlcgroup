import { Component,ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { colors } from '../utils/colors';


@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  view: string = 'month';




  viewDate: Date = new Date();

  events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [
    {
      title: 'Increments badge total on the day cell',
      color: colors.yellow,
      start: new Date(),
      meta: {
        incrementsBadgeTotal: true
      }
    },
       {
      title: 'Does not increment the badge total on the day cell',
      color: colors.blue,
      start: new Date(),
      meta: {
        incrementsBadgeTotal: false
      }
    }
  ];

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      day.badgeTotal = day.events.filter(
        event => event.meta.incrementsBadgeTotal
      ).length;
    });
  }

}
 
/* 
@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html'
})
export class DemoComponent {
 
}
 */


