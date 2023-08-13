const base_sideA = document.querySelector('#base-sideA')
const base_sideB = document.querySelector('#base-sideB')
const base_sideC = document.querySelector('#base-sideC')
const height = document.querySelector('#height')
const volume_result = document.querySelector('#volume-result')
const solve_btn = document.querySelector('#solve-btn')

solve_btn.onclick = () => {
    const baseSide_A = parseFloat(base_sideA.value)
    const baseSide_B = parseFloat(base_sideB.value)
    const baseSide_C = parseFloat(base_sideC.value)
    const _height = parseFloat(height.value)

    getVolume(baseSide_A, baseSide_B, baseSide_C, _height)
}

function getVolume(a, b, c, h) {
    const term1 = (a + b + c )
    const term2 = (b + c - a)
    const term3 = (c + a - b)
    const term4 = (a + b - c)
    const volume_value = (1/4) * h * Math.sqrt(term1 * term2 * term3 * term4)
    
    if((a + b) <= c) volume_result.innerHTML = "(a + b) > c"
    else if((b + c) <= a) volume_result.innerHTML = "(b + c) > a"
    else if((a + c) <= b) volume_result.innerHTML = "(a + c) > b"
    else volume_result.innerHTML = volume_value.toFixed(4)
}