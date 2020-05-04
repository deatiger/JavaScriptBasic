// 同期処理をおこなう関数を宣言
const synchronousFunc = () => {
    console.log("これは同期処理関数内のログです。")
    return '完了！'
};

const message = '同期処理'
const result = synchronousFunc()
console.log(message + result)