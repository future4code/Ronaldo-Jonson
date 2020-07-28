enum Operation {
    div = 'div',
    sub = 'sub',
    mul = 'mul',
    add = 'add'
}

const operation: String = process.argv[2];
const number1: String = process.argv[3];
const number2: String = process.argv[4];

switch(operation){
    case(Operation.add):
        console.log(+number1 + +number2);
    break;
    case(Operation.sub):
        console.log(+number1 - +number2);
    break;
    case(Operation.mul):
        console.log(+number1 * +number2);
    break;
    case(Operation.div):
        console.log(+number1 / +number2);
    break;
    default:
        console.log("can't resolve, please make sure to use a valid Operation format (add, mul, sub, div)");
    break;
}