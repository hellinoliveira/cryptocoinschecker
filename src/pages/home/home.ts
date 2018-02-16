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
  favoriteItems = [];
  favoriteCoins = "";
  data: any;
  page = 0;
  perPage = 10;
  showFavorites = false;
  showAll = true;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getPaginatedCoins();
  }

  getSomeInfo() {
    this.restProvider.getSome().subscribe(
      data => {
        this.data = data;
      }
    )
  }

  doInfinite(): Promise<any> {
    this.page = this.page + 1;
    this.restProvider.getAllCoinsData(this.page, this.perPage)
      .then(data => {
        this.data = data;
      });
    return new Promise((resolve) => {
      setTimeout(() => {
        this.setCoinList();
        resolve();
      }, 500);
    })
  }

  getAllCoins() {
    this.restProvider.getAllCoinsData(this.page, this.perPage)
      .then(data => {
      });
  }

  getPaginatedCoins() {

    this.restProvider.getAllCoinsData(this.page, this.perPage)
      .then(data => {
        this.data = data;
        this.setCoinList();
      });
    return new Promise((resolve) => {
      resolve();
    })
  }

  setCoinList() {
    if (this.data != undefined) {
      for (let i = 0; i < this.data.Data.length; i++) {
        let coin = this.data.Data[i].CoinInfo;
        coin['value'] = this.getSingleCoinPrice(coin.Name);
        this.items.push(coin);
      }
    }
  }

  getSingleCoinPrice(name) {
    let coin = {};
    this.restProvider.getSinglePrice(name)
      .then(data => {
        if (name !== 'BTC')
          coin['BTC'] = '$. ' + data['BTC'];

        coin['BRL'] = 'R$ ' + data['BRL'];
        coin['USD'] = 'U$ ' + data['USD'];
        coin['EUR'] = 'E$ ' + data['EUR'];
      });

    return coin;
  }

  filterCoins(ev: any) {
    // Reset items back to all of the items
    // this.items = [];

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    this.page = 0;
    this.perPage = 100;
    this.getPaginatedCoins();

    this.perPage = 10;
  }

  onSegmentChanged(ev: any) {
    this.showAll = !this.showAll;
    this.showFavorites = !this.showFavorites;
    this.favoriteItems = JSON.parse(localStorage.getItem('favoriteCoins'));
  }

  // toogleFavoriteCoin(ev: any) {
  //   if (this.favoriteItems == null || this.favoriteItems.indexOf(ev) == -1) {
  //     this.favoriteItems.push(ev);
  //   } else {
  //     this.removeCoin(this.favoriteItems, ev.Name)
  //   }
  //   localStorage.setItem('favoriteCoins', JSON.stringify(this.favoriteItems));
  // }

  // removeCoin(array, value) {
  //   array.forEach(function (result, index) {
  //     if (result['Name'] === value) {
  //       array.splice(index, 1);
  //     }
  //   });
  // }
}