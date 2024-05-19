## Trabajando en Nuestras Vistas

Vamos a trabajar en nuestras vistas. Este es mi primer "Hola mundo". En la URL vamos a asociar cada una de las rutas de nuestros proyectos. Creamos un archivo `views.py` donde vamos a declarar nuestro código, dentro de él vamos a tener diferentes funciones.

```python
from django.http import HttpResponse

def saludo(request):
    return HttpResponse("Hola Mundo")
from django.http import HttpResponse: Esta línea importa la clase HttpResponse del módulo django.http. HttpResponse es una clase que representa una respuesta HTTP que se enviará al cliente cuando se acceda a una vista.

def saludo(request):: Esto define una función llamada saludo que toma un parámetro llamado request. En Django, las vistas toman un objeto request que representa la solicitud HTTP entrante del cliente.

return HttpResponse("Hola Mundo"): Esta línea crea una instancia de la clase HttpResponse con el contenido "Hola Mundo" y la devuelve. En otras palabras, cuando esta vista se accede a través de una URL en el navegador, la respuesta será "Hola Mundo".

Tenemos nuestra vista creada cuya lógica es devolver el mensaje HTTP, que en este caso sería "Hola mundo".