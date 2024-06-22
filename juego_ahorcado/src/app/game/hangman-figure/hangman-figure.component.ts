import { Component, OnInit } from '@angular/core';
import { PalabrasService } from '../servicios/palabras.service';

@Component({
  selector: 'app-hangman-figure',
  standalone: true,
  imports: [],
  templateUrl: './hangman-figure.component.html',
  styleUrls: ['./hangman-figure.component.css']
})
export class HangmanFigureComponent implements OnInit {
  partesCuerpo = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];

  constructor(public palabrasService: PalabrasService) {}

  ngOnInit() {
    this.palabrasService.intentosCambio.subscribe((intentosRestantes) => {
      this.actualizarCuerpo(intentosRestantes);
    });
  }

  actualizarCuerpo(intentosRestantes: number) {
    const partesAVisible = this.partesCuerpo.slice(0, 6 - intentosRestantes);
    this.partesCuerpo.forEach(parte => {
      const elemento = document.querySelector(`.body-parts .${parte}`);
      if (elemento) {
        if (partesAVisible.includes(parte)) {
          elemento.classList.remove('hidden');
          elemento.classList.add('visible');
          (elemento as HTMLElement).style.backgroundColor = '#ffffff';
        } else {
          elemento.classList.remove('visible');
          elemento.classList.add('hidden');
          (elemento as HTMLElement).style.backgroundColor = '#ffffff00';
        }
      }
    });
  }
}
