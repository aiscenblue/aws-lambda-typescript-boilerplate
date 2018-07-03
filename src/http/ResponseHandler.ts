import {ResponseInterface} from "./responseInterface";

export default class ResponseHandler implements ResponseInterface {

    private _body: object | string | undefined;
    private _message: string;
    private _statusCode: number;
    private _headers: object | string | undefined;
    private _isBase64Encoded: boolean = false;

    constructor(
        statusCode: number,
        body: object | string | undefined,
        message: string,
        headers: object | string | undefined
    ) {
        this.statusCode = statusCode;
        this.body = body;
        this.message = message;
        this._headers = headers
    }

    get statusCode(): number {
        return this._statusCode;
    }

    set statusCode(value: number) {
        this._statusCode = value;
    }
    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;

    }
    get body(): object | string | undefined {
        return this._body;
    }

    set body(value: object | string | undefined) {
        this._body = value;
    }

    get headers(): object | string | undefined {
        return this._headers;
    }

    set headers(value: object | string | undefined) {
        this._headers = value;
    }

    get isBase64Encoded(): boolean {
        return this._isBase64Encoded;
    }

    set isBase64Encoded(value: boolean) {
        this._isBase64Encoded = value;
    }

    public send(): ResponseInterface {
        return {
            statusCode: this.statusCode,
            body: JSON.stringify(Object.assign({}, { body: this.body, message: this.message } )),
            headers: this.headers,
            isBase64Encoded: false
        }
    }
}