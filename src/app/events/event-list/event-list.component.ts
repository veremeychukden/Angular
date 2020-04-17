import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from "../event.model";
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  
  @Output() eventSelected = new EventEmitter<Event>(); 

  constructor(private eventService: EventService) { }
  events: Event[];

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
    this.eventService.eventUpdate.subscribe((events: Event[]) => {
      this.events = events;
    })
  }


  

  

}
