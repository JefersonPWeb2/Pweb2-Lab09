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
  ]
  constructor() { }
  
  getPalabras(): string[] {
    return this.palabras
  }
}
