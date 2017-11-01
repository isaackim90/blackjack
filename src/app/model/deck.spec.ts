import { Deck } from './deck';

describe('Deck', () => {
    let deck: Deck;
    let deck2: Deck;

    it('Should contain 52 cards', () => {
        deck = new Deck();
        expect(deck.cards.length).toBe(52);
    });

    it('Should be random', () => {
        deck = new Deck();
        deck2 = new Deck();
        expect(deck).not.toEqual(deck2);
    });

});