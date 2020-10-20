var value = true;
console.log(value);
value=false;
console.log(value);

if (value) {
    console.log('will execute')
} else {
    console.log('wont execute')
}

var bool1 = new Boolean("");
var bool2 = new Boolean(0);
var bool3 = new Boolean(undefined);
var bool4 = new Boolean(null);
var bool5 = new Boolean(NaN);
var bool6 = new Boolean("Some text");
var bool7 = new Boolean(1);

// 1 to 5 false, 6 to 7 true
console.log(bool1);
console.log(bool2);
console.log(bool3);
console.log(bool4);
console.log(bool5);
console.log(bool6);
console.log(bool7);