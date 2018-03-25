import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Quote} from '../domain/quote.module';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QuoteService {

    constructor(private  http: HttpClient, @Inject('API_URL') private apiUrl) {
    }

    getQuote(): Observable<Quote> {
        const url = `${this.apiUrl}/quotes/${Math.floor(Math.random() * 10)}`;
        return this.http.get(url)
            .map(res => res as Quote);
    }

}
