import { Component } from '@angular/core';
import { EncabezadoComponent } from './encabezado.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
