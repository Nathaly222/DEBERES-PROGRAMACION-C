import { Injectable } from '@angular/core';
import { Citizen, Person } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class Citizen2Service {
  private citizen: Citizen;

  constructor() { 
    this.citizen = new Person('Diana Prince', 19, 'California', 'Ciudadana');
  }
   getCitizen(): Citizen {
    return this.citizen;
   }

   livesCharacter(): string {
    return this.citizen.livesCharacter();
   }

   roleCharacter(): string {
    return this.citizen.roleCharacter();
   }

   ageCharacter(): number | string{
    return this.citizen.ageCharacter();
  }
}
