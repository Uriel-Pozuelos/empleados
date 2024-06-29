import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleados';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent {
  empleado: IEmpleado = {
    numero: 0,
    nombre: '',
    correo: '',
    telefono: 0,
    fechaNcimiento: new Date(),
    sexo: true
  };

  constructor(private empleadoService: EmpleadosService) { }

  agregar() {
    // Validaciones
    if(this.empleado.numero == null) return;
    if (this.empleado.nombre.trim().length === 0) return;
    if (this.empleado.correo.trim().length === 0) return;
    if (this.empleado.telefono === null) return;

    // Agregar el empleado usando el servicio
    this.empleadoService.agregarEmpleado(this.empleado);

    // Reiniciar el objeto empleado
    this.empleado = {
      numero: 0,
      nombre: '',
      correo: '',
      telefono: 0,
      fechaNcimiento: new Date(),
      sexo: true
    };
  }

  
  formVisible = false;
  hovering=false;

  toggleForm(){
    this.formVisible = !this.formVisible;
  }

}
