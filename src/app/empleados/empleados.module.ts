import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { EmpleadosService } from './empleados.service';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    InicioComponent,
    EmpleadoListComponent,
    AddEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InicioComponent,
    EmpleadoListComponent
  ],
  providers: [
    // ClientesService
    EmpleadosModule
  ]
  
})
export class EmpleadosModule { }
