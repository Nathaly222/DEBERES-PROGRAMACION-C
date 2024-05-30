# Trío de colores de resistencia
## Función `colorCode`:
Esta función toma un color como argumento y devuelve el índice del color dentro del arreglo `COLORS`. Esto se logra usando el método `.indexOf()`, que busca el color proporcionado en el arreglo y devuelve su posición (índice). Este índice corresponde al valor numérico asociado con el color en aplicaciones como la decodificación de resistencias.

## Interfaz `IUnits`:
Esta es una definición de tipo que establece la estructura que deben tener los objetos que representan unidades métricas. Cada unidad tiene un `name` (nombre de la unidad), `numberOfZeros` (número de ceros que representan la magnitud de la unidad), y `representation` (una representación textual de la cantidad de ceros, utilizada posiblemente para formateo o visualización).

## Array `UNITS`:
Este arreglo contiene objetos que siguen la interfaz `IUnits`. Cada objeto representa una unidad métrica específica, como giga, mega y kilo, que son comúnmente usadas en ciencias e ingeniería para describir magnitudes grandes en términos de potencias de diez.
[Miweb](https://youtu.be/o0NlROAUyf4)