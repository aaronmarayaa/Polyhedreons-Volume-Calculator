const shortHeight = document.querySelector('#short-height')
const longHeight = document.querySelector('#long-height')
const radius = document.querySelector('#radius')
const pi = Math.PI
const volume_result = document.querySelector('#volume-result')
const solve_btn = document.querySelector('#solve-btn')

solve_btn.onclick = () => {
    const short_height = parseFloat(shortHeight.value)
    const long_height = parseFloat(longHeight.value)
    const _radius = parseFloat(radius.value)

    getVolume(short_height, long_height, _radius)
}

function getVolume(h, H, r) {
    // h = short height
    // H = long height
    // r = radius
    const volume_value = pi * r**2 * ((h + H) / 2)
    
    volume_result.innerHTML = volume_value.toFixed(4)
}