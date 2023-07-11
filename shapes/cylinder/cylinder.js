const radius = document.querySelector("#radius");
const height = document.querySelector("#height");
const volume_result = document.querySelector("#volume-result");
const surfaceArea_result = document.querySelector("#surfaceArea-result");
const pi = Math.PI;
const solve_btn = document.querySelector("#solve-btn");

solve_btn.onclick = (evt) => {
    const heightValue = parseFloat(height.value);
    const radiusValue = parseFloat(radius.value);

    getVolume(radiusValue, heightValue);
    getSurfaceArea(radiusValue, heightValue);
}

function getVolume(_radius, _height) {
    const volume_value = (pi * (_radius ** 2)) * _height;
    volume_result.innerHTML = volume_value.toFixed(4);
}

function getSurfaceArea(_radius, _height) {
    const surfaceArea_value = (2 * pi * _radius * _height) + (2 * pi * (_radius ** 2));
    surfaceArea_result.innerHTML = surfaceArea_value.toFixed(4);
}