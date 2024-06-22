import { Injectable } from '@angular/core';

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
    this.palabraActual = this.getPalabraAleatoria(); 
  }

  adivinar(letra: string) {
  }

  juegoTerminado(): boolean {
    return false; 
  }
}