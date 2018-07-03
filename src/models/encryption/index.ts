// import {compare, hash} from 'bcryptjs';
import crypto from "crypto";

export interface IBcrypt {
    salt: number;
    hash: any;
    plainText: any;
}

export class CBcrypt {

    payload: IBcrypt;

    public constructor(ibcrypt: IBcrypt) {
        this.payload = ibcrypt;
    }

    public compare(): boolean {
        return this.hash() === this.payload.hash;
        // return new Promise((resolve, reject) => {
            // return compare(this.payload.plainText, this.payload.hash, (err: any, result: any) => {
            //     if(err) reject(err);
            //     resolve(result)
            // })
        // })
    }

    public hash(): string {
        return crypto.createHash('md5').update(this.payload.plainText).digest("hex")
        // return new Promise((resolve, reject) => {
            // return hash(this.payload.plainText, this.payload.salt, (err: any, result: any) => {
            //     if(err) reject(err);
            //     resolve(result)
            // });
        // })
    }

}