import { Component, OnInit } from "@angular/core";
import {EventCreatorService} from "./../shared/event-creator.service";
import { FormControl } from "@angular/forms";
import {EventsStackService} from "./../shared/events-stack.service";

@Component({
  selector: "app-event-creator",
  templateUrl: "./event-creator.component.html",
  styleUrls: ["./event-creator.component.css"]
})
export class EventCreatorComponent implements OnInit {
  
  colors: string[];

  currentColor: string;

  eventText: FormControl;

  constructor(private creatorService: EventCreatorService, private stackService: EventsStackService) { }

  ngOnInit() {
    this.colors = this.creatorService.getColors();
    this.currentColor = this.colors[0];
    this.eventText = new FormControl();
  }

  onChangeColor(color: string) {
    this.currentColor = color;
  }

  onCreateEvent() {
    if (this.eventText.value) {
      this.stackService.addToStack(this.currentColor, this.eventText.value);
      this.eventText.reset();
    }
  }

}
