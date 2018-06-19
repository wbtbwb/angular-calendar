import { Injectable } from "@angular/core";
import { Day } from "./day.model";
import { Event } from "./event.model";
import { EventsStackService } from "./events-stack.service";

@Injectable()
export class CalendarService {

    days: Day[] = [];

    private daysDefinition: any[] = [
        {name: "Sun", events: []},
        {name: "Mon", events: []},
        {name: "Tue", events: []},
        {name: "Wed", events: []},
        {name: "Thu", events: []},
        {name: "Fri", events: []},
        {name: "Sat", events: []},
    ];

    constructor(private eventsStackService: EventsStackService) {
        this.setDays();
    }

    getDays() :Day[] {
        return this.days;
    }

    deleteDayEvent(day: Day, event: Event) {
        let dayModel = this.days[this.days.indexOf(day)];
        dayModel.events.splice(dayModel.events.indexOf(event), 1);
        this.writeToLocalStorage();
    }

    writeToLocalStorage() {
        localStorage.setItem('daysEvents', JSON.stringify(this.days));
    }

    private readFromLocalStorage() {
        let definition = localStorage.getItem('daysEvents');
        if (definition) {
            return this.createDays(JSON.parse(definition));
        }
        return null;
    }

    private createDays(daysDefinition: any[]) {
        let stack = [];
        for (var i = 0; i < daysDefinition.length; i++) {
            let definition = daysDefinition[i];
            stack.push(this.createDay(definition.name, definition.events));
        }
        return stack;
    }

    private createDay(name: string, events: any[]) {
        let model = new Day();
        model.name = name;
        model.events = this.eventsStackService.createStack(events);
        return model;
    }

    private setDays() {
        this.days = this.readFromLocalStorage();
        if (!this.days) {
            this.days = this.createDays(this.daysDefinition);
            this.writeToLocalStorage();
        }
    }

}
