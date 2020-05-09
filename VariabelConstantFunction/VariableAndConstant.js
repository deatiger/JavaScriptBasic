let message = 'let変更前';
message = 'let変更後';
console.log(message)

const constantMessage = 'const変更前';
constantMessage = 'const変更後';    // 定数には値を代入できないのでエラーとなる
console.log(constantMessage)

const constantArray = [1, 2, 3];
constantArray.push(4);
console.log(constantArray)
