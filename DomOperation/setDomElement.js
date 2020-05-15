const setDomElementModule = (() => {
    let counter = 1;
    return {
        setInnerText: (id) => {
            const element = document.getElementById(id)
            console.log(element.innerText)
            element.innerText = 'fugaに書き換えられたよ！'
            console.log(element.innerText)
        },
        setInnerHtml: (id) => {
            const element = document.getElementById(id)
            const literal = '書き換えられたよ！'
            console.log(element.innerHTML)
            element.innerHTML = `<p id="child">HTMLごと${literal}</p>`
            console.log(element.innerHTML)
        },
        replaceImageSrc: (id) => {
            const element = document.getElementById(id)
            element.setAttribute('src', 'assets/after.jpeg')
        },
        appendChildNode: (id) => {
            const element = document.getElementById(id)
            element.insertAdjacentHTML(
                'beforeend',
                `<div>${counter}つ目の子要素だよ</div>`
                )
            counter++
        }
    }
})();