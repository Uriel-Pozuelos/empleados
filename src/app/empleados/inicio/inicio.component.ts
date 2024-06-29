import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  
  constructor (private empleadosService : EmpleadosService){  }

}
