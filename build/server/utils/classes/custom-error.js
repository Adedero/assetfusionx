"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    data;
    constructor(message, error, data = {}) {
        super();
        if (error instanceof Error) {
            this.message = `${message}: ${error.message}`;
            this.cause = error.cause;
            this.name = error.name;
            this.stack = error.stack;
        }
        else {
            this.message = String(error);
        }
        this.data = data;
    }
}
exports.default = CustomError;
