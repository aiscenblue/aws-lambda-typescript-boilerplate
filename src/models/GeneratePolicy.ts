import {AuthResponse, AuthResponseContext, DocumentPolicy, StatementOne} from "../http/policy";

// Help function to generate an IAM policy
export default class GeneratePolicy {

    private readonly _authResponse: AuthResponse;
    private _statementOne: StatementOne;
    private _policyDocument: DocumentPolicy;
    private _authResponseContext: AuthResponseContext;

    private _effect: string = 'Deny';
    private _principalId: string = 'user';

    public constructor(principalId: string, effect: string, resource: string) {
        this.principalId = principalId;
        this._authResponse = { principalId: this.principalId };
        this.effect = effect;

        if(!!this.effect && !!resource) {
            this.policyDocument = {
                Version: '2012-10-17',
                Statement: []
            };
            this.statementOne = {
                Action: 'execute-api:Invoke',
                Effect: this.effect,
                Resource: resource
            };
            this.policyDocument.Statement[0] = this.statementOne;
            this._authResponse.policyDocument = this.policyDocument
        }

        this.authResponseContext = {
            "stringKey": "stringval",
            "numberKey": 123,
            "booleanKey": true
        };
    }

    set policyDocument(value: DocumentPolicy) {
        this._policyDocument = value;
    }

    get statementOne(): StatementOne {
        return this._statementOne;
    }

    get authResponseContext(): AuthResponseContext {
        return this._authResponseContext;
    }
    get policyDocument(): DocumentPolicy {
        return this._policyDocument;
    }

    set statementOne(value: StatementOne) {
        this._statementOne = value;
    }

    get authResponse(): AuthResponse {
        return this._authResponse;
    }

    set authResponseContext(value: AuthResponseContext) {
        this._authResponseContext = value;
    }

    get principalId(): string {
        return this._principalId;
    }

    set principalId(value: string) {
        this._principalId = value;
    }
    get effect(): string {
        return this._effect;
    }

    set effect(value: string) {
        this._effect = value;
    }

};