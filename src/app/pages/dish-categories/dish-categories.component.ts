import { Component, OnInit } from '@angular/core';
import {
	DishCategories,
	DishCategoriesService,
} from './dish-categories.service';
@Component({
	selector: 'app-dish-categories',
	templateUrl: './dish-categories.component.html',
	styleUrls: ['./dish-categories.component.scss'],
})
export class DishCategoriesComponent implements OnInit {
	dishCategoriesList: DishCategories;

	orderCount = {};

	constructor(private dishCategoriesService: DishCategoriesService) {}

	ngOnInit(): void {
		this.getDishCategories();
	}

	getDishCategories(): void {
		this.dishCategoriesService.fetchDishCategories().subscribe((res) => {
			this.dishCategoriesList = res[0];
			console.log(this.dishCategoriesList);
		});
	}

	handleIncrementCount(id): void {
		if (this.orderCount[id]) {
			this.orderCount[id]++;
		} else {
			this.orderCount[id] = 1;
		}
		this.dishCategoriesService.increment();
	}

	handleDecrementCount(id): void {
		if (this.orderCount[id] > 0) {
			this.orderCount[id]--;
			this.dishCategoriesService.decrement();
		}
	}
}
