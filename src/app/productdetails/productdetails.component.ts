import { Component, OnInit } from '@angular/core';
import { category } from '../classes/category';
import { product } from '../classes/product';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductserviceService } from '../service/productservice.service';
import { catpro } from '../classes/catpro';
import { Addcart } from '../classes/cart';
import { AddtocartService } from '../service/addtocart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  pro_cat_arr:catpro[]=[];
  product_arr:product[]=[];
    pro_name:string="";
    pro_img:string="";
    pro_color:string="";
    pro_soh:number;
    pro_qty:number=1;
    pro_price:number;
    pro_mfg:string="";
    pro_desc:string="";
    fk_cat_id:number;
    pro_id:number;
    flag:boolean=false;
    tot:number=0;
    qty_arr:number[]=[];
    price_arr:number[]=[];
product_arr1:catpro[]=[];
user_id:number;
addcart_arr:Addcart[]=[];
  constructor(private _cart:AddtocartService,private _acroute:ActivatedRoute,private _product:ProductserviceService,private _route:Router) { }

  onclick(){}
  oncancel(){
    this._route.navigate(['usermenu/userhome']);
  }
  onAddToCart(item){
    if(this.flag==true){
      alert("Already exists");
    }
    else
    {
      this.user_id=parseInt(localStorage.getItem('user_id'));
      console.log(this.user_id);
      this._cart.InsertCart(new Addcart(this.user_id,this.pro_id,this.pro_qty,this.pro_price)).subscribe(
        (data:any)=>
        {
          this.addcart_arr.push(new Addcart(this.user_id,this.pro_id,this.pro_qty,this.pro_price));
          console.log(data);

          alert("Item added into cart");
          this._route.navigate(['usermenu/addtocart']);
         }
      );
         this.flag=true;
    // this.product_arr1.push(item);
    // this.qty_arr.push(1);
    // this.price_arr.push(item.pro_price);
    // this.tot=this.tot+item.pro_price;
    }
  }
  ngOnInit() {
    this._acroute.params.subscribe(
      (x:Params)=>{
        this.pro_id=x['pro_id'];

    this._product.getProductById(this.pro_id).subscribe(
      (data:product[])=>{
        this.product_arr=data;
        console.log(data);
       // console.log(this.y);
        this.pro_id=data[0].pro_id;
        this.pro_name=data[0].pro_name;
        this.pro_price=data[0].pro_price;
        this.pro_mfg=data[0].pro_mfg;
        this.pro_soh=data[0].pro_soh;
        this.pro_img=data[0].pro_img;
        this.pro_color=data[0].pro_color;
        this.pro_desc=data[0].pro_desc;
        this.fk_cat_id=data[0].fk_cat_id;
  this._product.getCatByIdNotIn(this.fk_cat_id,this.pro_id).subscribe(
    (data:catpro[])=>{
    this.pro_cat_arr=data;
    console.log(data);
      }
  )
  });
}
);
}
  }


