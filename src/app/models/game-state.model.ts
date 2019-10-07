import { Guess } from './guess.model';

export class GameState {
    public guesses: Guess[] = [];
    public answer: string[] = [];
}