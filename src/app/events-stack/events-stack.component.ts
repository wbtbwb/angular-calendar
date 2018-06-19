import { Component, OnInit } from '@angular/core';
import { Event } from "./../shared/event.model";
import { EventsStackService } from "./../shared/events-stack.service";
import { CalendarService } from "./../shared/calendar.service";
import {DragulaService} from "ng2-dragula/index";

@Component({
  selector: "app-events-stack",
  templateUrl: "./events-stack.component.html",
  styleUrls: ["./events-stack.component.css"]
})
export class EventsStackComponent implements OnInit {

  stack: Event[];

  constructor(private eventsStackService: EventsStackService, private calendarService: CalendarService, private dragulaService: DragulaService) { }

  ngOnInit() {
    this.stack = this.eventsStackService.getStack();

    this.dragulaService.drop.subscribe((value) => {
      this.eventsStackService.writeToLocalStorage();
      this.calendarService.writeToLocalStorage();
    });
  }

  onDeleteEvent(event: Event) {
    this.eventsStackService.deleteFromStack(event);
  }

}
