import { GameLogicService } from './game-logic.service';

describe('GameLogicService', () => {
    let service: GameLogicService;

    beforeEach(() => { service = new GameLogicService(); });

    it('#initializeGameState should create a new answer', () => {
        const testDigits = 5;
        const result = service.initializeGameState(testDigits);

        expect(result.answer.length).toBe(testDigits);
        expect(result.gameDigits).toBe(testDigits);
        expect(result.guesses.length).toBe(0);
        expect(result.isComplete).toBe(false);
    });
});
