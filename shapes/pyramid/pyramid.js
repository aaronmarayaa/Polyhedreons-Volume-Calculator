const length = document.querySelector('#length')
const width = document.querySelector('#width')
const height = document.querySelector('#height')
const volume_result = document.querySelector('#volume-result')
const area_result = document.querySelector('#area-result')
const solve_btn = document.querySelector('#solve-btn')

solve_btn.onclick = () => {
    const _length = parseFloat(length.value)
    const _width = parseFloat(width.value)
    const _height = parseFloat(height.value)

    getVolume(_length, _width, _height)
    getArea(_length, _width, _height)
}

function getVolume(l, w, h) {
    // l = length
    // w = width
    // h = height

    const volume_value = (l * w * h) / 3
    volume_result.innerHTML = volume_value.toFixed(4)
}

function getArea(l, w, h) {
    // l = length
    // w = width
    // h = height

    const term1 = Math.sqrt((w / 2)**2 + h**2) 
    const term2 = Math.sqrt((l / 2)**2 + h**2)
    const volume_value = l * w + l * (term1 + w * term2)

    area_result.innerHTML = volume_value.toFixed(4)
}