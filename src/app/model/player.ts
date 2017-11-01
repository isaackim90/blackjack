import { Card } from './card';

export class Player {
    
    hand: Card[] = [];
    bankroll: number;
    points: number = 0;
    softPoints: number = 0;
    showSoft: boolean = false;
    bust: boolean = false;
    count?: number;

    constructor(dealer?: string) {
        if (dealer) {
            this.count = 0;
        };
    };

    resetPlayer() {
        this.points = 0;
        this.softPoints = 0;
        this.bust = false;
        this.hand = [];
        this.showSoft = false;
    };
    
};