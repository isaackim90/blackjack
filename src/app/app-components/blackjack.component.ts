import { Component, OnInit } from '@angular/core';
import { Deck } from '../model/deck';
import { Card } from '../model/card';
import { Player } from '../model/player';

@Component({
    selector: 'blackjack',
    templateUrl: './blackjack.template.html'
})
export class BlackjackComponent implements OnInit {
    deck: Deck;
    player: Player;
    dealer: Player;
    showdown: boolean = false;
    console: string;

    ngOnInit() {
        this.deck = new Deck();
        this.player = new Player();
        this.dealer = new Player('dealer');
        this.pitchGame();
    };

    pitchGame() {
        this.dealCard(this.player);
        this.dealCard(this.dealer);
        this.dealCard(this.player);
        this.dealCard(this.dealer);
        this.checkBlackjack();
    };

    checkBlackjack() {
        if (this.player.softPoints == 21 && this.dealer.softPoints == 21) {
            this.console = 'Push.';
        }
        if (this.player.softPoints == 21) {
            this.showdown = true;
            this.dealer.count = this.dealer.softPoints;
            this.console = 'Black Jack! Winner, winner, chicken dinner!';
        };
        if (this.dealer.softPoints == 21) {
            this.showdown = true;
            this.dealer.count = 21;
            this.console = 'Dealer reveals 21. House wins.';
        };
    };

    dealCard(player) {
        let dealtCard = this.deck.cards.shift();
        this.addPoints(player, dealtCard);
        player.hand.push(dealtCard);
    };

    addPoints(player, dealtCard) {
        if (dealtCard.getValue() == 11) {
            player.showSoft = true;
            player.softPoints += 11;
            player.points += 1;
            
        } else {
            player.points += dealtCard.getValue();
            player.softPoints += dealtCard.getValue();          
        };
        if (player.softPoints > 21) {
            player.showSoft = false;
        };
    };

    playerHit() {
        let dealtCard = this.dealCard(this.player);
        if (this.player.points > 21) {
            this.player.bust = true;
            this.console = 'Dealer wins.';
        };
    };

    stay() {
        this.showdown = true;
        this.dealerHit()
    };

    dealerHit() {
        while (this.dealer.points < 17 && !(this.dealer.softPoints > 17 && this.dealer.softPoints < 21)) {
            this.dealCard(this.dealer);
        }
        this.comparePoints();
    };

    comparePoints() {
        let playerPoints = this.player.showSoft ? this.player.softPoints : this.player.points;
        let dealerPoints = this.dealer.showSoft ? this.dealer.softPoints : this.dealer.points;
        this.dealer.count = dealerPoints;
        if (playerPoints == dealerPoints) {
            this.console = 'Push.';
        } else if (playerPoints > dealerPoints || dealerPoints > 21) {
            this.console = 'Player wins!';
        } else {
            this.console = 'Dealer wins.';
        };
    };

    reset() {
        this.player.resetPlayer();
        this.dealer.resetPlayer();
        this.console = '';
        this.dealer.count = 0;
        this.showdown = false;
        this.deck = new Deck();
        this.pitchGame();
    };
    
};