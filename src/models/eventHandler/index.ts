export default interface EventHandler {
    headers: HeaderEvent;
    path: string;
    pathParameters: any;
    requestContext: EventRequestContext;
    resource: string;
    httpMethod: string;
    queryStringParameters: any;
    stageVariables: any;
    body: string;
    isOffline: boolean;
    methodArn?: string;
}

interface HeaderEvent {
    'Content-Type': string;
    'cache-control': string;
    'Postman-Token': string;
    'User-Agent': string;
    Accept: string;
    Host: string;
    'accept-encoding': string;
    'content-length': string;
    Connection: string;
    authorizationToken: string;
}

interface EventIdentity {
    cognitoIdentityPoolId: string;
    accountId: string;
    cognitoIdentityId: string;
    caller: string;
    apiKey: string;
    sourceIp: string;
    cognitoAuthenticationType: string;
    cognitoAuthenticationProvider: string;
    userArn: string;
    userAgent: string;
    user: string;
}

interface EventRequestContext {
    accountId: string;
    resourceId: string;
    apiId: string;
    stage: string;
    requestId: string;
    identity: EventIdentity,
    authorizer: EventAuthorizer,
    protocol: string;
    resourcePath: string;
    httpMethod: string;
}

interface EventAuthorizer {
    principalId: string;
    claims: any
}