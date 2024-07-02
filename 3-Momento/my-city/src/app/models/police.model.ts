import { Citizen } from "./citizen.model";

export class police extends Citizen {
    constructor(
        name: string,
        age: number,
        city: string,
        public role: string
    ) {
        super(name, age, city);
    }
  
    getDescription(): string {
        return `${this.name}, de ${this.age} años, tiene el siguiente rol: ${this.role}.`;
    }

    override livesCharacter(): string {
        return `${this.name} vive en: ${this.city}.`;
    }
  
    override roleCharacter(): string {
        return `${this.name} tiene el siguiente rol: ${this.role}.`;
    }
    ageCharacter(): number | string {
        return `${this.name} tiene la suiguiente edad: ${this.age}.`;
      }
}