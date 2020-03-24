//https://learn.javascript.ru/custom-errors

//task //https://learn.javascript.ru/task/format-error
class FormatError  extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError('The formating error');

alert(err.message);
alert(err.name);
alert(err.stack);

alert(err instanceof FormatError);
alert(err instanceof SyntaxError);