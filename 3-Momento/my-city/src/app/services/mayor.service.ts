import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen.model';
import { mayor } from '../models/mayor.model';


@Injectable({
  providedIn: 'root'
})
export class MayorService {
  private citizen: Citizen;

  constructor() {
    this.citizen = new mayor ('Abdala Bucaram', 120, 'Brasil', 'Presidente');
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
