import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		children: [
			{ path: '', redirectTo: 'dish-categories', pathMatch: 'full' },
			{
				path: 'dish-categories',
				loadChildren: () =>
					import('./pages/dish-categories/dish-categories.module').then(
						(m) => m.DishCategoriesModule
					),
			},
			{
				path: 'cart',
				loadChildren: () =>
					import('./pages/cart/cart.module').then((m) => m.CartModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
