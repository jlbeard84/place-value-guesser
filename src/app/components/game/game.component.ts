import { Component, OnInit } from '@angular/core';
import { GameState } from '../../models';
import { GameLogicService } from '../../services';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    public gameState: GameState;
    public guessValue: string;

    constructor(
        private gameLogicService: GameLogicService) {
    }

    public ngOnInit(): void {
        this.gameState = this.gameLogicService.initializeGameState(5);
    }

    public onGuess(): void {
        this.gameLogicService.addGuess(this.guessValue, this.gameState);
        this.guessValue = '';
    }
}
