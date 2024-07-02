import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen.model';
import { police } from '../models/police.model';

@Injectable({
  providedIn: 'root'
})
export class Police1Service {
  private citizen: Citizen;
  constructor() { 
    this.citizen = new police ('Paul Walker', 28, 'Brasil', 'Policia ');
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
