"use strict";
var Operation;
(function (Operation) {
    Operation["div"] = "div";
    Operation["sub"] = "sub";
    Operation["mul"] = "mul";
    Operation["add"] = "add";
})(Operation || (Operation = {}));
var operation = process.argv[2];
var number1 = process.argv[3];
var number2 = process.argv[4];
switch (operation) {
    case (Operation.add):
        console.log(+number1 + +number2);
        break;
    case (Operation.sub):
        console.log(+number1 - +number2);
        break;
    case (Operation.mul):
        console.log(+number1 * +number2);
        break;
    case (Operation.div):
        console.log(+number1 / +number2);
        break;
    default:
        console.log("can't resolve, please make sure to use a valid Operation format (add, mul, sub, div)");
        break;
}
