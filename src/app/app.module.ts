import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {SlideshowModule} from 'ng-simple-slideshow';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule,MatDatepickerModule,MatDatepickerToggle,MatDatepickerToggleIcon,MatButtonModule,MatCheckboxModule,MatProgressSpinnerModule,MatCardModule,MatSortModule,MatPaginatorModule,MatInputModule,MatTableModule,MatFormFieldModule,MatIconModule, MatSelect, MatOptionModule, MatSelectModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatMenuModule,MatRadioModule} from '@angular/material';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RepairComponent } from './repair/repair.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BillComponent } from './bill/bill.component';
import { AddbillComponent } from './addbill/addbill.component';
import { BilldetailComponent } from './billdetail/billdetail.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { UserComponent } from './user/user.component';
import { AdminupdateComponent } from './adminupdate/adminupdate.component';
import { RepairorderComponent } from './repairorder/repairorder.component';
import { RepairupdateComponent } from './repairupdate/repairupdate.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { OfferComponent } from './offer/offer.component';
import { AddrepairComponent } from './addrepair/addrepair.component';
import { SignupComponent } from './signup/signup.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EdituserprofileComponent } from './edituserprofile/edituserprofile.component';
import { MyrepairingComponent } from './myrepairing/myrepairing.component';
import { ChangepassComponent } from './changepass/changepass.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    UpdateCategoryComponent,
    ProductComponent,
    AddproductComponent,
    MenuComponent,
    UpdateproductComponent,
    HomepageComponent,
    LoginComponent,
    OrderComponent,
    RepairComponent,
    ForgetpasswordComponent,
    BillComponent,
    AddbillComponent,
    BilldetailComponent,
    AdminprofileComponent,
    UserupdateComponent,
    ManageuserComponent,
    UserComponent,
    AdminupdateComponent,
    RepairorderComponent,
    RepairupdateComponent,
    UserhomeComponent,
    UsermenuComponent,
    ProductdetailsComponent,
    AddtocartComponent,
    OfferComponent,
    AddrepairComponent,
    SignupComponent,
    ViewprofileComponent,
    EdituserprofileComponent,
    MyrepairingComponent,
    ChangepassComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    SlideshowModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
