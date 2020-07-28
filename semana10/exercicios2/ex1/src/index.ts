const personName: String = process.argv[2];
const personAge: String = process.argv[3];
const sevenYearsAge: string = (7 + +personAge).toString();

console.log(`Ola, ${personName}! Voce tem ${personAge} anos. Em sete anos voce tera ${sevenYearsAge}`);