const radius = document.querySelector("#radius");
const volume_result = document.querySelector("#volume-result");
const solve_btn = document.querySelector("#solve-btn");

solve_btn.onclick = (evt) => {
  const pi = Math.PI;
  volume_result.innerHTML = ((4 / 3) * pi * radius.value ** 3).toFixed(2);
};
