const form = document.querySelector("form");
// this usecase give you empty value
const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  //   console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a vaild height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a vaild weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show result
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is <span>${bmi}</span> , you are underweight.`;
    } else if (24.9 > bmi > 18.6) {
      results.innerHTML = `Your BMI is <span>${bmi}</span> , you are normal weight.`;
    } else {
      results.innerHTML = `Your BMI is <span>${bmi}</span> , you are overweight.`;
    }
    //  results.innerHTML = `<span>${bmi}</span>`
  }
});
