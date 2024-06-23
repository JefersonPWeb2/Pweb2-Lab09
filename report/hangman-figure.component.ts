import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalabrasService } from '../servicios/palabras.service';

@Component({
  selector: 'app-hangman-figure',
  templateUrl: './hangman-figure.component.html',
  styleUrls: ['./hangman-figure.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HangmanFigureComponent {
  @Input() intentos: number = 0;

  constructor(public palabrasService: PalabrasService) {}

  getImageUrl(): string {
    const imageNumber = 9 - this.palabrasService.intentos;
    return `assets/hangman/${imageNumber}.png`;
  }
}
