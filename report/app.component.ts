import { Component } from '@angular/core';
import { GameBoardComponent } from './game/game-board/game-board.component';
import { HangmanFigureComponent } from './game/hangman-figure/hangman-figure.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [GameBoardComponent, HangmanFigureComponent]
})
export class AppComponent {
  title = 'Juego Ahorcado';
  intentos: number = 9;
}
