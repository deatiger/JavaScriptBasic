function namedFunc(message) {
    console.log(message)
}

const arrowFunc = (message) => {
    console.log(message)
}

const oneLineArrowFunc = (message) => console.log(message);

namedFunc('名前付き関数です。');
arrowFunc('アロー関数です。');
oneLineArrowFunc('関数内の処理がシンプルなら1行で書けます。');