import AWSConfiguration from "../../config/AWSConfig";
import {Callback, Context, Handler} from "aws-lambda";
import EventHandler from "../../models/eventHandler";
import {ResponseInterface} from "../../http/responseInterface";
import ResponseHandler from "../../http/ResponseHandler";
import AuthenticationRequest from "../../http/request/authenticationRequest";
import {authenticationConstraints} from "../../http/validationConstraints";
import validate from "validate.js";
import StatusCode from "../../enums/statusCode";
import StatusMessage from "../../enums/statusMessage";
import HttpMethod from "../../enums/httpMethod";

new AWSConfiguration();

const home: Handler = async (event: EventHandler, context: Context, callback: Callback): Promise<ResponseInterface> => {
    const responseHandler: ResponseHandler = new ResponseHandler(StatusCode.BadRequest, undefined, StatusMessage.authenticationFailed, {});
            try {
                if (event.httpMethod === HttpMethod.get) {
                    responseHandler.message = "Welcome!"
                } else if (event.httpMethod === HttpMethod.post && event.body) {
                    const params = JSON.parse(event.body);
                    const validator = validate(params, authenticationConstraints);
                    if(!validator) { // parameter validations
                        const authenticationRequest: AuthenticationRequest = params;
                        responseHandler.headers = {"randomId": ";kajdsflkj"};
                        responseHandler.body = authenticationRequest;
                        responseHandler.statusCode = StatusCode.Ok;
                        responseHandler.message = StatusMessage.authenticated;
                    } else {
                        responseHandler.body = validator;
                        responseHandler.statusCode = StatusCode.BadRequest;
                        responseHandler.message = StatusMessage.parameterFailed;
                    }
                } else {
                    responseHandler.message = StatusMessage.requestNotFound
                }
            } catch(err) {
                responseHandler.body = err;
                responseHandler.statusCode = StatusCode.InternalServerError;
                responseHandler.message = StatusMessage.serverError;
            }
    return responseHandler.send()
};

export { home };