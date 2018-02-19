import { Component } from '@angular/core';
import { Input } from '@angular/core';

/**
 * Generated class for the ListCoinsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-coins',
  templateUrl: 'list-coins.html',
})
export class ListCoins {


  @Input() item = [];
  @Input() favoriteItems = JSON.parse(localStorage.getItem('favoriteCoins'));

  constructor() {
  }

  toogleFavoriteCoin(ev: any) {
    if (this.favoriteItems == null || this.favoriteItems.indexOf(ev) == -1) {
      ev.checked = true;
      this.favoriteItems.push(ev);
    } else {
      ev.checked = false;
      this.removeCoin(this.favoriteItems, ev.Name)
    }
    localStorage.setItem('favoriteCoins', JSON.stringify(this.favoriteItems));
  }

  removeCoin(array, value) {
    array.forEach(function (result, index) {
      if (result['Name'] === value) {
        array.splice(index, 1);
      }
    });
  }

}
