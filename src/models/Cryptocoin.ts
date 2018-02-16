import {Deserializable} from "./deserializable.model";

export class CryptoCoin implements Deserializable<CryptoCoin> {
    FullName: string = "";
    Name: string = "";
    ImageUrl: string = "";
    EUR: number = 0;
    USD: number = 0;
    BRL: number = 0;
    BTC: number = 0;

    constructor(name: string, fullName: string) {
        this.FullName = name;
        this.Name = name;
    }

    deserialize(input: any): CryptoCoin {
        Object.assign(this, input);
        return this;
      }
}