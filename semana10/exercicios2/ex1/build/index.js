"use strict";
var personName = process.argv[2];
var personAge = process.argv[3];
var sevenYearsAge = (7 + +personAge).toString();
console.log("Ola, " + personName + "! Voce tem " + personAge + " anos. Em sete anos voce tera " + sevenYearsAge);
