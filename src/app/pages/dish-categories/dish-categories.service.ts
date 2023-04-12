import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishCategoriesService {

  constructor(private httpClient: HttpClient) { }

  count:number=0;
  private subject = new Subject<number  >();

  /**
   * fetch the list of dishes categories
   */
  fetchDishCategories(): Observable<any> {
    return this.httpClient.get<DishCategories>(`${environment.BASE_API_URL}/5dfccffc310000efc8d2c1ad`)
      .pipe(
        tap((data) => { },
          (error: any) => throwError(error)
        )
      );
  }


  increment(){
    this.count++; 
    this.subject.next(this.count);
  }

  decrement(){
    if(this.count >0){
      this.count--;
      this.subject.next(this.count);
    }
  }

  getCount(): Observable<any> {
    return this.subject.asObservable();
}
}


export interface DishCategories {
  restaurant_id: string;
  restaurant_name: string;
  restaurant_image: string;
  table_id: string;
  table_name: string;
  branch_name: string;
  nexturl: string;
  table_menu_list: Tablemenulist[];
}

interface Tablemenulist {
  menu_category: string;
  menu_category_id: string;
  menu_category_image: string;
  nexturl: string;
  category_dishes: Categorydish[];
}

interface Categorydish {
  dish_id: string;
  dish_name: string;
  dish_price: number;
  dish_image: string;
  dish_currency: string;
  dish_calories: number;
  dish_description: string;
  dish_Availability: boolean;
  dish_Type: number;
  nexturl: string;
  addonCat: AddonCat[][];
}

interface AddonCat {
  addon_category: string;
  addon_category_id: string;
  addon_selection: number;
  nexturl: string;
  addons: Addon[];
}

interface Addon {
  dish_id: string;
  dish_name: string;
  dish_price: number;
  dish_image: string;
  dish_currency: string;
  dish_calories: number;
  dish_description: string;
  dish_Availability: boolean;
  dish_Type: number;
}