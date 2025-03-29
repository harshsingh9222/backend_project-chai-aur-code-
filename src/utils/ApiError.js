class ApiError extends Error{
    constructor(statusCode,
        message='Something went wrong',
        errors=[],
        stack=''
    )
    {
        super(message);
        this.statusCode=statusCode;
        this.errors=errors;
        this.message=message;
        this.data=null//read about this in node js
        this.success=false;

        if(stack){
            this.stack=stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export {ApiError}




// class ApiError extends Error {
//     /**
//      * Creates an instance of ApiError.
//      *
//      * @param {number} statusCode The HTTP status code.
//      * @param {string} message The error message.
//      * @param {boolean} [isOperational=true] Indicates if the error is operational (trusted error).
//      * @param {string} [stack] The stack trace (optional).
//      */
//     constructor(statusCode, message, isOperational = true, stack = '') {
//         super(message);
//         this.statusCode = statusCode;
//         this.isOperational = isOperational;

//         if (stack) {
//             this.stack = stack;
//         } else {
//             Error.captureStackTrace(this, this.constructor);
//         }
//     }

//     /**
//      * Factory method for creating a 400 Bad Request error.
//      * @param {string} message The error message.
//      * @returns {ApiError}
//      */
//     static badRequest(message) {
//         return new ApiError(400, message);
//     }

//     /**
//      * Factory method for creating a 401 Unauthorized error.
//      * @param {string} message The error message.
//      * @returns {ApiError}
//      */
//     static unauthorized(message) {
//         return new ApiError(401, message);
//     }

//     /**
//      * Factory method for creating a 403 Forbidden error.
//      * @param {string} message The error message.
//      * @returns {ApiError}
//      */
//     static forbidden(message) {
//         return new ApiError(403, message);
//     }

//     /**
//      * Factory method for creating a 404 Not Found error.
//      * @param {string} message The error message.
//      * @returns {ApiError}
//      */
//     static notFound(message) {
//         return new ApiError(404, message);
//     }

//     /**
//      * Factory method for creating a 500 Internal Server error.
//      * @param {string} message The error message.
//      * @returns {ApiError}
//      */
//     static internal(message) {
//         return new ApiError(500, message);
//     }
// }

// module.exports = ApiError;