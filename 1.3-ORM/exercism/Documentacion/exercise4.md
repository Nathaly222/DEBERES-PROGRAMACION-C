# Duo de colores de resistencias.
## Definición `COLORS`
Se define un arreglo `COLORS` que contiene los nombres de los colores en un orden específico que corresponde a los valores estándar usados en resistencias para denotar diferentes valores numéricos (de 0 a 9).

## Función `colorCode`:

Esta función toma un color (como cadena) y devuelve su índice en el arreglo `COLORS`. El índice de cada color en el arreglo corresponde al valor numérico asociado con ese color en el sistema de codificación de bandas de resistencias. Por ejemplo, `colorCode('red')` devolvería 2, ya que 'red' es el tercer elemento del arreglo `COLORS`, y los índices en JavaScript empiezan en 0.

## Función `decodedValue`:

Esta función exportada calcula y devuelve el valor de una resistencia basado en los dos primeros colores de un arreglo de cadenas proporcionado. La función utiliza desestructuración de arreglos para obtener los dos primeros elementos, que representan las dos primeras bandas de color de una resistencia. Los argumentos `tens` y `ones` representan respectivamente la banda de las decenas y la banda de las unidades de la resistencia.
[Miweb](https://youtu.be/o0NlROAUyf4)