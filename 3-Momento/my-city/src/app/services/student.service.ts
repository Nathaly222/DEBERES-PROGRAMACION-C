import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen.model';
import { students } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private citizen: Citizen;
  constructor() { 
    this.citizen = new students('Leonardo DiCaprio', 18, 'Brasil', 'Estudiante');
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
