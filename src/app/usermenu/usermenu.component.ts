import { Component, OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver,private _route:Router) { }
  onOffer(){
    this._route.navigate(['usermenu/offer']);
  }
  onclick(){
    this._route.navigate(['']);
  }
  onCart(){
    this._route.navigate(['usermenu/addtocart']);
  }
  onHome(){
    this._route.navigate(['usermenu/userhome']);
  }
  onclickmenu(){}
  ngOnInit() {

  }


}
