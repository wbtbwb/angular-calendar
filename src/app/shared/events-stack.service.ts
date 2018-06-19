import { Injectable } from "@angular/core";
import { Event } from "./event.model";

@Injectable()
export class EventsStackService {

    stack: Event[] = [];

    private defaultEventsDefinition: any[] = [
        {color: "green", text: "Get started"}
    ];

    constructor() {
        this.setStack();
    }

    getStack() :Event[] {
        return this.stack;
    }

    createStack(stackDefinition: any[]) {
        let stack = [];
        for (var i = 0; i < stackDefinition.length; i++) {
            let definition = stackDefinition[i];
            stack.push(this.createModel(definition.color, definition.text));
        }
        return stack;
    }

    addToStack(color: string, text: string) {
        let model = this.createModel(color, text);
        this.stack.push(model);
        this.writeToLocalStorage();
    }

    deleteFromStack(event: Event) {
        this.stack.splice(this.stack.indexOf(event), 1);
        this.writeToLocalStorage();
    }

    writeToLocalStorage() {
        localStorage.setItem('eventsStack', JSON.stringify(this.stack));
    }

    private readFromLocalStorage() {
        let definition = localStorage.getItem('eventsStack');
        if (definition) {
            return this.createStack(JSON.parse(definition));
        }
        return null;
    }

    private createModel(color: string, text: string) {
        let model = new Event();
        model.color = color;
        model.text = text;
        return model;
    }

    private setStack() {
        this.stack = this.readFromLocalStorage();
        if (!this.stack) {
            this.stack = this.createStack(this.defaultEventsDefinition);
            this.writeToLocalStorage();
        }
    }

}
