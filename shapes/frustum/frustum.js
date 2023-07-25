const pi = Math.PI
const lower_radius = document.querySelector('#lower-radius')
const upper_radius = document.querySelector('#upper-radius')
const heightId = document.querySelector('#height')
const solve_btn = document.querySelector('#solve-btn')
const volume_result = document.querySelector('#volume-result')
const area_result = document.querySelector('#area-result')

solve_btn.onclick = () => {
    const lowerRadius = parseFloat(lower_radius.value)
    const upperRadius = parseFloat(upper_radius.value)
    const height = parseFloat(heightId.value)

    getVolume(height, lowerRadius, upperRadius)
    getArea(height, lowerRadius, upperRadius)
}

function getVolume(height, lowerRadius, upperRadius) {
    const volume_value = (1/3) * pi * height * (upperRadius ** 2 + (upperRadius * lowerRadius) + lowerRadius ** 2)
    
    volume_result.innerHTML = volume_value.toFixed(4)
    
}

function getArea(height, lowerRadius, upperRadius) {
    const slantHeight = Math.sqrt(height ** 2 + (lowerRadius - upperRadius) ** 2)
    const area_value = pi * ((upperRadius ** 2 + lowerRadius ** 2) + (upperRadius + lowerRadius) * slantHeight)

    area_result.innerHTML = area_value.toFixed(4)
}