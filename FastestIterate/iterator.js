// 初期化
const arr = new Array(10000000).fill(0).map((v, i) => i);
let sum = 0 | 0;

// #1 for
const len = arr.length | 0;
for (let j = 0; j < 5; j++) {
    sum = 0 | 0;
    console.time('for');
    for (let i = 0 | 0; i < len; i++) {
        sum += arr[i];
    }
    console.timeEnd('for');
    console.log(sum);
}

// #2 for of
for (let i = 0; i < 5; i++) {
    sum = 0 | 0;
    console.time('for of');
    for (const v of arr) {
        sum += v;
    }
    console.timeEnd('for of');
    console.log(sum);
}

// #3-1 forEach(arrow)
for (let i = 0; i < 5; i++) {
    sum = 0 | 0;
    console.time('forEach(arrow)');
    arr.forEach(v => {
        sum += v;
    });
    console.timeEnd('forEach(arrow)');
    console.log(sum);
}

// #3-2 forEach(pre-defined function)
function addSum(v) {
    sum += v;
}
for (let i = 0; i < 5; i++) {
    sum = 0 | 0;
    console.time('forEach(function)');
    arr.forEach(addSum);
    console.timeEnd('forEach(function)');
    console.log(sum);
}

// #4-1 map(arrow)
for (let i = 0; i < 5; i++) {
    sum = 0 | 0;
    console.time('map(arrow)');
    arr.map(v => sum += v);
    console.timeEnd('map(arrow)');
    console.log(sum);
}

// #4-2 map(pre-defined function)
for (let i = 0; i < 5; i++) {
    sum = 0 | 0;
    console.time('map(function)');
    arr.map(addSum);
    console.timeEnd('map(function)');
    console.log(sum);
}

// #5-1 Typed for
for (let j = 0; j < 5; j++) {
    sum = 0 | 0;
    console.time('Typed for');
    for (let i = 0 | 0; i < len; i=(i+1)|0) {
        sum += arr[i];
    }
    console.timeEnd('Typed for');
    console.log(sum);
}
