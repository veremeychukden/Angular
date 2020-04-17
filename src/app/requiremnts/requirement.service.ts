import { Injectable, EventEmitter } from '@angular/core';
import { Requirements } from '../events/requirements.model';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  requireSelected = new EventEmitter<Requirements>();
  requireUpdate = new EventEmitter<Requirements[]>();

  requirements: Requirements[] = [
    new Requirements("Lorem ipsum  dolor site ammet consecteur", "Lorem ipsum dolor site amet consecteur"),
    new Requirements("Lorem ipsum  dolor site ammet consecteur", "Lorem ipsum  dolor site ammet consecteur")

  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  getRequirements(): Requirements[]{
    return this.requirements.slice();
  }

  addRequirement(item: Requirements){
    this.requirements.push(item);
    this.requireUpdate.emit(this.requirements);
  }

  deleteRequirement(item: Requirements): void{
 
    var tmp = this.requirements.indexOf(item);
    this.requirements.splice(tmp, 1);
    this.requireUpdate.emit(this.requirements);
    this.requireUpdate.emit(this.requirements);

  }

  getRequirementById(index: number): Requirements{

    return this.requirements[index];
  }

  editRequirement(index: number, newRequirement: Requirements): void{
    this.requirements[index] = newRequirement;
    this.requireUpdate.emit(this.requirements);
  }
}
