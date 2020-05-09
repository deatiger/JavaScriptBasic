const torahack = 'torahack'
const charahack = 'charahack'
const regex = RegExp('tora*')

console.log(regex.test(torahack))      // true
console.log(regex.test(charahack))     // false
console.log(/chara*/.test(charahack))  // true
