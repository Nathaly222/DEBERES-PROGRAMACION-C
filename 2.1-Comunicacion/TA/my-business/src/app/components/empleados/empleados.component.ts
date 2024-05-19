import { Component, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})

export  class EmpleadosComponent implements AfterContentInit {
  @Input () name: string = '';
  orderMessage: string = '';

  constructor () {}

  executeOrder(order: string) {
    this.orderMessage =  `El empleado esta ejecutando la siguiente orden: ${order}`;
  }

  ngAfterContentInit(): void {}

  onExecuteOrder(): void {
    this.executeOrder('lavar billetes ');
  }
}
