import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { EventsStackComponent } from './events-stack/events-stack.component';
import { EventCreatorService } from "./shared/event-creator.service";
import { EventsStackService } from "./shared/events-stack.service";
import { CalendarService } from "./shared/calendar.service";
import { CalendarComponent } from './calendar/calendar.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    EventCreatorComponent,
    EventsStackComponent,
    CalendarComponent
  ],
  imports: [
    DragulaModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    CalendarService,
    EventsStackService,
    EventCreatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
