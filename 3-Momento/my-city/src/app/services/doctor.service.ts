import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen.model';
import { doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private citizen: Citizen;

  constructor() {
    this.citizen = new doctor('Charlie Brown', 30, 'Puerto Rico', 'Doctor');
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

