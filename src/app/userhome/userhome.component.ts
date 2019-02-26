import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

import { ProductserviceService } from '../service/productservice.service';
import { product } from '../classes/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  pro_arr:product[]=[];
  imageUrlArray:string[]=[
    "../../assets/logo1.jpg",
    "../../assets/logo3.jpg"
  ];
  ProductSource = new MatTableDataSource();

  constructor(private _product:ProductserviceService,private _route:Router) { }
  applyFilter(filterValue: string) {
    this.ProductSource.filter = filterValue.trim().toLowerCase();
  }

  abc(img:any)
  {
    console.log("chalyu"+img);
  }

  ngOnInit() {
    this._product.getAllProduct().subscribe(
      (data:product[])=>{
        this.pro_arr=data;
        console.log(data);

      }
    );
  }
  ondet(item)
  {
    this._route.navigate(['usermenu/prodetails',item.pro_id]);
  }
}
