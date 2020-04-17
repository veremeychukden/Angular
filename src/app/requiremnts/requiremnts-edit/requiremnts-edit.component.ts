import { Component, OnInit, Input } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Requirement } from '../requirement.model'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-requiremnts-edit',
  templateUrl: './requiremnts-edit.component.html',
  styleUrls: ['./requiremnts-edit.component.css']
})
export class RequiremntsEditComponent implements OnInit {

  id: number;
  myRequirement: Requirement;


  constructor(private eventService: RequirementService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.myRequirement = this.eventService.getRequirementById(this.id);
      console.log(this.myRequirement);
    });
  }

  editRequirement(): void{

    this.eventService.editRequirement(this.id, this.myRequirement);
  }
  
}
