export interface ResponseInterface {
    statusCode: number;
    body?: object | string | undefined;
    headers?: object | string | undefined;
    message?: string;
    isBase64Encoded: boolean;
}