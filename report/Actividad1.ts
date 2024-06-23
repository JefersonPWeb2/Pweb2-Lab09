import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalabrasService } from '../servicios/palabras.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class GameBoardComponent {
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  letrasAdivinadas: Set<string> = new Set();

  constructor(public palabrasService: PalabrasService) {}

  adivinar(letter: string) {
    this.letrasAdivinadas.add(letter);
    this.palabrasService.adivinar(letter.toLowerCase());
  }

  getEndMessage(): string {
    if (this.palabrasService.intentos <= 0) {
      return '¡Perdiste! La palabra era: ' + this.palabrasService.palabraActual;
    } else {
      return '¡Felicidades! Ganaste';
    }
  }

  reiniciarJuego() {
    this.letrasAdivinadas.clear();
    this.palabrasService.nuevaPalabra();
  }
}