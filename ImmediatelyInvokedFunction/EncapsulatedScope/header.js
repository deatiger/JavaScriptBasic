const headerModule = (() => {
    let counter = 0;
    return {
        countUp: () => {
            counter += 1
            console.log("現在のカウントは", counter)
        },
        selectMenu: () => {
            console.log("ヘッダーのメニューが選択されました！")
        }
    }
})();
