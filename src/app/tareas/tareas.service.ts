import { Injectable } from "@angular/core";
import { type NuevaTareaInfo } from "./tareas.model";
import { Tarea } from "./tarea/tarea.model";

@Injectable({ providedIn: 'root' })
export class TareasService {
    private tareas: Tarea[] = [];

    constructor() {
        const tareas = localStorage.getItem('tareas');
        if (tareas) {
            this.tareas = JSON.parse(tareas);
        }
    }

    obtenerTareasDeUsuario(idUsuario: string) {
        return this.tareas.filter((tarea) => tarea.idUsuario === idUsuario)
    }

    agregarTarea(infoDeTarea: NuevaTareaInfo, idUsuario: string) {
        this.tareas.push({
            id: new Date().getTime().toString(),
            idUsuario: idUsuario,
            titulo: infoDeTarea.titulo,
            resumen: infoDeTarea.resumen,
            expira: infoDeTarea.fecha
        });
        this.guardarTareas();
    }

    eliminarTarea(idUsuario: string) {
        this.tareas = this.tareas.filter((tarea) => tarea.id !== idUsuario);
        this.guardarTareas();
    }

    private guardarTareas() {
        localStorage.setItem('tareas', JSON.stringify(this.tareas))
    }
}