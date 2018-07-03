export interface DocumentPolicy {
    Version: string;
    Statement: Array<string | StatementOne>;
}

export interface StatementOne {
    Action?: string;
    Effect?: string;
    Resource?: string;
}

export interface AuthResponse {
    principalId: string;
    policyDocument?: DocumentPolicy;
    context?: AuthResponseContext
}

export interface AuthResponseContext {
    stringKey: string,
    numberKey: number,
    booleanKey: boolean
}