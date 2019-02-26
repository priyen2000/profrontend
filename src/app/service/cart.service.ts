import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Addcart } from '../classes/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:string="http://localhost:3000/cart/";
  private cartbyproid:string="http://localhost:3000/cartbyproid/";

  constructor(private _http:HttpClient) { }
  getAllCart() {
    return this._http.get(this.cart);
  }
  getAllCartByProid(fk_user_id:number) {
    return this._http.get(this.cartbyproid+fk_user_id);
  }
  deleteCart(item:Addcart)
   {
    let header1=new HttpHeaders().set('Content-type','application/json');
    return this._http.delete(this.cart+item.cart_id,{headers:header1});
  }
}
