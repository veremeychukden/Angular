import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requiremnts/requirements.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { RequiremntsEditComponent } from './requiremnts/requiremnts-edit/requiremnts-edit.component';
import { RequirementItemComponent } from './requiremnts/requirement-item/requirement-item.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { FormsModule } from "@angular/forms";
import { AddRequirementComponent } from './requiremnts/add-requirement/add-requirement.component';
import { RequireComponent } from './requiremnts/require/require.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { EditRequirementComponent } from './requiremnts/edit-requirement/edit-requirement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    RequirementsComponent,
    EventListComponent,
    EventDetailComponent,
    EventItemComponent,
    RequiremntsEditComponent,
    RequirementItemComponent,
    AddEventComponent,
    AddRequirementComponent,
    RequireComponent,
    EventStartComponent,
    ErrorPageComponent,
    EditEventComponent,
    EditRequirementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
