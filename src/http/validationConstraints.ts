const missingParameterMessage = (fieldName: string) => ({ message: `is a missing parameter` });
const patterns = {
    string: /^[A-zñ]+$/
};

export const emailConstraints = {
    email: {
        presence: missingParameterMessage("email"),
        email: { message: "invalid format" }
    },
};

export const authenticationConstraints = {
    ...emailConstraints,
    password: {
        presence: missingParameterMessage("password"),
        length: {
            minimum: 6,
            message: "Password must be at least 6 characters"
        }
    }
};

export const registrationConstraints = {
    ...authenticationConstraints,
    firstName: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("firstName")
        },
        format: {
            pattern: patterns.string,
            message: "Special characters and number value is not valid"
        }
    },
    lastName: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("lastName")
        },
        format: {
            pattern: patterns.string,
            message: "Special characters and number value is not valid"
        }
    }
};

export const otpConstraints = {
    code: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("code")
        }
    }
};

export const babyConstraints = {
    parentId: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("parentId")
        }
    },
    gender: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("gender")
        }
    },
    name: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("name")
        }
    },
    photo: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("photo")
        }
    },
    birthDate: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("birthDate")
        }
    },
    weightBirth: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("weightBirth")
        }
    },
    weeksBirth: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("weeksBirth")
        }
    },
    heightBirth: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("heightBirth")
        }
    }
};

export const parentConstraints = {
    ...emailConstraints,
    firstName: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("firstName")
        }
    },
    lastName: {
        presence: {
            allowEmpty: false,
            ...missingParameterMessage("lastName")
        }
    }
};