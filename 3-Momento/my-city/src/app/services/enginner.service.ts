import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen.model';
import { enginner } from '../models/engineer.model';
import { ArrayType } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EnginnerService {
  private citizen: Citizen;

  constructor() { 
    this.citizen = new enginner ('Tom Holland', 24, 'Los Angeles', 'Ingeniero');
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
