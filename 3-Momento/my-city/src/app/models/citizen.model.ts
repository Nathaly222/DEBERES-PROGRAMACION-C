export  abstract class Citizen {//Abstracción define una interfaz común (propiedades y métodos abstractos) para todas sus subclases sin implementar detalles específicos.
    constructor(
        public name: string,
        public age: number,
        public city: string,
        
    ){}
    
    abstract getDescription(): string;

    abstract livesCharacter(): string;
    
    abstract roleCharacter(): string;

    abstract ageCharacter(): number | string ;
    } 

export class Person extends Citizen {//Herencia Person hereda de citizen reutilizando las propiedades y métodos de Person y añadiendo sus propias propiedades (role) y métodos específicos. 
    constructor(
      name: string,
      age: number,
      city: string,
      public role: string
    ) {
      super(name, age, city);
    }
  
    getDescription(): string {
      return `${this.name} tiene el siguiente rol: ${this.role}.`;
    }
  
    override livesCharacter(): string {  //override en TypeScript se utiliza en clases que extienden otras clases (herencia) para indicar que un método en la subclase está sobrescribiendo un método con el mismo nombre en la superclase.
      return `${this.name} vive en: ${this.city}.`;
  }
  
    override roleCharacter(): string {
      return `${this.name} tiene el siguiente rol: ${this.role}.`;
    }

    ageCharacter(): number| string {
      return `${this.name} tiene la suiguiente edad: ${this.age}.`;
    }
  }