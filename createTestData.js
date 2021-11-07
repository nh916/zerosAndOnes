// first set of test data
let str = '';

for (let i = 0; i < 50; i++) {
    str = str.concat("1");
}
for (let i = 0; i < 50; i++) {
    str = str.concat("0");
}

// second set of test data
let secondStr = '';

for (let i = 0; i < 101; i++) {
    if (i % 2 === 0) {
        secondStr = secondStr.concat("0");
    }
    else {
        secondStr = secondStr.concat("1");
    }
}
