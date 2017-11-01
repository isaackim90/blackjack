import {async,ComponentFixture,  TestBed } from '@angular/core/testing';
import { BlackjackComponent } from './blackjack.component';

describe('BlackjackComponent', () => {
      let component: BlackjackComponent;
      let fixture: ComponentFixture < BlackjackComponent > ;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BlackjackComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlackjackComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('Should have two players', () => {
		expect(component.player && component.dealer).toBeDefined;
	});

	it('Should give two cards to player', () => {
		expect(component.player.hand.length).toEqual(2);
	});

	it('Player should be able to hit', () => {
		component.playerHit();
		expect(component.player.hand.length).toEqual(3);
	});

	it('Dealer should be able to hit', () => {
		spyOn(component, "dealerHit");
		component.stay();
		expect(component.dealerHit).toHaveBeenCalled();
	});

	it('Player should bust', () => {
		while (component.player.points <= 21) {
		component.playerHit();
		}
		expect(component.player.bust).toBe(true);
	});

	it('Should notify if blackjack occurs', () => {
		component.player.softPoints = 21;
		component.checkBlackjack();
		expect(component.console).toEqual('Black Jack! Winner, winner, chicken dinner!')
	});

	it('Should push if tie', () => {
		component.player.softPoints = 20;
		component.dealer.softPoints = 20;
		component.player.points = 20;
		component.dealer.points = 20;
		component.comparePoints();
		expect(component.console).toEqual('Push.');
	});

	it('Player staying should trigger dealer', () => {
		spyOn(component, "dealerHit");
		component.stay();
		expect(component.dealerHit).toHaveBeenCalled();
	});

});
