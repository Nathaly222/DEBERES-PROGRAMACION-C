# Robot Name
### Generación de Nombres Aleatorios
generateRandomName: Esta función genera un nombre aleatorio en el formato de dos letras mayúsculas seguidas de tres dígitos.
alphabet: Contiene las letras mayúsculas del alfabeto.
letters: Selecciona dos letras al azar del alfabeto.
digits: Genera un número aleatorio entre 0 y 999, lo convierte a una cadena y asegura que tenga exactamente tres dígitos usando padStart(3, '0').
return: Combina las dos letras y los tres dígitos para formar el nombre.

### Gestión de Nombres

NameManager: Esta clase gestiona los nombres usados y asegura que cada nombre generado sea único.
usedNames: Un conjunto (Set) para almacenar los nombres que ya han sido utilizados.
getUniqueName:
Genera un nuevo nombre aleatorio usando generateRandomName().
Verifica si el nombre ya está en usedNames.
Si el nombre ya está en uso, repite el proceso hasta encontrar un nombre único.
Añade el nombre único a usedNames y lo devuelve.
releaseAllNames: Limpia el conjunto de nombres usados, permitiendo que los nombres puedan ser reutilizados.

### Clase Robot

NameManager: Esta clase gestiona los nombres usados y asegura que cada nombre generado sea único.

Robot: Esta clase representa un robot con un nombre único.
_name: Almacena el nombre del robot, inicialmente null.
get name:
Si _name es null, obtiene un nombre único de nameManager y lo asigna a _name.
Devuelve el nombre del robot.
resetName: Resetea el nombre del robot a null. La próxima vez que se solicite el nombre, se generará un nuevo nombre único.
releaseNames: Método estático que llama a releaseAllNames en nameManager, liberando todos los nombres usados.

### Preguntas.
**1.- ¿Por qué se utiliza un bucle do-while en el método getUniqueName de la clase NameManager?**
El bucle do-while garantiza que el nombre generado sea único. Se genera un nombre aleatorio y luego se verifica si ya está en el conjunto de nombres utilizados (usedNames). Si el nombre generado ya está en uso, se vuelve a generar otro nombre hasta que se genere uno que no esté en uso.

**2.- ¿Por qué se utiliza un Set en lugar de un Array para almacenar los nombres utilizados en la clase NameManager?**
La búsqueda de elementos en un Set es más eficiente que en un Array, especialmente cuando la cantidad de elementos es grande. En un Set, la búsqueda se realiza en tiempo constante (O(1)), mientras que en un Array, la búsqueda lineal puede ser menos eficiente, especialmente a medida que crece el tamaño del Array. El Set se encarga automáticamente de mantener solo elementos únicos.

**3.- ¿Cuál es el propósito del método releaseAllNames en la clase NameManager y cuándo se supone que debe llamarse?**
Tiene como propósito liberar todos los nombres utilizados en el conjunto (Set) usedNames, limpiándolo para que pueda comenzar a almacenar nombres nuevos nuevamente. Este método se supone que debe llamarse cuando se desea restablecer el estado del NameManager, liberando todos los nombres utilizados hasta ese momento.

**4.- ¿Qué sucede si intentamos crear un nuevo robot sin llamar al método resetName después de llamar al método releaseNames?**

Los robots creados después de la liberación de los nombres seguirán utilizando los nombres que se generaron antes de la liberación.
El método releaseNames en la clase NameManager limpia el conjunto de nombres utilizados, pero no afecta a los nombres asignados previamente a los robots. Por lo tanto, los robots creados después de la liberación de nombres seguirán manteniendo los nombres que se les asignaron antes de la liberación.
[Video](https://youtu.be/cEOlyhqHhiE)