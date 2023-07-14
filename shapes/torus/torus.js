const minor_radius = document.querySelector("#minor-radius");
const major_radius = document.querySelector("#major-radius");
const area_result = document.querySelector("#area-result");
const volume_result = document.querySelector("#volume-result");
const pi = Math.PI;
const solve_btn = document.querySelector("#solve-btn");

solve_btn.onclick = (evt) => {
  const minorRadius = parseFloat(minor_radius.value);
  const majorRadius = parseFloat(major_radius.value);

  if (minorRadius >= majorRadius) {
    volume_result.innerHTML = "R > r";
    area_result.innerHTML = "R > r";

    return;
  }

  getVolume(minorRadius, majorRadius);
  getArea(minorRadius, majorRadius);
};

function getVolume(minorRadius, majorRadius) {
  const volume_value = (pi * minorRadius ** 2) * (2 * pi * majorRadius);
  volume_result.innerHTML = volume_value.toFixed(4);
}

function getArea(minorRadius, majorRadius) {
  const area_value = (2 * pi * majorRadius) * (2 * pi * minorRadius);
  area_result.innerHTML = area_value.toFixed(4);
}
