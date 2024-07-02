import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen.model';
import { mayor } from '../models/mayor.model';

@Injectable({
  providedIn: 'root'
})
export class Mayor2Service {
  private citizen: Citizen;

  constructor() {
    this.citizen = new mayor ('Daniel Noboa', 156, 'Ecuador', 'ExPresidente');
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
  ageCharacter(): number | string {
    return this.citizen.ageCharacter();
  }
}
