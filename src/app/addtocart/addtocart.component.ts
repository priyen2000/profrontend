import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../service/addtocart.service';
import { Addcart } from '../classes/cart';
import { ProductserviceService } from '../service/productservice.service';
import { catpro } from '../classes/catpro';
import { product } from '../classes/product';
import { CartService } from '../service/cart.service';
import { cartpro } from '../classes/cartpro';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
user_id:number;
fk_user_id:number;
cart_arr:Addcart[]=[];
cat_pro_arr:catpro[]=[];
qty:number[]=[];
price:number[]=[];
i:number;
tot:number[]=[];
noarr:number[]=[1,2,3,4,5,6,7,8];
product_arr:product[]=[];
  pro_name:string="";
  pro_img:string="";
  pro_color:string="";
  pro_soh:number;
  pro_price:number;
  pro_mfg:string="";
  pro_desc:string="";
  fk_cat_id:number;
  cartpro_arr:cartpro[]=[];
  total:number=0;
  constructor(private _addcart:AddtocartService,private _product:ProductserviceService,private _cart:CartService) { }
  oncheck(){

  }
  onchange(item,i){
this.total=0;
    this.tot[i]=item.pro_price*this.qty[i];
    for(let i=0;i<this.tot.length;i++)
    {
      this.total+=this.tot[i];
    }
    }
  ondelete(item,i){
    this.total=this.total-this.tot[i];
    this.tot.splice(i,1);
    this.price.splice(i,1);
    this.qty.splice(i,1);
    this.cartpro_arr.splice(this.cartpro_arr.indexOf(item),1);
    this._cart.deleteCart(item).subscribe(
      (data:any)=>{
        this.cart_arr.splice(this.cart_arr.indexOf(item),1);
      }
    );


  }
  ngOnInit() {
    // for(this.i=1;this.i<=10;this.i++)
    // {
    //     this.noarr.push(this.i);
    // }
    this.user_id=parseInt(localStorage.getItem('user_id'));
  this._addcart.getAllCartByUser_id(this.user_id).subscribe(
  (data:Addcart[])=>{
    this.cart_arr=data;

    console.log(this.cart_arr);
    for(this.i=0;this.i<=data.length;this.i++){
      this.qty.push(1);
    }



  }
);

this._addcart.getAllCart().subscribe(
  (data:Addcart[])=>{
    this.cart_arr=data;
    this.fk_user_id=data[0].fk_user_id;
    console.log(this.cart_arr);
    console.log(this.fk_user_id);
    this._cart.getAllCartByProid(this.fk_user_id).subscribe(
      (data:cartpro[])=>{
        console.log(data);
        this.cartpro_arr=data;
        this.pro_name=data[0].pro_name;
        this.pro_img=data[0].pro_img;
        this.pro_price=data[0].pro_price;
        this.pro_soh=data[0].pro_soh;

        for(this.i=0;this.i<data.length;this.i++){
            this.tot.push(data[this.i].pro_price);
           this.total+=data[this.i].pro_price;
          }

      }
    );
  }
);

// this._product.getAllProduct().subscribe(
//   (data:product[])=>{
//     this.product_arr=data;
//     console.log(data);

//   }
// );

  }

}
