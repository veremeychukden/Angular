import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  id: number;
  myEvent: Event;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.myEvent = this.eventService.getEventById(this.id);
      console.log(this.myEvent);
    });
  }

  editEvent(): void{

    this.eventService.editEvent(this.id, this.myEvent);
  }
  

}
