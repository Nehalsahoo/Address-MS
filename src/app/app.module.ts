import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { ViewAddressComponent } from './address/view-address/view-address.component';
import { DeleteAddressComponent } from './address/delete-address/delete-address.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateAddressComponent } from './address/update-address/update-address.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddAddressComponent,
    ViewAddressComponent,
    DeleteAddressComponent,
    UpdateAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
