export class Card {
    suit: string;
    value: string;
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    };

    getValue(): number {
        if (isNaN(parseInt(this.value))) {
            switch (this.value) {
                case "J":
                    return 10;
                case "Q":
                    return 10;
                case "K":
                    return 10;
                case "A":
                    return 11;      
            };
        };
        return parseInt(this.value);
    };

};