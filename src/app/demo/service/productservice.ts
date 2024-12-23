import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../domain/product';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }

    getProducts() {
        return this.http.get<any>('assets/demo/data/products.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }

    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }

    public getAllCategories(){
        return this.http.get(environment.baseUrl+'/api/admin/category');
    }

    public addProducts(req:any){
        return this.http.post(environment.baseUrl+'/api/admin/product',req);
    }
    public getAllProducts(){
        return this.http.get(environment.baseUrl+'/api/customer/product');
    }
}
