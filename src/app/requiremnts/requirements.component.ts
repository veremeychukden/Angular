import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Requirements } from "../events/requirements.model";
import { RequirementService } from './requirement.service';


@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent  {

  
  constructor(private requirementService : RequirementService) { }
  requirements: Requirements[];

  

  ngOnInit(): void {
    this.requirements = this.requirementService.getRequirements();
    this.requirementService.requireSelected.subscribe((requirements: Requirements[])=> {
        this.requirements = requirements;
    });
  }

  
  

}
