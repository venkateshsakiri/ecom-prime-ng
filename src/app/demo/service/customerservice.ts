import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../domain/customer';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return this.http.get<any>('assets/demo/data/customers-small.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/demo/data/customers-medium.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersLarge() {
        return this.http.get<any>('assets/demo/data/customers-large.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    public postEntitlements(req:any){
        return this.http.post(environment.baseUrl+'/api/user/entitlements',req);
    }

    public getEntitlements(){
        return this.http.post(environment.baseUrl+'/api/user/get-entitlements',{role:'CUSTOMER'});
    }

}
