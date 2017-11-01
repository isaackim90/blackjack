import { Card } from './card';
import * as _ from 'lodash';

export class Deck {
    cards: Card[] = [];
    private numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    private suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

    constructor() {
        this.createDeck();
        this.shuffleDeck();
    };

    createDeck() {
        for (let number in this.numbers) {
            for (let suit in this.suits) {
                this.cards.push(new Card(this.numbers[number], this.suits[suit]));
            };
        };
        return this.cards;
    };
    
    shuffleDeck() {
        this.cards = _.shuffle(this.cards);
    };
};