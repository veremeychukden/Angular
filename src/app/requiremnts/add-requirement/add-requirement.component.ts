import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Requirements } from 'src/app/events/requirements.model';

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class AddRequirementComponent implements OnInit {


  

  constructor(private requirementService: RequirementService) { }
  
  ReqName: string;
  ReqDescription: string;

  ngOnInit(): void {
  }

  addRequirement() {
    this.requirementService.addRequirement(new Requirements(this.ReqName, this.ReqDescription));
  }

}
