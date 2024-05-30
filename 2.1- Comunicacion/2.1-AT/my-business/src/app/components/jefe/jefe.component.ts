import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { EmpleadosComponent } from '../empleados/empleados.component';

@Component({
  selector: 'app-jefe',
  standalone: true,
  imports: [EmpleadosComponent],
  templateUrl: './jefe.component.html',
  styleUrl: './jefe.component.css'
})
export class JefeComponent implements AfterViewInit{
  @ViewChild('empleado1') empleado1!: EmpleadosComponent;
  @ViewChild('empleado2') empleado2!: EmpleadosComponent;
  constructor() {}

  ngAfterViewInit(): void {}

  giveOrder(order: string): void {
    this.empleado1.executeOrder(order);
    this.empleado2.executeOrder(order);
  }
}
