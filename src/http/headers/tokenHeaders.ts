export default interface TokenHeaders {
    type: string;
    methodArn: string;
    resource?: string;
    path: string;
    httpMethod: string;
    headers: object;
}