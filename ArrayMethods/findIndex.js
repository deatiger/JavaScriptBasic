const objectArray = [
    { id: "hoge", text: "fuga" },
    { id: "foo",  text: "bar"  },
    { id: "fiz",  text: "buzz" }
];

const index = objectArray.findIndex(object => {
    return object.id === 'hoge'
})

console.log(index, objectArray[index])
//  0, Array [{ id: "hoge", text: "fuga" }]