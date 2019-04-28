import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { Product } from "./product.component";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    private productsURL = 'api/products/products.json';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsURL).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        if(err.error instanceof ErrorEvent) {
            errorMessage = 'An error occurred: ' + err.error.message;
        } else {
            errorMessage = 'Server returned code: ' + err.status + ', error message is: ' + err.message;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    }
}