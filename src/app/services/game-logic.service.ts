import { Injectable } from '@angular/core';

import { GameState, Guess } from '../models';

@Injectable()
export class GameLogicService {

    public initializeGameState(digits: number): GameState {
        const gameState = new GameState();
        gameState.answer = this.createAnswer(digits);
        gameState.guesses = [];
        gameState.isComplete = false;
        gameState.gameDigits = digits;

        return gameState;
    }

    public addGuess(guessValue: string, gameState: GameState): void {
        if (guessValue.length !== gameState.answer.length) {
            return;
        }

        const guessValueArray = guessValue.split('');

        const newGuess = new Guess();
        newGuess.guessValue = guessValue;
        newGuess.correctPlaces = this.getPlaceValueMatches(guessValueArray, gameState);
        newGuess.correctDigits = this.getDigitMatches(guessValueArray, gameState);

        gameState.guesses.unshift(newGuess);

        if (newGuess.correctDigits === gameState.gameDigits) {
            gameState.isComplete = true;
        }
    }

    private createAnswer(digits: number): string[] {
        const min = Math.ceil(0);
        const max = Math.floor(9);

        const answer: string[] = [];

        for (let i = 0; i < digits; i++) {
            const answerDigit = Math.floor(Math.random() * (max - min + 1)) + min;
            answer.push(answerDigit.toString());
        }

        return answer;
    }

    private getDigitMatches(guessValueArray: string[], gameState: GameState): number {
        let matches: number = 0;

        const uniqueValueDigits = guessValueArray.filter(this.distinctFilter);
        const uniqueAnswerDigits = gameState.answer.filter(this.distinctFilter);

        value_loop:
        for (const uniqueValueDigit of uniqueValueDigits) {
            for (const uniqueAnswerDigit of uniqueAnswerDigits) {
                if (uniqueValueDigit === uniqueAnswerDigit) {
                    matches++;
                    continue value_loop;
                }
            }
        }

        return matches;
    }

    private getPlaceValueMatches(guessValueArray: string[], gameState: GameState): number {
        let matches: number = 0;

        for (let i = 0; i < guessValueArray.length; i++) {
            if (guessValueArray[i] === gameState.answer[i]) {
                matches++;
            }
        }

        return matches;
    }

    private distinctFilter = (value: string, index: number, self: string[]) => {
        return self.indexOf(value) === index;
    }
}
