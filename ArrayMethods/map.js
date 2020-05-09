const array = [1, 2, 4, 8];

const resultArray = array.map(x => x * 2)

console.log(resultArray)
// expected output: Array [2, 4, 8, 16]

const object = {
    "hoge": {text: "fuga"},
    "foo":  {text: "bar" },
    "fiz":  {text: "buzz"}
};

const objectToArray = Object.keys(object).map(key => {
    const value = object[key]
    value['id'] = key
    return value
});

console.log(objectToArray);
