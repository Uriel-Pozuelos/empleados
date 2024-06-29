import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleados';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent {
  
  constructor (private empleadosService : EmpleadosService) {  }

  get empleados () : IEmpleado []{
    return this.empleadosService.empleados;
  }

  agregarEmpleado(empleado : IEmpleado) {
    this.empleadosService.agregarEmpleado(empleado);
  }

  deleteEmpleado(index: number) {
    // Llamar al método del servicio para eliminar el empleado
    this.empleadosService.eliminarEmpleado(index);

    // Actualizar la lista de empleados después de eliminar
    // this.empleados = this.empleadoService.(); 
  }


}
