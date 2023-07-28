const axis_a = document.querySelector('#A-axis')
const axis_b = document.querySelector('#B-axis')
const axis_c = document.querySelector('#C-axis')
const volume_result = document.querySelector('#volume-result')
const area_result = document.querySelector('#area-result')
const pi = Math.PI
const solve_btn = document.querySelector('#solve-btn')

solve_btn.onclick = () => {
    const _A_axis = parseFloat(axis_a.value)
    const _B_axis = parseFloat(axis_b.value)
    const _C_axis = parseFloat(axis_c.value)

    getVolume(_A_axis, _B_axis, _C_axis)
    getArea(_A_axis, _B_axis, _C_axis)
}

function getVolume(_A_axis, _B_axis, _C_axis) {
    const volume_value = (4/3) * pi * _A_axis * _B_axis * _C_axis

    volume_result.innerHTML = volume_value.toFixed(4)
}

function getArea(_A_axis, _B_axis,  _C_axis) {
  const exponent = 1.6;
  const term1 = Math.pow(_A_axis, exponent) * Math.pow(_B_axis, exponent);
  const term2 = Math.pow(_A_axis, exponent) * Math.pow(_C_axis, exponent);
  const term3 = Math.pow(_B_axis, exponent) * Math.pow(_C_axis, exponent);

  const surfaceArea = 4 * pi * Math.pow((term1 + term2 + term3) / 3, 1 / exponent);
  area_result.innerHTML = surfaceArea.toFixed(4)
}