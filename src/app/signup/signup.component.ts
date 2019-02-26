import { Component, OnInit } from '@angular/core';
import { user } from '../classes/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user_id:number;
  user_name:string="";
  password:string="";
  address:string="";
  mobile_no:string="";
  gender_arr:string[]=["Male","Female"];
  gender:string="Male";
  city_arr:string[]=["Ahmedabad","Surat","Vadodara","Rajkot","Morbi","Mahesana","Patan"]
  city:string="";
  type_arr:string[]=["user","Admin"];
  type:string="";
  user_arr:user[]=[];
  hide:boolean=true;
  email_id:string;
  flag:boolean=false;
  constructor(private _user:UserService,private _route:Router) { }

  ngOnInit() {

  }

    addform(){}
    oncancel(){
      this._route.navigate(['menu/manageuser']);
    }
    onaddUser()
    {
      this._user.addUser(new user(this.email_id,this.password,this.user_name,this.address,this.mobile_no,this.gender,this.city,this.user_id)).subscribe(
        (data:any)=>{
          this.user_arr.push(new user(this.email_id,this.password,this.user_name,this.address,this.mobile_no,this.gender,this.city,this.user_id));
          console.log(data);
          alert('record addee succesfully');
          this._route.navigate(['usermenu/userhome']);
        }
      );
       }
  }


