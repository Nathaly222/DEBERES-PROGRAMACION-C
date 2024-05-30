## Darts
Este código es una función llamada score que toma dos parámetros numéricos (x y y) que representan las coordenadas de un punto en un plano cartesiano. La función calcula la distancia de este punto al origen (0,0) utilizando la fórmula de la distancia euclidiana (o distancia al origen) en un plano bidimensional.

distanceToDart: calcula la distancia euclidiana desde el punto (x, y) hasta el origen (0, 0). La distancia se calcula como la raíz cuadrada de la suma de los cuadrados de las coordenadas x y y. Esto es una aplicación directa del teorema de Pitágoras en un plano cartesiano.
la función utiliza una serie de declaraciones if para determinar el puntaje basado en la distancia calculada distanceToDart:
Si la distancia distanceToDart es mayor que 10 unidades, la función devuelve 0. Esto significa que si el punto está fuera de un círculo de radio 10 centrado en el origen, el puntaje es cero.
Si la distancia es mayor que 5 pero no más de 10 unidades, la función devuelve 1. Esto significa que si el punto está dentro del círculo de radio 10 pero fuera del círculo de radio 5, el puntaje es 1.
Si la distancia es mayor que 1 pero no más de 5 unidades, la función devuelve 5. Esto significa que si el punto está dentro del círculo de radio 5 pero fuera del círculo de radio 1, el puntaje es 5.

Si la distancia es 1 unidad o menos, la función devuelve 10. Esto significa que si el punto está dentro del círculo de radio 1 (es decir, dentro de un radio de 1 unidad desde el origen), el puntaje es 10.

la función score asigna un puntaje en función de la cercanía del punto (x, y) al origen en un plano cartesiano. Cuanto más cerca esté el punto del origen, mayor será el puntaje asignado, de acuerdo con las reglas establecidas por los valores de distancia definidos en las declaraciones if.
[MiWeb](https://youtu.be/XMioXwFhyC0)