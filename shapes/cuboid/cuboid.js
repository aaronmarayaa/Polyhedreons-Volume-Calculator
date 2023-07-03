const length = document.querySelector("#length");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const volume = document.querySelector("#volume");
const area = document.querySelector("#area");
const diagonal = document.querySelector("#diagonal");
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

  volume.innerHTML = volume_value;
  area.innerHTML = area_value;
  diagonal.innerHTML = diagonal_value.toFixed(4);
};
