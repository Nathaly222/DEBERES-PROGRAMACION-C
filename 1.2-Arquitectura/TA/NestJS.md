# NestJS

En `app.module`, podemos importar módulos.

`app.service`: Se utiliza para que este controlador llame a este servicio inyectable.

`app.controllers`: Creamos un importe que llamamos de:

```typescript
import { Injectable } from '@nestjs/common';
```

- `import { Injectable } from '@nestjs/common';`: Esta línea importa la clase `Injectable` del paquete `@nestjs/common`. `@nestjs/common` es un módulo de NestJS que proporciona funcionalidades comunes y decoradores utilizados en toda la aplicación.

- `@Injectable()`: Esta es una anotación de TypeScript que marca la clase `AppService` como un servicio que puede ser inyectado en otros componentes dentro de la aplicación NestJS. Cuando una clase está marcada con `@Injectable()`, NestJS la trata como un componente que puede ser administrado por el sistema de inyección de dependencias de NestJS.

```typescript
class AppService { ... }
```

Aquí definimos la clase `AppService`, que es un servicio en nuestro proyecto NestJS. Los servicios en NestJS son clases que encapsulan la lógica de negocio y realizan operaciones específicas. Estos servicios se pueden inyectar en otros componentes, como controladores, para su reutilización y modularidad.

```typescript
getHello(): string { ... }
```

Este es un método dentro de la clase `AppService`. En este caso, el método `getHello()` simplemente devuelve la cadena "Hello World!". Puedes imaginar este método como una función que realiza alguna operación y devuelve un resultado. En este caso, el resultado es una cadena estática.
