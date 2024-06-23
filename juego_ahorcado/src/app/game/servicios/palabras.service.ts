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
    'aureo',
    'electroencefalografista',
    'anticonstitucionalidad',
    'desoxirribonucleótido',
    'ventrílocuo',
    'otorrinolaringologo',
    'paralelepipedo'
  ];

  palabraActual: string = ''; 
  palabraOculta: string[] = []; //es para mostrar las letras si se adivinan :D
  intentos: number = 9; 

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
    this.intentos = 9;
    this.intentosCambio.next(this.intentos);
  }

  adivinar(letra: string) {
    let acierto = false;
    for (let i = 0; i < this.palabraActual.length; i++) {
      if (this.palabraActual[i] === letra) {
        this.palabraOculta[i] = letra;
        acierto = true;
      }
    }
    if (!acierto) {
      this.intentos--;
      this.intentosCambio.next(this.intentos);
    }
  }
  

  juegoTerminado(): boolean {
    return this.intentos <= 0 || this.palabraOculta.join('') === this.palabraActual;
  }
}