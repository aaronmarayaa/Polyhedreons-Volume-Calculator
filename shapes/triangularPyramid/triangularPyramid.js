const volume_result = document.querySelector('#volume-result')
const solve_btn = document.querySelector('#solve-btn')

solve_btn.onclick = () => {
    const height = parseFloat(document.querySelector('#height').value)
    const base = parseFloat(document.querySelector('#base').value)
    const length = parseFloat(document.querySelector('#length').value)

    getVolume(height, base, length)
}

function getVolume(h, b, l) {
    // h = height
    // b = base
    // l = length

    const volume_value = (1 / 2) * (b * h * l)
    volume_result.innerHTML = volume_value.toFixed(4)
}