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

  @Output()
  currentCoin: CryptoCoin = new CryptoCoin('BTC', 'Bitcoin');
  coins: CryptoCoin[] = [];
  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.updatePage();
    // this.getUsers();
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
        console.log(this.currentCoin);
      });
  }

}
