import { Guess } from './guess.model';

export class GameState {
    public guesses: Guess[] = [];
    public answer: string[] = [];
    public isComplete: boolean = false;
    public gameDigits: number;
}
