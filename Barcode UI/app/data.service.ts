import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Customer } from './customer';

@Injectable()
export class DataService {


  
  private customersUrl = 'api/barcodes';  // URL to web API
  private _base_url = 'http://localhost:8080/';

  constructor(private http: Http) { }

  // Get all customers
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this._base_url +this.customersUrl)
               .toPromise()
               .then(response => response.json() as Customer[])
               .catch(this.handleError);
  }

  deleteCustomer(id: number): Promise<any> {
    console.log("delete function called");
      return this.http.delete(this._base_url +this.customersUrl+'/'+id)
        .toPromise()
        .catch(this.handleError);
    }
  private handleError(error: any): Promise<any> {
   console.error('Error Occured', error); // for demo purposes only
    return Promise.reject(error.message || error)
    .catch(console.error('Error Occured', error));
  }


}
