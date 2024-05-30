# MyBusiness
En Agular pudimos crear los componentes que mediante ellos creamos nuestro componente Jefe(Padre) y nuestro componentes empleados (Hijo).
Componentes: Son las piezas fundamentales de una aplicación Angular. Cada componente tiene una lógica (controlador) y una vista (plantilla HTML). Los componentes se utilizan para dividir la interfaz de usuario en partes reutilizables.
Módulos: Un módulo es un contenedor para un conjunto de componentes, servicios, directivas y tuberías relacionadas. El módulo raíz es AppModule, que inicia la aplicación.

## JefeComponent
Este codigo define  un componente Jefe, que tiene la capacidad de dar ordenes a las otras i8nstancias llamadas EmpleadoComponente.

Imports y Decoradores:
`@ViewChild`: Permite acceder a instancias de elementos del DOM hijos o componentes hijos, se usara como referencia a la instancia EmpleadosComponent.

Propiedades:
`empleado1 y empleado2`: Estas son propiedades del tipo EmpleadosComponent que serán inicializadas por Angular. Se usa `!` para indicar que estas propiedades serán inicializadas después de la creación del componente.

Métodos:
`ngAfterViewInit()`: Este método del ciclo de vida de Angular se llama después de que la vista del componente y los elementos hijos han sido inicializados. En este caso, está vacío porque no se necesita realizar ninguna acción inmediata después de la inicialización de la vista.
`giveOrder(order: string)`: Este método toma una cadena order como argumento y la pasa a los métodos executeOrder de empleado1 y empleado2. Esto hará que ambos empleados ejecuten la orden especificada.

Funcionamiento General:
Cuando el JefeComponent se ha renderizado completamente, puede utilizar @ViewChild para acceder a empleado1 y empleado2.
El método giveOrder permite al jefe dar una orden, que es ejecutada por ambos empleados.

## EmpleadoComponent
Propiedades
`@Input() name: string = '';`: Esta propiedad permite que el componente reciba un valor del componente padre. En este caso, name es una cadena que representa el nombre del empleado.

`orderMessage: string = '';`
Esta propiedad es una cadena que se usa para almacenar y mostrar el mensaje de la orden que el empleado está ejecutando.

`executeOrder(order: string):`
Este método toma una cadena order como argumento y actualiza orderMessage con un mensaje que incluye la orden recibida.

`ngAfterContentInit:` Este método forma parte del ciclo de vida de Angular. Se ejecuta después de que el contenido del componente ha sido proyectado. En este caso, está vacío porque no se necesita ejecutar ninguna lógica específica en ese momento.

`onExecuteOrder:` Este método se utiliza para ejecutar una orden específica cuando se llama. En este caso, siempre ejecuta la orden 'lavar billetes' y actualiza orderMessage llamando a executeOrder con esa orden.
[Link](https://youtu.be/88elJy_boY8)