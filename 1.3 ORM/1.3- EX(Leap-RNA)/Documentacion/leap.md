### Función isLeap


`export function isLeap(year: number): boolean {`
   Esto define una función llamada isLeap que toma un parámetro year de tipo number
   y devuelve un valor booleano (true si el año es bisiesto, false si no lo es).
   La palabra clave export indica que esta función es accesible desde fuera de este archivo TypeScript si se importa.
  `return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;`
  Esta línea contiene la lógica para determinar si el año es bisiesto.
  La regla básica para determinar si un año es bisiesto es que sea divisible por 4,
   excepto en los años que son divisibles por 100 pero no por 400.
   Aquí está la explicación detallada de la expresión:
   `year % 100 !== 0 && year % 4 === 0:` Esta parte verifica si el año no es divisible por 100 pero sí es divisible por 4.
  Si esto se cumple, significa que el año es bisiesto, excepto en el caso de que también sea divisible por 400.
  `year % 400 === 0:` Esta parte verifica si el año es divisible por 400.
   Si es así, entonces el año es bisiesto, independientemente de las otras condiciones.

[Mi web](https://youtu.be/JbOXcgfLvt0)