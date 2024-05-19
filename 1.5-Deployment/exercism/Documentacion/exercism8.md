## Space Age
Este objeto mapea los nombres de diferentes planetas a sus respectivos factores de conversión en relación con la Tierra.
planet: keyof typeof EARTH_TO_OTHER_PLANETS: Este parámetro indica el nombre del planeta al que se desea convertir la edad.
seconds: number: Este parámetro representa la cantidad de segundos de vida de una persona.
La función realiza los siguientes pasos:

Calcula los años terrestres (earthYears) dividiendo los segundos totales (seconds) entre el número de segundos en un año terrestre (31557600 segundos).
Usa el factor de conversión del planeta específico (EARTH_TO_OTHER_PLANETS[planet]) para determinar cuántos años del planeta dado equivalen a los años terrestres calculados.
Devuelve el resultado redondeado a dos decimales usando toFixed(2) y luego convierte este valor a un número utilizando Number().
esta función te permite calcular la edad de una persona en años de diferentes planetas utilizando un objeto que mapea los factores de conversión entre la Tierra y otros planetas.
[MiWeb](https://youtu.be/N2ciWC5cUuY)
