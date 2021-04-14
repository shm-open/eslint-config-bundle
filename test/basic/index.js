import { MyFunction } from './tsmodule';

// prefer-const unused-var
let unusedVar = MyFunction();

// novar
var novar = 1;

// prettier
const arr = [1, 2,novar];

// prefer-template no-console no-undef
console.log('some string' + arr + abc);
