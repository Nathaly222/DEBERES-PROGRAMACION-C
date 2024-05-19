## Matrix
El constructor de la clase toma una descripción de la matriz en forma de cadena (description) y la almacena en una propiedad privada description.
Llama al método parseMatrix() dentro del constructor para inicializar las propiedades rows y columns de la matriz.
parseMatrix() se encarga de analizar la cadena de descripción de la matriz y construir las filas y columnas correspondientes.
Divide la descripción en líneas usando split('\n'), luego divide cada línea en números separados por espacios utilizando split(' ').
Convierte los números de cadena a números enteros utilizando map(Number).
Almacena las filas en this.rows.
Calcula las columnas recorriendo las filas y extrayendo los elementos de cada posición de columna para construir this.columns.
Métodos Públicos (getRows(), getColumns()):

getRows(): Retorna las filas de la matriz como una matriz de matrices (number[][]).
getColumns(): Retorna las columnas de la matriz como una matriz de matrices (number[][]).
Inicialización de la Matriz:

Cuando se crea una instancia de Matrix con una descripción de la matriz, el constructor llama automáticamente a parseMatrix() para analizar la descripción y construir las filas y columnas de la matriz.
Obtención de Filas y Columnas:

getRows(): Retorna la matriz de filas de la matriz.
getColumns(): Retorna la matriz de columnas de la matriz.
[MiWeb](https://youtu.be/4emvNjGYwCo)