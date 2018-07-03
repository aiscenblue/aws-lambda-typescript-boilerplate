import {Secret, sign} from "jsonwebtoken";
import Nonce from "../nonce/index";

interface IJWTClaims {
    iat: number;
    exp: number;
    alg: string;
    payload: object;
}

export interface IJWTAuthenticator {
    verify(token: string, signature: string): Promise<boolean>;
    sign(): JWTFormat;
}

interface JWTFormat {
    token: string;
    signature: string;
}

export default class JWTAunthenticator implements IJWTAuthenticator, IJWTClaims {
    private _iat: number = Math.floor(Date.now() / 1000) - 30;
    private _exp: number = Math.floor(Date.now() / 1000) + (60 * 60);
    private _alg: string;
    private _payload: object;

    public constructor(alg: string = "RS256", payload: object) {
        this._alg = alg;
        this._payload = payload;
    }

    sign(): JWTFormat {
        const signature: Secret = new Nonce(128, "*").generate();
        return {
            token: sign({
                    iat: this._iat, alg: this._alg,
                    exp: this._exp, algorithm:
                    this._alg, payload: this._payload
                },
                signature
            ),
            signature: signature
        };
    }

    verify(token: string, signature: string): Promise<boolean> {
        return Promise.resolve(true);
    }

    get iat(): number {
        return this._iat;
    }

    set iat(value: number) {
        this._iat = value;
    }
    get exp(): number {
        return this._exp;
    }

    set exp(value: number) {
        this._exp = value;
    }
    get alg(): string {
        return this._alg;
    }

    set alg(value: string) {
        this._alg = value;
    }
    get payload(): object {
        return this._payload;
    }

    set payload(value: object) {
        this._payload = value;
    }
}