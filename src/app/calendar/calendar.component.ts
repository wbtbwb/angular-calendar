import { Component, OnInit } from "@angular/core";
import { Day } from "./../shared/day.model";
import { Event } from "./../shared/event.model";
import { CalendarService } from "./../shared/calendar.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {

  days: Day[] = [];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.days = this.calendarService.getDays();
  }

  onDeleteDayEvent(day: Day, event: Event) {
    this.calendarService.deleteDayEvent(day, event);
  }

}
