// Stolen from https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var SenseError = function(args) {
    // If the message was omitted, save the name of the Error class as the message
    if (typeof args === 'object' && args !== null) {
        this.message = args.message === undefined ? this.constructor.name : args.message;
        this.details = args.details;
    } else if (typeof args === 'string') {
        this.message = args;
    }
    this.stack = (new Error()).stack;
};
SenseError.prototype = Object.create(Error.prototype);
SenseError.prototype.constructor = SenseError;
SenseError.prototype.toString = function() { return this.constructor.toString(); };
SenseError.toString = function() { return this.name; };

module.exports = SenseError;
