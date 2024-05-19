## Pangram
Uso de un conjunto para el alfabeto:
Creamos un conjunto (alphabetSet) que contiene todas las letras del alfabeto en minúsculas ('a' a 'z') utilizando Set<string>('abcdefghijklmnopqrstuvwxyz').
Recorrido de la cadena de entrada:
Iteramos sobre cada carácter de la cadena value convertida a minúsculas (value.toLowerCase()).
Para cada carácter, eliminamos ese carácter del conjunto alphabetSet usando alphabetSet.delete(char). Esto significa que si encontramos una letra del alfabeto, la eliminamos del conjunto.
Comprobación de completitud:
Después de eliminar un carácter del conjunto, verificamos si el tamaño del conjunto se ha reducido a cero (alphabetSet.size === 0). Si es así, significa que hemos encontrado todas las letras del alfabeto en la cadena y devolvemos true indicando que es un pangrama.
Resultado final:
Si terminamos de recorrer la cadena y aún quedan letras en alphabetSet (su tamaño es mayor que cero), entonces devolvemos false indicando que no es un pangrama, ya que faltan una o más letras del alfabeto.
Este enfoque es más directo y eficiente para verificar si una cadena es un pangrama, utilizando un conjunto para rastrear las letras que aún necesitamos encontrar en la cadena de entrada. La verificación se realiza en tiempo lineal en función de la longitud de la cadena de entrada.
[MiWeb](https://youtu.be/XMioXwFhyC0)