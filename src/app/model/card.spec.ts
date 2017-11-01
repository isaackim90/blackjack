import { Card } from './card';

describe('Card', () => {
    let card: Card;

    it('Ace Should have value of 11', () => {
        card = new Card('A', 'Heart');
        expect(card.getValue()).toBe(11);
    });

    it('King Should have value of 10', () => {
        card = new Card('K', 'Heart');
        expect(card.getValue()).toBe(10);
    });

});