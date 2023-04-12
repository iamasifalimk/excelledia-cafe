import { Component, OnInit } from '@angular/core';
import {
	DishCategories,
	DishCategoriesService,
} from './dish-categories.service';
import { CartService } from '../cart/cart.service';
@Component({
	selector: 'app-dish-categories',
	templateUrl: './dish-categories.component.html',
	styleUrls: ['./dish-categories.component.scss'],
})
export class DishCategoriesComponent implements OnInit {
	dishCategoriesList: DishCategories;

	orderCount = {};

	constructor(
		private dishCategoriesService: DishCategoriesService,
		private cartService: CartService
	) {}

	ngOnInit(): void {
		this.getDishCategories();
	}

	getDishCategories(): void {
		this.dishCategoriesService.fetchDishCategories().subscribe((res) => {
			this.dishCategoriesList = res[0];
			// handling count when coming back from cart
			if (this.cartService.cartProducts$.value.length) {
				this.cartService.cartProducts$.value.map((item) => {
					this.orderCount[item.dish_id] = item.count
				})
			}
		});
	}

	handleIncrementCount(id, dish): void {
		if (this.orderCount[id]) {
			this.orderCount[id]++;
			const currentProducts = [...this.cartService.cartProducts$.value];
			currentProducts.map((item) => {
				if (item.dish_id === id) {
					const temItem = item;
					temItem.count = this.orderCount[id];
				}
			});
			this.cartService.setCartProducts(currentProducts);
		} else {
			dish.count = 1;
			this.cartService.setCartProducts([
				...this.cartService.cartProducts$.value,
				dish,
			]);
			this.orderCount[id] = 1;
		}
		this.dishCategoriesService.increment();
	}

	handleDecrementCount(id): void {
		if (this.orderCount[id] > 0) {
			this.orderCount[id]--;
			const currentProducts = [...this.cartService.cartProducts$.value];
			currentProducts.map((item) => {
				if (item.dish_id === id) {
					const temItem = item;
					temItem.count = this.orderCount[id];
				}
			});
			this.cartService.setCartProducts(currentProducts);
			this.dishCategoriesService.decrement();
			if (this.orderCount[id] === 0) {
				const updatedProducts = this.cartService.cartProducts$.value.filter(
					(item) => item.dish_id !== id
				);
				this.cartService.setCartProducts(updatedProducts);
			}
		}
	}
}
