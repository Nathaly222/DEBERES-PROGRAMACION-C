import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JefeComponent } from './components/jefe/jefe.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JefeComponent, EmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-business';
}
