const baseEdge = document.querySelector('#base-edge')
const height = document.querySelector('#height')
const solve_btn = document.querySelector('#solve-btn')
const volume_result = document.querySelector('#volume-result')
const area_result = document.querySelector('#area-result')

solve_btn.onclick = () => {
    const base_edge = parseFloat(baseEdge.value)
    const _height = parseFloat(height.value)

    getVolume(base_edge, _height)
    getArea(base_edge, _height)
}

function getVolume(a, h) {
    // a = base edge
    // h = height
    const volume_value =((3 * Math.sqrt(3)) / 2) * a**2 * h
    volume_result.innerHTML = volume_value.toFixed(4)
}

function getArea(a, h) {
    // a = base edge
    // h = height
    const area_value = 6 * a * h + 3 * Math.sqrt(3) * a**2
    area_result.innerHTML = area_value.toFixed(4)
}