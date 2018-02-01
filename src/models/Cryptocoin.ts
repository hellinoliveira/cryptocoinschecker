export class CryptoCoin {
    name: string = "";
    token: string = "";
    euroValue: number = 0;
    usdValue: number = 0;
    brlValue: number = 0;

    constructor(token: string, name: string) {
        this.name = name;
        this.token = token;
    }
}