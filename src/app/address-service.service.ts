 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  addressURL:String = "http://localhost:8580/address";

  constructor(private http:HttpClient) {}
}
// public view-address(){
//   return this.http.get(this.addressURL+"/viewALLAddress");
// }

// public add-address(){
//   return this.http.post(this.addressURL+"/addAddress",address,{responseType:'text' as 'json'});
// }
// public update-address(){
//   return this.http.post(this.addressURL+"/updateAddress",address,{responseType:'text' as 'json'});
// }
// public delete-address(addressId){
//   return this.http.delete(this.addressURL+"/removeFromaddressById?userId="+addressId);
  
// }