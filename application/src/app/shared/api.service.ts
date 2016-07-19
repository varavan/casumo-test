/*
    This service is mean to provide an interface to fetch books from Http Resource
 */

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BookType } from './type.book';
import { FilterModel } from  './model.filter';
import { SortModel } from  './model.sort';

@Injectable()
export class ApiService {

    private booksUrlResource = 'http://localhost:3000/books/';  // URL to web API

    constructor(private http:Http) {
    }

    private extractData(res: Response) {
        let data = res.json();

        return data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


    getBooks (page: number, filter: FilterModel, sort: SortModel): Observable<BookType[]> {

        let url = this.booksUrlResource + String(page);

        return this.http.get(url, { search: this.makeParams(filter, sort) })
            .map(this.extractData)
            .catch(this.handleError);
    }

    makeParams(filter: FilterModel, sort: SortModel)
    {
        // construct url search params
        let params: URLSearchParams = new URLSearchParams();

        if(sort.sort !== null){
            params.set('sort',  sort.sort);
        }

        if(filter.type !== null){
            params.set(filter.type, filter.value);
        }

        return params;
    }

}
