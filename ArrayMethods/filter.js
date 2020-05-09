const objectArray = [
    { id: "hoge", text: "fuga" },
    { id: "foo",  text: "bar"  },
    { id: "fiz",  text: "buzz" }
];

const result = objectArray.filter(object => {
    return object.id === 'hoge'
})

console.log(result)
// expected output Array [{ id: "hoge", text: "fuga" }]