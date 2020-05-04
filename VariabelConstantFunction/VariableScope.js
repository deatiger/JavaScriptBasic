const testScope = (scope) => {
    if (scope === 'function') {
        var functionScope = '関数スコープ内ではどこからでも参照できます。'
    } else if (scope === 'block') {
        let blockScope = 'ブロックスコープ内でしか参照できません。'
    }
    // console.log(functionScope)
    console.log(blockScope)
}

testScope('block')