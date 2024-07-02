import { Citizen, Person } from './../models/citizen.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  private citizen: Citizen;

  constructor() {
    this.citizen = new Person('Aliec Smith', 34, 'Brasil', 'Ciudadana');
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

