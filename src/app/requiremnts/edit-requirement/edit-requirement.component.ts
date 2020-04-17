import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Requirements } from 'src/app/events/requirements.model';

@Component({
  selector: 'app-edit-requirement',
  templateUrl: './edit-requirement.component.html',
  styleUrls: ['./edit-requirement.component.css']
})
export class EditRequirementComponent implements OnInit {


  id: number;
  myRequirement: Requirements;
  constructor(private requirementService: RequirementService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.myRequirement = this.requirementService.getRequirementById(this.id);
      console.log(this.myRequirement);
    });
  }

  editRequirement(): void{  
    this.requirementService.editRequirement(this.id, this.myRequirement);
  }
   
  
}
