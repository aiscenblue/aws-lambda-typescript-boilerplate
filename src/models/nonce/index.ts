import crypto from "crypto";

export default class Nonce {
    private _charsetType: string = '*';
    private _randomByteArray: any;
    private _numericCharset: string = '0123456789';
    private _alphabetCharset: string = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz';
    private _specialCharacterCharset: string = '-._~@#$%^&*()!=';
    private _charset: string;

    public constructor(byteSize: number, charsetType: string) {
        this.charsetType = charsetType;
        this.setRandomByteArray(byteSize);
    }

    public generate(): string {
        let nonceData: Array<string> = [];
        this.randomByteArray.forEach((byte: any) => nonceData.push(this._charset[byte % this._charset.length]));
        return nonceData.join('')
    }

    setRandomByteArray(size: number): void {
        this._randomByteArray = crypto.randomBytes(size);
    }

    get randomByteArray(): Array<Buffer> {
        return this._randomByteArray;
    }

    set randomByteArray(value: Array<Buffer>) {
        this._randomByteArray = value;
    }
    get specialCharacterCharset(): string {
        return this._specialCharacterCharset;
    }
    get alphabetCharset(): string {
        return this._alphabetCharset;
    }
    get numericCharset(): string {
        return this._numericCharset;
    }
    get charsetType(): string {
        return this._charsetType;
    }
    set charsetType(value: string) {
        if(value === "*") {
            this._charset = this._numericCharset + this._alphabetCharset + this._specialCharacterCharset
        } else if(value === "numeric") {
            this._charset = this._numericCharset;
        } else if (value === "alphabet") {
            this._charset = this._alphabetCharset;
        } else {
            this._charset = this._numericCharset + this._alphabetCharset + this._specialCharacterCharset
        }
        this._charsetType = value;
    }
}