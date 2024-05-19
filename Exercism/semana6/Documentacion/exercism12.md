### Funciones de Verificación
isYelling(message: string): boolean:
Esta función verifica si el mensaje está completamente en mayúsculas y contiene al menos una letra en mayúscula.
message === message.toUpperCase(): Comprueba si el mensaje es completamente en mayúsculas.
/[A-Z]/.test(message): Verifica si el mensaje contiene al menos una letra en mayúscula.
Devuelve true si ambas condiciones se cumplen, lo que significa que el mensaje es un "grito".

isQuestion(message: string): boolean:
Esta función verifica si el mensaje termina con un signo de interrogación (?), después de haber eliminado los espacios en blanco al principio y al final del mensaje con message.trim().
Devuelve true si el mensaje termina con un signo de interrogación.

isSilence(message: string): boolean:
Esta función verifica si el mensaje está vacío o contiene solo espacios en blanco (después de eliminar los espacios en blanco iniciales y finales con message.trim()).
Devuelve true si el mensaje está en silencio (vacío o solo espacios en blanco).

### Función hey(message: string): string
Esta es la función principal que determina la respuesta basada en el mensaje recibido.
Verifica si el mensaje está en silencio:

Si isSilence(message) es true, devuelve 'Fine. Be that way!', indicando que el mensaje está vacío o en silencio.
Verifica si el mensaje es un grito y una pregunta:

Si isYelling(message) y isQuestion(message) son true, devuelve "Calm down, I know what I'm doing!", lo cual indica que el mensaje es un grito (todo en mayúsculas) y una pregunta.
Verifica si el mensaje es un grito:

Si isYelling(message) es true pero no es una pregunta, devuelve 'Whoa, chill out!', lo cual indica que el mensaje es un grito (todo en mayúsculas) pero no es una pregunta.
Verifica si el mensaje es una pregunta:

Si isQuestion(message) es true pero no es un grito, devuelve 'Sure.', lo cual indica que el mensaje es una pregunta.
Si no cumple con ninguna de las condiciones anteriores:

Devuelve 'Whatever.', que es la respuesta por defecto cuando el mensaje no es un grito, no es una pregunta y no está en silencio.
[MiWeb](https://youtu.be/4emvNjGYwCo)