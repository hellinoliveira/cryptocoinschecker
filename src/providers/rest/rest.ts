import { Observable } from 'rxjs/Observable';
import { CryptoCoin } from './../../models/Cryptocoin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpParams } from '@angular/common/http/src/params';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiCoinListUrl = "https://min-api.cryptocompare.com/data/all/coinlist";
  apiTopVolumesUrl = "https://min-api.cryptocompare.com/data/all/coinlist";
  apiTopCoinsByTotalVol = "https://min-api.cryptocompare.com/data/top/totalvol?tsym=BTC";
  apiCoinCapCoins = "http://coincap.io/coins";
  apiUrl = "https://min-api.cryptocompare.com/data/price?fsym=";
  apiSinglePrice = "https://min-api.cryptocompare.com/data/price?fsym=";
  url = "";

  // apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {

  }

  // getUsers() {
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl + '/users').subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }


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
  
  getAllCoinsData(page, limit) {
    return new Promise(resolve => {
      this.http.get(this.apiTopCoinsByTotalVol + "&page=" + page + "&limit" + limit, {
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSinglePrice(coin) {
    return new Promise(resolve => {
      this.http.get(this.apiSinglePrice + coin + "&tsyms=BTC,USD,EUR,BRL", {
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSome(): Observable<CryptoCoin[]> {
    return this.http.get<CryptoCoin[]>(this.apiTopCoinsByTotalVol);
  }

}
