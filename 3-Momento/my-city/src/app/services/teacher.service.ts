import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen.model';
import { teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  public citizen: Citizen;
  constructor() {
    this.citizen = new teacher ('Vin Diesel', 45, 'Brasil', 'Profesor y Corredor de carreras ilegales');
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
