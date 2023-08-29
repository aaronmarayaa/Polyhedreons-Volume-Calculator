const volume_result = document.querySelector('#volume-result')
const area_result = document.querySelector('#area-result')
const solve_btn = document.querySelector('#solve-btn')
const pi = Math.PI

solve_btn.onclick = () => {
    const radius = parseFloat(document.querySelector('#radius').value)
    const height = parseFloat(document.querySelector('#height').value)

    getVolume(radius, height)
    getArea(radius, height)
}

function getVolume(r, h) {
    // r = radius
    // h = height

    const volume_value = (2/3) * pi * r**2 * h
    volume_result.innerHTML = volume_value.toFixed(4)
}

function getArea(r, h) {
    // r = radius
    // h = height
    
    const a = Math.sqrt(h * (2 * r - h)) // sphere cap radius
    const area_value = pi * r * ( 2 * h + a )
    area_result.innerHTML = area_value.toFixed(4)
}