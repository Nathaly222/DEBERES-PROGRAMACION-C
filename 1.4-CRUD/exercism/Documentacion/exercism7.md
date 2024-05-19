## Función toRna


  `export function toRna(input: string): string`
  Esto define una función llamada toRna que toma un parámetro input de tipo string,
  ue representa la secuencia de ADN que se va a convertir,
  y devuelve un valor de tipo string, que es la secuencia de ARN resultante.
  
  `const dictionary: { [key: string]: string } = `
    Se define un diccionario que mapea cada nucleótido de ADN a su correspondiente nucleótido de ARN.

  `let temp =`
   e inicializa una variable temporal temp como una cadena vacía.
   Esta variable se utilizará para construir la secuencia de ARN resultante.

  `input.split('').forEach((element) => `
    Se itera sobre cada caracter de la cadena de entrada input.
    split('') divide la cadena en una matriz de caracteres individuales,
    y luego forEach se utiliza para iterar sobre cada elemento de esta matriz.

    `const current = dictionary[element];`
    Para cada caracter de la cadena de entrada, se busca en el diccionario dictionary
    su correspondiente caracter de ARN. Por ejemplo, si el caracter de entrada es 'G',
    current será igual a 'C'.

    if (current === undefined){
      throw new Error('Invalid input DNA.');
    }
    Se verifica si el caracter de entrada no tiene un correspondiente en el diccionario,
    lo que indicaría que la entrada no es válida. En ese caso, se lanza un error con el mensaje 'Invalid input DNA.'.

    temp += current;
    Se agrega el caracter de ARN correspondiente a la variable temp,
    que está construyendo la secuencia de ARN resultante.
  

  `return temp;`
  Se devuelve la secuencia de ARN resultante.

[MiWeb](https://youtu.be/JbOXcgfLvt0)