import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishCategoriesComponent } from './dish-categories.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		component: DishCategoriesComponent,
	},
];

@NgModule({
	declarations: [DishCategoriesComponent],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DishCategoriesModule {}
