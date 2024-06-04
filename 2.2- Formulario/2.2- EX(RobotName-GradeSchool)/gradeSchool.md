# Grade School
### Definición de Tipos:

Student: Es un alias para el tipo string, que representa el nombre de un estudiante.
Grade: Es un alias para el tipo number, que representa la calificación de un estudiante.
StudentRooster: Es un tipo que representa un registro de estudiantes y sus calificaciones. Utiliza un objeto Record<string, Student[]>, donde las claves son los niveles de calificación y los valores son matrices de estudiantes.
StudentGrades: Es un tipo que representa un mapa de estudiantes y sus calificaciones. Utiliza la clase Map<Student, Grade>.

### Clase GradeSchool:

students: Es un campo privado que almacena la información de los estudiantes y sus calificaciones utilizando un Map<Student, Grade>.
constructor(): Es el constructor de la clase GradeSchool. Inicializa el campo students como un nuevo Map.
add(student: Student, level: Grade): Es un método público que agrega un estudiante y su calificación al mapa students.
grade(level: Grade): Es un método público que devuelve una lista de estudiantes que tienen la calificación especificada. Filtra los estudiantes en base a su calificación y luego devuelve solo los nombres de los estudiantes.
roster(): Es un método público que devuelve un registro de todos los estudiantes y sus calificaciones. Itera sobre el mapa students, crea una entrada para cada calificación en el objeto StudentRooster, y asigna una lista de estudiantes con esa calificación utilizando el método grade().

### Preguntas 
**1.- ¿Por qué se utiliza un Map para almacenar la relación entre estudiantes y grados en lugar de una estructura de datos diferente?**
Los Map proporcionan métodos y propiedades integradas para agregar, eliminar, modificar y consultar elementos, lo que simplifica la gestión de la relación entre estudiantes y grados en comparación con otras estructuras de datos que pueden requerir implementaciones más complejas.

**2.- ¿Qué hace el método add en la clase GradeSchool y cuál es su propósito?**
El método add en la clase GradeSchool se utiliza para añadir un estudiante junto con su grado correspondiente al registro de la escuela.
El propósito principal del método add es permitir que la escuela registre nuevos estudiantes y asigne a cada uno un grado específico. Esto es esencial para mantener un seguimiento de la información relacionada con los estudiantes matriculados en la escuela.

**3.- ¿Por qué se utiliza el método Array.from() en el método roster para convertir el Map de estudiantes a una matriz de entradas (entries) antes de iterar sobre él?**
Convertir el Map a una matriz de entradas utilizando Array.from() facilita la manipulación de datos. La matriz resultante contiene pares [clave, valor], lo que permite una manipulación más sencilla de los datos en comparación con el Map original.
**4.- ¿Qué hace el método sort() en el método grade y en el método roster? ¿Por qué se utiliza este método en estos lugares?**
El método sort() se utiliza en los métodos grade y roster para ordenar alfabéticamente los nombres de los estudiantes, lo que mejora la legibilidad y la consistencia de la salida. Esto facilita la búsqueda y comprensión de la lista de estudiantes en un grado específico o en el registro completo de la escuela.
[Video](https://youtu.be/mP5rmczY3d0)