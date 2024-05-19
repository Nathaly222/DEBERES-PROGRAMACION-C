## Clase DnDCharacter
La clase DnDCharacter representa un personaje de Dungeons & Dragons y se utiliza para generar las estadísticas básicas de este personaje, como fuerza, destreza, constitución, inteligencia, sabiduría, carisma y puntos de golpe (hitpoints).

Propiedades de la Clase
hitpoints: Representa los puntos de golpe del personaje.
strength, dexterity, constitution, intelligence, wisdom, charisma: Representan las estadísticas básicas del personaje en fuerza, destreza, constitución, inteligencia, sabiduría y carisma, respectivamente.
Método constructor()
En el constructor de la clase:

Generación de Estadísticas:
this.strength = DnDCharacter.generateAbilityScore(): Genera un valor aleatorio para la fuerza del personaje usando generateAbilityScore().
this.dexterity = DnDCharacter.generateAbilityScore(): Genera un valor aleatorio para la destreza del personaje.
this.constitution = DnDCharacter.generateAbilityScore(): Genera un valor aleatorio para la constitución del personaje.
this.intelligence = DnDCharacter.generateAbilityScore(): Genera un valor aleatorio para la inteligencia del personaje.
this.wisdom = DnDCharacter.generateAbilityScore(): Genera un valor aleatorio para la sabiduría del personaje.
this.charisma = DnDCharacter.generateAbilityScore(): Genera un valor aleatorio para el carisma del personaje.
Cálculo de Puntos de Golpe:
this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution): Calcula los puntos de golpe sumando 10 puntos base más el modificador de constitución del personaje, obtenido mediante getModifierFor().
Métodos Estáticos
generateAbilityScore():
Este método estático genera una puntuación de habilidad aleatoria siguiendo las reglas de Dungeons & Dragons:
Lanza 4 dados de 6 caras (this.rollDice(4)).
Ordena los resultados de menor a mayor (.sort()).
Toma los tres resultados más altos (.slice(1, 4)).
Suma estos tres resultados para obtener la puntuación de habilidad final.
getModifierFor(abilityValue: number):
Este método estático calcula el modificador de una puntuación de habilidad dada:
Resta 10 de la puntuación de habilidad (abilityValue - 10).
Divide el resultado entre 2 y toma la parte entera (Math.floor((abilityValue - 10) / 2)).
Devuelve este valor como el modificador de habilidad.
rollDice(quantity: number) y rollDie():
Estos métodos privados estánticos son utilizados por generateAbilityScore() para simular el lanzamiento de dados:
rollDie(): Lanza un dado de 6 caras y devuelve el resultado.
rollDice(quantity: number): Lanza una cantidad especificada de dados y devuelve un array con los resultados.
