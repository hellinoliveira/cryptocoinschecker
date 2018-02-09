// import { HttpSender } from './../../services/HttpSender';
import { Component, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CryptoCoin } from './../../models/Cryptocoin';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];
  data: any;

  @Output()
  currentCoin: CryptoCoin = new CryptoCoin('BTC', 'Bitcoin');
  coins: CryptoCoin[] = [];
  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    // for (let i = 0; i < 30; i++) {
    //   this.items.push(this.items.length);
    // }
    // this.updatePage();
    // this.getAllCoins();
    // this.getUsers();
    this.doInfinite();
  }

  // doInfinite(infiniteScroll) {
  //   console.log('Begin async operation');

  //   setTimeout(() => {
  //     for (let i = 0; i < 30; i++) {
  //       this.items.push(this.items.length);
  //     }

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 500);
  // }

  doInfinite(): Promise<any> {
    this.restProvider.getAllCoinsData()
      .then(data => {
        this.data = data;
      });
    return new Promise((resolve) => {
      setTimeout(() => {
        for (let i = 0; i < this.data.Data.length; i++) {
          this.getSingleCoinPrice(this.data.Data[i].CoinInfo.Name);
          this.items.push(this.data.Data[i].CoinInfo);
        }
        resolve();
      }, 500);
    })
  }

  // getUsers() {
  //   this.restProvider.getUsers()
  //     .then(data => {
  //       this.users = data;
  //       console.log(this.users);
  //     });
  // }
  updatePage() {
    this.restProvider.getSingleData(this.currentCoin)
      .then(data => {
        this.currentCoin.brlValue = data['BRL'];
        this.currentCoin.usdValue = data['USD'];
        this.currentCoin.euroValue = data['EUR'];
      });
  }

  getAllCoins() {
    this.restProvider.getAllCoinsData()
      .then(data => {
      });
  }

  getSingleCoinPrice(coin)
  {
    this.restProvider.getSinglePrice(coin)
    .then(data => {
      console.log(data);
    }); 
  }

}
