const exceptionType = {
    unhandledException:{
        code: 200,
        message: "Unhandled exception",
        httpStatus: 500
    },
    notFound:{
        code: 300,
        message: "Not found",
        httpStatus: 404
    },
    
    // code of users 100
    users : {
        invalidPassword: {
            code: 100,
            message: "Credenciales incorrectas",
            httpStatus: 401
        },
        cannotCreateUser: {
            code: 101,
            message: "User can not be created",
            httpStatus: 500
        },
        notFound: {
            code: 102,
            message: "User not found",
            httpStatus: 404
        },
        userExists: {
            code: 103,
            message: "El usuario ya se encuentra registrado",
            httpStatus: 400
        },
    },
    database: {
        entity: {
            canNotBeCreated:{
                code: 400,
                message: "Can not be create entity",
                httpStatus: 500
            }
        }
    }
}

module.exports = {
    exceptionType
}