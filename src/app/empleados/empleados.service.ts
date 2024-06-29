import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  //Creamos lista de empleados
  private _empleados: IEmpleado[] = [];

  constructor() {
    //Obtenemos la lista de empleados del local storage
    let empleados = localStorage.getItem('empleados');
    if (empleados) {
      this._empleados = JSON.parse(empleados);
    }

   }

  //Creamos el metodo para obtener los empleados
  get empleados(): IEmpleado[] {
    return this._empleados;
  }

  
  //Creamos el metodo para agregar un empleado a la lista
  agregarEmpleado(empleado: IEmpleado) {
    this._empleados.push(empleado);
    
    //Guardamos la lista de empleados en el local storage
    this.actualizarLocalStorage();
  }

  eliminarEmpleado(index: number) {
    if (index >= 0 && index < this._empleados.length) {
      this._empleados.splice(index, 1);
      this.actualizarLocalStorage();
    }
  }

  private actualizarLocalStorage() {
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  
}
