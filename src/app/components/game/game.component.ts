import { Component, OnInit } from '@angular/core';
import { GameState, Guess } from 'src/app/models';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    public gameState: GameState;
    public guessValue: string;

    public ngOnInit(): void {
        this.gameState = new GameState();
    }

    public onGuess(): void {
        const newGuess = new Guess();
        newGuess.guessValue = this.guessValue;
        this.gameState.guesses.unshift(newGuess);
        this.guessValue = '';
    }
}