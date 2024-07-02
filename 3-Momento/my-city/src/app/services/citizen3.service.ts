import { Injectable } from '@angular/core';
import { Citizen, Person} from '../models/citizen.model';


@Injectable({
  providedIn: 'root'
})
export class Citizen3Service {  
  private citizen: Citizen;

  constructor() { 
    this.citizen = new Person ('Romeo Santos', 37, 'Los Angeles', 'Ciudadano');
  }

  getCitizen(): Citizen {
    return this.citizen;
  }

  livesCharacter(): string {
    return this.citizen.livesCharacter();
  }

  roleCharacter():string {
    return this.citizen.roleCharacter();
  }

  ageCharacter(): number | string {
    return this.citizen.ageCharacter();
  }
}
