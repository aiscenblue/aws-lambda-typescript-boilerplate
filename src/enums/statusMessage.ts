enum StatusMessage {
    requestNotFound = "Request not found",
    parameterFailed = "Ohh! You have parameter error",
    serverError = "Unexpected error occured",
    parameterRequirement = "Doest not match the required api parameter",
    authenticated = "Authenticated",
    authenticationFailed = "Authentication Failed",
    generated = "Nonce generated successfully",
    nonceVerified = "One time password verified",
    nonceNotVerified = "Verification failed",
    codeExisted = "Code already exist",
    updateFailed = "Update failed",
    updateSuccess = "Successfully updated",
    registrationFailed = "Registration failed",
    registrationSuccess = "Successfully registered"
}
export default StatusMessage;