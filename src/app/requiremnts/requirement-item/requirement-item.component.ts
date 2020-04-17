import { Component, OnInit, Input } from '@angular/core';
import { Requirements } from "../../events/requirements.model";
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-item',
  templateUrl: './requirement-item.component.html',
  styleUrls: ['./requirement-item.component.css']
})
export class RequirementItemComponent implements OnInit {


  @Input() myRequirement : Requirements;
  @Input() index: number;

  constructor(private requirementService: RequirementService) { }

  ngOnInit(): void {
  }
  onSelected() {
    this.requirementService.requireSelected.emit(this.myRequirement);
  }
  
  deleteRequirement(){
    alert("Requiremnt delete successfuly");
    this.requirementService.deleteRequirement(this.myRequirement);
  }
}
