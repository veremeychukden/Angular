import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requiremnts/requirements.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { AddRequirementComponent } from './requiremnts/add-requirement/add-requirement.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { EditRequirementComponent } from './requiremnts/edit-requirement/edit-requirement.component';


const routes: Routes = [
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "events", 
    component: EventsComponent,
    children: [
      { path: "", component: EventStartComponent  },
      { path: ":id", component: EventDetailComponent }
    ]
 },
  { path: "requirements", component: RequirementsComponent },
  { path: "add-event", component: AddEventComponent},
  { path: "add-requirement", component: AddRequirementComponent},
  { path: 'edit-event/:id', component: EditEventComponent},
  { path: 'edit-requirement/:id', component: EditRequirementComponent},
  { path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
