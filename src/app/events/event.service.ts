import { Injectable, EventEmitter } from '@angular/core';
import { Event } from "./event.model";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSelected = new EventEmitter<Event>();
  eventUpdate = new EventEmitter<Event[]>();

  private events : Event[] = [
    new Event("Course JS", "Promise and Fetch", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"), 
    new Event("HTML CSS", "List in html", "https://miro.medium.com/max/1200/1*aK6-A2EmtFCYriaKgoguPw.png"),
    new Event("Looney Tunes", "Bugs Bunny", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/13/13e8d33a081be20f7939aa13cad01b3f0fa68be6_full.jpg"),
  ]

  getEvents(): Event[] {
      return this.events.slice();
  }


  addNewEvent(data: Event): void{
    this.events.push(data);
    this.eventUpdate.emit(this.events);
  }

  getSingleEvent(index: number): Event{
    return this.events[index];
  }

  deleteEvent(data: Event): void
  {
    var tmp = this.events.indexOf(data);
    this.events.splice(tmp, 1);
    this.eventUpdate.emit(this.events);
  }

  getEventById(index: number): Event{

    return this.events[index];
  }

  editEvent(index: number, newEvent: Event): void{
    this.events[index] = newEvent;
    this.eventUpdate.emit(this.events);
  }

  constructor() { }
}
