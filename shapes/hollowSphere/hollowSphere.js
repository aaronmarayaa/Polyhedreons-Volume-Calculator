const outer_radius = document.querySelector("#outer-radius");
const inner_radius = document.querySelector("#inner-radius");
const solve_btn = document.querySelector("#solve-btn");
const volume_result = document.querySelector("#volume-result");

solve_btn.onclick = (evt) => {
  const pi = Math.PI;
  const volume_value = (4 / 3 * pi).toFixed(4) * (outer_radius.value ** 3 - inner_radius.value ** 3);
  volume_result.innerHTML = volume_value.toFixed(2);
};
