const length = document.querySelector("#length");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const volume_result = document.querySelector("#volume-result");
const area_result = document.querySelector("#area-result");
const diagonal_result = document.querySelector("#diagonal-result");
const solve_btn = document.querySelector("#solve-btn");

solve_btn.onclick = (evt) => {
  const volume_value = length.value * width.value * height.value;
  const area_value =
    2 * (
      length.value * width.value +
      width.value * height.value +
      height.value * length.value
    );
  const diagonal_value = Math.sqrt(
    length.value ** 2 + width.value ** 2 + height.value ** 2
  );

  volume_result.innerHTML = volume_value;
  area_result.innerHTML = area_value;
  diagonal_result.innerHTML = diagonal_value.toFixed(4);
};
