import { AllCoins } from './../models/Allcoins';
import { CryptoCoin } from './../models/Cryptocoin';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpSender {
    url = "https://min-api.cryptocompare.com/data/price?fsym=";

    constructor(private http: Http, private allCoins: AllCoins) { }

    getSingleData(coinType: CryptoCoin) {
        if (coinType != null) {
            return this.http.get(this.url + coinType.token + '&tsyms=BTC,USD,EUR,BRL');
        } else {
            return this.http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,BRL');
        }

    }

}