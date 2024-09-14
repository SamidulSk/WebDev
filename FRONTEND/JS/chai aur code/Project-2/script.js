const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')
    const suggestion = document.querySelector("#suggestions")
    let bmi; // Declare bmi variable here

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "please give a valid height";
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "please give a valid weight";
    }
    else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi} </span>`; //result
    }

    if (bmi < 18.6) {
        suggestion.innerHTML = "You are underweight"
    }
    else if (bmi >= 18.6 && bmi < 24.9) {
        suggestion.innerHTML = "Wow!! You are in the normal range of BMI"
    }
    else if(bmi>=24.9) {
        suggestion.innerHTML = "You are overweight"
    }
})
