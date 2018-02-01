import { CryptoCoin } from './Cryptocoin';

export class AllCoins {

    coins: CryptoCoin[] = [];

    constructor(){
        this.coins.push(new CryptoCoin('ETH', 'Ethereum'));
        this.coins.push(new CryptoCoin('BTC', 'Bitcoin'));
        this.coins.push(new CryptoCoin('VEN', 'Venchain'));
    }

    getCoins(){
        return this.coins;
    }

}