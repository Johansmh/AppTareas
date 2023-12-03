import { Component } from '@angular/core';
import { Tarea } from '../models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTareas: Tarea[] = []
  nombreTarea = '';

  constructor () {}

  ngInit(): void {}

  agregarTarea() {
    //Crear un objeto tarea
     const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
     }

    //Agregar el objeto tarea al array:
     this.listaTareas.push(tarea)

    //Reset el forms
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void {
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(index: number, tarea: Tarea): void {
    this.listaTareas[index].estado = !tarea.estado

  }
}
