import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
	cartItems: Array<any>;
	subscription: Subscription;

	constructor(private cartService: CartService) {}

	ngOnInit(): void {
		this.subscription = this.cartService.cartProducts$.subscribe((products) => {
			this.cartItems = products;
		});
	}
}
