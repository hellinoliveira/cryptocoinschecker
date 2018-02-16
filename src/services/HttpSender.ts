import { CryptoCoin } from '../models/Cryptocoin';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpSender {
    apiUrl = "https://min-api.cryptocompare.com/data/price?fsym=";
    url = "";

    constructor(private http: HttpClient) { }

    getSingleData(coinType: CryptoCoin) {
        if (coinType == null)
            this.url = this.apiUrl + 'BTC&tsyms=BTC,USD,EUR,BRL'
        else
            this.url = this.apiUrl + coinType.Name + '&tsyms=BTC,USD,EUR,BRL'

        return new Promise(resolve => {
            this.http.get(this.url).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

}