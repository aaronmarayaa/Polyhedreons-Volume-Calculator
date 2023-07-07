const inner_radius = document.querySelector("#inner-radius");
const outer_radius = document.querySelector("#outer-radius");
const height = document.querySelector("#height");
const pi = Math.PI;
const volume_result = document.querySelector("#volume-result");
const surfaceArea_result = document.querySelector("#surfaceArea-result");
const solve_btn = document.querySelector("#solve-btn");

solve_btn.onclick = (evt) => {
  getVolume();
  getSurfaceArea();
};

function getVolume() {
  volume_value =
    pi * height.value * (outer_radius.value ** 2 - inner_radius.value ** 2);

  volume_result.innerHTML = volume_value.toFixed(4);
}

function getSurfaceArea() {
  const _innerRadius = parseFloat(inner_radius.value)
  const _outerRadius = parseFloat(outer_radius.value)
  const _height = parseFloat(height.value)
  
  surfaceArea_value = (2 * pi) * (_innerRadius + _outerRadius) * ((_outerRadius - _innerRadius )+ parseFloat(height.value))

  surfaceArea_result.innerHTML = surfaceArea_value.toFixed(4)
}
