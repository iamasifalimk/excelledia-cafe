import { Injectable } from '@angular/core';
import {  BehaviorSubject, Subject } from 'rxjs';


@Injectable({
	providedIn: 'root',
})
export class CartService {
  
  public cartProducts$: BehaviorSubject<any> = new BehaviorSubject([]);

	constructor() {}

  setCartProducts(data) {
    this.cartProducts$.next(data);
  }

  

}
