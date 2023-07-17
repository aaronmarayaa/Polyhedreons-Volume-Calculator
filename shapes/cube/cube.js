const edge = document.querySelector("#edge");
const volume_result = document.querySelector("#volume-result");
const area_result = document.querySelector("#area-result");
const solve_btn = document.querySelector("#solve-btn");

solve_btn.onclick = (evt) => {
  volume_result.innerHTML = edge.value ** 3;
  area_result.innerHTML = 6 * edge.value ** 2;
};
