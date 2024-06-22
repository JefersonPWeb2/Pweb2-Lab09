import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  private palabras: string[] = [
    'alexandra',
    'paul',
    'joao',
    'esternocleidomastoideo',
  ];

  palabraActual: string = ''; 
  palabraOculta: string[] = [];
  intentos: number = 6; 

  intentosCambio = new Subject<number>();

  constructor() {
    this.nuevaPalabra();
  }

  getPalabras(): string[] {
    return this.palabras;
  }

  getPalabraAleatoria(): string {
    return this.palabras[Math.floor(Math.random() * this.palabras.length)];
  }

  nuevaPalabra() {
    this.palabraActual = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraOculta = Array(this.palabraActual.length).fill('_');
    this.intentos = 6;
    this.intentosCambio.next(this.intentos);
  }

  adivinar(letra: string) {
  }

  juegoTerminado(): boolean {
    return false; 
  }
}